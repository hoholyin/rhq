(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},4:function(e,t){t.createRequestOptions=function(e){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e+" request"})}},t.createRequestOptions=function(e,t){return"GET"!==e&&"POST"!==e?null:{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}}},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(9),c=n.n(s),i=(n(19),n(2)),u=n.p+"static/media/logo_transparent.0891df4c.png",o=n(0),b=function(e){return Object(o.jsxs)("div",{className:"App-header",children:[Object(o.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(o.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"})]})},l=(n(21),n(5)),j=n.n(l),p=n(6),d=function(){var e=(new Date).getFullYear().toString(),t=((new Date).getMonth()+1).toString();return(new Date).getDate().toString()+"/"+t+"/"+e},O=function(e){var t=e.substring(0,4),n=e.substring(4,6),a=parseInt(e.substring(6)),r=(new Date).getFullYear().toString(),s=((new Date).getMonth()+1).toString();if(1===s.length&&(s="0"+s),t===r&&n===s){for(a=(a+=1).toString();a.length<3;)a="0"+a;return t+n+a}return r+s+"001"},m=function(e){for(e=(e+=1).toString();e.length<3;)e="0"+e;return"CI"+e},f=function(e,t,n,a,r){return e+t+n+a+r},h="https://rhq-backend.herokuapp.com/api",x=["Airpods 1/2","Airpods Pro","12","12/ 12 Pro","12 Pro max","12 Pro","11","11 Pro","11 Pro max","X/XS"],g=["Phone case","Airpods case","Screen protector"],v=["S21","S21 Plus","S21 Ultra","Note 20","Note 20 Ultra"],N=["Phone case","Screen protector"],S=["Selfie ring light","Magnetic car mount stand ring"],k=["Phone accessories"],y=["Azure","Black","White","Red","Pink","Clear","Blue","Gold","NA"],w=["Border","Matt","Ultra thick","Camera cover","NA"],A=n(4),C=(n(8),function(e,t,n){return Object(o.jsx)("div",{className:"radio-row",children:t.map((function(t){var a=e+" "+t;return Object(o.jsxs)("div",{className:"radio-box",children:[Object(o.jsx)("input",{type:"radio",className:"radio-button",name:e,id:a,onClick:function(){return n(t)}}),Object(o.jsx)("label",{htmlFor:a,className:"radio-label",children:t})]},t)}))})}),P=n(10),I=n(11),q=n(14),T=n(13),R=(n(23),n(12)),D=n.n(R),$=function(e){Object(q.a)(n,e);var t=Object(T.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(o.jsx)(D.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),n}(r.a.Component),B=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),b=u[0],l=u[1],P=Object(a.useState)(""),I=Object(i.a)(P,2),q=I[0],T=I[1],R=Object(a.useState)(""),D=Object(i.a)(R,2),B=D[0],E=D[1],G=Object(a.useState)(""),U=Object(i.a)(G,2),M=U[0],_=U[1],F=Object(a.useState)(""),J=Object(i.a)(F,2),Q=J[0],W=J[1],z=Object(a.useState)("1"),X=Object(i.a)(z,2),Y=X[0],H=X[1],K=Object(a.useState)("$0.00"),L=Object(i.a)(K,2),V=L[0],Z=L[1],ee=Object(a.useState)(""),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)("NA"),se=Object(i.a)(re,2),ce=se[0],ie=se[1],ue=Object(a.useState)("$0.00"),oe=Object(i.a)(ue,2),be=oe[0],le=oe[1],je=Object(a.useState)(""),pe=Object(i.a)(je,2),de=pe[0],Oe=pe[1],me=Object(a.useState)(!1),fe=Object(i.a)(me,2),he=fe[0],xe=fe[1],ge=Object(a.useState)([]),ve=Object(i.a)(ge,2),Ne=ve[0],Se=ve[1],ke=Object(a.useState)([]),ye=Object(i.a)(ke,2),we=ye[0],Ae=ye[1],Ce=Object(a.useState)([]),Pe=Object(i.a)(Ce,2),Ie=Pe[0],qe=Pe[1],Te=Object(a.useState)([]),Re=Object(i.a)(Te,2),De=Re[0],$e=Re[1],Be=Object(a.useState)(""),Ee=Object(i.a)(Be,2),Ge=Ee[0],Ue=Ee[1],Me=Object(a.useState)(!1),_e=Object(i.a)(Me,2),Fe=_e[0],Je=_e[1],Qe=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f(b,q,B,M,Q),n=Object(A.createRequestOptions)("POST",{code:t}),e.next=4,fetch(h+"/inventoryRow",n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data.row);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(e){Ue(e),Je(!0)},ze=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);if(t.includes(".")){var n=t.split(".");return 2===n.length&&(parseInt(n[0]),parseInt(n[1]),!0)}}catch(a){return!1}},Xe=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Oe(de.toUpperCase),t=Object(A.createRequestOptions)("GET"),e.next=4,fetch(h+"/bossNames",t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=a.data.bossNames,e.t0=j.a.keys(r);case 10:if((e.t1=e.t0()).done){e.next=16;break}if(s=e.t1.value,r[s].toUpperCase()!==de.toUpperCase()){e.next=14;break}return e.abrupt("return",!0);case 14:e.next=10;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var t=Object(p.a)(j.a.mark((function t(){var n,a,s,c,i,u,o,l,p,f,x,g,v,N,S,k,y,w,C,P,I,T,R,D,$,E,G,U,_,F;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(xe(!0),Je(!1),Ue(""),/^[1-9]\d*$/.test(Y)){t.next=5;break}return We("Invalid quantity!"),t.abrupt("return");case 5:if(Z("$"===V?"$0.00":V),le("$"===be?"$0.00":be),ze(V)){t.next=11;break}return We("Invalid discount!"),xe(!1),t.abrupt("return");case 11:if(ze(be)){t.next=15;break}return We("Invalid tips!"),xe(!1),t.abrupt("return");case 15:return t.next=17,Xe();case 17:if(t.sent){t.next=22;break}return We("Invalid boss!"),xe(!1),t.abrupt("return");case 22:return t.next=24,Qe();case 24:if(n=t.sent,n>=4){t.next=29;break}return We("Item does not exists"),xe(!1),t.abrupt("return");case 29:return a=Object(A.createRequestOptions)("POST",{row:n}),t.next=32,fetch(h+"/inventoryQty",a);case 32:return s=t.sent,t.next=35,s.json();case 35:if(c=t.sent,i=c.data,u=parseInt(i.stockIn),o=parseInt(i.stockOut),!(u+o<=0)){t.next=43;break}return We("Out of stock for item!"),xe(!1),t.abrupt("return");case 43:return l=Object(A.createRequestOptions)("POST",{row:n,newQty:o-1}),t.next=46,fetch(h+"/inventoryUpdateQty",l);case 46:return p=Object(A.createRequestOptions)("GET"),t.next=49,fetch(h+"/orders",p);case 49:return f=t.sent,t.next=52,f.json();case 52:return x=t.sent,g=parseInt(x.data.size),v=x.data.lastInvoiceNumber,N=g+1+1,S=O(v),k=d(),y={row_number:N,customer:r,invoice_number:S,invoice_date:k,category:b,brand:q,detailed:B,color:M,desc:Q,qty:Y,discount:V,status:ne,remarks:ce,tips:be},w=Object(A.createRequestOptions)("POST",y),t.next=63,fetch(h+"/order",w);case 63:return C=t.sent,t.next=66,C.json();case 66:if(P=t.sent,I=P.data.totalAmount,"$0.00"===be){t.next=73;break}return T={customer:r,invoice_number:S,tipAmount:be},R=Object(A.createRequestOptions)("POST",T),t.next=73,fetch(h+"/addTips",R);case 73:return D=Object(A.createRequestOptions)("GET"),t.next=76,fetch(h+"/cce",D);case 76:return $=t.sent,t.next=79,$.json();case 79:return E=t.sent,G=parseInt(E.data.lastCashInIndex),U=m(G),_={indexNumber:U,date:k,description:"Sales - "+S,amount:I,remarks:de},F=Object(A.createRequestOptions)("POST",_),t.next=87,fetch(h+"/cce",F);case 87:xe(!1),e.navigate("orderSubmitted");case 89:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),He=function(e,t){e.startsWith("$")?t(e):t("$")};return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("span",{className:"form-header",children:"Order Form"}),Object(o.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(o.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"form-label",children:"Brand"}),C("brand",["Apple","Samsung","NA"],(function(e){switch(Ae(["NA"]),Se(["NA"]),qe(y),$e(["NA"]),e){case"Apple":Se(x),Ae(g);break;case"Samsung":Se(v),Ae(N);break;case"NA":Se(S),Ae(k)}T(e)})),Object(o.jsx)("span",{className:"form-label",children:"Category"}),C("category",we,(function(e){qe("Screen protector"===e?["NA"]:y),$e("Phone case"===e?w:["NA"]),l(e)})),Object(o.jsx)("span",{className:"form-label",children:"Detailed"}),C("detailed",Ne,E),Object(o.jsx)("span",{className:"form-label",children:"Colour"}),C("color",Ie,_),Object(o.jsx)("span",{className:"form-label",children:"Description"}),C("desc",De,W),Object(o.jsx)("span",{className:"form-label",children:"Quantity"}),Object(o.jsx)("input",{className:"input-box",type:"number",value:Y,onChange:function(e){return H(e.target.value)}}),Object(o.jsx)("span",{className:"form-label",children:"Discount"}),Object(o.jsx)("input",{className:"input-box",type:"text",value:V,onChange:function(e){return He(e.target.value,Z)}}),Object(o.jsx)("span",{className:"form-label",children:"Status"}),C("status",["PENDING","PAID"],ae),Object(o.jsx)("span",{className:"form-label",children:"Remarks"}),Object(o.jsx)("input",{className:"input-box",type:"text",value:ce,onChange:function(e){return ie(e.target.value)}}),Object(o.jsx)("span",{className:"form-label",children:"Tips"}),Object(o.jsx)("input",{className:"input-box",type:"text",value:be,onChange:function(e){return He(e.target.value,le)}}),Object(o.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(o.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return Oe(e.target.value)}}),Fe?function(e){return Object(o.jsx)("span",{className:"warning-message",children:e})}(Ge):null,""!==r&&""!==q&&""!==b&&""!==B&&""!==M&&""!==Q&&""!==ne&&""!==de&&!1===he?Object(o.jsx)("div",{className:"form-button",onClick:Ye,children:"Submit Order"}):he?Object(o.jsx)($,{}):Object(o.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},E=function(e){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(o.jsx)("img",{src:u,className:"submit-order-app-logo",alt:"logo"})}),Object(o.jsx)(B,{navigate:e.navigate})]})})},G=(n(44),n(45),function(e){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"App-header",children:[Object(o.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(o.jsx)("img",{src:u,className:"submit-order-app-logo",alt:"logo"})}),Object(o.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(o.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(o.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})});var U=function(){var e=Object(a.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(o.jsx)(b,{navigate:r});case"submitOrder":return Object(o.jsx)(E,{navigate:r});case"orderSubmitted":return Object(o.jsx)(G,{navigate:r});default:return Object(o.jsx)(b,{navigate:r})}}(n)})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.bae41743.chunk.js.map