---
sidebar_position: 2
---

# Supported Features

### JSON Web Keys (JWK)

JWK is defined in [RFC 7517](https://tools.ietf.org/html/rfc7517).

> **NOTE**: To represent **BLS** keys this implementation refers to [draft-ietf-cose-bls-key-representations-05](https://datatracker.ietf.org/doc/html/draft-ietf-cose-bls-key-representations-05).

JWKs are currently used in the proof generation and verification of JWPs.

The tables below represent which `kty` and `crv` are supported at momement.

#### JWK Key Type

| Key Type | Support |
|:--------:|:-------:|
|   `OKP`  |    ✔    |
|   `EC`   |    ✔    |
|   `RSA`  |    ✘    |
|   `oct`  |    ✘    |


#### JWK Elliptic Curve
The standard list of Elliptic Curves can be found [here](https://www.iana.org/assignments/jose/jose.xhtml#web-key-elliptic-curve):

|  Curve Name | Support |
|:---------:|:-------:|
| `P-256` |    ✘    |
|  `P-384`  |    ✘    |
|  `P-521` |    ✘    |
|   `secp256k1`  |    ✘    |
| `Ed25519` |    ✘    |
|  `Ed448`  |    ✘    |
|  `X25519` |    ✘    |
|   `X448`  |    ✘    |


This list is made from the currenlty active draft [Barreto-Lynn-Scott Elliptic Curve Key Representations for JOSE and COSE - v05](https://datatracker.ietf.org/doc/html/draft-ietf-cose-bls-key-representations-05#section-2.2.3).

|  Curve Name | Support |
|:---------:|:-------:|
|  `BLS12381G2` |    ✔    |
|  `BLS12381G1` |    ✘    |
|  `BLS48581G2` |    ✘    |
|  `BLS48581G2` |    ✘    |

### JSON Web Proof Algorithms

The supported algorithm are defined in in the [JPA](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-proof-algorithms) specification.

> NOTE: Keep in mind that these specifications are in the early stages, and there is a high likelihood that they will undergo significant changes in the future.

#### Single Use
| Algorithm | Support | Remarks |
|:---------:|:-------:|:-------:|
|   `SU-ES256`   |    ✘    |   Named [here](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-proof-algorithms#section-6.1.10)       |



#### BBS

> **Note**: This library leverages the [ZKryptium](../zkryptium/intro) cryptographic library to perform BBS algorithm operations.

The `BBS-SHAKE256` and `BBS-SHAKE256-PROOF` values are temporary and await an update to the official draft that will define names to support  the ciphersuite  `BBS_BLS12381G1_XOF:SHAKE-256_SSWU_RO_H2G_HM2S_` specified in [BBS+](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bbs-signatures-07#name-bls12-381-ciphersuites).:

| Algorithm | Support | Remarks |
|:---------:|:-------:|:-------:|
|    `BBS`    |    ✔    |         |
|    `BBS-SHAKE256`    |    ✔    |         |
|    `BBS-PROOF`    |    ✔    |         |
|    `BBS-SHAKE256-PROOF`    |    ✔    |         |

#### MAC

These are defined [here](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-proof-algorithms#section-6.3.9):

| Algorithm | Support | Remarks |
|:---------:|:-------:|:-------:|
|    `MAC-H256`    |    ✘    |         |
|    `MAC-H384`    |    ✘    |         |
|    `MAC-H512`    |    ✘    |         |
|    `MAC-K25519`    |    ✘    |         |
|    `MAC-K448`    |    ✘    |         |
|    `MAC-H256K`    |    ✘    |         |


### JSON Web Proof Serialization

| Format         | Support |
|:----------------:|:---------:|
| Compact        |  ✔    |
| JSON   |  ✘    |