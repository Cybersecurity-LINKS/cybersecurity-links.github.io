---
sidebar_position: 6
description: "Instructions for installing the requirements"
---
# Requirements
The following dependencies must be installed:
```sh
sudo apt install git make cmake gcc libssl-dev openssl build-essential autoconf-archive libcmocka0 libcmocka-dev procps iproute2 pkg-config automake uthash-dev autoconf doxygen libjson-c-dev libini-config-dev libcurl4-openssl-dev uuid-dev libltdl-dev libusb-1.0-0-dev libftdi-dev
```
**TPM2 Software Stack (TSS):**
Install tpm2-tss software
```sh
git clone -n https://github.com/tpm2-software/tpm2-tss
cd tpm2-tss/
git checkout 4.1.3 
./bootstrap
sudo ./configure --prefix=/usr
sudo make -j8
sudo make install
sudo ldconfig
```

## Trust Domain requirements
Install a preferred MQTT broker E.g Mosquitto

```sh
sudo apt install mosquitto
```
## Attester requirements
The following dependency must be installed specifically for the Attester application.

* TPM2.0 installed
* Enabled the Linux [Integrity Measurement Architecture (IMA)](https://ima-doc.readthedocs.io/en/latest/ima-intro.html) module with _ima-ng_ template and SHA256 hash

<!-- **TPM2 Access Broker & Resource Manager:**

```sh
git clone -n https://github.com/tpm2-software/tpm2-abrmd
cd tpm2-abrmd
git checkout b2b0795796ef5588155bf43919dd4d7bf73c3a01
./bootstrap
./configure --with-dbuspolicydir=/etc/dbus-1/system.d --with-systemdsystemunitdir=/usr/lib/systemd/system --libdir=/usr/lib --prefix=/usr
sudo make -j$(nproc)
sudo make install
sudo udevadm control --reload-rules && sudo udevadm trigger
sudo systemctl daemon-reload
```
 -->
