@echo off

if "%~1" == "" (
  set SUBJ=/C=UK/ST=England/L=Greenwich/O=Sequence Media Limited/CN=Sequence Media/emailAddress=sequencemedia@sequencemedia.net
) else (
  set SUBJ=%~1
)

call scripts/bat/localhost-csr.bat
call scripts/bat/localhost-crt.bat
