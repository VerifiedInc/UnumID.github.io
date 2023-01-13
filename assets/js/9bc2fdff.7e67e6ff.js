"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[371],{680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106));const s={id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},o=void 0,l={unversionedId:"terminology",id:"terminology",title:"Terminology",description:"Unum ID uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Unum ID tech.",source:"@site/docs/terminology.mdx",sourceDirName:".",slug:"/terminology",permalink:"/terminology",draft:!1,tags:[],version:"current",frontMatter:{id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},sidebar:"sidebar",previous:{title:"About Unum ID",permalink:"/"},next:{title:"Data Schema",permalink:"/schema"}},d={},p=[{value:"Main Terms",id:"main-terms",level:2},{value:"Credential",id:"credential",level:3},{value:"Presentation",id:"presentation",level:3},{value:"Request",id:"request",level:3},{value:"User",id:"user",level:3},{value:"Less Important Terms",id:"less-important-terms",level:2},{value:"Brand",id:"brand",level:3},{value:"Customer",id:"customer",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unum ID uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Unum ID tech."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We've included helpful tooltips")," like ",(0,r.kt)(i.Z,{text:"Whoa, a tooltip! \ud83d\ude0e",mdxType:"Tip"},"this one")," (hover over it) throughout the docs. These offer quick definitions, examples, and links to dive in deeper. Anytime you see an underline, hover over it to see the tooltip!"),(0,r.kt)("p",{parentName:"admonition"},"The tooltips you'll see most often refer to the terms described in this section (for example: ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"}),").")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("a",{parentName:"strong",href:"#main-terms"},"main terms")," to know are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#credential"},"credential"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#presentation"},"presentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#request"},"request"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#user"},"user")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#less-important-terms"},"less important terms")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#brand"},"brand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#customer"},"customer"))),(0,r.kt)("h2",{id:"main-terms"},"Main Terms"),(0,r.kt)("h3",{id:"credential"},"Credential"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"credential")," is a collection of data about a person. It's issued by a company and can be requested by other network participants, gated by the user's consent.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Bank issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," A company issues credentials using the ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#issue-credentials"},"/credentials")," API endpoint. The data is store securely using a data privacy vault and is only avaliable to the user and brands the user agrees to share with."),(0,r.kt)("p",null,"At a high level, to issue a credential a company inputs three pieces of information:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"type of the credential"),(0,r.kt)("li",{parentName:"ol"},"identifier for the person "),(0,r.kt)("li",{parentName:"ol"},"data about the person")),(0,r.kt)("p",null,"The data schema must match the corresponding credential type. Information on the data formats for each type can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"Data Schema")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "d09ce4f8-6651-406b-a4e5-e4989b7f5254",\n    // highlight-start\n    "type": "SsnCredential", // the type of credential\n    // highlight-end\n    "userIdentifier": "test@unumid.abcde",\n    "issuanceDate": "1673552399458",\n    "expirationDate": "1701483024054",\n    // highlight-start\n    // the data attribute must match the SsnCredential JSON schema properties as mentioned in the Data Schema section.\n    // i.e. https://schema.unumid.co/jsonSchema/SsnCredential\n    "data": {\n        "ssn": "111-22-3333"\n    }\n    // highlight-end\n}\n')),(0,r.kt)("h3",{id:"presentation"},"Presentation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"presentation")," is a set of one or more ",(0,r.kt)("a",{href:"/terminology#credential"},(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials")),". It's shared with (or ",(0,r.kt)("i",null,"presented")," to) a company by a user.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Richard shares a presentation of a KYC verification credential (which ACME Bank issued to him) with Hooli FinTech."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," Upon a user agreeing to share (or ",(0,r.kt)("i",null,"present"),") a presentation using the ",(0,r.kt)("a",{href:"/web-wallet"},"Unum ID Web Wallet"),", the generated presentation uuid is passed back to the referring customer client and presentation object is securely stored for retrieval in the Unum ID cloud. The `uuid`` is used by the customer to ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#get-presentation-data"},"get presentation data")," which contains the requested credential data."),(0,r.kt)("p",null,"A user always shares a presentation in response to a ",(0,r.kt)(i.Z,{type:"request",mdxType:"Tip"}),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A presentation's credential data is stored securely via a data privacy vault that encrypts and tokenizes the data. The data is only retrieved and decrypted for the brand that matches whom the presentation was created for and agreed to share with by the user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // highlight-start\n    "uuid": "36dadccb-5f34-4fe9-82d0-8a9bdbaca1b2", // the presentation uuid used for its retrieval\n    // highlight-end\n    "createdAt": "1673494220947",\n    "updatedAt": "1673494220947",\n    // highlight-start\n    "brandUuid": "8005c39c-54d7-487e-bf4d-9eb5d39ed795", // this should always match your own ApiKey\'s brand uuid.\n    // highlight-end\n    "presentationRequestUuid": "82d0616e-df5a-471a-9029-885e905a3966", // the corresponding presentation request uuid\n    "user": {\n        "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n        "emailAddresses": ["test@unumid.co"],\n        "phoneNumbers": []\n    },\n    "credentials": [\n        // highlight-start\n        {\n            "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n            "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n            "type": "EmailCredential",\n            "data": {\n                "email": "test@unumid.co"\n            },\n            "issuanceDate": "1671847264479",\n            "expirationDate": "1871839024044",\n        }\n        // highlight-end\n    ]\n}\n')),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"request")," (or ",(0,r.kt)("i",null,"presentation request"),") is a request for a ",(0,r.kt)("a",{href:"/terminology#presentation"},(0,r.kt)(i.Z,{type:"presentation",mdxType:"Tip"})),". It's created when a company successfully checks if a ",(0,r.kt)(i.Z,{type:"user",mdxType:"Tip"})," has matching credentials, via ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},"/hasMatchingCredentials"),". Only if the user has the ability to response with the requested credential data is a request created.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Hooli FinTech checks if Richard has a SSN credential issued by ACME Bank. Because he does a request is created for a presentation of a SSN credential specifically from ACME Bank. This request is to be presented to Richard via Hooli directing to the resultant ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," in the /hasMatchingCredentials response body."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," A company creates a user specific request by using ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},"/hasMatchingCredentials"),". If it is case the ",(0,r.kt)(i.Z,{type:"user",mdxType:"Tip"})," does not have the desired credentials then a request is not created. If it is the case the user does, a request is created and is returned in the form of a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," attribute in response to the client. "),(0,r.kt)("p",null,"The client is then expected to direct to the url, which will be to ",(0,r.kt)("a",{href:"/web-wallet"},"Unum ID Web Wallet"),", where the user will be required to authenticate then agree to share the data relevant data."),(0,r.kt)("p",null,"At a high level, to create a request a company inputs a list containing three pieces of information for each credential:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"type of the credential"),(0,r.kt)("li",{parentName:"ol"},"acceptable ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand(s)")," of the credential"),(0,r.kt)("li",{parentName:"ol"},"whether the credential is required or optional; defaults to required")),(0,r.kt)("p",null,"If multiple issuer brands are listed, a credential (of the correct type) from any one of them is acceptable. If none, then any issuer of the desired credential type is acceptable."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"})," of the credential can be ",(0,r.kt)("em",{parentName:"p"},"the same company")," as the one making the request! For example, a single company issues an authentication credential to a user, who later shares a presentation containing that credential back with the company to authenticate.")),(0,r.kt)("p",null,"The full details of the request object aren't that important or helpful to know as it completely internal to Unum ID, but here's an example of a request for a FirstName and LastName credential from the same issuing brand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "7c9a2365-a2a3-4fec-b446-99b61a074fa8",\n    "id": "854b9889-013d-40a2-93b9-68b9cf8d2540",\n    "createdAt": "1673470082199",\n    "updatedAt": "1673470082200",\n    "email": "test@unumid.co",\n    "phone": null,\n    // highlight-start\n    "credentialRequests": [\n        {\n            "type": "FirstName",\n            "issuers": [\n                "d14ca24c-5323-4b79-9dfa-6471b014d68c"\n            ],\n            "required": true\n        },\n        {\n            "type": "LastName",\n            "issuers": [\n                "d14ca24c-5323-4b79-9dfa-6471b014d68c"\n            ],\n            "required": true\n        }\n    ],\n    // highlight-end\n    "expirationDate": null,\n    "brand": {\n        "uuid": "8005c39c-54d7-487e-bf4d-9eb5d39ed795",\n        "id": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n        "createdAt": "1671595963109",\n        "updatedAt": "1671595963109",\n        "issuerName": "Hooli Issuer",\n        "receiverName": "Hooli Receiver",\n        "cardImageUrl": "https://unumid-dev-card-images.s3.us-west-2.amazonaws.com/ID+Card+-+Hooli.svg",\n        "customerUuid": "bba94256-5366-4bd5-8e4b-6568be7aaf54"\n    },\n    "user": {\n        "uuid": "77001639-9629-4bad-8d45-4cd0c2b7a7c8",\n        "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n        "createdAt": "1671242870669",\n        "updatedAt": "1671242870669",\n        "phoneNumbers": ["+14043038080"],\n        "emailAddresses": ["test@unumid.co"]\n    }\n}\n')),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"user")," is an individual in the Unum ID network that can share credential data. Each user has at least one phone or emails associated with them. They can have multiple of either.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'To avoid having to define, query, and share the Unum ID User "ID", users can be simply referenced by email and/or phone, identifiers that your already have for your own user accounts.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Richard is a user in your account system and potentially of the Unum ID network. He has two email addresses and one phone with him. Credentials can be issued to or requested of him using any of these identifiers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," Referenced in API endpoints ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},"/hasMatchingCredentials")," and ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#issue-credentials"},"/credentials"),". User data is associated by using these user identifiers that you already keep on your users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "e31de809-ea49-4384-9d3e-6c70d5ff05c7",\n    "createdAt": "1671242870669",\n    "updatedAt": "1671242870669",\n    "emailAddresses": ["test@unumid.co"],\n    "phoneNumbers": []\n}\n')),(0,r.kt)("h2",{id:"less-important-terms"},"Less Important Terms"),(0,r.kt)("p",null,"When possible, we avoid using these less important terms to make the docs more readable and lighter on jargon. However, there are cases where it's necessary to use more precise language, so this section serves as a useful reference."),(0,r.kt)("h3",{id:"brand"},"Brand"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"brand")," is a company entity that has a corresponding unique api key, name, and card image. Brands can issue, request and receive ",(0,r.kt)("a",{href:"/terminology#credential"},"credentials")," to and from ",(0,r.kt)("a",{href:"/terminology#user"},"users"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A customer can have one to many brands. A brand can be assoicated with only one customer.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Bank is an Unum ID customer. However they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique api key, name, and card image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," Each brand has an associated parent customer. It is totally okay if your customer only has one brand. We want to have the flexibility to support multiple brands per customer."),(0,r.kt)("h3",{id:"customer"},"Customer"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"customer")," is a company entity that serves as a parent to brands and their corresponding ApiKeys.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The self service Dashboard ",(0,r.kt)("em",{parentName:"p"},"coming soon")," will authenticate at the Customer level in order to create and manage ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brands"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ACME Bank is the Unum ID customer where their self service dashboard access rights are defined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components:")," The admins of the customer can manage individual ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand"),". settings."))}c.isMDXComponent=!0}}]);