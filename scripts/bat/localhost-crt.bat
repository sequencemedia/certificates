@echo off
openssl x509 -req -sha512 -days 365 -extfile certificates\localhost.ext -CA certificates\certificate-authority.crt -CAkey certificates\certificate-authority.key -CAcreateserial -in certificates\localhost.csr -out certificates\localhost.crt
