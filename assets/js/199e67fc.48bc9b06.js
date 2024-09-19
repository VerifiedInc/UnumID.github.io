"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[509],{9986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(5893),o=t(1151);const i={},a=void 0,s={id:"reusables/credential-usage-example-snippet",title:"credential-usage-example-snippet",description:"Example Application Code Credential Handling",source:"@site/versioned_docs/version-1/reusables/credential-usage-example-snippet.mdx",sourceDirName:"reusables",slug:"/reusables/credential-usage-example-snippet",permalink:"/v1/reusables/credential-usage-example-snippet",draft:!1,unlisted:!1,tags:[],version:"1",frontMatter:{}},c={},p=[];function l(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Application Code Credential Handling"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import _ from 'lodash';\n\n/**\n * Finds value in an object that matches a property name.\n * @param object\n * @param propertyName\n */\nexport function findByPropertyName<Type>(\n  object: Record<string, any>,\n  propertyName: string\n): Type | undefined {\n  if (_.has(object, propertyName)) {\n    // a hit, return the value\n    return object[propertyName];\n  }\n\n  for (const key in object) {\n    if (_.isArray(object[key])) {\n      // if the value is an array, iterate over it and recursively call this function\n      for (const item of object[key]) {\n        const result = findByPropertyName(item, propertyName);\n        if (result !== undefined) {\n          return result as Type;\n        }\n      }\n    }\n    if (_.isPlainObject(object[key])) {\n      // just look for the value in the object\n      const result = findByPropertyName(object[key], propertyName);\n      if (result !== undefined) {\n        return result as Type;\n      }\n    }\n  }\n\n  // no hit, return undefined\n  return undefined;\n}\n"})})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);