(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),c=a.n(r),i=(a(20),a(2)),o=a.p+"static/media/logo_transparent.0891df4c.png",u=a(0),l=function(e){return Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("addExpenses")},children:"Add an Expense"})]})},j=(a(22),a(3)),b=a.n(j),p=a(5),m=function(e,t){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}},d=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(b.a.mark((function e(t,a){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=3,fetch(t,n);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=(new Date).getFullYear().toString();return((new Date).getMonth()+1).toString()+"/"+(new Date).getDate().toString()+"/"+e},x=function(e){var t=e.substring(0,4),a=e.substring(4,6),n=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),r=((new Date).getMonth()+1).toString();if(1===r.length&&(r="0"+r),t===s&&a===r){for(n=(n+=1).toString();n.length<3;)n="0"+n;return t+a+n}return s+r+"001"},g=function(e){var t=parseInt(e.substring(2));for(t=(t+=1).toString();t.length<3;)t="0"+t;return e.substring(0,2)+t},f=function(e,t,a,n,s){return e+t+a+n+s},h=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(a){return!1}},v=function(e,t){if(!h(e)||!h(t))return"$0.00";var a=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(a.includes(".")||(a+=".00");a.split(".")[1].length<2;)a+="0";return"$"+a},N="https://rhq-backend.herokuapp.com/api",S=["Airpods 1/2","Airpods Pro","12","12/ 12 Pro","12 Pro max","12 Pro","11","11 Pro","11 Pro max","X/XS","38mm-40mm","40mm-42mm"],C=["Phone case","Airpods case","Screen protector","Watch Strap"],k=["S21","S21 Plus","S21 Ultra","Note 20","Note 20 Ultra"],y=["Phone case","Screen protector"],B=["Selfie ring light","Magnetic car mount stand ring"],w=["Phone accessories"],I=["Azure","Black","Silver","White","Red","Pink","Clear","Blue","Gold","NA"],U=["Border","Matt","Ultra thick","Camera cover","Milanese loop","NA"],E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",R=(a(8),function(e,t,a){return Object(u.jsx)("div",{className:"radio-row",children:t.map((function(t){var n=e+" "+t;return Object(u.jsxs)("div",{className:"radio-box",children:[Object(u.jsx)("input",{type:"radio",className:"radio-button",name:e,id:n,onClick:function(){return a(t)}}),Object(u.jsx)("label",{htmlFor:n,className:"radio-label",children:t})]},t)}))})}),J=a(10),F=a(11),P=a(15),G=a(14),D=(a(24),a(12)),K=a.n(D),L=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(J.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return Object(u.jsx)(K.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),a}(s.a.Component),M=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],j=o[1],J=Object(n.useState)(""),F=Object(i.a)(J,2),P=F[0],G=F[1],D=Object(n.useState)(""),K=Object(i.a)(D,2),M=K[0],Y=K[1],q=Object(n.useState)(""),T=Object(i.a)(q,2),H=T[0],V=T[1],X=Object(n.useState)(""),W=Object(i.a)(X,2),Z=W[0],z=W[1],$=Object(n.useState)("1"),_=Object(i.a)($,2),ee=_[0],te=_[1],ae=Object(n.useState)("$0.00"),ne=Object(i.a)(ae,2),se=ne[0],re=ne[1],ce=Object(n.useState)("$0.00"),ie=Object(i.a)(ce,2),oe=ie[0],ue=ie[1],le=Object(n.useState)("NA"),je=Object(i.a)(le,2),be=je[0],pe=je[1],me=Object(n.useState)("$0.00"),de=Object(i.a)(me,2),Oe=de[0],Ae=de[1],xe=Object(n.useState)(""),ge=Object(i.a)(xe,2),fe=ge[0],he=ge[1],ve=Object(n.useState)(!1),Ne=Object(i.a)(ve,2),Se=Ne[0],Ce=Ne[1],ke=Object(n.useState)(0),ye=Object(i.a)(ke,2),Be=ye[0],we=ye[1],Ie=Object(n.useState)(0),Ue=Object(i.a)(Ie,2),Ee=Ue[0],Qe=Ue[1],Re=Object(n.useState)(0),Je=Object(i.a)(Re,2),Fe=Je[0],Pe=Je[1],Ge=Object(n.useState)(0),De=Object(i.a)(Ge,2),Ke=De[0],Le=De[1],Me=Object(n.useState)(0),Ye=Object(i.a)(Me,2),qe=Ye[0],Te=Ye[1],He=Object(n.useState)(0),Ve=Object(i.a)(He,2),Xe=Ve[0],We=Ve[1],Ze=[{indicator:Be,setter:we},{indicator:Ee,setter:Qe},{indicator:Fe,setter:Pe},{indicator:Ke,setter:Le},{indicator:qe,setter:Te},{indicator:Xe,setter:We}],ze=Object(n.useState)(!1),$e=Object(i.a)(ze,2),_e=$e[0],et=$e[1],tt=Object(n.useState)(!1),at=Object(i.a)(tt,2),nt=at[0],st=at[1],rt=Object(n.useState)(""),ct=Object(i.a)(rt,2),it=ct[0],ot=ct[1],ut=Object(n.useState)([]),lt=Object(i.a)(ut,2),jt=lt[0],bt=lt[1],pt=Object(n.useState)([]),mt=Object(i.a)(pt,2),dt=mt[0],Ot=mt[1],At=Object(n.useState)([]),xt=Object(i.a)(At,2),gt=xt[0],ft=xt[1],ht=Object(n.useState)([]),vt=Object(i.a)(ht,2),Nt=vt[0],St=vt[1],Ct=function(){var e=Object(p.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f(l,P,M,H,Z),e.next=3,O(N+"/inventoryRow",{code:t});case 3:return a=e.sent,e.abrupt("return",a.data.row);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),kt=function(e){ot(e),st(!0)},yt=function(){var e=Object(p.a)(b.a.mark((function e(){var t,a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he(fe.toUpperCase()),t=m("GET"),e.next=4,fetch(N+"/bossNames",t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=n.data.bossNames,e.t0=b.a.keys(s);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(r=e.t1.value,s[r].toUpperCase()!==fe.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Bt=function(){var t=Object(p.a)(b.a.mark((function t(){var a,n,r,c,i,o,u,j,p,m,S,C,k,y,B,w,I,U,E,Q;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Ce(!1),et(!0),st(!1),ot(""),/^[1-9]\d*$/.test(ee)){t.next=8;break}return kt("Invalid quantity!"),et(!1),t.abrupt("return");case 8:if(re("$"===se?"$0.00":se),Ae("$"===Oe?"$0.00":Oe),ue("$"===oe?"$0.00":oe),h(se)){t.next=15;break}return kt("Invalid amount!"),et(!1),t.abrupt("return");case 15:if(h(Oe)){t.next=19;break}return kt("Invalid tips!"),et(!1),t.abrupt("return");case 19:if(h(oe)){t.next=23;break}return kt("Invalid stamps!"),et(!1),t.abrupt("return");case 23:return Ce(!1),we(0),Qe(0),Pe(0),Le(0),Te(0),We(0),Ce(!0),t.next=27,yt();case 27:if(t.sent){t.next=32;break}return we(2),et(!1),t.abrupt("return");case 32:return we(1),t.next=35,Ct();case 35:if(a=t.sent,a>=2){t.next=40;break}return Qe(2),et(!1),t.abrupt("return");case 40:return Qe(1),t.next=43,O(N+"/inventoryGetLoc",{row:a});case 43:if(n=t.sent,J=n.data.inventoryLoc,r="NA"===J?[]:J.split(",").map((function(e){return e.trim()})).map((function(e){var t=e.split("(")[0],a=e.split("(")[1].split(")")[0];return{name:t,qty:parseInt(a)}})),c=!1,r.forEach((function(e){e.name.toUpperCase()===fe.toUpperCase()&&(c=e.qty>ee)})),c){t.next=51;break}return Pe(2),et(!1),t.abrupt("return");case 51:return Pe(1),i=r.map((function(e){return e.name.toUpperCase()===fe.toUpperCase()?{name:e.name,qty:e.qty-ee}:e})).filter((function(e){return e.qty>0})),o=0===(R=i).length?"NA":R.map((function(e){return e.name+"("+e.qty+")"})).join(", "),t.next=56,O(N+"/inventoryUpdateLoc",{row:a,location:o});case 56:return Le(1),t.next=59,d(N+"/orders");case 59:return u=t.sent,j=u.data.lastInvoiceNumber,p=x(j),m=A(),S={code:f(l,P,M,H,Z),customer:s,invoice_number:p,invoice_date:m,qty:ee,amt:se,tips:Oe,stamps:oe,remarks:be},t.next=66,O(N+"/order",S);case 66:if(Te(1),"$0.00"===Oe){t.next=71;break}return C={customer:s,invoice_number:p,tipAmount:Oe},t.next=71,O(N+"/addTips",C);case 71:return t.next=73,d(N+"/cce_in");case 73:return k=t.sent,(y=k.data.lastCashInIndex).startsWith("CO")||(y="CO000"),B=k.data.row,w=g(y),I="Sales - "+p,U=parseInt(B)+1,E={indexNumber:w,date:m,description:I,amount:v(se,Oe),row:U},t.next=83,O(N+"/cce_in",E);case 83:We(1),et(!1),e.navigate("orderSubmitted"),t.next=98;break;case 88:t.prev=88,t.t0=t.catch(0),t.t1=b.a.keys(Ze);case 91:if((t.t2=t.t1()).done){t.next=98;break}if(0!==(Q=t.t2.value).indicator){t.next=96;break}return Q.setter(2),t.abrupt("break",98);case 96:t.next=91;break;case 98:case"end":return t.stop()}var R,J}),t,null,[[0,88]])})));return function(){return t.apply(this,arguments)}}(),wt=function(e,t){e.startsWith("$")?t(e):t("$")};return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Brand"}),R("brand",["Apple","Samsung","NA"],(function(e){switch(Ot(["NA"]),bt(["NA"]),ft(I),St(["NA"]),e){case"Apple":bt(S),Ot(C);break;case"Samsung":bt(k),Ot(y);break;case"NA":bt(B),Ot(w)}G(e)})),Object(u.jsx)("span",{className:"form-label",children:"Category"}),R("category",dt,(function(e){ft("Screen protector"===e?["NA"]:I),St("Phone case"===e?U:["NA"]),j(e)})),Object(u.jsx)("span",{className:"form-label",children:"Detailed"}),R("detailed",jt,Y),Object(u.jsx)("span",{className:"form-label",children:"Colour"}),R("color",gt,V),Object(u.jsx)("span",{className:"form-label",children:"Description"}),R("desc",Nt,z),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:ee,onChange:function(e){return te(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Net Amount (After discount)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:se,onChange:function(e){return wt(e.target.value,re)}}),Object(u.jsx)("span",{className:"form-label",children:"Stamp value"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:oe,onChange:function(e){return wt(e.target.value,ue)}}),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:be,onChange:function(e){return pe(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:Oe,onChange:function(e){return wt(e.target.value,Ae)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return he(e.target.value)}}),nt&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(it),Se&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===Be&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===Be&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===Ee&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===Ee&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===Fe&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===Fe&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===Ke&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===Ke&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===qe&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===qe&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Xe&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===Xe&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==P&&""!==l&&""!==M&&""!==H&&""!==Z&&""!==se&&""!==oe&&""!==fe&&!1===_e?Object(u.jsx)("div",{className:"form-button",onClick:Bt,children:"Submit Order"}):_e?Object(u.jsx)(L,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},Y=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(M,{navigate:e.navigate})]})})},q=(a(45),a(46),function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})}),T=a(13),H=(a(47),function(e){return 0===e.inventoryList.length?Object(u.jsx)("div",{className:"inventory-list",children:Object(u.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(u.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(e){return Object(u.jsxs)("div",{className:"inventory-list-row",children:[Object(u.jsx)("div",{className:"inventory-code",children:e.name}),Object(u.jsx)("div",{className:"inventory-location",children:e.loc})]})}))})}),V=(a(48),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)([]),l=Object(i.a)(c,2),j=l[0],m=l[1],O=Object(n.useState)(!1),A=Object(i.a)(O,2),x=A[0],g=A[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(p.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,d(N+"/inventory");case 3:t=e.sent,(a=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),m(a),r(a),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII=",className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:f,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg==",className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return function(e){var t=e.split(" ");console.log(t);var a=j.filter((function(e){var a,n=Object(T.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(r){n.e(r)}finally{n.f()}return!0}));r(a)}(e.target.value)}}),Object(u.jsx)("div",{className:"inventory-list-container",children:x?Object(u.jsx)(L,{}):Object(u.jsx)(H,{inventoryList:s})})]})})}),X=(a(49),a(50),function(e){var t=["Advertising","Postage & Packaging","Office supplies","Salary","Transport claims","Staff welfare"],a=Object(n.useState)(t[0]),s=Object(i.a)(a,2),r=s[0],c=s[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],x=l[1],f=Object(n.useState)("-"),v=Object(i.a)(f,2),S=v[0],C=v[1],k=Object(n.useState)(A()),y=Object(i.a)(k,2),B=y[0],w=y[1],I=Object(n.useState)(""),U=Object(i.a)(I,2),R=U[0],J=U[1],F=Object(n.useState)("$0.00"),P=Object(i.a)(F,2),G=P[0],D=P[1],K=Object(n.useState)(""),M=Object(i.a)(K,2),Y=M[0],q=M[1],T=Object(n.useState)(!1),H=Object(i.a)(T,2),V=H[0],X=H[1],W=Object(n.useState)(0),Z=Object(i.a)(W,2),z=Z[0],$=Z[1],_=Object(n.useState)(0),ee=Object(i.a)(_,2),te=ee[0],ae=ee[1],ne=[{indicator:z,setter:$},{indicator:te,setter:ae}],se=Object(n.useState)(!1),re=Object(i.a)(se,2),ce=re[0],ie=re[1],oe=Object(n.useState)(!1),ue=Object(i.a)(oe,2),le=ue[0],je=ue[1],be=Object(n.useState)(""),pe=Object(i.a)(be,2),me=pe[0],de=pe[1],Oe=function(e){de(e),je(!0)},Ae=function(){var e=Object(p.a)(b.a.mark((function e(){var t,a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(Y.toUpperCase()),t=m("GET"),e.next=4,fetch(N+"/bossNames",t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=n.data.bossNames,e.t0=b.a.keys(s);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(r=e.t1.value,s[r].toUpperCase()!==Y.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var t=Object(p.a)(b.a.mark((function t(){var a,n,s,c,i,o,u,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,X(!1),ie(!0),je(!1),de(""),h(G)){t.next=8;break}return Oe("Invalid amount!"),ie(!1),t.abrupt("return");case 8:return X(!1),$(0),ae(0),X(!0),t.next=12,Ae();case 12:if(t.sent){t.next=17;break}return $(2),ie(!1),t.abrupt("return");case 17:return $(1),a={category:r,paid_to:j,invoice_no:S,date:B,description:R,amount:G},t.next=21,O(N+"/expense",a);case 21:return t.next=23,d(N+"/cce_out");case 23:return n=t.sent,(s=n.data.lastCashOutIndex).startsWith("CO")||(s="CO000"),c=n.data.row,i=g(s),o=parseInt(c)+1,u={indexNumber:i,date:B,description:R,amount:G,remarks:R,row:o},t.next=32,O(N+"/cce_out",u);case 32:ae(1),ie(!1),e.navigate("orderSubmitted"),t.next=47;break;case 37:t.prev=37,t.t0=t.catch(0),t.t1=b.a.keys(ne);case 40:if((t.t2=t.t1()).done){t.next=47;break}if(0!==(l=t.t2.value).indicator){t.next=45;break}return l.setter(2),t.abrupt("break",47);case 45:t.next=40;break;case 47:case"end":return t.stop()}}),t,null,[[0,37]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Expense Form"}),Object(u.jsx)("span",{className:"form-label",children:"Category"}),Object(u.jsx)("select",{name:"category",id:"categories",onChange:function(e){return c(e.target.value)},children:t.map((function(e){return Object(u.jsx)("option",{value:e,children:e})}))}),Object(u.jsx)("span",{className:"form-label",children:"Paid To"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Invoice no (If applicable)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:S,onChange:function(e){return C(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Date"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:B,onChange:function(e){return function(e){3===e.split("/").length&&w(e)}(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Description"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return J(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Amount"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:G,onChange:function(e){return t=e.target.value,a=D,void(t.startsWith("$")?a(t):a("$"));var t,a}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return q(e.target.value)}}),le&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(me),V&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===z&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===z&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===te&&Object(u.jsx)("img",{src:E,className:"status-icon",alt:"logo"}),2===te&&Object(u.jsx)("img",{src:Q,className:"status-icon",alt:"logo"})]})]}),""!==r&&""!==j&&""!==R&&""!==G&&""!==Y&&!1===ce?Object(u.jsx)("div",{className:"form-button",onClick:xe,children:"Submit Expense"}):ce?Object(u.jsx)(L,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Expense"})]})}),W=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(X,{navigate:e.navigate})]})})};var Z=function(){var e=Object(n.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:s});case"checkInventory":return Object(u.jsx)(V,{navigate:s});case"submitOrder":return Object(u.jsx)(Y,{navigate:s});case"addExpenses":return Object(u.jsx)(W,{navigate:s});case"orderSubmitted":return Object(u.jsx)(q,{navigate:s});default:return Object(u.jsx)(l,{navigate:s})}}(a)})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.85fa01d9.chunk.js.map