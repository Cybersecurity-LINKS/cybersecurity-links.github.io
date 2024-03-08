import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Trusted Computing',
    Svg: require('@site/static/img/trusted-computing.svg').default,
    description: (
      <>
        A set of interoperable HW and SW technologies for building trust in the behaviour of embedded devices. The core elements are an HW Root of Trust (RoT) called Trusted Platform Module (TPM) and/or a Trusted Execution Environment (TEE).
      </>
    ),
  },
  {
    title: 'Self-Sovereign Identity',
    Svg: require('@site/static/img/ssi.svg').default,
    description: (
      <>
        A decentralised identity model for embedded devices based on three fundamental elements: Distributed Ledger Technology (DLT) as the Root of Trust (RoT) for public identity data, Decentralised IDentifier (DID), and Verifiable Credential (VC) as the key components of the identity.
      </>
    ),
  },
  {
    title: 'Cryptography',
    Svg: require('@site/static/img/cryptography.svg').default,
    description: (
      <>
        Cryptographic key management, Zero-Knowledge Proof (ZKP) techniques applied to SSI, and the transition of Internet protocols and decentralised identity frameworks to Post-Quantum Cryptography (PQC).
      </>
    ),
  },
  {
    title: 'Distributed Ledgers and Smart Contracts',
    Svg: require('@site/static/img/blockchain.svg').default,
    description: (
      <>
         Building blocks for developing connected, decentralized, secure and self-organizing (embedded) systems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <Heading as="h2">Lines of Research​</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <span> Images by&nbsp;<a href="https://www.freepik.com/author/vectorjuice">vectorjuice</a>&nbsp;from Freepik </span>
      </div>
    </section>
  );
}
