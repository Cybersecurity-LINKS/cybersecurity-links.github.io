"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[2235],{14467:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(85893),i=n(11151);const o={},r="CL03",a={id:"algorithms/cl03",title:"CL03",description:"The CL03 algorithm refers to the one described in the paper, A Signature Scheme with Efficient Protocols by Jan Camenisch and Anna Lysyanskaya.",source:"@site/docs_zkryptium/algorithms/cl03.md",sourceDirName:"algorithms",slug:"/algorithms/cl03",permalink:"/zkryptium/algorithms/cl03",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BBS+",permalink:"/zkryptium/algorithms/bbs"},next:{title:"Getting Started",permalink:"/zkryptium/getting-started"}},c={},l=[{value:"Preliminary Protocols",id:"preliminary-protocols",level:3},{value:"Protocols for the Signature Scheme",id:"protocols-for-the-signature-scheme",level:3}];function h(e){const s={a:"a",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"cl03",children:"CL03"})}),"\n",(0,t.jsxs)(s.p,{children:["The CL03 algorithm refers to the one described in the paper, ",(0,t.jsx)(s.a,{href:"https://link.springer.com/chapter/10.1007/3-540-36413-7_20",children:(0,t.jsx)(s.em,{children:"A Signature Scheme with Efficient Protocols"})})," by Jan Camenisch and Anna Lysyanskaya.\nThis paper presents an efficient signature scheme and protocols designed for anonymous credential systems and other privacy-preserving cryptographic applications. This scheme enables signing committed values without revealing them and proving knowledge of signatures selectively, supporting use cases like anonymous verifiable credentials. The security of the scheme relies on the Strong RSA assumption."]}),"\n",(0,t.jsx)(s.p,{children:"The scheme is extended to handle blocks of messages, allowing signatures on multiple attributes or claims at once. This is beneficial in scenarios requiring a compact, unified signature on a set of related information, such as multi-attribute credentials."}),"\n",(0,t.jsx)(s.h3,{id:"preliminary-protocols",children:"Preliminary Protocols"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Commitment Scheme"}),": Uses a secure RSA modulus and group commitments to ensure message integrity and confidentiality."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Discrete-Logarithm-Based Protocols"}),": Protocols for verifying knowledge of discrete logarithms and proving that committed values meet certain conditions without revealing them."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"protocols-for-the-signature-scheme",children:"Protocols for the Signature Scheme"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Signing a Committed Value"}),": A secure protocol enables signing of a committed message without the signer learning the message content. This enables anonymous credential issuance."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Proof of Knowledge of a Signature"}),": Users can prove possession of a valid signature on a committed value without revealing the message. This protocol uses zero-knowledge proofs to maintain privacy."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Protocols for Signatures on Blocks of Messages"}),": The scheme supports proofs of knowledge for blocks of committed values, allowing users to disclose selectively, such as showing only specific credentials or attributes."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This scheme offers practical applications in anonymous credentials and privacy-preserving systems, where verifying credentials without compromising identity or personal data is crucial."})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var t=n(67294);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);