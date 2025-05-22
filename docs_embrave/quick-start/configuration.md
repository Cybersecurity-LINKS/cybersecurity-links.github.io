---
sidebar_position: 8
description: "Configuration instructions"
---

# Configuration

## Golden values database and the exclude list database
A python script is provided to create the database of trusted values. In case of known files to be excluded in the verification, add the file or path name in the file ``./script/exclude.txt`` one per line. Then run this Python script on the Attester Agent.
```sh
sudo python3 ./scripts/goldenvalue_db_generator.py
```

If you subsequently need to add other files/paths to the exclude list, you can use the following Python script
```sh
sudo python3 ./scripts/add_excludelist.py <path/file_to_exclude>
```
## Config file
Follow the instruction in the [`config-file section`](./config-file.md) to populate the config files

TODO minimal configuration

## Verifier configuration
Copy the goldenvalue database, generated with the goldenvalue_db_generator script from the agent to `/var/embrave/verifier/whitelist/` to the Verifier. The filename is set with **whitelist_uri** field in the config file section [`[Verifier]`](./config-file.md#verifier). For example with the default name:

```sh
scp user@agent_ipd_addr:/home/<user>/embrave/goldenvalues.db /var/embrave/verifier/whitelist/goldenvalues.db
```
