"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[371],{680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106));const s={id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},o=void 0,d={unversionedId:"terminology",id:"terminology",title:"Terminology",description:"Verified Inc. uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Verified Inc. tech.",source:"@site/docs/terminology.mdx",sourceDirName:".",slug:"/terminology",permalink:"/terminology",draft:!1,tags:[],version:"current",frontMatter:{id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},sidebar:"sidebar",previous:{title:"About Verified Inc.",permalink:"/"},next:{title:"FAQ",permalink:"/faq"}},l={},c=[{value:"Main Terms",id:"main-terms",level:2},{value:"Credential",id:"credential",level:3},{value:"Request",id:"request",level:3},{value:"User",id:"user",level:3},{value:"Brand",id:"brand",level:3},{value:"Customer",id:"customer",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verified Inc. uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Verified Inc. tech."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We've included helpful tooltips")," like ",(0,r.kt)(i.Z,{text:"Whoa, a tooltip! \ud83d\ude0e",mdxType:"Tip"},"this one")," (hover over it) throughout the docs. These offer quick definitions, examples, and links to dive in deeper. Anytime you see an underline, hover over it to see the tooltip!"),(0,r.kt)("p",{parentName:"admonition"},"The tooltips you'll see most often refer to the terms described in this section (for example: ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"}),").")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("a",{parentName:"strong",href:"#main-terms"},"main terms")," to know are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#credential"},"credential"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#request"},"request"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#user"},"user"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#brand"},"brand"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#customer"},"customer")))),(0,r.kt)("h2",{id:"main-terms"},"Main Terms"),(0,r.kt)("h3",{id:"credential"},"Credential"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"credential")," is a collection of data about a person. It's issued by a company and can be requested by other network participants, gated by the user's consent.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Lending issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," A company issues credentials using the ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#issue-credentials"},"/credentials")," API endpoint. The data is stored securely using a data privacy vault and is only available to the user and brands the user agrees to share with."),(0,r.kt)("p",null,"At a high level, to issue a credential a company inputs three pieces of information:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"type of the credential"),(0,r.kt)("li",{parentName:"ol"},"identifier for the person"),(0,r.kt)("li",{parentName:"ol"},"data about the person")),(0,r.kt)("p",null,"The data schema must match the corresponding credential type. Information on the data formats for each type can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"Data Schema")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c", // the credential id\n  // highlight-start\n  "type": "EmailCredential", // the type of credential\n  // highlight-end\n  "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55", // the brand uuid of the issuer\n  "issuanceDate": "1671847264479", // date the credential was issued in milliseconds since unix epoch\n  "expirationDate": "1871839024044", // date the credential expires in milliseconds since unix epoch\n  // highlight-start\n  // the data attribute must match the SsnCredential JSON schema properties as mentioned in the Data Schema section.\n  // i.e. https://schema.verified.inc/jsonSchema/SsnCredential\n  "data": {\n    "email": "test@verified.inc"\n  }\n  // highlight-end\n}\n')),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"request")," (or ",(0,r.kt)("i",null,"credentials request"),") is a request for ",(0,r.kt)("a",{href:"/terminology#credential"},(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials")),". It's created when a customer successfully checks if a",(0,r.kt)("a",{href:"/terminology#user"}," ",(0,r.kt)(i.Z,{type:"user",mdxType:"Tip"}))," has matching credentials, via ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")),". A request is only created if the user has the type of credentials the customer needs.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Hooli FinTech checks if Richard has a SSN and LastName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," received in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/hasMatchingCredentials")," response body."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," A customer checks if a user has the needed types of credentials by using ",(0,r.kt)("inlineCode",{parentName:"p"},"/hasMatchingCredentials"),". If the ",(0,r.kt)(i.Z,{type:"user",mdxType:"Tip"})," does not have the right credentials, then a request is not created. If the user does, a request is created and returned to the customer via the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/hasMatchingCredentials")," response body."),(0,r.kt)("p",null,"The customer then directs the user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", where the user authenticates and agrees to share the relevant data."),(0,r.kt)("p",null,"At a high level, to create a request, a customer inputs a list containing three pieces of information for each credential which makes up the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialsRequests")," atrribute."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"type of the credential"),(0,r.kt)("li",{parentName:"ol"},"acceptable ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand(s)")," that issued the credential"),(0,r.kt)("li",{parentName:"ol"},"whether the credential is required or optional (defaults to required)")),(0,r.kt)("p",null,"If multiple issuer brands are listed, a credential (of the correct type) from any one of them is acceptable. If none are listed, then any issuer brand is acceptable."),(0,r.kt)("p",null,"Additionally, the customer must input a user identifier email address and/or phone identifier. You might notice these are the exact inputs to ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")),"."),(0,r.kt)("p",null,"The full details of the request object aren't that important or helpful to know, as it's completely internal to Verified Inc., but here's an example of a request for a FirstName and LastName credential from the same issuing brand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "7c9a2365-a2a3-4fec-b446-99b61a074fa8",\n  "id": "854b9889-013d-40a2-93b9-68b9cf8d2540",\n  "createdAt": "1673470082199",\n  "updatedAt": "1673470082200",\n  "email": "test@verified.inc",\n  "phone": null,\n  // highlight-start\n  "credentialRequests": [\n    {\n      "type": "SsnCredential",\n      "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"],\n      "required": true\n    },\n    {\n      "type": "LastNameCredential",\n      "issuers": ["d14ca24c-5323-4b79-9dfa-6471b014d68c"],\n      "required": true\n    }\n  ],\n  // highlight-end\n  "expirationDate": null,\n  "brand": {\n    "uuid": "8005c39c-54d7-487e-bf4d-9eb5d39ed795",\n    "id": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    "createdAt": "1671595963109",\n    "updatedAt": "1671595963109",\n    "issuerName": "Hooli Issuer",\n    "receiverName": "Hooli Receiver",\n    "cardImageUrl": "https://unumid-dev-card-images.s3.us-west-2.amazonaws.com/ID+Card+-+Hooli.svg",\n    "customerUuid": "bba94256-5366-4bd5-8e4b-6568be7aaf54"\n  },\n  "user": {\n    "uuid": "77001639-9629-4bad-8d45-4cd0c2b7a7c8",\n    "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n    "createdAt": "1671242870669",\n    "updatedAt": "1671242870669",\n    "phoneNumbers": ["+14043038080"],\n    "emailAddresses": ["test@verified.inc"]\n  }\n}\n')),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"user")," is an individual in the Verified Inc. network that can share verified identity data (via ",(0,r.kt)("a",{href:"/terminology#credential"},(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials")),"). Each user has at least one phone number or email address associated with them. They can have multiple of either.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Users can be referenced by email and/or phone, identifiers that you already have for your own user accounts. This prevents you from needing to use Verified Inc. specific user IDs.  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Richard is a user in your account system and potentially a user in the Verified Inc. network. You have two email addresses and one phone number for him. You can use any of these identifiers to issue credentials to him or check if he has matching credentials."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," You can issue credentials using ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#issue-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/credentials"))," and check for matching credentials with ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n  "createdAt": "1671242870669",\n  "updatedAt": "1671242870669",\n  "emailAddresses": ["test@verified.inc"],\n  "phoneNumbers": []\n}\n')),(0,r.kt)("h3",{id:"brand"},"Brand"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"brand")," is a customer entity that has a corresponding unique API key, name, and ID card image. Brands can issue, request and receive ",(0,r.kt)("a",{href:"/terminology#credential"},"credentials")," to and from ",(0,r.kt)("a",{href:"/terminology#user"},"users"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A customer can have one to many brands. A brand can be assoicated with only one customer.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique API key, name, and ID card image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," Each brand has an associated parent customer. A customer can have one or more brands."),(0,r.kt)("h3",{id:"customer"},"Customer"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"customer")," serves as a parent to brands and their corresponding API keys.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Our self service Dashboard is coming soon. It will allow you authenticate as a customer and create and manage your ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brands"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Throughout our docs we use verbiage similar to a "customer must make an api request" or "a customer must check credentials" however we are actually referring to a "brand". This is because a brand is the entity that has a unique API key. So when we say "customer" we technically mean a customer using one of its brand API keys.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Bank is an Verified Inc. customer and has two brands: ACME Lending and ACME Savings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," The admins of the customer can manage individual ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand")," settings."))}p.isMDXComponent=!0}}]);