---
sidebar_position: 1
---


# pqzk-blns

>[Github repository](https://github.com/Cybersecurity-LINKS/pqzk-blns)  

---

pqzk-blns is the first open source implementation in C++ of the Post-Quantum Zero-Knowledge signature scheme BLNS from [A Framework for Practical Anonymous Credentials from Lattices](https://eprint.iacr.org/2023/560.pdf).
This implementation is tailored on the Self Sovereign Identity principles and aims to start the journey toward an Internet with quantum-secure ZK authentication with selective disclosure of identity attributes.  


## Architecture of pqzk-blns
![alt text](.\imgs\architecture.png)  

The resulting credential system consists of three actors. A trusted **Issuer** who issues Verifiable Credentials, the **Holder** who owns Verifiable Credentials and presents a Post-Quantum Zero-Knowledge Proof to prove his identity, and the **Verifier** who checks the proof before granting or denying access.


## New Features
The implementation, fully developed by our team, is meant to be flexible and easy to use and understand. It enable also new features different than being only an implementation of the reference paper. The user is able to decide to use some integrated functions taken from the [Falcon](https://falcon-sign.info/) signature scheme, a Post-Quantum digital signature that shares some common functions with BLNS, improving the overall performances.


## Future Work
* Implementation of a revocation mechanism based on the timestamp approach in [Solving Revocation with Efficient Update of Anonymous Credentials](https://doi.org/10.1007/978-3-642-15317-4_28) that does not rely on asymmetric cryptography vulnerable to a cryptographically relevant quantum computer, thus quantum-secure by construction.

* Improve some mathematical aspects, e.g. investigate alternatives to reduce the impact of the rejection sampling.

*  Security will also be a key focus for future work, especially aiming to a
constant-time implementation to mitigate timing attacks.


