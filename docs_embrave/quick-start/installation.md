---
sidebar_position: 7
---
# Installation

<!-- aggiungere descrizione di cosa si installa -->

```sh
git clone https://github.com/Cybersecurity-LINKS/embrave
cd embrave
git submodule update --init --recursive
cd lib/tpm2-tools
git checkout 4998ecfea817cd0efdd47bdf11a02dedab51c723
cd ../../
mkdir build
cmake -B build .
cd build
sudo make <target-name>
```
``<target-name>`` defines which targets to build:

- ``attester-server``: The Attester component
- ``verifier``: The Verifier component
- ``join-service``: The Join Service component

If the intention is to build only all components, the command is simply ``sudo make``

