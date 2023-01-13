(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(86),s=a(84);var r=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(i.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(i.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(85),d=a(82);function m({siteTitle:e,versionLabel:t}){return l.a.createElement(s.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:l.a.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u({siteTitle:e,versionLabel:t}){return l.a.createElement(s.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:l.a.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v({versionLabel:e,to:t,onClick:a}){return l.a.createElement(s.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(i.a,{to:t,onClick:a},l.a.createElement(s.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){const{siteConfig:{title:e}}=Object(o.default)(),{pluginId:t}=Object(c.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(d.useDocsPreferredVersion)(t),n=Object(c.useActiveVersion)(t),{latestDocSuggestion:i,latestVersionSuggestion:s}=Object(c.useDocVersionSuggestions)(t);if(!s)return l.a.createElement(l.a.Fragment,null);const r=null!=i?i:(p=s).docs.find((e=>e.id===p.mainDocId));var p;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:s.label,to:r.path,onClick:()=>a(s.name)})))},b=a(110),g=a(65),E=a.n(g);function h({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return l.a.createElement(s.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*e).toISOString(),className:E.a.lastUpdatedDate},t)}}," on {date}")}function f({lastUpdatedBy:e}){return l.a.createElement(s.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,e)}}," by {user}")}function N({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(s.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?l.a.createElement(h,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?l.a.createElement(f,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=a(120),U=a(3),w=a(83),T=a(67),_=a.n(T);var A=({className:e,...t})=>l.a.createElement("svg",Object(U.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(w.a)(_.a.iconEdit,e),"aria-label":"Edit page"},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function k({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(A,null),l.a.createElement(s.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(68),V=a.n(y);t.default=function(e){const{content:t}=e,{metadata:a,frontMatter:{image:n,keywords:i,hide_title:s,hide_table_of_contents:o}}=t,{description:d,title:m,editUrl:u,lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}=a,{pluginId:h}=Object(c.useActivePlugin)({failfast:!0}),f=Object(c.useVersions)(h),U=Object(c.useActiveVersion)(h),T=f.length>1;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:m,description:d,keywords:i,image:n}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(w.a)("col",{[V.a.docItemCol]:!o})},l.a.createElement(p,null),l.a.createElement("div",{className:V.a.docItemContainer},l.a.createElement("article",null,T&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",U.label)),!s&&l.a.createElement("header",null,l.a.createElement("h1",{className:V.a.docTitle},m)),l.a.createElement("div",{className:"markdown"},l.a.createElement(t,null))),(u||v||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},u&&l.a.createElement(k,{editUrl:u})),(v||E)&&l.a.createElement(N,{lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(r,{metadata:a})))),!o&&t.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(L.a,{toc:t.toc}))))}}}]);