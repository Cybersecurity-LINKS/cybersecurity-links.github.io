---
sidebar_position: 2
---
# BLNS

BLNS is a Post-Quantum Zero-Knowledge signature scheme named after their creators Bootle Lyubashevsky Nguyen Sorniotti in the paper [A Framework for Practical Anonymous Credentials from Lattices](https://eprint.iacr.org/2023/560.pdf).
This framework is intended for practical anonymous credential schemes based on the hardness of lattice problems.

## Mathematical Assumptions
The BLNS structure is based on the ISIS_f hypothesis, which is a fairly natural extension of the main problem that underlies standard lattice-based signature schemes. It is also comparable to other lattice hypotheses that have been recently and separately suggested.  
Under particular choices he new assumption is shown to be equal to [Short integer solution](https://en.wikipedia.org/wiki/Short_integer_solution_problem), a well-known assumption that Ajtai established and upon which many security constructs rely, such as the ML-DSA signature (also known as Dilithium).

## BLNS as anonymous credentials scheme
BLNS is an anonymous credentials scheme, so there are three entities involved: the **Issuer** certifies attributes of Holders, the **Holder** receives credentials about their attributes and
uses them to authenticate to third parties, the **Verifier**  engages in a protocol with a Holder , and learns a subset of the attributes of the Holder.

## Protocols & Core Functions

* **NTRU.TrapGen**: This function is a part of the initialization phase. It is performed by the Issuer to generate the keys, leveraging the trapdoor generator of the NTRU lattice.  
It can be substituted by the Key Generator from Falcon.   

* **GSampler**: This function is part of the issuing phase. The Issuer signs the attributes of the Holder with its secret key sampling a short vector using the Gaussian Sampler GSampler.  
It can be substituted by the Gaussian Sampler from Falcon. 

* **Com**: This is the commitment protocol between the Issuer and the Holder, it enables the blind signatures. It is composed by two core functions: Prove_Com performed by the Holder, to create the commitment on its blind attributes, Verify_Com performed by the Issuer to check if the commitment are well formed.

* **ISIS**: This is the verification protocol between the Holder and the Verifier using the ISIS_f hypothesis. It is composed by two functions: Prove_ISIS performed by the Holder to compute the proof, Verify_ISIS performed by the Verifier to check if the proof is correct. 

* **LHC**: Linearly Homomorphic Commitment. It comprehend a series of function, used in the Com protocol, to actually build the commitments.

