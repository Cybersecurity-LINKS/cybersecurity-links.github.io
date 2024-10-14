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

0. Add the ABI source for generating contract bindings. This procedure is requested only when the contract definition changes. You just need to copy the `artifacts/contracts/IDentity.sol/Identity.json` ABI file in the `smart-contracts` directory.
Abi sources are generated in the [smart contracts repo](smart-contracts.md).

1. Create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment. 

```editorconfig
# Example from .env.example
# Rust flags
RUST_BACKTRACE=1
RUST_LOG=debug # minimum level of logging, also "info" is a possible value

# HTTP SERVER SETUP
HOST_ADDRESS=127.0.0.1 # "0.0.0.0" for deploying, "127.0.0.1" for dev
HOST_PORT=3213

# DLT CONFIG
NODE_URL="https://api.testnet.shimmer.network"
FAUCET_API_ENDPOINT="https://faucet.testnet.shimmer.network/api/enqueue"
RPC_PROVIDER="https://json-rpc.evm.testnet.shimmer.network"
CHAIN_ID=1073

# KEY STORAGE CONFIGURATION
KEY_STORAGE_STRONGHOLD_SNAPSHOT_PATH="./key_storage.stronghold"
KEY_STORAGE_STRONGHOLD_PASSWORD="some_hopefully_secure_password"
KEY_STORAGE_MNEMONIC="<key storage mnemonic>"

ISSUER_PRIVATE_KEY="<issuer_private_key>"
IDENTITY_SC_ADDRESS="<address of the Identity smart contract>"

# DATABASE CONNECTION CONFIG
DB_USER="<db_user>"
DB_PASSWORD="<db_password>"
DB_NAME="identity"
DB_HOST=<issuer db hostname> # "issuer-postgres" for deploying, "127.0.0.1 " for dev
DB_PORT=5432 # "5432" for deploying, "5433" for dev
DB_MAX_POOL_SIZE=16
```

## Running the Application

1. Start up the database by running:
```shell
docker compose --profile dev up -d
```

2. Run the issuer service
```shell
# Run command in debug mode
cd server
cargo run --profile develop
```

Sometimes it may be useful to **override** `.env` parameters using cli args. 
The complete list of parameters is available typing the `cargo run --profile develop -- --help` command

For example, it is possible to define parameters for testing on different nodes:

```shell
cd server
# For local node Provider
cargo run --profile develop -- --rpc-provider "http://127.0.0.1:8545/" --chain-id 31337

# For Shimmer Provider
cargo run --profile develop -- --rpc-provider "https://json-rpc.evm.testnet.shimmer.network" --chain-id 1073

# For Sepolia 
cargo run --profile develop -- --rpc-provider https://sepolia.infura.io/v3/<API_KEY> --chain-id 11155111
```

<!-- Keep in mind that when using the local node setup, the Identity ABI needs to be manually copied into the `abi` folder. Additionally, ensure that the file is named `idsc_abi.json`. On the other hand, when working with a public network, consider publishing the ABI and dynamically loading it through an API. -->

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

## Run everything via Docker

Beware of the configuration of the environment variables. In addition, update the `docker-compose.yaml` accordingly.
<!-- Note: Modify `.env` reasonably. (`ADDR` and `PG.HOST` *must* be changed for the deployment use case).
 (The issuer uses the Shimmer provider, change CMD command in the Dockerfile to change the network). -->

Copy the smart contract json files to create the Rust bindings (mandatory if the smart contracts change. There is already a copy in this repo). 

```bash
# assuming the mediterraneus-smart-contracts folder is located in the same root folder of mediterraneus-connector-rs
cp ../mediterraneus-smart-contracts/artifacts/contracts/Identity.sol/Identity.json ./smart-contracts
```

Commands to build the app’s container image and launch the app container:
```bash
docker compose --profile deploy up -d
```