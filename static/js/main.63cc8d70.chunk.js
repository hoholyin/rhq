(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(9),r=n.n(c),i=(n(19),n(2)),o=n.p+"static/media/logo_transparent.0891df4c.png",u=n(0),l=function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("pendingOrders")},children:"Pending Orders"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"}),Object(u.jsx)("div",{className:"button",onClick:function(){return e.navigate("addExpenses")},children:"Add an Expense"})]})},j=(n(21),n(6)),b=n(3),d=n.n(b),m=n(5),p=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=3,fetch(t,a);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=(new Date).getFullYear().toString();return((new Date).getMonth()+1).toString()+"/"+(new Date).getDate().toString()+"/"+e},g=function(e){var t=e.substring(0,4),n=e.substring(4,6),a=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),c=((new Date).getMonth()+1).toString();if(1===c.length&&(c="0"+c),t===s&&n===c){for(a=(a+=1).toString();a.length<3;)a="0"+a;return t+n+a}return s+c+"001"},f=function(e){var t=parseInt(e.substring(2));for(t=(t+=1).toString();t.length<3;)t="0"+t;return e.substring(0,2)+t},v=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(n){return!1}},h=function(e,t){if(!v(e)||!v(t))return"$0.00";var n=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(n.includes(".")||(n+=".00");n.split(".")[1].length<2;)n+="0";return"$"+n},A="https://rhq-backend.herokuapp.com/api",N=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,s,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0,n="GET"!==(i="GET")&&"POST"!==i?null:{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},e.next=3,fetch(A+"/bossNames",n);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,c=s.data.bossNames,e.t0=d.a.keys(c);case 9:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,c[r].toUpperCase()!==t.toUpperCase()){e.next=13;break}return e.abrupt("return",!0);case 13:e.next=9;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}var i,o}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){e.startsWith("$")?t(e):t("$")},k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",w=(n(23),n(10)),y=n(11),B=n(14),I=n(13),E=(n(24),n(12)),Q=n.n(E),U=function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(u.jsx)(Q.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),n}(s.a.Component),R=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)("1"),o=Object(i.a)(r,2),l=o[0],b=o[1],w=Object(a.useState)("$0.00"),y=Object(i.a)(w,2),B=y[0],I=y[1],E=Object(a.useState)("$0.00"),Q=Object(i.a)(E,2),R=Q[0],J=Q[1],F=Object(a.useState)("NA"),L=Object(i.a)(F,2),G=L[0],P=L[1],D=Object(a.useState)("$0.00"),M=Object(i.a)(D,2),K=M[0],Y=M[1],q=Object(a.useState)(""),T=Object(i.a)(q,2),H=T[0],V=T[1],X=Object(a.useState)(""),Z=Object(i.a)(X,2),W=Z[0],z=Z[1],$=Object(a.useState)(""),_=Object(i.a)($,2),ee=_[0],te=_[1],ne=Object(a.useState)([]),ae=Object(i.a)(ne,2),se=ae[0],ce=ae[1],re=Object(a.useState)([]),ie=Object(i.a)(re,2),oe=ie[0],ue=ie[1],le=Object(a.useState)(!1),je=Object(i.a)(le,2),be=je[0],de=je[1],me=Object(a.useState)(!1),pe=Object(i.a)(me,2),Oe=pe[0],xe=pe[1],ge=Object(a.useState)(0),fe=Object(i.a)(ge,2),ve=fe[0],he=fe[1],Ae=Object(a.useState)(0),Ne=Object(i.a)(Ae,2),Se=Ne[0],ke=Ne[1],Ce=Object(a.useState)(0),we=Object(i.a)(Ce,2),ye=we[0],Be=we[1],Ie=Object(a.useState)(0),Ee=Object(i.a)(Ie,2),Qe=Ee[0],Ue=Ee[1],Re=Object(a.useState)(0),Je=Object(i.a)(Re,2),Fe=Je[0],Le=Je[1],Ge=Object(a.useState)(0),Pe=Object(i.a)(Ge,2),De=Pe[0],Me=Pe[1],Ke=[{indicator:ve,setter:he},{indicator:Se,setter:ke},{indicator:ye,setter:Be},{indicator:Qe,setter:Ue},{indicator:Fe,setter:Le},{indicator:De,setter:Me}],Ye=Object(a.useState)(!1),qe=Object(i.a)(Ye,2),Te=qe[0],He=qe[1],Ve=Object(a.useState)(!1),Xe=Object(i.a)(Ve,2),Ze=Xe[0],We=Xe[1],ze=Object(a.useState)(""),$e=Object(i.a)(ze,2),_e=$e[0],et=$e[1];Object(a.useEffect)((function(){tt()}),[]);var tt=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return de(!0),e.next=3,p(A+"/inventory");case 3:t=e.sent,(n=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e})),ue(n),ce(n),de(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(A+"/inventoryRow",{code:W});case 2:return t=e.sent,e.abrupt("return",t.data.row);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),at=function(e){et(e),We(!0)},st=function(){var t=Object(m.a)(d.a.mark((function t(){var n,a,c,r,i,o,u,j,b,m,S,k,C,w,y,E,Q,U,F,L;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,xe(!1),He(!0),We(!1),et(""),/^[1-9]\d*$/.test(l)){t.next=8;break}return at("Invalid quantity!"),He(!1),t.abrupt("return");case 8:if(I("$"===B?"$0.00":B),Y("$"===K?"$0.00":K),J("$"===R?"$0.00":R),v(B)){t.next=15;break}return at("Invalid amount!"),He(!1),t.abrupt("return");case 15:if(v(K)){t.next=19;break}return at("Invalid tips!"),He(!1),t.abrupt("return");case 19:if(v(R)){t.next=23;break}return at("Invalid stamps!"),He(!1),t.abrupt("return");case 23:return xe(!1),he(0),ke(0),Be(0),Ue(0),Le(0),Me(0),xe(!0),t.next=27,N(H);case 27:if(t.sent){t.next=32;break}return he(2),He(!1),t.abrupt("return");case 32:return he(1),t.next=35,nt();case 35:if(n=t.sent,n>=2){t.next=40;break}return ke(2),He(!1),t.abrupt("return");case 40:return ke(1),t.next=43,O(A+"/inventoryGetLoc",{row:n});case 43:if(a=t.sent,D=a.data.inventoryLoc,c="NA"===D?[]:D.split(",").map((function(e){return e.trim()})).map((function(e){var t=e.split("(")[0],n=e.split("(")[1].split(")")[0];return{name:t,qty:parseInt(n)}})),r=!1,c.forEach((function(e){e.name.toUpperCase()===H.toUpperCase()&&(r=e.qty>=l)})),r){t.next=51;break}return Be(2),He(!1),t.abrupt("return");case 51:return Be(1),i=c.map((function(e){return e.name.toUpperCase()===H.toUpperCase()?{name:e.name,qty:e.qty-l}:e})).filter((function(e){return e.qty>0})),o=0===(P=i).length?"NA":P.map((function(e){return e.name+"("+e.qty+")"})).join(", "),t.next=56,O(A+"/inventoryUpdateLoc",{row:n,location:o});case 56:return Ue(1),t.next=59,p(A+"/orders");case 59:return u=t.sent,j=u.data.lastInvoiceNumber,b=g(j),m=x(),S={code:W,customer:s,invoice_number:b,invoice_date:m,qty:l,amt:B,tips:K,stamps:R,remarks:G},t.next=66,O(A+"/order",S);case 66:if(Le(1),"$0.00"===K){t.next=71;break}return k={customer:s,invoice_number:b,tipAmount:K},t.next=71,O(A+"/addTips",k);case 71:return t.next=73,p(A+"/cce_in");case 73:return C=t.sent,(w=C.data.lastCashInIndex).startsWith("CI")||(w="CI000"),y=C.data.row,E=f(w),Q="Sales - "+b,U=parseInt(y)+1,F={indexNumber:E,date:m,description:Q,amount:h(B,K),row:U},t.next=83,O(A+"/cce_in",F);case 83:Me(1),He(!1),e.navigate("orderSubmitted"),t.next=98;break;case 88:t.prev=88,t.t0=t.catch(0),t.t1=d.a.keys(Ke);case 91:if((t.t2=t.t1()).done){t.next=98;break}if(0!==(L=t.t2.value).indicator){t.next=96;break}return L.setter(2),t.abrupt("break",98);case 96:t.next=91;break;case 98:case"end":return t.stop()}var P,D}),t,null,[[0,88]])})));return function(){return t.apply(this,arguments)}}(),ct=function(){z(""),S("$0.00",I)};return be?Object(u.jsx)(U,{}):Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Order Form"}),Object(u.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Item"}),""===W&&Object(u.jsx)("input",{className:"input-box",placeholder:"Start typing to search...",type:"text",onChange:function(e){return function(e){te(e);var t=ee.split(" "),n=oe.filter((function(e){var n,a=Object(j.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){a.e(c)}finally{a.f()}return!0}));ce(n)}(e.target.value)}}),""!==W&&function(){for(var e="",t=0;t<W.length;t++)if(0!==e.length&&W.length!==t+1){var n=e.slice(-1),a=W[t];n.match(/[0-9|a-z]/)&&a.match(/[A-Z]/)&&(e+="\n"),e+=W[t]}else e+=W[t];return Object(u.jsxs)("div",{className:"selected-code-modal",children:[Object(u.jsx)("div",{className:"modal-padding"}),Object(u.jsx)("span",{className:"selected-item-name",children:e}),Object(u.jsx)("div",{className:"remove-selection",onClick:function(){return ct()},children:Object(u.jsx)("img",{src:C,className:"remove-selection-icon",alt:"logo"})})]})}(),""!==ee&&se.map((function(e){return Object(u.jsx)("div",{className:"search-item-row",onClick:function(){return z((t=e).code),S(t.price,I),void te("");var t},children:Object(u.jsx)("span",{className:"search-item-name",children:e.name})})})),Object(u.jsx)("span",{className:"form-label",children:"Quantity"}),Object(u.jsx)("input",{className:"input-box",type:"number",value:l,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Net Amount (After discount)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:B,onChange:function(e){return S(e.target.value,I)}}),Object(u.jsx)("span",{className:"form-label",children:"Stamp value"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:R,onChange:function(e){return S(e.target.value,J)}}),Object(u.jsx)("span",{className:"form-label",children:"Remarks"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:G,onChange:function(e){return P(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Tips"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:K,onChange:function(e){return S(e.target.value,Y)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return V(e.target.value)}}),Ze&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(_e),Oe&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===ve&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===ve&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Item exists"}),1===Se&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===Se&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"In stock"}),1===ye&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===ye&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===Qe&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===Qe&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Fe&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===Fe&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===De&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===De&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==B&&""!==R&&""!==H&&!1===Te?Object(u.jsx)("div",{className:"form-button",onClick:st,children:"Submit Order"}):Te?Object(u.jsx)(U,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},J=function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(R,{navigate:e.navigate})]})},F=(n(45),n(46),function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("span",{className:"submitted-message",children:"Submitted!"}),Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("div",{className:"button",children:"Back to Homepage"})})]})}),L=(n(47),function(e){return 0===e.inventoryList.length?Object(u.jsx)("div",{className:"inventory-list",children:Object(u.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(u.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(t){return Object(u.jsxs)("div",{className:"inventory-list-row",onClick:function(){return e.elementOnClick(t.code)},children:[Object(u.jsx)("div",{className:"inventory-code",children:t.name}),Object(u.jsx)("div",{className:"inventory-location",children:t.loc})]})}))})}),G=(n(48),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII="),P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg==",D=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),b=l[0],x=l[1],g=Object(a.useState)(!1),f=Object(i.a)(g,2),v=f[0],h=f[1],N=Object(a.useState)(""),S=Object(i.a)(N,2),k=S[0],w=S[1],y=Object(a.useState)(""),B=Object(i.a)(y,2),I=B[0],E=B[1],Q=Object(a.useState)([]),R=Object(i.a)(Q,2),J=R[0],F=R[1],D=Object(a.useState)(!0),M=Object(i.a)(D,2),K=M[0],Y=M[1];Object(a.useEffect)((function(){T()}),[]);var q=function(e){if(w(e),""!=e){var t=e.split(" "),n=b.filter((function(e){var n,a=Object(j.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){a.e(c)}finally{a.f()}return!0}));c(n)}},T=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,p(A+"/inventory");case 3:t=e.sent,(n=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),x(n),c(n),h(!1),q(k);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E("a"),Y(!0),n={code:t},e.next=5,O(A+"/indicator",n);case 5:a=e.sent,s=a.data.allIndicators.map((function(e){return 0===e.replaceAll(/\s/g,"").length?0:e})),c=[{name:"Units Sold",val:s[0]},{name:"Stock in Qty Units",val:s[1]},{name:"Restock Count",val:s[2]},{name:"Margin",val:s[3]}],F(c),E(t),Y(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:G,className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:T,children:Object(u.jsx)("img",{src:P,className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return q(e.target.value)}}),""!==I?K?Object(u.jsx)(U,{}):Object(u.jsxs)("div",{className:"inv-selected-code-modal",children:[Object(u.jsxs)("div",{className:"inv-selected-code-heading",children:[Object(u.jsx)("span",{className:"inv-selected-item-name",children:I}),Object(u.jsx)("div",{className:"inv-remove-selection",onClick:function(){E("")},children:Object(u.jsx)("img",{src:C,className:"remove-selection-icon",alt:"logo"})})]}),Object(u.jsx)("div",{className:"indicator-container",children:J.map((function(e){return Object(u.jsxs)("div",{className:"indicator-column",children:[Object(u.jsx)("div",{className:"indicator-header",children:e.name}),Object(u.jsx)("div",{className:"indicator-value",children:e.val})]})}))})]}):null,Object(u.jsx)("div",{className:"inventory-list-container",children:v?Object(u.jsx)(U,{}):Object(u.jsx)(L,{inventoryList:s,elementOnClick:H})})]})},M=(n(49),n(50),function(e){var t=["Advertising","Postage & Packaging","Office supplies","Salary","Transport claims","Staff welfare"],n=Object(a.useState)(t[0]),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],b=l[1],g=Object(a.useState)("-"),h=Object(i.a)(g,2),w=h[0],y=h[1],B=Object(a.useState)(x()),I=Object(i.a)(B,2),E=I[0],Q=I[1],R=Object(a.useState)(""),J=Object(i.a)(R,2),F=J[0],L=J[1],G=Object(a.useState)("$0.00"),P=Object(i.a)(G,2),D=P[0],M=P[1],K=Object(a.useState)(""),Y=Object(i.a)(K,2),q=Y[0],T=Y[1],H=Object(a.useState)(!1),V=Object(i.a)(H,2),X=V[0],Z=V[1],W=Object(a.useState)(0),z=Object(i.a)(W,2),$=z[0],_=z[1],ee=Object(a.useState)(0),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],se=[{indicator:$,setter:_},{indicator:ne,setter:ae}],ce=Object(a.useState)(!1),re=Object(i.a)(ce,2),ie=re[0],oe=re[1],ue=Object(a.useState)(!1),le=Object(i.a)(ue,2),je=le[0],be=le[1],de=Object(a.useState)(""),me=Object(i.a)(de,2),pe=me[0],Oe=me[1],xe=function(e){Oe(e),be(!0)},ge=function(){var t=Object(m.a)(d.a.mark((function t(){var n,a,s,r,i,o,u,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Z(!1),oe(!0),be(!1),Oe(""),v(D)){t.next=8;break}return xe("Invalid amount!"),oe(!1),t.abrupt("return");case 8:return Z(!1),_(0),ae(0),Z(!0),t.next=12,N(q);case 12:if(t.sent){t.next=17;break}return _(2),oe(!1),t.abrupt("return");case 17:return _(1),n={category:c,paid_to:j,invoice_no:w,date:E,description:F,amount:D},t.next=21,O(A+"/expense",n);case 21:return t.next=23,p(A+"/cce_out");case 23:return a=t.sent,(s=a.data.lastCashOutIndex).startsWith("CO")||(s="CO000"),r=a.data.row,i=f(s),o=parseInt(r)+1,u={indexNumber:i,date:E,description:F,amount:D,remarks:F,row:o},t.next=32,O(A+"/cce_out",u);case 32:ae(1),oe(!1),e.navigate("orderSubmitted"),t.next=47;break;case 37:t.prev=37,t.t0=t.catch(0),t.t1=d.a.keys(se);case 40:if((t.t2=t.t1()).done){t.next=47;break}if(0!==(l=t.t2.value).indicator){t.next=45;break}return l.setter(2),t.abrupt("break",47);case 45:t.next=40;break;case 47:case"end":return t.stop()}}),t,null,[[0,37]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("span",{className:"form-header",children:"Expense Form"}),Object(u.jsx)("span",{className:"form-label",children:"Category"}),Object(u.jsx)("select",{name:"category",id:"categories",onChange:function(e){return r(e.target.value)},children:t.map((function(e){return Object(u.jsx)("option",{value:e,children:e})}))}),Object(u.jsx)("span",{className:"form-label",children:"Paid To"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Invoice no (If applicable)"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:w,onChange:function(e){return y(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Date"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:E,onChange:function(e){return function(e){3===e.split("/").length&&Q(e)}(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Description"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return L(e.target.value)}}),Object(u.jsx)("span",{className:"form-label",children:"Amount"}),Object(u.jsx)("input",{className:"input-box",type:"text",value:D,onChange:function(e){return S(e.target.value,M)}}),Object(u.jsx)("span",{className:"form-label",children:"Boss in-charge"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return T(e.target.value)}}),je&&function(e){return Object(u.jsx)("span",{className:"warning-message",children:e})}(pe),X&&Object(u.jsxs)("div",{className:"status-messages-container",children:[Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Boss correct"}),1===$&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===$&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]}),Object(u.jsxs)("div",{className:"status-message-row",children:[Object(u.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===ne&&Object(u.jsx)("img",{src:k,className:"status-icon",alt:"logo"}),2===ne&&Object(u.jsx)("img",{src:C,className:"status-icon",alt:"logo"})]})]}),""!==c&&""!==j&&""!==F&&""!==D&&""!==q&&!1===ie?Object(u.jsx)("div",{className:"form-button",onClick:ge,children:"Submit Expense"}):ie?Object(u.jsx)(U,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Submit Expense"})]})}),K=function(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)(M,{navigate:e.navigate})]})},Y=(n(51),n(52),function(e){if(0===e.pendingOrdersList.length)return Object(u.jsx)("div",{className:"pending-orders-list",children:Object(u.jsx)("div",{className:"pending-orders-list-row",children:"No Pending orders!"})});var t=e.isMobile?"pending-order-code-mobile":"pending-order-code";return Object(u.jsx)("div",{className:"pending-orders-list",children:e.pendingOrdersList.map((function(n){var a="checkbox-"+n.row;return Object(u.jsxs)("div",{className:"pending-orders-list-row-container",children:[Object(u.jsxs)("div",{className:"pending-order-list-row",children:[Object(u.jsx)("div",{className:t,children:n.code}),Object(u.jsx)("div",{className:"pending-order-name",children:n.name})]}),Object(u.jsx)("div",{className:"checkbox-container",onClick:function(){return e.elementOnClick(n)},children:Object(u.jsx)("input",{type:"checkbox",id:a,className:"checkbox"})},a)]})}))})}),q=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),j=l[0],b=l[1],x=Object(a.useState)(""),g=Object(i.a)(x,2),f=g[0],v=g[1],h=Object(a.useState)(!1),S=Object(i.a)(h,2),k=S[0],C=S[1],w=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||document.documentElement.clientWidth<400;Object(a.useEffect)((function(){y()}),[]);var y=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,p(A+"/pendingOrders");case 3:t=e.sent,(n=t.data.allPendingOrders).map((function(e){return e.selected=!1,e})),b(n),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var t=Object(m.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.next=3,N(f);case 3:if(t.sent){t.next=7;break}return C(!1),t.abrupt("return");case 7:return n=I(),a={rows:n},t.next=11,O(A+"/pendingOrders",a);case 11:C(!1),e.navigate("orderSubmitted");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){return j.filter((function(e){return e.selected})).map((function(e){return e.row}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"button-containers",children:[Object(u.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:G,className:"back-button interactive",alt:"back"})}),Object(u.jsx)("div",{className:"refresh-button-container",onClick:y,children:Object(u.jsx)("img",{src:P,className:"refresh-button interactive",alt:"refresh"})})]}),Object(u.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(u.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(u.jsx)("div",{className:"pending-orders-list-container",children:s?Object(u.jsx)(U,{}):Object(u.jsx)(Y,{pendingOrdersList:j,isMobile:w,elementOnClick:function(e){var t=j.map((function(t){return t.row===e.row&&(t.selected=!t.selected),t}));b(t)}})}),Object(u.jsxs)("div",{className:"boss-container",children:[Object(u.jsx)("span",{className:"form-label",children:"Boss"}),Object(u.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return v(e.target.value)}})]}),""!==f&&!1===k&&0!==I().length?Object(u.jsx)("div",{className:"form-button",onClick:B,children:"Clear Pending Orders"}):k?Object(u.jsx)(U,{}):Object(u.jsx)("div",{className:"form-button-inactive",children:"Clear Pending Orders"})]})};var T=function(){var e=Object(a.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(u.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(u.jsx)(l,{navigate:s});case"checkInventory":return Object(u.jsx)(D,{navigate:s});case"pendingOrders":return Object(u.jsx)(q,{navigate:s});case"submitOrder":return Object(u.jsx)(J,{navigate:s});case"addExpenses":return Object(u.jsx)(K,{navigate:s});case"orderSubmitted":return Object(u.jsx)(F,{navigate:s});default:return Object(u.jsx)(l,{navigate:s})}}(n)})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.63cc8d70.chunk.js.map