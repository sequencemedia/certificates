# @sequencemedia/certificates

## Pre-requisites for Windows

Install the latest pre-built release of OpenSSL

### Install with an MSI

Get an MSI from the [Win32/Win64 OpenSSL Installation Project](https://slproweb.com/products/Win32OpenSSL.html) (e.g., [3.0.7](https://slproweb.com/download/Win64OpenSSL-3_0_7.msi))

### Or install with Chocolatey

```
choco install openssl
```

### Add OpenSSL to the `PATH`

An [article on Medium](https://medium.com/swlh/installing-openssl-on-windows-10-and-updating-path-80992e26f6a1) also refers to the [OpenSSL Installation Project](https://slproweb.com/products/Win32OpenSSL.html) and describes (with screenshots) how to add OpenSSL to the `PATH`

Once you have added OpenSSL to the `PATH`, open a console and at the command prompt enter `openssl version` to confirm the installation
