(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/url-types-4c8ad979f9bacff6ae9921ece24054ac.png"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(98)),r=(n(100),n(101)),s={id:"mobile-sdk-ios",title:"Mobile SDK - iOS",sidebar_label:"iOS",slug:"/mobile-sdk-ios"},l={unversionedId:"mobile-sdk-ios",id:"mobile-sdk-ios",isDocsHomePage:!1,title:"Mobile SDK - iOS",description:"Docs for the Android SDK are here.",source:"@site/docs/mobile-sdk-ios.mdx",slug:"/mobile-sdk-ios",permalink:"/mobile-sdk-ios",version:"current",sidebar_label:"iOS",sidebar:"sidebar",previous:{title:"Mobile SDK - Android",permalink:"/mobile-sdk-android"},next:{title:"Web SDK",permalink:"/web-sdk"}},c=[{value:"Overview",id:"overview",children:[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Required Permissions",id:"required-permissions",children:[]}]},{value:"Setup",id:"setup",children:[{value:"<code>Info.plist</code>",id:"infoplist",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Access to Current View Controller",id:"access-to-current-view-controller",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Deep Links",id:"deep-links",children:[]},{value:"QR Code Scanner",id:"qr-code-scanner",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Callback",id:"callback",children:[]}]},{value:"Handling Multiple Users",id:"handling-multiple-users",children:[{value:"Example Flow",id:"example-flow",children:[]}]}],p={toc:c};function d(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Docs for the Android SDK are ",Object(o.b)("a",{parentName:"em",href:"mobile-sdk-android"},"here"),".")),Object(o.b)("p",null,"This is a lightweight, fully native SDK that allows a host app to receive and store ",Object(o.b)(r.a,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",Object(o.b)(r.a,{type:"request",mdxType:"Tip"},"requests"),", and share ",Object(o.b)(r.a,{type:"presentation",mdxType:"Tip"},"presentations"),". It works with both Swift and Objective-C native apps."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Unum ID customer, and you need to register at least one ",Object(o.b)(r.a,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"iOS 12 and above")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),Object(o.b)("h3",{id:"required-permissions"},"Required Permissions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",Object(o.b)("inlineCode",{parentName:"li"},"initialize()"))),Object(o.b)("p",null,"These permissions are requested by the SDK \u2014 no action is required by the host app. "),Object(o.b)("p",null,"Because the SDK leverages the secure hardware of the user's device for cryptographic operations, it requires OS level user authentication. This means ",Object(o.b)("strong",{parentName:"p"},"the user must have a lock screen biometric or passcode")," If the user doesn't have this set up, the SDK will prompt the user and direct them to the correct place in Settings to do so."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Device biometrics are typically ",Object(o.b)("em",{parentName:"p"},"aliases")," for passcodes (or similar options like PINs and patterns) and fall back to those. This is all handled at the OS level."))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"infoplist"},Object(o.b)("inlineCode",{parentName:"h3"},"Info.plist")),Object(o.b)("p",null,"Because the SDK requires camera and biometric/passcode ",Object(o.b)("a",{parentName:"p",href:"#permissions"},"permissions"),", you need to add desciptions like these to the ",Object(o.b)("inlineCode",{parentName:"p"},"Info.plist")," file:"),Object(o.b)("h4",{id:"privacy---camera-usage-description"},"Privacy - Camera Usage Description"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This app would like to use the camera for QR code scanning.")),Object(o.b)("h4",{id:"privacy---face-id-usage-description"},"Privacy - Face ID Usage Description"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This app would like to use Face ID for authorization.")),Object(o.b)("h4",{id:"privacy---touch-id-usage-description"},"Privacy - Touch ID Usage Description"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This app would like to use Touch ID for authorization.")),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"When you register a ",Object(o.b)(r.a,{type:"holder app",mdxType:"Tip"}),", we will send you the SDK as a compiled binary library."),Object(o.b)("h3",{id:"access-to-current-view-controller"},"Access to Current View Controller"),Object(o.b)("p",null,"The SDK needs access to the current view controller to show system alerts to the user (this is essential for the SDK to work). So, you should always pass the this to the SDK like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"UnumPresenterHelper.currentViewController = viewController\n")),Object(o.b)("h3",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"You should initialize the SDK when the app starts up. This will ensure the SDK is set up properly. "),Object(o.b)("p",null,"You can optionally include a ",Object(o.b)(r.a,{type:"DID",mdxType:"Tip"})," (",Object(o.b)("inlineCode",{parentName:"p"},"did"),"), which identifies a user (technically called a ",Object(o.b)(r.a,{type:"subject",mdxType:"Tip"}),") in the Unum ID ecosystem. A returning user will already have a DID, so you should include this to ensure the SDK loads any new credentials associated with that DID as part of the initialization process. "),Object(o.b)("p",null,"You can optionally include the ",Object(o.b)("inlineCode",{parentName:"p"},"UnumCallback")," to be notified of the result of the initialization call."),Object(o.b)("p",null,"After a user has successfully log in to the host app, and initialization call should be made to the SDK. The host app should store a reference to the user DID so that it can be passed to the initialization call. If a DID is not provided a new one will be created and returned."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'let userDid = { /* retreive user DID */ }\nlet config = UnumInitializationConfiguration(customerId: BuildConfig.CustomerId, // your customer UUID\napiKey: BuildConfig.ApiKey, // your holder app API key\ndid: userDid, // (optional) include this for returning users \u2014 otherwise leave empty\nonError: {}, // (optional) run if there\'s an error\nauthorizeRecoveryFromBackup: {  } // (optional) run when restoring from backup\n)\n\nclassInitializationCallback: UnumCallback {\n    internal init(_ parent: MainView) {\n        self.parent = parent\n    }\n    \n    let parent: MainView\n    func onSuccess(data: String?) {\n        // returned data will be user\'s DID if new one was created\n    }\n\n    func onSDKError(error: String?) {\n        print("SDK Error: \\(error ?? "")")\n    }\n\n    func onAPIError(code: Int, error: String?) {\n        print("API Error \\(error ?? "")")\n    }\n}\nUnumID.initialize(configuration: config, callback: InitializationCallback(self))\n')),Object(o.b)("p",null,"The initialization process involves creating private keys for the user using the secure hardware of the device. This requires OS level authentication, so the user will be prompted to pass a biometric check or enter their passcode. If they don't have this set up, the SDK will direct them to the correct place in Settings to do so."),Object(o.b)("h3",{id:"deep-links"},"Deep Links"),Object(o.b)("p",null,"In the context of Unum ID, a ",Object(o.b)("strong",{parentName:"p"},"deep link")," is a URL that opens a specific ",Object(o.b)(r.a,{type:"holder app",mdxType:"Tip"}),". For example, a link that opens the ACME Bank mobile app might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"unumid://acme/presentationRequest/88d37012-f83b-453a-a1f1-d4a1bcf86aa3\n")),Object(o.b)("p",null,"The SDK uses deep links to retrieve and display a ",Object(o.b)(r.a,{type:"request",mdxType:"Tip"})," to a user, who decides whether to share data in response. Users will typically encounter deep links displayed in the ",Object(o.b)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," (in QR code or button form) or sent over a communication channel (like push notification, SMS, or email)."),Object(o.b)("p",null,"You need to pass Unum ID deep links to the SDK to be processed. To do so, set up your host app to receive the appropriate schemas. (You can optionally add logic to determine if the deep link should be passed to the SDK.) Do this in the ",Object(o.b)("strong",{parentName:"p"},"Target -> Info")," tab."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Url type",src:n(198).default})),Object(o.b)("p",null,"Here's an example of sending the deep link to the SDK in ",Object(o.b)("inlineCode",{parentName:"p"},"SceneDelegate"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n    for context in URLContexts {\n        UnumID.acceptDeepLink(link: context.url.absoluteString)\n    }\n}\n")),Object(o.b)("p",null,"When it receives a deep link, the SDK will display a system alert, asking the user how they want to respond to the ",Object(o.b)(r.a,{type:"request",mdxType:"Tip"})," (that the deep link references)."),Object(o.b)("h3",{id:"qr-code-scanner"},"QR Code Scanner"),Object(o.b)("p",null,"The Unum ID ",Object(o.b)("a",{parentName:"p",href:"#/deep-links"},"deep links")," described above can be displayed in QR code form. This is important for cases when a user is on a non-mobile device. For example, the ACME Bank website might request that a user share an authentication credential to log into the ACME website on desktop. ACME would do so by displaying a QR code that the user scans. This would open the ACME mobile app on the user's phone and prompt the user to share the requested data."),Object(o.b)("p",null,"Any QR code scanner can read an Unum ID deep link in QR code form. iOS devices support scanning directly from the native camera, but you should also allow the user to scan codes from within your app."),Object(o.b)("p",null,"If you already have a QR code scanner, you can pass QR codes directly to the SDK like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"UnumID.acceptDeepLink(link: scannedCode)\n")),Object(o.b)("p",null,"If you don't have a QR code scanner, you can use the one included in the SDK. This will automatically pass the deep link to the SDK \u2014 no further action is needed from the host app."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"var scannerSheet: some  View {\n    UnumCodeScannerView(\n        codeTypes: [.qr],\n        completion: { result in\n            self.isShowingScanner = false\n        }\n    )\n}\n")),Object(o.b)("p",null,'You can open this on a trigger of your choice. For example, you can create a "Scan QR Code" button that opens the scanner when the user clicks it:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'@State var isShowingScanner = false\n\n\nButton(action: {\n    self.isShowingScanner = true\n}) {\n    Text("Scan QR Code")\n    .font(.headline)\n    .foregroundColor(.white)\n    .padding(.all)\n    .frame(width: 300, height: 50)\n    .background(Color.blue)\n    .cornerRadius(15.0)\n}.sheet(isPresented: $isShowingScanner) {\n    self.scannerSheet\n}\n')),Object(o.b)("h3",{id:"logging"},"Logging"),Object(o.b)("p",null,"You can turn SDK logging on and off and set the log level:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"// Turn the SDK logger on or off\nUnumID.log.enabled = true\n// If logger enabled, set desired message log level\nUnumID.log.level = .debug\n")),Object(o.b)("h3",{id:"callback"},"Callback"),Object(o.b)("p",null,"You can pass the ",Object(o.b)("inlineCode",{parentName:"p"},"UnumCallback")," to most method calls within the SDK. This adds a listener that records the result of the method call \u2013 a successful call, an SDK error, or an API error. The ",Object(o.b)("a",{parentName:"p",href:"#initialization"},"Initialization")," section shows one example of this, and here's another:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'classInitializationCallback: UnumCallback {\n    internal init(_ parent: MainView) {\n        self.parent = parent\n    }\n\n    let parent: MainView\n    func onSuccess(data: String?) {\n        // returned data will be user DID if new one was created\n    }\n\n    func onSDKError(error: String?) {\n        print("SDK Error: \\(error ?? "")")\n    }\n\n    func onAPIError(code: Int, error: String?) {\n        print("API Error \\(error ?? "")")\n    }\n}\nUnumID.initialize(configuration: config, callback: InitializationCallback(self))\n')),Object(o.b)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),Object(o.b)("p",null,"Each user is identified by some user ID in your system and by a ",Object(o.b)(r.a,{type:"DID",mdxType:"Tip"})," in the Unum ID ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),Object(o.b)("p",null,"If you don't have existing user IDs, you ",Object(o.b)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Unum ID ecosystem."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs."))),Object(o.b)("p",null,"When you ",Object(o.b)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Don't include a DID for user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"DIDs are the ",Object(o.b)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one. "),Object(o.b)("p",{parentName:"div"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data."))),Object(o.b)("h3",{id:"example-flow"},"Example Flow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"New User 1 logs into host app."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(o.b)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),Object(o.b)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"New User 2 logs into host app."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(o.b)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),Object(o.b)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Returning User 1 logs into host app."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),Object(o.b)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}d.isMDXComponent=!0}}]);