(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03b1":function(t,e,n){},"08b1":function(t,e,n){},"1f9e":function(t,e,n){"use strict";n("ac76")},2231:function(t,e,n){},4919:function(t,e,n){"use strict";n("6050")},"4db7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-flex align-items-start mb-5",class:{"flex-row":t.filterable&&!t.vertical,"flex-column":t.filterable&&(t.vertical||t.isSmallScreen)},attrs:{id:"app-div"}},[t.filterable?n("dept-menu"):t._e(),n("div",{staticClass:"d-flex flex-column result-box",class:{vertical:t.isVertical||t.isSmallScreen}},[n("div",{staticClass:"back-button mb-2"},[n("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[t._v("← Back")])]),n("div",{staticClass:"router-view-container"},[t.isLoaded?n("router-view"):n("div",{staticClass:"spin",style:t.spinCssVars})],1)])],1)},a=[],s=(n("b64b"),n("5530")),o=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-box",class:{vertical:t.isVertical||t.isSmallScreen}},[t.vertical||t.isSmallScreen?t.isApple?t._e():n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-primary mb-4 dropdown-toggle",attrs:{type:"button",id:"filterButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},domProps:{innerHTML:t._s(t.selectedName)}}),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"filterButton"}},[n("menu-button",{ref:"azList",attrs:{label:"A&ndash;Z List","force-top":!0},on:{buttonClick:function(e){return t.changeDept(null)}}}),t._l(t.displayList,(function(e,r){return[n("menu-button",{directives:[{name:"show",rawName:"v-show",value:t.showSubdept(e),expression:"showSubdept(dept)"}],key:r,ref:"subList",refInFor:!0,attrs:{goTo:"SubDepartment",goToParams:{id:e.id},label:e.name,"force-top":!t.multi_dept||0==e.parent},on:{buttonClick:function(n){return t.changeDept(e.id)}}})]}))],2)]):n("div",{staticClass:"btn-group-vertical",attrs:{id:"dept-nav-box",role:"group","aria-label":"Subdepartment Navigation"}},[n("menu-button",{ref:"azList",attrs:{label:"A&ndash;Z List","force-top":!0},on:{buttonClick:function(e){return t.changeDept(null)}}}),t._l(t.displayList,(function(e,r){return[n("menu-button",{directives:[{name:"show",rawName:"v-show",value:t.showSubdept(e),expression:"showSubdept(dept)"}],key:r,ref:"subList",refInFor:!0,attrs:{goTo:"SubDepartment",goToParams:{id:e.id},label:e.name,"force-top":!t.multi_dept||0==e.parent},on:{buttonClick:function(n){return t.changeDept(e.id)}}})]}))],2)])},l=[],u=(n("d81d"),n("b0c0"),n("b85c")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper",class:{"dropdown-item":t.isVertical||t.isSmallScreen,"sub-item":!t.isVertical&&!t.forceTop,"sub-item-dropdown":(t.isVertical||t.isSmallScreen)&&!t.forceTop},on:{click:function(e){return e.preventDefault(),t.activate(e)}}},[t.isVertical||t.isSmallScreen?n("router-link",{staticClass:"text-secondary",class:{active:t.isActiveItem},attrs:{to:t.routerTo},domProps:{innerHTML:t._s(t.label)}}):n("button",{staticClass:"btn btn-primary btn-sm",class:t.classObj,attrs:{type:"button"}},[n("router-link",{attrs:{to:t.routerTo},domProps:{innerHTML:t._s(t.label)}})],1)],1)},d=[],f={props:{label:{type:String,required:!0},goTo:{type:String,default:"AZList"},goToParams:{type:Object,default:void 0},forceTop:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({routerTo:function(){return void 0!==this.goToParams&&null!==this.goToParams.id?{name:this.goTo,params:this.goToParams}:"/".concat(this.baseUrl)},classObj:function(){return{"sub-item":!this.forceTop,active:this.isActive}},isActiveItem:function(){return"AZList"==this.goTo&&null===this.selected||void 0!==this.goToParams&&this.selected==this.goToParams.id}},Object(o["d"])(["baseUrl"])),Object(o["d"])("departments",["selected","isSmallScreen"])),Object(o["c"])(["isVertical"])),methods:{activate:function(){this.$emit("buttonClick"),this.setActive(!0)},setActive:function(t){this.isActive=t}},mounted:function(){(null==this.selected&&!this.goToParams||this.goToParams&&this.goToParams.id==this.selected)&&this.setActive(!0)}},m=f,h=(n("1f9e"),n("2877")),b=Object(h["a"])(m,p,d,!1,null,"9eddb42e",null),v=b.exports,g={components:{"menu-button":v},data:function(){return{breakpoint:994,windowWidth:0}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({displayList:function(){var t=this;return this.displayOrder.map((function(e){return t.getDept(e)}))},selectedName:function(){return null!==this.selected?this.getDept(this.selected).name:"A&ndash;Z List"},isSmallScreen:function(){var t=this.windowWidth<=this.breakpoint;return this.setIsSmallScreen(t),t}},Object(o["d"])(["multi_dept","has_advising","vertical","isApple"])),Object(o["d"])("departments",["selected"])),Object(o["c"])(["isVertical"])),Object(o["c"])("faculty",["getSubdeptCount"])),Object(o["c"])("departments",["displayOrder","getDept"])),methods:Object(s["a"])({changeDept:function(t){this.deactivateButtons(),this.changeActiveDept(t),window.scrollTo(0,0)},deactivateButtons:function(){this.$refs.azList.setActive(!1);var t,e=Object(u["a"])(this.$refs.subList);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.setActive(!1)}}catch(r){e.e(r)}finally{e.f()}},showSubdept:function(t){return!(75==t.id&&!this.has_advising)&&(0==t.parent||this.getSubdeptCount(t.id)>0)},onResize:function(){this.windowWidth=window.innerWidth}},Object(o["b"])("departments",["getDepts","changeActiveDept","setIsSmallScreen"])),mounted:function(){window.addEventListener("resize",this.onResize),this.onResize()},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},y=g,w=(n("8493"),Object(h["a"])(y,c,l,!1,null,"5be9e8be",null)),_=w.exports,j={components:{"dept-menu":_},data:function(){return{}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({isLoaded:function(){return Object.keys(this.allFaculty).length>0}},Object(o["d"])(["dept","nonce","filterable","vertical","isApple","windowHistoryLength"])),Object(o["d"])("faculty",["allFaculty"])),Object(o["d"])("departments",["isSmallScreen"])),Object(o["c"])(["spinCssVars","isVertical"])),methods:Object(s["a"])({goBack:function(){return this.$router.go(-1)}},Object(o["b"])(["appInit","getInitData","setIsLoaded","checkSafari"])),created:function(){var t=this;this.checkSafari(),this.appInit().then((function(){t.getInitData()})).then((function(){t.setIsLoaded(!0)}))}},O=j,S=(n("9552"),Object(h["a"])(O,i,a,!1,null,"44e45e0b",null)),C=S.exports,L=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t._l(t.facultyList,(function(e,r){return[[-1,-2,-3].includes(e.id)?n("div",{key:r,staticClass:"col-12 mt-3"},[n("h2",{staticClass:"h2 heading-underline"},[t._v(t._s(e.name))])]):n("faculty",{key:r,attrs:{person:e}})]}))],2)])},k=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 faculty-button",class:t.classObj},[n("router-link",{attrs:{to:{name:"Profile",params:{id:t.person.id}}},on:{click:function(e){return t.window.scrollTo(0,0)}}},[n("div",{staticClass:"faculty-container"},[n("headshot",{directives:[{name:"show",rawName:"v-show",value:t.showHeadshot,expression:"showHeadshot"}],attrs:{imgName:t.person.photo,imgExtra:t.person.photo_extra,fullname:t.fullname}}),n("div",{staticClass:"faculty-info",class:{"has-headshot":!t.isAZList}},[n("p",{staticClass:"staff-name"},[t._v(t._s(t.fullname))]),n("p",{staticClass:"staff-title"},[n("em",{domProps:{innerHTML:t._s(t.title)}})]),n("p",{staticClass:"email"},[n("a",{attrs:{href:"mailto:"+t.person.email}},[t._v(t._s(t.person.email))])]),t.showInterests?n("p",[n("em",{domProps:{innerHTML:t._s(t.shortInterests)}})]):t._e()])],1)])],1)},D=[],R=(n("99af"),n("4160"),n("caad"),n("c975"),n("a15b"),n("07ac"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("498a"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faculty-img"},[n("img",{class:t.classObj,attrs:{src:"https://cah.ucf.edu/common/resize.php?filename="+t.filename+"&sz="+t.size+t.imgExtra,alt:t.imgName,title:t.fullname}})])}),P=[],A=(n("a9e3"),{props:{imgName:{type:String,default:"profilephoto.jpg"},imgExtra:{type:String,default:""},size:{type:Number,default:2},fullname:{type:String,default:""}},data:function(){return{}},computed:Object(s["a"])(Object(s["a"])({classObj:function(){return"".concat(this.shapeClasses," ").concat("Profile"!=this.$route.name||this.isSmallScreen?"":"profile-size")},shapeClasses:function(){switch(this.img_shape){case"circle":return"img-circle";case"round-square":return"rounded";case"square":default:return""}},filename:function(){return this.imgName&&0!==this.imgName.length?this.imgName:"profilephoto.jpg"}},Object(o["d"])(["img_shape"])),Object(o["d"])("departments",["isSmallScreen"]))}),I=A,F=(n("e520"),Object(h["a"])(I,R,P,!1,null,"3690f457",null)),E=F.exports,V={components:{headshot:E},props:{person:{type:Object,required:!0}},data:function(){return{}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({classObj:function(){return{"col-xl-4":this.isAZList&&!this.isVertical&&!this.tiered||this.isVertical&&this.tiered||"picture"==this.format,"col-lg-4 col-xl-3":this.isAZList&&this.isVertical&&!this.tiered}},fullname:function(){return this.person?"".concat(this.person.fname," ").concat(this.person.mname&&this.person.mname.length>0?"".concat(this.person.mname," "):"").concat(this.person.lname):""},title:function(){var t,e="";if(this.prog_title_only){var n={};if(null===this.selected)t=Object.values(this.person.subdept),n=t[0][0];else{if(!this.person.subdept[this.selected])return"";n=this.person.subdept[this.selected][0]}e=n.title_short.length>0?n.title_short:n.prog_title.length>0?n.prog_title:n.title}else if(null===this.selected){t=Object.values(this.person.subdept).map((function(t){return t.sort((function(t,e){return t.title_id-e.title_id}))}));var r,i=[],a=Object(u["a"])(t);try{for(a.s();!(r=a.n()).done;){var s,o=r.value,c=Object(u["a"])(o);try{for(c.s();!(s=c.n()).done;){var l=s.value,p=l.title,d=l.title_short,f=d.length>0?d:p;i.includes(f)||i.push(f)}}catch(v){c.e(v)}finally{c.f()}}}catch(v){a.e(v)}finally{a.f()}e=i.join(", ")}else if(t=this.person.subdept[this.selected],t&&1===t.length)e=t[0].title;else if(t){var m,h=Object(u["a"])(t);try{for(h.s();!(m=h.n()).done;){var b=m.value;if(/director|chair/i.test(b.title)&&b.ordinal<100){e=b.title;break}/director|chair/i.test(b.title)&&100===b.ordinal||(e=b.title)}}catch(v){h.e(v)}finally{h.f()}}return e},showHeadshot:function(){return!this.isAZList||"picture"===this.format||this.tiered},showInterests:function(){return this.include_interests&&(null!==this.selected||"picture"===this.format)},shortInterests:function(){var t=this.person.interests,e=[];if(t){if(/<ul>/.test(t)){var n=(new DOMParser).parseFromString(t,"text/html");n.querySelectorAll("li").forEach((function(t){e.push(t.textContent)}))}else t=t.replace(/<br\s?\/?>/g,""),t=t.replace(/<\/?p>/g,""),/;/.test(t)?e=t.split(";"):/,/.test(t)&&e.length<=2?e=t.split(","):(t.match(/./g).length>1||t.indexOf(".")!==t.length-1)&&(e=t.split("."));e=e.map((function(t){return t.trim()}));for(var r="",i=0;i<e.length;i++){if(r+=e[i],i+1==e.length){r+=".";break}if(r.length>=30){r+="&hellip;";break}r+=", "}return"Interests: ".concat(r)}return""},isAZList:function(){return null===this.selected}},Object(o["d"])(["include_interests","filterable","format","prog_title_only","tiered"])),Object(o["d"])("departments",["selected"])),Object(o["c"])(["isVertical"]))},N=V,M=(n("ec48"),Object(h["a"])(N,T,D,!1,null,"b9a12c60",null)),$=M.exports,U={components:{faculty:$},data:function(){return{}},computed:Object(s["a"])({},Object(o["c"])("faculty",["facultyList"]))},z=U,H=Object(h["a"])(z,x,k,!1,null,"3b059df3",null),B=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return void 0!==t.dept?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t._l(t.facultyList,(function(e,r){return[[-1,-2,-3].includes(e.id)?n("div",{key:r,staticClass:"col-12 mt-3"},[n("h2",{staticClass:"h2 heading-underline"},[t._v(t._s(e.name))])]):n("faculty",{key:r,attrs:{person:e}})]}))],2)]):t._e()},Z=[],q={components:{faculty:$},data:function(){return{isWatched:!1}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({dept:function(){return this.getDept(this.id)},id:function(){return this.$route.params.id}},Object(o["c"])("faculty",["facultyList"])),Object(o["c"])("departments",["getDept"])),Object(o["d"])(["isLoaded"])),Object(o["d"])("departments",["selected"])),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("faculty",["sortDisplayList"])),Object(o["b"])("departments",["changeActiveDept"])),beforeRouteEnter:function(t,e,n){n((function(n){"SubDepartment"!=t.name||null!=e.name&&null!==n.$store.state.departments.selected||n.$store.dispatch("departments/setSelected",t.params.id).then((function(){n.$store.dispatch("faculty/sortDisplayList")}))}))},created:function(){var t=this;this.isLoaded||(this.unwatch=this.$store.watch((function(t){return t.isLoaded}),(function(){t.isWatched=!0,t.sortDisplayList()})))},beforeDestroy:function(){this.isWatched&&this.unwatch()}},J=q,Y=Object(h["a"])(J,W,Z,!1,null,"46dd0e0b",null),G=Y.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return void 0!==t.profile?n("div",{staticClass:"container-fluid mt-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col d-flex flex-row mb-3",class:{"align-items-center":t.isSmallScreen}},[n("headshot",{attrs:{imgName:t.profile.photo,imgExtra:t.profile.photo_extra,fullname:t.fullname}}),n("div",{staticClass:"faculty-info",class:{"mobile-size":t.isSmallScreen}},[n("h3",[t._v(t._s(t.fullname))]),n("p",{staticClass:"titles mb-1"},[n("em",{domProps:{innerHTML:t._s(t.titles)}})]),n("p",[n("a",{attrs:{href:"mailto:"+t.profile.email}},[t._v(t._s(t.profile.email))])]),null!==t.profile.phone?n("p",[n("a",{attrs:{href:"tel:"+t.rawPhone}},[t._v(t._s(t.profile.phone))])]):t._e(),t.profile.office?n("p",[t._v("Office Hours: "+t._s(t.profile.office))]):t._e(),t.profile.room?n("p",[t._v(" Campus Location: "),t.profile.building?n("a",{attrs:{href:"https://map.ucf.edu/locations/"+t.profile.building,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.profile.room_desc+t.profile.room))]):n("span",[t._v(t._s(t.profile.room_desc+t.profile.room))])]):t._e(),"1"===t.profile.has_cv?n("p",[n("a",{attrs:{href:"https://cah.ucf.edu/common/files/cv/"+t.profile.id+".pdf"}},[t._v("View CV")])]):t._e(),t.profile.homepage?n("p",[n("a",{attrs:{href:t.profile.homepage,target:"_blank",rel:"noopener"}},[t._v("View Personal Website")])]):t._e()])],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col mb-3",domProps:{innerHTML:t._s(t.bio)}})]),n("div",{staticClass:"row"},[t.profile.interests?n("list",{attrs:{heading:"Research Interests",text:t.profile.interests}}):t._e()],1),n("div",{staticClass:"row"},[t.profile.research?n("list",{attrs:{heading:"Recent Research Activities",text:t.profile.research}}):t._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.profile.infoRetrieved&&!t.profile.edu.length),expression:"!(profile.infoRetrieved && !profile.edu.length)"}],staticClass:"row"},[t.profile.edu&&t.profile.edu.length?n("div",{staticClass:"col",attrs:{id:"education"}},[n("h3",{staticClass:"heading-underline"},[t._v("Education")]),n("ul",t._l(t.profile.edu,(function(e,r){return n("li",{key:r},[t._v(t._s(t.degreeLine(e)))])})),0)]):t.profile.infoRetrieved?t._e():n("div",{staticClass:"col-2 mx-auto d-flex justify-content-center align-items-center"},[n("div",{staticClass:"spin",style:t.spinCssVars,attrs:{"aria-label":"Loading; please wait."}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.profile.infoRetrieved&&!t.profile.pub.length),expression:"!(profile.infoRetrieved && !profile.pub.length)"}],staticClass:"row"},[t.profile.pub&&t.profile.pub.length?n("div",{staticClass:"col",attrs:{id:"publications"}},[n("h3",{staticClass:"heading-underline"},[t._v("Publications")]),t._l(t.sortedPubs,(function(e,r){return[n("div",{key:r},[n("h4",{staticClass:"pt-2"},[t._v(t._s(e.type))]),n("ul",t._l(e.pubs,(function(e,r){return n("li",{key:r,domProps:{innerHTML:t._s(t.pubLine(e))}})})),0)])]}))],2):t.profile.infoRetrieved?t._e():n("div",{staticClass:"col-2 mx-auto d-flex justify-content-center align-items-center"},[n("div",{staticClass:"spin",style:t.spinCssVars,attrs:{"aria-label":"Loading; please wait."}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.profile.infoRetrieved&&!Object.values(t.profile.courses).length),expression:"!(profile.infoRetrieved && !Object.values(profile.courses).length)"}],staticClass:"row"},[t.profile.courses&&Object.values(t.profile.courses).length?n("div",{staticClass:"col",attrs:{id:"courses"}},[n("courses",{attrs:{courseList:t.profile.courses}})],1):t.profile.infoRetrieved?t._e():n("div",{staticClass:"col-2 mx-auto d-flex justify-content-center align-items-center"},[n("div",{staticClass:"spin",style:t.spinCssVars,attrs:{"aria-label":"Loading; please wait."}})])])]):t._e()},Q=[],X=(n("c740"),n("96cf"),n("1da1")),tt=n("c46f"),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h3",{staticClass:"heading-underline"},[t._v(t._s(t.heading))]),t.isList?n("div",{domProps:{innerHTML:t._s(t.text)}}):n("p",{domProps:{innerHTML:t._s(t.text)}})])},nt=[],rt={props:{heading:String,text:String},data:function(){return{}},computed:{isList:function(){var t=(new DOMParser).parseFromString(this.text,"text/html");return t.querySelectorAll("ul").length>0}}},it=rt,at=(n("c546"),Object(h["a"])(it,et,nt,!1,null,"9c217742",null)),st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col d-flex flex-column"},[n("ul",{staticClass:"nav nav-tabs"},t._l(t.termList,(function(e,r){return n("li",{key:r,staticClass:"nav-item"},[n("a",{staticClass:"m-0 nav-link",class:{active:e===t.displayedTerm},on:{click:function(n){return n.preventDefault(),t.changeDisplayedTerm(e)}}},[t._v(t._s(e))])])})),0),n("div",{staticClass:"tab-pane"},[n("table",{staticClass:"table table-sm table-striped table-bordered table-hover"},[n("thead",{staticClass:"thead-default text-center"},[n("tr",[n("th",{staticStyle:{"white-space":"nowrap"}},[t._v("Course #")]),n("th",[t._v("Course")]),n("th",[t._v("Title")]),n("th",[t._v("Mode")]),t.isSummer?n("th",[t._v("Session")]):t._e(),n("th",[t._v("Days/Times")])])]),void 0!==t.courseList[t.displayedTerm]&&t.courseList[t.displayedTerm].length?n("tbody",[t._l(t.courseList[t.displayedTerm],(function(e,r){return[n("tr",{key:r},[n("td",[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.catalogRef))]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.instructionMode))]),t.isSummer?n("td",[t._v(t._s(e.session))]):t._e(),n("td",[t._v(t._s(e.dateTime))])]),"No Description Available"!==e.description?n("tr",{key:"description-"+r},[n("td",{attrs:{colspan:t.isSummer?6:5}},[n("p",{domProps:{innerHTML:t._s(e.description)}})])]):t._e()]}))],2):n("tbody",[n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:t.isSummer?6:5}},[n("p",[t._v("No course information to display.")])])])])])])])])},ct=[],lt={props:{courseList:{type:Object,required:!0}},data:function(){return{displayedTerm:""}},computed:{currentTerm:function(){var t=new Date,e=t.getMonth()+1,n=t.getFullYear(),r="";return r=e>=1&&e<5?"Spring":e>=5&&e<8?"Summer":"Fall","".concat(r," ").concat(n)},isSummer:function(){return/summer/i.test(this.displayedTerm)},termList:function(){return Object.keys(this.courseList).sort((function(t,e){var n=parseInt(t.substr(-4))-parseInt(e.substr(-4));if(0===n){var r={spring:1,summer:2,fall:3};return r[t.substr(0,t.length-5).toLowerCase()]-r[e.substr(0,e.length-5).toLowerCase()]}return n}))}},methods:{isCurrentTerm:function(t){return this.currentTerm===t},getSyllabusLink:function(t){var e="https://cah.ucf.edu/common/files/syllabi/",n="".concat(t.catalogRef.replace(" ","")).concat(t.section).concat(this.displayedTerm.replace(" ",""));return'<a href="'.concat(e).concat(n,'.pdf" rel="external">Available</a>')},changeDisplayedTerm:function(t){this.displayedTerm=t}},mounted:function(){this.displayedTerm=this.currentTerm}},ut=lt,pt=(n("4919"),Object(h["a"])(ut,ot,ct,!1,null,"d3e79884",null)),dt=pt.exports,ft={components:{headshot:E,list:st,courses:dt},data:function(){return{isWatched:!1}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:function(){return this.$route.params.id},cssVars:function(){return{"background-image":"url('".concat(this.pluginDirURI,"/img/cah-loading-icon.png')"),"background-repeat":"no-repeat","background-size":"contain"}},profile:function(){return this.getProfile(this.id)},fullname:function(){return void 0===this.profile?"":"".concat(this.profile.fname," ").concat(this.profile.mname&&this.profile.mname.length>0?"".concat(this.profile.mname," "):"").concat(this.profile.lname)},titles:function(){var t,e=this,n=Object.values(this.profile.subdept).map((function(t){return t.sort((function(t,e){return t.title_id-e.title_id})).map((function(t){return e.prog_title_only?t.prog_title:t.title}))})),r=[],i=Object(u["a"])(n);try{for(i.s();!(t=i.n()).done;){var a,s=t.value,o=Object(u["a"])(s);try{for(o.s();!(a=o.n()).done;){var c=a.value;c.length>0&&!r.includes(c)&&r.push(c)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){i.e(l)}finally{i.f()}return r.join(", ")},bio:function(){return tt["a"].unescape(this.profile.bio)},sortedPubs:function(){if(!this.profile.pub||!this.profile.pub.length)return[];var t,e={},n=Object(u["a"])(this.profile.pub);try{for(n.s();!(t=n.n()).done;){var r=t.value;void 0===e[r.pubType]&&(e[r.pubType]={type:r.pubType,pubs:[]});var i={date:r.pubDate,citation:r.citation,forthcoming:"0"!==r.forthcoming};e[r.pubType].pubs.push(i)}}catch(a){n.e(a)}finally{n.f()}return Object.values(e).sort((function(t,e){var n=["Books","Films","Television Shows","Edited Collections","Edited Editions","Television Episodes","Articles/Essays","Artwork","Book Sections/Chapters","Exhibitions","Musical Compositions","Performances","Recordings","Creative Publications","Translation","Book Reviews","Conference Papers/Presentations","Invited Lectures/Presentations","Miscellaneous Publications"];return n.findIndex((function(e){return e===t.type}))-n.findIndex((function(t){return t===e.type}))}))},rawPhone:function(){var t=this.profile.phone.replace(/[^0-9+]/,"");return 12==t.length&&/^\+/.test(t)?t:11!=t.length||/^\+/.test(t)?"+1".concat(t):"+".concat(t)}},Object(o["c"])(["spinCssVars"])),Object(o["c"])("faculty",["getProfile"])),Object(o["c"])("departments",["getDept"])),Object(o["d"])(["pluginDirURI","prog_title_only","isLoaded"])),Object(o["d"])("departments",["isSmallScreen"])),methods:Object(s["a"])({degreeLine:function(t){return"".concat(t.degree," in ").concat(t.field).concat(t.institution.length?" from ".concat(t.institution):"").concat(t.year?"(".concat(t.year):"")},pubLine:function(t){var e=tt["a"].unescape(t.citation).replace(/<br\s?\/?>/i,"");return"".concat(e).concat(t.forthcoming?" <em>Forthcoming</em>":"")}},Object(o["b"])("faculty",["getEduPub","getCourses","setInfoRetrieved"])),created:function(){var t=this,e=function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getEduPub(t.id),t.getCourses(t.id).then((function(){t.setInfoRetrieved({id:t.id,value:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();this.isLoaded?!1===this.getProfile(this.id).infoRetrieved&&e():this.unwatch=this.$store.watch((function(t){return t.isLoaded}),(function(){t.isWatched=!0,e()}))},mounted:function(){window.scrollTo(0,0)},beforeDestroy:function(){this.isWatched&&this.unwatch()}},mt=ft,ht=(n("6617"),Object(h["a"])(mt,K,Q,!1,null,"ef06bb1e",null)),bt=ht.exports;r["a"].use(L["a"]);var vt=[{path:"/".concat(wpVars.baseUrl,"/"),name:"AZList",component:B},{path:"/".concat(wpVars.baseUrl,"/subdept/:id"),name:"SubDepartment",component:G},{path:"/".concat(wpVars.baseUrl,"/profile/:id"),name:"Profile",component:bt}],gt=new L["a"]({mode:"history",base:"/",routes:vt}),yt=gt,wt=(n("4fad"),n("d3b7"),n("25f0"),n("3835")),_t=n("bc3a"),jt=n.n(_t),Ot={checkSafari:function(t){var e=t.commit,n=!1;(/constructor/i.test(window.HTMLElement)||function(t){return"[object SafariRemoteNotification]"===t.toString()}(!window["safari"]))&&(n=!0);var r=/Mobi/.test(navigator.userAgent);r&&(/iPhone;/.test(navigator.userAgent)||/iPad;/.test(navigator.userAgent))&&(n=!0),e("updateIsApple",n)},appInit:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.dispatch,n("getNonce"),n("getOptions");case 3:case"end":return e.stop()}}),e)})))()},getNonce:function(t){var e=t.commit,n=document.querySelector("input[name=wp-nonce]"),r=n.value;e("setNonce",r),n.remove()},getOptions:function(t){var e=t.commit,n=document.querySelector("input[name=options]"),r=JSON.parse(tt["a"].unescape(n.value));e("setOptions",r),n.remove()},getInitData:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s,o,c,l,u,p,d,f,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=t.state,r=t.dispatch,i=n.ajaxUrl,a={action:"cah-faculty-staff-4",get:"init",wpNonce:n.nonce,dept:n.dept,multiDept:n.multi_dept},s=new FormData,o=0,c=Object.entries(a);o<c.length;o++)l=Object(wt["a"])(c[o],2),u=l[0],p=l[1],s.append(u,p);return e.next=7,jt.a.post(i,s).then((function(t){return t.data}));case 7:d=e.sent,f=d.subdepts,m=d.faculty,r("departments/setDepts",f),r("faculty/setAllFaculty",m);case 12:case"end":return e.stop()}}),e)})))()},setIsLoaded:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,r("updateIsLoaded",e);case 2:case"end":return n.stop()}}),n)})))()}},St={spinCssVars:function(t){return{"background-image":"url('".concat(t.pluginDirURI,"/img/cah-loading-icon.png')"),"background-repeat":"no-repeat","background-size":"contain"}},isVertical:function(t){return t.filterable&&t.vertical}},Ct={updateIsApple:function(t,e){r["a"].set(t,"isApple",e)},setNonce:function(t,e){r["a"].set(t,"nonce",e)},setOptions:function(t,e){for(var n=0,i=Object.entries(e);n<i.length;n++){var a=Object(wt["a"])(i[n],2),s=a[0],o=a[1];r["a"].set(t,s,o)}},updateIsLoaded:function(t,e){r["a"].set(t,"isLoaded",e)}},Lt={getDepts:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=t.dispatch,r=t.rootState,i={action:"cah-faculty-staff-4",get:"subdepts",dept:r.dept,multiDept:r.multi_dept,wpNonce:r.nonce},a=new FormData,s=0,o=Object.entries(i);s<o.length;s++)c=Object(wt["a"])(o[s],2),l=c[0],u=c[1],a.append(l,u);jt.a.post(r.ajaxUrl,a).then((function(t){n("setDepts",t.data)}));case 5:case"end":return e.stop()}}),e)})))()},setDepts:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,r("updateDepts",e);case 2:case"end":return n.stop()}}),n)})))()},changeActiveDept:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.dispatch,r("setSelected",e).then((function(){r("faculty/sortDisplayList",null,{root:!0})}));case 2:case"end":return n.stop()}}),n)})))()},setSelected:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,r("updateSelected",e);case 2:case"end":return n.stop()}}),n)})))()},setIsSmallScreen:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,r("updateIsSmallScreen",e);case 2:case"end":return n.stop()}}),n)})))()}},xt=(n("4de4"),n("0481"),n("4069"),n("2909")),kt={displayOrder:function(t,e,n){if(n.multi_dept){var r,i=[],a=Object.values(t.deptList).filter((function(t){return 0==t.parent})).sort((function(t,e){return t.name.localeCompare(e.name)})),s=Object(u["a"])(a);try{var o=function(){var e=r.value,n=[e].concat(Object(xt["a"])(Object.values(t.deptList).filter((function(t){return t.parent==e.id})).sort((function(t,e){return t.name.localeCompare(e.name)}))));i.push(n)};for(s.s();!(r=s.n()).done;)o()}catch(l){s.e(l)}finally{s.f()}return i.flat().map((function(t){return t.id}))}var c=Object.values(t.deptList);return c.sort((function(t,e){return t.name.localeCompare(e.name)})),c.map((function(t){return t.id}))},getDept:function(t){return function(e){return t.deptList[e]}}},Tt={updateDepts:function(t,e){r["a"].set(t,"deptList",e)},updateSelected:function(t,e){r["a"].set(t,"selected",e)},updateIsSmallScreen:function(t,e){r["a"].set(t,"isSmallScreen",e)}},Dt={selected:null,deptList:[],isSmallScreen:!1},Rt=!0,Pt={state:Dt,namespaced:Rt,actions:Lt,getters:kt,mutations:Tt},At={getAllFaculty:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s,o,c,l,u,p,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=t.dispatch,r=t.rootState,i=r.ajaxUrl,a={action:"cah-faculty-staff-4",get:"faculty",wpNonce:r.nonce,dept:r.dept,multiDept:r.multi_dept},s=new FormData,o=0,c=Object.entries(a);o<c.length;o++)l=Object(wt["a"])(c[o],2),u=l[0],p=l[1],s.append(u,p);return e.next=7,jt.a.post(i,s).then((function(t){return t.data}));case 7:d=e.sent,n("setAllFaculty",d);case 9:case"end":return e.stop()}}),e)})))()},setAllFaculty:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,i=t.dispatch,a=t.rootState,a.tiered&&(o={"-1":{id:-1,name:"Full Time"},"-2":{id:-2,name:"Part Time"},"-3":{id:-3,name:"Staff"}},e=Object(s["a"])(Object(s["a"])({},o),e)),r("updateAllFaculty",e),i("sortDisplayList",e);case 4:case"end":return n.stop()}}),n)})))()},sortDisplayList:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,r=t.state,i=t.rootState,a=i.departments.selected,s=r.allFaculty,o=function(t,e){var n=t.lname.localeCompare(e.lname);return 0==n?t.fname.localeCompare(e.fname):n},c=function(t,e){var n=parseInt(t.subdept[a][0].ordinal)-parseInt(e.subdept[a][0].ordinal);return 0===n?o(t,e):n},l=function(t){var e=[],n=[],r=[],i=/Faculty/,s=/part-time/i;Object.values(t).forEach((function(t){switch(t.id){case-1:e.unshift(t);break;case-2:n.unshift(t);break;case-3:r.unshift(t);break;default:s.test(t.title_group)?n.push(t):i.test(t.title_group)?e.push(t):r.push(t);break}}));for(var l=function(t,e){return[-1,-2,-3].includes(t.id)?-1:[-1,-2,-3].includes(e.id)?1:null!==a?c(t,e):o(t,e)},u=function(t){return[-1,-2,-3].includes(t.id)||void 0!==t.subdept[a]&&t.subdept[a].length>0},p=[],d=0,f=[e,n,r];d<f.length;d++){var m=f[d];m.length>1&&p.push(m)}for(var h=[],b=0,v=p;b<v.length;b++){var g=v[b],y=[];y=null!==a?g.filter(u):g,y.length>1&&h.push(y.sort(l))}return h.flat().map((function(t){return t.id}))},u=[],u=null===a||i.tiered?i.tiered?l(s):Object.values(s).sort(o).map((function(t){return t.id})):Object.values(s).filter((function(t){return!!t.subdept&&void 0!==t.subdept[a]&&t.subdept[a].length>0})).sort(c).map((function(t){return t.id})),n("updateDisplayList",u);case 9:case"end":return e.stop()}}),e)})))()},getEduPub:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o,c,l,u,p,d,f,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(r=t.commit,i=t.rootState,a=i.ajaxUrl,o={action:"cah-faculty-staff-4",wpNonce:i.nonce,get:"edu-pub",userID:e},c=new FormData,l=0,u=Object.entries(o);l<u.length;l++)p=Object(wt["a"])(u[l],2),d=p[0],f=p[1],c.append(d,f);return n.next=7,jt.a.post(a,c).then((function(t){return t.data}));case 7:m=n.sent,r("updateEduPub",Object(s["a"])({id:e},m));case 9:case"end":return n.stop()}}),n)})))()},getCourses:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r,i,a,s,o,c,l,u,p,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(r=t.commit,i=t.rootState,a=i.ajaxUrl,s={action:"cah-faculty-staff-4",wpNonce:i.nonce,get:"courses",userID:e},o=new FormData,c=0,l=Object.entries(s);c<l.length;c++)u=Object(wt["a"])(l[c],2),p=u[0],d=u[1],o.append(p,d);return n.next=7,jt.a.post(a,o).then((function(t){return t.data}));case 7:f=n.sent,r("updateCourses",{id:e,courses:f});case 9:case"end":return n.stop()}}),n)})))()},setInfoRetrieved:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit,r("updateInfoRetrieved",e);case 2:case"end":return n.stop()}}),n)})))()}},It={facultyList:function(t){return t.displayList.map((function(e){return t.allFaculty[e]}))},getProfile:function(t){return function(e){return t.allFaculty[e]}},getSubdeptCount:function(t){return function(e){return Object.values(t.allFaculty).filter((function(t){return!!t.subdept&&void 0!==t.subdept[e]})).length}}},Ft={updateAllFaculty:function(t,e){r["a"].set(t,"allFaculty",e)},updateDisplayList:function(t,e){r["a"].set(t,"displayList",e)},updateEduPub:function(t,e){var n=e.id,i=e.edu,a=e.pub,s=t.allFaculty,o=s[n];o.edu=i,o.pub=a,s[n]=o,r["a"].set(t,"allFaculty",s)},updateCourses:function(t,e){var n=e.id,i=e.courses,a=t.allFaculty,s=a[n];s.courses=i,a[n]=s,r["a"].set(t,"allFaculty",a)},updateInfoRetrieved:function(t,e){var n=e.id,i=e.value,a=t.allFaculty,s=a[n];s.infoRetrieved=i,a[n]=s,r["a"].set(t,"allFaculty",a)}},Et={allFaculty:{},displayList:[]},Vt=!0,Nt={state:Et,namespaced:Vt,actions:At,getters:It,mutations:Ft};r["a"].use(o["a"]);var Mt={dept:0,multi_dept:!1,has_advising:!0,img_shape:"",format:"",include_interests:!0,filterable:!0,vertical:!1,prog_title_only:!1,tiered:!1,isLoaded:!1,nonce:null,baseUrl:wpVars.baseUrl,ajaxUrl:wpVars.ajaxUrl,pluginDirURI:wpVars.pluginDirURI,isApple:!1},$t=new o["a"].Store({state:Mt,actions:Ot,getters:St,mutations:Ct,modules:{departments:Pt,faculty:Nt}});r["a"].config.productionTip=!1,new r["a"]({router:yt,store:$t,render:function(t){return t(C)}}).$mount("#cah-faculty-staff-4-app")},6050:function(t,e,n){},6601:function(t,e,n){},6617:function(t,e,n){"use strict";n("03b1")},8493:function(t,e,n){"use strict";n("6601")},9552:function(t,e,n){"use strict";n("e9a4")},ac76:function(t,e,n){},c546:function(t,e,n){"use strict";n("08b1")},e520:function(t,e,n){"use strict";n("4db7")},e9a4:function(t,e,n){},ec48:function(t,e,n){"use strict";n("2231")}});