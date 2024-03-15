---
sidebar_position: 3
description: Agent system that handles user identity and assets.
---

# Connector

- [**mediterraneus-connector-rs**](https://github.com/Cybersecurity-LINKS/mediterraneus-connector-rs)

## Requirements

## Prepare environment

0. Generate contract bindings (to be done once or if contract change)
```sh
# assuming the mediterraneus-smart-contracts folder is located in the same root folder of mediterraneus-connector-rs
cd abigen
cargo run -- --contract ERC721Base --abi-source "../../mediterraneus-smart-contracts/artifacts/contracts/ERC721Base.sol/ERC721Base.json"
```
1. In `connector-rs/env` folder, create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment. 

## Running the Application

1. Launch [IPFS desktop](https://docs.ipfs.tech/install/ipfs-desktop/) and start up the database by running:
```sh
cd connector-rs
docker compose up -d
```
2. Run the connector service:
```sh
cd connector-rs
cargo run --release -- --rpc-provider "http://127.0.0.1:8545/" --chain-id 31337
```