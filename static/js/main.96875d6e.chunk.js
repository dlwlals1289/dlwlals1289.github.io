(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/robot.f73390b8.png"},25:function(e,t,n){e.exports=n(45)},33:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(24),o=n.n(c),r=(n(33),n(22)),i=n(0),s=(n(23),n(35),function(e){e.history;var t=Object(i.o)();return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"top-text"},l.a.createElement("p",{className:"top-text2"}," MEDIBOT\uc740 \uc758\uc57d\ud488 \uc815\ubcf4 \uc81c\uacf5"),l.a.createElement("p",{className:"top-text2"}," \uc778\uacf5\uc9c0\ub2a5 \ucc57\ubd07\uc785\ub2c8\ub2e4.")),l.a.createElement("p",{className:"blank"}," "),l.a.createElement("p",{className:"blank"}),l.a.createElement("p",{className:"blank"})),l.a.createElement("div",{className:"start-button-container"},l.a.createElement("p",{className:"title1"},"MEDIBOT\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30"),l.a.createElement("button",{className:"start-button",onClick:function(){t("/chat")}},"\ub300\ud654 \uc2dc\uc791")))}),m=n(7),u=n(4),p=n(48),h=(n(38),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),r=Object(u.a)(o,2),i=(r[0],r[1],Object(a.useState)([])),s=Object(u.a)(i,2),h=s[0],f=s[1],E=Object(a.useState)([]),d=Object(u.a)(E,2),v=d[0],b=d[1],y=Object(a.useState)(null),g=Object(u.a)(y,2),w=g[0],j=g[1],N=Object(a.useState)(null),O=Object(u.a)(N,2),S=O[0],T=O[1],C=(Object(a.useRef)(),function(e,t){for(var n=[],a=0;a<e.length;a++)console.log(e[a]),n.push(l.a.createElement("img",{src:e[a],alt:"Uploaded",style:{width:"300px",height:"300px"}}));k(n,"user2")}),x=function(e,t){for(var n=0;n<e.length;n++)if(null!=e[n].pillImage){var a=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:e[n].pillImage,alt:"Uploaded",style:{width:"300px",height:"200px"}}),l.a.createElement("h2",null,e[n].pillName),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ud6a8\ub2a5: "),l.a.createElement("p",null,e[n].efcyQesitm)),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ubcf5\uc6a9\ubc29\ubc95: "),l.a.createElement("p",null,e[n].method))));k(a,t)}else a=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,e[n].pillName),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ud6a8\uacfc: "),l.a.createElement("p",null,e[n].efcyQesitm)),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ubcf5\uc6a9\ubc29\ubc95: "),l.a.createElement("p",null,e[n].method)))),k(a,t)},I=function(e){if(1===w)fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/pharmacy",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.pharmacy,a=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \uadfc\ucc98 \uc57d\uad6d \ubaa9\ub85d\uc785\ub2c8\ub2e4."),n.map(function(e,t){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))))})));k(a,"bot2"),j(null)});else if(21===w){var t={place:e,category:S};fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/hospital",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.hospital,a=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,n.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(a,"bot2"),j(null),T(null)})}else if(22===w){var n={place:S,category:e};fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/hospital",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.hospital,a=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,n.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(a,"bot2"),j(null),T(null)})}else 0===w?fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/precaution",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.precaution,a="".concat(t,"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(n);k(a,"bot2"),j(null)}):3===w?fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/sideEffect",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.sideEffect,a="".concat(t,"\uc758 \ubd80\uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(n);k(a,"bot2"),j(null)}):4===w?fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/effect",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.efcyQesitm,a="".concat(t,"\uc758 \ud6a8\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(n);k(a,"bot2"),j(null)}):5===w?fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/method",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).then(function(e){console.log(w);var t=e.entity,n=e.answer.method,a="".concat(t,"\uc758 \ubcf5\uc6a9\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(n);k(a,"bot2"),j(null)}):Object(p.a)("http://localhost:8080/question",{method:"post",headers:{"Content-Type":"application/json"},data:e}).then(function(e){return e.json()}).then(function(e){var t="";if(console.log(e.intent),0===e.intent)if(null===e.entity)j(e.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \uc8fc\uc758\uc0ac\ud56d\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.answer.precaution){var n=e.entity+"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(n,"bot2")}else{var a=e.entity,c=e.answer.precaution;t="".concat(a,"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(c),k(t,"bot2")}else if(1===e.intent){console.log("pharmacy");var o=e.entity;if(null===o)j(e.intent),k("\uc5b4\ub290 \uc9c0\uc5ed \uc8fc\ubcc0\uc758 \uc57d\uad6d\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else{var r=e.answer.pharmacy,i=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",o," \uadfc\ucc98 \uc57d\uad6d \ubaa9\ub85d\uc785\ub2c8\ub2e4."),r.map(function(e,t){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))))})));k(i,"bot2")}}else if(2===e.intent)if(null===e.entity)k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2");else if(21===e.answer.hospital){var s="\uc5b4\ub290 \uc9c0\uc5ed\uc758 "+e.entity+" \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?";k(s,"bot2"),j(21),T(e.entity)}else if(22===e.answer.hospital){var m=e.entity+"\uc758 \uc5b4\ub5a4 \ubcd1\uc6d0 \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?";k(m,"bot2"),j(22),T(e.entity)}else{var u=e.entity,p=e.answer.hospital,h=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",u," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,p.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(h,"bot2")}else if(3===e.intent)if(null===e.entity)j(e.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ubd80\uc791\uc6a9\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.answer.sideEffect){var f=e.entity+"\uc758 \ubd80\uc791\uc6a9\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(f,"bot2")}else{var E=e.entity,d=e.answer.sideEffect;t="".concat(E,"\uc758 \ubd80\uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(d),k(t,"bot2")}else if(4===e.intent)if(null===e.entity)j(e.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ud6a8\ub2a5\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.answer.efcyQesitm){var v=e.entity+"\uc758 \ud6a8\ub2a5\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(v,"bot2")}else{var b=e.entity,y=e.answer.efcyQesitm;t="".concat(b,"\uc758 \ud6a8\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(y),k(t,"bot2")}else if(5===e.intent)if(null===e.entity)j(e.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ubcf5\uc6a9\ubc95\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.answer.method){var g=e.entity+"\uc758 \ubcf5\uc6a9\ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(g,"bot2")}else{var w=e.entity,N=e.answer.method;t="".concat(w,"\uc758 \ubcf5\uc6a9\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(N),k(t,"bot2")}else 100===e.intent&&(t=e.entity,k(t,"bot2"))}).catch(function(e){console.log(e.message),k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2")})},k=function(e,t){var n={message:e,sender:t};c(function(e){return[].concat(Object(m.a)(e),[n])})},P=n.map(function(e,t){return l.a.createElement("div",{className:"".concat(e.sender,"-container")},l.a.createElement("div",{className:"image-".concat(e.sender)}),l.a.createElement("div",{key:t,className:"message ".concat(e.sender,"-message")},l.a.createElement("p",null,e.message)))}),z=Object(a.useState)(""),L=Object(u.a)(z,2),F=L[0],U=L[1];return Object(a.useEffect)(function(){b(function(e){return e})},[v]),l.a.createElement("div",null,l.a.createElement("div",{className:"chat-container"},l.a.createElement("div",{className:"chat-window",id:"chat-window"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginLeft:"auto",marginBottom:"10px"}},l.a.createElement("div",{className:"image-bot2"}),l.a.createElement("div",{className:"message bot2-message"},l.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694. \ubb34\uc5c7\uc774 \uad81\uae08\ud558\uc2dc\ub098\uc694?"))),P),l.a.createElement("div",{className:"preview-container"},l.a.createElement("p",null),v.map(function(e){return l.a.createElement("div",{className:"preview"},l.a.createElement("img",{src:e,alt:"preview-img",style:{width:"100px",height:"100px"}}))})),l.a.createElement("div",{className:"input-area"},l.a.createElement("input",{type:"text",id:"message-input",placeholder:"\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud558\uc138\uc694",value:F,onChange:function(e){U(e.target.value)},autoComplete:"off"}),l.a.createElement("label",{for:"fileSelect"},l.a.createElement("div",{class:"btn-upload"})),l.a.createElement("input",{type:"file",id:"fileSelect",accept:"image/*",multiple:!0,onChange:function(e){for(var t=e.target.files,n=[],a=[],l=0;l<t.length;l++){var c=t[l];n.push(c);var o=URL.createObjectURL(t[l]);console.log(o),a.push(o)}b(a),f(n)}}),l.a.createElement("button",{onClick:function(){if(h&&h.length>0){for(var e=[],t=0;t<h.length;t++){h[t];var n=URL.createObjectURL(h[t]);e.push(n)}C(e,"user"),k("\uc870\uae08\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694~ \uc0ac\uc9c4\uc744 \ubd84\uc11d\uc911\uc785\ub2c8\ub2e4!","bot2");var a=new FormData;console.log(h.length);for(var l=0;l<h.length;l++)a.append("multipartFile",h[l]);b([]),fetch("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/s3/pillImage",{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){console.log(e),e[0].s3path,null===e[0].pillName?k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2"):(e.map(function(e){return e.pillImage}),x(e,"bot2"))}).catch(function(e){console.error("Error:",e)}),f([])}else!function(){var e=F;""!==e.trim()&&(k(e,"user"),I(e),U(""))}()},id:"upload-image-button"},"\uc804\uc1a1"))))});var f=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(s,null)}),l.a.createElement(i.a,{path:"/chat",element:l.a.createElement(h,null)}))))},E=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,47)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),l(e),c(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),E()}},[[25,3,2]]]);
//# sourceMappingURL=main.96875d6e.chunk.js.map