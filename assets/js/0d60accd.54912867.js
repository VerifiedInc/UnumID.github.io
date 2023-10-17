"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[829],{3166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>B,contentTitle:()=>W,default:()=>U,frontMatter:()=>P,metadata:()=>Z,toc:()=>Y});var n=a(7462),i=a(7294),r=a(3905),l=(a(7874),a(106)),s=a(8716),o=a(624),c=a(1190);const m="container__ccj",d="search_dnlB",p="container-grid_gdNR",h="list-card_xwza",u="list-card-skeleton_i4sb",f="list-card-title_cv_5",y="container_Yx8b",N="back_YMET",k="header_qWYl",g="title_tglL",v="subtitle_n5yt",E="meta-container_AWlX",C="properties_IZUr",b="property-title_jUnQ",S="properties-container_ik0p",w="property-field_GOOn",O=/([A-Z][a-z0-9]+)/gm,x=e=>e.split(O).filter((e=>e)).join(" "),j=e=>Object.keys(e).reduce(((e,t)=>({...e,[t]:t})),{});function F(e){let{field:t,value:a}=e;return i.createElement("strong",null,i.createElement("span",null,t,":"),i.createElement("span",{className:"margin-left--sm"},"object"==typeof a&&Array.isArray(a)?i.createElement(i.Fragment,null,a.map((e=>i.createElement("p",{key:e,className:"padding-left--md margin-bottom--sm margin-top--md"},i.createElement("span",null,"- "),i.createElement("span",{className:"text--primary"},e))))):i.createElement("span",{className:"text--primary"},String(a))))}function _(e){let{properties:t,required:a}=e;return Object.entries(t).length?i.createElement(i.Fragment,null,i.createElement("h5",{className:`${v} margin-top--lg`},"Properties"),i.createElement("div",{className:S},(()=>{const e=Object.entries(t);return e.length?e.map((e=>{let[t,n]=e;const r=j(n),l=(a||[]).includes(t),s=e=>{let[t,a]=e;return"object"!=typeof a||Array.isArray(a)?Array.isArray(a)?i.createElement("div",{key:t},i.createElement(F,{field:r[t],value:""}),i.createElement("div",{className:"margin-left--md"},a.map(((e,t)=>[t+1,e])).map(s))):i.createElement("div",{key:t},i.createElement(F,{field:r[t]??t,value:JSON.stringify(a)})):i.createElement("div",{key:t},i.createElement(F,{field:r[t],value:""}),i.createElement("div",{className:"margin-left--md"},Object.entries(a).map(s)))};return i.createElement("div",{key:t,className:`${w} table-of-contents__left-border padding-left--lg`},i.createElement("h6",{className:b},i.createElement("span",null,t)," - ",i.createElement("i",{className:"text--primary"},l?"Required":"Optional")),i.createElement("div",{className:`${C} table-of-contents__left-border`},Object.entries(n).map(s)))})):null})())):null}function I(e){let{allOf:t,onCredentialClick:a}=e;return t?i.createElement(i.Fragment,null,i.createElement("h5",{className:`${v} margin-top--lg`},"Composes"),i.createElement("div",{className:S},t?t.map((e=>{const t=e.$ref;return i.createElement("div",{key:t,className:`${w} table-of-contents__left-border padding-left--lg`},i.createElement("h6",{className:`${b} margin-bottom--none`},i.createElement("span",null,x(t))),i.createElement("button",{className:"button button--sm button--outline button--primary",onClick:()=>a(t)},"See Credential"))})):null)):null}function T(e){let{schema:t}=e;const a=j(t);return i.createElement(i.Fragment,null,i.createElement("div",{className:E},i.createElement(F,{field:a.type,value:t.type})),i.createElement(_,{properties:t.properties,required:t.required}))}function $(e){let{schema:t,...a}=e;const r=t.allOf||t.anyOf.find((e=>"object"==typeof e.allOf)).allOf,l=(t.anyOf||[]).find((e=>"object"==typeof e.properties)),s=j(t),o=j(l||{});return i.createElement(i.Fragment,null,i.createElement("div",{className:E},i.createElement(F,{field:s.type||o.type,value:t.type||l.type})),r&&i.createElement(I,(0,n.Z)({},a,{allOf:r})),l&&i.createElement(_,{properties:l.properties,required:l.required}))}function J(e){let{schema:t,onRequestClose:a,onCredentialClick:n}=e;const[r,l]=(0,i.useState)(!1),o=j(t),c="string"!=typeof o.anyOf&&"string"!=typeof o.allOf,m="string"==typeof o.anyOf||"string"==typeof o.allOf;return(0,i.useEffect)((()=>{const e=setTimeout((()=>l(!1)),3e3);return()=>{clearTimeout(e)}}),[r]),i.createElement(s.E.div,{key:t.id,className:`${y} --ifm-modal-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},i.createElement("div",{className:"margin-top--sm padding--lg"},i.createElement("button",{className:`${N} button button--md button--primary margin-bottom--lg`,onClick:a}),i.createElement("div",{className:k},i.createElement("button",{className:"button button--xs button--secondary",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(t.raw,null,2)),l(!0)}},r?"Copied!":"Copy schema"),i.createElement("h4",{className:g},i.createElement(s.E.span,{layoutId:t.id,className:"margin-right--md",style:{display:"inline-block"}},t.name))),i.createElement("p",null,t.id),i.createElement(s.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},exit:{opacity:0}},c&&i.createElement(T,{schema:t}),m&&i.createElement($,{schema:t,onCredentialClick:n}))))}function q(){return{async getSchemas(){return await(e="https://schema-resolver.verified.inc/jsonSchema",t={method:"GET",mode:"cors"},fetch(e,t).then((e=>{if(e.ok)return e.json();throw new Error(`Http response error: ${e.status}`)})));var e,t}}}function A(e){let[t,a]=e;const{$id:n,...i}=a;return[t,{...i,id:t,name:x(n),raw:a}]}const L=(e,t)=>e.toLocaleString().localeCompare(t);function D(e){let{schema:t,onSchemaSelect:a}=e;const n={hidden:{opacity:0},show:{opacity:1},[`selected-${t.id}`]:{backgroundColor:"var(--ifm-color-primary)"},idle:{opacity:1,transition:{duration:0}},exit:{opacity:0}};return i.createElement(s.E.div,{key:t.id,className:h,variants:n,whileHover:{backgroundColor:"var(--ifm-color-primary)"},onClick:()=>a(t),layout:!0},i.createElement(s.E.h3,{layoutId:t.id,className:f},t.name))}function M(){return i.createElement("div",{className:u})}function R(e){let{schemas:t}=e;const[a,n]=(0,i.useState)(null),[r,l]=(0,i.useState)(""),h=(0,i.useRef)(),[u,f]=(0,i.useState)("auto"),[y,N]=(0,i.useState)(0),k=(0,o.Y)(h,{amount:"some"}),[g,v]=(0,i.useState)(k),E=Object.entries(t).map(A),C=E.filter((e=>t=>{let[a]=t;return x(a).toLowerCase().indexOf(e.toLowerCase())>=0})(r)).sort(L),b=(0,i.useMemo)((()=>a?`selected-${a.id}`:g?"idle":k?"show":void 0),[a,k,g]);return(0,i.useEffect)((()=>{g||k&&v(!0)}),[k,g]),(0,i.useEffect)((()=>{const e=new ResizeObserver((e=>{const t=e[0].contentRect.height;N((e=>Math.max(e,t))),f(t)}));return e.observe(h.current),()=>{e.disconnect()}}),[]),i.createElement(s.E.div,{className:m,animate:{height:a?y:u,transition:{duration:.2}},layout:!0},i.createElement(s.E.div,{ref:h},i.createElement(s.E.div,{variants:{hidden:{},show:{transition:{staggerChildren:.025}},selected:{},idle:{}},initial:"hidden",animate:b,whileInView:"show",viewport:{once:!0,margin:"-50%"}},i.createElement("input",{className:d,placeholder:"Search for a schema e.g Email Credential",onChange:e=>l(e.target.value)}),!C.length&&i.createElement("h2",{className:"text--center margin-top--lg margin-bottom--lg"},"No schema found with term ",r),i.createElement(s.E.div,{className:p},i.createElement(c.M,null,C.map((e=>{let[t,a]=e;return i.createElement(D,{key:t,schema:a,onSchemaSelect:n})}))))),i.createElement(c.M,{initial:!1},a&&i.createElement(J,{schema:a,onRequestClose:()=>n(null),onCredentialClick:async e=>{n(null),await new Promise((e=>setTimeout(e,500)));const t=E.find((t=>t[0]===e))[1];n(t)}}))))}function V(e){const[t,a]=(0,i.useState)(!0),[n,r]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(!0),q().getSchemas().then((e=>{r(e),a(!1)}))}),[]),t?i.createElement("div",{className:m},i.createElement("div",{className:p},new Array(28).fill(void 0).map(((e,t)=>i.createElement(M,{key:t}))))):i.createElement(R,{schemas:n})}const P={id:"schema",title:"Data Schemas",sidebar_label:"Data Schemas",slug:"/schema"},W=void 0,Z={unversionedId:"schema",id:"schema",title:"Data Schemas",description:"Introduction",source:"@site/docs/schema.mdx",sourceDirName:".",slug:"/schema",permalink:"/schema",draft:!1,tags:[],version:"current",frontMatter:{id:"schema",title:"Data Schemas",sidebar_label:"Data Schemas",slug:"/schema"},sidebar:"sidebar",previous:{title:"API",permalink:"/api-overview"},next:{title:"1-Click or Free IDV",permalink:"/1-click-or-free-use-case"}},B={},Y=[{value:"Introduction",id:"introduction",level:2},{value:"Schema Definitions",id:"schema-definitions",level:2},{value:"JSON Schema",id:"json-schema",level:4},{value:"Schema Library",id:"schema-library",level:2},{value:"Example",id:"example",level:2}],z={toc:Y};function U(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},z,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Verified Inc. enables securely sharing verified ",(0,r.kt)("a",{href:"/terminology#credential"},(0,r.kt)(l.Z,{type:"credential",mdxType:"Tip"}))," data amongst network participants. While in theory this data can take any shape, a structured schema must be defined and followed for every credential type for the sake of all network participants."),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," syntax for data validation purposes via a pre-compiled ",(0,r.kt)("a",{parentName:"p",href:"https://ajv.js.org/guide/why-ajv.html"},"AJV")," engine. This ensures our credential schemas are robust enough to encapsulate any data while still being easily described, displayed, and validated."),(0,r.kt)("h2",{id:"schema-definitions"},"Schema Definitions"),(0,r.kt)("p",null,"You can view all of the Verified Inc. defined credential schemas via ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/schema"},"https://schema.verified.inc/schema"),". If you want to know the schema for a particular credential type you can use that same url with the desired credential type in the path. For example, ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/schema/EmailCredential"},"https://schema.verified.inc/schema/EmailCredential"),", would yield the EmailCredential's schema information."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We have this API documented via our public ",(0,r.kt)("a",{parentName:"p",href:"https://api.docs.verified.inc/"},"Postman collection")," documentation under ",(0,r.kt)("strong",{parentName:"p"},"Schema Resolver"),"."),(0,r.kt)("p",{parentName:"admonition"},"It is possible to view the response bodies from ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/schema"},"https://schema.verified.inc/schema")," in the browser, but we recommend Postman, which automatically formats the JSON response for human readability.")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"We hope to soon make it possible for you as a ",(0,r.kt)("a",{href:"/terminology#customer"},(0,r.kt)(l.Z,{type:"customer",mdxType:"Tip"}))," to define your own credential schemas. But ",(0,r.kt)("strong",{parentName:"p"},"currently, we Verified Inc. define all credential schemas.")," If you would like a new credential schema for your use case, please let us know and we will gladly define one for you.")),(0,r.kt)("p",null,'We currently support what can be referred to as "single attribute atomic credentials" and "composite credentials". '),(0,r.kt)("p",null,"Atomic credentials provide users a means of selective disclosure for ",(0,r.kt)("a",{href:"/terminology#request"},(0,r.kt)(l.Z,{type:"request",mdxType:"Tip"})),"s with optional fields."),(0,r.kt)("p",null,'Composite credentials are credentials that contain multiple "Atomic Credentials". For example, the ',(0,r.kt)("inlineCode",{parentName:"p"},"FullNameCredential")," contains ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstNameCredential"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LastNameCredential")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MiddleNameCredential"),". This provides a means of grouping atomic credentials with related data."),(0,r.kt)("h4",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/jsonSchema")," path will return the JSON schema definition, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/FirstNameCredential"},"https://schema.verified.inc/jsonSchema/FirstNameCredential"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example FirstNameCredential JSON Schema"',title:'"Example',FirstNameCredential:!0,JSON:!0,'Schema"':!0},'{\n  "$id": "FirstNameCredential",\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "description": "A person\'s first name",\n      "examples": ["John", "Mary Kate"],\n      "title": "First Name",\n      "displayFormat": "String",\n      "type": "string"\n    }\n  },\n  "required": ["firstName"]\n}\n')),(0,r.kt)("p",null,"For composite credential schemas, the object will contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"allOf")," property, which is an array of the atomic credential schemas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example FullNameCredential JSON Schema"',title:'"Example',FullNameCredential:!0,JSON:!0,'Schema"':!0},'{\n  "$id": "FullNameCredential",\n  "type": "object",\n  "allOf": [\n    {\n      "$ref": "FirstNameCredential"\n    },\n    {\n      "$ref": "LastNameCredential"\n    },\n    {\n      "$ref": "MiddleNameCredential"\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that each attribute has a ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," to help you understand the credential's schema. If you need more detailed information, look at our open source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VerifiedInc/schema-sdk"},"schema-sdk")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VerifiedInc/schema-sdk/blob/main/src/formats.ts"},"formats"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," property is a JSON Pointer, which is a string containing a URI fragment identifier. In this case, it is a reference to another schema. This is how we define composite credential schemas.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It's important to note that each of these credentials inside ",(0,r.kt)("inlineCode",{parentName:"p"},"FullNameCredential")," are single attribute atomic credentials, so you are able to request individually.\nBut if you need create or request a ",(0,r.kt)("inlineCode",{parentName:"p"},"CityCredential")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"StateCredential")," you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AddressCredential")," so data doesn't get mismatched.")),(0,r.kt)("h2",{id:"schema-library"},"Schema Library"),(0,r.kt)("p",null,"Search for or select a schema, see its properties and attributes, and copy the schema JSON:"),(0,r.kt)(V,{mdxType:"Schemas"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"First, we get the JSON schemas for the ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/SsnCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"SsnCredential")),", ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/FullNameCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"FullNameCredential")),", which contains ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/FirstNameCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"FirstNameCredential"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/LastNameCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"LastNameCredential"))," and review their attributes' ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"examples"),"."),(0,r.kt)("p",null,"Next, we construct valid credential bodies, according to the schemas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*The credential data compliant with the Ssn, FullName (FirstName and LastName) Credentials schemas*/\nconst credentialsList: Credentials = [\n  {\n    type: 'SsnCredential',\n    data: {\n      ssn: '333224444',\n    },\n  },\n  {\n    type: 'FullNameCredential',\n    data: [\n      {\n        type: 'FirstNameCredential',\n        data: {\n          firstName: 'John',\n        },\n      },\n      {\n        type: 'LastNameCredential',\n        data: {\n          lastName: 'Doe',\n        },\n      },\n    ],\n  },\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Request Body for Issuing Credentials"',title:'"Example',Request:!0,Body:!0,for:!0,Issuing:!0,'Credentials"':!0},'{\n  "credentials": credentialsList, // a list of one or more Credentials objects\n  "email": "richard.hendricks@pipedpiper.net"\n}\n\n')))}U.isMDXComponent=!0}}]);