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

0. Generate contract bindings (to be done once or if contract change)
```bash
# assuming the mediterraneus-smart-contracts folder is located in the same root folder of mediterraneus-connector-rs
cd abigen
cargo run -- --contract ServiceBase --abi-source "../../mediterraneus-smart-contracts/artifacts/contracts/ServiceBase.sol/ServiceBase.json"
```
1. In `connector-rs/env` folder, create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment. 

## Running the Application

1. Launch [IPFS desktop](https://docs.ipfs.tech/install/ipfs-desktop/) and start up the database by running:
```bash 
cd connector-rs
docker compose up -d
```
2. Run the connector service:
```bash 
cd connector-rs
cargo run --release -- --rpc-provider "http://127.0.0.1:8545/" --chain-id 31337
```