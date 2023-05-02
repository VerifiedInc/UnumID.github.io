"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[935],{8074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905)),o=(n(7874),n(106));const s={id:"mobile-sdk-ios",title:"Mobile SDK - iOS",sidebar_label:"iOS",slug:"/mobile-sdk-ios"},r=void 0,l={unversionedId:"mobile-sdk-ios",id:"mobile-sdk-ios",title:"Mobile SDK - iOS",description:"Docs for the Android SDK are here.",source:"@site/docs/mobile-sdk-ios.mdx",sourceDirName:".",slug:"/mobile-sdk-ios",permalink:"/mobile-sdk-ios",draft:!1,tags:[],version:"current",frontMatter:{id:"mobile-sdk-ios",title:"Mobile SDK - iOS",sidebar_label:"iOS",slug:"/mobile-sdk-ios"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Required Permissions",id:"required-permissions",level:3},{value:"Setup",id:"setup",level:2},{value:"<code>Info.plist</code>",id:"infoplist",level:3},{value:"Privacy - Camera Usage Description",id:"privacy---camera-usage-description",level:4},{value:"Privacy - Face ID Usage Description",id:"privacy---face-id-usage-description",level:4},{value:"Privacy - Touch ID Usage Description",id:"privacy---touch-id-usage-description",level:4},{value:"Installation",id:"installation",level:3},{value:"Access to Current View Controller",id:"access-to-current-view-controller",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Deep Links",id:"deep-links",level:3},{value:"Event Listener",id:"event-listener",level:3},{value:"Presentation Response",id:"presentation-response",level:3},{value:"QR Code Scanner",id:"qr-code-scanner",level:3},{value:"Logging",id:"logging",level:3},{value:"Callback",id:"callback",level:3},{value:"Handling Multiple Users",id:"handling-multiple-users",level:2},{value:"Example Flow",id:"example-flow",level:3}],c={toc:u};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Docs for the Android SDK are ",(0,a.kt)("a",{parentName:"em",href:"mobile-sdk-android"},"here"),".")),(0,a.kt)("p",null,"This is a lightweight, fully native SDK that allows a host app to receive and store ",(0,a.kt)(o.Z,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",(0,a.kt)(o.Z,{type:"request",mdxType:"Tip"},"requests"),", and share ",(0,a.kt)(o.Z,{type:"presentation",mdxType:"Tip"},"presentations"),". It works with both Swift and Objective-C native apps."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Verified Inc. customer, and you need to register at least one ",(0,a.kt)(o.Z,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"iOS 13 and above")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),(0,a.kt)("h3",{id:"required-permissions"},"Required Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",(0,a.kt)("inlineCode",{parentName:"li"},"initialize()"))),(0,a.kt)("p",null,"These permissions are requested by the SDK \u2014 no action is required by the host app. "),(0,a.kt)("p",null,"Because the SDK leverages the secure hardware of the user's device for cryptographic operations, it requires OS level user authentication. This means ",(0,a.kt)("strong",{parentName:"p"},"the user must have a lock screen biometric or passcode")," If the user doesn't have this set up, the SDK will prompt the user and direct them to the correct place in Settings to do so."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Device biometrics are typically ",(0,a.kt)("em",{parentName:"p"},"aliases")," for passcodes (or similar options like PINs and patterns) and fall back to those. This is all handled at the OS level.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"infoplist"},(0,a.kt)("inlineCode",{parentName:"h3"},"Info.plist")),(0,a.kt)("p",null,"Because the SDK requires camera and biometric/passcode ",(0,a.kt)("a",{parentName:"p",href:"#permissions"},"permissions"),", you need to add descriptions like these to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," file:"),(0,a.kt)("h4",{id:"privacy---camera-usage-description"},"Privacy - Camera Usage Description"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This app would like to use the camera for QR code scanning.")),(0,a.kt)("h4",{id:"privacy---face-id-usage-description"},"Privacy - Face ID Usage Description"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This app would like to use Face ID for authorization.")),(0,a.kt)("h4",{id:"privacy---touch-id-usage-description"},"Privacy - Touch ID Usage Description"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This app would like to use Touch ID for authorization.")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"When you register a ",(0,a.kt)(o.Z,{type:"holder app",mdxType:"Tip"}),", we will send you the SDK as a compiled binary library."),(0,a.kt)("h3",{id:"access-to-current-view-controller"},"Access to Current View Controller"),(0,a.kt)("p",null,"The SDK needs access to the current view controller to show system alerts to the user (this is essential for the SDK to work). So, you should always pass the this to the SDK like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"UnumPresenterHelper.currentViewController = viewController\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Android SDK has the ability for some aspects of its functionality to be customized to the client application. The following preferences can be set at a global level for the SDK."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useFullScreenDialog")," :  If the SDK handles showing a presentation request, should it be shown in a system dialog or a full screen presentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"returnPresentationDetails")," :  Should the presentation request be handled by the client application. This would allow the client application to show a custom UI for presentation requests.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"verified.incnfigure(UnumSDKConfig(useFullScreenDialog = true, returnPresentationDetails = false))\n")),(0,a.kt)("h3",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"You should initialize the SDK when the app starts up. This will ensure the SDK is set up properly. "),(0,a.kt)("p",null,"You can optionally include a ",(0,a.kt)(o.Z,{type:"DID",mdxType:"Tip"})," (",(0,a.kt)("inlineCode",{parentName:"p"},"did"),"), which identifies a user (technically called a ",(0,a.kt)(o.Z,{type:"subject",mdxType:"Tip"}),") in the Verified Inc. ecosystem. A returning user will already have a DID, so you should include this to ensure the SDK loads any new credentials associated with that DID as part of the initialization process. "),(0,a.kt)("p",null,"You can optionally include the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnumCallback")," to be notified of the result of the initialization call."),(0,a.kt)("p",null,"After a user has successfully log in to the host app, and initialization call should be made to the SDK. The host app should store a reference to the user DID so that it can be passed to the initialization call. If a DID is not provided a new one will be created and returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let userDid = { /* retreive user DID */ }\nlet config = UnumInitializationConfiguration(customerId: BuildConfig.CustomerId, // your customer UUID\napiKey: BuildConfig.ApiKey, // your holder app API key\ndid: userDid, // (optional) include this for returning users \u2014 otherwise leave empty\nonError: {}, // (optional) run if there\'s an error\nauthorizeRecoveryFromBackup: {  } // (optional) run when restoring from backup\n)\n\nclassInitializationCallback: UnumCallback {\n    internal init(_ parent: MainView) {\n        self.parent = parent\n    }\n    \n    let parent: MainView\n    func onSuccess(data: String?) {\n        // returned data will be user\'s DID if new one was created\n    }\n\n    func onSDKError(error: String?) {\n        print("SDK Error: \\(error ?? "")")\n    }\n\n    func onAPIError(code: Int, error: String?) {\n        print("API Error \\(error ?? "")")\n    }\n}\nUnumID.initialize(configuration: config, callback: InitializationCallback(self))\n')),(0,a.kt)("p",null,"The initialization process involves creating private keys for the user using the secure hardware of the device. This requires OS level authentication, so the user will be prompted to pass a biometric check or enter their passcode. If they don't have this set up, the SDK will direct them to the correct place in Settings to do so."),(0,a.kt)("h3",{id:"deep-links"},"Deep Links"),(0,a.kt)("p",null,"In the context of Verified Inc., a ",(0,a.kt)("strong",{parentName:"p"},"deep link")," is a URL that opens a specific ",(0,a.kt)(o.Z,{type:"holder app",mdxType:"Tip"}),". For example, a link that opens the ACME Bank mobile app might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unumid://acme/presentationRequest/88d37012-f83b-453a-a1f1-d4a1bcf86aa3\n")),(0,a.kt)("p",null,"The SDK uses deep links to retrieve and display a ",(0,a.kt)(o.Z,{type:"request",mdxType:"Tip"})," to a user, who decides whether to share data in response. Users will typically encounter deep links displayed in the ",(0,a.kt)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," (in QR code or button form) or sent over a communication channel (like push notification, SMS, or email)."),(0,a.kt)("p",null,"You need to pass Verified Inc. deep links to the SDK to be processed. To do so, set up your host app to receive the appropriate schemas. (You can optionally add logic to determine if the deep link should be passed to the SDK.) Do this in the ",(0,a.kt)("strong",{parentName:"p"},"Target -> Info")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Url type",src:n(3048).Z,width:"1039",height:"257"})),(0,a.kt)("p",null,"Here's an example of sending the deep link to the SDK in ",(0,a.kt)("inlineCode",{parentName:"p"},"SceneDelegate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n    for context in URLContexts {\n        UnumID.acceptDeepLink(link: context.url.absoluteString)\n    }\n}\n")),(0,a.kt)("p",null,"When it receives a deep link, the SDK will display a system alert, asking the user how they want to respond to the ",(0,a.kt)(o.Z,{type:"request",mdxType:"Tip"})," (that the deep link references)."),(0,a.kt)("h3",{id:"event-listener"},"Event Listener"),(0,a.kt)("p",null,"In the case that the client application would like to be responsible to showing a custom UI for presentation requests, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"UnumEventLister")," should be set by the client application. This will allow the client application to listen for SDK events.\nEvents will be sent to the client application with a ",(0,a.kt)("inlineCode",{parentName:"p"},"EventType")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," payload."),(0,a.kt)("p",null,"To set the listen in the SDK call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"UnumID.setEventListener(listener: UnumEventListener)\n")),(0,a.kt)("h3",{id:"presentation-response"},"Presentation Response"),(0,a.kt)("p",null,"When the client application is handling the UI for a presentation request, the selected results for the request can be sent\nto the SDK with ",(0,a.kt)("inlineCode",{parentName:"p"},"onPresentationResponse"),". This should include an enum of the response (Accept, Decline, FLag), and the original JSON payload. However,\nthe payload can be modified by the client application to only include selected credentials in the case that some credentials are optional, or there are\nmultiple values for same credential type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"UnumID.onPresentationResponse(responseType: PresentationResponse, json: String)\n")),(0,a.kt)("h3",{id:"qr-code-scanner"},"QR Code Scanner"),(0,a.kt)("p",null,"The Verified Inc. ",(0,a.kt)("a",{parentName:"p",href:"#/deep-links"},"deep links")," described above can be displayed in QR code form. This is important for cases when a user is on a non-mobile device. For example, the ACME Bank website might request that a user share an authentication credential to log into the ACME website on desktop. ACME would do so by displaying a QR code that the user scans. This would open the ACME mobile app on the user's phone and prompt the user to share the requested data."),(0,a.kt)("p",null,"Any QR code scanner can read an Verified Inc. deep link in QR code form. iOS devices support scanning directly from the native camera, but you should also allow the user to scan codes from within your app."),(0,a.kt)("p",null,"If you already have a QR code scanner, you can pass QR codes directly to the SDK like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"UnumID.acceptDeepLink(link: scannedCode)\n")),(0,a.kt)("p",null,"If you don't have a QR code scanner, you can use the one included in the SDK. This will automatically pass the deep link to the SDK \u2014 no further action is needed from the host app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var scannerSheet: some  View {\n    UnumCodeScannerView(\n        codeTypes: [.qr],\n        completion: { result in\n            self.isShowingScanner = false\n        }\n    )\n}\n")),(0,a.kt)("p",null,'You can open this on a trigger of your choice. For example, you can create a "Scan QR Code" button that opens the scanner when the user clicks it:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'@State var isShowingScanner = false\n\n\nButton(action: {\n    self.isShowingScanner = true\n}) {\n    Text("Scan QR Code")\n    .font(.headline)\n    .foregroundColor(.white)\n    .padding(.all)\n    .frame(width: 300, height: 50)\n    .background(Color.blue)\n    .cornerRadius(15.0)\n}.sheet(isPresented: $isShowingScanner) {\n    self.scannerSheet\n}\n')),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("p",null,"You can turn SDK logging on and off and set the log level:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// Turn the SDK logger on or off\nUnumID.log.enabled = true\n// If logger enabled, set desired message log level\nUnumID.log.level = .debug\n")),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("p",null,"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnumCallback")," to most method calls within the SDK. This adds a listener that records the result of the method call \u2013 a successful call, an SDK error, or an API error. The ",(0,a.kt)("a",{parentName:"p",href:"#initialization"},"Initialization")," section shows one example of this, and here's another:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'classInitializationCallback: UnumCallback {\n    internal init(_ parent: MainView) {\n        self.parent = parent\n    }\n\n    let parent: MainView\n    func onSuccess(data: String?) {\n        // returned data will be user DID if new one was created\n    }\n\n    func onSDKError(error: String?) {\n        print("SDK Error: \\(error ?? "")")\n    }\n\n    func onAPIError(code: Int, error: String?) {\n        print("API Error \\(error ?? "")")\n    }\n}\nUnumID.initialize(configuration: config, callback: InitializationCallback(self))\n')),(0,a.kt)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),(0,a.kt)("p",null,"Each user is identified by some user ID in your system and by a ",(0,a.kt)(o.Z,{type:"DID",mdxType:"Tip"})," in the Verified Inc. ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),(0,a.kt)("p",null,"If you don't have existing user IDs, you ",(0,a.kt)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Verified Inc. ecosystem."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The technical details of DIDs are not relevant to deploying or using Verified Inc.. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The technical details of DIDs are not relevant to deploying or using Verified Inc.. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs.")),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Don't include a DID for a user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"DIDs are the ",(0,a.kt)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one. "),(0,a.kt)("p",{parentName:"admonition"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data.")),(0,a.kt)("h3",{id:"example-flow"},"Example Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"New User 1 logs into host app."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,a.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),(0,a.kt)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"New User 2 logs into host app."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,a.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),(0,a.kt)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Returning User 1 logs into host app."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),(0,a.kt)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}d.isMDXComponent=!0},3048:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/url-types-4c8ad979f9bacff6ae9921ece24054ac.png"}}]);