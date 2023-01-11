#!/bin/bash

if [ $# -eq 1 ]
then
  SUBJ=$1
fi

if [ -z "$SUBJ" ]
then
  SUBJ="/C=UK/ST=England/L=Greenwich/O=Sequence Media Limited/CN=Sequence Media/emailAddress=sequencemedia@sequencemedia.net"
fi

openssl req -x509 -nodes -new -sha512 \
  -days 365 \
  -newkey rsa:4096 \
  -keyout certificates/certificate-authority.key \
  -out certificates/certificate-authority.pem \
  -subj "$SUBJ"
