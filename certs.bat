@echo off

if defined 1 (
  set SUBJ=%1
) else (
  set SUBJ="/C=UK/ST=England/L=Greenwich/O=Sequence Media Limited/CN=Sequence Media/emailAddress=sequencemedia@sequencemedia.net"
)

call scripts/bat/localhost-csr.bat
call scripts/bat/localhost-crt.bat
