(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/robot.f73390b8.png"},25:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(24),o=a.n(c),r=(a(33),a(22)),i=a(0),s=(a(23),a(35),function(e){e.history;var t=Object(i.o)();return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"top-text"},l.a.createElement("p",{className:"top-text2"}," MEDIBOT\uc740 \uc758\uc57d\ud488 \uc815\ubcf4 \uc81c\uacf5"),l.a.createElement("p",{className:"top-text2"}," \uc778\uacf5\uc9c0\ub2a5 \ucc57\ubd07\uc785\ub2c8\ub2e4.")),l.a.createElement("p",{className:"blank"}," "),l.a.createElement("p",{className:"blank"}),l.a.createElement("p",{className:"blank"})),l.a.createElement("div",{className:"start-button-container"},l.a.createElement("p",{className:"title1"},"MEDIBOT\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30"),l.a.createElement("button",{className:"start-button",onClick:function(){t("/chat")}},"\ub300\ud654 \uc2dc\uc791")))}),m=a(7),u=a(4),p=a(48),d=(a(38),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(u.a)(o,2),i=(r[0],r[1],Object(n.useState)([])),s=Object(u.a)(i,2),d=s[0],f=s[1],h=Object(n.useState)([]),E=Object(u.a)(h,2),v=E[0],b=E[1],y=Object(n.useState)(null),g=Object(u.a)(y,2),w=g[0],N=g[1],O=Object(n.useState)(null),j=Object(u.a)(O,2),S=(j[0],j[1]),C=(Object(n.useRef)(),function(e,t){for(var a=[],n=0;n<e.length;n++)console.log(e[n]),a.push(l.a.createElement("img",{src:e[n],alt:"Uploaded",style:{width:"300px",height:"300px"}}));k(a,"user2")}),x=function(e,t){for(var a=0;a<e.length;a++)if(null!=e[a].pillImage){var n=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:e[a].pillImage,alt:"Uploaded",style:{width:"300px",height:"200px"}}),l.a.createElement("h2",null,e[a].pillName),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ud6a8\ub2a5: "),l.a.createElement("p",null,e[a].efcyQesitm)),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ubcf5\uc6a9\ubc29\ubc95: "),l.a.createElement("p",null,e[a].method))));k(n,t)}else n=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,e[a].pillName),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ud6a8\uacfc: "),l.a.createElement("p",null,e[a].efcyQesitm)),l.a.createElement("div",{className:"pillInfo"},l.a.createElement("p",{className:"pillInfo2"},"\ubcf5\uc6a9\ubc29\ubc95: "),l.a.createElement("p",null,e[a].method)))),k(n,t)},I=function(e){1===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/pharmacy",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.pharmacy,n=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \uadfc\ucc98 \uc57d\uad6d \ubaa9\ub85d\uc785\ub2c8\ub2e4."),a.map(function(e,t){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))))})));k(n,"bot2"),N(null)}):21===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/hospital",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.hospital,n=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,a.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(n,"bot2"),N(null),S(null)}):22===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/hospital",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.hospital,n=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",t," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,a.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(n,"bot2"),N(null),S(null)}):0===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/precaution",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.precaution,n="".concat(t,"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(a);k(n,"bot2"),N(null)}):3===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/sideEffect",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.sideEffect,n="".concat(t,"\uc758 \ubd80\uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(a);k(n,"bot2"),N(null)}):4===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/effect",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.efcyQesitm,n="".concat(t,"\uc758 \ud6a8\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(a);k(n,"bot2"),N(null)}):5===w?Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/method",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(w);var t=e.data.entity,a=e.data.answer.method,n="".concat(t,"\uc758 \ubcf5\uc6a9\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\n").concat(a);k(n,"bot2"),N(null)}):Object(p.a)("http://localhost:8080/question",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then(function(e){console.log(e);var t="";if(console.log(e.data.intent),0===e.data.intent)if(null===e.data.entity)N(e.data.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \uc8fc\uc758\uc0ac\ud56d\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.data.answer.precaution){var a=e.data.entity+"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(a,"bot2")}else{var n=e.data.entity,c=e.data.answer.precaution;t="".concat(n,"\uc758 \uc8fc\uc758\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(c),k(t,"bot2")}else if(1===e.data.intent){console.log("pharmacy");var o=e.data.entity;if(null===o)N(e.data.intent),k("\uc5b4\ub290 \uc9c0\uc5ed \uc8fc\ubcc0\uc758 \uc57d\uad6d\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else{var r=e.data.answer.pharmacy,i=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",o," \uadfc\ucc98 \uc57d\uad6d \ubaa9\ub85d\uc785\ub2c8\ub2e4."),r.map(function(e,t){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))))})));k(i,"bot2")}}else if(2===e.data.intent)if(null===e.data.entity)k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2");else if(21===e.data.answer.hospital){var s="\uc5b4\ub290 \uc9c0\uc5ed\uc758 "+e.data.entity+" \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?";k(s,"bot2"),N(21),S(e.data.entity)}else if(22===e.data.answer.hospital){var m=e.data.entity+"\uc758 \uc5b4\ub5a4 \ubcd1\uc6d0 \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?";k(m,"bot2"),N(22),S(e.data.entity)}else{var u=e.data.entity,p=e.data.answer.hospital,d=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null," ",u," \ubaa9\ub85d\uc785\ub2c8\ub2e4."),l.a.createElement("ul",null,p.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"\uc8fc\uc18c: ",e.address),l.a.createElement("p",null,"\uc804\ud654\ubc88\ud638: ",e.phone),l.a.createElement("a",{href:e.place_url},"\uc7a5\uc18c \ubc14\ub85c\uac00\uae30"))}))));k(d,"bot2")}else if(3===e.data.intent)if(null===e.data.entity)N(e.data.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ubd80\uc791\uc6a9\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.data.answer.sideEffect){var f=e.data.entity+"\uc758 \ubd80\uc791\uc6a9\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(f,"bot2")}else{var h=e.data.entity,E=e.data.answer.sideEffect;t="".concat(h,"\uc758 \ubd80\uc791\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(E),k(t,"bot2")}else if(4===e.data.intent)if(null===e.data.entity)N(e.data.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ud6a8\ub2a5\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.data.answer.efcyQesitm){var v=e.data.entity+"\uc758 \ud6a8\ub2a5\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(v,"bot2")}else{var b=e.data.entity,y=e.data.answer.efcyQesitm;t="".concat(b,"\uc758 \ud6a8\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(y),k(t,"bot2")}else if(5===e.data.intent)if(null===e.data.entity)N(e.data.intent),k("\uc5b4\ub5a4 \uc758\uc57d\ud488\uc758 \ubcf5\uc6a9\ubc95\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?","bot2");else if(null===e.data.answer.method){var g=e.data.entity+"\uc758 \ubcf5\uc6a9\ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";k(g,"bot2")}else{var w=e.data.entity,O=e.data.answer.method;t="".concat(w,"\uc758 \ubcf5\uc6a9\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n        \n").concat(O),k(t,"bot2")}else 100===e.data.intent&&(t=e.data.entity,k(t,"bot2"))}).catch(function(e){console.log(e.message),k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2")})},k=function(e,t){var a={message:e,sender:t};c(function(e){return[].concat(Object(m.a)(e),[a])})},T=a.map(function(e,t){return l.a.createElement("div",{className:"".concat(e.sender,"-container")},l.a.createElement("div",{className:"image-".concat(e.sender)}),l.a.createElement("div",{key:t,className:"message ".concat(e.sender,"-message")},l.a.createElement("p",null,e.message)))}),J=Object(n.useState)(""),z=Object(u.a)(J,2),L=z[0],F=z[1];return Object(n.useEffect)(function(){b(function(e){return e})},[v]),l.a.createElement("div",null,l.a.createElement("div",{className:"chat-container"},l.a.createElement("div",{className:"chat-window",id:"chat-window"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginLeft:"auto",marginBottom:"10px"}},l.a.createElement("div",{className:"image-bot2"}),l.a.createElement("div",{className:"message bot2-message"},l.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694. \ubb34\uc5c7\uc774 \uad81\uae08\ud558\uc2dc\ub098\uc694?"))),T),l.a.createElement("div",{className:"preview-container"},l.a.createElement("p",null),v.map(function(e){return l.a.createElement("div",{className:"preview"},l.a.createElement("img",{src:e,alt:"preview-img",style:{width:"100px",height:"100px"}}))})),l.a.createElement("div",{className:"input-area"},l.a.createElement("input",{type:"text",id:"message-input",placeholder:"\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud558\uc138\uc694",value:L,onChange:function(e){F(e.target.value)},autoComplete:"off"}),l.a.createElement("label",{for:"fileSelect"},l.a.createElement("div",{class:"btn-upload"})),l.a.createElement("input",{type:"file",id:"fileSelect",accept:"image/*",multiple:!0,onChange:function(e){for(var t=e.target.files,a=[],n=[],l=0;l<t.length;l++){var c=t[l];a.push(c);var o=URL.createObjectURL(t[l]);console.log(o),n.push(o)}b(n),f(a)}}),l.a.createElement("button",{onClick:function(){if(d&&d.length>0){for(var e=[],t=0;t<d.length;t++){d[t];var a=URL.createObjectURL(d[t]);e.push(a)}C(e,"user"),k("\uc870\uae08\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694~ \uc0ac\uc9c4\uc744 \ubd84\uc11d\uc911\uc785\ub2c8\ub2e4!","bot2");var n=new FormData;console.log(d.length);for(var l=0;l<d.length;l++)n.append("multipartFile",d[l]);b([]),Object(p.a)("http://ec2-15-165-255-245.ap-northeast-2.compute.amazonaws.com:8080/s3/pillImage",{method:"post",headers:{"Content-Type":"application/json"},data:JSON.stringify(n)}).then(function(e){console.log(e),e.data[0].s3path,null===e.data[0].pillName?k("\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","bot2"):(e.data.map(function(e){return e.pillImage}),x(e.data,"bot2"))}).catch(function(e){console.error("Error:",e)}),f([])}else!function(){var e=L;""!==e.trim()&&(k(e,"user"),I(e),F(""))}()},id:"upload-image-button"},"\uc804\uc1a1"))))});var f=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(s,null)}),l.a.createElement(i.a,{path:"/chat",element:l.a.createElement(d,null)}))))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,47)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),h()}},[[25,3,2]]]);
//# sourceMappingURL=main.75275749.chunk.js.map