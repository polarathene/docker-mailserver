#! /bin/bash

DMS_DEBUG="${DMS_DEBUG:=0}"
SCRIPT_NAME="$(basename "$0")" # This becomes the sourcing script name (Example: check-for-changes.sh)
LOCK_ID="$(uuid)" # Used inside of lock files to identify them and prevent removal by other instances of docker-mailserver

# ? --------------------------------------------- BIN HELPER

function errex
{
  echo -e "Error :: ${*}\nAborting." >&2
  exit 1
}

# Call this method when you want to panic (emit FATAL log level error and exit uncleanly).
# Appropriate when the type of error is a not recoverable,
# or needs to be very clear to the user about misconfiguration.
#
# Method is called with args:
# PANIC_SCOPE => string id to better identify/lookup script location (you choose the string).
# PANIC_TYPE => Must be one of the PANIC_ "enums" specified above the method to match a case on (reference the var, not the string).
# PANIC_INFO => Provide your own string content to insert into the error message for that PANIC_TYPE.
PANIC_NO_ENV='no-env'
PANIC_NO_FILE='no-file'
PANIC_INVALID_VALUE='invalid-value'
function dms_panic
{
  local PANIC_SCOPE=$1
  local PANIC_TYPE=$2
  local PANIC_INFO=$3

  function _shutdown_with_message
  {
    _notify 'fatal' "${PANIC_SCOPE} | ${1}"
    _shutdown
  }

  case "${PANIC_TYPE}" in
    ( "${PANIC_NO_ENV}" )
      _shutdown_with_message "ENV ${PANIC_INFO} is not set!"
    ;;
    ( "${PANIC_NO_FILE}" )
      _shutdown_with_message "File ${PANIC_INFO} does not exist!"
    ;;
    ( "${PANIC_INVALID_VALUE}" )
      _shutdown_with_message "Invalid value for ${PANIC_INFO}!"
    ;;
    ( * )
      _shutdown_with_message 'Something broke :('
    ;;
  esac
}

function escape
{
  echo "${1//./\\.}"
}

function create_lock
{
  LOCK_FILE="/tmp/docker-mailserver/${SCRIPT_NAME}.lock"
  while [[ -e "${LOCK_FILE}" ]]
  do
    _notify 'warn' "Lock file ${LOCK_FILE} exists. Another ${SCRIPT_NAME} execution is happening. Trying again shortly..."
    # Handle stale lock files left behind on crashes
    # or premature/non-graceful exits of containers while they're making changes
    if [[ -n "$(find "${LOCK_FILE}" -mmin +1 2>/dev/null)" ]]
    then
      _notify 'warn' "Lock file older than 1 minute. Removing stale lock file."
      rm -f "${LOCK_FILE}"
      _notify 'inf' "Removed stale lock ${LOCK_FILE}."
    fi
    sleep 5
  done
  trap remove_lock EXIT
  echo "${LOCK_ID}" > "${LOCK_FILE}"
}

function remove_lock
{
  LOCK_FILE="${LOCK_FILE:-"/tmp/docker-mailserver/${SCRIPT_NAME}.lock"}"
  [[ -z "${LOCK_ID}" ]] && errex "Cannot remove ${LOCK_FILE} as there is no LOCK_ID set"
  if [[ -e "${LOCK_FILE}" && $(grep -c "${LOCK_ID}" "${LOCK_FILE}") -gt 0 ]] # Ensure we don't delete a lock that's not ours
  then
    rm -f "${LOCK_FILE}"
    _notify 'inf' "Removed lock ${LOCK_FILE}."
  fi
}

# ? ––––––––––––––––––––––––––––––––––––––––––––– IP & CIDR

function _mask_ip_digit
{
  if [[ ${1} -ge 8 ]]
  then
    MASK=255
  elif [[ ${1} -le 0 ]]
  then
    MASK=0
  else
    VALUES=(0 128 192 224 240 248 252 254 255)
    MASK=${VALUES[${1}]}
  fi

  local DVAL=${2}
  ((DVAL&=MASK))

  echo "${DVAL}"
}

# Transforms a specific IP with CIDR suffix
# like 1.2.3.4/16 to subnet with cidr suffix
# like 1.2.0.0/16.
# Assumes correct IP and subnet are provided.
function _sanitize_ipv4_to_subnet_cidr
{
  local DIGIT_PREFIX_LENGTH="${1#*/}"

  declare -a MASKED_DIGITS DIGITS
  IFS='.' ; read -r -a DIGITS < <(echo "${1%%/*}") ; unset IFS

  for ((i = 0 ; i < 4 ; i++))
  do
    MASKED_DIGITS[i]=$(_mask_ip_digit "${DIGIT_PREFIX_LENGTH}" "${DIGITS[i]}")
    DIGIT_PREFIX_LENGTH=$((DIGIT_PREFIX_LENGTH - 8))
  done

  echo "${MASKED_DIGITS[0]}.${MASKED_DIGITS[1]}.${MASKED_DIGITS[2]}.${MASKED_DIGITS[3]}/${1#*/}"
}
export -f _sanitize_ipv4_to_subnet_cidr

# ? --------------------------------------------- ACME

function _extract_certs_from_acme
{
  local KEY
  # shellcheck disable=SC2002
  KEY=$(cat /etc/letsencrypt/acme.json | python -c "
import sys,json
acme = json.load(sys.stdin)
for key, value in acme.items():
    certs = value['Certificates']
    if certs is not None:
        for cert in certs:
            if 'domain' in cert and 'key' in cert:
                if 'main' in cert['domain'] and cert['domain']['main'] == '${1}' or 'sans' in cert['domain'] and '${1}' in cert['domain']['sans']:
                    print cert['key']
                    break
")

  local CERT
  # shellcheck disable=SC2002
  CERT=$(cat /etc/letsencrypt/acme.json | python -c "
import sys,json
acme = json.load(sys.stdin)
for key, value in acme.items():
    certs = value['Certificates']
    if certs is not None:
        for cert in certs:
            if 'domain' in cert and 'certificate' in cert:
                if 'main' in cert['domain'] and cert['domain']['main'] == '${1}' or 'sans' in cert['domain'] and '${1}' in cert['domain']['sans']:
                    print cert['certificate']
                    break
")

  if [[ -n "${KEY}${CERT}" ]]
  then
    mkdir -p "/etc/letsencrypt/live/${HOSTNAME}/"

    echo "${KEY}" | base64 -d >/etc/letsencrypt/live/"${HOSTNAME}"/key.pem || exit 1
    echo "${CERT}" | base64 -d >/etc/letsencrypt/live/"${HOSTNAME}"/fullchain.pem || exit 1
    _notify 'inf' "Cert found in /etc/letsencrypt/acme.json for ${1}"

    return 0
  else
    return 1
  fi
}
export -f _extract_certs_from_acme

# ? --------------------------------------------- Notifications

function _notify
{
  { [[ -z ${1:-} ]] || [[ -z ${2:-} ]] ; } && return 0

  local RESET LGREEN LYELLOW LRED RED LBLUE LGREY LMAGENTA

  RESET='\e[0m' ; LGREEN='\e[92m' ; LYELLOW='\e[93m'
  LRED='\e[31m' ; RED='\e[91m' ; LBLUE='\e[34m'
  LGREY='\e[37m' ; LMAGENTA='\e[95m'

  case "${1}" in
    'tasklog'  ) echo "-e${3:-}" "[ ${LGREEN}TASKLOG${RESET} ]  ${2}"  ;;
    'warn'     ) echo "-e${3:-}" "[ ${LYELLOW}WARNING${RESET} ]  ${2}" ;;
    'err'      ) echo "-e${3:-}" "[  ${LRED}ERROR${RESET}  ]  ${2}"    ;;
    'fatal'    ) echo "-e${3:-}" "[  ${RED}FATAL${RESET}  ]  ${2}"     ;;
    'inf'      ) [[ ${DMS_DEBUG} -eq 1 ]] && echo "-e${3:-}" "[[  ${LBLUE}INF${RESET}  ]]  ${2}" ;;
    'task'     ) [[ ${DMS_DEBUG} -eq 1 ]] && echo "-e${3:-}" "[[ ${LGREY}TASKS${RESET} ]]  ${2}" ;;
    *          ) echo "-e${3:-}" "[  ${LMAGENTA}UNKNOWN${RESET}  ]  ${2}" ;;
  esac

  return 0
}
export -f _notify

# ? --------------------------------------------- Relay Host Map

# setup /etc/postfix/relayhost_map
# --
# @domain1.com        [smtp.mailgun.org]:587
# @domain2.com        [smtp.mailgun.org]:587
# @domain3.com        [smtp.mailgun.org]:587
function _populate_relayhost_map
{
  : >/etc/postfix/relayhost_map
  chown root:root /etc/postfix/relayhost_map
  chmod 0600 /etc/postfix/relayhost_map

  if [[ -f /tmp/docker-mailserver/postfix-relaymap.cf ]]
  then
    _notify 'inf' "Adding relay mappings from postfix-relaymap.cf"
    # keep lines which are not a comment *and* have a destination.
    sed -n '/^\s*[^#[:space:]]\S*\s\+\S/p' /tmp/docker-mailserver/postfix-relaymap.cf >> /etc/postfix/relayhost_map
  fi

  {
    # note: won't detect domains when lhs has spaces (but who does that?!)
    sed -n '/^\s*[^#[:space:]]/ s/^[^@|]*@\([^|]\+\)|.*$/\1/p' /tmp/docker-mailserver/postfix-accounts.cf

    [ -f /tmp/docker-mailserver/postfix-virtual.cf ] && sed -n '/^\s*[^#[:space:]]/ s/^\s*[^@[:space:]]*@\(\S\+\)\s.*/\1/p' /tmp/docker-mailserver/postfix-virtual.cf
  } | while read -r DOMAIN
  do
    # DOMAIN not already present *and* not ignored
    if ! grep -q -e "^@${DOMAIN}\b" /etc/postfix/relayhost_map && ! grep -qs -e "^\s*@${DOMAIN}\s*$" /tmp/docker-mailserver/postfix-relaymap.cf
    then
      _notify 'inf' "Adding relay mapping for ${DOMAIN}"
      # shellcheck disable=SC2153
      echo "@${DOMAIN}    [${RELAY_HOST}]:${RELAY_PORT}" >> /etc/postfix/relayhost_map
    fi
  done
}
export -f _populate_relayhost_map

# ? --------------------------------------------- File Checksums

# file storing the checksums of the monitored files.
# shellcheck disable=SC2034
CHKSUM_FILE=/tmp/docker-mailserver-config-chksum

# Compute checksums of monitored files.
function _monitored_files_checksums
{
  (
    cd /tmp/docker-mailserver || exit 1
    exec sha512sum 2>/dev/null -- \
      postfix-accounts.cf \
      postfix-virtual.cf \
      postfix-aliases.cf \
      dovecot-quotas.cf \
      /etc/letsencrypt/acme.json \
      "/etc/letsencrypt/live/${HOSTNAME}/key.pem" \
      "/etc/letsencrypt/live/${HOSTNAME}/privkey.pem" \
      "/etc/letsencrypt/live/${HOSTNAME}/fullchain.pem"
  )
}
export -f _monitored_files_checksums

# ? --------------------------------------------- General

function _obtain_hostname_and_domainname
{
  if [[ -n "${OVERRIDE_HOSTNAME}" ]]
  then
    export HOSTNAME="${OVERRIDE_HOSTNAME}"
    export DOMAINNAME="${DOMAINNAME:-${HOSTNAME#*.}}"
    # Handle situations where the hostname is name.tld and hostname -d ends up just showing "tld"
    if [[ ! "${DOMAINNAME}" =~ .*\..* ]]
    then
      DOMAINNAME="${HOSTNAME}"
    fi
  else
    # These hostname commands will fail with "hostname: Name or service not known"
    # if the hostname is not valid (important for tests)
    HOSTNAME="$(hostname -f)"
    DOMAINNAME="${DOMAINNAME:-$(hostname -d)}"
    if [[ ! "${DOMAINNAME}" =~ .*\..* ]]
    then
      DOMAINNAME="${HOSTNAME}"
    fi
  fi
}

function _shutdown
{
  _notify 'err' "Shutting down.."
  kill 1
}
