(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},4:function(e,t){t.createRequestOptions=function(e){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e+" request"})}},t.createRequestOptions=function(e,t){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}}},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(9),c=a.n(r),i=(a(19),a(2)),o=a.p+"static/media/logo_transparent.0891df4c.png",u=a(0),l=function(e){return Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"})]})},j=(a(21),a(5)),b=a.n(j),O=a(6),d=function(){var e=(new Date).getFullYear().toString(),t=((new Date).getMonth()+1).toString();return(new Date).getDate().toString()+"/"+t+"/"+e},m=function(e){var t=e.substring(0,4),a=e.substring(4,6),s=parseInt(e.substring(6)),n=(new Date).getFullYear().toString(),r=((new Date).getMonth()+1).toString();if(1===r.length&&(r="0"+r),t===n&&a===r){for(s=(s+=1).toString();s.length<3;)s="0"+s;return t+a+s}return n+r+"001"},p=function(e){for(e=(e+=1).toString();e.length<3;)e="0"+e;return"CI"+e},g=function(e,t,a,s,n){return e+t+a+s+n},x=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(a){return!1}},A=function(e,t){if(!x(e)||!x(t))return"$0.00";var a=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(a.includes(".")||(a+=".00");a.split(".")[1].length<2;)a+="0";return"$"+a},h="https://rhq-backend.herokuapp.com/api",f=["Airpods 1/2","Airpods Pro","12","12/ 12 Pro","12 Pro max","12 Pro","11","11 Pro","11 Pro max","X/XS"],N=["Phone case","Airpods case","Screen protector"],S=["S21","S21 Plus","S21 Ultra","Note 20","Note 20 Ultra"],v=["Phone case","Screen protector"],k=["Selfie ring light","Magnetic car mount stand ring"],B=["Phone accessories"],I=["Azure","Black","White","Red","Pink","Clear","Blue","Gold","NA"],w=["Border","Matt","Ultra thick","Camera cover","NA"],C=a(4),y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",P=(a(8),function(e,t,a){return Object(u.jsx)("div",{className:"radio-row",children:t.map((function(t){var s=e+" "+t;return Object(u.jsxs)("div",{className:"radio-box",children:[Object(u.jsx)("input",{type:"radio",className:"radio-button",name:e,id:s,onClick:function(){return a(t)}}),Object(u.jsx)("label",{htmlFor:s,className:"radio-label",children:t})]},t)}))})}),Q=a(10),E=a(11),U=a(14),F=a(13),T=(a(23),a(12)),q=a.n(T),G=function(e){Object(U.a)(a,e);var t=Object(F.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(u.jsx)(q.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),a}(n.a.Component),D=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(""),o=Object(i.a)(c,2),l=o[0],j=o[1],Q=Object(s.useState)(""),E=Object(i.a)(Q,2),U=E[0],F=E[1],T=Object(s.useState)(""),q=Object(i.a)(T,2),D=q[0],J=q[1],M=Object(s.useState)(""),H=Object(i.a)(M,2),X=H[0],K=H[1],Y=Object(s.useState)(""),z=Object(i.a)(Y,2),L=z[0],V=z[1],W=Object(s.useState)("1"),Z=Object(i.a)(W,2),$=Z[0],_=Z[1],ee=Object(s.useState)("$0.00"),te=Object(i.a)(ee,2),ae=te[0],se=te[1],ne=Object(s.useState)(""),re=Object(i.a)(ne,2),ce=re[0],ie=re[1],oe=Object(s.useState)("NA"),ue=Object(i.a)(oe,2),le=ue[0],je=ue[1],be=Object(s.useState)("$0.00"),Oe=Object(i.a)(be,2),de=Oe[0],me=Oe[1],pe=Object(s.useState)(""),ge=Object(i.a)(pe,2),xe=ge[0],Ae=ge[1],he=Object(s.useState)(!1),fe=Object(i.a)(he,2),Ne=fe[0],Se=fe[1],ve=Object(s.useState)(0),ke=Object(i.a)(ve,2),Be=ke[0],Ie=ke[1],we=Object(s.useState)(0),Ce=Object(i.a)(we,2),ye=Ce[0],Re=Ce[1],Pe=Object(s.useState)(0),Qe=Object(i.a)(Pe,2),Ee=Qe[0],Ue=Qe[1],Fe=Object(s.useState)(0),Te=Object(i.a)(Fe,2),qe=Te[0],Ge=Te[1],De=Object(s.useState)(0),Je=Object(i.a)(De,2),Me=Je[0],He=Je[1],Xe=Object(s.useState)(0),Ke=Object(i.a)(Xe,2),Ye=Ke[0],ze=Ke[1],Le=[{indicator:Be,setter:Ie},{indicator:ye,setter:Re},{indicator:Ee,setter:Ue},{indicator:qe,setter:Ge},{indicator:Me,setter:He},{indicator:Ye,setter:ze}],Ve=Object(s.useState)(!1),We=Object(i.a)(Ve,2),Ze=We[0],$e=We[1],_e=Object(s.useState)(!1),et=Object(i.a)(_e,2),tt=et[0],at=et[1],st=Object(s.useState)(""),nt=Object(i.a)(st,2),rt=nt[0],ct=nt[1],it=Object(s.useState)([]),ot=Object(i.a)(it,2),ut=ot[0],lt=ot[1],jt=Object(s.useState)([]),bt=Object(i.a)(jt,2),Ot=bt[0],dt=bt[1],mt=Object(s.useState)([]),pt=Object(i.a)(mt,2),gt=pt[0],xt=pt[1],At=Object(s.useState)([]),ht=Object(i.a)(At,2),ft=ht[0],Nt=ht[1],St=function(){var e=Object(O.a)(b.a.mark((function e(){var t,a,s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(l,U,D,X,L),a=Object(C.createRequestOptions)("POST",{code:t}),e.next=4,fetch(h+"/inventoryRow",a);case 4:return s=e.sent,e.next=7,s.json();case 7:return n=e.sent,e.abrupt("return",n.data.row);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),vt=function(e){ct(e),at(!0)},kt=function(){var e=Object(O.a)(b.a.mark((function e(){var t,a,s,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ae(xe.toUpperCase()),t=Object(C.createRequestOptions)("GET"),e.next=4,fetch(h+"/bossNames",t);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,n=s.data.bossNames,e.t0=b.a.keys(n);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(r=e.t1.value,n[r].toUpperCase()!==xe.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Bt=function(){var t=Object(O.a)(b.a.mark((function t(){var a,s,r,c,i,o,u,j,O,f,N,S,v,k,B,I,w,y,R,P,Q,E,F,T,q,G,J,M,H,K,Y,z,V,W,Z,_,ee;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Se(!1),$e(!0),at(!1),ct(""),/^[1-9]\d*$/.test($)){t.next=8;break}return vt("Invalid quantity!"),$e(!1),t.abrupt("return");case 8:if(se("$"===ae?"$0.00":ae),me("$"===de?"$0.00":de),x(ae)){t.next=14;break}return vt("Invalid discount!"),$e(!1),t.abrupt("return");case 14:if(x(de)){t.next=18;break}return vt("Invalid tips!"),$e(!1),t.abrupt("return");case 18:return Se(!1),Ie(0),Re(0),Ue(0),Ge(0),He(0),ze(0),Se(!0),t.next=22,kt();case 22:if(t.sent){t.next=27;break}return Ie(2),$e(!1),t.abrupt("return");case 27:return Ie(1),t.next=30,St();case 30:if(a=t.sent,a>=4){t.next=35;break}return Re(2),$e(!1),t.abrupt("return");case 35:return Re(1),s=Object(C.createRequestOptions)("POST",{row:a}),t.next=39,fetch(h+"/inventoryQty",s);case 39:return r=t.sent,t.next=42,r.json();case 42:if(c=t.sent,i=c.data,o=parseInt(i.stockIn),u=parseInt(i.stockOut),!(o+u<=0)){t.next=50;break}return Ue(2),$e(!1),t.abrupt("return");case 50:return Ue(1),j=Object(C.createRequestOptions)("POST",{row:a,newQty:u-1}),t.next=54,fetch(h+"/inventoryUpdateQty",j);case 54:return Ge(1),O=Object(C.createRequestOptions)("GET"),t.next=58,fetch(h+"/orders",O);case 58:return f=t.sent,t.next=61,f.json();case 61:return N=t.sent,S=parseInt(N.data.size),v=N.data.lastInvoiceNumber,k=S+1+1,B=m(v),I=d(),w={row_number:k,customer:n,invoice_number:B,invoice_date:I,category:l,brand:U,detailed:D,color:X,desc:L,qty:$,discount:ae,status:ce,remarks:le,tips:de},y=Object(C.createRequestOptions)("POST",w),t.next=72,fetch(h+"/order",y);case 72:return R=t.sent,t.next=75,R.json();case 75:if(P=t.sent,Q=P.data.totalAmount,He(1),"$0.00"===de){t.next=83;break}return E={customer:n,invoice_number:B,tipAmount:de},F=Object(C.createRequestOptions)("POST",E),t.next=83,fetch(h+"/addTips",F);case 83:return T=Object(C.createRequestOptions)("GET"),t.next=86,fetch(h+"/cce",T);case 86:return q=t.sent,t.next=89,q.json();case 89:return G=t.sent,J=parseInt(G.data.lastCashInIndex),M=p(J),H={indexNumber:M,date:I,description:"Sales - "+B,amount:A(Q,de),remarks:xe},K=Object(C.createRequestOptions)("POST",H),t.next=97,fetch(h+"/cce",K);case 97:return ze(1),Y={customer:n,invoice_number:B,date:I,item:{desc:g(l,U,D,X,L),qty:$}},z=Object(C.createRequestOptions)("POST",Y),t.next=102,fetch(h+"/invoice",z);case 102:return V=t.sent,t.next=105,V.json();case 105:W=t.sent,Z=W.data.invoice_url,$e(!1),(_=window.open(Z,"_blank","noopener,noreferrer"))&&(_.opener=null),e.navigate("orderSubmitted"),t.next=123;break;case 113:t.prev=113,t.t0=t.catch(0),t.t1=b.a.keys(Le);case 116:if((t.t2=t.t1()).done){t.next=123;break}if(0!==(ee=t.t2.value).indicator){t.next=121;break}return ee.setter(2),t.abrupt("break",123);case 121:t.next=116;break;case 123:case"end":return t.stop()}}),t,null,[[0,113]])})));return function(){return t.apply(this,arguments)}}(),It=function(e,t){e.startsWith("$")?t(e):t("$")};return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Brand"}),P("brand",["Apple","Samsung","NA"],(function(e){switch(dt(["NA"]),lt(["NA"]),xt(I),Nt(["NA"]),e){case"Apple":lt(f),dt(N);break;case"Samsung":lt(S),dt(v);break;case"NA":lt(k),dt(B)}F(e)})),Object(u.jsx)("span",{className:"form-label",children:"Category"}),P("category",Ot,(function(e){xt("Screen protector"===e?["NA"]:I),Nt("Phone case"===e?w:["NA"]),j(e)})),Object(u.jsx)("span",{className:"form-label",children:"Detailed"}),P("detailed",ut,J),Object(u.jsx)("span",{className:"form-label",children:"Colour"}),P("color",gt,K),Object(u.jsx)("span",{className:"form-label",children:"Description"}),P("desc",ft,V),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:$,onChange:function(e){return _(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Discount"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:ae,onChange:function(e){return It(e.target.value,se)}}),Object(u.jsx)("span",{className:"form-label",children:"Status"}),P("status",["PENDING","PAID"],ie),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:le,onChange:function(e){return je(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:de,onChange:function(e){return It(e.target.value,me)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return Ae(e.target.value)}}),tt&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(rt),Ne&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===Be&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===Be&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===ye&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===ye&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===Ee&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===Ee&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===qe&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===qe&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Me&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===Me&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Ye&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"}),2===Ye&&Object(u.jsx)("img",{src:R,className:"status-icon",alt:"logo"})]})]}),""!==n&&""!==U&&""!==l&&""!==D&&""!==X&&""!==L&&""!==ce&&""!==xe&&!1===Ze?Object(u.jsx)("div",{className:"form-button",onClick:Bt,children:"Submit Order"}):Ze?Object(u.jsx)(G,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},J=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(D,{navigate:e.navigate})]})})},M=(a(44),a(45),function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})});var H=function(){var e=Object(s.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:n});case"submitOrder":return Object(u.jsx)(J,{navigate:n});case"orderSubmitted":return Object(u.jsx)(M,{navigate:n});default:return Object(u.jsx)(l,{navigate:n})}}(a)})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.076ccc30.chunk.js.map