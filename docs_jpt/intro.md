---
sidebar_position: 1
---


# json-proof-token

> [GitHub](https://github.com/Cybersecurity-LINKS/json-proof-token)

**json-proof-token** is Rust library implementing the new [JOSE Working Group](https://datatracker.ietf.org/wg/jose/documents/) drafts:
- [JSON Web Proof](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-web-proof-08)
- [JSON Proof Algorithms](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-proof-algorithms-08) 
- [JSON Proof Token](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-proof-token-08)

The specification work for this can be found [here](https://github.com/json-web-proofs/json-web-proofs) and aims to establish a new JSON based container as a new entry in the JOSE family of container formats
Support for newer cryptographic techniques and new features such as:
* Selective Disclosure
* Unlinkability
* Predicates

This library, together with [ZKryptium](../zkryptium/intro), has been integrated into the [IOTA Identity Framework](https://github.com/iotaledger/identity.rs/pull/1285) to enable support for Zero-Knowledge Selective Disclosure Verifiable Credentials.

### Decoder

[Here](https://cybersecurity-links.github.io/json-proof-token/) you can find a simple decoder for JSON Proof Tokens.

