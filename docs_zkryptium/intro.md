---
sidebar_position: 1
---

# ZKryptium

[**ZKryptium**](https://github.com/Cybersecurity-LINKS/zkryptium) is a cryptographic library written in Rust which provides an implementation in accordance with:
* [BBS+ Signature Scheme](./algorithms/bbs.md#bbs) 
* [Blind BBS Signatures](./algorithms/bbs.md#blind-bbs-signature-extension)
* [CL2003 Signature Scheme](./algorithms/cl03.md#cl03)


This library enables the creation of zero-knowledge proofs, exposing cryptographic primitives facilitating the development of a Verifiable Credentials (VCs) system capable of handling both Anonymous Credentials and Selective Disclosure Credentials.


### Adopted by

We’re proud to be adopted by companies around the world. Here are a few of the organizations leveraging our library:
* [IOTA Foundation](https://github.com/iotaledger/identity.rs)
* [SpruceID](https://github.com/spruceid/ssi)
* [Hushmesh Inc.](https://github.com/hushmesh/mesh-infrastructure)

### Future work

In the future we expect to extend this library to support a new set of post-quantum secure algorithms such as [BLNS](https://eprint.iacr.org/2023/560) and [zk-STARK](https://eprint.iacr.org/2018/046).