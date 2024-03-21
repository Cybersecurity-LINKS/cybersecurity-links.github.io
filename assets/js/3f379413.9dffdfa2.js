"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[7187],{280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const a={sidebar_position:8,description:"Configuration instructions"},r="Configuration",o={id:"quick-start/configuration",title:"Configuration",description:"Configuration instructions",source:"@site/docs_embrave/quick-start/configuration.md",sourceDirName:"quick-start",slug:"/quick-start/configuration",permalink:"/embrave/quick-start/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Configuration instructions"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/embrave/quick-start/installation"},next:{title:"Configuration File",permalink:"/embrave/quick-start/config-file"}},l={},c=[{value:"Golden values database and the exclude list database",id:"golden-values-database-and-the-exclude-list-database",level:2},{value:"Config file",id:"config-file",level:2},{value:"Verifier configuration",id:"verifier-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h2,{id:"golden-values-database-and-the-exclude-list-database",children:"Golden values database and the exclude list database"}),"\n",(0,i.jsxs)(n.p,{children:["A python script is provided to create the database of trusted values. In case of known files to be excluded in the verification, add the file or path name in the file ",(0,i.jsx)(n.code,{children:"./script/exclude.txt"})," one per line. Then run this Python script on the Attester Agent. It will take some time."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo python3 ./scripts/goldenvalue_db_generator.py sha256 <path/file_to_measure>\n"})}),"\n",(0,i.jsx)(n.p,{children:"e.g. measure all system's files"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo python3 ./scripts/goldenvalue_db_generator.py sha256 /\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you subsequently need to add other files/paths to the exclude list, you can use the following Python script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo python3 ./scripts/add_excludelist.py <path/file_to_exclude>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"config-file",children:"Config file"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instruction in the ",(0,i.jsx)(n.a,{href:"/embrave/quick-start/config-file",children:(0,i.jsx)(n.code,{children:"config-file section"})})," to populate the config files"]}),"\n",(0,i.jsx)(n.p,{children:"TODO minimal configuration"}),"\n",(0,i.jsx)(n.h2,{id:"verifier-configuration",children:"Verifier configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the goldenvalue database from the agent to the path defined by ",(0,i.jsx)(n.strong,{children:"db"})," the config file section ",(0,i.jsx)(n.a,{href:"/embrave/quick-start/config-file#verifier",children:(0,i.jsx)(n.code,{children:"[Verifier]"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"scp user@agent_ipd_addr:/home/user/embrave/goldenvalues.db <path_config_db>\n"})}),"\n",(0,i.jsx)(n.p,{children:"e.g. for default value"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"scp user@agent_ipd_addr:/home/user/embrave/goldenvalues.db /var/embrave/verifier/db.sqlite\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);