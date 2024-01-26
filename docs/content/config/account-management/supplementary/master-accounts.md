---
title: 'Account Management | Master Accounts (Dovecot)'
---

## Introduction

A master account is able to login as any configured user. This is useful for administrative tasks like hot backups.

## Configuration

It is possible to create, update, delete and list master accounts using `setup`. See `setup help` for usage.

This feature is presently [not supported with LDAP](https://github.com/docker-mailserver/docker-mailserver/pull/2535).

## Logging in

Once a master account is configured, it is possible to connect to any users mailbox using this account.

Log in over POP3/IMAP using the following credential scheme:

- Username: `<EMAIL ADDRESS>*<MASTER ACCOUNT NAME>`
- Password: `<MASTER ACCOUNT PASSWORD>`