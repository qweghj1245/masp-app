(this["webpackJsonpmask-app"]=this["webpackJsonpmask-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/Icon_location_red.abc33708.svg"},21:function(e,t,n){e.exports=n.p+"static/media/Icon_location_orange.359a86cc.svg"},22:function(e,t,n){e.exports=n.p+"static/media/Icon_location_green.b0317730.svg"},23:function(e,t,n){e.exports=n.p+"static/media/Icon_search.7bf22ceb.svg"},24:function(e,t,n){e.exports=n.p+"static/media/img_bg_orange.0a9c376b.svg"},26:function(e,t,n){e.exports=n(83)},31:function(e,t,n){},33:function(e,t,n){},73:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=(n(31),n(25)),l=n(5),s=n.n(l),u=n(17),m=n(4),d=(n(33),n(18)),f=n.n(d),p=(n(55),n(19)),v=n.n(p),g=(n(73),n(3)),h=(n(74),n(75),n(76),n(20)),b=n.n(h),E=n(21),w=n.n(E),y=n(22),x=n.n(y),N=function(e){var t=e.allPlace,n=e.latitude,r=e.longitude,o=e.init,i=function(e,t){var n=e+t,a=g.icon({iconUrl:b.a,iconAnchor:[25,15]}),c=g.icon({iconUrl:w.a,iconAnchor:[25,15]}),r=g.icon({iconUrl:x.a,iconAnchor:[25,15]});return n<50?a:n>=50&&n<100?c:r},l=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=new g.LatLng(n,r);if(t.length&&n&&r){l.current=g.map("map",{center:e,zoom:18}),g.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(l.current);var a=new g.MarkerClusterGroup;l.current.addLayer(a),t.forEach((function(e,t){var c=new g.LatLng(e.geometry.coordinates[1],e.geometry.coordinates[0]),l=g.popup({minWidth:209,maxWidth:209}).setLatLng(c).setContent("\n            <div>\n              <div class='font-bold fz-16 text-333 mb-4'>".concat(e.name,"</div>\n              <div class='fz-12 text-left mb-4'>").concat(e.address,"</div>\n              <div class='fz-12 text-left mb-4'>\u71df\u696d\u6642\u9593\uff5c").concat(e.note||"\u7121\u6a19\u793a","</div>\n              <div class='fz-12 text-left mb-4'>\u9023\u7d61\u96fb\u8a71\uff5c").concat(e.phone,"</div>\n              <div class='fz-12 text-left text-CCC mb-8'>\u8cc7\u8a0a\u66f4\u65b0\u65bc ").concat(e.updated,"</div>\n              <div class='flex-row mb-8'>\n                <div class='orange mr-8'>\u6210\u4eba\u53e3\u7f69 ").concat(e.adultCount,"\u500b</div>\n                <div class='yellow'>\u5152\u7ae5\u53e3\u7f69 ").concat(e.childCount,'\u500b</div>\n              </div>\n              <div class="google google-').concat(t,'">Google \u8def\u7dda\u5c0e\u822a</div>\n            </div>\n          ')),s=g.marker(c,{icon:i(e.mask_adult,e.mask_child)});a.addLayer(s),s.bindPopup(l).on("click",(function(){l.openPopup()})).on("popupopen",(function(){var n=document.querySelector(".google-".concat(t));n&&n.addEventListener("click",(function(){window.open("https://www.google.com/maps/search/?api=1&query=".concat(e.geometry.coordinates[1],",").concat(e.geometry.coordinates[0]))}))})),e.geometry.coordinates[1]!==n||e.geometry.coordinates[0]!==r||o||s.openPopup()}))}return function(){l.current&&l.current.remove()}}),[t,n,r,o]),c.a.createElement("div",{id:"map"})},k=(n(77),n(78),c.a.memo((function(e){var t=e.isTab,n=e.children,a=e.click;return c.a.createElement("div",{className:"tab ".concat(t?"active":""),onClick:a},n)}),(function(){return!1}))),j=(n(79),n(23)),C=n.n(j),O=c.a.memo((function(e){var t=e.getValue;return c.a.createElement("div",{className:"input-wrap"},c.a.createElement("img",{src:C.a,alt:"",className:"icon-search"}),c.a.createElement("input",{type:"text",className:"search",placeholder:"\u8acb\u8f38\u5165\u5730\u5740",onChange:t}))}),(function(){return!0})),S=c.a.memo((function(e){var t=e.setTab,n=e.getTab,a=e.isSelect,r=e.search;return c.a.createElement("div",{className:"search-box"},c.a.createElement(O,{getValue:function(e){r(e.target.value)}}),c.a.createElement("div",{className:"tabs"},["\u6240\u6709\u53e3\u7f69","\u6210\u4eba\u53e3\u7f69","\u5152\u7ae5\u53e3\u7f69"].map((function(e){return c.a.createElement(k,{key:e,isTab:a===e,click:function(){return function(e){t(e),n(e)}(e)}},e)}))))}),(function(){return!1})),_=n(6),L=n.n(_),z=(n(81),n(24)),P=n.n(z),T=c.a.memo((function(){return c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:P.a,alt:""}),c.a.createElement("div",null,L()(Date.now()).format("YYYY - MM - DD")),c.a.createElement("div",null,"\u661f\u671f",function(){switch(L()().day()){case 0:return"\u65e5";case 1:return"\u4e00";case 2:return"\u4e8c";case 3:return"\u4e09";case 4:return"\u56db";case 5:return"\u4e94";case 6:return"\u516d"}}()),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"inline"},"\u8eab\u5206\u8b49\u672b\u4e00\u78bc",c.a.createElement("span",null,"\u5076\u6578"),"\u5b57\u865f\u8005\u53ef\u8cfc\u8cb7\u53e3\u7f69")),c.a.createElement("div",null,"\u203b\u4e00\u9031\u9650\u8cfc\u4e00\u6b21\uff0c\u6bcf\u6b21\u4e00\u4eba\u9650\u8cfc\u5169\u7247"))}),(function(){return!0})),I=(n(82),c.a.memo((function(e){var t=e.place,n=e.isSelect,a=void 0===n?"\u6240\u6709\u53e3\u7f69":n,r=e.setPosition,o=function(){return t.adultCount+t.childCount};return c.a.createElement("div",{className:"place-box",onClick:function(){return r(t)}},c.a.createElement("div",{className:"font-bold fz-16 text-333 mb-4"},t.title),c.a.createElement("div",{className:"mb-4"},t.address),c.a.createElement("div",{className:"fz-12 mb-8"},"\u71df\u696d\u6642\u9593\uff5c",t.note||"\u7121\u6a19\u793a"),c.a.createElement("div",{className:"flex-row"},("\u6240\u6709\u53e3\u7f69"===a||"\u6210\u4eba\u53e3\u7f69"===a)&&t.adultCount>0?c.a.createElement("div",{className:"flex-row justify-between orange mr-8"},c.a.createElement("div",{className:"text"},"\u6210\u4eba\u53e3\u7f69"),c.a.createElement("div",{className:"text"},t.adultCount,"\u500b")):"\u5152\u7ae5\u53e3\u7f69"===a||0===o()?null:c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"),("\u6240\u6709\u53e3\u7f69"===a||"\u5152\u7ae5\u53e3\u7f69"===a)&&t.childCount>0?c.a.createElement("div",{className:"flex-row justify-between yellow"},c.a.createElement("div",{className:"text"},"\u5152\u7ae5\u53e3\u7f69"),c.a.createElement("div",{className:"text"},t.childCount,"\u500b")):"\u6210\u4eba\u53e3\u7f69"===a||0===o()?null:c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"),0===o()?c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"):null),o()>0?c.a.createElement("div",{className:"triangle ".concat(function(e,t){var n=e+t;return n>100?"green":n>=50&&n<100?"oranges":"red"}(t.adultCount,t.childCount))}):null)}),(function(){return!1}))),A=function(){var e=Object(a.useState)({latitude:0,longitude:0,init:!0}),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),l=Object(m.a)(o,2),d=l[0],p=l[1],g=Object(a.useState)([]),h=Object(m.a)(g,2),b=h[0],E=h[1],w=Object(a.useState)("\u6240\u6709\u53e3\u7f69"),y=Object(m.a)(w,2),x=y[0],k=y[1],j=Object(a.useState)(""),C=Object(m.a)(j,2),O=C[0],_=C[1],L=Object(a.useState)({start:30,end:0}),z=Object(m.a)(L,2),P=z[0],A=z[1],D=function(e){r({latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0],init:!1})};return Object(a.useEffect)((function(){Promise.all([void navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({latitude:t.coords.latitude,longitude:t.coords.longitude,init:!0}),p(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(p(!0),void v.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){var t=e.data.features.map((function(e){return Object(i.a)({geometry:e.geometry},e.properties,{title:e.properties.name,adultCount:e.properties.mask_adult,childCount:e.properties.mask_child})}));E(t)})).catch((function(){alert("\u7cfb\u7d71\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u91cd\u8a66"),p(!1)})))])}),[]),c.a.createElement(c.a.Fragment,null,d?c.a.createElement("div",{className:"relative"},c.a.createElement(f.a,{type:"ThreeDots",color:"orange",height:100,width:100,timeout:3e6})):c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"left"},c.a.createElement(T,null),c.a.createElement(S,{search:function(e){_(e)},setTab:function(){return k(x)},getTab:function(e){k(e)},isSelect:x}),c.a.createElement("div",{className:"place-box-wrap",onScroll:function(e){P.start>b.length||O||e.target.scrollTop/e.target.scrollHeight*100>70&&A({start:P.start+30,end:P.end+30})}},function(){var e=P.start,t=P.end;return O?b.filter((function(e){return e.title.includes(O)||e.address.includes(O)})):e&&t?b.filter((function(n,a){return a<e&&t>a})):b.filter((function(t,n){return n<e}))}().map((function(e){return c.a.createElement(I,{key:e.id,place:e,isSelect:x,setPosition:D})})))),c.a.createElement("div",{className:"right"},c.a.createElement(N,{init:n.init,latitude:n.latitude,longitude:n.longitude,allPlace:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2b9564d6.chunk.js.map