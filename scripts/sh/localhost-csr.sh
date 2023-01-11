#!/bin/bash

if [ $# -eq 1 ];
then
  SUBJ=$1
fi

if [ -z "$SUBJ" ];
then
  SUBJ="/C=UK/ST=England/L=Greenwich/O=Sequence Media Limited/CN=Sequence Media/emailAddress=sequencemedia@sequencemedia.net"
fi

openssl req -new -nodes -newkey rsa:4096 \
  -keyout certificates/localhost.key \
  -out certificates/localhost.csr \
  -subj "$SUBJ"
