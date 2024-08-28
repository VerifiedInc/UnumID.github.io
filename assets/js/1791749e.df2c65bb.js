"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[361],{7259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=s(5893),r=s(1151);const a={},t=void 0,d={id:"reusables/atomic-credential-example",title:"atomic-credential-example",description:"",source:"@site/versioned_docs/version-1/reusables/atomic-credential-example.mdx",sourceDirName:"reusables",slug:"/reusables/atomic-credential-example",permalink:"/reusables/atomic-credential-example",draft:!1,unlisted:!1,tags:[],version:"1",frontMatter:{}},c={},l=[];function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Example Atomic EmailCredential"',children:'{\n  "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c", // the credential id\n  // highlight-start\n  "type": "EmailCredential", // the type of credential\n  // highlight-end\n  "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55", // the brand uuid of the issuer\n  "issuanceDate": "1671847264479", // date the credential was issued in milliseconds since unix epoch\n  "expirationDate": "1871839024044", // date the credential expires in milliseconds since unix epoch\n  // highlight-start\n  // the data attribute must match the SsnCredential JSON schema properties as mentioned in the Data Schema section.\n  // i.e. https://schema-resolver.verified.inc/jsonSchema/SsnCredential\n  "data": {\n    "email": "test@verified.inc"\n  }\n  // highlight-end\n}\n'})})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=s(5893),r=s(1151);const a={},t=void 0,d={id:"reusables/composite-credential-example",title:"composite-credential-example",description:"",source:"@site/versioned_docs/version-1/reusables/composite-credential-example.mdx",sourceDirName:"reusables",slug:"/reusables/composite-credential-example",permalink:"/reusables/composite-credential-example",draft:!1,unlisted:!1,tags:[],version:"1",frontMatter:{}},c={},l=[];function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Example Composite FullNameCredential"',children:'{\n  "id": "1be7c008-3f0c-4a21-9aad-69ca1c4251d2", // the credential id\n  // highlight-start\n  "type": "FullNameCredential", // the type of credential\n  // highlight-end\n  "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55", // the brand uuid of the issuer\n  "issuanceDate": "1671847264479", // date the credential was issued in milliseconds since unix epoch\n  "expirationDate": "1871839024044", // date the credential expires in milliseconds since unix epoch\n  // highlight-start\n  // the data attribute must match the FullNameCredential JSON schema properties as mentioned in the Data Schema section.\n  // i.e. https://schema-resolver.verified.inc/jsonSchema/FullNameCredential\n  "data": [\n    {\n      "id": "2e6a7b9a-e93e-43ba-98a9-c554f4e16457", // `FirstNameCredential` credential id\n      "type": "FirstNameCredential", // the type of credential\n      "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55", // the brand uuid of the issuer\n      "issuanceDate": "1671847264479", // date the credential was issued in milliseconds since unix epoch\n      "expirationDate": "1871839024044", // date the credential expires in milliseconds since unix epoch\n      "data": {\n        "firstName": "Richard"\n      }\n    },\n    {\n      "id": "9a5817ef-e621-4277-8c48-c8ee3776b6c4", // `LastNameCredential` credential id\n      "type": "LastNameCredential", // the type of credential\n      "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55", // the brand uuid of the issuer\n      "issuanceDate": "1671847264479", // date the credential was issued in milliseconds since unix epoch\n      "expirationDate": "1871839024044", // date the credential expires in milliseconds since unix epoch\n      "data": {\n        "lastName": "Hendricks"\n      }\n    }\n  ]\n  // highlight-end\n}\n'})})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},6603:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var i=s(5893),r=s(1151),a=(s(1829),s(262)),t=s(7259),d=s(938);const c={id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},l=void 0,o={id:"terminology",title:"Terminology",description:"We use a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use our tech.",source:"@site/versioned_docs/version-1/terminology.mdx",sourceDirName:".",slug:"/terminology",permalink:"/terminology",draft:!1,unlisted:!1,tags:[],version:"1",frontMatter:{id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"}},h={},u=[{value:"ID Card",id:"id-card",level:2},{value:"Credential",id:"credential",level:2},{value:"Atomic",id:"atomic",level:3},{value:"Composite",id:"composite",level:3},{value:"Request",id:"request",level:2},{value:"User",id:"user",level:2},{value:"User Identifier",id:"user-identifier",level:2},{value:"Brand",id:"brand",level:2},{value:"Customer",id:"customer",level:2}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We use a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use our tech."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"We've included helpful tooltips"})," like ",(0,i.jsx)(a.Z,{text:"Whoa, a tooltip! \ud83d\ude0e",children:"this one"})," (hover over it) throughout the docs. These offer quick definitions, examples, and links to dive in deeper. Anytime you see an underline, hover over it to see the tooltip!"]}),(0,i.jsxs)(n.p,{children:["The tooltips you'll see most often refer to the terms described in this section (for example: ",(0,i.jsx)(a.Z,{type:"credential"}),")."]})]}),"\n",(0,i.jsx)(n.h2,{id:"id-card",children:"ID Card"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A digital ",(0,i.jsx)(n.strong,{children:"ID card"})," is a collection of ",(0,i.jsx)("a",{href:"/terminology#credential",children:(0,i.jsx)(a.Z,{type:"credential",children:"credentials"})})," issued by a ",(0,i.jsx)("a",{href:"#brand",children:(0,i.jsx)(a.Z,{type:"brand"})})," to a ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"credential",children:"Credential"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"credential"})," is a collection of data about a ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user"})}),". It's issued by a ",(0,i.jsx)("a",{href:"#brand",children:(0,i.jsx)(a.Z,{type:"brand"})})," and can be ",(0,i.jsx)("a",{href:"#request",children:(0,i.jsx)(a.Z,{type:"request",children:"requested"})})," by other ",(0,i.jsx)("a",{href:"#customer",children:(0,i.jsx)(a.Z,{type:"customer",children:"customers"})}),", with the ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user",children:"user's"})})," consent."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," Hooli and Kredita are ",(0,i.jsx)("a",{href:"#brand",children:(0,i.jsx)(a.Z,{type:"brand",children:"brands"})}),", and Richard is a ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Hooli verifies Richard's address and issues a credential of type ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"AddressCredential"})})," to him (as part of ",(0,i.jsx)(n.a,{href:"/issue-to-earn",children:"Issue to Earn"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Kredita ",(0,i.jsx)("a",{href:"#request",children:(0,i.jsx)(a.Z,{type:"request",children:"requests"})})," an address credential from Richard (as part of ",(0,i.jsx)(n.a,{href:"/",children:"1-Click Signup"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Richard consents to share his address credential with Kredita."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"API:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)("a",{href:"#brand",children:(0,i.jsx)(a.Z,{type:"brand"})})," issues credentials to a ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user"})})," via ",(0,i.jsx)(n.a,{href:"/api-reference#issue-credentials",children:(0,i.jsx)(n.code,{children:"POST /credentials"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)("a",{href:"#brand",children:(0,i.jsx)(a.Z,{type:"brand"})})," ",(0,i.jsx)("a",{href:"#request",children:(0,i.jsx)(a.Z,{type:"request",children:"requests"})})," credentials from a ",(0,i.jsx)("a",{href:"#user",children:(0,i.jsx)(a.Z,{type:"user"})})," via ",(0,i.jsx)(n.a,{href:"/api-reference#1-click",children:(0,i.jsx)(n.code,{children:"POST /1-click"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Credential Data is Stored Securely",type:"warning",children:(0,i.jsx)(n.p,{children:"The data is stored securely using a data privacy vault and is only available to the user and brands the user agrees to share with."})}),"\n",(0,i.jsx)(n.p,{children:"At a high level, a credential contains three pieces of information:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"type"}),"\n",(0,i.jsx)(n.li,{children:"user identifier"}),"\n",(0,i.jsx)(n.li,{children:"user data"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The data must match the ",(0,i.jsx)(n.a,{href:"/schema",children:"data schema"})," for the credential type."]}),"\n",(0,i.jsx)(n.h3,{id:"atomic",children:"Atomic"}),"\n",(0,i.jsxs)(n.p,{children:["Atomic credentials contain single data points. For example, an ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"EmailCredential"})})," is an atomic credential that contains an email address."]}),"\n",(0,i.jsxs)(n.p,{children:["Some atomic credentials can be contained within ",(0,i.jsx)(n.a,{href:"#composite",children:"composite"})," credentials. For example, ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"FirstNameCredential"})})," is an atomic credential that can be contained within the composite ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"FullNameCredential"})}),"."]}),"\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsx)(n.h3,{id:"composite",children:"Composite"}),"\n",(0,i.jsxs)(n.p,{children:["Composite credentials are composed of multiple atomic credentials. For example, a ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"FullNameCredential"})})," can be composed of a ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"FirstNameCredential"})})," and a ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"LastNameCredential"})}),". It can also include a ",(0,i.jsx)(n.a,{href:"/schema#schema-library",children:(0,i.jsx)(n.code,{children:"MiddleNameCredential"})}),"."]}),"\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"request"})," (or ",(0,i.jsx)("i",{children:"credentials request"}),") is a request for ",(0,i.jsx)("a",{href:"/terminology#credential",children:(0,i.jsx)(a.Z,{type:"credential",children:"credentials"})}),". It's created when a customer successfully checks if a",(0,i.jsxs)("a",{href:"/terminology#user",children:[" ",(0,i.jsx)(a.Z,{type:"user"})]})," has matching credentials, via ",(0,i.jsx)(n.a,{href:"/api-reference#check-user-credentials",children:(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"})}),". A request is only created if the user has the type of credentials the customer needs."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," Hooli FinTech checks if Richard has a SSN and FullName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the ",(0,i.jsx)(n.code,{children:"url"})," received in the ",(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"})," response body."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Components:"})," A customer checks if a user has the needed types of credentials by using ",(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"}),". If the ",(0,i.jsx)(a.Z,{type:"user"})," does not have the right credentials, then a request is not created. If the user does, a request is created and returned to the customer via the ",(0,i.jsx)(n.code,{children:"url"})," attribute in the ",(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"})," response body."]}),"\n",(0,i.jsxs)(n.p,{children:["The customer then directs the user to the ",(0,i.jsx)(n.code,{children:"url"}),", where the user authenticates and agrees to share the relevant data."]}),"\n",(0,i.jsxs)(n.p,{children:["At a high level, to create a request, a customer inputs a list containing three pieces of information for each credential which makes up the ",(0,i.jsx)(n.code,{children:"credentialsRequests"})," atrribute."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"type of the credential"}),"\n",(0,i.jsxs)(n.li,{children:["acceptable ",(0,i.jsx)(a.Z,{type:"brand",children:"brand(s)"})," that issued the credential"]}),"\n",(0,i.jsx)(n.li,{children:"whether the credential is required or optional (defaults to required)"}),"\n",(0,i.jsx)(n.li,{children:"list of the sub-credentials that make up the credential (optional)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If multiple issuer brands are listed, a credential (of the correct type) from any one of them is acceptable. If none are listed, then any issuer brand is acceptable."}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, the customer must input a user identifier email address and/or phone identifier. You might notice these are the exact inputs to ",(0,i.jsx)(n.a,{href:"/api-reference#check-user-credentials",children:(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The full details of the request object aren't that important or helpful to know, as it's completely internal to Verified Inc., but here's an example of a request for a SsnCredential, PhoneCredential and FullNameCredential from the same issuing brand."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "uuid": "7c9a2365-a2a3-4fec-b446-99b61a074fa8",\n  "id": "854b9889-013d-40a2-93b9-68b9cf8d2540",\n  "createdAt": "1673470082199",\n  "updatedAt": "1673470082200",\n  "email": "test@verified.inc",\n  "phone": null,\n  "description": "Please share the following information:",\n  // highlight-start\n  "credentialRequests": [\n    {\n      "type": "SsnCredential",\n      "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"],\n      "required": true,\n      "description": "We use your social security number for identity verification and tax reporting."\n    },\n    {\n      "type": "PhoneCredential",\n      "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"],\n      "mandatory": "yes",\n      "allowUserInput": true\n    },\n    {\n      "type": "FullNameCredential",\n      "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"],\n      "required": true,\n      "children": [\n        {\n          "type": "FirstNameCredential",\n          "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"]\n        }\n      ]\n    }\n  ],\n  // highlight-end\n  "expirationDate": null,\n  "brand": {\n    "uuid": "8005c39c-54d7-487e-bf4d-9eb5d39ed795",\n    "id": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    "createdAt": "1671595963109",\n    "updatedAt": "1671595963109",\n    "issuerName": "Hooli Issuer",\n    "receiverName": "Hooli Receiver",\n    "cardImageUrl": "https://VerifiedInc-dev-card-images.s3.us-west-2.amazonaws.com/ID+Card+-+Hooli.svg",\n    "customerUuid": "bba94256-5366-4bd5-8e4b-6568be7aaf54"\n  },\n  "user": {\n    "uuid": "77001639-9629-4bad-8d45-4cd0c2b7a7c8",\n    "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n    "createdAt": "1671242870669",\n    "updatedAt": "1671242870669",\n    "phoneNumbers": ["+14043038080"],\n    "emailAddresses": ["test@verified.inc"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"user",children:"User"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"user"})," is an individual in the Verified Inc. network that can share verified identity data (via ",(0,i.jsx)("a",{href:"/terminology#credential",children:(0,i.jsx)(a.Z,{type:"credential",children:"credentials"})}),"). Each user has at least one phone number or email address associated with them. They can have multiple of either."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Users can be referenced by email and/or phone, identifiers that you already have for your own user accounts. This prevents you from needing to use Verified Inc. specific user IDs."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," Richard is a user in your account system and potentially a user in the Verified Inc. network. You have two email addresses and one phone number for him. You can use any of these identifiers to issue credentials to him or check if he has matching credentials."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Components:"})," You can issue credentials using ",(0,i.jsx)(n.a,{href:"/api-reference#issue-credentials",children:(0,i.jsx)(n.code,{children:"/credentials"})})," and check for matching credentials with ",(0,i.jsx)(n.a,{href:"/api-reference#check-user-credentials",children:(0,i.jsx)(n.code,{children:"/hasMatchingCredentials"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n  "createdAt": "1671242870669",\n  "updatedAt": "1671242870669",\n  "emailAddresses": ["test@verified.inc"],\n  "phoneNumbers": []\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"user-identifier",children:"User Identifier"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"userIdentifier"})," is a value used to refer to an user. Due to the ubiquitous nature of ",(0,i.jsx)(n.code,{children:"phone"})," and/or ",(0,i.jsx)(n.code,{children:"email"})," values being associated with ",(0,i.jsx)("a",{href:"/terminology#user",children:"users"})," we have adopted to this term to refer to either of these values."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A user can have many userIdentifiers of email and phones."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.a,{href:"mailto:richard@pipedpiper.net",children:"richard@pipedpiper.net"})," is one of Richard Hendrick's user identifiers. He also has a phone number of +10123456789, another one of his user identifiers."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Components:"})," We have abstracted away the complexity of dealing with a third party uuid to refer to a user. Instead, you can use the user's email or phone number to refer to and issue credentials to users in our system."]}),"\n",(0,i.jsx)(n.h2,{id:"brand",children:"Brand"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"brand"})," is a customer entity that has a corresponding unique API key, name, and ID card image. Brands can issue, request and receive ",(0,i.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to and from ",(0,i.jsx)("a",{href:"/terminology#user",children:"users"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A customer can have one to many brands. A brand can be assoicated with only one customer."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique API key, name, and ID card image."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Components:"})," Each brand has an associated parent customer. A customer can have one or more brands."]}),"\n",(0,i.jsx)(n.h2,{id:"customer",children:"Customer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"customer"})," serves as a parent to brands and their corresponding API keys."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Our self service Dashboard is coming soon. It will allow you authenticate as a customer and create and manage your ",(0,i.jsx)(a.Z,{type:"brand",children:"brands"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'Throughout our docs we use verbiage similar to a "customer must make an api request" or "a customer must check credentials" however we are actually referring to a "brand". This is because a brand is the entity that has a unique API key. So when we say "customer" we technically mean a customer using one of its brand API keys.'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ACME Bank is an Verified Inc. customer and has two brands: ACME Lending and ACME Savings."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Components:"})," The admins of the customer can manage individual ",(0,i.jsx)(a.Z,{type:"brand",children:"brand"})," settings."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},262:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var i=s(5934),r=s(1829),a=s(7893),t=s.n(a),d=s(5893);const c=e=>{let{type:n,text:s,children:a}=e;if(n&&l[n]){var t=(0,i.Z)();return a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{id:t,children:l[n]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":t,children:a})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{id:t,children:l[n]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":t,children:n})]})}var c=(0,i.Z)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{id:c}),(0,d.jsx)("u",{"data-tip":s,"data-for":c,children:a})]})},l={credential:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credential"})," is a collection of data about a person."]})," It's issued by a company and can be requested by other network participants, gated by the user's consent."]}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Lending issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company issues credentials following the steps in the ",(0,d.jsx)("a",{href:"/issuance-guide",children:"Issuance Guide"}),"."]})]})]}),request:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#request",children:"request"})," (or ",(0,d.jsx)("i",{children:"credential request"}),") is a request for a ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to be shared by a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]})," It's created when a company successfully checks if a user has matching credentials, via ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),"  Only if the user has the ability to response with the matching credentials is a request created."]}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Hooli FinTech checks if Richard has a SSN and LastName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the `url` received in the `/hasMatchingCredentials` response body."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company creates a user specific request by using ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),". If it is case the ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," does not have the desired credentials then a request is not created. If it is the case the user does, a request is created and is returned in the form of a `url` attribute in response to the client."]})]})]}),user:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," is an individual in the Verified Inc. network."]})," Each user has at least one phone or emails, aka ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifiers"})," associated with them. They can have multiple of either."]}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Richard is a user in your account system and potentially of the Verified Inc. network. He has two email addresses and one phone with him. Credentials can be issued to or requested of him using any of these identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Referenced in API endpoints `/hasMatchingCredentials` and `/issueCredentials`. User data is associated by using these user identifiers that you already keep on your users."]})]})]}),userIdentifier:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifier"})," is an email or phone value"]})," which is associated with a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," richard@pipedpiper.net is one of Richard Hendrick's user identifiers. He also has a phone number of +10123456789, another one of his user identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," We have abstracted away the complexity of dealing with a third party uuid to refer to a user. Instead, you can use the user's email or phone number to refer to and issue credentials to users in our system."]})]})]}),brand:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," is a company entity that has a corresponding unique api key, name, and card image."]})," Brands can issue, request and receive ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to and from ",(0,d.jsx)("a",{href:"/terminology#user",children:"users"}),"."]}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique api key, name, and card image."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Each brand has an associated umbrella customer. It is totally okay if your customer only has one brand. We want to have the flexibility to support multiple brands per customer."]})]})]}),customer:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#customer",children:"customer"})," is a company entity that serves as a parent to brands and their corresponding ApiKeys."]})}),(0,d.jsxs)(t(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is the Verified Inc. customer where their self service dashboard access rights are defined."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," The admins of the customer can manage individual ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," settings."]})]})]})}},1829:(e,n,s)=>{s.d(n,{Z:()=>a});s(7294);var i=s(4762),r=s(5893);const a=e=>{let{children:n,...s}=e;return(0,r.jsx)(i.Z,{type:"dark",place:"top",effect:"solid",multiline:!0,textColor:"white",backgroundColor:"#2e2e2e",arrowColor:"transparent",delayHide:250,delayUpdate:250,resizeHide:!1,...s,className:"tooltip",wrapper:"span",children:n})}}}]);