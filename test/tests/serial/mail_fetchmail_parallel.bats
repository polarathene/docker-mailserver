load "${REPOSITORY_ROOT}/test/test_helper/common"

function setup_file() {
  local PRIVATE_CONFIG
  PRIVATE_CONFIG=$(duplicate_config_for_container .)

  docker run -d --name mail_fetchmail_parallel \
    -v "${PRIVATE_CONFIG}":/tmp/docker-mailserver \
    -v "$(pwd)/test/test-files":/tmp/docker-mailserver-test:ro \
    -e ENABLE_FETCHMAIL=1 \
    -e FETCHMAIL_PARALLEL=1 \
    --cap-add=NET_ADMIN \
    -h mail.my-domain.com -t "${NAME}"

  wait_for_finished_setup_in_container mail_fetchmail_parallel
}

function teardown_file() {
  docker rm -f mail_fetchmail_parallel
}

#
# fetchmail
#

@test "checking fetchmail: gerneral options in fetchmail-1.rc are loaded" {
  run docker exec mail_fetchmail_parallel grep 'set syslog' /etc/fetchmailrc.d/fetchmail-1.rc
  assert_success
}

@test "checking fetchmail: gerneral options in fetchmail-2.rc are loaded" {
  run docker exec mail_fetchmail_parallel grep 'set syslog' /etc/fetchmailrc.d/fetchmail-2.rc
  assert_success
}

@test "checking fetchmail: fetchmail-1.rc is loaded with pop3.example.com" {
  run docker exec mail_fetchmail_parallel grep 'pop3.example.com' /etc/fetchmailrc.d/fetchmail-1.rc
  assert_success
}

@test "checking fetchmail: fetchmail-1.rc is loaded without pop3-2.example.com" {
  run docker exec mail_fetchmail_parallel grep 'pop3-2.example.com' /etc/fetchmailrc.d/fetchmail-1.rc
  assert_failure
}

@test "checking fetchmail: fetchmail-2.rc is loaded without pop3.example.com" {
  run docker exec mail_fetchmail_parallel grep 'pop3.example.com' /etc/fetchmailrc.d/fetchmail-2.rc
  assert_failure
}

@test "checking fetchmail: fetchmail-2.rc is loaded with pop3-2.example.com" {
  run docker exec mail_fetchmail_parallel grep 'pop3-2.example.com' /etc/fetchmailrc.d/fetchmail-2.rc
  assert_success
}
