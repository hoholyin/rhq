(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(9),r=a.n(c),i=(a(19),a(2)),o=a.p+"static/media/logo_transparent.0891df4c.png",u=a(0),l=function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("addExpenses")},children:"Add an Expense"})]})},j=(a(21),a(6)),b=a(3),p=a.n(b),m=a(5),d=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=3,fetch(t,n);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=(new Date).getFullYear().toString();return((new Date).getMonth()+1).toString()+"/"+(new Date).getDate().toString()+"/"+e},g=function(e){var t=e.substring(0,4),a=e.substring(4,6),n=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),c=((new Date).getMonth()+1).toString();if(1===c.length&&(c="0"+c),t===s&&a===c){for(n=(n+=1).toString();n.length<3;)n="0"+n;return t+a+n}return s+c+"001"},A=function(e){var t=parseInt(e.substring(2));for(t=(t+=1).toString();t.length<3;)t="0"+t;return e.substring(0,2)+t},f=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(a){return!1}},h=function(e,t){if(!f(e)||!f(t))return"$0.00";var a=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(a.includes(".")||(a+=".00");a.split(".")[1].length<2;)a+="0";return"$"+a},v="https://rhq-backend.herokuapp.com/api",N=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n,s,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0,a="GET"!==(i="GET")&&"POST"!==i?null:{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},e.next=3,fetch(v+"/bossNames",a);case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,c=s.data.bossNames,e.t0=p.a.keys(c);case 9:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,c[r].toUpperCase()!==t.toUpperCase()){e.next=13;break}return e.abrupt("return",!0);case 13:e.next=9;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}var i,o}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){e.startsWith("$")?t(e):t("$")},C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",y=(a(23),a(10)),w=a(11),I=a(14),B=a(13),E=(a(24),a(12)),Q=a.n(E),U=function(e){Object(I.a)(a,e);var t=Object(B.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(u.jsx)(Q.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),a}(s.a.Component),R=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)("1"),o=Object(i.a)(r,2),l=o[0],b=o[1],y=Object(n.useState)("$0.00"),w=Object(i.a)(y,2),I=w[0],B=w[1],E=Object(n.useState)("$0.00"),Q=Object(i.a)(E,2),R=Q[0],J=Q[1],F=Object(n.useState)("NA"),G=Object(i.a)(F,2),D=G[0],L=G[1],K=Object(n.useState)("$0.00"),Y=Object(i.a)(K,2),q=Y[0],M=Y[1],P=Object(n.useState)(""),T=Object(i.a)(P,2),H=T[0],V=T[1],X=Object(n.useState)(""),Z=Object(i.a)(X,2),W=Z[0],z=Z[1],$=Object(n.useState)(""),_=Object(i.a)($,2),ee=_[0],te=_[1],ae=Object(n.useState)([]),ne=Object(i.a)(ae,2),se=ne[0],ce=ne[1],re=Object(n.useState)([]),ie=Object(i.a)(re,2),oe=ie[0],ue=ie[1],le=Object(n.useState)(!1),je=Object(i.a)(le,2),be=je[0],pe=je[1],me=Object(n.useState)(!1),de=Object(i.a)(me,2),Oe=de[0],xe=de[1],ge=Object(n.useState)(0),Ae=Object(i.a)(ge,2),fe=Ae[0],he=Ae[1],ve=Object(n.useState)(0),Ne=Object(i.a)(ve,2),Se=Ne[0],Ce=Ne[1],ke=Object(n.useState)(0),ye=Object(i.a)(ke,2),we=ye[0],Ie=ye[1],Be=Object(n.useState)(0),Ee=Object(i.a)(Be,2),Qe=Ee[0],Ue=Ee[1],Re=Object(n.useState)(0),Je=Object(i.a)(Re,2),Fe=Je[0],Ge=Je[1],De=Object(n.useState)(0),Le=Object(i.a)(De,2),Ke=Le[0],Ye=Le[1],qe=[{indicator:fe,setter:he},{indicator:Se,setter:Ce},{indicator:we,setter:Ie},{indicator:Qe,setter:Ue},{indicator:Fe,setter:Ge},{indicator:Ke,setter:Ye}],Me=Object(n.useState)(!1),Pe=Object(i.a)(Me,2),Te=Pe[0],He=Pe[1],Ve=Object(n.useState)(!1),Xe=Object(i.a)(Ve,2),Ze=Xe[0],We=Xe[1],ze=Object(n.useState)(""),$e=Object(i.a)(ze,2),_e=$e[0],et=$e[1];Object(n.useEffect)((function(){tt()}),[]);var tt=function(){var e=Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.next=3,d(v+"/inventory");case 3:t=e.sent,(a=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e})),ue(a),ce(a),pe(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),at=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(v+"/inventoryRow",{code:W});case 2:return t=e.sent,e.abrupt("return",t.data.row);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(e){et(e),We(!0)},st=function(){var t=Object(m.a)(p.a.mark((function t(){var a,n,c,r,i,o,u,j,b,m,S,C,k,y,w,E,Q,U,F,G;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,xe(!1),He(!0),We(!1),et(""),/^[1-9]\d*$/.test(l)){t.next=8;break}return nt("Invalid quantity!"),He(!1),t.abrupt("return");case 8:if(B("$"===I?"$0.00":I),M("$"===q?"$0.00":q),J("$"===R?"$0.00":R),f(I)){t.next=15;break}return nt("Invalid amount!"),He(!1),t.abrupt("return");case 15:if(f(q)){t.next=19;break}return nt("Invalid tips!"),He(!1),t.abrupt("return");case 19:if(f(R)){t.next=23;break}return nt("Invalid stamps!"),He(!1),t.abrupt("return");case 23:return xe(!1),he(0),Ce(0),Ie(0),Ue(0),Ge(0),Ye(0),xe(!0),t.next=27,N(H);case 27:if(t.sent){t.next=32;break}return he(2),He(!1),t.abrupt("return");case 32:return he(1),t.next=35,at();case 35:if(a=t.sent,a>=2){t.next=40;break}return Ce(2),He(!1),t.abrupt("return");case 40:return Ce(1),t.next=43,O(v+"/inventoryGetLoc",{row:a});case 43:if(n=t.sent,K=n.data.inventoryLoc,c="NA"===K?[]:K.split(",").map((function(e){return e.trim()})).map((function(e){var t=e.split("(")[0],a=e.split("(")[1].split(")")[0];return{name:t,qty:parseInt(a)}})),r=!1,c.forEach((function(e){e.name.toUpperCase()===H.toUpperCase()&&(r=e.qty>=l)})),r){t.next=51;break}return Ie(2),He(!1),t.abrupt("return");case 51:return Ie(1),i=c.map((function(e){return e.name.toUpperCase()===H.toUpperCase()?{name:e.name,qty:e.qty-l}:e})).filter((function(e){return e.qty>0})),o=0===(L=i).length?"NA":L.map((function(e){return e.name+"("+e.qty+")"})).join(", "),t.next=56,O(v+"/inventoryUpdateLoc",{row:a,location:o});case 56:return Ue(1),t.next=59,d(v+"/orders");case 59:return u=t.sent,j=u.data.lastInvoiceNumber,b=g(j),m=x(),S={code:W,customer:s,invoice_number:b,invoice_date:m,qty:l,amt:I,tips:q,stamps:R,remarks:D},t.next=66,O(v+"/order",S);case 66:if(Ge(1),"$0.00"===q){t.next=71;break}return C={customer:s,invoice_number:b,tipAmount:q},t.next=71,O(v+"/addTips",C);case 71:return t.next=73,d(v+"/cce_in");case 73:return k=t.sent,(y=k.data.lastCashInIndex).startsWith("CI")||(y="CI000"),w=k.data.row,E=A(y),Q="Sales - "+b,U=parseInt(w)+1,F={indexNumber:E,date:m,description:Q,amount:h(I,q),row:U},t.next=83,O(v+"/cce_in",F);case 83:Ye(1),He(!1),e.navigate("orderSubmitted"),t.next=98;break;case 88:t.prev=88,t.t0=t.catch(0),t.t1=p.a.keys(qe);case 91:if((t.t2=t.t1()).done){t.next=98;break}if(0!==(G=t.t2.value).indicator){t.next=96;break}return G.setter(2),t.abrupt("break",98);case 96:t.next=91;break;case 98:case"end":return t.stop()}var L,K}),t,null,[[0,88]])})));return function(){return t.apply(this,arguments)}}();return be?Object(u.jsx)(U,{}):Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Item"}),""===W&&Object(u.jsx)("input",{className:"input-box",placeholder:"Start typing to search...",type:"text",onChange:function(e){return function(e){te(e);var t=ee.split(" "),a=oe.filter((function(e){var a,n=Object(j.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){n.e(c)}finally{n.f()}return!0}));ce(a)}(e.target.value)}}),""!==W&&function(){for(var e="",t=0;t<W.length;t++)if(0!==e.length&&W.length!==t+1){var a=e.slice(-1),n=W[t];a.match(/[0-9|a-z]/)&&n.match(/[A-Z]/)&&(e+="\n"),e+=W[t]}else e+=W[t];return Object(u.jsxs)("div",{className:"selected-code-modal",children:[Object(u.jsx)("div",{className:"modal-padding"}),Object(u.jsx)("span",{className:"selected-item-name",children:e}),Object(u.jsx)("div",{className:"remove-selection",onClick:function(){return z("")},children:Object(u.jsx)("img",{src:k,className:"remove-selection-icon",alt:"logo"})})]})}(),""!==ee&&se.map((function(e){return Object(u.jsx)("div",{className:"search-item-row",onClick:function(){return t=e.code,z(t),void te("");var t},children:Object(u.jsx)("span",{className:"search-item-name",children:e.name})})})),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:l,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Net Amount (After discount)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:I,onChange:function(e){return S(e.target.value,B)}}),Object(u.jsx)("span",{className:"form-label",children:"Stamp value"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:R,onChange:function(e){return S(e.target.value,J)}}),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:D,onChange:function(e){return L(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:q,onChange:function(e){return S(e.target.value,M)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return V(e.target.value)}}),Ze&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(_e),Oe&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===fe&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===fe&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===Se&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Se&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===we&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===we&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===Qe&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Qe&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Fe&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Fe&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Ke&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Ke&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==I&&""!==R&&""!==H&&!1===Te?Object(u.jsx)("div",{className:"form-button",onClick:st,children:"Submit Order"}):Te?Object(u.jsx)(U,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},J=function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(R,{navigate:e.navigate})]})},F=(a(45),a(46),function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Order submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})})}),G=(a(47),function(e){return 0===e.inventoryList.length?Object(u.jsx)("div",{className:"inventory-list",children:Object(u.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(u.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(e){return Object(u.jsxs)("div",{className:"inventory-list-row",children:[Object(u.jsx)("div",{className:"inventory-code",children:e.name}),Object(u.jsx)("div",{className:"inventory-location",children:e.loc})]})}))})}),D=(a(48),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),b=l[0],O=l[1],x=Object(n.useState)(!1),g=Object(i.a)(x,2),A=g[0],f=g[1],h=Object(n.useState)(""),N=Object(i.a)(h,2),S=N[0],C=N[1];Object(n.useEffect)((function(){y()}));var k=function(e){C(e);var t=e.split(" "),a=b.filter((function(e){var a,n=Object(j.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){n.e(c)}finally{n.f()}return!0}));c(a)},y=function(){var e=Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,d(v+"/inventory");case 3:t=e.sent,(a=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),O(a),c(a),k(S),f(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII=",className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:y,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg==",className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("div",{className:"inventory-list-container",children:A?Object(u.jsx)(U,{}):Object(u.jsx)(G,{inventoryList:s})})]})})}),L=(a(49),a(50),function(e){var t=["Advertising","Postage & Packaging","Office supplies","Salary","Transport claims","Staff welfare"],a=Object(n.useState)(t[0]),s=Object(i.a)(a,2),c=s[0],r=s[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],b=l[1],g=Object(n.useState)("-"),h=Object(i.a)(g,2),y=h[0],w=h[1],I=Object(n.useState)(x()),B=Object(i.a)(I,2),E=B[0],Q=B[1],R=Object(n.useState)(""),J=Object(i.a)(R,2),F=J[0],G=J[1],D=Object(n.useState)("$0.00"),L=Object(i.a)(D,2),K=L[0],Y=L[1],q=Object(n.useState)(""),M=Object(i.a)(q,2),P=M[0],T=M[1],H=Object(n.useState)(!1),V=Object(i.a)(H,2),X=V[0],Z=V[1],W=Object(n.useState)(0),z=Object(i.a)(W,2),$=z[0],_=z[1],ee=Object(n.useState)(0),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],se=[{indicator:$,setter:_},{indicator:ae,setter:ne}],ce=Object(n.useState)(!1),re=Object(i.a)(ce,2),ie=re[0],oe=re[1],ue=Object(n.useState)(!1),le=Object(i.a)(ue,2),je=le[0],be=le[1],pe=Object(n.useState)(""),me=Object(i.a)(pe,2),de=me[0],Oe=me[1],xe=function(e){Oe(e),be(!0)},ge=function(){var t=Object(m.a)(p.a.mark((function t(){var a,n,s,r,i,o,u,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Z(!1),oe(!0),be(!1),Oe(""),f(K)){t.next=8;break}return xe("Invalid amount!"),oe(!1),t.abrupt("return");case 8:return Z(!1),_(0),ne(0),Z(!0),t.next=12,N(P);case 12:if(t.sent){t.next=17;break}return _(2),oe(!1),t.abrupt("return");case 17:return _(1),a={category:c,paid_to:j,invoice_no:y,date:E,description:F,amount:K},t.next=21,O(v+"/expense",a);case 21:return t.next=23,d(v+"/cce_out");case 23:return n=t.sent,(s=n.data.lastCashOutIndex).startsWith("CO")||(s="CO000"),r=n.data.row,i=A(s),o=parseInt(r)+1,u={indexNumber:i,date:E,description:F,amount:K,remarks:F,row:o},t.next=32,O(v+"/cce_out",u);case 32:ne(1),oe(!1),e.navigate("orderSubmitted"),t.next=47;break;case 37:t.prev=37,t.t0=t.catch(0),t.t1=p.a.keys(se);case 40:if((t.t2=t.t1()).done){t.next=47;break}if(0!==(l=t.t2.value).indicator){t.next=45;break}return l.setter(2),t.abrupt("break",47);case 45:t.next=40;break;case 47:case"end":return t.stop()}}),t,null,[[0,37]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Expense Form"}),Object(u.jsx)("span",{className:"form-label",children:"Category"}),Object(u.jsx)("select",{name:"category",id:"categories",onChange:function(e){return r(e.target.value)},children:t.map((function(e){return Object(u.jsx)("option",{value:e,children:e})}))}),Object(u.jsx)("span",{className:"form-label",children:"Paid To"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Invoice no (If applicable)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:y,onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Date"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:E,onChange:function(e){return function(e){3===e.split("/").length&&Q(e)}(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Description"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return G(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Amount"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:K,onChange:function(e){return S(e.target.value,Y)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return T(e.target.value)}}),je&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(de),X&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===$&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===$&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===ae&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===ae&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"})]})]}),""!==c&&""!==j&&""!==F&&""!==K&&""!==P&&!1===ie?Object(u.jsx)("div",{className:"form-button",onClick:ge,children:"Submit Expense"}):ie?Object(u.jsx)(U,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Expense"})]})}),K=function(e){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(L,{navigate:e.navigate})]})})};var Y=function(){var e=Object(n.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:s});case"checkInventory":return Object(u.jsx)(D,{navigate:s});case"submitOrder":return Object(u.jsx)(J,{navigate:s});case"addExpenses":return Object(u.jsx)(K,{navigate:s});case"orderSubmitted":return Object(u.jsx)(F,{navigate:s});default:return Object(u.jsx)(l,{navigate:s})}}(a)})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Y,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.55339573.chunk.js.map