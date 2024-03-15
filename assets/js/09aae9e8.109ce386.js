"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[660],{9425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(5893),i=r(1151);const s={sidebar_position:9,description:"Configuration file for Embrave"},a="Configuration File",o={id:"quick-start/config-file",title:"Configuration File",description:"Configuration file for Embrave",source:"@site/docs_embrave/quick-start/config-file.md",sourceDirName:"quick-start",slug:"/quick-start/config-file",permalink:"/embrave/quick-start/config-file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Configuration file for Embrave"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/embrave/quick-start/configuration"},next:{title:"Execution",permalink:"/embrave/quick-start/execution"}},c={},l=[{value:"Attester Agent",id:"attester-agent",level:2},{value:"Verifier",id:"verifier",level:2},{value:"Join Service",id:"join-service",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"configuration-file",children:"Configuration File"}),"\n",(0,n.jsxs)(t.p,{children:["The system supports configuration through a a file, located in ",(0,n.jsx)(t.code,{children:"/etc/embrave.conf"}),". The file is in the format of a standard INI file, with sections and key-value pairs. The following sections are supported:"]}),"\n",(0,n.jsx)(t.h2,{id:"attester-agent",children:"Attester Agent"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"[AttesterAgent]"})," section contains general settings for Attester."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"\n    [AttesterAgent]\n\n    # UUID\n    uuid = 12345678-1234-1234-1234-123456789012\n\n    # Port where it runs the http server\n    port = 80\n\n    # Port where is runs the https (TLS enabled) server\n    tls_port = 443\n\n    # Ip address on which make the binding\n    ip = 127.0.0.1\n\n    # Certificate and key for TLS paths\n    tls_cert = /var/embrave/attester/tls/cert.crt\n    tls_key = /var/embrave/attester/tls/key.pem\n\n    # Path where store the EK certificates\n    ek_rsa_cert = /var/embrave/attester/ek_rsa_cert.pem\n    ek_ecc_cert = /var/embrave/attester/ek_ecc_cert.pem\n\n    # Path where store the AK info\n    ak_pub = /var/embrave/attester/ak_pub.pem\n    ak_name = /var/embrave/attester/ak.name\n    ak_ctx = /var/embrave/attester/ak.ctx\n    ak_cert = /var/embrave/attester/ak.crt\n\n    # Join Service IP address\n    join_service_ip = localhost\n\n    # Port where it runs the http Join Service server\n    join_service_port = 8000\n"})}),"\n",(0,n.jsx)(t.h2,{id:"verifier",children:"Verifier"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"[Verifier]"})," section contains settings related to the Verifier."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"\n    [Verifier]\n\n    # Port where it runs the http server\n    port = 80\n\n    # Port where is runs the https (TLS enabled) server\n    tls_port = 443\n\n    # Ip address on which make the binding\n    ip = 127.0.0.1\n\n    # Flag to spacify if the server will run on TLS\n    # or not (1 = TLS, 0 = NO TLS). NOT used yet!\n    use_tls = 1\n\n    # Certificate and key for TLS paths\n    tls_cert_ca = /var/embrave/verifier/tls/ca.crt\n    tls_cert = /var/embrave/verifier/tls/cert.crt\n    tls_key = /var/embrave/verifier/tls/key.pem\n\n    # Path of the verfier database (sqlite)\n    db = file:/var/embrave/verifier/db.sqlite\n\n    # Join Service IP address\n    join_service_ip = localhost\n\n    # Port where it runs the http Join Service server\n    join_service_port = 8000\n\n    # MQTT broker IP address\n    mqtt_broker_ip = localhost\n\n    # Port where it runs the MQTT broker\n    mqtt_broker_port = 1883\n"})}),"\n",(0,n.jsx)(t.h2,{id:"join-service",children:"Join Service"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"[JoinService]"})," section contains settings related to the Join Service."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"\n    [JoinService]\n\n    # Port where it runs the http server\n    port = 8000\n\n    # Port where is runs the https (TLS enabled) server\n    tls_port = 443\n\n    # Ip address on which make the binding\n    ip = localhost\n\n    # Flag to spacify if the server will run on TLS\n    # or not (1 = TLS, 0 = NO TLS). NOT used yet!\n    use_tls = 1\n\n    # Certificate and key for TLS paths\n    tls_cert_ca = /var/embrave/join_servicetls/ca.crt\n    tls_cert = /var/embrave/join_service/tls/cert.crt\n    tls_key = /var/embrave/join_service/tls/key.pem\n\n    # Path of the verfier database (sqlite)\n    db = file:/var/embrave/join_service/db.sqlite\n\n    # Path of ca hash certificates\n    ca_x509_path = /home/linux/Documents/embrave/tpm_ca_certs_hash_dir\n  \n    # MQTT broker IP address\n    mqtt_broker_ip = localhost\n\n    # Port where it runs the MQTT broker\n    mqtt_broker_port = 1883\n    \n    # Join Service Log file\n    log_path = /var/embrave/join_service/log.txt\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(7294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);