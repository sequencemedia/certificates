@echo off
if not defined SUBJ (
  set SUBJ="/C=UK/ST=England/L=Greenwich/O=Sequence Media Limited/CN=Sequence Media/emailAddress=sequencemedia@sequencemedia.net"
)
openssl req -new -nodes -newkey rsa:4096 -keyout certificates/localhost.key -out certificates/localhost.csr -subj %SUBJ%
