(this["webpackJsonprhq-web"]=this["webpackJsonprhq-web"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(12),r=n.n(c),i=(n(22),n(2)),o=n.p+"static/media/logo_transparent.0891df4c.png",l=n(0),u=function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(l.jsx)("div",{className:"button",onClick:function(){return e.navigate("checkInventory")},children:"Check inventory"}),Object(l.jsx)("div",{className:"button",onClick:function(){return e.navigate("pendingOrders")},children:"Pending Orders"}),Object(l.jsx)("div",{className:"button",onClick:function(){return e.navigate("submitOrder")},children:"Submit an Order"}),Object(l.jsx)("div",{className:"button",onClick:function(){return e.navigate("addExpenses")},children:"Add an Expense"})]})},j=(n(24),n(10)),b=n(8),d=n(3),m=n.n(d),p=n(5),O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=3,fetch(t,a);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(new Date).getFullYear().toString();return((new Date).getMonth()+1).toString()+"/"+(new Date).getDate().toString()+"/"+e},g=function(e){var t=e.substring(0,4),n=e.substring(4,6),a=parseInt(e.substring(6)),s=(new Date).getFullYear().toString(),c=((new Date).getMonth()+1).toString();if(1===c.length&&(c="0"+c),t===s&&n===c){for(a=(a+=1).toString();a.length<3;)a="0"+a;return t+n+a}return s+c+"001"},v=function(e){var t=parseInt(e.substring(2));for(t=(t+=1).toString();t.length<3;)t="0"+t;return e.substring(0,2)+t},h=function(e){if(!e.startsWith("$"))return!1;try{var t=e.substring(1);return!isNaN(t)}catch(n){return!1}},A=function(e,t){if(!h(e)||!h(t))return"$0.00";var n=(parseFloat(e.substring(1))+parseFloat(t.substring(1))).toString();for(n.includes(".")||(n+=".00");n.split(".")[1].length>2;)n=n.slice(0,-1);for(;n.split(".")[1].length<2;)n+="0";return"$"+n},N="https://rhq-backend.herokuapp.com/api",k=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,s,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0,n="GET"!==(i="GET")&&"POST"!==i?null:{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},e.next=3,fetch(N+"/bossNames",n);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,c=s.data.bossNames,e.t0=m.a.keys(c);case 9:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,c[r].toUpperCase()!==t.toUpperCase()){e.next=13;break}return e.abrupt("return",!0);case 13:e.next=9;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}var i,o}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){e.startsWith("$")?t(e):t("$")},C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7djBTcMwFMZxJ0XiygAc6Aas0A0KiDOsADdOcEPiACMAAyB1A0aADRoJBmAAmtBPSg9UTWIndvKe8/2lSu2hlfWT5cbPGMYYY4wxxhhjjDE2phIzgk6/nm6TvJiv8mS2mF79uHw3eqAS5678+OmKFDXQFs4mJ6RogSpwNlkjpSbCGnDQQflqLLodZIGTlbsnMxZFBeQbB0UDFAIHRQEUCgepBwqJg1QDhcZBaoH6wEEqgfrCQeqA+sRBqoD6xkFqgIbAQSqAhsJB4oGGxEGigYbGQa3GHVj42ffjhQmYBBzkvIP+LXxiLt8Or1+N56TgICegnQv3jCQJB1kD1S7cE5I0HGQFNF/eH03S/Q9TN6bsiCQRB1kd0ovpTZbmv7P12+oh98q8tD24peIgpzPofPlwnKd778bjTpKMg5z/xXwiScdBrR4UfSBpwEGtn6S7IGnBQZ2uGm2QNOGgzncxFyRtOMjLZdUKKSkWpkjmNT8jDgd5u81bIVUnEgd5HXe0RBKLg7zPgxyRROOgIAMzSyTxOCjYRLEBSQUOCjpyrUBSg4OCz6S3kFThoF6G9iXS8xrnRBMOY4wxxhhjjDHGGBtff5WUzptatES/AAAAAElFTkSuQmCC",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB7drtcYJQEIXhxYqMVmAlYmXBUtKAWhE3HBmJTJCv3bvLj/PMJJkEQ5hXQ8JeRIiIiIiIiIiIaEg6Hs/pcPiWYDiGtN+fxUghBhBH6rpq91hUxe12kQDPJyilsv0klcXjcRUldaBenG6v/pF6cbov6iOpAg3G6fbsF2kwTrdRF2knGnV9+ritOTCPc9JonNZJFPS/Yl9fVfPh80kx4ytpMk5K1+bVU4qCzUk6IJJHHDAJBJ6RvOKAWSDwiOQZB0wDQc5I3nHAPBDkiBQRB7IEAstIUXEgWyCwiBQZB7IGAk2k6DiQPRCsibSFOOASCJZE2kqc52GJozmR2gduIw64BoLJSKPf7BsH3APBqkgBcSAkECyKFBQHwgLBrEiBcUA3MNMqijT5mN1u+jEZxf2KTU8C/wQuBMScpJfEeQmK5P9nfk2cl4BIruegOf8hN++vI9tdFgLe+V1qLLh8iFwI+PejxMGaa6utRMo/7lBceG4hUt6BmcFVeXSkfCNXw5FFZKQ8Q/sM85yoSPbLPhmHXRGRbBcOHSaB3pHslp4dx6SekWxuXgiYIXtF0t/+Ejhg94iku8NsA6sPuSNp7zD7+bjNa93qfi9l7AJ37Bjn7F+U0n5fNs9S/wo7YEw6+EpK6dIcRyUKNifp90iBM+ReJIM4phCpeaskGCI9nzAiIiIiIiIiIhryC44c/jxJReSrAAAAAElFTkSuQmCC",w=(n(26),n(13)),I=n(14),B=n(17),E=n(16),Q=(n(27),n(15)),U=n.n(Q),R=function(e){Object(B.a)(n,e);var t=Object(E.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(l.jsx)(U.a,{type:"Bars",color:"#04AA6D",height:30,width:200})}}]),n}(s.a.Component),J=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)("$0.00"),o=Object(i.a)(r,2),u=o[0],d=o[1],w=Object(a.useState)("$0.60"),I=Object(i.a)(w,2),B=I[0],E=I[1],Q=Object(a.useState)("Pending"),U=Object(i.a)(Q,2),J=U[0],F=U[1],q=Object(a.useState)("$0.00"),L=Object(i.a)(q,2),P=L[0],G=L[1],D=Object(a.useState)(""),M=Object(i.a)(D,2),K=M[0],Y=M[1],T=Object(a.useState)([]),H=Object(i.a)(T,2),V=H[0],X=H[1],W=Object(a.useState)(""),Z=Object(i.a)(W,2),z=Z[0],$=Z[1],_=Object(a.useState)([]),ee=Object(i.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)([]),se=Object(i.a)(ae,2),ce=se[0],re=se[1],ie=Object(a.useState)(!1),oe=Object(i.a)(ie,2),le=oe[0],ue=oe[1],je=Object(a.useState)(!1),be=Object(i.a)(je,2),de=be[0],me=be[1],pe=Object(a.useState)(0),Oe=Object(i.a)(pe,2),xe=Oe[0],fe=Oe[1],ge=Object(a.useState)(0),ve=Object(i.a)(ge,2),he=ve[0],Ae=ve[1],Ne=Object(a.useState)(0),ke=Object(i.a)(Ne,2),Se=ke[0],Ce=ke[1],ye=Object(a.useState)(0),we=Object(i.a)(ye,2),Ie=we[0],Be=we[1],Ee=Object(a.useState)(0),Qe=Object(i.a)(Ee,2),Ue=Qe[0],Re=Qe[1],Je=[{indicator:xe,setter:fe},{indicator:he,setter:Ae},{indicator:Se,setter:Ce},{indicator:Ie,setter:Be},{indicator:Ue,setter:Re}],Fe=Object(a.useState)(!1),qe=Object(i.a)(Fe,2),Le=qe[0],Pe=qe[1],Ge=Object(a.useState)(!1),De=Object(i.a)(Ge,2),Me=De[0],Ke=De[1],Ye=Object(a.useState)(""),Te=Object(i.a)(Ye,2),He=Te[0],Ve=Te[1];Object(a.useEffect)((function(){Xe()}),[]);var Xe=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(!0),e.next=3,O(N+"/inventory");case 3:t=e.sent,(n=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e})),re(n),ne(n),ue(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(N+"/inventoryRow",{code:t});case 2:return n=e.sent,e.abrupt("return",n.data.row);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(e,t){(isNaN(parseInt(t))||parseInt(t)<0)&&(t=0);var n=Object(b.a)(V);n.map((function(n){return n.obj.code===e&&(n.qty=t),n})),X(n);var a="$0.00";n.forEach((function(e){for(var t=0;t<e.qty;t++)a=A(a,e.obj.price)})),S(a,d)},ze=function(e){Ve(e),Ke(!0)},$e=function(){var t=Object(p.a)(m.a.mark((function t(){var n,a,c,r,i,o,l,j,b,p,S,C,y,w,I,Q,U,R,F,q,L;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,me(!1),Pe(!0),Ke(!1),Ve(""),n=0;case 5:if(!(n<V.length)){t.next=14;break}if(a=V[n],/^[1-9]\d*$/.test(a.qty)){t.next=11;break}return ze("Invalid quantity!"),Pe(!1),t.abrupt("return");case 11:n++,t.next=5;break;case 14:if(d("$"===u?"$0.00":u),G("$"===P?"$0.00":P),E("$"===B?"$0.00":B),h(u)){t.next=21;break}return ze("Invalid amount!"),Pe(!1),t.abrupt("return");case 21:if(h(P)){t.next=25;break}return ze("Invalid tips!"),Pe(!1),t.abrupt("return");case 25:if(h(B)){t.next=29;break}return ze("Invalid stamps!"),Pe(!1),t.abrupt("return");case 29:return me(!1),fe(0),Ae(0),Ce(0),Be(0),Re(0),me(!0),t.next=33,k(K);case 33:if(t.sent){t.next=38;break}return fe(2),Pe(!1),t.abrupt("return");case 38:fe(1),c=m.a.mark((function e(t){var n,a,s,c,r,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V[t],e.next=3,We(n.obj.code);case 3:return a=e.sent,e.next=6,x(N+"/inventoryGetLoc",{row:a});case 6:if(s=e.sent,u=s.data.inventoryLoc,c="NA"===u?[]:u.split(",").map((function(e){return e.trim()})).map((function(e){var t=e.split("(")[0],n=e.split("(")[1].split(")")[0];return{name:t,qty:parseInt(n)}})),!1,r=!0,c.forEach((function(e){e.name.toUpperCase()===K.toUpperCase()&&e.qty>=n.qty&&(r=!1)})),!r){e.next=15;break}return Ae(2),Pe(!1),e.abrupt("return",{v:void 0});case 15:return Ae(1),i=c.map((function(e){return e.name.toUpperCase()===K.toUpperCase()?{name:e.name,qty:e.qty-n.qty}:e})).filter((function(e){return e.qty>0})),o=0===(l=i).length?"NA":l.map((function(e){return e.name+"("+e.qty+")"})).join(", "),e.next=20,x(N+"/inventoryUpdateLoc",{row:a,location:o});case 20:case"end":return e.stop()}var l,u}),e)})),r=0;case 41:if(!(r<V.length)){t.next=49;break}return t.delegateYield(c(r),"t0",43);case 43:if("object"!==typeof(i=t.t0)){t.next=46;break}return t.abrupt("return",i.v);case 46:r++,t.next=41;break;case 49:Ce(1),o=f(),l=0;case 52:if(!(l<V.length)){t.next=81;break}return j=V[l],t.next=56,O(N+"/orders");case 56:return b=t.sent,p=b.data.lastInvoiceNumber,S=g(p),C={code:j.obj.code,customer:s,invoice_number:S,invoice_date:o,qty:j.qty,amt:0===l?u:"$0.00",tips:P,stamps:B,remarks:J,bossName:K.toUpperCase(),cog:j.obj.cost},t.next=62,x(N+"/order",C);case 62:if("$0.00"===P){t.next=66;break}return y={customer:s,invoice_number:S,tipAmount:P},t.next=66,x(N+"/addTips",y);case 66:return t.next=68,O(N+"/cce_in");case 68:return w=t.sent,(I=w.data.lastCashInIndex).startsWith("CI")||(I="CI000"),Q=w.data.row,U=v(I),R="Sales - "+S,F=parseInt(Q)+1,q={indexNumber:U,date:o,description:R,amount:0===l?A(u,P):"$0.00",row:F},t.next=78,x(N+"/cce_in",q);case 78:l++,t.next=52;break;case 81:Be(1),Re(1),Pe(!1),e.navigate("orderSubmitted"),t.next=97;break;case 87:t.prev=87,t.t1=t.catch(0),t.t2=m.a.keys(Je);case 90:if((t.t3=t.t2()).done){t.next=97;break}if(0!==(L=t.t3.value).indicator){t.next=95;break}return L.setter(2),t.abrupt("break",97);case 95:t.next=90;break;case 97:case"end":return t.stop()}}),t,null,[[0,87]])})));return function(){return t.apply(this,arguments)}}(),_e=function(e){var t=V.filter((function(t){return t.obj.code!==e}));X(t);var n="$0.00";t.forEach((function(e){n=A(n,e.obj.price)})),S(n,d)};return le?Object(l.jsx)(R,{}):Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("span",{className:"form-header",children:"Order Form"}),Object(l.jsx)("span",{className:"form-label",children:"Customer's name"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Search Item"}),Object(l.jsx)("input",{className:"input-box",placeholder:"Start typing to search...",type:"text",value:z,onChange:function(e){return function(e){$(e);var t=z.split(" "),n=ce.filter((function(e){var n,a=Object(j.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){a.e(c)}finally{a.f()}return V.filter((function(t){return t.code===e.code})).length<=0}));ne(n)}(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Selected Items"}),""!==z&&te.map((function(e){return Object(l.jsx)("div",{className:"search-item-row",onClick:function(){return function(e){var t={obj:e,qty:1},n=[].concat(Object(b.a)(V),[t]);X(n),S(A(u,e.price),d),$("")}(e)},children:Object(l.jsx)("span",{className:"search-item-name",children:e.name})})})),V.length>0&&function(){var e=V.map((function(e){for(var t=e.obj.code,n="",a=0;a<t.length;a++)if(0!==n.length&&t.length!==a+1){var s=n.slice(-1),c=t[a];s.match(/[0-9|a-z]/)&&c.match(/[A-Z]/)&&(n+="\n"),n+=t[a]}else n+=t[a];return{processedWord:n=n.replaceAll("NA",""),code:t}}));return Object(l.jsx)("div",{className:"selected-code-list",children:e.map((function(e){return Object(l.jsxs)("div",{className:"selected-code-modal",children:[Object(l.jsxs)("div",{className:"qty-container",children:[Object(l.jsx)("span",{className:"form-label",children:"Name"}),Object(l.jsx)("span",{className:"selected-item-name",children:e.processedWord})]}),Object(l.jsxs)("div",{className:"qty-container",children:[Object(l.jsx)("span",{className:"form-label",children:"Qty"}),Object(l.jsx)("input",{className:"qty-input",type:"number",defaultValue:1,onChange:function(t){return Ze(e.code,t.target.value)}})]}),Object(l.jsx)("div",{className:"remove-selection",onClick:function(){return _e(e.code)},children:Object(l.jsx)("img",{src:y,className:"remove-selection-icon",alt:"logo"})})]})}))})}(),0===V.length&&Object(l.jsx)("div",{className:"selected-code-modal",children:Object(l.jsx)("span",{className:"form-label",children:"No Items Selected!"})}),Object(l.jsx)("span",{className:"form-label",children:"Net Amount (After discount)"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:u,onChange:function(e){return S(e.target.value,d)}}),Object(l.jsx)("span",{className:"form-label",children:"Stamp value"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:B,onChange:function(e){return S(e.target.value,E)}}),Object(l.jsx)("span",{className:"form-label",children:"Remarks"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:J,onChange:function(e){return F(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Tips"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:P,onChange:function(e){return S(e.target.value,G)}}),Object(l.jsx)("span",{className:"form-label",children:"Boss in-charge of Sale"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return Y(e.target.value)}}),Me&&function(e){return Object(l.jsx)("span",{className:"warning-message",children:e})}(He),de&&Object(l.jsxs)("div",{className:"status-messages-container",children:[Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Boss correct"}),1===xe&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===xe&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"In stock"}),1===he&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===he&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Updating inventory"}),1===Se&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Se&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Submitting order"}),1===Ie&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Ie&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===Ue&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===Ue&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]})]}),""!==s&&""!==u&&""!==B&&""!==K&&!1===Le?Object(l.jsx)("div",{className:"form-button",onClick:$e,children:"Submit Order"}):Le?Object(l.jsx)(R,{}):Object(l.jsx)("div",{className:"form-button-inactive",children:"Submit Order"})]})},F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ds9TsNAEIbhsZML0SDKcAcURJkecQXMDZBCQUuJwiGghFPkCDRUJDYeS5ZA5Mc/uzs7s98rRYqUKo9Wtjy7JkIIIYQQQgghlHTT1c0tfyiiJhRJDUxVFfXXWT4/o3L1/kYRFAXQL5y2aJDEgXbgtEWBlJFgB3CaKqL19mtyQov7TxJqSkJ1wtl+n9NiKYbDiaygzjhXj2sSLjiQJhwuKJA2HC4YkEYcLgiQVhzOO5BmHM4rkHYczhuQBRzOC5AVHM45kCUczimQNRzOGZBFHM4JkFUcbjSQZRxuFJB1HG4w0DGcWNvMl73+c04D0oozpN5AKeFw/VdQWYrOsUPXG2hz+VDUK+iOEmnQNSglpHG3+efrgrJs71Zx0rf5NutIbh41DCO5e1g1iuR23GEQyf3AzBiSn5GrISR/Q3sjSH63fQwg+d84VI4UZutZMVK4wwtKkcIef1GIFP4AlTIkmSN4ipDEpoNakGSPAXdBEj4GPGii6Kpjk8msqp4kcTjxk/bly8drfnGa1Stp9ueHGq4BFC6KdzX+IUWCE118TWquSwghhBBCCCGEku4HHpamW3EISkEAAAAASUVORK5CYII=",q=function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"button-containers",children:Object(l.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:F,className:"back-button interactive",alt:"back"})})}),Object(l.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(l.jsx)(J,{navigate:e.navigate})]})},L=(n(48),n(49),function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(l.jsx)("span",{className:"submitted-message",children:"Submitted!"}),Object(l.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(l.jsx)("div",{className:"button",children:"Back to Homepage"})})]})}),P=(n(50),function(e){return 0===e.inventoryList.length?Object(l.jsx)("div",{className:"inventory-list",children:Object(l.jsx)("div",{className:"inventory-list-row",children:"No results found!"})}):Object(l.jsx)("div",{className:"inventory-list",children:e.inventoryList.map((function(t){return Object(l.jsxs)("div",{className:"inventory-list-row",onClick:function(){return e.elementOnClick(t.code)},children:[Object(l.jsx)("div",{className:"inventory-code",children:t.name}),Object(l.jsx)("div",{className:"inventory-location",children:t.loc})]})}))})}),G=(n(51),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZtNcts2FIAfSCpVf6ZVb6CcwD6CcoLGizrJKva2k9rKCSqfoE7tdrqLusrU7YzbE0Q9QZ0bKDfQJpmMSeDlPfonfyBFACQAJfp2Bi0L8xF4eA+AAdasWfMpkf219xNERAKxgTiJSVJ8gpiIJMUpiIlEUryCmAgkxS2ICSwpfkFMQEmrIYgJJGl1BDEBJAkIwePxIO3L2yJLNgDVEAE2qXVAnRk0+rwQk+L7Xw7AA/4EkZTsK7VPw2AECCNwxZOk7gVdikHEceMR0hQPkjLoEI4XiHJMI2bQyZtQqvMX3M0XPBkPs1Sd0nTahK5APCjuHE+gY1pfxXp/791PU/n/xyCHaVVQOaUUTpvEGlq55qDEI5Swm8n8ZvEi/bbYPlo+oj3KYVqLQWV+QnnKst8jMVMh8Q9573h21SahIZ7lMK0I4mlFI2dS+0sCZ0VR7MK93+dgQwA5jLsgCshKycOquUEjZpEodZDf/fUQbAkkh3EWRAH5aVXM4TgjQW7Ju7+dgS0B5TBOQZrjDskZ6p6VcmR+C7YDyqHRnZ78uAMO2AuiL68KyjytSjm28ab8Iy3IuRjdP3M2D5ZYC0p7srKq5pgTiZwh/TTIvijGYImdIOqAULCje8TLeNCA/K6cC4TYtx1FVoKoA6OqZzS1nIpH14D8gZwLBr3P8x2wwEqQELiva+fR4zS12kG7KGCafAcWmAsqg7PQ1lmcIUNgqA+PtA94D8pimhkLqppevKwXb5UPobjsw0L3LP3y/DYYYixIVFfpM4gG/UgWKjHeYTCfYkJsaNsL/BciAUFUJKdiCIYYC0LUZ84JqjlEgpTpTNeOCWyAIRZTTC8oP78xh1jo62OQzZ54extmu4cLiIWtyr4EFPSRYiNI/3YcCsLWOW2vL+ZBukJQ/+v8G4iF/Hyoay73wQ0xH0GJPpXPJd6CSEgxGeraqUSagyHmq5jC5/p28ySsM1Khr7skPANDLKaYPgnDRFgVg52g9Gf/iMJ4d9NYkOyl/+jaOT/KnjwYQWC4D1W5moR8BoaYxyDOMYS+7sKeuA+Bqe4DjR6LrRi7/SCp9HWXauFaiwt1O51V2yBLsBKUf9abwnvL/fUphgOut8fq9sltphdjl0nzNMM3b+RajsNuYtOj6yp6J3v7dfvktn2zLjWKGxlvzC9ikFOe7kL15132ye1rMRpFKOFhDHLqTnf5lMSlf2EucV6ik9PoCswVJz9sppCe1p7ubh/dBAeCVfNtxByS87RGzsJ10WA6vaNY+aUucvh6XyYfI+KobqjRm38oWziC8i7IVg5nyJwECiV3eHjUQnEnv3M8hRbwKqixHNpb6vdfDXLojfiyOaLi4xpOApfT8nUZb0HaebVaQnlRi6ZVvn00hRbxIqhrOVxnFfJ8q4tj784FdSmHR42gjL7LG2jdxyC+DS/afQ9XYuRLyuY7Pk3xM8X+fDAhSe7/xiRwRjsG/xUexFx/JXjCRNLlwcBCAJ6BSp5TznMmX9FGXYCzN6+lRhNJRqWGB7yWGmUw5eJxhfBei62apCDF6ipJClbNr4qkoJcXVkFS8NsdsUuK4vrLKq5uQSjzpDVr1nxKvAYFe2fAvbZPWwAAAABJRU5ErkJggg=="),D=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),u=Object(i.a)(r,2),b=u[0],d=u[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),v=g[0],h=g[1],A=Object(a.useState)(""),k=Object(i.a)(A,2),S=(k[0],k[1]),C=Object(a.useState)(""),w=Object(i.a)(C,2),I=w[0],B=w[1],E=Object(a.useState)([]),Q=Object(i.a)(E,2),U=Q[0],J=Q[1],q=Object(a.useState)(!0),L=Object(i.a)(q,2),D=L[0],M=L[1];Object(a.useEffect)((function(){K()}),[]);var K=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,O(N+"/inventory");case 3:t=e.sent,(n=t.data.allInventories).map((function(e){return e.name=e.code,e.name=e.name.replaceAll("NA",""),e.name=e.name.replaceAll("Phone accessories",""),e.name=e.name.replaceAll("Airpods case",""),e.name=e.name.replaceAll("Phone case",""),e})),console.log(n),d(n),c(n),h(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B("a"),M(!0),n={code:t},e.next=5,x(N+"/indicator",n);case 5:a=e.sent,s=a.data.allIndicators.map((function(e){return 0===e.replaceAll(/\s/g,"").length?0:e})),c=[{name:"Units Sold",val:s[0]},{name:"Stock in Qty Units",val:s[1]},{name:"Restock Count",val:s[2]},{name:"Margin",val:s[3]}],J(c),B(t),M(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"button-containers",children:[Object(l.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:F,className:"back-button interactive",alt:"back"})}),Object(l.jsx)("div",{className:"refresh-button-container",onClick:K,children:Object(l.jsx)("img",{src:G,className:"refresh-button interactive",alt:"refresh"})})]}),Object(l.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),!v&&Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return function(e){if(S(e),""!==e){var t=e.split(" "),n=b.filter((function(e){var n,a=Object(j.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(!e.code.toLowerCase().includes(s.toLowerCase()))return!1}}catch(c){a.e(c)}finally{a.f()}return!0}));c(n)}}(e.target.value)}}),""!==I?D?Object(l.jsx)(R,{}):Object(l.jsxs)("div",{className:"inv-selected-code-modal",children:[Object(l.jsxs)("div",{className:"inv-selected-code-heading",children:[Object(l.jsx)("span",{className:"inv-selected-item-name",children:I}),Object(l.jsx)("div",{className:"inv-remove-selection",onClick:function(){B("")},children:Object(l.jsx)("img",{src:y,className:"remove-selection-icon",alt:"logo"})})]}),Object(l.jsx)("div",{className:"indicator-container",children:U.map((function(e){return Object(l.jsxs)("div",{className:"indicator-column",children:[Object(l.jsx)("div",{className:"indicator-header",children:e.name}),Object(l.jsx)("div",{className:"indicator-value",children:e.val})]})}))})]}):null,Object(l.jsx)("div",{className:"inventory-list-container",children:v?Object(l.jsx)(R,{}):Object(l.jsx)(P,{inventoryList:s,elementOnClick:Y})})]})},M=(n(52),n(53),function(e){var t=["Advertising","Postage & Packaging","Office supplies","Salary","Transport claims","Staff welfare"],n=Object(a.useState)(t[0]),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),j=u[0],b=u[1],d=Object(a.useState)("-"),g=Object(i.a)(d,2),A=g[0],w=g[1],I=Object(a.useState)(f()),B=Object(i.a)(I,2),E=B[0],Q=B[1],U=Object(a.useState)(""),J=Object(i.a)(U,2),F=J[0],q=J[1],L=Object(a.useState)("$0.00"),P=Object(i.a)(L,2),G=P[0],D=P[1],M=Object(a.useState)(""),K=Object(i.a)(M,2),Y=K[0],T=K[1],H=Object(a.useState)(!1),V=Object(i.a)(H,2),X=V[0],W=V[1],Z=Object(a.useState)(0),z=Object(i.a)(Z,2),$=z[0],_=z[1],ee=Object(a.useState)(0),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],se=[{indicator:$,setter:_},{indicator:ne,setter:ae}],ce=Object(a.useState)(!1),re=Object(i.a)(ce,2),ie=re[0],oe=re[1],le=Object(a.useState)(!1),ue=Object(i.a)(le,2),je=ue[0],be=ue[1],de=Object(a.useState)(""),me=Object(i.a)(de,2),pe=me[0],Oe=me[1],xe=function(e){Oe(e),be(!0)},fe=function(){var t=Object(p.a)(m.a.mark((function t(){var n,a,s,r,i,o,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,W(!1),oe(!0),be(!1),Oe(""),h(G)){t.next=8;break}return xe("Invalid amount!"),oe(!1),t.abrupt("return");case 8:return W(!1),_(0),ae(0),W(!0),t.next=12,k(Y);case 12:if(t.sent){t.next=17;break}return _(2),oe(!1),t.abrupt("return");case 17:return _(1),n={category:c,paid_to:j,invoice_no:A,date:E,description:F,amount:G},t.next=21,x(N+"/expense",n);case 21:return t.next=23,O(N+"/cce_out");case 23:return a=t.sent,(s=a.data.lastCashOutIndex).startsWith("CO")||(s="CO000"),r=a.data.row,i=v(s),o=parseInt(r)+1,l={indexNumber:i,date:E,description:F,amount:G,remarks:F,row:o},t.next=32,x(N+"/cce_out",l);case 32:ae(1),oe(!1),e.navigate("orderSubmitted"),t.next=47;break;case 37:t.prev=37,t.t0=t.catch(0),t.t1=m.a.keys(se);case 40:if((t.t2=t.t1()).done){t.next=47;break}if(0!==(u=t.t2.value).indicator){t.next=45;break}return u.setter(2),t.abrupt("break",47);case 45:t.next=40;break;case 47:case"end":return t.stop()}}),t,null,[[0,37]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("span",{className:"form-header",children:"Expense Form"}),Object(l.jsx)("span",{className:"form-label",children:"Category"}),Object(l.jsx)("select",{name:"category",id:"categories",onChange:function(e){return r(e.target.value)},children:t.map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))}),Object(l.jsx)("span",{className:"form-label",children:"Paid To"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Invoice no (If applicable)"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:A,onChange:function(e){return w(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Date"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:E,onChange:function(e){return function(e){3===e.split("/").length&&Q(e)}(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Description"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return q(e.target.value)}}),Object(l.jsx)("span",{className:"form-label",children:"Amount"}),Object(l.jsx)("input",{className:"input-box",type:"text",value:G,onChange:function(e){return S(e.target.value,D)}}),Object(l.jsx)("span",{className:"form-label",children:"Boss in-charge"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return T(e.target.value)}}),je&&function(e){return Object(l.jsx)("span",{className:"warning-message",children:e})}(pe),X&&Object(l.jsxs)("div",{className:"status-messages-container",children:[Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Boss correct"}),1===$&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===$&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]}),Object(l.jsxs)("div",{className:"status-message-row",children:[Object(l.jsx)("span",{className:"status-message",children:"Updating accounts"}),1===ne&&Object(l.jsx)("img",{src:C,className:"status-icon",alt:"logo"}),2===ne&&Object(l.jsx)("img",{src:y,className:"status-icon",alt:"logo"})]})]}),""!==c&&""!==j&&""!==F&&""!==G&&""!==Y&&!1===ie?Object(l.jsx)("div",{className:"form-button",onClick:fe,children:"Submit Expense"}):ie?Object(l.jsx)(R,{}):Object(l.jsx)("div",{className:"form-button-inactive",children:"Submit Expense"})]})}),K=function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(l.jsx)(M,{navigate:e.navigate})]})},Y=n(9),T=(n(54),n(55),function(e){if(0===e.pendingOrdersList.length)return Object(l.jsx)("div",{className:"pending-orders-list",children:Object(l.jsx)("div",{className:"pending-orders-list-row",children:"No Pending orders!"})});var t=e.isMobile?"pending-order-code-mobile":"pending-order-code";return Object(l.jsx)("div",{className:"pending-orders-list",children:e.pendingOrdersList.map((function(n){var a="checkbox-"+n.row;return Object(l.jsxs)("div",{className:"pending-orders-list-row-container",children:[Object(l.jsxs)("div",{className:"pending-order-list-row",children:[Object(l.jsx)("div",{className:t,children:n.code}),Object(l.jsx)("div",{className:"pending-order-qty",children:"x"+n.qty}),Object(l.jsx)("div",{className:"pending-order-name",children:n.name+" ("+n.boss+")"})]}),Object(l.jsx)("div",{className:"checkbox-container",onClick:function(t){return e.elementOnClick({row:n.row,val:t.target.checked})},children:Object(l.jsx)("input",{type:"checkbox",id:a,checked:n.selected,className:"checkbox"})},a)]},n.row)}))})}),H=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),u=Object(i.a)(r,2),j=u[0],d=u[1],f=Object(a.useState)(""),g=Object(i.a)(f,2),v=g[0],h=g[1],A=Object(a.useState)(!1),S=Object(i.a)(A,2),C=S[0],y=S[1],w=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||document.documentElement.clientWidth<400;Object(a.useEffect)((function(){I()}),[]);var I=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,O(N+"/pendingOrders");case 3:t=e.sent,(n=t.data.allPendingOrders).map((function(e){return e.selected=!1,e})),d(n),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var t=Object(p.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,k(v);case 3:if(t.sent){t.next=7;break}return y(!1),t.abrupt("return");case 7:return n=E().map((function(e){return e.row})),a={rows:n},t.next=11,x(N+"/pendingOrders",a);case 11:y(!1),e.navigate("orderSubmitted");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){return j.filter((function(e){return e.selected}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"button-containers",children:[Object(l.jsx)("div",{className:"back-button-container",onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:F,className:"back-button interactive",alt:"back"})}),Object(l.jsx)("div",{className:"refresh-button-container",onClick:I,children:Object(l.jsx)("img",{src:G,className:"refresh-button interactive",alt:"refresh"})})]}),Object(l.jsx)("div",{className:"logo-container interactive",onClick:function(){return e.navigate("")},children:Object(l.jsx)("img",{src:o,className:"submit-order-app-logo",alt:"logo"})}),Object(l.jsx)("div",{className:"form-button",onClick:function(){var e=Object(b.a)(j);d(e.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{selected:!0})})))},children:"Select All Orders"}),Object(l.jsx)("div",{className:"pending-orders-list-container",children:s?Object(l.jsx)(R,{}):Object(l.jsx)(T,{pendingOrdersList:j,isMobile:w,elementOnClick:function(e){var t=e.row,n=e.val,a=j.map((function(e){return e.row===t?Object(Y.a)(Object(Y.a)({},e),{},{selected:n}):e}));d(a)}})}),Object(l.jsxs)("div",{className:"boss-container",children:[Object(l.jsx)("span",{className:"form-label",children:"Boss"}),Object(l.jsx)("input",{className:"input-box",type:"text",onChange:function(e){return h(e.target.value)}})]}),""!==v&&!1===C&&0!==E().length?Object(l.jsx)("div",{className:"form-button",onClick:B,children:"Clear Pending Orders"}):C?Object(l.jsx)(R,{}):Object(l.jsx)("div",{className:"form-button-inactive",children:"Clear Pending Orders"})]})};var V=function(){var e=Object(a.useState)(function(){var e=window.location.href.split("/");return e[e.length-1]}()),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsx)("div",{className:"App",children:function(e){var t=e.split("/");switch(t[t.length-1]){case"":return Object(l.jsx)(u,{navigate:s});case"checkInventory":return Object(l.jsx)(D,{navigate:s});case"pendingOrders":return Object(l.jsx)(H,{navigate:s});case"submitOrder":return Object(l.jsx)(q,{navigate:s});case"addExpenses":return Object(l.jsx)(K,{navigate:s});case"orderSubmitted":return Object(l.jsx)(L,{navigate:s});default:return Object(l.jsx)(u,{navigate:s})}}(n)})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b31e0fab.chunk.js.map