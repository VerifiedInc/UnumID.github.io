"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[473],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),o=a(6775),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var k=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},4748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106));a(4866),a(5162);const l={id:"acceptance-guide",title:"Acceptance Guide",sidebar_label:"Acceptance Guide",slug:"/acceptance-guide"},o=void 0,s={unversionedId:"acceptance-guide",id:"acceptance-guide",title:"Acceptance Guide",description:"Time to read: 5 min",source:"@site/docs/acceptance-guide.mdx",sourceDirName:".",slug:"/acceptance-guide",permalink:"/acceptance-guide",draft:!1,tags:[],version:"current",frontMatter:{id:"acceptance-guide",title:"Acceptance Guide",sidebar_label:"Acceptance Guide",slug:"/acceptance-guide"},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/faq-info"},next:{title:"Issuance Guide",permalink:"/issuance-guide"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Motivations",id:"motivations",level:2},{value:"UX Strategies",id:"ux-strategies",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to read:")," 5 min"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to implement:")," 30 - 60 min"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.unumid.co"},"Unum ID"))," enables brands to provider their users with best in class onboarding. This particular guide focuses on how and why to become a ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand")," that accepts Unum ID ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By accepting credentials your brand can unlock 1-Click on boarding. Please see the Use Case ",(0,r.kt)("a",{parentName:"p",href:"/1-click-or-free-use-case"},"section")," for more information.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need an API key and an email and/or phone for each user. Below is a valid API Key for your initial usage along with suggested test email and phone values."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox API Key"',title:'"Sandbox',API:!0,'Key"':!0},"5YugDQgjPn2LG2xTAs/+c6Kfrf7Ie45PIGjJurP8vNk=\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Email"',title:'"Sandbox',User:!0,'Email"':!0},"test@example.com\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Phone"',title:'"Sandbox',User:!0,'Phone"':!0},"+10123456789\n"))),(0,r.kt)("h2",{id:"motivations"},"Motivations"),(0,r.kt)("p",null,"As a brand that accepts credentials, you get the benefit of potential for 1-Click onboarding. This drastically decreases the drop off rate during customer sign up and makes for a far better first touch experience for your new users."),(0,r.kt)("h2",{id:"ux-strategies"},"UX Strategies"),(0,r.kt)("p",null,"The check to see if the user has credentials that you can accept can happen fully in the background by calling ",(0,r.kt)("a",{parentName:"p",href:"/api-overview#check-user-credentials"},"/hasMatchingCredentials")," at an opportune time. If the response is contains ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," then you will redirect to the Unum ID Wallet. The demo below demonstrates an example UX."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo Accepting Credentials"),(0,r.kt)("p",null,"This demo shows Kredita accepting credentials in order to gain 1-Click IDV capabilities when it's available. They collect email and phone from the user (Richard) and check if the user has matching credentials. The user does, so Kredita lets them verify with 1-Click."),(0,r.kt)("iframe",{src:"https://marvelapp.com/prototype/9cab6ai?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"})),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You need to check whether the user has matching ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),".")," If they do, you can accept their credentials with the user consent at the click of button for the user. This is what we call 1-Click IDV."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")))," with the user's email and/or phone and the credential type(s) you need.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "match": true,\n    "url": "https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What counts as a match?"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("code",null,"/hasMatchingCredentials"),", you include one or more credential requests. For each credential requests, you specify:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"the type"),(0,r.kt)("li",null,"(optional) which issuers are acceptable"),(0,r.kt)("li",null,"(optional) whether the credential is required"))),(0,r.kt)("p",null,"There's a match if, for each credential request for a required credential, the user has a credential of the correct type from an acceptable issuer.")),"The user will either have matching credentials, or they won't. If they do, continue to step (2). If they don't, you're done with Unum ID and should take the user through your existing verification flow.",(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you would like your existing verification flow verification costs to be covered, please look into issuing credentials. More information can be found in the 1-Click or Free Use Case ",(0,r.kt)("a",{parentName:"p",href:"/1-click-or-free-use-case"},"section"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"li"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Unum ID web wallet. For example the final url you need to redirect the user to is:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Unum ID Wallet URL"',title:'"Example',Redirect:!0,to:!0,Unum:!0,ID:!0,Wallet:!0,'URL"':!0},"https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"strong"},"/sharedCredentials/{uuid}"))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"li"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "uuid": string // the sharedCredentialsUuid\n    "credentials": [{\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111-22-3333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    }],\n    // user\'s email from input to /hasMatchingCredentials\n    // only present if email was provided\n    "email"?: string,\n    // user\'s phone from input to /hasMatchingCredentials\n    // only present if email was provided \n    "phone"?: string\n}\n')),(0,r.kt)("p",null,"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",null,"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You're done!"))))}p.isMDXComponent=!0}}]);