(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),r=(a(0),a(102)),s=(a(104),a(105)),o={id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/terminology"},c={unversionedId:"terminology",id:"terminology",isDocsHomePage:!1,title:"Terminology",description:"Unum ID uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Unum ID tech.",source:"@site/docs/terminology.mdx",slug:"/terminology",permalink:"/terminology",version:"current",sidebar_label:"Terminology",sidebar:"sidebar",previous:{title:"About Unum ID",permalink:"/"},next:{title:"Architecture",permalink:"/architecture"}},b=[{value:"Main Terms",id:"main-terms",children:[{value:"Credential",id:"credential",children:[]},{value:"Presentation",id:"presentation",children:[]},{value:"Request",id:"request",children:[]}]},{value:"Less Important Terms",id:"less-important-terms",children:[{value:"Issuer",id:"issuer",children:[]},{value:"Holder App",id:"holder-app",children:[]},{value:"Holder",id:"holder",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Verifier",id:"verifier",children:[]},{value:"DID",id:"did",children:[]}]}],p={toc:b};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Unum ID uses a few specialized terms and concepts. It's not necessary to understand these in full detail, but knowing a little about them will help you deploy and use Unum ID tech."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"We've included helpful tooltips")," like ",Object(r.b)(s.a,{text:"Whoa, a tooltip! \ud83d\ude0e",mdxType:"Tip"},"this one")," (hover over it) throughout the docs. These offer quick definitions, examples, and links to dive in deeper. Anytime you see an underline, hover over it to see the tooltip!"),Object(r.b)("p",{parentName:"div"},"The tooltips you'll see most often refer to the terms described in this section (for example: ",Object(r.b)(s.a,{type:"credential",mdxType:"Tip"}),")."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The ",Object(r.b)("a",{parentName:"strong",href:"#main-terms"},"main terms")," to know are:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"#credential"},"credential"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"#presentation"},"presentation"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"#request"},"request")))),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"#less-important-terms"},"less important terms")," are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#issuer"},"issuer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#holder-app"},"holder app")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#holder"},"holder")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#subject"},"subject")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#verifier"},"verifier")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#did"},"DID"))),Object(r.b)("p",null,"When possible, we avoid using these less important terms to make the docs more readable and lighter on jargon."),Object(r.b)("h2",{id:"main-terms"},"Main Terms"),Object(r.b)("h3",{id:"credential"},"Credential"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"credential")," is a collection of data about a person. It's issued by a company (i.e. created and sent to a user) and stored in the company's app, on that user's device.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ACME Bank issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A company issues credentials using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK"),", and an app stores credentials using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),"."),Object(r.b)("p",null,"At a high level, to issue a credential a company inputs four pieces of information (into the ",Object(r.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK"),", which handles the rest):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"type of the credential"),Object(r.b)("li",{parentName:"ol"},"identifier for the person "),Object(r.b)("li",{parentName:"ol"},"data about the person"),Object(r.b)("li",{parentName:"ol"},"identifier for the company")),Object(r.b)("p",null,"The data can be anything at all (any valid JSON) \u2014 contact information, proof of government ID, medical data, etc."),Object(r.b)("p",null,"The credential is cryptographically signed with the company's private key. This makes it possible to later check that the credential is valid and was issued by that company."),Object(r.b)("p",null,"The full details of the credential object aren't that important or helpful to know, but here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "credentialStatus": {\n        "id": "https://api.unumid.co/credentialStatus/f8287c1e-0c56-460a-92af-5519f5c10cbf",\n        "type": "CredentialStatus"\n    },\n    // type of credential\n    // highlight-next-line\n    "type": ["VerifiableCredential", "UsernameCredential"],\n    // a string representation of an object with  with an id attribute and any number of arbitrary key value pairs.\n    "credentialSubject": stringify({\n        // identifier for the person\n        // highlight-next-line\n        "id": "did:unum:5f5eb3dd-d0e0-4356-bfdd-96bc1393c705",\n        // data about the person\n        // highlight-next-line\n        "username": "Analyst-Shoes-278"\n    }),\n    // identifier for the company\n    // highlight-next-line\n    "issuer": "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5",\n    "id": "f8287c1e-0c56-460a-92af-5519f5c10cbf",\n    "issuanceDate": "2021-01-09T02:23:54.844Z",\n    "expirationDate": "2022-01-09T00:00:00.000Z",\n    // cryptographic signature, created with company\'s private key\n    // highlight-start\n    "proof": {\n        "created": "2021-01-09T02:23:54.844Z",\n        "signatureValue": "AN1rKrsBLQWXcn3H6cD34FuN9w3crhpD3aogteduJZtu7NRKPYpgnfxFvJC1xMENaCZpcWpchWdpMZ5TYZmGohv8Y3kCpgUNG",\n        "type": "secp256r1Signature2020",\n        "verificationMethod": "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5",\n        "proofPurpose": "AssertionMethod"\n    }\n    // highlight-end\n}\n')),Object(r.b)("h3",{id:"presentation"},"Presentation"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"presentation")," is a set of one or more ",Object(r.b)("a",{href:"/terminology#credential"},Object(r.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials")),". It's shared with (or ",Object(r.b)("i",null,"presented")," to) a company by a user.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," Richard shares a presentation of a KYC verification credential (which ACME Bank issued to him) with Hooli FinTech."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A user's app shares (or ",Object(r.b)("i",null,"presents"),") presentations using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),", and a company verifies presentations using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK"),"."),Object(r.b)("p",null,"A user typically (but not always) shares a presentation in response to a ",Object(r.b)(s.a,{type:"request",mdxType:"Tip"}),". The user's app first asks them if they want to share the requested information. Then, if the user chooses to share, the app prompts them to pass a biometric/passcode check. If the user passes that check, the app creates a presentation and sends it."),Object(r.b)("p",null,"The presentation is cryptographically signed with the user's private key. This makes it possible to later check that the presentation is valid and was created by the user's app, on their device."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Each credential within the presentation is ",Object(r.b)("em",{parentName:"p"},"itself")," cryptographically signed but with the private key of the company that issued it. So, for example, a presentation of three credentials has four total signatures: one on each credential and one on the whole presentation."))),Object(r.b)("p",null,"The full details of the presentation object aren't that important or helpful to know, but here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "type": ["VerifiablePresentation"],\n    // credentials contained in presentation, in this case just one\n    // highlight-start\n    "verifiableCredential": [\n        {\n            "@context": ["https://www.w3.org/2018/credentials/v1"],\n            "credentialStatus": {\n                "id": "https://api.unumid.co/credentialStatus/f8287c1e-0c56-460a-92af-5519f5c10cbf",\n                "type": "CredentialStatus"\n            },\n            "type": ["VerifiableCredential", "UsernameCredential"],\n            "credentialSubject": stringify({\n                "id": "did:unum:5f5eb3dd-d0e0-4356-bfdd-96bc1393c705",\n                "username": "Analyst-Shoes-278"\n            }),\n            "issuer": "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5",\n            "id": "f8287c1e-0c56-460a-92af-5519f5c10cbf",\n            "issuanceDate": "2021-01-09T02:23:54.844Z",\n            "expirationDate": "2022-01-09T00:00:00.000Z",\n            "proof": {\n                "created": "2021-01-09T02:23:54.844Z",\n                "signatureValue": "AN1rKrsBLQWXcn3H6cD34FuN9w3crhpD3aogteduJZtu7NRKPYpgnfxFvJC1xMENaCZpcWpchWdpMZ5TYZmGohv8Y3kCpgUNG",\n                "type": "secp256r1Signature2020",\n                "verificationMethod": "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5",\n                "proofPurpose": "AssertionMethod"\n            }\n        }\n    ],\n    // highlight-end\n    // request presentation is in response to\n    // highlight-next-line\n    "presentationRequestUuid": "0b46168a-3f7c-4675-a8df-87930b253482",\n    // verifier DID that the presentation is meant for\n    // highlight-next-line\n    "verifierDid": "did:unum:5f5eb3dd-d0e0-4356-bfdd-96bc1393c707",\n    // cryptographic signature, created with user\'s private key\n    // highlight-start\n    "proof": {\n        "created": "2021-04-21T01:45:43.390Z",\n        "signatureValue": "381yXZTdpHAZ5QvX8j5cXHLGXRms2KoW2cXg3rvQEhJx6eDqAzAADu8pkxqU1CoSMeMF6QsYAvpJj7ykMkAkzPMEzBLdY7BF",\n        "type": "secp256r1Signature2020",\n        "verificationMethod": "did:unum:9d79fab6-65d7-455d-9160-780b4c152ef6#38de59ae-d475-45b1-8d6b-38764aeec96f",\n        "proofPurpose": "assertionMethod"\n    }\n    // highlight-end\n}\n')),Object(r.b)("h3",{id:"request"},"Request"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"request")," (or ",Object(r.b)("i",null,"presentation request"),") is a request for a ",Object(r.b)("a",{href:"/terminology#presentation"},Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"})),". It's sent by a company to a user, who chooses whether to share a presentation in response.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," Hooli FinTech sends Richard a request for (a presentation of) a KYC verification credential from ACME Bank."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A company creates requests using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK")," and routes them to users using the ",Object(r.b)("a",{href:"/web-sdk"},"Web SDK"),". A user's app responds to requests using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),"."),Object(r.b)("p",null,"At a high level, to create a request a company inputs three pieces of information (into the ",Object(r.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK"),", which handles the rest):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"identifier for the company")),Object(r.b)("p",null,"and a list containing, for each credential:"),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"type of the credential"),Object(r.b)("li",{parentName:"ol"},"acceptable ",Object(r.b)(s.a,{type:"issuer",mdxType:"Tip"},"issuer(s)")," of the credential")),Object(r.b)("p",null,"If multiple issuers are listed, a credential (of the correct type) from any one of them is acceptable."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)(s.a,{type:"issuer",mdxType:"Tip"})," of the credential can be ",Object(r.b)("em",{parentName:"p"},"the same company")," as the one making the request (the ",Object(r.b)(s.a,{type:"verifier",mdxType:"Tip"}),")! This is the case for our ",Object(r.b)("a",{parentName:"p",href:"https://www.unumid.co/solutions/passwordless-auth"},"Passwordless Auth")," product. A single company issues an authentication credential to a user, who later shares a presentation containing that credential back with the company to authenticate."))),Object(r.b)("p",null,"The request is cryptographically signed with the company's private key. This makes it possible to later check that the request is valid and was created by that company, which helps prevent attacks like phishing."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  // the base presentation object\n  "presentationRequest": {\n      "uuid": "47609f52-2cd9-4844-8cec-4fc289c7ddcd",\n      "createdAt": "2021-04-21T01:39:26.983Z",\n      "updatedAt": "2021-04-21T01:39:26.983Z",\n      // default is 10 minutes after creation, but this can be overriden\n      // highlight-next-line\n      "expiresAt": "2021-04-21T01:49:26.983Z",\n      // identifier for the company\n      // highlight-next-line\n      "verifier": "did:unum:f2054199-1069-4337-a588-83d099e79d44",\n      // credentials requested to be included in presentation, in this case only one\n      // highlight-start\n      "credentialRequests": [\n          {\n              // type of credential\n              "type": "UsernameCredential",\n              // acceptable issuer(s) of credential, in this case only one\n              "issuers": [\n                  "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5"\n              ],\n              "required": true\n          }\n      ],\n      // highlight-end\n      // cryptographic signature, created with company\'s private key\n      // highlight-start\n      "proof": {\n          "created": "2021-04-21T01:39:26.984Z",\n          "signatureValue": "AN1rKoiKg91BdpsLTFg6nBctDJwJEjYu6fBJheP6G5se5bRs4oWXu5TR3pdP9WZ5RgiiFWP4bKgfrBgBSmtHfxnwURKDq7das",\n          "type": "secp256r1Signature2020",\n          "verificationMethod": "did:unum:f2054199-1069-4337-a588-83d099e79d44",\n          "proofPurpose": "AssertionMethod"\n      },\n      // highlight-end\n      "metadata": {},\n      "holderAppUuid": "91514d8e-b5b2-41d9-9744-3cbb2bb9a85d"\n  },\n  // enriched verifier information based on the base presentation request\n  // highlight-start\n  "verifier": {\n      "name": \u201cThe Dev Shop\u201c,\n      "did": "did:unum:f2054199-1069-4337-a588-83d099e79d44",\n      "url": "https://developer.demo.unumid.co/presentation"\n  },\n  // highlight-end\n  // enriched issuer information based on the base presentation request\n  // highlight-start\n  "issuers": {\n      "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5": {\n          "name": "Acme Co Issuer",\n          "did": "did:unum:7fc1753e-cdb7-428a-b6ce-eefc0e3634e5"\n      }\n  },\n  // highlight-end\n  // enriched holder app information based on the base presentation request\n  // highlight-start\n  "holderApp": {\n      "name": "ACME, Inc. Test App",\n      "uriScheme": "unumid://",\n      "deeplinkButtonImg": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAABWCAYAAACw7fOyAAAABGdBTUEAALGPC\u2026\u201d\n  },\n  // highlight-end\n  // a deeplink when opened will present the request in the holder app (or take them to the store to download if not installed), facilitating a user responding to the request in the holder app\n  // highlight-next-line\n  "deeplink": "unumid://unumid/presentationRequest/47609f52-2cd9-4844-8cec-4fc289c7ddcd",\n  // a qr code facilitates a user responding to the request in the holder app when scanned\n  // highlight-next-line\n  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAklEQVR4AewaftIAAAWUSURBV\u2026\u201d\n}\n')),Object(r.b)("h2",{id:"less-important-terms"},"Less Important Terms"),Object(r.b)("p",null,"When possible, we avoid using these less important terms to make the docs more readable and lighter on jargon. However, there are cases where it's necessary to use more precise language, so this section serves as a useful reference."),Object(r.b)("h3",{id:"issuer"},"Issuer"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"An ",Object(r.b)("strong",{parentName:"p"},"issuer")," is a role a company can play to issue ",Object(r.b)("a",{href:"/terminology#credential"},Object(r.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials"))," to ",Object(r.b)("a",{href:"/terminology#subject"},Object(r.b)(s.a,{type:"subject",mdxType:"Tip"},"subjects"))," (users). An issuer can also change credential statuses, for example to revoke credentials.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A company can be both an ",Object(r.b)(s.a,{type:"issuer",mdxType:"Tip"})," and a ",Object(r.b)(s.a,{type:"verifier",mdxType:"Tip"}),"! In fact, it can play the roles of many different issuers and verifiers. For example, to implement our ",Object(r.b)("a",{parentName:"p",href:"https://www.unumid.co/solutions/passwordless-auth"},"Passwordless Auth"),", a single company issues an authentication credential to a user, who later shares a presentation (containing that credential), which the company verifies."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ACME Bank issues a KYC verification credential to Richard (an ACME user). It later revokes that credential and issues a new one to Richard to update his information."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," An issuer issues credentials and changes credential statuses using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK"),"."),Object(r.b)("p",null,"To register an issuer and recieve an issuer API key, a company (already registered as an Unum ID customer) submits to us three pieces of information:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"name (human readable)"),Object(r.b)("li",{parentName:"ol"},"logo icon"),Object(r.b)("li",{parentName:"ol"},"brand colors")),Object(r.b)("p",null,"These are used in the ",Object(r.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile SDK")," and ",Object(r.b)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," to display content to users."),Object(r.b)("h3",{id:"holder-app"},"Holder App"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"holder app")," is an Unum ID enabled mobile app. ",Object(r.b)("i",null,"See also: ",Object(r.b)("a",{href:"/terminology#holder"},Object(r.b)(s.a,{type:"holder",mdxType:"Tip"})),"."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ACME Bank adds Unum ID technology to its mobile app, making it a holder app."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A holder app is one using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),"."),Object(r.b)("h3",{id:"holder"},"Holder"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"holder")," is an instance of a ",Object(r.b)("a",{href:"/terminology#holder-app"},Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"})),", installed on a particular device. It stores (or ",Object(r.b)("i",null,"holds"),") ",Object(r.b)("a",{href:"/terminology#credential"},Object(r.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials"))," for a ",Object(r.b)("a",{href:"/terminology#subject"},Object(r.b)(s.a,{type:"subject",mdxType:"Tip"}))," (user). It also allows the subject to respond to ",Object(r.b)("a",{href:"/terminology#request"},Object(r.b)(s.a,{type:"request",mdxType:"Tip"},"requests"))," and share ",Object(r.b)("a",{href:"presentation"},Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations")),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The definition of a holder includes an app ",Object(r.b)("em",{parentName:"p"},"instance")," on a ",Object(r.b)("em",{parentName:"p"},"particular device")," for two reasons:"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"A holder app stores different credentials for different users."),Object(r.b)("li",{parentName:"ol"},"A user's private keys are stored in the secure hardware of their phone (and never leave that device).")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," The ACME Bank app (installed on Richard's phone) stores a KYC verification credential for Richard. When Hooli FinTech requests an ACME KYC verification, the app lets Richard respond with a presentation of the KYC verification credential."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A holder app is one using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),", and a holder is an instance of that installed on a particular device."),Object(r.b)("h3",{id:"subject"},"Subject"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"subject")," is a user of a ",Object(r.b)("a",{href:"terminology#holder-app"},Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"})),". Each subject uses one or more ",Object(r.b)("a",{href:"terminology#holder"},Object(r.b)(s.a,{type:"holder",mdxType:"Tip"},"holders")),".")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'We use "user" instead of "subject" as much as possible, since these are almost always interchangeable, but you\'ll see "subject" at the code level (for example in ',Object(r.b)("inlineCode",{parentName:"p"},"credentialSubject"),")."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," Richard is a subject (user) of the ACME Bank mobile app. He uses two holders: the app installed on his phone and his tablet."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A holder app is one using the ",Object(r.b)("a",{href:"/mobile-sdk-overview"},"Mobile SDK"),", and a holder is an instance of that installed on a particular device. A subject uses one or more holders."),Object(r.b)("h3",{id:"verifier"},"Verifier"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"verifier")," is a role a company can play to verify ",Object(r.b)("a",{href:"/terminology#presentation"},Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations"))," shared by ",Object(r.b)("a",{href:"/terminology#subject"},Object(r.b)(s.a,{type:"subject",mdxType:"Tip"},"subjects"))," (users). A verifier can also make ",Object(r.b)("a",{href:"/terminology#request"},Object(r.b)(s.a,{type:"request",mdxType:"Tip"},"requests"))," for presentations and send them to subjects.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A company can be both an ",Object(r.b)(s.a,{type:"issuer",mdxType:"Tip"})," and a ",Object(r.b)(s.a,{type:"verifier",mdxType:"Tip"}),"! In fact, it can play the roles of many different issuers and verifiers. For example, to implement our ",Object(r.b)("a",{parentName:"p",href:"https://www.unumid.co/solutions/passwordless-auth"},"Passwordless Auth")," product, a single company issues an authentication credential to a user, who later shares a presentation (containing that credential), which the company verifies."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," Hooli FinTech sends Richard a request for (a presentation of) a KYC verification credential from ACME Bank. When Richard shares the presentation, Hooli verifies it."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," A verifier verifies presentations and makes requests using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK"),". It displays requests using the ",Object(r.b)("a",{href:"/web-sdk"},"Web SDK")," and sends them to subjects using the ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK"),"."),Object(r.b)("p",null,"To register a verifier and recieve a verifier API key, a company (already registered as an Unum ID customer) submits to us two pieces of information:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"name (human readable)"),Object(r.b)("li",{parentName:"ol"},"endpoint (to receive presentations)")),Object(r.b)("p",null,"The name is used in the ",Object(r.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile SDK")," and ",Object(r.b)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," to display content to users. We send (encrypted) presentations to the endpoint, which passes them to the ",Object(r.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK")," to be verified. (We provide an ",Object(r.b)("a",{parentName:"p",href:"https://gist.github.com/UnumIDAdmin/a81ffe5bd383b1ec36cb1b6bb1ccd26e"},"OpenAPI spec")," and reference endpoint, so creating the endpoint is very simple.)"),Object(r.b)("h3",{id:"did"},"DID"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A ",Object(r.b)("strong",{parentName:"p"},"DID")," (or ",Object(r.b)("i",null,"decentralized identifier"),") identifies a participant in the Unum ID ecosystem. A participant is an ",Object(r.b)("a",{href:"/terminology#issuer"},Object(r.b)(s.a,{type:"issuer",mdxType:"Tip"})),", ",Object(r.b)("a",{href:"/terminology#subject"},Object(r.b)(s.a,{type:"subject",mdxType:"Tip"})),", or ",Object(r.b)("a",{href:"/terminology#verifier"},Object(r.b)(s.a,{type:"verifier",mdxType:"Tip"})),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters (like UUIDs)."),Object(r.b)("p",{parentName:"div"},"However, if you're curious to learn more, read the emerging ",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"W3C specification"),"."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ACME Bank is identified by two DIDs, one for acting as an issuer and another for acting as a verifier. Richard, an ACME subject (user), is identified by one DID. Hooli FinTech, which acts as a verifier, is identified by one DID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Components:")," The ",Object(r.b)("a",{href:"/server-sdk"},"Server SDK")," returns DIDs for issuers and verifiers, and the ",Object(r.b)("a",{href:"/mobile-sdk"},"Mobile SDK")," returns DIDs for subjects."))}l.isMDXComponent=!0}}]);