(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),c=a.n(r),i=(a(20),a(2)),o=a.p+"static/media/logo_transparent.0891df4c.png",u=a(0),l=function(e){return Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"})]})},j=(a(22),a(4)),b=a.n(j),A=a(5),p=function(){var e=(new Date).getFullYear().toString();return((new Date).getMonth()+1).toString()+"/"+(new Date).getDate().toString()+"/"+e},m=function(e){var t=e.substring(0,4),a=e.substring(4,6),n=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),r=((new Date).getMonth()+1).toString();if(1===r.length&&(r="0"+r),t===s&&a===r){for(n=(n+=1).toString();n.length<3;)n="0"+n;return t+a+n}return s+r+"001"},d=function(e){var t=parseInt(e.substring(2));for(t=(t+=1).toString();t.length<3;)t="0"+t;return"CI"+t},O=function(e,t,a,n,s){return e+t+a+n+s},g=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(a){return!1}},x=function(e,t){if(!g(e)||!g(t))return"$0.00";var a=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(a.includes(".")||(a+=".00");a.split(".")[1].length<2;)a+="0";return"$"+a},h="https://rhq-backend.herokuapp.com/api",f=["Airpods 1/2","Airpods Pro","12","12/ 12 Pro","12 Pro max","12 Pro","11","11 Pro","11 Pro max","X/XS","38mm-40mm","40mm-42mm"],v=["Phone case","Airpods case","Screen protector"],N=["S21","S21 Plus","S21 Ultra","Note 20","Note 20 Ultra"],S=["Phone case","Screen protector"],C=["Selfie ring light","Magnetic car mount stand ring"],k=["Phone accessories"],B=["Azure","Black","Silver","White","Red","Pink","Clear","Blue","Gold","NA"],y=["Border","Matt","Ultra thick","Camera cover","Milanese loop","NA"],I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",Q=(a(8),function(e,t,a){return Object(u.jsx)("div",{className:"radio-row",children:t.map((function(t){var n=e+" "+t;return Object(u.jsxs)("div",{className:"radio-box",children:[Object(u.jsx)("input",{type:"radio",className:"radio-button",name:e,id:n,onClick:function(){return a(t)}}),Object(u.jsx)("label",{htmlFor:n,className:"radio-label",children:t})]},t)}))})}),U=a(10),E=a(11),R=a(15),J=a(14),F=(a(24),a(12)),G=a.n(F),P=function(e){Object(R.a)(a,e);var t=Object(J.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(u.jsx)(G.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),a}(s.a.Component),D=function(){var e=Object(A.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(A.a)(b.a.mark((function e(t,a){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=3,fetch(t,n);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],j=o[1],U=Object(n.useState)(""),E=Object(i.a)(U,2),R=E[0],J=E[1],F=Object(n.useState)(""),G=Object(i.a)(F,2),L=G[0],M=G[1],Y=Object(n.useState)(""),q=Object(i.a)(Y,2),H=q[0],T=q[1],V=Object(n.useState)(""),X=Object(i.a)(V,2),Z=X[0],W=X[1],z=Object(n.useState)("1"),$=Object(i.a)(z,2),_=$[0],ee=$[1],te=Object(n.useState)("$0.00"),ae=Object(i.a)(te,2),ne=ae[0],se=ae[1],re=Object(n.useState)("$0.00"),ce=Object(i.a)(re,2),ie=ce[0],oe=ce[1],ue=Object(n.useState)("NA"),le=Object(i.a)(ue,2),je=le[0],be=le[1],Ae=Object(n.useState)("$0.00"),pe=Object(i.a)(Ae,2),me=pe[0],de=pe[1],Oe=Object(n.useState)(""),ge=Object(i.a)(Oe,2),xe=ge[0],he=ge[1],fe=Object(n.useState)(!1),ve=Object(i.a)(fe,2),Ne=ve[0],Se=ve[1],Ce=Object(n.useState)(0),ke=Object(i.a)(Ce,2),Be=ke[0],ye=ke[1],Ie=Object(n.useState)(0),we=Object(i.a)(Ie,2),Qe=we[0],Ue=we[1],Ee=Object(n.useState)(0),Re=Object(i.a)(Ee,2),Je=Re[0],Fe=Re[1],Ge=Object(n.useState)(0),Pe=Object(i.a)(Ge,2),De=Pe[0],Ke=Pe[1],Le=Object(n.useState)(0),Me=Object(i.a)(Le,2),Ye=Me[0],qe=Me[1],He=Object(n.useState)(0),Te=Object(i.a)(He,2),Ve=Te[0],Xe=Te[1],Ze=[{indicator:Be,setter:ye},{indicator:Qe,setter:Ue},{indicator:Je,setter:Fe},{indicator:De,setter:Ke},{indicator:Ye,setter:qe},{indicator:Ve,setter:Xe}],We=Object(n.useState)(!1),ze=Object(i.a)(We,2),$e=ze[0],_e=ze[1],et=Object(n.useState)(!1),tt=Object(i.a)(et,2),at=tt[0],nt=tt[1],st=Object(n.useState)(""),rt=Object(i.a)(st,2),ct=rt[0],it=rt[1],ot=Object(n.useState)([]),ut=Object(i.a)(ot,2),lt=ut[0],jt=ut[1],bt=Object(n.useState)([]),At=Object(i.a)(bt,2),pt=At[0],mt=At[1],dt=Object(n.useState)([]),Ot=Object(i.a)(dt,2),gt=Ot[0],xt=Ot[1],ht=Object(n.useState)([]),ft=Object(i.a)(ht,2),vt=ft[0],Nt=ft[1],St=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(l,R,L,H,Z),e.next=3,K(h+"/inventoryRow",{code:t});case 3:return a=e.sent,e.abrupt("return",a.data.row);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ct=function(e){it(e),nt(!0)},kt=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he(xe.toUpperCase()),i=void 0,t="GET"!==(c="GET")&&"POST"!==c?null:{method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},e.next=4,fetch(h+"/bossNames",t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=n.data.bossNames,e.t0=b.a.keys(s);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(r=e.t1.value,s[r].toUpperCase()!==xe.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}var c,i}),e)})));return function(){return e.apply(this,arguments)}}(),Bt=function(){var t=Object(A.a)(b.a.mark((function t(){var a,n,r,c,i,o,u,j,A,f,v,N,S,C,k,B,y;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Se(!1),_e(!0),nt(!1),it(""),/^[1-9]\d*$/.test(_)){t.next=8;break}return Ct("Invalid quantity!"),_e(!1),t.abrupt("return");case 8:if(se("$"===ne?"$0.00":ne),de("$"===me?"$0.00":me),oe("$"===ie?"$0.00":ie),g(ne)){t.next=15;break}return Ct("Invalid amount!"),_e(!1),t.abrupt("return");case 15:if(g(me)){t.next=19;break}return Ct("Invalid tips!"),_e(!1),t.abrupt("return");case 19:if(g(ie)){t.next=23;break}return Ct("Invalid stamps!"),_e(!1),t.abrupt("return");case 23:return Se(!1),ye(0),Ue(0),Fe(0),Ke(0),qe(0),Xe(0),Se(!0),t.next=27,kt();case 27:if(t.sent){t.next=32;break}return ye(2),_e(!1),t.abrupt("return");case 32:return ye(1),t.next=35,St();case 35:if(a=t.sent,a>=2){t.next=40;break}return Ue(2),_e(!1),t.abrupt("return");case 40:return Ue(1),t.next=43,K(h+"/inventoryGetLoc",{row:a});case 43:if(n=t.sent,w=n.data.inventoryLoc,r="NA"===w?[]:w.split(",").map((function(e){return e.trim()})).map((function(e){var t=e.split("(")[0],a=e.split("(")[1].split(")")[0];return{name:t,qty:parseInt(a)}})),c=!1,r.forEach((function(e){e.name.toUpperCase()===xe.toUpperCase()&&(c=e.qty>0)})),c){t.next=51;break}return Fe(2),_e(!1),t.abrupt("return");case 51:return Fe(1),i=r.map((function(e){return e.name.toUpperCase()===xe.toUpperCase()?{name:e.name,qty:e.qty-_}:e})).filter((function(e){return e.qty>0})),o=0===(I=i).length?"NA":I.map((function(e){return e.name+"("+e.qty+")"})).join(", "),t.next=56,K(h+"/inventoryUpdateLoc",{row:a,location:o});case 56:return Ke(1),t.next=59,D(h+"/orders");case 59:return u=t.sent,j=u.data.lastInvoiceNumber,A=m(j),f=p(),v={code:O(l,R,L,H,Z),customer:s,invoice_number:A,invoice_date:f,qty:_,amt:ne,tips:me,stamps:ie,remarks:je},t.next=66,K(h+"/order",v);case 66:if(qe(1),"$0.00"===me){t.next=71;break}return N={customer:s,invoice_number:A,tipAmount:me},t.next=71,K(h+"/addTips",N);case 71:return t.next=73,D(h+"/cce");case 73:return S=t.sent,C=S.data.lastCashInIndex,k=d(C),B={indexNumber:k,date:f,description:"Sales - "+A,amount:x(ne,me)},t.next=80,K(h+"/cce",B);case 80:Xe(1),_e(!1),e.navigate("orderSubmitted"),t.next=95;break;case 85:t.prev=85,t.t0=t.catch(0),t.t1=b.a.keys(Ze);case 88:if((t.t2=t.t1()).done){t.next=95;break}if(0!==(y=t.t2.value).indicator){t.next=93;break}return y.setter(2),t.abrupt("break",95);case 93:t.next=88;break;case 95:case"end":return t.stop()}var I,w}),t,null,[[0,85]])})));return function(){return t.apply(this,arguments)}}(),yt=function(e,t){e.startsWith("$")?t(e):t("$")};return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Brand"}),Q("brand",["Apple","Samsung","NA"],(function(e){switch(mt(["NA"]),jt(["NA"]),xt(B),Nt(["NA"]),e){case"Apple":jt(f),mt(v);break;case"Samsung":jt(N),mt(S);break;case"NA":jt(C),mt(k)}J(e)})),Object(u.jsx)("span",{className:"form-label",children:"Category"}),Q("category",pt,(function(e){xt("Screen protector"===e?["NA"]:B),Nt("Phone case"===e?y:["NA"]),j(e)})),Object(u.jsx)("span",{className:"form-label",children:"Detailed"}),Q("detailed",lt,M),Object(u.jsx)("span",{className:"form-label",children:"Colour"}),Q("color",gt,T),Object(u.jsx)("span",{className:"form-label",children:"Description"}),Q("desc",vt,W),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:_,onChange:function(e){return ee(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Net Amount (After discount)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:ne,onChange:function(e){return yt(e.target.value,se)}}),Object(u.jsx)("span",{className:"form-label",children:"Stamp value"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:ie,onChange:function(e){return yt(e.target.value,oe)}}),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:je,onChange:function(e){return be(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:me,onChange:function(e){return yt(e.target.value,de)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return he(e.target.value)}}),at&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(ct),Ne&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===Be&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===Be&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===Qe&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===Qe&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===Je&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===Je&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===De&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===De&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Ye&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===Ye&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Ve&&Object(u.jsx)("img",{src:I,className:"status-icon",alt:"logo"}),2===Ve&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==R&&""!==l&&""!==L&&""!==H&&""!==Z&&""!==ne&&""!==ie&&""!==xe&&!1===$e?Object(u.jsx)("div",{className:"form-button",onClick:Bt,children:"Submit Order"}):$e?Object(u.jsx)(P,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},M=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(L,{navigate:e.navigate})]})})},Y=(a(45),a(46),function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})}),q=a(13),H=(a(47),function(e){return 0===e.inventoryList.length?Object(u.jsx)("div",{className:"inventory-list",children:Object(u.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(u.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(e){return Object(u.jsxs)("div",{className:"inventory-list-row",children:[Object(u.jsx)("div",{className:"inventory-code",children:e.name}),Object(u.jsx)("div",{className:"inventory-location",children:e.loc})]})}))})}),T=(a(48),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)([]),l=Object(i.a)(c,2),j=l[0],p=l[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),O=d[0],g=d[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,D(h+"/inventory");case 3:t=e.sent,(a=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),p(a),r(a),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII=",className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:x,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg==",className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return function(e){var t=e.split(" ");console.log(t);var a=j.filter((function(e){var a,n=Object(q.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(r){n.e(r)}finally{n.f()}return!0}));r(a)}(e.target.value)}}),Object(u.jsx)("div",{className:"inventory-list-container",children:O?Object(u.jsx)(P,{}):Object(u.jsx)(H,{inventoryList:s})})]})})});var V=function(){var e=Object(n.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:s});case"checkInventory":return Object(u.jsx)(T,{navigate:s});case"submitOrder":return Object(u.jsx)(M,{navigate:s});case"orderSubmitted":return Object(u.jsx)(Y,{navigate:s});default:return Object(u.jsx)(l,{navigate:s})}}(a)})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.5ab69beb.chunk.js.map