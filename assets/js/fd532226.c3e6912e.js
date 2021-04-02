(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/architecture-a2005fb41ed8ffde70cba0d556fb2dca.png"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(3),i=a(7),n=(a(0),a(95)),s=(a(96),a(97)),o={id:"architecture",title:"Architecture",sidebar_label:"Architecture",slug:"/architecture"},c={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"This section provides a brief overview of Unum ID's architecture and how the various components are used.",source:"@site/docs/architecture.mdx",slug:"/architecture",permalink:"/architecture",version:"current",sidebar_label:"Architecture",sidebar:"sidebar",previous:{title:"Terminology",permalink:"/terminology"},next:{title:"Deployment Overview",permalink:"/deployment-overview"}},b=[{value:"Components",id:"components",children:[{value:"Mobile SDK",id:"mobile-sdk",children:[]},{value:"Server SDK",id:"server-sdk",children:[]},{value:"Web SDK",id:"web-sdk",children:[]}]},{value:"Example Usage",id:"example-usage",children:[{value:"Passwordless Auth",id:"passwordless-auth",children:[]},{value:"Instant Onboarding",id:"instant-onboarding",children:[]}]}],p={toc:b};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This section provides a brief overview of Unum ID's architecture and how the various components are used."),Object(n.b)("h2",{id:"components"},"Components"),Object(n.b)("p",null,"We provide several lightweight SDKs that you use to interact with our Identity Engine cloud."),Object(n.b)("p",null,Object(n.b)("img",{src:a(122).default}),"\n",Object(n.b)("em",{parentName:"p"},Object(n.b)("b",null,"Architecture:")," You use SDKs to interact with our Identity Engine cloud.")),Object(n.b)("p",null,"For more information on the Encrypted Domain shown in this diagram, see the ",Object(n.b)("a",{parentName:"p",href:"/security"},"Security")," section."),Object(n.b)("h3",{id:"mobile-sdk"},"Mobile SDK"),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile SDK")," works behind the scenes in your company's mobile app to securely store a user\u2019s ",Object(n.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials"),". It also lets a user respond to ",Object(n.b)(s.a,{type:"request",mdxType:"Tip"},"requests")," and share ",Object(n.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"~480 KB (unminified)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"iOS:")," written in Swift, supports Swift and Objective-C apps,\niOS 11.1+, iPhone 6+"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Android:")," supports Kotlin and Java apps, API Level 23+ (Android 6.0+)")),Object(n.b)("h3",{id:"server-sdk"},"Server SDK"),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK")," lets you issue ",Object(n.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials")," to users and verify ",Object(n.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations")," they share with you."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Option 1\u200b:")," Node.js SDK (",Object(n.b)("a",{parentName:"li",href:"mailto:support@Unum.ID"},"contact us")," for other languages)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Option 2\u200b:")," containerized app with exposed API")),Object(n.b)("h3",{id:"web-sdk"},"Web SDK"),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," lets you display ",Object(n.b)(s.a,{type:"request",mdxType:"Tip"},"requests")," to users and show the results of\nverifying ",Object(n.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations")," they share with you."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"React library")," (",Object(n.b)("a",{parentName:"li",href:"mailto:support@Unum.ID"},"contact us")," for other frameworks)")),Object(n.b)("h2",{id:"example-usage"},"Example Usage"),Object(n.b)("h3",{id:"passwordless-auth"},"Passwordless Auth"),Object(n.b)("p",null,"In this example, ",Object(n.b)("strong",{parentName:"p"},"ACME Bank")," uses Unum ID for passwordless authentication. ",Object(n.b)("strong",{parentName:"p"},"Richard")," is an ACME user. "),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"This is our ",Object(n.b)("a",{parentName:"p",href:"https://www.unum.id/solutions/beyond-passwordless"},"Beyond Passwordless"),"\u2122 product in action. ",Object(n.b)("a",{parentName:"p",href:"mailto:sales@Unum.ID"},"Contact sales")," to learn more."))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"ACME's server uses the ",Object(n.b)("a",{parentName:"li",href:"/server-sdk"},"Server SDK")," to issue an authentication ",Object(n.b)(s.a,{type:"credential",mdxType:"Tip"})," to Richard."),Object(n.b)("li",{parentName:"ol"},"Richard's ACME app uses the ",Object(n.b)("a",{parentName:"li",href:"/mobile-sdk-overview"},"Mobile SDK")," to store the credentiaal."),Object(n.b)("li",{parentName:"ol"},"ACME's server uses the Server SDK create a ",Object(n.b)(s.a,{type:"request",mdxType:"Tip"})," for a ",Object(n.b)(s.a,{type:"presentation",mdxType:"Tip"})," (of the credential)."),Object(n.b)("li",{parentName:"ol"},"ACME's website uses the ",Object(n.b)("a",{parentName:"li",href:"/web-sdk"},"Web SDK")," to display or send the request to Richard."),Object(n.b)("li",{parentName:"ol"},"Richard's ACME app uses the Mobile SDK to prompt Richard to respond to the request."),Object(n.b)("li",{parentName:"ol"},"Richard agrees to authenticate, and his ACME app uses the Mobile SDK to send a presentation (of the credential) to ACME's server."),Object(n.b)("li",{parentName:"ol"},"ACME's server uses the Server SDK to verify the presentation."),Object(n.b)("li",{parentName:"ol"},"ACME's website uses the Web SDK to get the result of the verification and log Richard in.")),Object(n.b)("h3",{id:"instant-onboarding"},"Instant Onboarding"),Object(n.b)("p",null,"In this example, ",Object(n.b)("strong",{parentName:"p"},"Hooli FinTech")," uses Unum ID for instant onboarding. It uses ",Object(n.b)("strong",{parentName:"p"},"Richard's")," ",Object(n.b)("strong",{parentName:"p"},"ACME")," information (which he chooses to share) to create a pre-approved Hooli account for him."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"This is our ",Object(n.b)("a",{parentName:"p",href:"https://www.unum.id/solutions/verify-with-x"},"Verify with X"),"\u2122 product in action. ",Object(n.b)("a",{parentName:"p",href:"mailto:sales@Unum.ID"},"Contact sales")," to learn more."))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Hooli's server uses the ",Object(n.b)("a",{parentName:"li",href:"/server-sdk"},"Server SDK")," create a ",Object(n.b)(s.a,{type:"request",mdxType:"Tip"})," for a ",Object(n.b)(s.a,{type:"presentation",mdxType:"Tip"})," (of the ACME KYC verification ",Object(n.b)(s.a,{type:"credential",mdxType:"Tip"}),")."),Object(n.b)("li",{parentName:"ol"},"Hooli's website uses the ",Object(n.b)("a",{parentName:"li",href:"/web-sdk"},"Web SDK")," to display or send the request to Richard."),Object(n.b)("li",{parentName:"ol"},"Richard's ACME app uses the ",Object(n.b)("a",{parentName:"li",href:"/mobile-sdk-overview"},"Mobile SDK")," to prompt Richard to respond to the request."),Object(n.b)("li",{parentName:"ol"},"Richard agrees to share his information, and his ACME app uses the Mobile SDK to send a presentation (of the ACME KYC verification credential) to Hooli's server."),Object(n.b)("li",{parentName:"ol"},"Hooli's server uses the Server SDK to verify the presentation."),Object(n.b)("li",{parentName:"ol"},"Hooli's website uses the Web SDK to get the result of the verification and create an account for Richard with the ACME information he shared.")))}l.isMDXComponent=!0}}]);