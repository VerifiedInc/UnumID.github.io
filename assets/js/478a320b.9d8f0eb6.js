"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[43,608,111,316,693],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),s=a(6775),o=a(1980),d=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,d]=f({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=o??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var b=a(2389);const k="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==s&&(c(t),o(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},5066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106)),l=(a(4866),a(5162),a(1906),a(3451),a(5415));a(2179);const s={id:"1-click-guide",title:"1-Click Signup Guide",sidebar_label:"1-Click Guide",slug:"/1-click-guide"},o=void 0,d={unversionedId:"1-click-guide",id:"1-click-guide",title:"1-Click Signup Guide",description:"Time to read: 5 min",source:"@site/docs/1-click-guide.mdx",sourceDirName:".",slug:"/1-click-guide",permalink:"/1-click-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"1-click-guide",title:"1-Click Signup Guide",sidebar_label:"1-Click Guide",slug:"/1-click-guide"},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/faq"},next:{title:"Acceptance Guide",permalink:"/acceptance-guide"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Motivations",id:"motivations",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Integration Testing",id:"integration-testing",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to read:")," 5 min"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to implement:")," 30 - 60 min"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.verified.inc"},"Verified Inc."))," enables brands to provide their users with best in class onboarding - now truly with 1-Click. This particular guide focuses on how and why to become a ",(0,r.kt)(i.Z,{type:"brand",mdxType:"Tip"},"brand")," that use's Verified Inc.'s 1-Click Signup."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide is outlines a more streamlined integration of the ",(0,r.kt)("a",{parentName:"p",href:"/acceptance-guide"},"Acceptance")," guide.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need an API key and an email and/or phone for each user. Below is a valid API Key and URL for your initial usage along with suggested test email and phone values."),(0,r.kt)("p",{parentName:"admonition"},"If you use these suggested test email and/or phone values you can authenticate to the wallet using those values, i.e. ",(0,r.kt)("a",{parentName:"p",href:"mailto:richard@piedpiper.net"},"richard@piedpiper.net"),", using a static OTP of ",(0,r.kt)("inlineCode",{parentName:"p"},"111111"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sandbox API Key"',title:'"Sandbox',API:!0,'Key"':!0},"yVg3LEnF08y0MDmpHcPxB+sZWFcDARmPRKdY2M906ng=\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sandbox URL"',title:'"Sandbox','URL"':!0},"https://core-api.sandbox-verifiedinc.com\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sandbox User Email"',title:'"Sandbox',User:!0,'Email"':!0},"richard@piedpiper.net\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sandbox User Phone"',title:'"Sandbox',User:!0,'Phone"':!0},"+10123456789\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sandbox User Wallet Authentication OTP"',title:'"Sandbox',User:!0,Wallet:!0,Authentication:!0,'OTP"':!0},"111111\n"))),(0,r.kt)("h2",{id:"motivations"},"Motivations"),(0,r.kt)("p",null,"Using the 1-Click Signup flow, you will allow users to easily retrieve and verify their:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first and last name"),(0,r.kt)("li",{parentName:"ul"},"phone number"),(0,r.kt)("li",{parentName:"ul"},"email"),(0,r.kt)("li",{parentName:"ul"},"address"),(0,r.kt)("li",{parentName:"ul"},"birth date"),(0,r.kt)("li",{parentName:"ul"},"social security number")),(0,r.kt)("p",null,"This data is from Identity Verification Providers (IDV), and is packaged in manner that allows users to share with 1-Click."),(0,r.kt)("p",null,"In brief: using the 1-Click the Verified Inc. network, you will gain all the benefits of being an ",(0,r.kt)("a",{parentName:"p",href:"/acceptance-guide#motivations"},"Acceptor")," but with additional value\u2026"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leverage identity data that always provided by a trusted identity verification provider."),(0,r.kt)("li",{parentName:"ul"},"Our fastest and easiest integration experience to get it up and running."),(0,r.kt)("li",{parentName:"ul"},"Impress 95% of United States adults with this truly 1-Click experience.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#1-click-onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"/1-click")))," with the user's phone. If there is a match, will be the case for 95% of US adults, you will get a URL value in the response body."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'  {\n      "url": "https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n  }\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Match for 95% of US Adults?"),(0,r.kt)("p",null,"Yes, we have data for 95% of US adults through our service providers. When you call ",(0,r.kt)("code",null,"/1-click")," using our default credential requests value, we can rely on our IDV service providers having the necessary data. We have found that we can data on 95% of US adults. This accessible data incudes:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"first name"),(0,r.kt)("li",null,"last name"),(0,r.kt)("li",null,"email"),(0,r.kt)("li",null,"phone"),(0,r.kt)("li",null,"address"),(0,r.kt)("li",null,"birth date"),(0,r.kt)("li",null,"social security number")))),"The user will either have matching credentials, or they won't. If they do, continue to step (2). If they don't you should take the user through your existing verification flow."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Verified Inc. web wallet. For example the final url you need to redirect the user to is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Verified Inc. Wallet URL"',title:'"Example',Redirect:!0,to:!0,Verified:!0,"Inc.":!0,Wallet:!0,'URL"':!0},"https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("inlineCode",{parentName:"strong"},"/sharedCredentials/{uuid}"))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."),(0,r.kt)(l.default,{mdxType:"SharedCredentialsAtomicExample"}),(0,r.kt)("p",{parentName:"li"},"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You're done!"))))),(0,r.kt)("h2",{id:"integration-testing"},"Integration Testing"),(0,r.kt)("p",null,"All testing and development ought to be done against our Sandbox environment. The publicly published ",(0,r.kt)("a",{parentName:"p",href:"https://api.docs.verified.inc/"},"Postman collection's")," ",(0,r.kt)("em",{parentName:"p"},"Integration Test Suite")," is very helpful facilitating testing your Acceptor integration. All instructions below are in reference to this Postman collection. ",(0,r.kt)("em",{parentName:"p"},"If you are more accustom to an alternative HTTP request client for development purposes, please let us know and we maybe be able to accommodate you.")),(0,r.kt)("p",null,"To test either flavor of integration, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptorBrandApiKey")," from the also published ",(0,r.kt)("inlineCode",{parentName:"p"},"Public API")," environment variables with your brand's Sandbox API key to make the calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"/1-click")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/sharedCredentials/{uuid}"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some pre-configuration is necessary to test this appropriately. However, if we have already given you an ApiKey this should already be done for you. If you are unsure, please contact us.")),(0,r.kt)("p",null,"Testing in our Sandbox environment will be returning mocked data from our IDV service providers. We can configure that data in the response to suite your needs."))}m.isMDXComponent=!0},1906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,s={unversionedId:"reusables/credential-usage-example-snippet",id:"reusables/credential-usage-example-snippet",title:"credential-usage-example-snippet",description:"Example Application Code Credential Handling",source:"@site/docs/reusables/credential-usage-example-snippet.mdx",sourceDirName:"reusables",slug:"/reusables/credential-usage-example-snippet",permalink:"/reusables/credential-usage-example-snippet",draft:!1,tags:[],version:"current",frontMatter:{}},o={},d=[],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Application Code Credential Handling"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import _ from 'lodash';\n\n/**\n * Finds value in an object that matches a property name.\n * @param object\n * @param propertyName\n */\nexport function findByPropertyName<Type>(\n  object: Record<string, any>,\n  propertyName: string\n): Type | undefined {\n  if (_.has(object, propertyName)) {\n    return object[propertyName];\n  }\n\n  for (const key in object) {\n    if (_.isArray(object[key])) {\n      for (const item of object[key]) {\n        const result = findByPropertyName(item, propertyName);\n        if (result !== undefined) {\n          return result as Type;\n        }\n      }\n    }\n    if (_.isPlainObject(object[key])) {\n      const result = findByPropertyName(object[key], propertyName);\n      if (result !== undefined) {\n        return result as Type;\n      }\n    }\n  }\n\n  return undefined;\n}\n")))))}c.isMDXComponent=!0},2179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(5415);const l={},s=void 0,o={unversionedId:"reusables/shared-credentials-body-atomic-details",id:"reusables/shared-credentials-body-atomic-details",title:"shared-credentials-body-atomic-details",description:"Example Shared Credentials Body",source:"@site/docs/reusables/shared-credentials-body-atomic-details.mdx",sourceDirName:"reusables",slug:"/reusables/shared-credentials-body-atomic-details",permalink:"/reusables/shared-credentials-body-atomic-details",draft:!1,tags:[],version:"current",frontMatter:{}},d={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Shared Credentials Body"),(0,r.kt)("p",null,(0,r.kt)(i.default,{mdxType:"SharedCredentialsAtomicExample"}))))}p.isMDXComponent=!0},5415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,s={unversionedId:"reusables/shared-credentials-body-atomic",id:"reusables/shared-credentials-body-atomic",title:"shared-credentials-body-atomic",description:"",source:"@site/docs/reusables/shared-credentials-body-atomic.mdx",sourceDirName:"reusables",slug:"/reusables/shared-credentials-body-atomic",permalink:"/reusables/shared-credentials-body-atomic",draft:!1,tags:[],version:"current",frontMatter:{}},o={},d=[],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n  "uuid": "d2fc31c3-8174-4e61-ab85-65be6446e8cf", // the sharedCredentialsUuid\n  "phone": "+14044327570",\n  "credentials": [\n      {\n          "id": "8743dce2-b0d3-46bd-a866-7af1b389ff0f",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "FullNameCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "fullName": "Richard Hendricks"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "53622515-7509-4ed1-9d70-5c3f17c148d9",\n          "createdAt": "1703101772943",\n          "updatedAt": "1703101772943",\n          "type": "PhoneCredential",\n          "issuanceDate": "1703101772943",\n          "expirationDate": null,\n          "data": {\n              "phone": "+14044327575"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "2a9b6f78-eaaf-4526-a131-d919d1a1d0cb",\n          "createdAt": "1703101781008",\n          "updatedAt": "1703101781008",\n          "type": "AddressCredential",\n          "issuanceDate": "1703101781006",\n          "expirationDate": null,\n          "data": {\n              "address": "6536 Del Playa Dr, Goleta, US-CA 93117-5117"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "46dc73e8-659e-41f8-be66-f7cedad26bd8",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "BirthDateCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "birthDate": "721310400000"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "e3a55df0-2245-4ec2-ad6a-64ba186a7089",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "SsnCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "ssn": "257850937"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      }\n    ]\n  }\n')))}c.isMDXComponent=!0},3451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,s={unversionedId:"reusables/shared-credentials-body",id:"reusables/shared-credentials-body",title:"shared-credentials-body",description:"",source:"@site/docs/reusables/shared-credentials-body.mdx",sourceDirName:"reusables",slug:"/reusables/shared-credentials-body",permalink:"/reusables/shared-credentials-body",draft:!1,tags:[],version:"current",frontMatter:{}},o={},d=[],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Shared Credentials Body"',title:'"Example',Shared:!0,Credentials:!0,'Body"':!0},'{\n    "uuid": "23b9c628-3415-447e-a716-0fe1b4cf61ff",\n    "email": "richard@piedpiper.net",\n    "phone": "+79553044233",\n    "credentials": [\n      {\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111223333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n      },\n      {\n        "id": "1be7c008-3f0c-4a21-9aad-69ca1c4251d2",\n        "type": "FullNameCredential",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "data": [\n          {\n            "id": "2e6a7b9a-e93e-43ba-98a9-c554f4e16457",\n            "type": "FirstNameCredential",\n            "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n            "issuanceDate": "1671847264479",\n            "expirationDate": "1871839024044",\n            "data": {\n              "firstName": "Richard"\n            }\n          },\n          {\n            "id": "9a5817ef-e621-4277-8c48-c8ee3776b6c4",\n            "type": "LastNameCredential",\n            "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n            "issuanceDate": "1671847264479",\n            "expirationDate": "1871839024044",\n            "data": {\n              "lastName": "Hendricks"\n            }\n          }\n        ]\n      }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);