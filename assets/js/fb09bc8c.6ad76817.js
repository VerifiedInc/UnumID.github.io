"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[6392],{5380:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=n(5893),s=n(1151),r=(n(1829),n(262)),a=n(9775);const d={id:"credential-schemas",title:"Credential Schemas",sidebar_label:"Credential Schemas",sidebar_class_name:"hidden",slug:"/credential-schemas"},c=void 0,l={id:"credential-schemas",title:"Credential Schemas",description:"Our credential schemas ensure user data is predictably structured. We use JSON Schema syntax for data validation purposes via a pre-compiled AJV engine. This makes our schemas robust enough to encapsulate any data while still being easily described, displayed, and validated.",source:"@site/versioned_docs/version-2/credential-schemas.mdx",sourceDirName:".",slug:"/credential-schemas",permalink:"/credential-schemas",draft:!1,unlisted:!1,tags:[],version:"2",frontMatter:{id:"credential-schemas",title:"Credential Schemas",sidebar_label:"Credential Schemas",sidebar_class_name:"hidden",slug:"/credential-schemas"},sidebar:"sidebar",previous:{title:"Data",permalink:"/data"},next:{title:"click-entity-example",permalink:"/reusables/click-entity-example"}},o={},h=[{value:"Schema Definitions",id:"schema-definitions",level:2},{value:"JSON Schema",id:"json-schema",level:4},{value:"Schema Library",id:"schema-library",level:2},{value:"Example",id:"example",level:2}];function m(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Our ",(0,t.jsx)(i.a,{href:"/api-reference#credentials",children:"credential"})," schemas ensure user data is predictably structured. We use ",(0,t.jsx)(i.a,{href:"https://json-schema.org/",children:"JSON Schema"})," syntax for data validation purposes via a pre-compiled ",(0,t.jsx)(i.a,{href:"https://ajv.js.org/guide/why-ajv.html",children:"AJV"})," engine. This makes our schemas robust enough to encapsulate any data while still being easily described, displayed, and validated."]}),"\n",(0,t.jsxs)(i.p,{children:["All Verified credential schemas are accessible at ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/schema",children:"https://schema.verified.inc/schema"}),". To get the schema for a particular credential type, use the same URL with the credential type in the path. For example, ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/schema/AddressCredential",children:"https://schema.verified.inc/schema/AddressCredential"})," yields the schema for an ",(0,t.jsx)(i.code,{children:"AddressCredential"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["These schemas are documented in our public ",(0,t.jsx)(i.a,{href:"https://api.docs.verified.inc/",children:"Postman collection"})," under Schema Resolver"]}),". We recommend using Postman for this because it formats the schema JSON for easier readability."]})}),"\n",(0,t.jsx)(i.admonition,{title:"Let Us Know If You Need New Schemas",type:"important",children:(0,t.jsxs)(i.p,{children:["If our current credential schemas don't accommodate your use case, please reach out to us at ",(0,t.jsx)(i.a,{href:"mailto:Support@Verified.inc",children:"Support@Verified.inc"})," and we'll be happy to create new schemas for you."]})}),"\n",(0,t.jsx)(i.h2,{id:"schema-definitions",children:"Schema Definitions"}),"\n",(0,t.jsx)(i.p,{children:'We currently support what can be referred to as "single attribute atomic credentials" and "composite credentials".'}),"\n",(0,t.jsxs)(i.p,{children:["Atomic credentials provide users a means of selective disclosure for ",(0,t.jsx)("a",{href:"/terminology#request",children:(0,t.jsx)(r.Z,{type:"request"})}),"s with optional fields."]}),"\n",(0,t.jsxs)(i.p,{children:['Composite credentials are credentials that contain multiple "Atomic Credentials". For example, the ',(0,t.jsx)(i.code,{children:"FullNameCredential"})," contains ",(0,t.jsx)(i.code,{children:"FirstNameCredential"}),", ",(0,t.jsx)(i.code,{children:"LastNameCredential"})," and ",(0,t.jsx)(i.code,{children:"MiddleNameCredential"}),". This provides a means of grouping atomic credentials with related data."]}),"\n",(0,t.jsx)(i.h4,{id:"json-schema",children:"JSON Schema"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"/jsonSchema"})," path will return the JSON schema definition, e.g. ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/jsonSchema/FirstNameCredential",children:"https://schema.verified.inc/jsonSchema/FirstNameCredential"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",metastring:'title="Example FirstNameCredential JSON Schema"',children:'{\n  "$id": "FirstNameCredential",\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "description": "A person\'s first name",\n      "examples": ["John", "Mary Kate"],\n      "title": "First Name",\n      "displayFormat": "String",\n      "type": "string"\n    }\n  },\n  "required": ["firstName"]\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["For composite credential schemas, the object will contain a ",(0,t.jsx)(i.code,{children:"allOf"})," property, which is an array of the atomic credential schemas:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",metastring:'title="Example FullNameCredential JSON Schema"',children:'{\n  "$id": "FullNameCredential",\n  "type": "object",\n  "allOf": [\n    {\n      "$ref": "FirstNameCredential"\n    },\n    {\n      "$ref": "LastNameCredential"\n    },\n    {\n      "$ref": "MiddleNameCredential"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"$ref"})," property is a JSON Pointer, which is a string containing a URI fragment identifier. In this case, it is a reference to another schema. This is how we define composite credential schemas."]})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["It's important to note that each of these credentials inside ",(0,t.jsx)(i.code,{children:"FullNameCredential"})," are single attribute atomic credentials, so you are able to request individually.\nBut if you need create or request a ",(0,t.jsx)(i.code,{children:"CityCredential"})," and a ",(0,t.jsx)(i.code,{children:"StateCredential"})," you will need to use ",(0,t.jsx)(i.code,{children:"AddressCredential"})," so data doesn't get mismatched."]})}),"\n",(0,t.jsx)(i.h2,{id:"schema-library",children:"Schema Library"}),"\n",(0,t.jsx)(i.p,{children:"Search for or select a schema, see its properties and attributes, and copy the schema JSON:"}),"\n",(0,t.jsx)(a.Z,{}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["First, we get the JSON schemas for the ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/jsonSchema/SsnCredential",children:(0,t.jsx)(i.code,{children:"SsnCredential"})}),", ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/jsonSchema/FullNameCredential",children:(0,t.jsx)(i.code,{children:"FullNameCredential"})}),", which contains ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/jsonSchema/FirstNameCredential",children:(0,t.jsx)(i.code,{children:"FirstNameCredential"})})," and ",(0,t.jsx)(i.a,{href:"https://schema.verified.inc/jsonSchema/LastNameCredential",children:(0,t.jsx)(i.code,{children:"LastNameCredential"})})," and review their attributes' ",(0,t.jsx)(i.code,{children:"description"}),"s and ",(0,t.jsx)(i.code,{children:"examples"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Next, we construct valid credential bodies, according to the schemas:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"/*The credential data compliant with the Ssn, FullName (FirstName and LastName) Credentials schemas*/\nconst credentialsList: Credentials = [\n  {\n    type: 'SsnCredential',\n    data: {\n      ssn: '333224444',\n    },\n  },\n  {\n    type: 'FullNameCredential',\n    data: [\n      {\n        type: 'FirstNameCredential',\n        data: {\n          firstName: 'John',\n        },\n      },\n      {\n        type: 'LastNameCredential',\n        data: {\n          lastName: 'Doe',\n        },\n      },\n    ],\n  },\n];\n"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",metastring:'title="Example Request Body for Issuing Credentials"',children:'{\n  "credentials": credentialsList, // a list of one or more Credentials objects\n  "email": "richard.hendricks@pipedpiper.net"\n}\n\n'})})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9775:(e,i,n)=>{n.d(i,{Z:()=>N});var t=n(7294),s=n(8716),r=n(624),a=n(1190);const d={container:"container__ccj",search:"search_dnlB","container-grid":"container-grid_gdNR","list-card":"list-card_xwza","list-card-skeleton":"list-card-skeleton_i4sb","coming-soon":"coming-soon_qq8j","list-card-title":"list-card-title_cv_5",pulse:"pulse_Dpg8"},c={container:"container_Yx8b",back:"back_YMET",header:"header_qWYl",title:"title_tglL",subtitle:"subtitle_n5yt","section-title":"section-title_JJIx","meta-container":"meta-container_AWlX",properties:"properties_IZUr","property-title":"property-title_jUnQ","properties-container":"properties-container_ik0p","property-field":"property-field_GOOn","property-span":"property-span_Kxn3","skeleton-title":"skeleton-title_nNzQ","skeleton-content-md":"skeleton-content-md_JFBE","skeleton-content-lg":"skeleton-content-lg_nAnC","skeleton-content-xl":"skeleton-content-xl_AAs6","attribute-container":"attribute-container_uCHO"},l=/([A-Z][a-z0-9]+)/gm,o=e=>e.split(l).filter((e=>e)).join(" ");var h=n(5893);const m=e=>{let{value:i,onCredentialClick:n}=e;return Array.isArray(i)?(0,h.jsx)("ul",{style:{listStyleType:"decimal"},children:i.map(((e,i)=>(0,h.jsx)("li",{children:(0,h.jsx)(m,{value:e,onCredentialClick:n})},i)))}):"object"!=typeof i||Array.isArray(i)?(0,h.jsxs)("span",{className:"text--primary",children:[String(i),(t=i,/^\w+Credential$/.test(t)&&(0,h.jsx)("button",{className:"button button--sm button--outline button--primary margin-left--md",onClick:()=>n(i),children:"See Credential"}))]}):(0,h.jsx)("ul",{children:Object.entries(i).map(((e,i)=>{let[t,s]=e;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("strong",{className:"text--padding-left--md margin-bottom--sm margin-top--md",children:[t,":"]})," ",(0,h.jsx)(m,{value:s,onCredentialClick:n})]},i)}))});var t};function u(e){let{schema:i,onRequestClose:n,onCredentialClick:r}=e;const[a,d]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=setTimeout((()=>d(!1)),3e3);return()=>{clearTimeout(e)}}),[a]),(0,h.jsx)(s.E.div,{className:`${c.container} --ifm-modal-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,h.jsxs)("div",{className:"margin-top--sm padding--lg",children:[(0,h.jsx)("button",{className:`${c.back} button button--md button--primary margin-bottom--lg`,onClick:n}),(0,h.jsxs)("div",{className:c.header,children:[(0,h.jsx)("button",{className:"button button--xs button--secondary",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(i.raw,null,2)),d(!0)},children:a?"Copied!":"Copy schema"}),(0,h.jsx)("h4",{className:c.title,children:(0,h.jsx)(s.E.span,{layoutId:i.id,className:"margin-right--md",style:{display:"inline-block"},children:i.name})})]}),(0,h.jsx)("p",{children:i.id}),(0,h.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},exit:{opacity:0},children:(0,h.jsx)(m,{value:(e=>{const i={...e};return delete i.raw,i})(i),onCredentialClick:r})})]})},i.id)}const p=e=>({$id:e,type:"object",comingSoon:!0,properties:{_:{description:"",examples:[],title:"",displayFormat:"String",input:{type:"Text"},type:"string"}}}),x={CreditCardCredential:{anyOf:[p("CreditCardNumberCredential"),p("CreditCardExpirationDateCredential"),p("CreditCardTypeCredential"),p("CreditCardTokenCredential"),p("BalanceCredential"),p("TransactionHistoryCredential")],$id:"CreditCardCredential",unevaluatedProperties:!1,comingSoon:!0},BankAccountCredential:{anyOf:[p("RoutingNumberCredential"),p("AccountNumberCredential"),p("BalanceCredential"),p("TransactionHistoryCredential")],$id:"BankAccountCredential",unevaluatedProperties:!1,comingSoon:!0},FraudInsightsCredential:{anyOf:[p("AuthoritativeSourceCheckCredential"),p("PEPCredential"),p("OFACCredential"),p("AdverseMediaScreenCredential")],$id:"FraudInsightsCredential",unevaluatedProperties:!1,comingSoon:!0}};function j(){return{async getSchemas(){var e,i;return{...await(e="https://schema-resolver.verified.inc/jsonSchema",i={method:"GET",mode:"cors"},fetch(e,i).then((e=>{if(e.ok)return e.json();throw new Error(`Http response error: ${e.status}`)}))),...x}}}}function f(e){let[i,n]=e;const{$id:t,...s}=n;return[i,{...s,id:i,name:o(t),raw:n}]}const g=e=>i=>{let[n]=i;return o(n).toLowerCase().indexOf(e.toLowerCase())>=0},y=(e,i)=>e.toLocaleString().localeCompare(i);function C(e){let{schema:i,onSchemaSelect:n}=e;const t={hidden:{opacity:0},show:{opacity:1},[`selected-${i.id}`]:{backgroundColor:"var(--ifm-color-primary)"},idle:{opacity:1,transition:{duration:0}},exit:{opacity:0}};return(0,h.jsxs)(s.E.div,{className:`${d["list-card"]} ${i.comingSoon?d["coming-soon"]:""}`,variants:t,whileHover:{backgroundColor:"var(--ifm-color-primary)"},onClick:()=>!i.comingSoon&&n(i),layout:!0,children:[(0,h.jsx)(s.E.h3,{layoutId:i.id,className:d["list-card-title"],children:i.name}),i.comingSoon&&(0,h.jsx)(s.E.span,{layoutId:i.id+"span",className:d["coming-soon"],children:"Coming soon!"})]},i.id)}function b(){return(0,h.jsx)("div",{className:d["list-card-skeleton"]})}function v(e){let{schemas:i}=e;const[n,c]=(0,t.useState)(null),[l,o]=(0,t.useState)(""),m=(0,t.useRef)(),[p,x]=(0,t.useState)("auto"),[j,b]=(0,t.useState)(0),v=(0,r.Y)(m,{amount:"some"}),[N,S]=(0,t.useState)(v),w=Object.entries(i).map(f),k=w.filter(g(l)).sort(y),A=(0,t.useMemo)((()=>n?`selected-${n.id}`:N?"idle":v?"show":void 0),[n,v,N]);return(0,t.useEffect)((()=>{N||v&&S(!0)}),[v,N]),(0,t.useEffect)((()=>{const e=new ResizeObserver((e=>{const i=e[0].contentRect.height;b((e=>Math.max(e,i))),x(i)}));return e.observe(m.current),()=>{e.disconnect()}}),[]),(0,h.jsx)(s.E.div,{className:d.container,animate:{height:n?j:p,transition:{duration:.2}},layout:!0,children:(0,h.jsxs)(s.E.div,{ref:m,children:[(0,h.jsxs)(s.E.div,{variants:{hidden:{},show:{transition:{staggerChildren:.025}},selected:{},idle:{}},initial:"hidden",animate:A,whileInView:"show",viewport:{once:!0,margin:"-50%"},children:[(0,h.jsx)("input",{className:d.search,placeholder:"Search for a schema e.g Email Credential",onChange:e=>o(e.target.value)}),!k.length&&(0,h.jsxs)("h2",{className:"text--center margin-top--lg margin-bottom--lg",children:["No schema found with term ",l]}),(0,h.jsx)(s.E.div,{className:d["container-grid"],children:(0,h.jsx)(a.M,{children:k.map((e=>{let[i,n]=e;return(0,h.jsx)(C,{schema:n,onSchemaSelect:c},i)}))})})]}),(0,h.jsx)(a.M,{initial:!1,children:n&&(0,h.jsx)(u,{schema:n,onRequestClose:()=>c(null),onCredentialClick:async e=>{c(null),await new Promise((e=>setTimeout(e,500)));const i=w.find((i=>i[0]===e))[1];c(i)}})})]})})}function N(e){const[i,n]=(0,t.useState)(!0),[s,r]=(0,t.useState)(null);return(0,t.useEffect)((()=>{n(!0),j().getSchemas().then((e=>{r(e),n(!1)}))}),[]),i?(0,h.jsx)("div",{className:d.container,children:(0,h.jsx)("div",{className:d["container-grid"],children:new Array(28).fill(void 0).map(((e,i)=>(0,h.jsx)(b,{},i)))})}):(0,h.jsx)(v,{schemas:s})}},262:(e,i,n)=>{n.d(i,{Z:()=>c});n(7294);var t=n(5934),s=n(1829),r=n(7893),a=n.n(r),d=n(5893);const c=e=>{let{type:i,text:n,children:r}=e;if(i&&l[i]){var a=(0,t.Z)();return r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{id:a,children:l[i]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":a,children:r})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{id:a,children:l[i]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":a,children:i})]})}var c=(0,t.Z)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{id:c}),(0,d.jsx)("u",{"data-tip":n,"data-for":c,children:r})]})},l={credential:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credential"})," is a collection of data about a person."]})," It's issued by a company and can be requested by other network participants, gated by the user's consent."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Lending issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company issues credentials following the steps in the ",(0,d.jsx)("a",{href:"/issuance-guide",children:"Issuance Guide"}),"."]})]})]}),request:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#request",children:"request"})," (or ",(0,d.jsx)("i",{children:"credential request"}),") is a request for a ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to be shared by a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]})," It's created when a company successfully checks if a user has matching credentials, via ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),"  Only if the user has the ability to response with the matching credentials is a request created."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Hooli FinTech checks if Richard has a SSN and LastName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the `url` received in the `/hasMatchingCredentials` response body."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company creates a user specific request by using ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),". If it is case the ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," does not have the desired credentials then a request is not created. If it is the case the user does, a request is created and is returned in the form of a `url` attribute in response to the client."]})]})]}),user:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," is an individual in the Verified Inc. network."]})," Each user has at least one phone or emails, aka ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifiers"})," associated with them. They can have multiple of either."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Richard is a user in your account system and potentially of the Verified Inc. network. He has two email addresses and one phone with him. Credentials can be issued to or requested of him using any of these identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Referenced in API endpoints `/hasMatchingCredentials` and `/issueCredentials`. User data is associated by using these user identifiers that you already keep on your users."]})]})]}),userIdentifier:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifier"})," is an email or phone value"]})," which is associated with a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," richard@pipedpiper.net is one of Richard Hendrick's user identifiers. He also has a phone number of +10123456789, another one of his user identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," We have abstracted away the complexity of dealing with a third party uuid to refer to a user. Instead, you can use the user's email or phone number to refer to and issue credentials to users in our system."]})]})]}),brand:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," is a company entity that has a corresponding unique api key, name, and card image."]})," Brands can issue, request and receive ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to and from ",(0,d.jsx)("a",{href:"/terminology#user",children:"users"}),"."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique api key, name, and card image."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Each brand has an associated umbrella customer. It is totally okay if your customer only has one brand. We want to have the flexibility to support multiple brands per customer."]})]})]}),customer:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#customer",children:"customer"})," is a company entity that serves as a parent to brands and their corresponding ApiKeys."]})}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is the Verified Inc. customer where their self service dashboard access rights are defined."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," The admins of the customer can manage individual ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," settings."]})]})]})}},1829:(e,i,n)=>{n.d(i,{Z:()=>r});n(7294);var t=n(4762),s=n(5893);const r=e=>{let{children:i,...n}=e;return(0,s.jsx)(t.Z,{type:"dark",place:"top",effect:"solid",multiline:!0,textColor:"white",backgroundColor:"#2e2e2e",arrowColor:"transparent",delayHide:250,delayUpdate:250,resizeHide:!1,...n,className:"tooltip",wrapper:"span",children:i})}}}]);