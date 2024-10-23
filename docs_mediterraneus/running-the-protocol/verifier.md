---
sidebar_position: 5
description: Expandable and customizable verifier component.
---

# Verifier

> [GitHub repository](https://github.com/Cybersecurity-LINKS/mediterraneus-verifier)

This components is an http server that executes verification procedures for the Verifier in the SSI model. It is designed to be expanded and customizable for any use case. Endpoints description is available [here](API/Verifier.mdx).

## Requirements
1. [Node](https://nodejs.org/en)
2. [Docker](https://docs.docker.com/get-docker/)

## Prepare environment
1. Create a `.env` file starting from `.env.example` and update the values accordingly to your development enviroment.

```editorconfig
# Example from .env.example
# DLT config
NODE_URL="https://api.tangle.stardust.linksfoundation.com/"

# Application
ALLOW_ORIGIN="http://localhost"
PORT=1235

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:../sql/challenges.db"
```
2. Install dependencies
```sh
npm install --save-dev
```

## Running the Application
Start the server in development mode:
```sh
npm start
```

## Deploy on Docker
The verifier repo contains a `Dockerfile` for the image and a `docker-compose.yaml` example. Update the `docker-compose.yaml` with appropriate values. Finally, build the container.
```sh
docker compose up -d
```
