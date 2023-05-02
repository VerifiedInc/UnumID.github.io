"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[821],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var i=a(7462),n=a(7294),r=a(6010),o=a(2466),s=a(6775),l=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:a,groupId:i}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),k=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=a(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),i=u[a].value;i!==s&&(d(t),l(i))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:i}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",g)},n.createElement(y,(0,i.Z)({},e,t)),n.createElement(b,(0,i.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(w,(0,i.Z)({key:String(t)},e))}},3060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905)),r=(a(7874),a(106));a(4866),a(5162);const o={id:"issuance-guide",title:"Issuance Guide",sidebar_label:"Issuance Guide",slug:"/issuance-guide"},s=void 0,l={unversionedId:"issuance-guide",id:"issuance-guide",title:"Issuance Guide",description:"Time to read: 5 min",source:"@site/docs/issuance-guide.mdx",sourceDirName:".",slug:"/issuance-guide",permalink:"/issuance-guide",draft:!1,tags:[],version:"current",frontMatter:{id:"issuance-guide",title:"Issuance Guide",sidebar_label:"Issuance Guide",slug:"/issuance-guide"},sidebar:"sidebar",previous:{title:"Acceptance Guide",permalink:"/acceptance-guide"},next:{title:"API",permalink:"/api-overview"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Motivations",id:"motivations",level:2},{value:"UX Strategies",id:"ux-strategies",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Example &amp; Demo",id:"example--demo",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Time to read:")," 5 min"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Time to implement:")," 30 min"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.verified.inc"},"Verified Inc."))," enables brands to provider their users with best in class onboarding with partners. This particular guide only focuses on how and why to become a ",(0,n.kt)(r.Z,{type:"brand",mdxType:"Tip"},"brand")," that issues Verified Inc. ",(0,n.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"By issuing credentials your brand can unlock Free IDV. Please see the Use Case ",(0,n.kt)("a",{parentName:"p",href:"/1-click-or-free-use-case"},"section")," for more information.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You will need an API key and an email and/or phone for each user. Below is a valid API Key for your initial usage along with suggested test email and phone values."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox API Key"',title:'"Sandbox',API:!0,'Key"':!0},"5YugDQgjPn2LG2xTAs/+c6Kfrf7Ie45PIGjJurP8vNk=\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Email"',title:'"Sandbox',User:!0,'Email"':!0},"test@example.com\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Phone"',title:'"Sandbox',User:!0,'Phone"':!0},"+10123456789\n"))),(0,n.kt)("h2",{id:"motivations"},"Motivations"),(0,n.kt)("p",null,"As a brand that issues credentials, Verified Inc. is willing to cover your identity verification costs in order to create a truly win-win-win scenario for you, your partners, and your users. Simply put, you issue a digital ID card to any of your users (new or existing) with verified identity data, and we pay you for it. The core motivations for such an arrangement are multifaceted: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"You get your identity verification costs covered")," with any provider(s) of your choosing"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"You get a new revenue stream")," when the user uses your verified data to onboard with ",(0,n.kt)("a",{parentName:"li",href:"https://www.verified.inc/1-click"},"1-Click")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Your users get to enjoy 1-click onboarding")," with any of your partners or other third parties that accept your verified data, which also means increased brand awareness"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Verified Inc. gets more identity into the identity network"),", which is why we are willing to subsidize your costs")),(0,n.kt)("h2",{id:"ux-strategies"},"UX Strategies"),(0,n.kt)("p",null,"There are many user experiences that can be implemented to seamlessly issue credentials to your users. Below are just a few recommendations with an accompanying demo of each."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next User Sign In",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo of Next User Sign In"),(0,n.kt)("p",null,"Richard is an existing, verified Hooli user. The next time he signs in, Hooli asks him if he wants to activate his Hooli digital ID card. When he clicks the Activate button, Hooli issues the card, and Verified Inc. reimburses Hooli for the cost of the identity verification performed by Hooli for Richard."),(0,n.kt)("iframe",{src:"https://marvelapp.com/prototype/1938729e/screen/90752160?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,n.kt)("li",{parentName:"ul"},"After User Sign Up",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo of After User Sign Up"),(0,n.kt)("p",null,"Richard has just completed Hooli account sign up which included identity verification via a third party service of Hooli's choosing. In the terms and service section Richard agrees to being issued an Hooli branded Verified Inc. digital ID card. Hooli issues the card with the verified identity data and Verified Inc. reimburses Hooli for the cost of the identity verification performed by Hooli for Richard."),(0,n.kt)("iframe",{src:"https://marvelapp.com/prototype/9e98j88/screen/90752101?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,n.kt)("li",{parentName:"ul"},"Marketing Email",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo of Marketing Email"),(0,n.kt)("p",null,"Richard is an existing, verified Hooli user. He receives a promotional email from Hooli which encourages him to accept a digital Verified Inc. card. Upon clicking the link and being directed to the app Hooli confirms with him he wants to activate his Hooli digital ID card. When he clicks the Activate button, Hooli issues the card, and Verified Inc. reimburses Hooli for the cost of the identity verification performed by Hooli for Richard."),(0,n.kt)("iframe",{src:"https://marvelapp.com/prototype/193879a9/screen/90752312?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,n.kt)("li",{parentName:"ul"},"In App Offer",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo of In App Offer"),(0,n.kt)("p",null,"Richard is an existing, verified Hooli user. Upon signing into the app he notices an in app offer which encourages him to accept a digital Verified Inc. card. When he clicks the Activate button, Hooli issues the card, and Verified Inc. reimburses Hooli for the cost of the identity verification performed by Hooli for Richard."),(0,n.kt)("iframe",{src:"https://marvelapp.com/prototype/ebe3f96/screen/90752391?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"})))),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"The implementation goal is to ",(0,n.kt)("strong",{parentName:"p"},"issue ",(0,n.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials")," to a ",(0,n.kt)(r.Z,{type:"user",mdxType:"Tip"},"user"),".")," When you do, Verified Inc. will pay you according to your contract. The steps for completing the implementation are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Get user consent.")," Ask the user if they want to activate their digital ID card (from your brand), and include Verified Inc. legal language:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"By clicking the button below, you agree to Verified Inc.\u2019s ",(0,n.kt)("a",{href:"https://www.verified.inc/legal/terms-of-use"},"Terms of Use")," and direct YOUR_COMPANY_NAME to share your personal information with Verified Inc. to provide its digital ID card services, in accordance with its ",(0,n.kt)("a",{href:"https://www.verified.inc/legal/privacy-policy"},"Privacy Policy"),".")),(0,n.kt)("p",null,'"Terms of Use" should be underlined or colored and hyperlinked to ',(0,n.kt)("a",{href:"https://www.verified.inc/legal/terms-of-use"},(0,n.kt)("inlineCode",{parentName:"p"},"https://www.verified.inc/legal/terms-of-use")),'. "Privacy Policy" should be underlined or colored and hyperlinked to ',(0,n.kt)("a",{href:"https://www.verified.inc/legal/privacy-policy"},(0,n.kt)("inlineCode",{parentName:"p"},"https://www.verified.inc/legal/privacy-policy")),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"You must obtain user consent before issuing credentials.")," Not doing so violates our terms and will prevent us from paying you for issuing credentials. ")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api-overview#issue-credentials"},(0,n.kt)("inlineCode",{parentName:"a"},"/credentials")))," with the user's verified email and/or phone and one or more credentials. For each credential, include a ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"data")," in accordance with one of our ",(0,n.kt)("a",{parentName:"li",href:"/schema"},"schemas"),". ")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If we don't have a schema that suits your needs, ",(0,n.kt)("a",{parentName:"em",href:"mailto:support@verified.inc"},"email us")," and we'll make one for you.")),(0,n.kt)("p",null,"For example, if you have a verified Social Security Number (SSN) for a user, you can issue them a ",(0,n.kt)("inlineCode",{parentName:"p"},"SsnCredential"),". Just call the ",(0,n.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint with the user's email and/or phone, the ",(0,n.kt)("inlineCode",{parentName:"p"},"SsnCredential")," type, and the SSN data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Issue Credentials Request Body"',title:'"Example',Issue:!0,Credentials:!0,Request:!0,'Body"':!0},'{\n  "email": "test@example.com",\n  "phone": "+10123456789",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      "data": {\n        "ssn": "111-22-3333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Format the credential data according to the ",(0,n.kt)("inlineCode",{parentName:"p"},"properties")," attribute of the credential schema. In this case, the schema is for a ",(0,n.kt)("inlineCode",{parentName:"p"},"SsnCredential")," which can found found at ",(0,n.kt)("a",{parentName:"p",href:"https://schema.verified.inc/jsonSchema/SsnCredential"},(0,n.kt)("inlineCode",{parentName:"a"},"https://schema.verified.inc/jsonSchema/SsnCredential")),". "),(0,n.kt)("p",null,"More information about credential schemas can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/schema"},"Schema")," section."),(0,n.kt)("p",null,"\u2705 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"}," You're done!"))),(0,n.kt)("h3",{id:"example--demo"},"Example & Demo"),(0,n.kt)("p",null,"Please feel free to refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/UnumID/Hooli-Demo-Web"},"open source")," Hooli ",(0,n.kt)("a",{parentName:"p",href:"https://hooli-web.demo.sandbox-verifiedinc.com/login"},"demo web app")," which demonstrates an example implementation of the Free IDV offering. More information, including mobile demo applications can also be found under the ",(0,n.kt)("a",{parentName:"p",href:"/hooli-demo"},"Hooli Demo")," section."))}p.isMDXComponent=!0}}]);