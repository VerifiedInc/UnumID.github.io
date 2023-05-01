"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[915],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),o=a(6775),s=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=s??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,i]),tabValues:i}}var f=a(2389);const g="tabList__CuJ",y="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==o&&(u(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},2953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106)),l=a(4866),o=a(5162);const s={id:"1-click-or-free-use-case",title:"1-Click or Free IDV",sidebar_label:"1-Click or Free IDV",slug:"/1-click-or-free-use-case"},c=void 0,p={unversionedId:"1-click-or-free-use-case",id:"1-click-or-free-use-case",title:"1-Click or Free IDV",description:"Time to read: 5 min",source:"@site/docs/1-click-or-free-use-case.mdx",sourceDirName:".",slug:"/1-click-or-free-use-case",permalink:"/1-click-or-free-use-case",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"1-click-or-free-use-case",title:"1-Click or Free IDV",sidebar_label:"1-Click or Free IDV",slug:"/1-click-or-free-use-case"},sidebar:"sidebar",previous:{title:"Data Schemas",permalink:"/schema"},next:{title:"Hooli Demo",permalink:"/hooli-demo"}},u={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to read:")," 5 min"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to implement:")," 30 - 60 min"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need an API key and an email and/or phone for each user. Below is a valid API Key for your initial usage along with suggested test email and phone values."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox API Key"',title:'"Sandbox',API:!0,'Key"':!0},"5YugDQgjPn2LG2xTAs/+c6Kfrf7Ie45PIGjJurP8vNk=\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Email"',title:'"Sandbox',User:!0,'Email"':!0},"test@example.com\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Phone"',title:'"Sandbox',User:!0,'Phone"':!0},"+10123456789\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.unumid.co"},"Unum ID"))," enables 1-Click or Free ID Verification (IDV), powered by our digital ID cards. "),(0,r.kt)("p",null,"You can implement any of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Free IDV Only:")," You issue a digital ID card to any of your users (new or existing), and we pay you for it."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo of Free Only"),(0,r.kt)("p",null,"Richard is an existing, verified Hooli user. The next time he signs in, Hooli asks him if he wants to activate his Hooli digital ID card. When he clicks the Activate button, Hooli issues the card, and Unum ID reimburses Hooli for the cost of the identity verification performed by Hooli for Richard."),(0,r.kt)("iframe",{src:"https://marvelapp.com/prototype/1938729e/screen/90752160?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"1-Click IDV only:")," If a user has a digital ID card, they can verify with 1-Click. If they don't, you take them through your existing verification process (no change needed)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo of 1-Click Only"),(0,r.kt)("p",null,"This demo shows Kredita using 1-Click IDV when it's available. They collect email and phone from the user (Richard) and check if the user has matching credentials. The user does, so Kredita lets them verify with 1-Click."),(0,r.kt)("iframe",{src:"https://marvelapp.com/prototype/9cab6ai?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Both:")," If a user has a digital ID card, they can verify with 1-Click. If they don't, you take them through your existing verification process (no change needed) \u2014 ",(0,r.kt)("em",{parentName:"p"},"and at the end you issue them a digital ID card, and we pay you for it"),". "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What do you want to implement?")),(0,r.kt)(l.Z,{groupId:"options",defaultValue:"free",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"free",label:"Free Only",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to issue ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials")," to a user.")," When you do, Unum ID will pay you according to your contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get user consent.")," Ask the user if they want to activate their digital ID card (from your brand), and include Unum ID legal language:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"By clicking the button below, you agree to Unum ID\u2019s ",(0,r.kt)("a",{href:"https://www.unumid.co/legal/terms-of-use"},"Terms of Use")," and direct YOUR_COMPANY_NAME to share your personal information with Unum ID to provide its digital ID card services, in accordance with its ",(0,r.kt)("a",{href:"https://www.unumid.co/legal/privacy-policy"},"Privacy Policy"),".")),(0,r.kt)("p",{parentName:"li"},'"Terms of Use" should be underlined or colored and hyperlinked to ',(0,r.kt)("a",{href:"https://www.unumid.co/legal/terms-of-use"},(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal/terms-of-use")),'. "Privacy Policy" should be underlined or colored and hyperlinked to ',(0,r.kt)("a",{href:"https://www.unumid.co/legal/privacy-policy"},(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal/privacy-policy")),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You must obtain user consent before issuing credentials.")," Not doing so violates our terms and will prevent us from paying you for issuing credentials. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview#issue-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/credentials")))," with the user's verified email and/or phone and one or more credentials. For each credential, include a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in accordance with one of our ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schemas"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If we don't have a schema that suits your needs, ",(0,r.kt)("a",{parentName:"em",href:"mailto:support@unumid.co"},"email us")," and we'll make one for you.")),(0,r.kt)("p",{parentName:"li"},"For example, if you have a verified Social Security Number (SSN) for a user, you can issue them a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential"),". Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint with the user's email and/or phone, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," type, and the SSN data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Issue Credentials Request Body"',title:'"Example',Issue:!0,Credentials:!0,Request:!0,'Body"':!0},'{\n  "email": "test@example.com",\n  "phone": "+10123456789",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      "data": {\n        "ssn": "111-22-3333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Format the credential data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," attribute of the credential schema. In this case, the schema is for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," which can found found at ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/SsnCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"https://schema.verified.inc/jsonSchema/SsnCredential")),". "),(0,r.kt)("p",{parentName:"li"},"More information about credential schemas can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"Schema")," section."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more detailed information on how and why to implement Free IDV, see our ",(0,r.kt)("a",{parentName:"p",href:"/issuance-guide"},"Free IDV Guide"),"."))))),(0,r.kt)(o.Z,{value:"1-click",label:"1-Click Only",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to check whether the user has matching ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),".")," If they do, 1-Click IDV is available."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")))," with the user's email and/or phone and the credential type(s) you need."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "match": true,\n    "url": "https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What counts as a match?"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("code",null,"/hasMatchingCredentials"),", you include one or more credential requests. For each credential request, you specify:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"the type"),(0,r.kt)("li",null,"(optional) which issuers are acceptable"),(0,r.kt)("li",null,"(optional) whether the credential is required"))),(0,r.kt)("p",null,"There's a match if, for each credential request for a required credential, the user has a credential of the correct type from an acceptable issuer.")),"The user will either have matching credentials, or they won't. If they do, continue to step (2). If they don't, you're done with Unum ID and should take the user through your existing verification flow. ",(0,r.kt)("i",null,"If you would like your existing verification flow verification costs to be covered, please look into the ",(0,r.kt)("b",null,"Both")," section of this quick start, which includes both Free IDV and 1-Click IDV.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Unum ID web wallet. For example the final url you need to redirect the user to is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Unum ID Wallet URL"',title:'"Example',Redirect:!0,to:!0,Unum:!0,ID:!0,Wallet:!0,'URL"':!0},"https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("inlineCode",{parentName:"strong"},"/sharedCredentials/{uuid}"))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "uuid": string // the sharedCredentialsUuid\n    "credentials": [{\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111-22-3333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    }],\n    // user\'s email from input to /hasMatchingCredentials\n    // only present if email was provided\n    "email"?: string,\n    // user\'s phone from input to /hasMatchingCredentials\n    // only present if email was provided \n    "phone"?: string\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You're done!")))))),(0,r.kt)(o.Z,{value:"both",label:"Both",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"This simply combines the 1-Click Only and Free Only options.")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to check whether the user has matching ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),".")," If they do, 1-Click IDV is available."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"If they don't, you need to issue them credentials.")," When you do, Unum ID will pay you according to your contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")))," with the user's email and/or phone and the credential type(s) you need."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "match": true,\n    "url": "https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?email=test%40example.com&phone=%2B10123456789"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What counts as a match?"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("code",null,"/hasMatchingCredentials"),", you include one or more credential requests. For each credential request, you specify:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"the type"),(0,r.kt)("li",null,"(optional) which issuers are acceptable"),(0,r.kt)("li",null,"(optional) whether the credential is required"))),(0,r.kt)("p",null,"There's a match if, for each credential request for a required credential, the user has a credential of the correct type from an acceptable issuer.")),"The user will either have matching credentials, or they won't. If they do, continue to the ",(0,r.kt)("b",null,"Match")," tab of step (2). If they don't, continue to the ",(0,r.kt)("b",null,"No Match")," tab of step (2).")),(0,r.kt)(l.Z,{defaultValue:"no-match",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"match",label:"Match",mdxType:"TabItem"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Unum ID web wallet. For example, the final url the user is redirected to is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Unum ID Wallet URL"',title:'"Example',Redirect:!0,to:!0,Unum:!0,ID:!0,Wallet:!0,'URL"':!0},"https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?email=test%40example.com&phone=%2B10123456789&redirectUrl=https://acme-bank.co/sign-up/complete\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#get-shared-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/sharedCredentials/{uuid}")))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "uuid": string // the sharedCredentialsUuid\n    "credentials": [{\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111-22-3333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    }],\n    // user\'s email from input to /hasMatchingCredentials\n    // only present if email was provided\n    "email"?: string,\n    // user\'s phone from input to /hasMatchingCredentials\n    // only present if email was provided \n    "phone"?: string\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!")))))),(0,r.kt)(o.Z,{value:"no-match",label:"No Match",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get user consent.")," Ask the user if they want to activate their digital ID card (from your brand), and include Unum ID legal language:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"By clicking the button below, you agree to Unum ID\u2019s ",(0,r.kt)("a",{href:"https://www.unumid.co/legal/terms-of-use"},"Terms of Use")," and direct YOUR_COMPANY_NAME to share your personal information with Unum ID to provide its digital ID card services, in accordance with its ",(0,r.kt)("a",{href:"https://www.unumid.co/legal/privacy-policy"},"Privacy Policy"),".")),(0,r.kt)("p",{parentName:"li"},'"Terms of Use" should be underlined or colored and hyperlinked to ',(0,r.kt)("a",{href:"https://www.unumid.co/legal/terms-of-use"},(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal/terms-of-use")),'. "Privacy Policy" should be underlined or colored and hyperlinked to ',(0,r.kt)("a",{href:"https://www.unumid.co/legal/privacy-policy"},(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal/privacy-policy")),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You must obtain user consent before issuing credentials.")," Not doing so violates our terms and will prevent us from paying you for issuing credentials. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview#issue-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/credentials")))," from your backend with the user's verified email and/or phone and one or more credentials. For each credential, include a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in accordance with one of our ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schemas"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If we don't have a schema that suits your needs, ",(0,r.kt)("a",{parentName:"em",href:"mailto:support@unumid.co"},"email us")," and we'll make one for you.")),(0,r.kt)("p",{parentName:"li"},"For example, if you have a verified Social Security Number (SSN) for a user, you can issue them a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," to their verified phone. Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint with the user's verified email and/or phone, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," type, and the SSN data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Issue Credentials Request Body"',title:'"Example',Issue:!0,Credentials:!0,Request:!0,'Body"':!0},'{\n  "email": "test@example.com",\n  "phone": "+10123456789",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      "data": {\n        "ssn": "111-22-3333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Format the credential data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," attribute of the credential schema. In this case, the schema is for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," which can found found at ",(0,r.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/SsnCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"https://schema.verified.inc/jsonSchema/SsnCredential")),". "),(0,r.kt)("p",{parentName:"li"},"More information about credential schemas can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"Schema")," section."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!"))))))))))}h.isMDXComponent=!0}}]);