(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),c=a.n(r),i=(a(20),a(2)),o=a.p+"static/media/logo_transparent.0891df4c.png",u=a(0),l=function(e){return Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"})]})},j=(a(22),a(4)),b=a.n(j),A=a(5),d=function(){var e=(new Date).getFullYear().toString(),t=((new Date).getMonth()+1).toString();return(new Date).getDate().toString()+"/"+t+"/"+e},p=function(e){var t=e.substring(0,4),a=e.substring(4,6),n=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),r=((new Date).getMonth()+1).toString();if(1===r.length&&(r="0"+r),t===s&&a===r){for(n=(n+=1).toString();n.length<3;)n="0"+n;return t+a+n}return s+r+"001"},m=function(e){for(e=(e+=1).toString();e.length<3;)e="0"+e;return"CI"+e},O=function(e,t,a,n,s){return e+t+a+n+s},g=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(a){return!1}},x=function(e,t){if(!g(e)||!g(t))return"$0.00";var a=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(a.includes(".")||(a+=".00");a.split(".")[1].length<2;)a+="0";return"$"+a},h="https://rhq-backend.herokuapp.com/api",f=["Airpods 1/2","Airpods Pro","12","12/ 12 Pro","12 Pro max","12 Pro","11","11 Pro","11 Pro max","X/XS"],v=["Phone case","Airpods case","Screen protector"],N=["S21","S21 Plus","S21 Ultra","Note 20","Note 20 Ultra"],S=["Phone case","Screen protector"],k=["Selfie ring light","Magnetic car mount stand ring"],C=["Phone accessories"],B=["Azure","Black","White","Red","Pink","Clear","Blue","Gold","NA"],I=["Border","Matt","Ultra thick","Camera cover","NA"],w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",Q=(a(8),function(e,t,a){return Object(u.jsx)("div",{className:"radio-row",children:t.map((function(t){var n=e+" "+t;return Object(u.jsxs)("div",{className:"radio-box",children:[Object(u.jsx)("input",{type:"radio",className:"radio-button",name:e,id:n,onClick:function(){return a(t)}}),Object(u.jsx)("label",{htmlFor:n,className:"radio-label",children:t})]},t)}))})}),U=a(10),E=a(11),R=a(15),J=a(14),F=(a(24),a(12)),P=a.n(F),D=function(e){Object(R.a)(a,e);var t=Object(J.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(u.jsx)(P.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),a}(s.a.Component),G=function(e,t){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}},K=function(){var e=Object(A.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],j=o[1],U=Object(n.useState)(""),E=Object(i.a)(U,2),R=E[0],J=E[1],F=Object(n.useState)(""),P=Object(i.a)(F,2),Y=P[0],M=P[1],T=Object(n.useState)(""),L=Object(i.a)(T,2),q=L[0],H=L[1],V=Object(n.useState)(""),X=Object(i.a)(V,2),Z=X[0],W=X[1],z=Object(n.useState)("1"),$=Object(i.a)(z,2),_=$[0],ee=$[1],te=Object(n.useState)("$0.00"),ae=Object(i.a)(te,2),ne=ae[0],se=ae[1],re=Object(n.useState)(""),ce=Object(i.a)(re,2),ie=ce[0],oe=ce[1],ue=Object(n.useState)("NA"),le=Object(i.a)(ue,2),je=le[0],be=le[1],Ae=Object(n.useState)("$0.00"),de=Object(i.a)(Ae,2),pe=de[0],me=de[1],Oe=Object(n.useState)(""),ge=Object(i.a)(Oe,2),xe=ge[0],he=ge[1],fe=Object(n.useState)(!1),ve=Object(i.a)(fe,2),Ne=ve[0],Se=ve[1],ke=Object(n.useState)(0),Ce=Object(i.a)(ke,2),Be=Ce[0],Ie=Ce[1],we=Object(n.useState)(0),ye=Object(i.a)(we,2),Qe=ye[0],Ue=ye[1],Ee=Object(n.useState)(0),Re=Object(i.a)(Ee,2),Je=Re[0],Fe=Re[1],Pe=Object(n.useState)(0),De=Object(i.a)(Pe,2),Ge=De[0],Ke=De[1],Ye=Object(n.useState)(0),Me=Object(i.a)(Ye,2),Te=Me[0],Le=Me[1],qe=Object(n.useState)(0),He=Object(i.a)(qe,2),Ve=He[0],Xe=He[1],Ze=[{indicator:Be,setter:Ie},{indicator:Qe,setter:Ue},{indicator:Je,setter:Fe},{indicator:Ge,setter:Ke},{indicator:Te,setter:Le},{indicator:Ve,setter:Xe}],We=Object(n.useState)(!1),ze=Object(i.a)(We,2),$e=ze[0],_e=ze[1],et=Object(n.useState)(!1),tt=Object(i.a)(et,2),at=tt[0],nt=tt[1],st=Object(n.useState)(""),rt=Object(i.a)(st,2),ct=rt[0],it=rt[1],ot=Object(n.useState)([]),ut=Object(i.a)(ot,2),lt=ut[0],jt=ut[1],bt=Object(n.useState)([]),At=Object(i.a)(bt,2),dt=At[0],pt=At[1],mt=Object(n.useState)([]),Ot=Object(i.a)(mt,2),gt=Ot[0],xt=Ot[1],ht=Object(n.useState)([]),ft=Object(i.a)(ht,2),vt=ft[0],Nt=ft[1],St=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(l,R,Y,q,Z),a=G("POST",{code:t}),e.next=4,fetch(h+"/inventoryRow",a);case 4:return n=e.sent,e.next=7,n.json();case 7:return s=e.sent,e.abrupt("return",s.data.row);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),kt=function(e){it(e),nt(!0)},Ct=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he(xe.toUpperCase()),t=G("GET"),e.next=4,fetch(h+"/bossNames",t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=n.data.bossNames,e.t0=b.a.keys(s);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(r=e.t1.value,s[r].toUpperCase()!==xe.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Bt=function(){var t=Object(A.a)(b.a.mark((function t(){var a,n,r,c,i,o,u,j,A,f,v,N,S,k,C,B,I,w,y,Q,U,E,J,F,P,D,M,T,L,H,V;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Se(!1),_e(!0),nt(!1),it(""),/^[1-9]\d*$/.test(_)){t.next=8;break}return kt("Invalid quantity!"),_e(!1),t.abrupt("return");case 8:if(se("$"===ne?"$0.00":ne),me("$"===pe?"$0.00":pe),g(ne)){t.next=14;break}return kt("Invalid discount!"),_e(!1),t.abrupt("return");case 14:if(g(pe)){t.next=18;break}return kt("Invalid tips!"),_e(!1),t.abrupt("return");case 18:return Se(!1),Ie(0),Ue(0),Fe(0),Ke(0),Le(0),Xe(0),Se(!0),t.next=22,Ct();case 22:if(t.sent){t.next=27;break}return Ie(2),_e(!1),t.abrupt("return");case 27:return Ie(1),t.next=30,St();case 30:if(a=t.sent,a>=4){t.next=35;break}return Ue(2),_e(!1),t.abrupt("return");case 35:return Ue(1),n=G("POST",{row:a}),t.next=39,fetch(h+"/inventoryQty",n);case 39:return r=t.sent,t.next=42,r.json();case 42:if(c=t.sent,i=c.data,o=parseInt(i.stockIn),u=parseInt(i.stockOut),!(o+u<=0)){t.next=50;break}return Fe(2),_e(!1),t.abrupt("return");case 50:return Fe(1),j=G("POST",{row:a,newQty:u-1}),t.next=54,fetch(h+"/inventoryUpdateQty",j);case 54:return Ke(1),t.next=57,K(h+"/orders");case 57:return A=t.sent,f=parseInt(A.data.size),v=A.data.lastInvoiceNumber,N=f+1+1,S=p(v),k=d(),C=G("POST",{row_number:N,customer:s,invoice_number:S,invoice_date:k,category:l,brand:R,detailed:Y,color:q,desc:Z,qty:_,discount:ne,status:ie,remarks:je,tips:pe}),t.next=68,fetch(h+"/order",C);case 68:return B=t.sent,t.next=71,B.json();case 71:if(I=t.sent,w=I.data.totalAmount,Le(1),"$0.00"===pe){t.next=79;break}return y=G("POST",{customer:s,invoice_number:S,tipAmount:pe}),t.next=79,fetch(h+"/addTips",y);case 79:return t.next=81,K(h+"/cce");case 81:return Q=t.sent,U=parseInt(Q.data.lastCashInIndex),E=m(U),J={indexNumber:E,date:k,description:"Sales - "+S,amount:x(w,pe),remarks:xe},F=G("POST",J),t.next=89,fetch(h+"/cce",F);case 89:return Xe(1),P={customer:s,invoice_number:S,date:k,item:{desc:O(l,R,Y,q,Z),qty:_}},D=G("POST",P),t.next=94,fetch(h+"/invoice",D);case 94:return M=t.sent,t.next=97,M.json();case 97:T=t.sent,L=T.data.invoice_url,_e(!1),(H=window.open(L,"_blank","noopener,noreferrer"))&&(H.opener=null),e.navigate("orderSubmitted"),t.next=115;break;case 105:t.prev=105,t.t0=t.catch(0),t.t1=b.a.keys(Ze);case 108:if((t.t2=t.t1()).done){t.next=115;break}if(0!==(V=t.t2.value).indicator){t.next=113;break}return V.setter(2),t.abrupt("break",115);case 113:t.next=108;break;case 115:case"end":return t.stop()}}),t,null,[[0,105]])})));return function(){return t.apply(this,arguments)}}(),It=function(e,t){e.startsWith("$")?t(e):t("$")};return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Brand"}),Q("brand",["Apple","Samsung","NA"],(function(e){switch(pt(["NA"]),jt(["NA"]),xt(B),Nt(["NA"]),e){case"Apple":jt(f),pt(v);break;case"Samsung":jt(N),pt(S);break;case"NA":jt(k),pt(C)}J(e)})),Object(u.jsx)("span",{className:"form-label",children:"Category"}),Q("category",dt,(function(e){xt("Screen protector"===e?["NA"]:B),Nt("Phone case"===e?I:["NA"]),j(e)})),Object(u.jsx)("span",{className:"form-label",children:"Detailed"}),Q("detailed",lt,M),Object(u.jsx)("span",{className:"form-label",children:"Colour"}),Q("color",gt,H),Object(u.jsx)("span",{className:"form-label",children:"Description"}),Q("desc",vt,W),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:_,onChange:function(e){return ee(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Discount"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:ne,onChange:function(e){return It(e.target.value,se)}}),Object(u.jsx)("span",{className:"form-label",children:"Status"}),Q("status",["PENDING","PAID"],oe),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:je,onChange:function(e){return be(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:pe,onChange:function(e){return It(e.target.value,me)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return he(e.target.value)}}),at&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(ct),Ne&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===Be&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Be&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===Qe&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Qe&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===Je&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Je&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===Ge&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Ge&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Te&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Te&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Ve&&Object(u.jsx)("img",{src:w,className:"status-icon",alt:"logo"}),2===Ve&&Object(u.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==R&&""!==l&&""!==Y&&""!==q&&""!==Z&&""!==ie&&""!==xe&&!1===$e?Object(u.jsx)("div",{className:"form-button",onClick:Bt,children:"Submit Order"}):$e?Object(u.jsx)(D,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},M=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(Y,{navigate:e.navigate})]})})},T=(a(45),a(46),function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})}),L=a(13),q=(a(47),function(e){return 0===e.inventoryList.length?Object(u.jsx)("div",{className:"inventory-list",children:Object(u.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(u.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(e){return Object(u.jsxs)("div",{className:"inventory-list-row",children:[Object(u.jsx)("div",{className:"inventory-code",children:e.name}),Object(u.jsx)("div",{className:"inventory-location",children:e.loc})]})}))})}),H=(a(48),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)([]),l=Object(i.a)(c,2),j=l[0],d=l[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),O=m[0],g=m[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(A.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,K(h+"/inventory");case 3:t=e.sent,(a=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),d(a),r(a),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII=",className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:x,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg==",className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return function(e){var t=e.split(" ");console.log(t);var a=j.filter((function(e){var a,n=Object(L.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(r){n.e(r)}finally{n.f()}return!0}));r(a)}(e.target.value)}}),Object(u.jsx)("div",{className:"inventory-list-container",children:O?Object(u.jsx)(D,{}):Object(u.jsx)(q,{inventoryList:s})})]})})});var V=function(){var e=Object(n.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:s});case"checkInventory":return Object(u.jsx)(H,{navigate:s});case"submitOrder":return Object(u.jsx)(M,{navigate:s});case"orderSubmitted":return Object(u.jsx)(T,{navigate:s});default:return Object(u.jsx)(l,{navigate:s})}}(a)})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.db793221.chunk.js.map