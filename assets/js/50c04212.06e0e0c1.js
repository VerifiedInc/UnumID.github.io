(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/logo-cd5e86269e021230bb5a4fe5a998cc37.svg"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return j})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return N}));var n=a(3),i=a(7),l=a(0),r=a.n(l),b=a(90),c=a(94),o=a(84),s=a(78),d=a.n(s);var m=37,p=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,i=e.values,b=e.groupId,s=e.className,u=Object(c.a)(),g=u.tabGroupChoices,h=u.setTabGroupChoices,j=Object(l.useState)(n),v=j[0],O=j[1],N=l.Children.toArray(e.children),w=[];if(null!=b){var f=g[b];null!=f&&f!==v&&i.some((function(e){return e.value===f}))&&O(f)}var y=function(e){var t=e.target,a=w.indexOf(t),n=N[a].props.value;O(n),null!=b&&(h(b,n),setTimeout((function(){var e,a,n,i,l,r,b,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,l=e.right,r=window,b=r.innerHeight,c=r.innerWidth,a>=0&&l<=c&&i<=b&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d.a.tabItemActive),setTimeout((function(){return t.classList.remove(d.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case p:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case m:var i=w.indexOf(e.target)-1;a=w[i]||w[w.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},s)},i.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(o.a)("tabs__item",d.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:y,onClick:y},a)}))),t?Object(l.cloneElement)(N.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var g=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},h={id:"usage-guide",title:"Usage Guide",sidebar_label:"Usage Guide",slug:"/"},j={unversionedId:"usage-guide",id:"usage-guide",isDocsHomePage:!1,title:"Usage Guide",description:"Write content using GitHub-flavored Markdown syntax.",source:"@site/docs/usage-guide.mdx",slug:"/",permalink:"/",version:"current",sidebar_label:"Usage Guide",sidebar:"sidebar",next:{title:"About Unum ID",permalink:"/about-unum-id"}},v=[{value:"Code",id:"code",children:[{value:"Syntax Highlighting",id:"syntax-highlighting",children:[]},{value:"Line Highlighting",id:"line-highlighting",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Live Editor",id:"live-editor",children:[]}]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Images",id:"images",children:[]},{value:"Tables",id:"tables",children:[]}],O={toc:v};function N(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Write content using ",Object(b.b)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"code"},"Code"),Object(b.b)("h3",{id:"syntax-highlighting"},"Syntax Highlighting"),Object(b.b)("p",null,"For example, this..."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"```javascript\nvar s = 'JavaScript syntax highlighting';\nalert(s);\n```\n")),Object(b.b)("p",null,"...renders to:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),Object(b.b)("h3",{id:"line-highlighting"},"Line Highlighting"),Object(b.b)("p",null,"Use e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"{2}")," after the langauge name (and a space):"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(b.b)("h3",{id:"tabs"},"Tabs"),Object(b.b)("p",null,"Tabs can be used generally, but they're useful for language selection:"),Object(b.b)(u,{groupId:"languages",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(b.b)(g,{value:"js",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),Object(b.b)(g,{value:"py",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n")))),Object(b.b)("p",null,"To make multiple tab blocks update in sync, give all related tabs\nthe same ",Object(b.b)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the\nchoice in ",Object(b.b)("inlineCode",{parentName:"p"},"localStorage")," and all ",Object(b.b)("inlineCode",{parentName:"p"},"<Tab>")," instances with the\nsame ",Object(b.b)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of\none of them is changed. Note that ",Object(b.b)("inlineCode",{parentName:"p"},"groupId")," are globally-namespaced."),Object(b.b)(u,{groupId:"languages",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(b.b)(g,{value:"js",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"function goodbyeWorld() {\n  console.log('Goodbye, world :(');\n}\n"))),Object(b.b)(g,{value:"py",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-py"},"def goodbye_world():\n  print 'Goodbye, world :('\n")))),Object(b.b)("h3",{id:"live-editor"},"Live Editor"),Object(b.b)("p",null,"You can make a live editor! Just add ",Object(b.b)("inlineCode",{parentName:"p"},"live")," after the language name:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"admonitions"},"Admonitions"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This is a note"))),Object(b.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This is a tip"))),Object(b.b)("div",{className:"admonition admonition-important alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This is important"))),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This is a caution"))),Object(b.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This is a warning"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"images"},"Images"),Object(b.b)("p",null,"Here's our logo (hover to see the title text):"),Object(b.b)("p",null,"Inline-style: ",Object(b.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),Object(b.b)("p",null,"Reference-style: ",Object(b.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),Object(b.b)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to the original markdown file or absolute to the ",Object(b.b)("inlineCode",{parentName:"p"},"/static")," folder."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:a(176).default})),Object(b.b)("hr",null),Object(b.b)("h2",{id:"tables"},"Tables"),Object(b.b)("p",null,"Colons can be used to align columns."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Tables"),Object(b.b)("th",{parentName:"tr",align:"center"},"Are"),Object(b.b)("th",{parentName:"tr",align:"right"},"Cool"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"col 3 is"),Object(b.b)("td",{parentName:"tr",align:"center"},"right-aligned"),Object(b.b)("td",{parentName:"tr",align:"right"},"\\$1600")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"col 2 is"),Object(b.b)("td",{parentName:"tr",align:"center"},"centered"),Object(b.b)("td",{parentName:"tr",align:"right"},"\\$12")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"zebra stripes"),Object(b.b)("td",{parentName:"tr",align:"center"},"are neat"),Object(b.b)("td",{parentName:"tr",align:"right"},"\\$1")))),Object(b.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Markdown"),Object(b.b)("th",{parentName:"tr",align:null},"Less"),Object(b.b)("th",{parentName:"tr",align:null},"Pretty"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Still")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"renders")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"nicely"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"1"),Object(b.b)("td",{parentName:"tr",align:null},"2"),Object(b.b)("td",{parentName:"tr",align:null},"3")))),Object(b.b)("hr",null))}N.isMDXComponent=!0}}]);