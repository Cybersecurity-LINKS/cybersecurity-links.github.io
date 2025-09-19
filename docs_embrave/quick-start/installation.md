---
sidebar_position: 7
description: "Installation instructions"
---
# Installation

```sh
git clone https://github.com/Cybersecurity-LINKS/embrave
cd embrave
git submodule update --init --recursive
cd lib/tpm2-tools
git checkout 4998ecfea817cd0efdd47bdf11a02dedab51c723
git apply ../../patches/tpm2-tools/remove_print.patch
cd ../../
mkdir build
cmake -B build .
cd build
sudo make
```
In case you only want to build one component, the command is ``sudo make <target>``  with ``target`` one of the following:

- ``attester-server``: The Attester component
- ``verifier``: The Verifier component
- ``join-service``: The Join Service component


