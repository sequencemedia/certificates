@echo off
openssl x509 -outform pem -in certificates/certificate-authority.pem -out certificates/certificate-authority.crt
