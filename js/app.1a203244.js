(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0efd":function(t,e,n){"use strict";var i=n("1f31"),a=n.n(i);a.a},"1f31":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("0710"),n("08c1");var i=n("2b0e"),a=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"nav-open":t.$sidebar.showSidebar}},[n("notifications"),n("router-view")],1)},o=[],r={},c=r,l=(n("5c0b"),n("2877")),d=Object(l["a"])(c,s,o,!1,null,null,null),u=d.exports,p=n("e37d"),f=(n("ac6a"),n("20d6"),n("f751"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notifications"},[n("transition-group",{attrs:{name:t.transitionName,mode:t.transitionMode}},t._l(t.notifications,(function(e){return n("notification",t._b({key:e.timestamp.getTime(),attrs:{clickHandler:e.onClick},on:{close:t.removeNotification}},"notification",e,!1))})),1)],1)}),h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert",class:[{"alert-with-icon":t.icon||t.showClose},t.verticalAlign,t.horizontalAlign,t.alertType],style:t.customPosition,attrs:{"data-notify":"container",role:"alert","data-notify-position":"top-center"},on:{click:t.tryClose}},[t.showClose?n("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-notify":"dismiss"},on:{click:t.close}},[n("i",{staticClass:"nc-icon nc-simple-remove"})]):t._e(),t.icon?n("span",{class:["alert-icon",t.icon],attrs:{"data-notify":"icon"}}):t._e(),n("span",{attrs:{"data-notify":"message"}},[t.title?n("div",{staticClass:"title"},[n("b",[t._v(t._s(t.title)),n("br")])]):t._e(),t.message?n("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),!t.message&&t.component?n("content-render",{attrs:{component:t.component}}):t._e()],1)])},v=[],b=(n("c5f6"),{name:"notification",components:{contentRender:{props:["component"],render:function(t){return t(this.component)}}},props:{message:String,title:String,icon:String,verticalAlign:{type:String,default:"top",validator:function(t){var e=["top","bottom"];return-1!==e.indexOf(t)}},horizontalAlign:{type:String,default:"right",validator:function(t){var e=["left","center","right"];return-1!==e.indexOf(t)}},type:{type:String,default:"info",validator:function(t){var e=["info","primary","danger","warning","success"];return-1!==e.indexOf(t)}},timeout:{type:Number,default:5e3,validator:function(t){return t>=0}},timestamp:{type:Date,default:function(){return new Date}},component:{type:[Object,Function]},showClose:{type:Boolean,default:!0},closeOnClick:{type:Boolean,default:!0},clickHandler:Function},data:function(){return{elmHeight:0}},computed:{hasIcon:function(){return this.icon&&this.icon.length>0},alertType:function(){return"alert-".concat(this.type)},customPosition:function(){var t=this,e=20,n=this.elmHeight+10,i=this.$notifications.state.filter((function(e){return e.horizontalAlign===t.horizontalAlign&&e.verticalAlign===t.verticalAlign&&e.timestamp<=t.timestamp})).length;this.$notifications.settings.overlap&&(i=1);var a=(i-1)*n+e,s={};return"top"===this.verticalAlign?s.top="".concat(a,"px"):s.bottom="".concat(a,"px"),s}},methods:{close:function(){this.$emit("close",this.timestamp)},tryClose:function(t){this.clickHandler&&this.clickHandler(t,this),this.closeOnClick&&this.close()}},mounted:function(){this.elmHeight=this.$el.clientHeight,this.timeout&&setTimeout(this.close,this.timeout)}}),g=b,y=(n("f0fa"),Object(l["a"])(g,m,v,!1,null,null,null)),_=y.exports,C={components:{Notification:_},props:{transitionName:{type:String,default:"list"},transitionMode:{type:String,default:"in-out"},overlap:{type:Boolean,default:!1}},data:function(){return{notifications:this.$notifications.state}},methods:{removeNotification:function(t){this.$notifications.removeNotification(t)}},created:function(){this.$notifications.settings.overlap=this.overlap},watch:{overlap:function(t){this.$notifications.settings.overlap=t}}},k=C,w=(n("6ae5"),Object(l["a"])(k,f,h,!1,null,null,null)),S=w.exports,O={state:[],settings:{overlap:!1,verticalAlign:"top",horizontalAlign:"right",type:"info",timeout:5e3,closeOnClick:!0,showClose:!0},setOptions:function(t){this.settings=Object.assign(this.settings,t)},removeNotification:function(t){var e=this.state.findIndex((function(e){return e.timestamp===t}));-1!==e&&this.state.splice(e,1)},addNotification:function(t){("string"===typeof t||t instanceof String)&&(t={message:t}),t.timestamp=new Date,t.timestamp.setMilliseconds(t.timestamp.getMilliseconds()+this.state.length),t=Object.assign({},this.settings,t),this.state.push(t)},notify:function(t){var e=this;Array.isArray(t)?t.forEach((function(t){e.addNotification(t)})):this.addNotification(t)}},x={install:function(t,e){var n=new t({data:{notificationStore:O},methods:{notify:function(t){this.notificationStore.notify(t)}}});t.prototype.$notify=n.notify,t.prototype.$notifications=n.notificationStore,t.component("Notifications",S),e&&O.setOptions(e)}},$=x,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group",class:{"input-group":t.hasIcon,"input-group-focus":t.focused}},[t._t("label",[t.label?n("label",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e()]),t._t("addonLeft",[t.addonLeftIcon?n("span",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-text"},[n("i",{class:t.addonLeftIcon})])]):t._e()]),t._t("default",[n("input",t._g(t._b({staticClass:"form-control",attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))]),t._t("addonRight",[t.addonRightIcon?n("span",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-text"},[n("i",{class:t.addonRightIcon})])]):t._e()]),t._t("helperText")],2)},A=[],N=(n("8e6e"),n("cadf"),n("456d"),n("bd86"));function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){Object(N["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P={inheritAttrs:!1,name:"base-input",props:{label:{type:String,description:"Input label"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Input icon on the right"},addonLeftIcon:{type:String,description:"Input icon on the left"}},model:{prop:"value",event:"input"},data:function(){return{focused:!1}},computed:{hasIcon:function(){var t=this.$slots,e=t.addonRight,n=t.addonLeft;return void 0!==e||void 0!==n||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon},listeners:function(){return D({},this.$listeners,{input:this.onInput,blur:this.onBlur,focus:this.onFocus})}},methods:{onInput:function(t){this.$emit("input",t.target.value)},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1}}},E=P,I=Object(l["a"])(E,j,A,!1,null,null,null),T=I.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-check",class:{disabled:t.disabled}},[n("label",{staticClass:"form-check-label",attrs:{for:t.cbId}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-check-input",attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);i.checked?o<0&&(t.model=n.concat([s])):o>-1&&(t.model=n.slice(0,o).concat(n.slice(o+1)))}else t.model=a}}}),n("span",{staticClass:"form-check-sign"})]),n("span",[t._t("default")],2)])},z=[],H=(n("6b54"),{name:"base-checkbox",model:{prop:"checked"},props:{checked:[Array,Boolean],disabled:[Boolean,String],inline:Boolean},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.checked},set:function(t){this.$emit("input",t)}},inlineClass:function(){if(this.inline)return"checkbox-inline"}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}),M=H,F=Object(l["a"])(M,B,z,!1,null,null,null),R=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-check-radio"},[n("label",{staticClass:"form-check-label",attrs:{for:t.cbId}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{id:t.cbId,type:"radio",disabled:t.disabled},domProps:{value:t.label,checked:t._q(t.model,t.label)},on:{change:function(e){t.model=t.label}}}),n("span",{staticClass:"form-check-sign"},[t._t("default")],2)])])},q=[],W={name:"base-radio",props:{label:[String,Number],disabled:[Boolean,String],value:[String,Boolean],inline:Boolean},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},inlineClass:function(){return this.inline?"radio-inline":""}},created:function(){this.cbId=Math.random().toString(16).slice(2)}},Z=W,V=Object(l["a"])(Z,Q,q,!1,null,null,null),J=V.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],tag:"li",staticClass:"dropdown nav-item",class:{show:t.isOpen},attrs:{"aria-haspopup":"true","aria-expanded":t.isOpen},on:{click:t.toggleDropDown}},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._t("title",[n("i",{class:t.icon}),n("span",{staticClass:"no-icon"},[t._v(t._s(t.title))]),n("b",{staticClass:"caret"})])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dropdown-menu show"},[t._t("default")],2)])},X=[],G={name:"base-dropdown",props:{title:String,icon:String,tag:{type:String,default:"li"}},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},closeDropDown:function(){this.isOpen=!1,this.$emit("change",this.isOpen)}}},K=G,Y=(n("9c5e"),Object(l["a"])(K,U,X,!1,null,"1b11b073",null)),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:[t.type&&"card-"+t.type]},[t.$slots.image?n("div",{staticClass:"card-image"},[t._t("image")],2):t._e(),t.$slots.header||t.title?n("div",{staticClass:"card-header",class:t.headerClasses},[t._t("header",[n("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t.subTitle?n("p",{staticClass:"card-category"},[t._v(t._s(t.subTitle))]):t._e()])],2):t._e(),t.$slots.default?n("div",{staticClass:"card-body",class:t.bodyClasses},[t._t("default")],2):t._e(),t._t("raw-content"),t.$slots.footer?n("div",{staticClass:"card-footer",class:t.footerClasses},[t._t("footer")],2):t._e()],2)},nt=[],it={name:"card",props:{title:{type:String,description:"Card title"},subTitle:{type:String,description:"Card subtitle"},type:{type:String,description:"Card type (e.g primary/danger etc)"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},at=it,st=Object(l["a"])(at,et,nt,!1,null,null,null),ot=st.exports,rt={install:function(t){t.component(T.name,T),t.component(R.name,R),t.component(J.name,J),t.component(tt.name,tt),t.component("card",ot)}},ct=rt,lt={bind:function(t,e,n){t.clickOutsideEvent=function(i){t==i.target||t.contains(i.target)||n.context[e.expression](i)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}},dt={install:function(t){t.directive("click-outside",lt)}},ut=dt,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar",style:t.sidebarStyle,attrs:{"data-color":t.backgroundColor,"data-image":t.backgroundImage}},[n("div",{staticClass:"sidebar-wrapper"},[n("div",{staticClass:"logo"},[n("a",{staticClass:"simple-text logo__container",attrs:{href:"#"}},[t._m(0),t._v("\n        "+t._s(t.title)+"\n      ")])]),t._t("content"),n("ul",{staticClass:"nav nav-main__links"},[t._t("default",t._l(t.sidebarLinks,(function(e,i){return n("sidebar-link",{key:e.name+i,attrs:{to:e.path,link:e},on:{click:t.closeNavbar}},[n("i",{class:e.icon}),n("p",[t._v(t._s(e.name))])])})))],2),t.$slots["bottom-links"]?n("ul",{staticClass:"nav nav-bottom"},[t._t("bottom-links")],2):t._e()],2)])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-img"},[n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",alt:"Flag_of_Canada"}})])}],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._b({tag:"component",attrs:{tag:"li"},nativeOn:{click:function(e){return t.hideSidebar(e)}}},"component",t.$attrs,!1),[n("a",t._b({staticClass:"nav-link"},"a",t.$attrs,!1),[t._t("default",[t.link.icon?n("i",{class:t.link.icon}):t._e(),n("p",[t._v(t._s(t.link.name))])])],2)])},mt=[],vt={inheritAttrs:!1,inject:{autoClose:{default:!0}},props:{link:{type:[String,Object],default:function(){return{name:"",path:"",icon:""}}},tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar&&!0===this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},bt=vt,gt=Object(l["a"])(bt,ht,mt,!1,null,null,null),yt=gt.exports,_t={components:{SidebarLink:yt},props:{title:{type:String,default:"CoronaTracker"},backgroundColor:{type:String,default:"black",validator:function(t){var e=["","blue","azure","green","orange","red","purple","black"];return-1!==e.indexOf(t)}},backgroundImage:{type:String,default:"img/sidebar-5.jpg"},activeColor:{type:String,default:"success",validator:function(t){var e=["primary","info","success","warning","danger"];return-1!==e.indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose}},computed:{sidebarStyle:function(){return{backgroundImage:"url(".concat(this.backgroundImage,")")}}}},Ct=_t,kt=(n("0efd"),Object(l["a"])(Ct,pt,ft,!1,null,null,null)),wt=kt.exports,St={showSidebar:!1,sidebarLinks:[{name:"Dashboard",icon:"ti-panel",path:"/admin/overview"}],displaySidebar:function(t){this.showSidebar=t}},Ot={install:function(t){t.mixin({data:function(){return{sidebarStore:St}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",wt),t.component("sidebar-link",yt)}},xt=Ot,$t=(n("f9e3"),n("e1b9"),n("c6e3"),{install:function(t){t.use(ct),t.use(ut),t.use(xt),t.use($),t.use(p["a"])}}),jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("side-bar",[n("mobile-menu",{attrs:{slot:"content"},slot:"content"}),n("sidebar-link",{attrs:{to:"/panel/overview"}},[n("i",{staticClass:"nc-icon nc-chart-pie-35"}),n("p",[t._v("Panel")])]),n("sidebar-link",{attrs:{to:"#1"}},[n("i",{staticClass:"nc-icon nc-circle-09"}),n("p",[t._v("More")])]),n("sidebar-link",{attrs:{to:"#2"}},[n("i",{staticClass:"nc-icon nc-notes"}),n("p",[t._v("Coming")])]),n("sidebar-link",{attrs:{to:"#3"}},[n("i",{staticClass:"nc-icon nc-pin-3"}),n("p",[t._v("Soon")])]),n("template",{slot:"bottom-links"},[n("a",{attrs:{href:"https://www.buymeacoffee.com/CoronaTrackerca",target:"_blank"}},[n("img",{staticStyle:{height:"51px !important",width:"217px !important"},attrs:{src:"https://cdn.buymeacoffee.com/buttons/default-orange.png",alt:"Buy Me A Coffee"}})])])],2),n("div",{staticClass:"main-panel"},[n("top-navbar"),n("dashboard-content",{on:{click:t.toggleSidebar}}),n("content-footer")],1)],1)},At=[],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Covid-19 Dashboard")]),n("button",{staticClass:"navbar-toggler navbar-toggler-right",class:{toggled:t.$sidebar.showSidebar},attrs:{type:"button","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.toggleSidebar}},[n("span",{staticClass:"navbar-toggler-bar burger-lines"}),n("span",{staticClass:"navbar-toggler-bar burger-lines"}),n("span",{staticClass:"navbar-toggler-bar burger-lines"})]),t._m(0)])])},Lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collapse navbar-collapse justify-content-end"},[n("ul",{staticClass:"nav navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://canada.ca/coronavirus"}},[n("i",{staticClass:"nc-icon nc-zoom-split"}),n("span",{staticClass:"d-lg-block"},[t._v(" more info @ canada.ca/coronavirus")])])])])])}],Dt={computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)}}},Pt=Dt,Et=Object(l["a"])(Pt,Nt,Lt,!1,null,null,null),It=Et.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container-fluid"},[n("nav",[n("ul",{staticClass:"footer-menu"},[n("li",[n("router-link",{attrs:{to:{path:"/panel"}}},[t._v("Panel")])],1)])]),t._m(0)])])},Bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright text-center"},[t._v("\n      Created with\n      "),n("i",{staticClass:"fa fa-heart heart"}),t._v(" by\n      "),n("a",{attrs:{href:"https://rimz.ca",target:"_blank"}},[t._v("RimZ")]),t._v(".\n    ")])}],zt={},Ht=zt,Mt=Object(l["a"])(Ht,Tt,Bt,!1,null,null,null),Ft=Mt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)},Qt=[],qt={},Wt=qt,Zt=(n("78e8"),Object(l["a"])(Wt,Rt,Qt,!1,null,null,null)),Vt=Zt.exports,Jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav nav-mobile-menu"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://canada.ca/coronavirus"}},[n("i",{staticClass:"nc-icon nc-zoom-split hidden-lg-up"}),n("span",{staticClass:"d-lg-none"},[t._v("more info @ canada.ca/coronavirus")])])])])}],Xt={name:"mobile-menu"},Gt=Xt,Kt=Object(l["a"])(Gt,Jt,Ut,!1,null,null,null),Yt=Kt.exports,te={components:{TopNavbar:It,ContentFooter:Ft,DashboardContent:Vt,MobileMenu:Yt},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},ee=te,ne=Object(l["a"])(ee,jt,At,!1,null,null,null),ie=ne.exports,ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-us full-screen"},[n("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[t._m(0),n("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",[n("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._m(1),n("footer",{staticClass:"footer-demo"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"pull-left"},[n("ul",[n("li",[n("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._m(2)])])])},se=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper wrapper-full-page section content"},[n("div",{},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[n("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),n("h2",{staticClass:"title"},[t._v("Oops! It seems that this page does not exist.")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright text-center"},[t._v("\n        © Coded with\n        "),n("i",{staticClass:"fa fa-heart heart"}),t._v(" by\n        "),n("a",{attrs:{href:"https://binarcode.com",target:"_blank"}},[t._v("BinarCode")]),t._v(".\n        Designed by "),n("a",{attrs:{href:"https://www.creative-tim.com/?ref=pdf-vuejs",target:"_blank"}},[t._v("Creative Tim")]),t._v(".\n      ")])}],oe={},re=oe,ce=Object(l["a"])(re,ae,se,!1,null,null,null),le=ce.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("card",[n("div",{staticClass:"embed-responsive embed-responsive-1by1 z-depth-1 map-container"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://health-infobase.canada.ca/covid-19/iframe/map.html",allowfullscreen:""}})])])],1),n("div",{staticClass:"col-md-4"},[n("card",[n("template",{slot:"header"},[n("h4",{staticClass:"card-title"},[t._v("News")]),n("p",{staticClass:"card-category"},[t._v("Near "+t._s(t.locDisplayed)+" "+t._s(t.description))])]),n("div",{staticClass:"embed-responsive embed-responsive-16by9 z-depth-1-half"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.startVideo(),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("template",{slot:"footer"})],2)],1)])])])},ue=[];window.axios=n("bc3a");var pe={components:{},data:function(){return{videoSource:"https://www.youtube.com/embed/videoseries?list=PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd",description:"",city:"",region:"",locDisplayed:""}},mounted:function(){var t=this;axios.get("https://ipinfo.io").then((function(e){return t.region=e.data.region,t.city=e.data.city}))},methods:{startVideo:function(){return this.videoSource="https://www.youtube.com/embed/videoseries?list="+this.matchNewsPlayList(),this.videoSource},matchNewsPlayList:function(){var t;if("Toronto"==this.city)t="PLAs1zSLtTHBTfvtHP89HpjoqoXNH9IZkF",this.locDisplayed=this.city+", Ontario";else switch(this.region){case"Ontario":t="PLAs1zSLtTHBROmXlQzc2m7d0EyBFZ41kf",this.locDisplayed=this.region;break;case"British Colombia":t="PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd",this.locDisplayed=this.region;break;case"Alberta":t="PLAs1zSLtTHBSDIqMHbLmWZFJbh66ayMNi",this.locDisplayed=this.region;break;case"Quebec":t="PLAs1zSLtTHBTKWCByQIi8VhnNLDuFWtNf",this.locDisplayed=this.region;break;case"Nova Scotia":t="PLAs1zSLtTHBS8Lz2RmEoeBjnk7lAsYQaI",this.locDisplayed=this.region;break;case"Manitoba":t="PLAs1zSLtTHBTN_QhWxn1NXlLAe8br1pIR",this.locDisplayed=this.region;break;case"Saskatchewan":t="PLAs1zSLtTHBRlqmSOzu0uHLxZtZV8_Ard",this.locDisplayed=this.region;break;default:t="PLAs1zSLtTHBQ0ayczij2W67zVyNpNrdGd",this.locDisplayed="Canada";break}return t}}},fe=pe,he=Object(l["a"])(fe,de,ue,!1,null,null,null),me=he.exports,ve=[{path:"/",component:ie,redirect:"/panel/overview"},{path:"/panel",component:ie,redirect:"/panel/overview",children:[{path:"overview",name:"Overview",component:me}]},{path:"*",component:le}],be=ve,ge=n("9483");Object(ge["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ye=n("bc3a"),_e=n.n(ye);
/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
i["a"].use(a["a"]),i["a"].use($t),i["a"].prototype.$http=_e.a;var Ce=new a["a"]({routes:be,linkActiveClass:"nav-item active",scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}});new i["a"]({el:"#app",render:function(t){return t(u)},router:Ce})},"5c0b":function(t,e,n){"use strict";var i=n("e332"),a=n.n(i);a.a},"607a":function(t,e,n){},"6ae5":function(t,e,n){"use strict";var i=n("607a"),a=n.n(i);a.a},"78e8":function(t,e,n){"use strict";var i=n("eb93"),a=n.n(i);a.a},"9c5e":function(t,e,n){"use strict";var i=n("d274"),a=n.n(i);a.a},be89:function(t,e,n){},c6e3:function(t,e,n){},d274:function(t,e,n){},e1b9:function(t,e,n){},e332:function(t,e,n){},eb93:function(t,e,n){},f0fa:function(t,e,n){"use strict";var i=n("be89"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1a203244.js.map