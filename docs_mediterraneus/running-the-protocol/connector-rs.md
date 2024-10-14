---
sidebar_position: 4
description: Agent system that handles user identity and assets.
---

# Connector

> [GitHub repository](https://github.com/Cybersecurity-LINKS/mediterraneus-connector-rs)

## Requirements
1. [cargo](https://www.rust-lang.org/learn/get-started), with `rustc 1.74 or newer`
2. [docker](https://docs.docker.com/get-docker/)

## Prepare environment

0. Add the ABI source for generating contract bindings. This procedure is requested only when the contract definition changes. You just need to copy the `artifacts/contracts/ServiceBase.sol/ServiceBase.json` ABI file in the `smart-contracts` directory.
Abi sources are generated in the [smart contracts repo](smart-contracts.md).

1. In `connector-rs/env` folder, create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment. 

```editorconfig
RUST_BACKTRACE=1
RUST_LOG=debug # info

# HTTP SERVER CONFIG
HOST_ADDRESS=127.0.0.1 # "0.0.0.0" for deploying, "127.0.0.1" for dev
HOST_PORT=8085

# DLT CONFIG
NODE_URL="https://api.testnet.shimmer.network"
FAUCET_API_ENDPOINT="https://faucet.testnet.shimmer.network/api/enqueue"
EXPLORER_URL=""
RPC_PROVIDER="https://json-rpc.evm.testnet.shimmer.network"
CHAIN_ID=1073

# KEY STORAGE CONFIG
KEY_STORAGE_STRONGHOLD_SNAPSHOT_PATH="./key_storage.stronghold"
KEY_STORAGE_STRONGHOLD_PASSWORD="some_hopefully_secure_password"
KEY_STORAGE_MNEMONIC="grace eye hour away retire put crunch burger bracket coyote twist cherry glare collect retreat"

# DATABASE CONNECTION CONFIG
DB_USER="postgres"
DB_PASSWORD="connector"
DB_NAME="connector"
DB_HOST=127.0.0.1 # "postgres" for deploying, "127.0.0.1 " for dev
DB_PORT=5432
DB_MAX_POOL_SIZE=16

# IPFS CONFIG
IPFS_URL="http://ipfs:5001"
```

## Running the Application

1. Start up the database and IPFS by running:
```bash 
docker compose --profile dev up -d
```
2. Run the connector service:
```bash 
cd connector-rs
cargo run --profile develop
```

Sometimes it may be useful to **override** `.env` parameters using cli args. 
The complete list of parameters is available typing the `cargo run --profile develop -- --help` command

For example, it is possible to define parameters for testing on different nodes:

```bash
# For local node Provider
cargo run --release -- --rpc-provider "http://127.0.0.1:8545/" --chain-id 31337

# For Shimmer Provider
cargo run --release -- --rpc-provider "https://json-rpc.evm.testnet.shimmer.network" --chain-id 1073

# For Sepolia 
cargo run --release -- --rpc-provider https://sepolia.infura.io/v3/<API_KEY> --chain-id 11155111
```

## Run everything via Docker

Beware of the configuration of the environment variables. Note: Modify `.env` and `postgres.env` reasonably. (`ADDR` and `PG.HOST` *must* be changed for the deployment use case).
(The connector uses the Shimmer provider, change CMD command in the Dockerfile to change the network).

Copy the smart contract json files to create the Rust bindings (mandatory if the smart contracts change. There is already a copy in this repo). 

```bash
# assuming the mediterraneus-smart-contracts folder is located in the same root folder of mediterraneus-connector-rs
cp ../mediterraneus-smart-contracts/artifacts/contracts/ServiceBase.sol/ServiceBase.json ./smart-contracts
```

Commands to build the app’s container image and launch the app container:
```bash
docker compose --profile deploy up -d
```