(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},106:function(e,t,n){"use strict";var a=n(0),i=n(107);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},107:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},115:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(106),s=n(100),l=n(58),o=n.n(l);var u=37,c=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,v=Object(a.useState)(l),O=v[0],f=v[1],j=a.Children.toArray(e.children),D=[];if(null!=b){var N=h[b];null!=N&&N!==O&&d.some((function(e){return e.value===N}))&&f(N)}var w=function(e){var t=e.target,n=D.indexOf(t),a=j[n].props.value;f(a),null!=b&&(g(b,a),setTimeout((function(){var e,n,a,i,r,s,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,s=window,l=s.innerHeight,u=s.innerWidth,n>=0&&r<=u&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case c:var a=D.indexOf(e.target)+1;n=D[a]||D[0];break;case u:var i=D.indexOf(e.target)-1;n=D[i]||D[D.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:y,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},116:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(102)),s=(n(115),n(116),n(104),n(105)),l={id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",sidebar_label:"Flutter",slug:"/mobile-sdk-flutter"},o={unversionedId:"mobile-sdk-flutter",id:"mobile-sdk-flutter",isDocsHomePage:!1,title:"Mobile SDK - Flutter",description:"This is a cross-platform SDK that allows a host app to receive and store credentials, receive requests, and share presentations. It supports both Android and iOS applications built using the Flutter framework.",source:"@site/docs/mobile-sdk-flutter.mdx",slug:"/mobile-sdk-flutter",permalink:"/mobile-sdk-flutter",version:"current",sidebar_label:"Flutter",sidebar:"sidebar",previous:{title:"Mobile SDK - iOS",permalink:"/mobile-sdk-ios"},next:{title:"Web SDK - Overview",permalink:"/web-sdk-overview"}},u=[{value:"Overview",id:"overview",children:[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Required Permissions",id:"required-permissions",children:[]}]},{value:"Setup",id:"setup",children:[{value:"Installation",id:"installation",children:[]}]},{value:"Usage",id:"usage",children:[{value:"SDK Initialization",id:"sdk-initialization",children:[]},{value:"SDK handle deeplink",id:"sdk-handle-deeplink",children:[]},{value:"SDK QR Code Scanner",id:"sdk-qr-code-scanner",children:[]},{value:"SDK Logging",id:"sdk-logging",children:[]}]},{value:"Handling Multiple Users",id:"handling-multiple-users",children:[{value:"Example Flow",id:"example-flow",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a cross-platform SDK that allows a host app to receive and store ",Object(r.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",Object(r.b)(s.a,{type:"request",mdxType:"Tip"},"requests"),", and share ",Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations"),". It supports both Android and iOS applications built using the Flutter framework."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Unum ID customer, and you need to register at least one ",Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Android 6.0 (Marshmallow) and above")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"iOS 13 and above")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),Object(r.b)("h3",{id:"required-permissions"},"Required Permissions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",Object(r.b)("inlineCode",{parentName:"li"},"initialize()"))),Object(r.b)("p",null,"Permissions and any permission rational messages should be updated in the individual native sections of the host application."),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"Install the flutter plugin by adding it to your pubspec.yaml file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  unumidflutter:\n      git:\n        url: git@github.com:UnumID/unumid-sdk-flutter.git\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"sdk-initialization"},"SDK Initialization"),Object(r.b)("p",null,"This function initializes the Unum ID SDK, allowing the host app to use it. It must be called before any other SDK functionality can be used. In most cases, it should be called when the application loads/comes to the foreground. Once onSuccess is returned, the developer will then be able to retrieve the saved did."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'import \'package:unumidflutter/unumidflutter.dart\';\n\nFuture<void> _sdkInit() async {\n        final prefs = await SharedPreferences.getInstance();\n        var userId = currentUserID;\n        var did = currentUserDid; // can be empty\n        var customerId = "YourCustomerId";\n        var apiKey = "YourApiKey";\n        var results = await Unumidflutter.initialize(userId, did, customerId, apiKey);\n\n        // returned results will be the user DID\n        print("Result: " + results);\n        if (results.toString().isNotEmpty) {\n          // store DID for future reference\n        }\n      }\n\n      _sdkInit();\n')),Object(r.b)("h3",{id:"sdk-handle-deeplink"},"SDK handle deeplink"),Object(r.b)("p",null,"Used to manually handle a link."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.handleLink(\"deepLinkUri\");\n")),Object(r.b)("h3",{id:"sdk-qr-code-scanner"},"SDK QR Code Scanner"),Object(r.b)("p",null,"Used to scan a QR code using the build in scanner. If you would like to use a custom scanner, simple send the received url to the handleLink api."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.scanQrCode();\n")),Object(r.b)("h3",{id:"sdk-logging"},"SDK Logging"),Object(r.b)("p",null,"Turn on SDK Logging"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.turnOnLogging();\n")),Object(r.b)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),Object(r.b)("p",null,"Each user is identified by some user ID in your system and by a ",Object(r.b)(s.a,{type:"DID",mdxType:"Tip"})," in the Unum ID ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),Object(r.b)("p",null,"If you don't have existing user IDs, you ",Object(r.b)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Unum ID ecosystem."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs."))),Object(r.b)("p",null,"When you ",Object(r.b)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Don't include a DID for a user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"DIDs are the ",Object(r.b)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one."),Object(r.b)("p",{parentName:"div"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data."))),Object(r.b)("h3",{id:"example-flow"},"Example Flow"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"New User 1 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(r.b)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),Object(r.b)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"New User 2 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(r.b)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),Object(r.b)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Returning User 1 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),Object(r.b)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}d.isMDXComponent=!0}}]);