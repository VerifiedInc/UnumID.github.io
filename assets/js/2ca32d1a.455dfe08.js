"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[945],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),i=n(6010),r=n(2389),s=n(7392),o=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:m,defaultValue:c,values:h,groupId:k,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),D=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(D,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===c?c:null!=(t=null!=c?c:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!D.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+D.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[I,w]=(0,l.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:K}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==I&&D.some((t=>t.value===e))&&w(e)}const U=e=>{const t=e.currentTarget,n=S.indexOf(t),a=D[n].value;a!==I&&(K(t),w(a),null!=k&&N(k,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var l;const t=S.indexOf(e.currentTarget)-1;n=null!=(l=S[t])?l:S[S.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},D.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>S.push(e),onKeyDown:T,onFocus:U,onClick:U},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(v.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function c(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},5706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),i=(n(5488),n(5162),n(7874),n(106));const r={id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",sidebar_label:"Flutter",slug:"/mobile-sdk-flutter"},s=void 0,o={unversionedId:"mobile-sdk-flutter",id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",description:"This is a cross-platform SDK that allows a host app to receive and store credentials, receive requests, and share presentations. It supports both Android and iOS applications built using the Flutter framework.",source:"@site/docs/mobile-sdk-flutter.mdx",sourceDirName:".",slug:"/mobile-sdk-flutter",permalink:"/mobile-sdk-flutter",draft:!1,tags:[],version:"current",frontMatter:{id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",sidebar_label:"Flutter",slug:"/mobile-sdk-flutter"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Required Permissions",id:"required-permissions",level:3},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2},{value:"SDK Initialization",id:"sdk-initialization",level:3},{value:"SDK handle deeplink",id:"sdk-handle-deeplink",level:3},{value:"SDK QR Code Scanner",id:"sdk-qr-code-scanner",level:3},{value:"SDK Logging",id:"sdk-logging",level:3},{value:"SDK Logout",id:"sdk-logout",level:3},{value:"SDK Event Listener",id:"sdk-event-listener",level:3},{value:"SDK Presentation Response",id:"sdk-presentation-response",level:3},{value:"Handling Multiple Users",id:"handling-multiple-users",level:2},{value:"Example Flow",id:"example-flow",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a cross-platform SDK that allows a host app to receive and store ",(0,l.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",(0,l.kt)(i.Z,{type:"request",mdxType:"Tip"},"requests"),", and share ",(0,l.kt)(i.Z,{type:"presentation",mdxType:"Tip"},"presentations"),". It supports both Android and iOS applications built using the Flutter framework."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Unum ID customer, and you need to register at least one ",(0,l.kt)(i.Z,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Android 6.0 (Marshmallow) and above")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"iOS 13 and above")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),(0,l.kt)("h3",{id:"required-permissions"},"Required Permissions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",(0,l.kt)("inlineCode",{parentName:"li"},"initialize()"))),(0,l.kt)("p",null,"Permissions and any permission rational messages should be updated in the individual native sections of the host application."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install the flutter plugin by adding it to your pubspec.yaml file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  unumidflutter:\n      git:\n        url: git@github.com:UnumID/unumid-sdk-flutter.git\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"sdk-initialization"},"SDK Initialization"),(0,l.kt)("p",null,"This function initializes the Unum ID SDK, allowing the host app to use it. It must be called before any other SDK functionality can be used. In most cases, it should be called when the application loads/comes to the foreground. Once onSuccess is returned, the developer will then be able to retrieve the saved did."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},'import \'package:unumidflutter/unumidflutter.dart\';\n\nFuture<void> _sdkInit() async {\n        final prefs = await SharedPreferences.getInstance();\n        var userId = currentUserID;\n        var did = currentUserDid; // can be empty\n        var customerId = "YourCustomerId";\n        var apiKey = "YourApiKey";\n        var results = await Unumidflutter.initialize(userId, did, customerId, apiKey);\n\n        // returned results will be the user DID\n        print("Result: " + results);\n        if (results.toString().isNotEmpty) {\n          // store DID for future reference\n        }\n      }\n\n      _sdkInit();\n')),(0,l.kt)("h3",{id:"sdk-handle-deeplink"},"SDK handle deeplink"),(0,l.kt)("p",null,"Used to manually handle a link."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.handleLink(\"deepLinkUri\");\n")),(0,l.kt)("h3",{id:"sdk-qr-code-scanner"},"SDK QR Code Scanner"),(0,l.kt)("p",null,"Used to scan a QR code using the build in scanner. If you would like to use a custom scanner, simple send the received url to the handleLink api."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.scanQrCode();\n")),(0,l.kt)("h3",{id:"sdk-logging"},"SDK Logging"),(0,l.kt)("p",null,"Turn on SDK Logging"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.turnOnLogging();\n")),(0,l.kt)("h3",{id:"sdk-logout"},"SDK Logout"),(0,l.kt)("p",null,"Log the current user out of the SDK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.logout();\n")),(0,l.kt)("h3",{id:"sdk-event-listener"},"SDK Event Listener"),(0,l.kt)("p",null,"If the client application would like to be notified of SDK events (like presentation requests), then the ",(0,l.kt)("inlineCode",{parentName:"p"},"FlutterEventLister")," can be set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.setupEventListener(FlutterEventListener listener);\n")),(0,l.kt)("h3",{id:"sdk-presentation-response"},"SDK Presentation Response"),(0,l.kt)("p",null,"If the client application is handling presentation requests with a custom UI, then the response can be sent back to the SDK with ",(0,l.kt)("inlineCode",{parentName:"p"},"handlePresentationResponse"),".\nThis should include an enum of the response (Accept, Decline, FLag), and the original JSON payload. However, the payload can be modified by the client application to only include selected credentials in the case that some credentials are optional, or there are multiple values for same credential type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.handlePresentationResponse(String response, String json);\n")),(0,l.kt)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),(0,l.kt)("p",null,"Each user is identified by some user ID in your system and by a ",(0,l.kt)(i.Z,{type:"DID",mdxType:"Tip"})," in the Unum ID ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),(0,l.kt)("p",null,"If you don't have existing user IDs, you ",(0,l.kt)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Unum ID ecosystem."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs.")),(0,l.kt)("p",null,"When you ",(0,l.kt)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Don't include a DID for a user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"DIDs are the ",(0,l.kt)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one."),(0,l.kt)("p",{parentName:"admonition"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data.")),(0,l.kt)("h3",{id:"example-flow"},"Example Flow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"New User 1 logs into host app."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,l.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),(0,l.kt)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"New User 2 logs into host app."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,l.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),(0,l.kt)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Returning User 1 logs into host app."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),(0,l.kt)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}m.isMDXComponent=!0}}]);