---
sidebar_position: 2
description: Issuer of verifiable credentials using smart contracts to bind Externally Owned Accounts (EOAs) with Self-Sovereign Identities (SSI).
---

# Issuer

> [GitHub repository](https://github.com/Cybersecurity-LINKS/mediterraneus-issuer-rs)

## Requirements
1. [cargo](https://www.rust-lang.org/learn/get-started), with `rustc 1.74 or newer`
2. [docker](https://docs.docker.com/get-docker/)

## Prepare environment

1. Create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment. 

```editorconfig
PRIVATE_KEY='<issuer private key>'
NON_SECURE_MNEMONIC='<iota wallet mnemonic>'
KEY_STORAGE_MNEMONIC='<identity key storage mnemonic>'
IDENTITY_SC_ADDRESS='<address of the Identity smart contract>'
```

Optional:
- Update the `abi/identity_sc.json` file if there are changes to the Identity Smart Contract.

## Running the Application

1. Start up the database by running:
```shell
docker compose up -d
```

2. Run the issuer service
```shell
# For local node Provider
cargo run --release -- -l
# cargo run --release -- --custom-node http://127.0.0.1:8545/ --chain-id 31337

# For Shimmer Provider
cargo run --release 
# cargo run --release -- --custom-node https://json-rpc.evm.testnet.shimmer.network --chain-id 1072

# For custom Provider (example Sepolia)
cargo run --release -- --custom-node https://sepolia.infura.io/v3/<API_KEY> --chain-id 11155111
```

Keep in mind that when using the local node setup, the Identity ABI needs to be manually copied into the `abi` folder. Additionally, ensure that the file is named `idsc_abi.json`. On the other hand, when working with a public network, consider publishing the ABI and dynamically loading it through an API.

<!-- 
## Issuer initialization
The issuer must posses an SSI comprising of at least a DID. At application start up the issuer creates a new identity or retrieves it from the local database. 
This is an insecure implementation due to the clear-text storage of the sensitive information of its identity. This must be solved with the usage of secure storage solutions like Stronghold.

## Verifiable Credential Issuance
Before issuing a VC the Issuer must perform the following operations:

1. Resolve the requester's DID and retrieve the verification method public key. 

## Useful links
- [Actix postgres example](https://github.com/actix/examples/blob/master/databases/postgres/src/main.rs)
- [ethers-rs](https://docs.rs/ethers/latest/ethers/contract/struct.ContractInstance.html)

-->