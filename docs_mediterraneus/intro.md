---
sidebar_position: 1
---

# Mediterraneus

A new decentralized asset marketplace with built-in **Self-Sovereign Identity**.

## Introduction

This white paper introduces the Mediterraneous protocol as a collection of building blocks for developing secure and decentralised ecosystems where users can offer and purchase any digital service, in accordance with the [Web3 paradigm](https://ethereum.org/en/web3/). The adoption of the Mediterraneous protocol provides the ecosystem built upon it with several fundamental principles.

Users promote and deliver their services in a decentralised way. Each user has full control over their services and the power to deliver them using the technology of their choice. This design avoids the need to adhere to the specifications typically imposed by a central computing platform. In this sense, a Mediterraneous protocol-based ecosystem is *self-organising*. The overall behavior of the ecosystem is not enforced but it arises from the deliberate interactions among the users without the need of an orchestrating entity.


Users sell access to their services maintaining *ownership* control. Each user, acting as a provider, can set the access price and define different access options for their service (e.g., one-time, perpetual, time-bound, or any other). 
Additionally, users can act as consumers and purchase any service, then access it by proving their digital identity and their purchase. 
The process of publishing service offers and facilitating interactions between provider and consumer is mediated by an architecture of smart contracts deployed on a Smart Contract Platform.
Providers offer their services and ensure discoverability and access. Discoverability is facilitated by minting [*non-fungible tokens* (NFTs)](https://eips.ethereum.org/EIPS/eip-721) representing the services, while access is then granted through purchasing *service tokens* (ST), which are [ERC-20](https://eips.ethereum.org/EIPS/eip-20) also minted by the provider.


The resulting peer-to-peer ecosystem embraces the *trustless* principle. There is no need for a central entity to ensure trust between peers, to complete transactions and to gain access to the intended services. The distributed ledger and smart contracts allow interactions in a fully decentralised way.


The Mediterraneous protocol embraces the principle of Self-Sovereign Identity (SSI) instead of relying on pseudonyms.
The SSI is integrated into the protocol's core to ensure the protocol natively supports SSI principles [[w3c-did](https://www.w3.org/TR/did-core/),[w3c-vc](https://www.w3.org/TR/vc-data-model-2.0/)]. 
Users autonomously manage their identities using a digital wallet containing verifiable credentials, ensuring a non-custodial approach.
Apart from joining the ecosystem, all other interactions, both on-chain (i.e., publishing a service offer and buying access to a service) and off-chain (i.e., using a potential catalogue service and consuming a service), require prior user identity verification following the SSI model. 


Upon adhering to the Mediterraneous protocol, no entity can prevent anyone in the ecosystem from interacting according to the *censorship-resistant* principle.
A malicious user can always deny off-chain access to another user attempting to consume the purchased service, but they do so at the risk of being labelled as untrustworthy themselves.
 <!-- The operating principles of the \verb+Mediterranean+ protocol reduce the incentives to break the rules and give the users the power to contribute to the self-organization of the ecosystem.  -->
In addition, using zero-knowledge proof techniques, such as anonymous and selective disclosure, on verifiable credentials ensures *privacy preservation*. This empowers users to select their desired level of privacy when interacting with others within the ecosystem.

Integrating the SSI model at the core of the Mediterraneous protocol provides a distinctive value proposition. The adoption of the Mediterraneous protocol enables an Internet of digital services, owned by their creators and accessed by users through their interoperable, privacy-preserving and decentralized digital identity.