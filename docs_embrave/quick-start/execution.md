---
sidebar_position: 10
description: "Execution instructions"
---
# Execution

## Trust Domain
First run the chosen MQTT broker e.g.
```sh
mosquitto -v
```

Run the **Join Service** 
```sh
sudo ./join_service.build/join_service
```

Run the **Verifier**
```sh
sudo ./verifier.build/verifier
```

## Attester Agent
Run the Attester Agent in the device to be attested
```sh
sudo ./agent.build/attester_server
```
