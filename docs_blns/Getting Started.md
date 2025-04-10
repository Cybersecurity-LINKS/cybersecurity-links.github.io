---
sidebar_position: 3
---
# Getting Started

## Requirements

- [GMP](https://gmplib.org/) 6.3.0
- [NTL](https://libntl.org/) 11.5.1
- [Falcon](https://falcon-sign.info/) 2021-11-01 (Optional)
- [Clang](https://clang.llvm.org/) 14.0.0 (Optional - necessary if Falcon is used)

NOTE: it is possible to set ```USE_FALCON = 1``` (default) in the [Makefile](https://github.com/Cybersecurity-LINKS/pqzk-blns/blob/main//Makefile), 
to automatically download and use the ```Falcon_keygen``` and ```Falcon_GSampler``` from the [Falcon](https://falcon-sign.info/) reference implementation, for better performance.

Otherwise, with ```USE_FALCON = 0``` the ```NTRU_TrapGen``` and ```GSampler``` function defined in [Lattice.cc](https://github.com/Cybersecurity-LINKS/pqzk-blns/blob/main//Lattice.cc) are used.

For installation instructions and additional information, see [INSTALL.md](https://github.com/Cybersecurity-LINKS/pqzk-blns/blob/main/Docs/INSTALL.md)

## Usage
After cloning this repository, build and run the ```BLNS``` executable as follows:
```sh
make -j$(nproc)

./BLNS
```
