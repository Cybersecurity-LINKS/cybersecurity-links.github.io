# BBS+

The [BBS (Boneh-Boyen-Shacham) Signature Scheme](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bbs-signatures-08) is a cryptographic protocol optimized for efficient, privacy-preserving, multi-message signatures. The scheme is based on pairing-based cryptography, allowing a user to compactly sign multiple messages, with the possibility of verifying each individual message in a set without revealing the actual content. This makes BBS signatures well-suited for privacy-sensitive applications such as anonymous credentials and selective disclosures in identity systems.

Key characteristics of the BBS Signature Scheme:
- **Signature Compactness**: The BBS scheme can sign multiple messages in a compact format, producing a single signature that proves the authenticity of all messages in the set. This reduces data overhead in multi-message scenarios.
- **Selective Disclosure**: A unique feature of BBS signatures is their ability to selectively reveal certain signed messages while keeping others hidden. This functionality supports applications in privacy-preserving systems, such as Verifiable Credentials, where users may only need to disclose specific attributes of their identity.
- **Unlinkable Proofs**: This scheme uses a zero-knowledge proof-of-knowledge of the signature, ensuring that a verifier cannot identify the specific signature used to generate the proof. This unlinkability makes each BBS proof appear random, even if derived from the same signature, preventing correlation.
- **Proof of Possession**: This scheme allows a Prover to demonstrate possession of a signature without revealing it to the Verifier. A "presentation header" can also be included, containing contextual information such as a nonce, domain identifier, or validity period. This additional context enhances control over the intended audience or timeframe for the proof.

The BBS scheme employs asymmetric cryptographic operations and relies on pairings between groups in elliptic curve cryptography, which allows for compact and efficient operations.

### **Blind BBS Signature Extension**

The [Blind BBS Signature Extension](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bbs-blind-signatures-01) builds on the BBS scheme to support blind signing, where a signer can authenticate a message without knowing its content. This is achieved through a blinding process applied to the message by the recipient before sending it to the signer. The signer then issues a signature over the blinded content, ensuring privacy.

Key features of the Blind BBS Signature Extension:
- **Message Blinding**: This extension allows recipients to obscure (blind) their messages before sending them to a signer. This process ensures that the signer cannot learn the message's content.

### **BBS per Verifier Linkability**

The [BBS per Verifier Linkability](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bbs-per-verifier-linkability-01) builds on the BBS scheme to enable a Verifier to be able to track the BBS proofs they receive from the same Prover  tih the use of pseudonyms. A pseudonym, is a value that will remain constant each time a Prover presents a BBS proof to the same Verifier, but will be different (and unlinkable), when the Prover interacts with a different Verifier. This provides a way for a recipient (Verifier) to track the presentations intended for them, while also hindering them from tracking the Prover's interactions with other Verifiers

Together, the BBS Signature Scheme and its Blind Signature Extension and the BBS per Verifier Linkability offer a robust solution for privacy-preserving cryptographic systems, supporting applications in identity, authentication, and secure, anonymous transactions.