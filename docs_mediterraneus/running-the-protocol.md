---
sidebar_position: 2
---

# Running the protocol

Requirements: 
- nodejs, npm, hardhat, docker

```shell
git clone https://github.com/Cybersecurity-LINKS/mediterraneus-smart-contracts.git
cd mediterraneus-smart-contracts
npx hardhat node

```


```shell
npx hardhat --network localhost faucet 0x6d3fbD514D62E2D305e4435dDe99483f20f264BF
npx hardhat run --network hardhat-issuer scripts/deploy.js

```
