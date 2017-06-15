/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	module.exports = __webpack_require__(16);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.2.29
	 (c) 2010-2014 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(V,W,v){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.29/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Ra(b){if(null==b||Ha(b))return!1;
	var a=b.length;return 1===b.nodeType&&a?!0:E(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(O(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(M(b)||Ra(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Wb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
	a,c){for(var d=Wb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Xb(b){return function(a,c){b(c,a)}}function hb(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Yb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function F(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Yb(b,a);return b}function U(b){return parseInt(b,
	10)}function Zb(b,a){return F(new (F(function(){},{prototype:b})),a)}function B(){}function ga(b){return b}function Z(b){return function(){return b}}function H(b){return"undefined"===typeof b}function G(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function E(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ua(b){return"[object Date]"===Aa.call(b)}function O(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===Aa.call(b)}
	function Ha(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Sa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ta(b,a){var c=Sa(b,a);0<=c&&b.splice(c,1);return a}function Ia(b,a,c,d){if(Ha(b)||b&&b.$evalAsync&&b.$watch)throw Ua("cpws");if(a){if(b===a)throw Ua("cpi");c=c||[];
	d=d||[];if(T(b)){var e=Sa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(M(b))for(var f=a.length=0;f<b.length;f++)e=Ia(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;M(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ia(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Yb(a,g)}}else if(a=b)M(b)?a=Ia(b,[],c,d):ua(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ia(b,{},c,d));
	return a}function ha(b,a){if(M(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(ua(b))return ua(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
	a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ha(b)||Ha(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!O(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==v&&!O(a[d]))return!1;return!0}return!1}function Ab(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!O(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,
	0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=v:Ha(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?v:JSON.stringify(b,Wc,a?"  ":null)}function $b(b){return E(b)?JSON.parse(b):b}function Va(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=A(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
	return b}function ia(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return 3===b[0].nodeType?A(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+A(b)})}catch(d){return A(c)}}function ac(b){try{return decodeURIComponent(b)}catch(a){}}function bc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=ac(c[0]),G(d)&&(b=G(c[1])?ac(c[1]):!0,kb.call(a,d)?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=
	[];r(b,function(b,d){M(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
	"data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(W.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function cc(b,a){var c=function(){b=D(b);if(b.injector()){var c=b[0]===W?
	"document":ia(b);throw Ua("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=dc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(V&&!d.test(V.name))return c();V.name=V.name.replace(d,"");Wa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
	a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Cb(b,a,c){if(!b)throw Ua("areq",a||"?",c||"required");return b}function Xa(b,a,c){c&&M(b)&&(b=b[b.length-1]);Cb(O(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ua("badname",a);}function ec(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&O(b)?Ab(e,b):b}function Db(b){var a=
	b[0];b=b[b.length-1];if(a===b)return D(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function Zc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
	e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};g&&m(g);return n}())}}())}
	function $c(b){F(b,{bootstrap:cc,copy:Ia,extend:F,equals:Ba,element:D,forEach:r,injector:dc,noop:B,bind:Ab,toJson:oa,fromJson:$b,identity:ga,isUndefined:H,isDefined:G,isString:E,isFunction:O,isObject:T,isNumber:ib,isElement:Uc,isArray:M,version:ad,isDate:ua,lowercase:A,uppercase:Ja,callbacks:{counter:0},$$minErr:z,$$csp:Ya});Za=Zc(V);try{Za("ngLocale")}catch(a){Za("ngLocale",[]).provider("$locale",bd)}Za("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
	fc).directive({a:dd,input:gc,textarea:gc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:hc,ngRequired:hc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Eb).directive(ic);
	a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:jc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function $a(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Fb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
	[this],k=a,l,m,n,q,p,s;if(!d||null!=b)for(;e.length;)for(l=e.shift(),m=0,n=l.length;m<n;m++)for(q=D(l[m]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Ea(s[p]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;E(b)&&(b=$(b));if(!(this instanceof S)){if(E(b)&&"<"!=b.charAt(0))throw Gb("nosel");return new S(b)}if(E(b)){var a=b;b=W;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
	b,e;b=d.createDocumentFragment();c=[];if(Hb.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ca[e]||ca._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Ib(this,b);D(W.createDocumentFragment()).append(this)}else Ib(this,
	b)}function Jb(b){return b.cloneNode(!0)}function Ka(b){Kb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ka(b[a])}function kc(b,a,c,d){if(G(d))throw Gb("offargs");var e=pa(b,"events");pa(b,"handle")&&(H(a)?r(e,function(a,c){ab(b,c,a);delete e[c]}):r(a.split(" "),function(a){H(c)?(ab(b,a,e[a]),delete e[a]):Ta(e[a]||[],c)}))}function Kb(b,a){var c=b.ng339,d=bb[c];d&&(a?delete bb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),kc(b)),delete bb[c],b.ng339=v))}function pa(b,a,c){var d=
	b.ng339,d=bb[d||-1];if(G(c))d||(b.ng339=d=++ne,d=bb[d]={}),d[a]=c;else return d&&d[a]}function Lb(b,a,c){var d=pa(b,"data"),e=G(c),f=!e&&G(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];F(d,a)}else return d}function Mb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
	" ").replace(" "+$(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Ib(b,a){if(a){a=a.nodeName||!G(a.length)||Ha(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function lc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=M(a)?a:[a];b;){for(var d=
	0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==v)return c;b=b.parentNode||11===b.nodeType&&b.host}}function mc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ka(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function nc(b,a){var c=qb[a.toLowerCase()];return c&&oc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||W);if(H(c.defaultPrevented)){var f=
	c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=u?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function La(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
	b.$$hashKey)?d=b.$$hashKey():d===v&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function pc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Xa(b[c],"fn"),a=b.slice(0,c)):Xa(b,"fn",!0);return a}function dc(b){function a(a){return function(b,c){if(T(b))r(b,
	Xb(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(O(b)||M(b))b=n.instantiate(b);if(!b.$get)throw db("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!l.get(a)){l.put(a,!0);try{if(E(a))for(c=Za(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else O(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Xa(a,"module")}catch(p){throw M(a)&&(a=
	a[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\n"+p.stack),db("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw db("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=pc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw db("itkn",p);f.push(e&&e.hasOwnProperty(p)?
	e[p]:c(p))}M(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||O(e)?e:c},get:c,annotate:pc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],l=new cb([],!0),m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Z(b))}),constant:a(function(a,
	b){Da(a,"constant");m[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=m.$injector=f(m,function(){throw db("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||B)});return p}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
	r(a,function(a){b||"a"!==A(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
	va.call(arguments,1))}finally{if(s--,0===s)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(w,function(a){a()});t=b(da,a)})()}function g(){x!=h.url()&&(x=h.url(),r(aa,function(a){a(h.url())}))}var h=this,k=a[0],l=b.location,m=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,K=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():K.push(a)};
	var w=[],t;h.addPollFn=function(a){H(t)&&f(100,n);w.push(a);return a};var x=l.href,L=a.find("base"),y=null;h.url=function(a,c){l!==b.location&&(l=b.location);m!==b.history&&(m=b.history);if(a){if(x!=a){var e=x&&Fa(x)===Fa(a);x=a;if(!e&&d.history)c?m.replaceState(null,"",a):(m.pushState(null,"",a),L.attr("href",L.attr("href")));else if(e||(y=a),c)l.replace(a);else if(e){var e=l,f;f=a.indexOf("#");f=-1===f?"":a.substr(f+1);e.hash=f}else l.href=a;return h}}else return y||l.href.replace(/%27/g,"'")};
	var aa=[],P=!1;h.onUrlChange=function(a){if(!P){if(d.history)D(b).on("popstate",g);if(d.hashchange)D(b).on("hashchange",g);else h.addPollFn(g);P=!0}aa.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=L.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},ba="",Q=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===v?k.cookie=escape(a)+"=;path="+Q+";expires=Thu, 01 Jan 1970 00:00:00 GMT":E(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+Q).length+1,4096<
	d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==ba)for(ba=k.cookie,d=ba.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),N[a]===v&&(N[a]=unescape(e.substring(h+1))));return N}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(B),!0):!1}}function Nd(){this.$get=["$window","$log",
	"$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=F({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},n=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!H(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),
	b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};n=q=null},destroy:function(){m=h=k=null;delete a[b]},info:function(){return F({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",
	function(b){return b("templates")}]}function fc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Da(a,"directive");E(a)?(Cb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);O(g)?g={compile:Z(g)}:!g.compile&&g.link&&(g.compile=Z(g.link));g.priority=g.priority||0;g.index=
	f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Xb(k));return this};this.aHrefSanitizationWhitelist=function(b){return G(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return G(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache",
	"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,q,p,s,K,w,t,x,L){function y(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=P(a,b,a,c,d,e);aa(a,"ng-scope");return function(b,c,d,e){Cb(b,"scope");var g=c?Ma.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",
	b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function aa(a,b){try{a.addClass(b)}catch(c){}}function P(a,b,c,d,e,f){function g(a,c,d,e){var f,p,m,l,q,n,w;f=c.length;var s=Array(f);for(l=0;l<f;l++)s[l]=c[l];n=l=0;for(q=k.length;l<q;n++)p=s[n],c=k[l++],f=k[l++],c?(c.scope?(m=a.$new(),D.data(p,"$scope",m)):m=a,w=c.transcludeOnThisElement?N(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(f,m,p,d,w)):f&&f(a,p.childNodes,v,e)}for(var k=[],p,m,l,q,n=0;n<a.length;n++)p=new Nb,m=ba(a[n],[],p,0===
	n?d:v,e),(f=m.length?J(m,a[n],p,b,c,null,[],[],f):null)&&f.scope&&aa(p.$$element,"ng-scope"),p=f&&f.terminal||!(l=a[n].childNodes)||!l.length?null:P(l,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function N(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ba(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:da(b,qa(Na(a).toLowerCase()),
	"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,K=!1;l=n[w];if(!u||8<=u||l.specified){p=l.name;m=$(l.value);l=qa(p);if(q=U.test(l))p=mb(l.substr(6),"-");var x=l.replace(/(Start|End)$/,"");l===x+"Start"&&(t=p,K=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,nc(a,l)&&(c[l]=!0);S(a,b,m,l);da(b,l,"A",d,g,t,K)}}a=a.className;if(E(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),da(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+
	p[0].length);break;case 3:if(11===u)for(;a.parentNode&&a.nextSibling&&3===a.nextSibling.nodeType;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);A(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),da(b,l,"M",d,g)&&(c[l]=$(p[2]))}catch(y){}}b.sort(H);return b}function Q(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<
	e)}else d.push(a);return D(d)}function C(a,b,c){return function(d,e,f,g,k){e=Q(e[0],b,c);return a(d,e,f,g,k)}}function J(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=I.require;a.directiveName=z;if(L===I||I.$$isolateScope)a=qc(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=I.require;b.directiveName=z;if(L===I||I.$$isolateScope)b=qc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(E(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),
	"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else M(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function K(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&(b=a,a=v);Ga&&(c=ba);return n(a,b,c)}var x,R,y,N,C,Q,ba={},ra;x=c===f?d:ha(d,new Nb(D(f),d.$attr));R=x.$$element;if(L){var ve=/^\s*([@=&])(\??)\s*(\w*)\s*$/;Q=e.$new(!0);!J||J!==L&&J!==L.$$originalDirective?R.data("$isolateScopeNoTemplate",
	Q):R.data("$isolateScope",Q);aa(R,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(ve)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,m,n,q;Q.$$isolateBindings[c]=d+f;switch(d){case "@":x.$observe(f,function(a){Q[c]=a});x.$$observers[f].$$scope=e;x[f]&&(Q[c]=b(x[f])(e));break;case "=":if(g&&!x[f])break;m=p(x[f]);q=m.literal?Ba:function(a,b){return a===b||a!==a&&b!==b};n=m.assign||function(){k=Q[c]=m(e);throw ja("nonassign",x[f],L.name);};k=Q[c]=m(e);Q.$watch(function(){var a=m(e);q(a,Q[c])||(q(a,k)?
	n(e,a=Q[c]):Q[c]=a);return k=a},null,m.literal);break;case "&":m=p(x[f]);Q[c]=function(a){return m(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}ra=n&&w;P&&r(P,function(a){var b={$scope:a===L||a.$$isolateScope?Q:e,$element:R,$attrs:x,$transclude:ra},c;C=a.controller;"@"==C&&(C=x[a.name]);c=s(C,b);ba[a.name]=c;Ga||R.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(y=k.length;g<y;g++)try{N=k[g],N(N.isolateScope?Q:e,R,x,N.require&&t(N.directiveName,N.require,
	R,ba),ra)}catch(u){m(u,ia(R))}g=e;L&&(L.template||null===L.templateUrl)&&(g=Q);a&&a(g,f.childNodes,v,n);for(g=q.length-1;0<=g;g--)try{N=q[g],N(N.isolateScope?Q:e,R,x,N.require&&t(N.directiveName,N.require,R,ba),ra)}catch(I){m(I,ia(R))}}n=n||{};for(var x=-Number.MAX_VALUE,N,P=n.controllerDirectives,L=n.newIsolateScopeDirective,J=n.templateDirective,da=n.nonTlbTranscludeDirective,H=!1,F=!1,Ga=n.hasElementTranscludeDirective,A=d.$$element=D(c),I,z,u,S=e,Oa,ka=0,U=a.length;ka<U;ka++){I=a[ka];var X=I.$$start,
	Y=I.$$end;X&&(A=Q(c,X,Y));u=v;if(x>I.priority)break;if(u=I.scope)N=N||I,I.templateUrl||(eb("new/isolated scope",L,I,A),T(u)&&(L=I));z=I.name;!I.templateUrl&&I.controller&&(u=I.controller,P=P||{},eb("'"+z+"' controller",P[z],I,A),P[z]=I);if(u=I.transclude)H=!0,I.$$tlb||(eb("transclusion",da,I,A),da=I),"element"==u?(Ga=!0,x=I.priority,u=A,A=d.$$element=D(W.createComment(" "+z+": "+d[z]+" ")),c=A[0],ra(f,va.call(u,0),c),S=y(u,e,x,g&&g.name,{nonTlbTranscludeDirective:da})):(u=D(Jb(c)).contents(),A.empty(),
	S=y(u,e));if(I.template)if(F=!0,eb("template",J,I,A),J=I,u=O(I.template)?I.template(A,d):I.template,u=V(u),I.replace){g=I;u=Hb.test(u)?D($(u)):[];c=u[0];if(1!=u.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,A,c);U={$attr:{}};u=ba(c,[],U);var we=a.splice(ka+1,a.length-(ka+1));L&&G(u);a=a.concat(u).concat(we);B(d,U);U=a.length}else A.html(u);if(I.templateUrl)F=!0,eb("template",J,I,A),J=I,I.replace&&(g=I),K=ue(a.splice(ka,a.length-ka),A,d,f,H&&S,k,q,{controllerDirectives:P,newIsolateScopeDirective:L,
	templateDirective:J,nonTlbTranscludeDirective:da}),U=a.length;else if(I.compile)try{Oa=I.compile(A,d,S),O(Oa)?w(null,Oa,X,Y):Oa&&w(Oa.pre,Oa.post,X,Y)}catch(Z){m(Z,ia(A))}I.terminal&&(K.terminal=!0,x=Math.max(x,I.priority))}K.scope=N&&!0===N.scope;K.transcludeOnThisElement=H;K.templateOnThisElement=F;K.transclude=S;n.hasElementTranscludeDirective=Ga;return K}function G(a){for(var b=0,c=a.length;b<c;b++)a[b]=Zb(a[b],{$$isolateScope:!0})}function da(b,e,f,g,p,l,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;
	e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===v||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(l&&(q=Zb(q,{$$start:l,$$end:n})),b.push(q),p=q)}catch(x){m(x)}}return p}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(aa(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":
	"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),x=F({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),K=O(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;b.empty();n.get(t.getTrustedResourceUrl(K),{cache:q}).success(function(q){var n,t;q=V(q);if(s.replace){q=Hb.test(q)?D($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,K);q={$attr:{}};ra(d,b,n);var y=ba(n,[],q);T(s.scope)&&
	G(y);a=y.concat(a);B(c,q)}else n=w,b.html(q);a.unshift(x);l=J(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=P(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var L=p.shift(),C=p.shift(),y=b[0];if(t!==w){var Q=t.className;k.hasElementTranscludeDirective&&s.replace||(y=Jb(n));ra(L,D(t),y);aa(D(y),Q)}t=l.transcludeOnThisElement?N(q,l.transclude,C):C;l(m,q,y,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),
	p.push(a)):(l.transcludeOnThisElement&&(a=N(b,l.transclude,e)),l(m,b,c,d,a))}}function H(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function eb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function A(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&aa(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||aa(e,"ng-binding");
	a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Na(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Na(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=
	!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<p;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);c[D.expando]=d[D.expando];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=
	c;b.length=1}function qc(a,b){return F(function(){return a.apply(null,arguments)},a,b)}var Nb=function(a,b){this.$$element=a;this.$attr=b||{}};Nb.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&x.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&x.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?x.removeClass(this.$$element,d):0===d.length?x.addClass(this.$$element,c):x.setClass(this.$$element,c,d)},$set:function(a,b,c,
	d){var e=nc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Na(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=L(b,"src"===a);!1!==c&&(null===b||b===v?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||
	b(c[a])});return b}};var ka=b.startSymbol(),Ga=b.endSymbol(),V="{{"==ka||"}}"==Ga?ga:function(a){return a.replace(/\{\{/g,ka).replace(/}}/g,Ga)},U=/^ngAttr[A-Z]/;return y}]}function qa(b){return $a(b.replace(xe,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?F(b,a):
	b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;E(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:ec(f.$scope,h,!0)||ec(d,h,!0),Xa(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",h||e.name,k);f.$scope[k]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return D(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a=
	{},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=A($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function tc(b){var a=T(b)?b:v;return function(c){a||(a=sc(b));return c?a[A(c)]||null:a}}function uc(b,a,c){if(O(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){E(d)&&(d=d.replace(c,
	""),b.test(d)&&a.test(d)&&(d=$b(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Aa.call(a)&&"[object Blob]"!==Aa.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=
	F({},a,{data:uc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=F({},a.headers),d,f,b=F({},b.common,b[A(a.method)]);a:for(d in b){a=A(d);for(f in c)if(A(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){O(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);F(c,a);c.headers=d;c.method=Ja(c.method);var f=[function(a){d=
	a.headers;var c=uc(a.data,tc(d),a.transformRequest);H(c)&&r(d,function(a,b){"content-type"===A(b)&&delete d[b]});H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},v],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,
	b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function l(a,b,c,e){C&&(200<=a&&300>a?C.put(u,[a,b,sc(c),e]):C.remove(u));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:tc(d),config:c,statusText:e})}function s(){var a=Sa(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,J,u=K(c.url,c.params);
	p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(J=C.get(u),G(J)){if(J&&O(J.then))return J.then(s,s),J;M(J)?q(J[1],J[0],ha(J[2]),J[3]):q(J,200,{},"OK")}else C.put(u,r);H(J)&&((J=Ob(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:v)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=J),a(c.method,u,f,l,g,c.timeout,c.withCredentials,c.responseType));return r}function K(a,b){if(!b)return a;
	var c=[];Tc(b,function(a,b){null===a||H(a)||(M(a)||(a=[a]),r(a,function(a){T(a)&&(a=ua(a)?a.toISOString():oa(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(E(a)?q.get(a):q.invoke(a))});r(g,function(a,b){var c=E(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=
	function(b,c){return p(F(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(F(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function ye(b){if(8>=u&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!V.XMLHttpRequest))return new V.ActiveXObject("Microsoft.XMLHTTP");if(V.XMLHttpRequest)return new V.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window",
	"$document",function(b,a,c){return ze(b,ye,b.defer,a.angular.callbacks,c[0])}]}function ze(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){ab(f,"load",g);ab(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};rb(f,"load",g);rb(f,"error",g);8>=u&&(f.onreadystatechange=function(){E(f.readyState)&&/loaded|complete/.test(f.readyState)&&
	(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,l,m,n,q,p,s){function K(){t=g;L&&L();y&&y.abort()}function w(a,d,e,f,g){P&&c.cancel(P);L=y=null;0===d&&(d=e?200:"file"==wa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(B)}var t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==A(e)){var x="_"+(d.counter++).toString(36);d[x]=function(a){d[x].data=a;d[x].called=!0};var L=f(k.replace("JSON_CALLBACK","angular.callbacks."+
	x),x,function(a,b){w(m,a,d[x].data,"",b);d[x]=B})}else{var y=a(e);y.open(e,k,!0);r(n,function(a,b){G(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(y&&4==y.readyState){var a=null,b=null,c="";t!==g&&(a=y.getAllResponseHeaders(),b="response"in y?y.response:y.responseText);t===g&&10>u||(c=y.statusText);w(m,t||y.status,b,a,c)}};p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(aa){if("json"!==s)throw aa;}y.send(l||null)}if(0<q)var P=c(K,q);else q&&O(q.then)&&q.then(K)}}function Sd(){var b=
	"{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,l,m){for(var n,q,p=0,s=[],K=f.length,w=!1,t=[];p<K;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=K&&s.push(f.substring(p)),p=K);(K=s.length)||(s.push(""),K=1);if(m&&1<s.length)throw vc("noconcat",f);if(!l||w)return t.length=
	K,p=function(a){try{for(var b=0,c=K,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=m?e.getTrusted(m,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=vc("interr",f,h.toString()),d(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,
	k){var l=a.setInterval,m=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=G(k)&&!k;h=G(h)?h:0;q.then(null,null,d);q.$$intervalId=l(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),m(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
	GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
	SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Pb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=lb(b[a]);return b.join("/")}function wc(b,a,c){b=wa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||Ae[b.protocol]||null}
	function xc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=wa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=bc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function sa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function yc(b){return b.replace(/(#.+)|#$/,"$1")}function Qb(b){return b.substr(0,Fa(b).lastIndexOf("/")+
	1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Qb(b);wc(b,this,b);this.$$parse=function(a){var e=sa(c,a);if(!E(e))throw Rb("ipthprfx",a,c);xc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Pb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){var f,g;(f=sa(b,d))!==v?(g=f,g=(f=sa(a,f))!==v?c+(sa("/",f)||f):b+g):(f=sa(c,d))!==v?g=c+f:c==d+
	"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Sb(b,a){var c=Qb(b);wc(b,this,b);this.$$parse=function(d){var e=sa(b,d)||sa(c,d),e="#"==e.charAt(0)?sa(a,e):this.$$html5?e:"";if(!E(e))throw Rb("ihshprfx",d,a);xc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Pb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
	b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Sb.apply(this,arguments);var c=Qb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Fa(d)?f=d:(g=sa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Pb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function sb(b){return function(){return this[b]}}
	function Bc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return G(a)?(b=a,this):b};this.html5Mode=function(b){return G(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),l=d.url();a?(k=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Fa(l),
	e=Sb);h=new e(k,"#"+b);h.$$parseLinkUrl(l,l);var m=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=D(a.target);"a"!==A(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=wa(e.animVal).href);m.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),
	V.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=yc(d.url()),b=yc(h.absUrl()),e=h.$$replace;n&&a==b||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
	e),g(a))}));h.$$replace=!1;return n});return h}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return G(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||B;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});
	return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function la(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ea("isecfld",a);return b}function Cc(b,a){b+="";if(!E(b))throw ea("iseccst",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw ea("isecfn",a);if(b.document&&
	b.location&&b.alert&&b.setInterval)throw ea("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ea("isecdom",a);if(b===Object)throw ea("isecobj",a);}return b}function tb(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=la(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(xa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===v&&(b.$$v={}),b=b.$$v)}f=la(a.shift(),d);ma(b[f],d);return b[f]=c}function Pa(b){return"constructor"==
	b}function Dc(b,a,c,d,e,f,g){la(b,f);la(a,f);la(c,f);la(d,f);la(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,l=k||Pa(b)?h:ga,m=k||Pa(a)?h:ga,n=k||Pa(c)?h:ga,q=k||Pa(d)?h:ga,p=k||Pa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=l(k[b]))&&k.then&&(xa(f),"$$v"in k||(t=k,t.$$v=v,t.then(function(a){t.$$v=l(a)})),k=l(k.$$v));if(!a)return k;if(null==k)return v;(k=m(k[a]))&&k.then&&(xa(f),"$$v"in k||(t=k,t.$$v=v,t.then(function(a){t.$$v=
	m(a)})),k=m(k.$$v));if(!c)return k;if(null==k)return v;(k=n(k[c]))&&k.then&&(xa(f),"$$v"in k||(t=k,t.$$v=v,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return v;(k=q(k[d]))&&k.then&&(xa(f),"$$v"in k||(t=k,t.$$v=v,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return v;(k=p(k[e]))&&k.then&&(xa(f),"$$v"in k||(t=k,t.$$v=v,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);
	if(!a)return h;if(null==h)return v;h=m(h[a]);if(!c)return h;if(null==h)return v;h=n(h[c]);if(!d)return h;if(null==h)return v;h=q(h[d]);return e?null==h?v:h=p(h[e]):h}}function Be(b,a){return function(c,d){return b(c,d,xa,ma,a)}}function Ec(b,a,c){var d=a.expensiveChecks,e=d?Ce:De;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Dc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Dc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=v,b=h;while(e<g);return h};
	else{var k="var p;\n";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(f,function(b,e){la(b,c);var f=(e?"s":'((l&&l.hasOwnProperty("'+b+'"))?l:s)')+'["'+b+'"]',g=d||Pa(b);g&&(f="eso("+f+", fe)",l=!0);k+="if(s == null) return undefined;\ns="+f+";\n";a.unwrapPromises&&(k+='if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v='+(g?"eso(v)":"v")+";});\n}\n s="+(g?"eso(s.$$v)":"s.$$v")+"\n}\n")});k+="return s;";
	h=new Function("s","l","pw","eso","fe",k);h.toString=Z(k);if(l||a.unwrapPromises)h=Be(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Yd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return G(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return G(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,
	unwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};xa=function(a){c.logPromiseWarnings&&!Fc.hasOwnProperty(a)&&(Fc[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var l;switch(typeof e){case "string":var m=f?a:b;if(m.hasOwnProperty(e))return m[e];l=f?g:c;var n=new Tb(l);l=(new fb(n,d,l)).parse(e);"hasOwnProperty"!==e&&(m[e]=l);return l;case "function":return e;
	default:return B}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ee(function(a){b.$evalAsync(a)},a)}]}function Ee(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],l,m;return m={resolve:function(a){if(g){var c=g;g=v;l=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=
	c[d],b[2](a)})}},promise:{then:function(b,f,h){var m=e(),K=function(d){try{m.resolve((O(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},w=function(b){try{m.resolve((O(f)?f:d)(b))}catch(c){m.reject(c),a(c)}},t=function(b){try{m.notify((O(h)?h:c)(b))}catch(d){a(d)}};g?g.push([K,w,t]):l.then(K,w,t);return m.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,
	!1)}return g&&O(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&O(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((O(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,
	when:function(h,l,m,n){var q=e(),p,s=function(b){try{return(O(l)?l:c)(b)}catch(d){return a(d),g(d)}},K=function(b){try{return(O(m)?m:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(O(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,K,w)))},function(a){p||(p=!0,q.resolve(K(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=M(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,
	--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=
	e;return f}]}function Zd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=
	{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function l(a,b){var c=f(a);Xa(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
	this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=l(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!O(b)){var h=l(b||B,"listener");g.fn=function(a,
	b,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ta(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ta(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Ra(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,
	k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Ra(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,
	L,y,v=b,P,N=[],u,Q,C;k("$digest");g.$$checkUrlChange();c=null;do{y=!1;for(P=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(J){q.$$phase=null,e(J)}c=null}a:do{if(l=P.$$watchers)for(L=l.length;L--;)try{if(d=l[L])if((f=d.get(P))!==(h=d.last)&&!(d.eq?Ba(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))y=!0,c=d,d.last=d.eq?Ia(f,null):f,d.fn(f,h===n?f:h,P),5>v&&(u=4-v,N[u]||(N[u]=[]),Q=O(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,Q+="; newVal: "+oa(f)+"; oldVal: "+
	oa(h),N[u].push(Q));else if(d===c){y=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=P.$$childHead||P!==this&&P.$$nextSibling))for(;P!==this&&!(l=P.$$nextSibling);)P=P.$parent}while(P=l);if((y||m.length)&&!v--)throw q.$$phase=null,a("infdig",b,oa(N));}while(y||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(G){e(G)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Ab(null,m,this)),a.$$childHead==
	this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=B,this.$on=this.$watch=function(){return B})}},
	$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
	(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Sa(c,b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(va.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;
	f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(va.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;
	return q}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return G(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return G(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!u||8<=u)if(f=wa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Fe(b){if("self"===b)return b;if(E(b)){if(-1<b.indexOf("***"))throw ya("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
	"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw ya("imatcher");}function Gc(b){var a=[];G(b)&&r(b,function(b){a.push(Fe(b))});return a}function be(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
	function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ya("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ya("icontext",
	a,b);if(null===b||b===v||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===v||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=wa(d.toString()),m,n,q=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ob(f):b[m].exec(f.href)){q=!0;break}if(q)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ob(f):a[m].exec(f.href)){q=!1;break}if(q)return d;throw ya("insecurl",
	d.toString());}if(c===fa.HTML)return e(d);throw ya("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ya("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
	e.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=A(b);e[$a("parse_as_"+c)]=function(b){return f(a,b)};e[$a("get_trusted_"+c)]=function(b){return g(a,b)};e[$a("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(A((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
	{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,m=!1,n=!1;if(l){for(var q in l)if(m=k.exec(q)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!d||m&&n||(m=E(f.body.style.webkitTransition),n=E(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
	g),hasEvent:function(a){if("input"==a&&9==u)return!1;if(H(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ya(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:u,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var l=c.defer(),m=l.promise,n=G(k)&&!k;h=a.defer(function(){try{l.resolve(e())}catch(a){l.reject(a),d(a)}finally{delete f[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;f[h]=l;
	return m}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function wa(b,a){var c=b;u&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:
	"/"+X.pathname}}function Ob(b){b=E(b)?wa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=Z(V)}function jc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ge);a("json",He);a("limitTo",Ie);a("lowercase",Je);a("number",Kc);a("orderBy",Lc);a("uppercase",Ke)}function Ge(){return function(b,
	a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Wa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
	b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
	b[g];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&
	m[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var m=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(m=g.length-n,l=0;l<m;l++)0===(m-l)%q&&0!==l&&(h+=c),h+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%n&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,
	e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Ub(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ub(e,a,d)}}function ub(b,a){return function(c,d){var e=c["get"+b](),f=Ja(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?
	a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;E(c)&&(c=Le.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
	if(!ua(c))return c;for(;e;)(k=Me.exec(e))?(g=g.concat(va.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Ne[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function He(){return function(b){return oa(b,!0)}}function Ie(){return function(b,a){return M(b)||E(b)?(a=Infinity===Math.abs(Number(a))?Number(a):U(a))?0<a?b.slice(0,a):b.slice(a):E(b)?"":[]:b}}function Lc(b){return function(a,c,d){function e(a,b){return Va(b)?function(b,c){return a(c,b)}:a}function f(a,
	b){var c=typeof a,d=typeof b;return c==d?(ua(a)&&ua(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=M(c)?c:[c];0===c.length&&(c=["+"]);c=Vc(c,function(a){var c=!1,d=a||ga;if(E(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),
	d(b))},c)});return va.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function za(b){O(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Z(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?vb:wb)+c,(a?wb:vb)+c)}var f=this,g=b.parent().controller("form")||xb,h=0,k=f.$error={},l=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Qa);e(!0);f.$addControl=function(a){Da(a.$name,
	"input");l.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ta(l,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ta(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=Sa(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,
	yb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,yb);d.addClass(b,Qa);f.$dirty=!1;f.$pristine=!0;r(l,function(a){a.$setPristine()})}}function ta(b,a,c,d){b.$setValidity(a,c);return c?d:v}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Oe(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function zb(b,a,c,d,e,f){var g=a.prop(Pe),
	h=a[0].placeholder,k={},l=A(a[0].type);d.$$validityState=g;if(!e.android){var m=!1;a.on("compositionstart",function(a){m=!0});a.on("compositionend",function(){m=!1;n()})}var n=function(e){if(!m){var f=a.val();if(u&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==l&&Va(c.ngTrim||"T")&&(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",
	n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return ta(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,
	e,ia(a));return ta(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ta(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ta(d,"maxlength",d.$isEmpty(a)||a.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<
	a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(E(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var p=
	k(l,1);h.$addClass(p)}else if(!Ba(b,m)){var s=e(m),p=d(l,s),l=d(s,l),l=k(l,-1),p=k(p,1);0===p.length?c.removeClass(g,l):0===l.length?c.addClass(g,p):c.setClass(g,p,l)}}m=ha(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Pe="validity",A=function(b){return E(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,
	Ja=function(b){return E(b)?b.toUpperCase():b},u,D,Ea,va=[].slice,Qe=[].push,Aa=Object.prototype.toString,Ua=z("ng"),Wa=V.angular||(V.angular={}),Za,Na,na=["0","0","0"];u=U((/msie (\d+)/.exec(A(navigator.userAgent))||[])[1]);isNaN(u)&&(u=U((/trident\/.*; rv:(\d+)/.exec(A(navigator.userAgent))||[])[1]));B.$inject=[];ga.$inject=[];var M=function(){return O(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Aa.call(b)}}(),$=function(){return String.prototype.trim?function(b){return E(b)?
	b.trim():b}:function(b){return E(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Na=9>u?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ja(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Ya=function(){if(G(Ya.isActive_))return Ya.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ya.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.29",major:1,minor:2,
	dot:29,codeName:"ultimate-deprecation"};S.expando="ng339";var bb=S.cache={},ne=1,rb=V.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},ab=V.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,je=/^moz([A-Z])/,Gb=z("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,le=/<([\w:]+)/,me=
	/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ca={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ca.optgroup=ca.option;ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead;ca.th=ca.td;var Ma=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?
	setTimeout(a):(this.on("DOMContentLoaded",a),S(V).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Qe,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[A(b)]=b});var oc={};r("input select option textarea button form details".split(" "),function(b){oc[Ja(b)]=!0});r({data:Lb,removeData:Kb},function(b,
	a){S[a]=b});r({data:Lb,inheritedData:pb,scope:function(b){return D.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:lc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Mb,css:function(b,a,c){a=$a(a);if(G(c))b.style[a]=c;else{var d;8>=u&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=u&&(d=""===
	d?v:d);return d}},attr:function(b,a,c){var d=A(a);if(qb[d])if(G(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||B).specified?d:v;else if(G(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?v:b},prop:function(b,a,c){if(G(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?b[e]:"";b[e]=d}var a=[];9>u?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
	b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Na(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ka(d[c]);b.innerHTML=a},empty:mc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==mc&&(2==b.length&&b!==Mb&&b!==lc?a:d)===v){if(T(a)){for(e=0;e<g;e++)if(b===Lb)b(this[e],a);else for(f in a)b(this[e],
	f,a[f]);return this}e=b.$dv;g=e===v?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Kb,dealoc:Ka,on:function a(c,d,e,f){if(G(f))throw Gb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var m=W.body.contains||W.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:
	a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else rb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:kc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,
	e=a.parentNode;Ka(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c)[0];var d=
	a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ka(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;H(f)&&(f=!Mb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=
	a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Jb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:B,type:e,target:a},c.type&&(e=F(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,
	h=0;h<this.length;h++)H(g)?(g=a(this[h],c,e,f),G(g)&&(g=D(g))):Ib(g,a(this[h],c,e,f));return G(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});cb.prototype={put:function(a,c){this[La(a,this.nextUid)]=c},get:function(a){return this[La(a,this.nextUid)]},remove:function(a){var c=this[a=La(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,db=z("$injector"),Re=z("$animate"),
	Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Re("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();
	c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=E(c)?c:M(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=E(c)?c:M(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){ob(a,c);nb(a,g)});h&&d(h)},enabled:B}}]}],ja=z("$compile");fc.$inject=["$provide","$$sanitizeUriProvider"];var xe=/^(x[\:\-_]|data[\:\-_])/i,vc=z("$interpolate"),Se=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ae={http:80,https:443,ftp:21},
	Rb=z("$location");Ac.prototype=Sb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:sb("$$absUrl"),url:function(a){if(H(a))return this.$$url;a=Se.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:sb("$$protocol"),host:sb("$$host"),port:sb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||
	ib(a))a=a.toString(),this.$$search=bc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Rb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var ea=z("$parse"),Fc={},xa,Te=Function.prototype.call,Ue=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},"true":function(){return!0},
	"false":function(){return!1},undefined:B,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return G(d)?G(e)?d+e:d:G(e)?e:v},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(G(d)?d:0)-(G(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":B,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
	c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ve={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
	Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=v;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;
	continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},
	peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=G(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ea("lexerr",
	a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=A(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,
	fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=gb[c],d.literal=!0,d.constant=!0;
	else{var k=Ec(c,this.options,this.text);d.fn=F(function(a,c){return k(a,c)},{assign:function(d,e){return tb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+
	f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ve[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=F(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();
	0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
	d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ea("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=
	this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return F(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return F(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return F(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<
	this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,
	e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());
	this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",
	">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):
	this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return F(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return tb(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return F(function(e,f){var g=a(e,f),h=Cc(d(e,f),c.text),k;la(h,c.text);if(!g)return v;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(k=g,"$$v"in g||(k.$$v=v,k.then(function(a){k.$$v=
	a})),g=g.$$v);return g},{assign:function(e,f,g){var h=la(Cc(d(e,g),c.text),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,l=0;l<d.length;l++)h.push(ma(d[l](f,g),e.text));l=a(f,g,k)||B;ma(k,e.text);var m=e.text;if(l){if(l.constructor===l)throw ea("isecfn",m);if(l===Te||l===Ue||Qc&&l===
	Qc)throw ea("isecff",m);}h=l.apply?l.apply(k,h):l(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return F(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),
	d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return F(function(c,d){for(var e={},k=0;k<a.length;k++){var l=a[k];e[l.key]=l.value(c,d)}return e},{literal:!0,constant:c})}};var De={},Ce={},ya=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},X=W.createElement("a"),Hc=wa(V.location.href,!0);jc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",
	Ne={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:ub("Month"),MMM:ub("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:ub("Day"),EEE:ub("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ub(Math[0<a?
	"floor":"ceil"](a/60),2)+Ub(Math.abs(a%60),2))}},Me=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Le=/^\-?\d+$/;Jc.$inject=["$locale"];var Je=Z(A),Ke=Z(Ja);Lc.$inject=["$parse"];var dd=Z({restrict:"E",compile:function(a,c){8>=u&&(c.href||c.name||c.$set("href",""),a.append(W.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Aa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
	a.preventDefault()})}}}),Eb={};r(qb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Eb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Eb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Aa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),u&&g&&e.prop(g,f[h])):"href"===
	a&&f.$set(h,null)})}}}});var xb={$addControl:B,$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};rb(e[0],"submit",h);e.on("$destroy",function(){c(function(){ab(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),
	l=f.name||f.ngForm;l&&tb(a,l,g,l);if(k)e.on("$destroy",function(){k.$removeControl(g);l&&tb(a,l,v,l);F(g,xb)})}}}}}]},ed=Rc(),rd=Rc(!0),We=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Xe=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ye=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:zb,number:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ye.test(a))return e.$setValidity("number",
	!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return v});Oe(e,"number",Ze,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ta(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ta(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ta(e,"number",e.$isEmpty(a)||
	ib(a),a)})},url:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ta(e,"url",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ta(e,"email",e.$isEmpty(a)||Xe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
	d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;E(f)||(f=!0);E(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:B,button:B,submit:B,reset:B,file:B},Ze=["badInput"],gc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
	link:function(d,e,f,g){g&&(Sc[A(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],vb="ng-valid",wb="ng-invalid",Qa="ng-pristine",yb="ng-dirty",$e=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?wb:vb)+c);g.addClass(e,(a?vb:wb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
	d.name;var k=f(d.ngModel),l=k.assign;if(!l)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=B;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||xb,n=0,q=this.$error={};e.addClass(Qa);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
	!0;g.removeClass(e,yb);g.addClass(e,Qa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Qa),g.addClass(e,yb),m.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,l(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=
	c,p.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:$e,link:function(a,c,d,e){var f=e[0],g=e[1]||xb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=Z({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),hc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
	!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):v});e.$isEmpty=function(a){return!a||!a.length}}}},af=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
	compile:function(a,c){return af.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=za({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==v?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
	kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],md=Vb("",!0),od=Vb("Odd",0),nd=Vb("Even",1),pd=za({compile:function(a,c){c.$set("ngCloak",v);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],ic={},bf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
	function(a){var c=qa("ng-"+a);ic[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};bf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(f){Va(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+
	" ");h={clone:c};a.enter(c,d.parent(),d)})):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=Db(h.clone),a.leave(l,function(){l=null}),h=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Wa.noop,compile:function(g,h){var k=h.ngInclude||h.src,l=h.onload||"",m=h.autoscroll;return function(g,h,p,r,K){var w=0,t,x,u,y=function(){x&&(x.remove(),x=null);t&&(t.$destroy(),t=null);
	u&&(e.leave(u,function(){x=null}),x=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!G(m)||m&&!g.$eval(m)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=K(c,function(a){y();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(l)}}).error(function(){p===w&&y()}),g.$emit("$includeContentRequested")):(y(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
	link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=za({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=za({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(m[A(c.replace("when","").replace("Minus","-"))]=
	f.attr(g.$attr[c]))});r(m,function(a,e){n[e]=c(a.replace(d,q+h+"-"+l+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var l=g.ngRepeat,m=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,u,v,t={$id:La};if(!m)throw d("iexp",
	l);g=m[1];h=m[2];(m=m[3])?(n=a(m),q=function(a,c,d){v&&(t[v]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return La(c)},s=function(a){return a});m=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",g);u=m[3]||m[1];v=m[2];var x={};e.$watchCollection(h,function(a){var g,h,m=f[0],n,t={},G,C,J,A,E,B,z,H=[];if(Ra(a))B=a,E=q||p;else{E=q||s;B=[];for(J in a)a.hasOwnProperty(J)&&"$"!=J.charAt(0)&&B.push(J);B.sort()}G=B.length;h=H.length=B.length;for(g=0;g<h;g++)if(J=a===
	B?g:B[g],A=a[J],n=E(J,A,g),Da(n,"`track by` id"),x.hasOwnProperty(n))z=x[n],delete x[n],t[n]=z,H[g]=z;else{if(t.hasOwnProperty(n))throw r(H,function(a){a&&a.scope&&(x[a.id]=a)}),d("dupes",l,n,oa(A));H[g]={id:n};t[n]=!1}for(J in x)x.hasOwnProperty(J)&&(z=x[J],g=Db(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=B.length;g<h;g++){J=a===B?g:B[g];A=a[J];z=H[g];H[g-1]&&(m=H[g-1].clone[H[g-1].clone.length-1]);if(z.scope){C=z.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
	z.clone[0]!=n&&c.move(Db(z.clone),null,D(m));m=z.clone[z.clone.length-1]}else C=e.$new();C[u]=A;v&&(C[v]=J);C.$index=g;C.$first=0===g;C.$last=g===G-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=W.createComment(" end ngRepeat: "+l+" ");c.enter(a,null,D(m));m=a;z.scope=C;z.clone=a;t[z.id]=z})}x=t})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Va(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
	function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Va(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=za(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=
	l.length;n<q;++n){var p=h[n];l[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;l.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=za({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
	za({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=za({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],cf=z("ngOptions"),Ed=Z({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
	/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:B};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,l={},m=e,n;k.databound=d.ngModel;k.init=function(a,c,d){m=a;n=d};k.addOption=function(c){Da(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
	k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+La(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=B})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&A.prop("selected",!0)):H(a)&&A?c.val(""):e.renderUnknownOption(a)};
	c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=G(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
	s,v,w;s=g.$modelValue;v=B(e)||[];var E=n?Wb(v):v,H,R,C;R={};C=!1;if(p)if(k=g.$modelValue,y&&M(k))for(C=new cb([]),d={},w=0;w<k.length;w++)d[m]=k[w],C.put(y(e,d),k[w]);else C=new cb(k);w=C;var F,L;for(C=0;H=E.length,C<H;C++){k=C;if(n){k=E[C];if("$"===k.charAt(0))continue;R[n]=k}R[m]=v[k];d=r(e,R)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=G(w.remove(y?y(e,R):A(e,R))):(y?(d={},d[m]=s,d=y(e,d)===y(e,R)):d=s===A(e,R),w=w||d);F=l(e,R);F=G(F)?F:"";k.push({id:y?y(e,R):n?E[C]:C,label:F,selected:d})}p||(z||null===
	s?a[""].unshift({id:"",label:"",selected:!w}):w||a[""].unshift({id:"?",label:"",selected:!0}));R=0;for(E=c.length;R<E;R++){d=c[R];k=a[d];D.length<=R?(s={element:x.clone().attr("label",d),label:k.label},v=[s],D.push(v),f.append(s.element)):(v=D[R],s=v[0],s.label!=d&&s.element.attr("label",s.label=d));F=null;C=0;for(H=k.length;C<H;C++)d=k[C],(w=v[C+1])?(F=w.element,w.label!==d.label&&(F.text(w.label=d.label),F.prop("label",w.label)),w.id!==d.id&&F.val(w.id=d.id),F[0].selected!==d.selected&&(F.prop("selected",
	w.selected=d.selected),u&&F.prop("selected",w.selected))):(""===d.id&&z?L=z:(L=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),v.push({element:L,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,L),F?F.after(L):s.element.append(L),F=L);for(C++;v.length>C;)d=v.pop(),q.removeOption(d.label),d.element.remove()}for(;D.length>R;)D.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw cf("iexp",s,ia(f));var l=c(k[2]||k[1]),
	m=k[4]||k[6],n=k[5],r=c(k[3]||""),A=c(k[2]?k[1]:m),B=c(k[7]),y=k[8]?c(k[8]):null,D=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=B(e)||[],d={},k,l,q,r,s,t,u;if(p)for(l=[],r=0,t=D.length;r<t;r++)for(a=D[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(y)for(u=0;u<c.length&&(d[m]=c[u],y(e,d)!=k);u++);else d[m]=c[k];l.push(A(e,d))}}else if(k=f.val(),"?"==k)l=v;else if(""===
	k)l=null;else if(y)for(u=0;u<c.length;u++){if(d[m]=c[u],y(e,d)==k){l=A(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=A(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(B,h);e.$watchCollection(function(){var a={},c=B(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,A,t=D(W.createElement("option")),x=D(W.createElement("optgroup")),
	B=t.clone();h=0;for(var y=g.children(),E=y.length;h<E;h++)if(""===y[h].value){A=z=y.eq(h);break}q.init(k,z,B);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?m(e,g,k):l(e,g,k,q)}}}}],id=["$interpolate",function(a){var c={addOption:B,removeOption:B};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound?
	d.prop("selected",!1):m=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],hd=Z({restrict:"E",terminal:!0});V.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=V.jQuery)&&Ea.fn.on?(D=Ea,F(Ea.fn,{scope:Ma.scope,isolateScope:Ma.isolateScope,controller:Ma.controller,injector:Ma.injector,inheritedData:Ma.inheritedData}),Fb("remove",!0,!0,!1),Fb("empty",
	!1,!1,!1),Fb("html",!1,!1,!0)):D=S,Wa.element=D,$c(Wa),D(W).ready(function(){Xc(W,cc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	var app = angular.module("dtzsApp", ['ui.alert', 'ui.router', 'mainApp', 'tsxzApp', 'fcjyApp', 'ssgdpApp', 'qsnsrApp', 'nsrdjApp', 'dssrApp', 'fhysrApp', 'wbmlwApp', 'qsdssrApp', 'sssbApp', 'srpmApp', 'fszsrApp','gdpcx']);
	app.controller('left_nav', ['$scope', '$rootScope', function ($scope, $rootScope) {
	    //点击显示隐藏的侧边导航栏
	    //$(".more").click(function(){
	    //    $(".more_info").addClass("on");
	    //});
	    //$(".more_info_close").bind({
	    //    click:function(){
	    //        $(".more_info").removeClass("on");
	    //    },
	    //    mouseover:function(){
	    //        $(this).css('cursor','pointer')
	    //    }
	    //});
	}]);
	app.factory('mainService', ['$http', '$q', function ($http, $q) {
	    return {
	        query: function (url, date) {
	            var defer = $q.defer();
	            $http({
	                method: 'GET',
	                url: url,
	                // 'http://localhost:8080/gt3/dtzs/sssbdt'
	                params: {
	                    sssbtjsj: date
	                }
	            })
	                .success(function (data) {
	                    defer.resolve(data);
	                })
	                .error(function () {
	                });
	            return defer.promise;
	        }
	    }
	}])
	    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	        $urlRouterProvider.otherwise('/');
	        $stateProvider.state('index', {
	            url: '/',
	            views: {
	                header: {},
	                main: {
	                    templateUrl: 'views/main.html',
	                    controller: 'mainCtrl'
	                }
	            }
	        })
	            .state('tsxz', {
	                url: '/tsxz',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/tesexiaoz.html',
	                        controller: 'tsxzCtrl'
	                    }
	                }
	            })
	            .state('fcjy', {
	                url: '/fcjy',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/fcjyqkzs.html',
	                        controller: 'fcjyCtrl'
	                    }
	                }
	            })
	            .state('ssgdp', {
	                url: '/ssgdp',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/ssgdp.html',
	                        controller: 'ssgdpCtrl'
	                    }
	                }
	            }).state('gdpinfo', {
	                url: '/gdpinfo',
	                views: {
	                    main: {
	                        templateUrl: 'gdpInfo/index.html',
	                        controller: 'gdpcxCtrl'
	                    }
	                }
	            })
	            .state('qsnsr', {
	                url: '/qsnsr',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/qsnsr.html',
	                        controller: 'qsnsrCtrl'
	                    }
	                }
	            })
	            .state('nsrdj', {
	                url: '/nsrdj',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/nsrdjzcqknddb.html',
	                        controller: 'nsrdjCtrl'
	                    }
	                }
	            })
	            .state('dssr', {
	                url: '/dssr',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/dssrnddb.html',
	                        controller: 'dssrCtrl'
	                    }
	                }
	            })
	            .state('fhysr', {
	                url: '/fhysr',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/fhysrqk.html',
	                        controller: 'fhysrCtrl'
	                    }
	                }
	            })
	            .state('wbmlw', {
	                url: '/wbmlw',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/wbmlw_2.html',
	                        controller: 'wbmlwCtrl'
	                    }
	                }
	            })
	            .state('qsdssr', {
	                url: '/qsdssr',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/qsdssrztzs.html',
	                        controller: 'qsdssrCtrl'
	                    }
	                }
	            })
	            .state('sssb', {
	                url: '/sssb',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/sssbqkjk.html',
	                        controller: 'sssbCtrl'
	                    }
	                }
	            })
	            .state('srpm', {
	                url: '/srpm',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/dqsrpm.html',
	                        controller: 'srpmCtrl'
	                    }
	                }
	            })
	            .state('fszsr', {
	                url: '/fszsr',
	                views: {
	                    header: {
	                        templateUrl: 'views/header.html',
	                        controller: 'left_nav'
	                    },
	                    main: {
	                        templateUrl: 'views/fszsrqk.html',
	                        controller: 'fszsrCtrl'
	                    }
	                }
	            });
	    }])
	    .run(['$templateCache', '$rootScope', '$state', '$stateParams', '$http', '$interval', 'URL',
	        function ($templateCache, $rootScope, $state, $stateParams, $http, $interval, URL) {
	            $rootScope.curYear = (new Date()).getFullYear();
	            console.log($rootScope.curYear);
	            $rootScope.URL = URL;
	            $rootScope.post = function (url, obj) {
	                var data = [];
	                angular.forEach(obj, function (value, key) {
	                    data.push(key + '=' + value);
	                });
	                var param = data.join('#*^@^*#');
	                //console.log(param);
	                param = param.replace(/\"/g, '');
	                //console.log(param);
	                return $http({
	                    method: 'POST',
	                    url: URL + '/tfdapp/ajax.sword?r=' + Math.random(),
	                    data: 'postData={"tid": "' + url + '?' + param + '"}',
	                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
	                });
	            };
	            $rootScope.$state = $state;
	            $rootScope.$stateParams = $stateParams;
	            //每个页面的标题
	            $rootScope.titles = {
	                'index': '浙江地税动态展示',
	                'qsnsr': '全省纳税人登记注册情况',
	                'nsrdj': '纳税人登记注册情况年度对比',
	                'dssr': '地税收入年度对比',
	                'fszsr': '分税种收入情况',
	                'sssb': '实时申报情况监控',
	                'tsxz': '特色小镇展示',
	                'qsdssr': '全省地税收入整体展示',
	                'srpm': '地区收入排名',
	                'wbmlw': '外部门联网',
	                'fhysr': '分行业收入情况',
	                'ssgdp': '部分省市GDP与税收对比',
	                'fcjy': '房产交易情况展示'
	            };
	            //右上角的页面切换逻辑实现
	            var stateArr = ['qsnsr', 'nsrdj', 'dssr', 'fszsr', 'sssb', 'tsxz', 'qsdssr', 'srpm', 'wbmlw', 'fhysr', 'ssgdp', 'fcjy'];
	            var back = function () {
	                console.log("$state",$stateParams);
	                if (stateArr.indexOf($state.current.name) == 0) {
	                    return stateArr[stateArr.length - 1];
	                } else {
	                    var index = stateArr.indexOf($state.current.name);
	                    return stateArr[index - 1];
	                }
	            };
	            var forward = function () {
	                if (stateArr.indexOf($state.current.name) == stateArr.length - 1) {
	                    return stateArr[0];
	                } else {
	                    var index = stateArr.indexOf($state.current.name);
	                    return stateArr[index + 1];
	                }
	            };
	            $rootScope.changeState = function (flag) {
	                flag ? $state.go(forward()) : $state.go(back());
	            };
	            //左侧导航栏的显示与隐藏
	            $rootScope.addOn = function () {
	                $rootScope.isShow = true;
	            };
	            $rootScope.removeOn = function (e) {
	                $(".more_info").removeClass("on");
	                $rootScope.isShow = false;
	            };
	            $rootScope.$on('$stateChangeSuccess',
	                function (event, toState, toParams, fromState, fromParams) {
	                    $templateCache.removeAll();
	                    $rootScope.launchFullScreen = function () {
	                        if (document.documentElement.requestFullscreen) {
	                            document.documentElement.requestFullscreen();
	                        } else if (document.documentElement.mozRequestFullScreen) {
	                            document.documentElement.mozRequestFullScreen();
	                        } else if (document.documentElement.webkitRequestFullscreen) {
	                            document.documentElement.webkitRequestFullscreen();
	                        } else if (document.documentElement.msRequestFullscreen) {
	                            document.documentElement.msRequestFullscreen();
	                        }
	                    };
	                })
	        }
	    ]);
	//app.constant("URL", "http://localhost:8080/dtzs/gt3");
	//app.constant("URL", "http://144.12.66.10:6001/dtzs/root/gt3");
	//app.constant("URL", "/dtzs/root/gt3");
	//app.constant("URL", "http://144.16.54.56:8088");
	app.constant("URL", "http://144.16.54.58:8088");


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by bom on 2017/03/09.
	 */
	//���ֹ���
	    ;(function($) {
	        $.fn.numberAnimate = function(setting) {
	            var defaults = {
	                speed : 1000,//�����ٶ�
	                num : "", //��ʼ��ֵ
	                iniAnimate : true, //�Ƿ�Ҫ��ʼ������Ч��
	                symbol : '',//Ĭ�ϵķָ����ţ�ǧ������ǧ��
	                dot : 0 //������λС����
	            };
	            //����settingΪ�գ���ȡdefault��ֵ
	            var setting = $.extend(defaults, setting);

	            //���������ж�������ʾ����
	            if($(this).length > 1){
	                alert("just only one obj!");
	                return;
	            }

	            //����δ���ó�ʼ��ֵ����ʾ����
	            if(setting.num == ""){
	                alert("must set a num!");
	                return;
	            }
	            var nHtml = '<div class="mt-number-animate-dom" data-num="{{num}}">\
	            <span class="mt-number-animate-span">1</span>\
	            <span class="mt-number-animate-span">1</span>\
	            <span class="mt-number-animate-span">2</span>\
	            <span class="mt-number-animate-span">3</span>\
	            <span class="mt-number-animate-span">4</span>\
	            <span class="mt-number-animate-span">5</span>\
	            <span class="mt-number-animate-span">6</span>\
	            <span class="mt-number-animate-span">7</span>\
	            <span class="mt-number-animate-span">8</span>\
	            <span class="mt-number-animate-span">9</span>\
	            <span class="mt-number-animate-span">0</span>\
	            <span class="mt-number-animate-span">,</span>\
	          </div>';

	            //���ִ���
	            var numToArr = function(num){
	               // num = parseFloat(num).toFixed(setting.dot);
	                if(typeof(num) == 'number'){
	                    var arrStr = num.toString().split("");
	                }else{
	                    var arrStr = num.split("");
	                }
	                //console.log(arrStr);
	                return arrStr;
	            };

	            //����DOM symbol:�ָ�����
	            var setNumDom = function(arrStr){
	                var shtml = '<div class="mt-number-animate">';
	                for(var i=0,len=arrStr.length; i<len; i++){
	                    if(i != 0 && (len-i)%3 == 0 && setting.symbol != "" && arrStr[i]!="."){
	                        shtml += '<div class="mt-number-animate-dot">'+setting.symbol+'</div>'+nHtml.replace("{{num}}",arrStr[i]);
	                    }else{
	                        shtml += nHtml.replace("{{num}}",arrStr[i]);
	                    }
	                }
	                shtml += '</div>';
	                return shtml;
	            };

	            //ִ�ж���
	            var runAnimate = function($parent){
	                $parent.find(".mt-number-animate-dom").each(function() {
	                    var num = $(this).attr("data-num");
	                    //num = (num=="."?10:num);
	                    num=num=="0"?10:num==","?11:num;
	                    var spanHei = $(this).height()/12; //11ΪԪ�ظ���
	                    var thisTop = -num*spanHei+"px";
	                    if(thisTop != $(this).css("top")){
	                        if(setting.iniAnimate){
	                            //HTML5��֧��
	                            if(!window.applicationCache){
	                                $(this).animate({
	                                    top : thisTop
	                                }, setting.speed);
	                            }else{
	                                $(this).css({
	                                    'transform':'translateY('+thisTop+')',
	                                    '-ms-transform':'translateY('+thisTop+')',   /* IE 9 */
	                                    '-moz-transform':'translateY('+thisTop+')',  /* Firefox */
	                                    '-webkit-transform':'translateY('+thisTop+')', /* Safari �� Chrome */
	                                    '-o-transform':'translateY('+thisTop+')',
	                                    '-ms-transition':setting.speed/1000+'s',
	                                    '-moz-transition':setting.speed/1000+'s',
	                                    '-webkit-transition':setting.speed/1000+'s',
	                                    '-o-transition':setting.speed/1000+'s',
	                                    'transition':setting.speed/1000+'s'
	                                });
	                            }
	                        }else{
	                            setting.iniAnimate = true;
	                            $(this).css({
	                                top : thisTop
	                            });
	                        }
	                    }
	                });
	            };

	            //��ʼ��
	            var init = function($parent){
	                //��ʼ��
	                $parent.html(setNumDom(numToArr(setting.num)));
	                runAnimate($parent);
	            };

	            //���ò���
	            this.resetData = function(num){
	                var newArr = numToArr(num);
	                var $dom = $(this).find(".mt-number-animate-dom");
	                if($dom.length < newArr.length){
	                    $(this).html(setNumDom(numToArr(num)));
	                }else{
	                    $dom.each(function(index, el) {
	                        $(this).attr("data-num",newArr[index]);
	                    });
	                }
	                runAnimate($(this));
	            };
	            //init
	            init($(this));
	            return this;
	        }
	    })(jQuery);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by dingtianxiu on 16/5/4.
	 * descript:全省地税收入整体展示
	 */

	var app = angular.module("qsdssrApp", ['ui.alert']);
	app.controller("qsdssrCtrl", ['$scope', 'qsdssrMainService', '$filter', 'alertService', '$interval',"$http", function ($scope, qsdssrMainService, $filter, alertService, $interval,$http) {
	    alertService.mask();
	    $scope.years = [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1, $scope.curYear];
	    $scope.selectedYear = $scope.curYear;
	    //取得dom节点
	    $scope.myChart = echarts3.init(document.getElementById('qsdssrMap'));

	    // var cityData=['杭州市','湖州市','金华市','嘉兴市','丽水市','宁波市','衢州市','绍兴市','台州市','温州市','舟山市'];
	    //定义失去的自动显示顺序
	    var city1Index = 0;
	    var city1 = ['湖州市', '嘉兴市', '杭州市', '绍兴市', '宁波市', '舟山市', '衢州市', '金华市', '台州市', '丽水市', '温州市'];
	    //定义每个市各个县的自动显示顺序
	    var city2Index = 0;
	    var city2 = {
	        '湖州市': ['长兴县', '湖州市区', '安吉县', '德清县'],
	        '嘉兴市': ['嘉善县', '嘉兴市区', '桐乡市', '海宁市', '海盐县', '平湖市'],
	        '杭州市': ['余杭区', '杭州市区', '萧山区', '临安市', '富阳区', '桐庐县', '淳安县', '建德市'],
	        '绍兴市': ['柯桥区', '越城区', '上虞区', '诸暨市', '嵊州市', '新昌县'],
	        '宁波市': ['余姚市', '慈溪市', '宁波市区', '勤州区', '奉化市', '宁海县', '象山县'],
	        '舟山市': ['嵊泗县', '岱山县', '定海区', '普陀区'],
	        '衢州市': ['开化县', '常山县', '衢州市区', '龙游县', '江山市'],
	        '金华市': ['浦江县', '兰溪市', '义乌市', '东阳市', '金华市区', '武义县', '永康市', '磐安县'],
	        '台州市': ['天台县', '三门县', '仙居县', '临海市', '黄岩区', '椒江区', '路桥区', '温岭市', '玉环县'],
	        '丽水市': ['遂昌县', '松阳县', '丽水市区', '缙云县', '龙泉市', '云和县', '青田县', '庆元县', '景宁畲族自治区'],
	        '温州市': ['永嘉县', '乐清市', '温州市区', '泰顺县', '文成县', '瑞安市', '平阳县', '苍南县']
	    };
	    var codeTable = {
	        //杭州
	        //"330001": "省局直属局",
	        "330101": "杭州市区",//西湖区、拱墅区、上城区、下城区、滨江区
	        "330122": "桐庐县",
	        "330123": "富阳区",
	        "330124": "临安市",
	        "330125": "余杭区",
	        "330126": "建德市",
	        "330127": "淳安县",
	        "330181": "萧山区",
	        //宁波
	        "330201": "宁波市区",//北仑区、镇海区、江北区、江东区、海曙区
	        //"330202": "保税区",
	        //"330203": "海曙区",
	        //"330204": "江东区",
	        //"330205": "江北区",
	        //"330206": "北仑区",
	        //"330207": "宁波高新分局",
	        //"330208": "东钱湖分局",
	        //"330209": "大榭开发区",
	        //"330211": "镇海区",
	        //"330212": "宁波杭州湾分局",
	        "330225": "象山县",
	        "330226": "宁海县",
	        "330227": "鄞州区",
	        "330281": "余姚市",
	        "330282": "慈溪市",
	        "330283": "奉化市",
	        //"330285": "宁波契税征收管理中心",
	        //温州
	        "330301": "温州市区",//鹿城区、龙湾区、瓯海区
	        //"330322": "洞头区局",
	        "330323": "乐清市",
	        "330324": "永嘉县",
	        "330326": "平阳县",
	        "330327": "苍南县",
	        "330328": "文成县",
	        "330329": "泰顺县",
	        "330381": "瑞安市",
	        //嘉兴
	        "330401": "嘉兴市区",//南湖区、秀洲区
	        "330421": "嘉善县",
	        "330422": "平湖市",
	        "330424": "海盐县",
	        "330425": "桐乡市",
	        "330481": "海宁市",
	        //湖州
	        "330501": "湖州市区",//南浔区、吴兴区
	        "330521": "德清县",
	        "330522": "长兴县",
	        "330523": "安吉县",
	        //绍兴
	        "330601": "越城区",//越城区>>绍兴市局本级
	        "330621": "柯桥区",
	        "330624": "新昌县",
	        "330681": "诸暨市",
	        "330682": "上虞区",
	        "330683": "嵊州市",
	        //金华
	        "330701": "金华市区",//金东区、婺城区
	        "330722": "永康市",
	        "330723": "武义县",
	        "330725": "义乌市",
	        "330726": "浦江县",
	        "330727": "磐安县",
	        "330781": "兰溪市",
	        "330783": "东阳市",
	        //衢州
	        "330801": "衢州市区",//柯城区、衢江区
	        "330822": "常山县",
	        "330823": "江山市",
	        "330824": "开化县",
	        "330825": "龙游县",
	        //舟山
	        "330901": "舟山市区",
	        "330902": "定海区",
	        "330903": "普陀区",
	        "330921": "岱山县",
	        "330922": "嵊泗县",
	        //丽水
	        "332501": "丽水市区",
	        "332502": "龙泉市",
	        "332522": "青田县",
	        "332523": "云和县",
	        "332525": "庆元县",
	        "332526": "缙云县",
	        "332527": "遂昌县",
	        "332528": "松阳县",
	        "332529": "景宁畲族自治县",
	        //台州
	        "332601": "台州市区",
	        "332602": "椒江区",
	        "332603": "路桥区",
	        "332604": "黄岩区",
	        "332621": "临海市",
	        "332623": "温岭市",
	        "332624": "仙居县",
	        "332625": "天台县",
	        "332626": "三门县",
	        "332627": "玉环县"
	    };
	    //保存地图显示数据
	    var mapData = [];

	    //保存各市数据
	    var hzData = {};
	    var nbData = {};
	    var wzData = {};
	    var jxData = {};
	    var hz1Data = {};
	    var sxData = {};
	    var jhData = {};
	    var qzData = {};
	    var zsData = {};
	    var lsData = {};
	    var tzData = {};
	    var yhData = {};

	    //取得浙江省16年数据,处理
	    $scope.totalViewData = {};
	    $scope.allCityData = {};
	    $scope.totalViewData.qszzsr = 0;
	    $scope.totalViewData.qssssr = 0;
	    $scope.totalViewData.qsfsssr = 0;
	    $scope.totalViewData.qssbjj = 0;


	    //取得各市16年数据,处理,县区数据可类似处理
	    var option = {
	        //tooltip提示框
	        tooltip: {
	            trigger: 'item',
	            position: 'inside',
	            //position: ['50%', '50%'],
	            hideDelay: 3000,
	            formatter: function (params) {
	                //console.log(params);
	                if (!params.data) {
	                    return;
	                }
	                var res = params.data.name + '<hr style="margin: 2% 0"/>' +
	                    '<span style="float: left"> 地税组织收入(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.zzsr / 10000, 2) + '</span>' +
	                    '<br/><span style="float: left"> 税&nbsp;&nbsp;收&nbsp;&nbsp;收&nbsp;&nbsp;入&nbsp;(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.sssr / 10000, 2) + '</span>' +
	                    '<br/><span style="float: left"> 非&nbsp;&nbsp;税&nbsp;&nbsp;收&nbsp;&nbsp;入&nbsp;(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.fsssr / 10000, 2) + '</span>' +
	                    '<br/><span style="float: left"> 社保基金收入(万元)：</span><span style="color: yellow; float: right">' + $filter('number')(params.data.sbjjsr / 10000, 2) + '</span>';
	                return res;
	            }
	        },
	        series: [
	            {
	                name: '浙江',
	                type: 'map',
	                mapType: '浙江',
	                top: '10%',
	                right: 0,
	                bottom: 0,
	                left: '5%',
	                //roam: 'scale',
	                //aspectScale: 1,
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: '#fff',
	                            fontSize: 16,
	                            fontFamily: '方正小标宋简体'
	                        }
	                    },
	                    emphasis: {
	                        show: true,
	                        textStyle: {
	                            color: '#fff',
	                            fontSize: 16,
	                            fontFamily: '方正小标宋简体'
	                        }
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        borderWidth: 1,
	                        borderColor: 'rgba(100,149,237,1)',
	                        areaColor: '#0066e5'
	                    },
	                    emphasis: {
	                        areaColor: 'rgb(231,195,90)'
	                    }
	                },
	                data: mapData
	            }
	        ]
	    };
	    $scope.changeYear = function () {
	        // 当地图显示的是某一个市的时候，选择年份要重新发送请求
	        if (option.series[0].name !== "浙江") {
	            //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, $scope.tybm, '0').then(function (cityData) {
	            //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:$scope.tybm,bj:0})
	            $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
	                .success(function (cityData) {
	               alertService.unmask();
	                var cityValue = JSON.parse(cityData.data[0].value);
	                var cityMapData = {};
	                console.log(cityValue);
	                angular.forEach(cityValue, function (value, key) {
	                    switch (parseInt(value.xmbmSz)) {
	                        case 1:
	                            if (!cityMapData[value.tybm]) {
	                                cityMapData[value.tybm] = {};
	                                cityMapData[value.tybm].name = codeTable[value.tybm];
	                                cityMapData[value.tybm].zzsr = value.nLj;
	                            } else {
	                                cityMapData[value.tybm].zzsr = value.nLj;
	                            }
	                            break;
	                        case 2:
	                            if (!cityMapData[value.tybm]) {
	                                cityMapData[value.tybm] = {};
	                                cityMapData[value.tybm].name = codeTable[value.tybm];
	                                cityMapData[value.tybm].sssr = value.nLj;
	                            } else {
	                                cityMapData[value.tybm].sssr = value.nLj;
	                            }
	                            break;
	                        case 18:
	                            if (!cityMapData[value.tybm]) {
	                                cityMapData[value.tybm] = {};
	                                cityMapData[value.tybm].name = codeTable[value.tybm];
	                                cityMapData[value.tybm].fsssr = value.nLj;
	                            } else {
	                                cityMapData[value.tybm].fsssr = value.nLj;
	                            }
	                            break;
	                        case 23:
	                            if (!cityMapData[value.tybm]) {
	                                cityMapData[value.tybm] = {};
	                                cityMapData[value.tybm].name = codeTable[value.tybm];
	                                cityMapData[value.tybm].sbjjsr = value.nLj;
	                            } else {
	                                cityMapData[value.tybm].sbjjsr = value.nLj;
	                            }
	                            break;
	                    }
	                });
	                var fmtMapData = [];
	                angular.forEach(cityMapData, function (value, key) {
	                    fmtMapData.push(value);
	                });

	                option.series[0].data = fmtMapData;
	                console.log(fmtMapData);
	                option.series[0].name = $scope.jsonName;
	                option.series[0].mapType = $scope.jsonName;
	                $.get('ownGeo/zhejiang.json', function (geoJson) {
	                    echarts3.registerMap('浙江', geoJson);
	                    $scope.myChart.setOption(option);
	                });
	                console.log(option);
	                //$scope.myChart.setOption(option);
	                // param.event.stopPropagation(); //阻止事件冒泡
	            });
	        }

	        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, '33', '1')
	        //    .then(
	        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm: 33,bj:1})
	        $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj1.json")
	            .success(
	            function(data) {
	                $scope.qsData = JSON.parse(data.data[0].value);
	                for (var i = 0; i < $scope.qsData.length; i++) {
	                    switch (parseInt($scope.qsData[i].xmbmSz)) {
	                        case 1:
	                            $scope.totalViewData.qszzsr += $scope.qsData[i].nLj;
	                            break;
	                        case 2:
	                            $scope.totalViewData.qssssr += $scope.qsData[i].nLj;
	                            break;
	                        case 18:
	                            $scope.totalViewData.qsfsssr += $scope.qsData[i].nLj;
	                            break;
	                        case 23:
	                            $scope.totalViewData.qssbjj += $scope.qsData[i].nLj;
	                            break;
	                        default:
	                            break;
	                    }
	                }
	                angular.copy($scope.totalViewData, $scope.allCityData);
	            }).error(function () {
	                alertService.unmask();
	            })
	        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, '33', '0')
	        //    .then(
	        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:33,bj:0})
	            $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
	            .success(function (data) {
	                $scope.dsData = JSON.parse(data.data[0].value);
	                console.log("dsData", $scope.dsData);
	                for (var i = 0; i < $scope.dsData.length; i++) {
	                    switch (parseInt($scope.dsData[i].tybm)) {
	                        case 3301:
	                            // hzData.push($scope.dsData[i]);
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    hzData.name = "杭州市";
	                                    hzData.tybm = 3301;
	                                    hzData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    hzData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    hzData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    hzData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3302:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    nbData.name = "宁波市";
	                                    nbData.tybm = 3302;
	                                    nbData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    nbData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    nbData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    nbData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3303:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    wzData.name = "温州市";
	                                    wzData.tybm = 3303;
	                                    wzData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    wzData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    wzData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    wzData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3304:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    jxData.name = "嘉兴市";
	                                    jxData.tybm = 3304;
	                                    jxData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    jxData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    jxData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    jxData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3305:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    hz1Data.name = "湖州市";
	                                    hz1Data.tybm = 3305;
	                                    hz1Data.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    hz1Data.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    hz1Data.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    hz1Data.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3306:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    sxData.name = "绍兴市";
	                                    sxData.tybm = 3306;
	                                    sxData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    sxData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    sxData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    sxData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3307:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    jhData.name = "金华市";
	                                    jhData.tybm = 3307;
	                                    jhData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    jhData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    jhData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    jhData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3308:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    qzData.name = "衢州市";
	                                    qzData.tybm = 3308;
	                                    qzData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    qzData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    qzData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    qzData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3309:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    zsData.name = "舟山市";
	                                    zsData.tybm = 3309;
	                                    zsData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    zsData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    zsData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    zsData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3325:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    lsData.name = "丽水市";
	                                    lsData.tybm = 3325;
	                                    lsData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    lsData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    lsData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    lsData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        case 3326:
	                            switch (parseInt($scope.dsData[i].xmbmSz)) {
	                                case 1:
	                                    tzData.name = "台州市";
	                                    tzData.tybm = 3326;
	                                    tzData.zzsr = $scope.dsData[i].nLj;
	                                    break;
	                                case 2:
	                                    tzData.sssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 18:
	                                    tzData.fsssr = $scope.dsData[i].nLj;
	                                    break;
	                                case 23:
	                                    tzData.sbjjsr = $scope.dsData[i].nLj;
	                                    break;
	                                default:
	                                    break;
	                            }
	                            break;
	                        default:
	                            break;
	                    }

	                }
	                //数据压入mapData
	                mapData.push(hzData, nbData, wzData, jhData, hz1Data, jxData, sxData, qzData, zsData, lsData, tzData, yhData);
	                console.log(mapData);

	                $.get('ownGeo/zhejiang.json', function (geoJson) {
	                    echarts3.registerMap('浙江', geoJson);
	                    $scope.myChart.setOption(option);
	                });
	                //$scope.myChart.setOption(option);

	                //点击浙江地图地市,调出地市地图
	                $scope.myChart.on('click', function (params) {
	                    if (option.series[0].name === "浙江") {
	                        alertService.mask();
	                        $scope.totalViewData.qszzsr = params.data.zzsr;
	                        $scope.totalViewData.qssssr = params.data.sssr;
	                        $scope.totalViewData.qsfsssr = params.data.fsssr;
	                        $scope.totalViewData.qssbjj = params.data.sbjjsr;
	                        //$scope.$apply();
	                        $scope.jsonName = params.name;
	                        $scope.tybm = params.data.tybm;
	                        //点击地图发起请求 参数为变量3301
	                        //qsdssrMainService.query($scope.URL + '/srqk?', $scope.selectedYear, $scope.tybm, '0').then(
	                        //    function (cityData) {
	                        //$scope.post('CxglDtzs2016BLH_selectBjSr', {nf:$scope.selectedYear , tybm:$scope.tybm,bj:0})
	                        $http.get("data_json/qsdssr/nf"+$scope.selectedYear+"tybm33bj0.json")
	                            .success(function (cityData) {
	                            alertService.unmask();
	                            var cityValue = JSON.parse(cityData.data[0].value);
	                            var cityMapData = {};
	                            console.log(cityValue);
	                            angular.forEach(cityValue, function (value, key) {
	                                switch (parseInt(value.xmbmSz)) {
	                                    case 1:
	                                        if (!cityMapData[value.tybm]) {
	                                            cityMapData[value.tybm] = {};
	                                            cityMapData[value.tybm].name = codeTable[value.tybm];
	                                            cityMapData[value.tybm].zzsr = value.nLj;
	                                        } else {
	                                            cityMapData[value.tybm].zzsr = value.nLj;
	                                        }
	                                        break;
	                                    case 2:
	                                        if (!cityMapData[value.tybm]) {
	                                            cityMapData[value.tybm] = {};
	                                            cityMapData[value.tybm].name = codeTable[value.tybm];
	                                            cityMapData[value.tybm].sssr = value.nLj;
	                                        } else {
	                                            cityMapData[value.tybm].sssr = value.nLj;
	                                        }
	                                        break;
	                                    case 18:
	                                        if (!cityMapData[value.tybm]) {
	                                            cityMapData[value.tybm] = {};
	                                            cityMapData[value.tybm].name = codeTable[value.tybm];
	                                            cityMapData[value.tybm].fsssr = value.nLj;
	                                        } else {
	                                            cityMapData[value.tybm].fsssr = value.nLj;
	                                        }
	                                        break;
	                                    case 23:
	                                        if (!cityMapData[value.tybm]) {
	                                            cityMapData[value.tybm] = {};
	                                            cityMapData[value.tybm].name = codeTable[value.tybm];
	                                            cityMapData[value.tybm].sbjjsr = value.nLj;
	                                        } else {
	                                            cityMapData[value.tybm].sbjjsr = value.nLj;
	                                        }
	                                        break;
	                                }
	                            });
	                            var fmtMapData = [];
	                            angular.forEach(cityMapData, function (value, key) {
	                                fmtMapData.push(value);
	                            });

	                            option.series[0].data = fmtMapData;
	                            console.log(fmtMapData);
	                            option.series[0].name = $scope.jsonName;
	                            option.series[0].mapType = $scope.jsonName;
	                            $.get('ownGeo/zhejiang.json', function (geoJson) {
	                                echarts3.registerMap('浙江', geoJson);
	                                $scope.myChart.setOption(option);
	                            });
	                            console.log(option);
	                            //$scope.myChart.setOption(option);
	                            // param.event.stopPropagation(); //阻止事件冒泡
	                        });
	                    } else {
	                        angular.copy($scope.allCityData, $scope.totalViewData);
	                        $scope.$apply();
	                        option.series[0].data = mapData;
	                        console.log(mapData);
	                        option.series[0].name = '浙江';
	                        option.series[0].mapType = '浙江';
	                        $.get('ownGeo/zhejiang.json', function (geoJson) {
	                            echarts3.registerMap('浙江', geoJson);
	                            $scope.myChart.setOption(option);
	                        });
	                        //$scope.myChart.setOption(option);

	                    }
	                });
	                alertService.unmask();
	            }).error(
	            function () {
	                alertService.unmask();
	            }
	        );
	    };
	    $scope.changeYear();
	    $scope.imgSrc = './imges/play/blue_pause.png';
	    $scope.lunboTurn = function () {
	        if($scope.timer1){
	            $interval.cancel($scope.timer1);
	            $scope.timer1 = null;
	            option.tooltip.position = null;
	            angular.forEach(option.series[0].data, function (value, key) {
	                value.selected = false;
	            });
	            $scope.myChart.setOption(option);
	            console.log($scope.timer1);
	            $scope.imgSrc = './imges/play/blue_start.png';
	            return;
	        }
	        $scope.imgSrc = './imges/play/blue_pause.png';
	        $scope.timer1 = $interval(function () {
	            if (option.series[0].name === "浙江") {
	                if (city1Index == 11) {
	                    city1Index = 0
	                } else {
	                    city1Index++;
	                }
	                option.tooltip.position = 'inside';
	                console.log(option.series[0].data);
	                angular.forEach(option.series[0].data, function (value, key) {
	                    if (value.name == city1[city1Index]) {
	                        // 舟山市
	                        value.selected = true;
	                    } else {
	                        value.selected = false;
	                    }
	                });
	                $scope.myChart.setOption(option);
	                $scope.myChart.dispatchAction({
	                    type: 'showTip',
	                    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
	                    seriesIndex: 0,
	                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
	                    // dataIndex: number,
	                    // 可选，数据名称，在有 dataIndex 的时候忽略
	                    name: city1[city1Index]
	                });
	            } else {
	                if (city2Index == city2[option.series[0].name].length) {
	                    city2Index = 0
	                } else {
	                    city2Index++;
	                }
	                option.tooltip.position = 'inside';
	                console.log(option.series[0].data);
	                angular.forEach(option.series[0].data, function (value, key) {
	                    if (value.name == city2[option.series[0].name][city2Index]) {
	                        value.selected = true;
	                    } else {
	                        value.selected = false;
	                    }
	                });
	                $scope.myChart.setOption(option);
	                $scope.myChart.dispatchAction({
	                    type: 'showTip',
	                    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
	                    seriesIndex: 0,
	                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
	                    // dataIndex: number,
	                    // 可选，数据名称，在有 dataIndex 的时候忽略
	                    name: city2[option.series[0].name][city2Index]
	                });
	            }
	        }, 3000);
	    };
	    $scope.lunboTurn();
	    $scope.$on("$destroy", function () {
	        $scope.myChart.dispose();
	        $scope.timer1 && $interval.cancel($scope.timer1);
	        $scope.timer2 && $interval.cancel($scope.timer2);
	    })
	}]);

	//取数服务
	app.factory('qsdssrMainService', ['$http', '$q', 'alertService', function ($http, $q, alertService) {
	    return {
	        query: function (url, nf, tybm, bj) {
	            var defer = $q.defer();
	            $http({
	                method: 'GET',
	                url: url,
	                // 'http://144.16.55.49:8088/gt3/dtzs/sssbdt'
	                params: {
	                    nf: nf, //数据年份
	                    tybm: tybm, //数据编码,代表地区
	                    bj: bj //1:整体数据  2.分区数据
	                }
	            })
	                .success(function (data) {
	                    defer.resolve(data);
	                })
	                .error(function () {
	                    alertService.unmask();
	                });
	            return defer.promise;
	        }
	    }
	}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by ww on 2016/7/11.
	 */
	angular.module('wbmlwApp', [])
	    .controller('wbmlwCtrl', ['$window', '$interval', '$scope', '$timeout','alertService',"$http", function ($window, $interval, $scope, $timeout,alertService,$http) {
	        //$window.location.reload();
	        //$window.reload();
	        //$scope.$on('$viewContentLoaded',function(){
	        //$window.onload = function () {
	        //$(function(){
	        $timeout(function(){
	            var cishu = 0;
	            var data_count = null;
	            alertService.mask();
	            //银联
	            var one = document.getElementById("one");
	            var svg_1 = one.getSVGDocument();
	            //svg_1 ? '' : $window.location.reload();
	            var svgdoc_1 = svg_1.documentElement;
	            var po_1 = svgdoc_1.getElementsByTagName('defs')[0];
	            var linear_2 = po_1.getElementsByTagName('linearGradient')[0];
	            var stop_1_1 = linear_2.getElementsByTagName("stop")[0];
	            var stop_2_1 = linear_2.getElementsByTagName('stop')[1];
	            var stop_3_1 = linear_2.getElementsByTagName("stop")[2];

	            //工商部门
	            var two = document.getElementById("two");
	            var svg_2 = two.getSVGDocument();
	            var svgdoc_2 = svg_2.documentElement;
	            var po_2 = svgdoc_2.getElementsByTagName('defs')[0];
	            var linear_2 = po_2.getElementsByTagName('linearGradient')[0];
	            var stop_1_2 = linear_2.getElementsByTagName("stop")[0];
	            var stop_2_2 = linear_2.getElementsByTagName('stop')[1];
	            var stop_3_2 = linear_2.getElementsByTagName("stop")[2];

	            //人民银行
	            var three = document.getElementById("three");
	            var svg_3 = three.getSVGDocument();
	            var svgdoc_3 = svg_3.documentElement;
	            var po_3 = svgdoc_3.getElementsByTagName('defs')[0];
	            var linear_3 = po_3.getElementsByTagName('linearGradient')[0];
	            var stop_1_3 = linear_3.getElementsByTagName("stop")[0];
	            var stop_2_3 = linear_3.getElementsByTagName('stop')[1];
	            var stop_3_3 = linear_3.getElementsByTagName("stop")[2];

	            //公安部门
	            var for_ = document.getElementById("for");
	            var svg_4 = for_.getSVGDocument();
	            var svgdoc_4 = svg_4.documentElement;
	            var po_4 = svgdoc_4.getElementsByTagName('defs')[0];
	            var linear_4 = po_4.getElementsByTagName('linearGradient')[0];
	            var stop_1_4 = linear_4.getElementsByTagName("stop")[0];
	            var stop_2_4 = linear_4.getElementsByTagName('stop')[1];
	            var stop_3_4 = linear_4.getElementsByTagName("stop")[2];

	            //建设部门
	            var five = document.getElementById("five");
	            var svg_5 = five.getSVGDocument();
	            var svgdoc_5 = svg_5.documentElement;
	            var po_5 = svgdoc_5.getElementsByTagName('defs')[0];
	            var linear_5 = po_5.getElementsByTagName('linearGradient')[0];
	            var stop_1_5 = linear_5.getElementsByTagName("stop")[0];
	            var stop_2_5 = linear_5.getElementsByTagName('stop')[1];
	            var stop_3_5 = linear_5.getElementsByTagName("stop")[2];

	            //国土部门
	            var six = document.getElementById("six");
	            var svg_6 = six.getSVGDocument();
	            var svgdoc_6 = svg_6.documentElement;
	            var po_6 = svgdoc_6.getElementsByTagName('defs')[0];
	            var linear_6 = po_6.getElementsByTagName('linearGradient')[0];
	            var stop_1_6 = linear_6.getElementsByTagName("stop")[0];
	            var stop_2_6 = linear_6.getElementsByTagName('stop')[1];
	            var stop_3_6 = linear_6.getElementsByTagName("stop")[2];
	            //国税部门
	            var seven = document.getElementById("seven");
	            var svg_7 = seven.getSVGDocument();
	            var svgdoc_7 = svg_7.documentElement;
	            var po_7 = svgdoc_7.getElementsByTagName('defs')[0];
	            var linear_7 = po_7.getElementsByTagName('linearGradient')[0];
	            var stop_1_7 = linear_7.getElementsByTagName("stop")[0];
	            var stop_2_7 = linear_7.getElementsByTagName('stop')[1];
	            var stop_3_7 = linear_7.getElementsByTagName("stop")[2];

	            //社保
	            var et = document.getElementById("et");
	            var svg_8 = et.getSVGDocument();
	            var svgdoc_8 = svg_8.documentElement;
	            var po_8 = svgdoc_8.getElementsByTagName('defs')[0];
	            var linear_8 = po_8.getElementsByTagName('linearGradient')[0];
	            var stop_1_8 = linear_8.getElementsByTagName("stop")[0];
	            var stop_2_8 = linear_8.getElementsByTagName('stop')[1];
	            var stop_3_8 = linear_8.getElementsByTagName("stop")[2];

	            var gongs_bg = svgdoc_2.getElementsByTagName("path")[0];
	            var ga_bg = svgdoc_4.getElementsByTagName("path")[0];
	            var rh_bg = svgdoc_3.getElementsByTagName("path")[0];
	            var yl_bg = svgdoc_1.getElementsByTagName("path")[0];
	            var gs_bg = svgdoc_7.getElementsByTagName("path")[0];
	            var sb_bg = svgdoc_8.getElementsByTagName("path")[0];
	            var js_bg = svgdoc_5.getElementsByTagName("path")[0];
	            var gt_bg = svgdoc_6.getElementsByTagName("path")[0];

	            gongs_bg.removeAttribute("style");
	            gongs_bg.setAttribute("fill", "#1e3465");
	            ga_bg.removeAttribute("style");
	            ga_bg.setAttribute("fill", "#1e3465");
	            rh_bg.removeAttribute("style");
	            rh_bg.setAttribute("fill", "#1e3465");
	            yl_bg.removeAttribute("style");
	            yl_bg.setAttribute("fill", "#1e3465");
	            gs_bg.removeAttribute("style");
	            gs_bg.setAttribute("fill", "#1e3465");
	            sb_bg.removeAttribute("style");
	            sb_bg.setAttribute("fill", "#1e3465");
	            js_bg.removeAttribute("style");
	            js_bg.setAttribute("fill", "#1e3465");
	            gt_bg.removeAttribute("style");
	            gt_bg.setAttribute("fill", "#1e3465");

	            var i = 0;
	            var j = 100;
	            $scope.timer1 = $interval(function () {
	                stop_1_1.setAttribute('offset', i + '%');
	                stop_2_1.setAttribute('offset', i + "%");
	                stop_3_1.setAttribute("offset", i + 10 + "%");

	                stop_1_2.setAttribute('offset', j + '%');
	                stop_2_2.setAttribute('offset', j + "%");
	                stop_3_2.setAttribute("offset", j + 10 + "%");

	                stop_1_3.setAttribute('offset', i + '%');
	                stop_2_3.setAttribute('offset', i + "%");
	                stop_3_3.setAttribute("offset", i + 10 + "%");

	                stop_1_4.setAttribute('offset', i + '%');
	                stop_2_4.setAttribute('offset', i + "%");
	                stop_3_4.setAttribute("offset", i + 10 + "%");

	                stop_1_5.setAttribute('offset', i + '%');
	                stop_2_5.setAttribute('offset', i + "%");
	                stop_3_5.setAttribute("offset", i + 10 + "%");

	                stop_1_6.setAttribute('offset', i + '%');
	                stop_2_6.setAttribute('offset', i + "%");
	                stop_3_6.setAttribute("offset", i + 10 + "%");

	                stop_1_7.setAttribute('offset', i + '%');
	                stop_2_7.setAttribute('offset', i + "%");
	                stop_3_7.setAttribute("offset", i + 10 + "%");

	                stop_1_8.setAttribute('offset', i + '%');
	                stop_2_8.setAttribute('offset', i + "%");
	                stop_3_8.setAttribute("offset", i + 10 + "%");

	                i -= 1;
	                j -= 2;
	                if (i <= 0) {
	                    i = 100
	                }
	                if (j <= 0) {
	                    j = 100
	                }
	            }, 20);
	            $(".centerBox").click(function (e) {
	                var tar = e.target;
	                switch (e.target.className) {
	                    case "sbbm_bg bg_all":
	                        $(".sbbm_bg").css({"opacity": 0, "z-index": 10});
	                        $(".sbbm").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "sbbm":
	                        $(".sbbm").css({"opacity": 0, "z-index": 10});
	                        $(".sbbm_bg").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "gsbm_bg bg_all":
	                        $(".gsbm_bg").css({"opacity": 0, "z-index": 10});
	                        $(".gsbm").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "gsbm":
	                        $(".gsbm_bg").css({"opacity": 1, "z-index": 1000});
	                        $(".gsbm").css({"opacity": 0, "z-index": 10});
	                        break;
	                    case "ylhgsy_2_bg bg_all":
	                        $(".ylhgsy_2_bg").css({"opacity": 0, "z-index": 10});
	                        $(".ylhgsy_2").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "ylhgsy_2":
	                        $(".ylhgsy_2_bg").css({"opacity": 1, "z-index": 1000});
	                        $(".ylhgsy_2").css({"opacity": 0, "z-index": 10});
	                        break;
	                    case "gabm_bg bg_all":
	                        $(".gabm_bg").css({"opacity": 0, "z-index": 10});
	                        $(".gabm").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "gabm":
	                        $(".gabm").css({"opacity": 0, "z-index": 10});
	                        $(".gabm_bg").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "rmyh_bg bg_all":
	                        $(".rmyh").css({"opacity": 1, "z-index": 1000});
	                        $(".rmyh_bg").css({"opacity": 0, "z-index": 10});
	                        break;
	                    case "rmyh":
	                        $(".rmyh").css({"opacity": 0, "z-index": 10});
	                        $(".rmyh_bg").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "ylhgsy_bg bg_all":
	                        $(".ylhgsy_bg").css({"opacity": 0, "z-index": 10});
	                        $(".ylhgsy").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "ylhgsy":
	                        $(".ylhgsy").css({"opacity": 0, "z-index": 10});
	                        $(".ylhgsy_bg").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "gtbm":
	                        $(".gtbm").css({"opacity": 0, "z-index": 10});
	                        $(".gtbm_bg").css({"opacity": 1, "z-index": 1000});
	                        break;
	                    case "gtbm_bg bg_all":
	                        $(".gtbm").css({"opacity": 1, "z-index": 1000});
	                        $(".gtbm_bg").css({"opacity": 0, "z-index": 10});
	                        break;
	                    default:
	                        "";

	                }

	            })
	            $("#two").css('z-index', 1);
	            var data_count = null;    //获取到的数据
	            var cishu = 0;


	            //$.ajax({
	            //        type: 'get',
	            //        url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=3",
	            //        success: function (data) {
	            //            alertService.unmask();
	            //            data_count = data.root.wbmGrid[0];
	            //            var rh = data_count.rh;
	            //            //人行4s增加的数据;
	            //            var rh_zz = rh / 6 / 150;
	            //            rh = parseInt(rh - rh / 6);
	            //
	            //            var ga = data_count.ga;
	            //            var ga_zz = ga / 6 / 150;
	            //            ga = parseInt(ga - ga / 6);
	            //
	            //            var yl = data_count.yl;
	            //            var yl_zz = yl / 6 / 150;
	            //            yl = parseInt(yl - yl / 6);
	            //
	            //            var gongs = data_count.gongs;
	            //            var gongs_zz = gongs / 6 / 150;
	            //            gongs = parseInt(gongs - gongs / 6);
	            //
	            //            var gs = data_count.gs;
	            //            var gs_zz = gs / 6 / 150;
	            //            gs = parseInt(gs - gs / 6);
	            //
	            //            var sb = data_count.sb;
	            //            var sb_zz = sb / 6 / 150;
	            //            sb = parseInt(sb - sb / 6);
	            //            $scope.numRun1 = $(".numberRun1").numberAnimate({num: rh, speed: 1000});
	            //            $scope.numRun2 = $(".numberRun2").numberAnimate({num: ga, speed: 1000});
	            //            $scope.numRun3 = $(".numberRun3").numberAnimate({num: yl, speed: 1000});
	            //            $scope.numRun4 = $(".numberRun4").numberAnimate({num: gongs, speed: 1000});
	            //            $scope.numRun5 = $(".numberRun5").numberAnimate({num: gs, speed: 1000});
	            //            $scope.numRun6 = $(".numberRun6").numberAnimate({num: sb, speed: 1000});
	            //            $(".mt-number-animate-span").css({fontSize:'24px'});
	            //            $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
	            //            //得到数据之后让背景颜色动起来
	            //            if(gongs) {
	            //                gongs_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#two").css('z-index', 1);
	            //            }
	            //            if(ga) {
	            //                ga_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#for_").css('z-index',1)
	            //            }
	            //            if(rh){
	            //            rh_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#three").css('z-index',1)
	            //            }
	            //            if(yl) {
	            //                yl_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#one").css('z-index',1)
	            //            }
	            //            if(gs) {
	            //                gs_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#seven").css('z-index',1)
	            //            }
	            //            if(sb) {
	            //                sb_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                $("#et").css('z-index',1)
	            //
	            //
	            //            }
	            //            var nums1 = rh;
	            //            var nums2 = ga;
	            //            var nums3 = yl;
	            //            var nums4 = gongs;
	            //            var nums5 = gs;
	            //            var nums6 = sb;
	            //            $scope.intv = $interval(function () {
	            //                cishu++;
	            //                if (cishu >= 150) {
	            //                    cishu = 0;
	            //                    $.ajax(
	            //                        {
	            //                            type: 'get',
	            //                            url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=1",
	            //                            success: function (data) {
	            //                                gongs_bg.removeAttribute("style");
	            //                                gongs_bg.setAttribute("fill", "#1e3465");
	            //                                ga_bg.removeAttribute("style");
	            //                                ga_bg.setAttribute("fill", "#1e3465");
	            //                                rh_bg.removeAttribute("style");
	            //                                rh_bg.setAttribute("fill", "#1e3465");
	            //                                yl_bg.removeAttribute("style");
	            //                                yl_bg.setAttribute("fill", "#1e3465");
	            //                                gs_bg.removeAttribute("style");
	            //                                gs_bg.setAttribute("fill", "#1e3465");
	            //                                sb_bg.removeAttribute("style");
	            //                                sb_bg.setAttribute("fill", "#1e3465");
	            //                                data_count = data.root.wbmGrid[0];
	            //                                if (data_count.gongs == 0 || data_count.gongs == null) {
	            //                                    gongs_bg.removeAttribute("style");
	            //                                    gongs_bg.setAttribute("fill", "#1e3465")
	            //                                } else {
	            //                                    gongs_bg.setAttribute("style", "fill:url(#orange_red)")
	            //                                }
	            //                                if (data_count.ga == 0 || data_count.ga == null) {
	            //                                    ga_bg.removeAttribute("style");
	            //                                    ga_bg.setAttribute("fill", "#1e3465");
	            //                                } else {
	            //                                    ga_bg.setAttribute("style", "fill:url(#orange_red)")
	            //                                }
	            //                                if (data_count.rh == 0 || data_count.rh == null) {
	            //                                    rh_bg.removeAttribute("style");
	            //                                    rh_bg.setAttribute("fill", "#1e3465");
	            //                                } else {
	            //                                    rh_bg.setAttribute("style", "fill:url(#orange_red)")
	            //                                }
	            //                                if (data_count.yl == 0 || data_count.yl == null) {
	            //                                    yl_bg.removeAttribute("style");
	            //                                    yl_bg.setAttribute("fill", "#1e3465");
	            //                                } else {
	            //                                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                                }
	            //                                if (data_count.gs == 0 || data_count.gs == null) {
	            //                                    gs_bg.removeAttribute("style");
	            //                                    gs_bg.setAttribute("fill", "#1e3465");
	            //                                } else {
	            //                                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                                }
	            //                                if (data_count.sb == 0 || data_count.sb == null) {
	            //                                    sb_bg.removeAttribute("style");
	            //                                    sb_bg.setAttribute("fill", "#1e3465");
	            //                                } else {
	            //                                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
	            //                                }
	            //                                rh = data_count.rh;
	            //                                rh_zz = rh / 6 / 150;
	            //
	            //                                ga = data_count.ga;
	            //                                ga_zz = ga / 6 / 150;
	            //
	            //                                yl = data_count.yl;
	            //                                yl_zz = yl / 6 / 150;
	            //
	            //                                gongs = data_count.gongs;
	            //                                gongs_zz = gongs / 6 / 150;
	            //
	            //                                gs = data_count.gs;
	            //                                gs_zz = gs / 6 / 150;
	            //
	            //                                sb = data_count.sb;
	            //                                sb_zz = sb / 6 / 150;
	            //                            }
	            //                        }
	            //                    )
	            //                }
	            //                //nums1 += 500000000;
	            //                //nums2 += 500000000;
	            //                //nums3 += 500000000;
	            //                //nums4 += 500000000;
	            //                //nums5 += 500000000;
	            //                //nums6 += 500000000;
	            //                nums1 += rh_zz;
	            //                nums2 += ga_zz;
	            //                nums3 += yl_zz;
	            //                nums4 += gongs_zz;
	            //                nums5 += gs_zz;
	            //                nums6 += sb_zz;
	            //                if ($scope.numRun1 !== undefined) {
	            //                    $scope.numRun1.resetData(parseInt(nums1));
	            //                }
	            //                if ($scope.numRun2 !== undefined) {
	            //                    $scope.numRun2.resetData(parseInt(nums2));
	            //                }
	            //                if ($scope.numRun3 !== undefined) {
	            //                    $scope.numRun3.resetData(parseInt(nums3));
	            //                }
	            //                if ($scope.numRun4 !== undefined) {
	            //                    $scope.numRun4.resetData(parseInt(nums4));
	            //                }
	            //                if ($scope.numRun5 !== undefined) {
	            //                    $scope.numRun5.resetData(parseInt(nums5));
	            //                }
	            //                if ($scope.numRun6 !== undefined) {
	            //                    $scope.numRun6.resetData(parseInt(nums6));
	            //                }
	            //                $(".mt-number-animate-span").css({fontSize:'24px'});
	            //                $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
	            //                alertService.unmask();
	            //            }, 4000);
	            //
	            //        },
	            //        error: function () {
	            //            alertService.unmask();
	            //        }
	            //    });

	            //$scope.post('CxglDtzs2016BLH_selectWbmlw', {tjsj:0,jgsj:600,flag:3})
	            $http.get('./data_json/wbmlw/tjsj0jgsj600flag3.json')
	                .success(function (data) {
	                    console.log("data",data);
	                alertService.unmask();
	                data_count = JSON.parse(data.data[0].value)[0];
	                //data_count ={
	                //    ga:"6000000",
	                //    gongs:"6000000",
	                //    gt:"6000000",
	                //    gs:"6000000",
	                //    js:"6000000",
	                //    sb:"6000000",
	                //    rh:"6000000",
	                //    yl:"6000000",
	                //    hj:"6000000"
	                //}
	                var rh = data_count.rh;
	                    console.log("data_couont",data_count);
	                    console.log("rh",rh);
	                //人行4s增加的数据;
	                    if(rh!=0) {
	                        var rh_zz = rh / 6 / 150;
	                        rh = parseInt(rh - rh / 6);
	                    }
	                var ga = data_count.ga;
	                    if(ga!=0) {
	                        var ga_zz = ga / 6 / 150;
	                        ga = parseInt(ga - ga / 6);
	                    }
	                        var yl = data_count.yl;
	                    if(yl!=0) {
	                        var yl_zz = yl / 6 / 150;
	                        yl = parseInt(yl - yl / 6);
	                    }
	                var gongs = data_count.gongs;
	                    if(gongs!=0) {
	                        var gongs_zz = gongs / 6 / 150;
	                        gongs = parseInt(gongs - gongs / 6);
	                    }
	                var gs = data_count.gs;
	                    if(gs!=0) {
	                        var gs_zz = gs / 6 / 150;
	                        gs = parseInt(gs - gs / 6);
	                    }
	                var sb = data_count.sb;
	                    if(sb!=0) {
	                        var sb_zz = sb / 6 / 150;
	                        sb = parseInt(sb - sb / 6);
	                    }
	                var gt =data_count.gt;
	                    if(gt!=0){
	                        var gt_zz = gt/6/150;
	                        gt =parseInt(gt-gt/6);
	                    }
	                $scope.numRun1 = $(".numberRun1").numberAnimate({num: rh, speed: 1000});
	                $scope.numRun2 = $(".numberRun2").numberAnimate({num: ga, speed: 1000});
	                $scope.numRun3 = $(".numberRun3").numberAnimate({num: yl, speed: 1000});
	                $scope.numRun4 = $(".numberRun4").numberAnimate({num: gongs, speed: 1000});
	                $scope.numRun5 = $(".numberRun5").numberAnimate({num: gs, speed: 1000});
	                $scope.numRun6 = $(".numberRun6").numberAnimate({num: sb, speed: 1000});
	                $scope.numRun7 = $(".numberRun7").numberAnimate({num: gt, speed: 1000});
	                $(".mt-number-animate-span").css({fontSize:'24px'});
	                $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
	                //得到数据之后让背景颜色动起来
	                if(parseFloat(gongs)) {
	                    gongs_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#two").css('z-index', 1);
	                }
	                if(parseFloat(ga)) {
	                    ga_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#for_").css('z-index',1)
	                }
	                if(parseFloat(rh)){
	                    rh_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#three").css('z-index',1)
	                }
	                if(parseFloat(yl)) {
	                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#one").css('z-index',1)
	                }
	                if(parseFloat(gs)) {
	                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#seven").css('z-index',1)
	                }
	                if(parseFloat(sb)) {
	                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
	                    $("#et").css('z-index',1)
	                }
	                if(parseFloat(gt)) {
	                        gt_bg.setAttribute("style", "fill:url(#orange_red)");
	                        $("#et").css('z-index',1)
	                    }
	                var nums1 = rh;
	                var nums2 = ga;
	                var nums3 = yl;
	                var nums4 = gongs;
	                var nums5 = gs;
	                var nums6 = sb;
	                var nums7 = gt;
	                $scope.intv = $interval(function () {
	                    console.log(cishu);
	                    cishu++;
	                    if (cishu >= 150) {
	                        cishu = 0;
	                        //$.ajax(
	                        //    {
	                        //        type: 'get',
	                        //        url: $scope.URL + "/wbmlw?tjsj=0&jgsj=600&flag=1",
	                        //        success: function (data) {
	                        //            gongs_bg.removeAttribute("style");
	                        //            gongs_bg.setAttribute("fill", "#1e3465");
	                        //            ga_bg.removeAttribute("style");
	                        //            ga_bg.setAttribute("fill", "#1e3465");
	                        //            rh_bg.removeAttribute("style");
	                        //            rh_bg.setAttribute("fill", "#1e3465");
	                        //            yl_bg.removeAttribute("style");
	                        //            yl_bg.setAttribute("fill", "#1e3465");
	                        //            gs_bg.removeAttribute("style");
	                        //            gs_bg.setAttribute("fill", "#1e3465");
	                        //            sb_bg.removeAttribute("style");
	                        //            sb_bg.setAttribute("fill", "#1e3465");
	                        //            data_count = data.root.wbmGrid[0];
	                        //            if (data_count.gongs == 0 || data_count.gongs == null) {
	                        //                gongs_bg.removeAttribute("style");
	                        //                gongs_bg.setAttribute("fill", "#1e3465")
	                        //            } else {
	                        //                gongs_bg.setAttribute("style", "fill:url(#orange_red)")
	                        //            }
	                        //            if (data_count.ga == 0 || data_count.ga == null) {
	                        //                ga_bg.removeAttribute("style");
	                        //                ga_bg.setAttribute("fill", "#1e3465");
	                        //            } else {
	                        //                ga_bg.setAttribute("style", "fill:url(#orange_red)")
	                        //            }
	                        //            if (data_count.rh == 0 || data_count.rh == null) {
	                        //                rh_bg.removeAttribute("style");
	                        //                rh_bg.setAttribute("fill", "#1e3465");
	                        //            } else {
	                        //                rh_bg.setAttribute("style", "fill:url(#orange_red)")
	                        //            }
	                        //            if (data_count.yl == 0 || data_count.yl == null) {
	                        //                yl_bg.removeAttribute("style");
	                        //                yl_bg.setAttribute("fill", "#1e3465");
	                        //            } else {
	                        //                yl_bg.setAttribute("style", "fill:url(#orange_red)");
	                        //            }
	                        //            if (data_count.gs == 0 || data_count.gs == null) {
	                        //                gs_bg.removeAttribute("style");
	                        //                gs_bg.setAttribute("fill", "#1e3465");
	                        //            } else {
	                        //                gs_bg.setAttribute("style", "fill:url(#orange_red)");
	                        //            }
	                        //            if (data_count.sb == 0 || data_count.sb == null) {
	                        //                sb_bg.removeAttribute("style");
	                        //                sb_bg.setAttribute("fill", "#1e3465");
	                        //            } else {
	                        //                sb_bg.setAttribute("style", "fill:url(#orange_red)");
	                        //            }
	                        //            rh = data_count.rh;
	                        //            rh_zz = rh / 6 / 150;
	                        //
	                        //            ga = data_count.ga;
	                        //            ga_zz = ga / 6 / 150;
	                        //
	                        //            yl = data_count.yl;
	                        //            yl_zz = yl / 6 / 150;
	                        //
	                        //            gongs = data_count.gongs;
	                        //            gongs_zz = gongs / 6 / 150;
	                        //
	                        //            gs = data_count.gs;
	                        //            gs_zz = gs / 6 / 150;
	                        //
	                        //            sb = data_count.sb;
	                        //            sb_zz = sb / 6 / 150;
	                        //        }
	                        //    }
	                        //)
	                        //$scope.post('CxglDtzs2016BLH_selectWbmlw', {tjsj:0,jgsj:600,flag:1})
	                        $http.get('./data_json/wbmlw/tjsj0jgsj600flag1.json')
	                            .success(function (data) {
	                                gongs_bg.removeAttribute("style");
	                                gongs_bg.setAttribute("fill", "#1e3465");
	                                ga_bg.removeAttribute("style");
	                                ga_bg.setAttribute("fill", "#1e3465");
	                                rh_bg.removeAttribute("style");
	                                rh_bg.setAttribute("fill", "#1e3465");
	                                yl_bg.removeAttribute("style");
	                                yl_bg.setAttribute("fill", "#1e3465");
	                                gs_bg.removeAttribute("style");
	                                gs_bg.setAttribute("fill", "#1e3465");
	                                sb_bg.removeAttribute("style");
	                                sb_bg.setAttribute("fill", "#1e3465");
	                                gt_bg.removeAttribute("style");
	                                gt_bg.setAttribute("fill", "#1e3465");
	                                data_count = JSON.parse(data.data[0].value)[0];
	                                if (data_count.gongs == 0 || data_count.gongs == null) {
	                                    gongs_bg.removeAttribute("style");
	                                    gongs_bg.setAttribute("fill", "#1e3465")
	                                } else {
	                                    gongs_bg.setAttribute("style", "fill:url(#orange_red)")
	                                }
	                                if (data_count.ga == 0 || data_count.ga == null) {
	                                    ga_bg.removeAttribute("style");
	                                    ga_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    ga_bg.setAttribute("style", "fill:url(#orange_red)")
	                                }
	                                if (data_count.rh == 0 || data_count.rh == null) {
	                                    rh_bg.removeAttribute("style");
	                                    rh_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    rh_bg.setAttribute("style", "fill:url(#orange_red)")
	                                }
	                                if (data_count.yl == 0 || data_count.yl == null) {
	                                    yl_bg.removeAttribute("style");
	                                    yl_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    yl_bg.setAttribute("style", "fill:url(#orange_red)");
	                                }
	                                if (data_count.gs == 0 || data_count.gs == null) {
	                                    gs_bg.removeAttribute("style");
	                                    gs_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    gs_bg.setAttribute("style", "fill:url(#orange_red)");
	                                }
	                                if (data_count.sb == 0 || data_count.sb == null) {
	                                    sb_bg.removeAttribute("style");
	                                    sb_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    sb_bg.setAttribute("style", "fill:url(#orange_red)");
	                                }
	                                if (data_count.gt == 0 || data_count.gt == null) {
	                                    gt_bg.removeAttribute("style");
	                                    gt_bg.setAttribute("fill", "#1e3465");
	                                } else {
	                                    gt_bg.setAttribute("style", "fill:url(#orange_red)");
	                                }
	                                rh = data_count.rh;
	                                rh_zz = rh / 6 / 150;

	                                ga = data_count.ga;
	                                ga_zz = ga / 6 / 150;

	                                yl = data_count.yl;
	                                yl_zz = yl / 6 / 150;

	                                gongs = data_count.gongs;
	                                gongs_zz = gongs / 6 / 150;

	                                gs = data_count.gs;
	                                gs_zz = gs / 6 / 150;

	                                sb = data_count.sb;
	                                sb_zz = sb / 6 / 150;

	                                gt = data_count.gt;
	                                gt_zz = gt / 6 / 150;
	                            })

	                    }
	                    //nums1 += 500000000;
	                    //nums2 += 500000000;
	                    //nums3 += 500000000;
	                    //nums4 += 500000000;
	                    //nums5 += 500000000;
	                    //nums6 += 500000000;
	                    nums1 += rh_zz;
	                    nums2 += ga_zz;
	                    nums3 += yl_zz;
	                    nums4 += gongs_zz;
	                    nums5 += gs_zz;
	                    nums6 += sb_zz;
	                    nums7 += gt_zz;
	                    if ($scope.numRun1 !== undefined) {
	                        $scope.numRun1.resetData(parseInt(nums1));
	                    }
	                    if ($scope.numRun2 !== undefined) {
	                        $scope.numRun2.resetData(parseInt(nums2));
	                    }
	                    if ($scope.numRun3 !== undefined) {
	                        $scope.numRun3.resetData(parseInt(nums3));
	                    }
	                    if ($scope.numRun4 !== undefined) {
	                        $scope.numRun4.resetData(parseInt(nums4));
	                    }
	                    if ($scope.numRun5 !== undefined) {
	                        $scope.numRun5.resetData(parseInt(nums5));
	                    }
	                    if ($scope.numRun6 !== undefined) {
	                        $scope.numRun6.resetData(parseInt(nums6));
	                    }
	                    if ($scope.numRun7 !== undefined) {
	                        $scope.numRun7.resetData(parseInt(nums7));
	                    }
	                    $(".mt-number-animate-span").css({fontSize:'24px'});
	                    $(".mt-number-animate .mt-number-animate-dom").css({width:"14px"});
	                    alertService.unmask();
	                }, 4000);

	            }).error(function () {
	                    alertService.unmask();
	                })

	            //});
	            // };
	            //});
	            //背景效果
	            //var script = document.createElement("script");
	            //script.src = "js/bg/bg_1.js";
	            //document.body.appendChild(script);
	            //数字滚动
	            $scope.$on('$destroy', function () {
	                $timeout.cancel($scope.timer0);
	                $interval.cancel($scope.timer1);
	                $interval.cancel($scope.intv);
	            });
	        },500)


	    }]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by dingtianxiu on 16/5/13.
	 */
	angular.module('tsxzApp', ['ui.alert'])
	    .controller('tsxzCtrl', ['$scope', '$http', 'alertService', '$filter', '$interval', '$rootScope', function ($scope, $http, alertService, $filter, $interval, $rootScope) {
	        alertService.mask();

	        //$http({
	        //    method: 'POST',
	        //        url: 'http://144.16.54.58:8088/tfdapp/ajax.sword?r=' + Math.random(),
	        //        data: 'postData={"tid": "TestAjaxBLH_query?qsrq=2016-09-01#*^@^*#zzrq=2016-10-10"}',
	        //        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
	        //    })
	        //    .success(function(data){
	        //        console.log(data);
	        //    })
	        //    .error(function(){});

	        //$scope.post('TestAjaxBLH_query', {qsrq: '2016-09-01', zzrq: '2016-10-10'})
	        //    .success(function(data){console.log(data)});

	        var city = {
	            "330000200002": [120.16, 30.22],//上城玉皇山南基金小镇
	            "330000200003": [120.23, 30.36],//江干丁兰智慧小镇
	            "330000200004": [120.09, 30.14],//西湖云栖小镇
	            "330000200005": [120.038206, 30.179472],//西湖龙坞茶镇
	            "330000200006": [120.010219, 30.300412],//余杭梦想小镇
	            "330000200007": [120.010219, 30.300412],//余杭艺尚小镇
	            "330000200008": [120.010219, 30.300412],//富阳硅谷小镇
	            "330000200009": [119.696375, 29.800105],//桐庐健康小镇
	            "330000200010": [119.731605, 30.240481],//临安云制造小镇
	            "330000200021": [121.420862, 29.652186],//瓯海时尚制造小镇
	            "330000200022": [121.420862, 29.652186],//苍南台商小镇
	            "330000200037": [120.099057, 30.856640],//湖州丝绸小镇
	            "330000200038": [120.443469, 30.871551],//南浔善琏湖笔小镇
	            "330000200039": [119.96388, 30.544598],//德清地理信息小镇
	            "330000200026": [120.619545, 30.808886],//南湖基金小镇
	            "330000200027": [120.995201, 30.795529],//嘉善巧克力甜蜜小镇
	            "330000200028": [120.9444, 30.524144],//海盐核电小镇
	            "330000200029": [120.925979, 30.516243],//海宁皮革时尚小镇
	            "330000200030": [120.619549, 30.693292],//桐乡毛衫时尚小镇
	            "330000200043": [120.585785, 30.006742],//越城黄酒小镇
	            "330000200044": [120.238121, 29.720367],//诸暨袜艺小镇
	            "330000200050": [120.1085, 29.467713],//义乌丝路金融小镇
	            "330000200051": [119.831085, 28.892945],//武义温泉小镇
	            "330000200052": [120.40499, 29.086049],//磐安江南药镇
	            "330000200056": [119.248503, 29.086911],//龙游红木小镇
	            "330000200057": [118.498169, 28.917987],//常山赏石小镇
	            "330000200058": [118.425856, 29.126262],//开化根缘小镇
	            "330000200073": [121.257561, 28.653635],//黄岩智能模具小镇
	            "330000200074": [121.380439, 28.587004],//路桥沃尔沃小镇
	            "330000200075": [120.625729, 28.724682],//仙居神仙氧吧小镇
	            "330000200064": [119.75, 28.30],//莲都古堰画乡小镇
	            "330000200065": [120.078464, 28.584037],//龙泉青瓷小镇
	            "330000200066": [120.288724, 28.142096],//青田石雕小镇
	            "330000200067": [119.644125, 27.983133],//景宁畲乡小镇
	            "330000200011": [120.175802, 30.293293],//下城跨贸小镇
	            "330000200012": [120.143927, 30.332225],//拱墅运河财富小镇
	            "330000200013": [120.227599, 30.214601],//滨江物联网小镇
	            "330000200014": [120.253231, 30.209785],//萧山信息港小镇
	            "330000200015": [120.253231, 30.209785],//余杭梦栖小镇
	            "330000200016": [119.933356, 30.057606],//桐庐智慧安防小镇
	            "330000200017": [119.275535, 29.492296],//建德航空小镇
	            "330000200018": [119.897859, 30.07138],//富阳药谷小镇
	            "330000200019": [120.214242, 30.392412],//天子岭静脉小镇
	            "330000200023": [120.637901, 28.045337],//瓯海生命健康小镇
	            "330000200024": [119.957776, 27.861032],//文成森林氧吧小镇
	            "330000200025": [120.579364, 27.686194],//平阳宠物小镇
	            "330000200040": [120.114022, 30.877571],//吴兴美妆小镇
	            "330000200041": [119.922554, 31.015734],//长兴新能源小镇
	            "330000200042": [119.744879, 30.627297],//安吉天使小镇
	            "330000200032": [120.749317, 30.795559],//秀洲光伏小镇
	            "330000200033": [121.129914, 30.614171],//平湖九龙山航空运动小镇
	            "330000200034": [120.578205, 30.609213],//桐乡乌镇互联网小镇
	            "330000200036": [120.848681, 30.77508],//嘉兴马家浜健康食品小镇
	            "330000200045": [120.489466, 30.078783],//柯桥酷玩小镇
	            "330000200046": [120.83194, 30.037462],//上虞e游小镇
	            "330000200047": [120.910511, 29.508325],//新昌智能装备小镇
	            "330000200053": [120.246700, 29.284430],//东阳木雕小镇
	            "330000200054": [120.194906, 28.946176],//永康赫灵方岩小镇
	            "330000200055": [119.672117, 29.127201],//金华新能源汽车小镇
	            "330000200059": [118.637507, 28.763945],//江山光谷小镇
	            "330000200060": [118.779008, 28.962647],//衢州循环经济小镇
	            "330000200061": [122.152399, 30.118668],//定海远洋渔业小镇
	            "330000200062": [122.316165, 29.947642],//普陀沈家门渔港小镇
	            "330000200063": [122.398654, 29.917403],//朱家尖禅意小镇
	            "330000200077": [121.392866, 28.38521],//温岭泵业智造小镇
	            "330000200078": [121.035161, 29.155064],//天台天台山和合小镇
	            "330000200068": [119.166625, 28.063192],//龙泉宝剑小镇
	            "330000200069": [120.904161, 28.002844],//庆元香菇小镇
	            "330000200070": [120.262572, 28.809424],//缙云机床小镇
	            "330000200071": [119.47109, 28.492723],//松阳茶香小镇
	            "330000200048": [120.787435, 30.20102],//杭州湾花田小镇
	            "330000200020": [120.1795,30.2642],    //西湖艺创小镇
	            "339999200001":[121.5741,29.9009],//江北动力小镇
	            "339999200002":[122.0006,29.8013],//梅山海洋金融小镇
	            "339999200003":[121.2958,29.6977],//奉化滨海养生小镇
	            "339999200004":[121.5748,29.8343],//鄞州四明金融小镇
	            "339999200005":[121.1609,30.0428],//余姚模客小镇
	            "339999200006":[121.4360,29.2943],//宁海智能汽车小镇
	            "339999200007":[121.2032,30.3255]//杭州湾新区滨海欢乐假期小镇
	        };
	        var cityCenter = [
	            {
	                name: '杭州',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '湖州',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '嘉兴',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '宁波',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '绍兴',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '衢州',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '丽水',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '义务',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '温州',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '台州',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            },
	            {
	                name: '金华',
	                label: {
	                    normal: {
	                        show: true,
	                        textStyle: {
	                            color: 'rgb(245,198,81)'
	                        }
	                    }
	                }
	            }

	        ];
	        //$http.get($scope.URL + '/tsxz?nf='+ $scope.curYear +'&tybm=33')
	        //$scope.post('CxglDtzs2016BLH_selectTsxz', {nf: $scope.curYear, tybm: 33})
	        $http.get("data_json/tsxz/nf2017tybm33.json")
	            .success(function (data) {
	                console.log(data);
	                var value = JSON.parse(data.data[0].value);
	                console.log("value",value);
	                console.log(value);
	                $scope.viewData = [0, 0, 0];//小镇数量、企业户数、组织收入
	                $scope.viewData[0] = value.length;
	                var city1 = [], city2 = [];
	                angular.forEach(value, function (value, key) {
	                    $scope.viewData[1] += (value.qyhs!=null?parseInt(value.qyhs):0);
	                    $scope.viewData[2] += (value.zzsr!=null?parseFloat(value.zzsr):0);
	                    if (parseInt(value.xzpc) === 1) {
	                        city1.push({
	                            name: value.xzmc.replace(' ', ''),
	                            value: city[value.tsxzbm],
	                            qyhs: value.qyhs,
	                            zzsr: value.zzsr,
	                            url: value.xzmc.replace(' ', '') + '.jpg'
	                        })
	                    } else if (parseInt(value.xzpc) === 2) {
	                        city2.push({
	                            name: value.xzmc.replace(' ', ''),
	                            value: city[value.tsxzbm],
	                            qyhs: value.qyhs,
	                            zzsr: value.zzsr,
	                            url: value.xzmc.replace(' ', '') + '.jpg'
	                        })
	                    }
	                });
	                //$scope.viewData[1] = $scope.viewData[1] ? $scope.viewData[1] : 0;
	                //$scope.viewData[2] = $scope.viewData[2] ? $scope.viewData[2] : 0;
	                console.log("city1",city1);
	                console.log("city2",city2);
	                console.log("$scope.cityData",$scope.viewData)
	                $scope.myChart = echarts3.init(document.getElementsByClassName('leftBox')[0]);
	                $http.get('ownGeo/zhejiang.json')
	                    .success(function (geoJson) {
	                        $http.get("js/section/tesexiaoz/tesexiaoz.json").success(function(json){
	                        //http://localhost:8080/dtzs/gt3/tsxz?nf=2016&tybm=33
	                        echarts3.registerMap('zj', geoJson);
	                        $scope.myChart.setOption({
	                            tooltip: {
	                                trigger: 'item',
	                                position: 'top',
	                                backgroundColor: 'rgba(35, 65, 103, 0.6)',
	                                textStyle: {
	                                    color: '#fff',
	                                    fontSize: 16
	                                },
	                                formatter: function (params) {
	                                    if(params.seriesName!=="浙江"){
	                                        console.log(params);
	                                    }
	                                    if(params.data.qyhs!==undefined) {
	                                        for(var i=0;i<json.length;i++){
	                                            if(json[i].name==params.name){
	                                                $(".xz_desc").html("<div style='text-index: 2em'>"+json[i].text+"</div>");
	                                                $('.xz_desc').scrollTop(0)
	                                            }
	                                        }
	                                        return '<div>' +
	                                            '<div style="width:60px;height:60px;margin:8px 6px 0 6px;border-radius:50%;float:left;background-size:contain;background:url(imges/tsxz/' + params.data.url + ')"></div>' +
	                                            '<div style="float:left;"><span style="font-size: 18px;font-weight:700">' + params.name + '</span><hr><span style="float: left;"> 入驻企业(户)：</span><span style="color: yellow; float: right">' + (params.data.qyhs==null?0:params.data.qyhs) + '</span><br/>' +
	                                            '<span style="float: left;"> 组织收入(元)：</span><span style="color: yellow; float: right;">' + $filter('number')((params.data.zzsr==null?0:params.data.zzsr), 2) + '</span></div>' +
	                                            '</div>';
	                                    }
	                                }
	                            },
	                            geo: {
	                                map: '浙江县',
	                                //roam: 'scale',
	                                //zoom: 0.8,
	                                top: '10%',
	                                right: 0,
	                                bottom: 0,
	                                left: '5%',
	                                label: {
	                                    normal: {
	                                        show: true,
	                                        textStyle: {
	                                            color: '#fff',
	                                            fontFamily: '方正小标宋简体',
	                                            fontSize: 16
	                                        }
	                                    },
	                                    emphasis: {
	                                        show: true,
	                                        textStyle: {
	                                            color: '#fff',
	                                            fontFamily: '方正小标宋简体',
	                                            fontSize: 16
	                                        }
	                                    }

	                                },
	                                itemStyle: {
	                                    normal: {
	                                        borderWidth: 1.5,
	                                        borderColor: '#0079DC',
	                                        areaColor: '#0099EF'
	                                    },
	                                    emphasis: {
	                                        areaColor: 'rgb(23,150,200)'
	                                    }
	                                },
	                                regions: cityCenter
	                            },
	                            series: [
	                                {
	                                    name: '第一批',
	                                    type: 'scatter',
	                                    coordinateSystem: 'geo',
	                                    data: city1,
	                                    symbol: 'pin',
	                                    symbolSize: 20,
	                                    label: {
	                                        normal: {
	                                            show: false
	                                        },
	                                        emphasis: {
	                                            show: false
	                                        }
	                                    },
	                                    itemStyle: {
	                                        normal: {
	                                            color: '#f00'
	                                        },
	                                        emphasis: {
	                                            borderColor: '#fff',
	                                            borderWidth: 1
	                                        }
	                                    }
	                                },
	                                {
	                                    name: '第二批',
	                                    type: 'scatter',
	                                    coordinateSystem: 'geo',
	                                    data: city2,
	                                    symbol: 'pin',
	                                    symbolSize: 20,
	                                    label: {
	                                        normal: {
	                                            show: false
	                                        },
	                                        emphasis: {
	                                            show: false
	                                        }
	                                    },
	                                    itemStyle: {
	                                        normal: {
	                                            color: '#f80'
	                                        },
	                                        emphasis: {
	                                            borderColor: '#fff',
	                                            borderWidth: 1
	                                        }
	                                    }
	                                },
	                                {
	                                    name: '浙江',
	                                    type: 'map',
	                                    mapType: '浙江',
	                                    top: '10%',
	                                    right: 0,
	                                    bottom: 0,
	                                    left: '5%',
	                                    label: {
	                                        normal: {
	                                            show: false
	                                        },
	                                        emphasis:{
	                                            show:false
	                                        }
	                                    },
	                                    itemStyle: {
	                                        normal: {
	                                            borderWidth: 1,
	                                            borderColor: '#004BBD',
	                                            areaColor: 'rgba(0,0,0,0)'
	                                        },
	                                        emphasis: {
	                                            show:false,
	                                            areaColor: 'rgba(23,150,200,0)'
	                                        }
	                                    }
	                                }

	                            ]
	                        });
	                        alertService.unmask();

	                    });
	                    })
	                    .error(function () {
	                        alertService.unmask();
	                    });
	            })
	            .error(function () {
	                alertService.unmask();
	            });

	        $scope.timer = $interval(function () {
	            var top = $('.xz_desc').scrollTop();
	            if (top >= $(".xz_desc>div").height()-$(".xz_desc").height()) {
	                top = 0;
	            }
	            $('.xz_desc').scrollTop(++top);
	        }, 100);

	        $(".xz_desc").hover(function(){
	            $interval.cancel($scope.timer)
	        },function(){
	            $scope.timer = $interval(function () {
	                var top = $('.xz_desc').scrollTop();
	                if (top >= $(".xz_desc>div").height()-$(".xz_desc").height()) {
	                    top = 0;
	                }
	                $('.xz_desc').scrollTop(++top);
	            }, 100);
	        })
	        $scope.$on('$destroy', function () {
	            $interval.cancel($scope.timer);
	            if($scope.myChart) {
	                $scope.myChart.dispose();
	            }
	        });
	    }]);


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * @author : dingtianxiu
	 * @date : 2016/4/11
	 * @module :
	 * @description :
	 */
	angular.module('fcjyApp', ['ui.alert'])
	    .controller('fcjyCtrl', ['$scope', '$http', '$interval', 'alertService', function ($scope, $http, $interval, alertService) {
	        alertService.mask();
	        $scope.selectedDq = "23301000000";
	        $scope.sbsj = 0;
	        $scope.listData = [];
	        $scope.viewListData = [];
	        var lastPjjg = 0;
	        $scope.pjjgFlag = true;
	        $scope.dqData = {
	            "23301000000": "杭州市",
	            "23301090000": "杭州市萧山",
	            "23301100000": "杭州市余杭",
	            "23301110000": "杭州市富阳",
	            "23301220000": "桐庐县",
	            "23301270000": "淳安县",
	            "23301820000": "建德市",
	            "23301850000": "临安市",
	            "23303000000": "温州市",
	            "23303050000": "温州市洞头",
	            "23303240000": "永嘉县",
	            "23303260000": "平阳县",
	            "23303270000": "苍南县",
	            "23303280000": "文成县",
	            "23303290000": "泰顺县",
	            "23303810000": "瑞安市",
	            "23303820000": "乐清市",
	            "23304000000": "嘉兴市",
	            "23304210000": "嘉善县",
	            "23304240000": "海盐县",
	            "23304810000": "海宁市",
	            "23304820000": "平湖市",
	            "23304830000": "桐乡市",
	            "23305000000": "湖州市",
	            "23305210000": "德清县",
	            "23305220000": "长兴县",
	            "23305230000": "安吉县",
	            "23306000000": "绍兴市",
	            "23306030000": "绍兴市柯桥",
	            "23306040000": "绍兴市上虞",
	            "23306240000": "新昌县",
	            "23306810000": "诸暨市",
	            "23306830000": "嵊州市",
	            "23307000000": "金华市",
	            "23307230000": "武义县",
	            "23307260000": "浦江县",
	            "23307270000": "磐安县",
	            "23307810000": "兰溪市",
	            "23307820000": "义乌市",
	            "23307830000": "东阳市",
	            "23307840000": "永康市",
	            "23308000000": "衢州市",
	            "23308220000": "常山县",
	            "23308240000": "开化县",
	            "23308250000": "龙游县",
	            "23308810000": "江山市",
	            "23309000000": "舟山市",
	            "23309020000": "舟山市定海",
	            "23309030000": "舟山市普陀",
	            "23309210000": "岱山县",
	            "23309220000": "嵊泗县",
	            "23310000000": "台州市",
	            "23310020000": "台州市椒江",
	            "23310030000": "台州市黄岩",
	            "23310040000": "台州市路桥",
	            "23310210000": "玉环县",
	            "23310220000": "三门县",
	            "23310230000": "天台县",
	            "23310240000": "仙居县",
	            "23310810000": "温岭市",
	            "23310820000": "临海市",
	            "23311000000": "丽水市",
	            "23311210000": "青田县",
	            "23311220000": "缙云县",
	            "23311230000": "遂昌县",
	            "23311240000": "松阳县",
	            "23311250000": "云和县",
	            "23311260000": "庆元县",
	            "23311270000": "景宁畲族自治县",
	            "23311810000": "龙泉市"
	        };
	        function splitData(rawData) {
	            //var categoryData = [];
	            //var values = [];
	            var kindValue = {
	                categoryData: [],
	                values: [],
	                sssr: [],
	                pjjg: []
	            };
	            for (var i = 0, len = rawData.length; i < len; i++) {
	                var item = rawData[i].ssrq.replace(/(\d{4})(\d{2})/, "$1" + "/" + "$2" + "/");
	                kindValue.categoryData.push(item);
	                var value = [parseFloat(rawData[i].kpj), parseFloat(rawData[i].spj), parseFloat(rawData[i].zdj), parseFloat(rawData[i].zgj)];
	                kindValue.values.push(value);
	                kindValue.sssr.push({
	                    value: parseFloat(rawData[i].sssr),
	                    itemStyle: {
	                        normal: {
	                            color: parseFloat(rawData[i].kpj) - parseFloat(rawData[i].spj) > 0 ? 'rgba(0,0,0,0)' : '#B00E1B',
	                            barBorderColor: parseFloat(rawData[i].kpj) - parseFloat(rawData[i].spj) > 0 ? '#4DD557' : '#C61111',
	                            barBorderWidth: 2
	                        }
	                    }
	                });
	                kindValue.pjjg.push(parseFloat(rawData[i].pjjg));
	            }
	            return kindValue;
	        }

	        function calculateMA(dayCount, data) {
	            var result = [];
	            for (var i = 0, len = data.pjjg.length; i < len; i++) {
	                if (i < dayCount) {
	                    result.push('-');
	                    continue;
	                }
	                var sum = 0;
	                for (var j = 0; j < dayCount; j++) {
	                    sum += data.pjjg[i - j];
	                }
	                result.push(+(sum / dayCount).toFixed(2));
	            }
	            return result;
	        }

	        var myChart = echarts3.init(document.getElementById('fcjyMap1'));

	        function getSsData() {
	            //alertService.mask();

	            //var len1 = $scope.listData.length;
	            //if (len1 != 0) {
	            //    $scope.viewListData = $scope.listData.splice(0, len1 > 8 ? 8 : len1);
	            //    $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;
	            //} else {
	            //    $http.get($scope.URL+'/fcjyss?sbtjsj=' + $scope.sbsj + '&jgsj=600&flag=2&tybm=' + $scope.selectedDq)
	            //        .success(function (ssData) {
	            //            $scope.sbsj = ssData.root.fcjytjsj;
	            //            var tmpData = ssData.root.fcjyGrid;
	            //            var len2 = tmpData.length;
	            //            angular.forEach(tmpData, function (value, key) {
	            //                $scope.listData.push({
	            //                    czrq: (new Date(value.czrq)).toLocaleTimeString(),
	            //                    pjjg: value.pjjg,
	            //                    zje: value.zje
	            //                });
	            //            });
	            //            $scope.viewListData = $scope.listData.splice(0, len2 > 8 ? 8 : len2);
	            //            $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;
	            //        })
	            //}

	            //$http.get($scope.URL+'/fcjyss?sbtjsj=' + $scope.sbsj + '&jgsj=600&flag=2&tybm=' + $scope.selectedDq)
	            //$scope.post('CxglDtzs2016BLH_selectFcjyss', {
	            //    sbtjsj: $scope.sbsj,
	            //    jgsj: 600,
	            //    flag: 2,
	            //    tybm: $scope.selectedDq
	            //})
	            $http.get('./data_json/fcjy/sbtjsj20170221jgsj600flag2tybm'+$scope.selectedDq+'.json')
	                .success(function (ssData) {
	                    $scope.sbsj = ssData.data[1].value;
	                    var tmpData = JSON.parse(ssData.data[0].value);
	                    var len2 = tmpData.length;
	                    if (len2 != 0) {
	                        angular.forEach(tmpData, function (value, key) {
	                            $scope.listData.push({
	                                czrq: (new Date(value.lrrq)).toLocaleTimeString(),
	                                pjjg: parseFloat(value.pjjg),
	                                zje: parseFloat(value.zje)
	                            });
	                        });
	                        console.log("$scope.listdatta",$scope.listData);
	                        $scope.viewListData = $scope.listData.splice(0, len2 > 8 ? 8 : len2);
	                        console.log("$scope.view",$scope.viewListData);
	                        $scope.pjjg = $scope.viewListData[$scope.viewListData.length - 1].pjjg;

	                        $scope.pjjgFlag = lastPjjg > $scope.pjjg ? false : true;
	                        lastPjjg = $scope.pjjg;
	                    } else {
	                        $scope.viewListData = [];
	                    }

	                    alertService.unmask();
	                })
	                .error(function () {
	                    alertService.unmask();
	                });
	        }

	        $scope.changeDq = function () {
	            //$http.get($scope.URL + '/fcjy?qsrq=' + ($scope.curYear - 1) + '0101&tybm=' + $scope.selectedDq)
	            //$scope.post('CxglDtzs2016BLH_selectFcjy', {
	            //    qsrq: ($scope.curYear - 1) * 10000 + 101,
	            //    tybm: $scope.selectedDq
	            //})
	            $http.get('./data_json/fcjy/qsrq'+(($scope.curYear - 1) * 10000 + 101)+'tybm'+$scope.selectedDq+'.json')
	                .success(function (resData) {
	                    alertService.unmask();
	                    var useData = JSON.parse(resData.data[0].value);
	                    var data = splitData(useData);
	                    $scope.curData = useData[useData.length - 1];
	                    console.log($scope.curData);
	                    var option = {
	                        backgroundColor: 'rgba(0,0,0,0)',
	                        animation: false,
	                        colors: ['red', 'yellow', 'rgb(7,37,109)'],
	                        legend: {
	                            bottom: 50,
	                            show: true,
	                            left: 'center',
	                            data: ['日均线', '周均线', '月均线'],
	                            textStyle: {
	                                color: "#fff"
	                            },
	                            inactiveColor: "rgb(1,2,1)"
	                        },
	                        tooltip: {
	                            trigger: 'axis',
	                            axisPointer: {
	                                type: 'line'
	                            },
	                            formatter: function (params) {
	                                var param = params[0];
	                                if (param.seriesType === 'bar') {
	                                    return param.seriesName + '<br/>' + param.data.value;
	                                } else {
	                                    var str =
	                                        '日&nbsp;&nbsp;&nbsp;期: ' + param.name + '<hr size=1 style="margin: 3px 0">' +
	                                        '<span style="float:left">开盘价:</span>'+' <span style="color: yellow; float: right">' + param.data[0] + '</span><br/>' +
	                                        '<span style="float:left">收盘价:</span>'+' <span style="color: yellow; float: right">' + param.data[1] + '</span><br/>' +
	                                        '<span style="float:left">最低价:</span>'+'<span style="color: yellow; float: right">' + param.data[2] + '</span><br/>' +
	                                        '<span style="float:left">最高价:</span>'+'<span style="color: yellow; float: right">' + param.data[3] + '</span><br/>';
	                                    for (var i = 0; i < params.length; i++) {
	                                        if (params[i].seriesName == "日均线") {
	                                            str += '<span style="float:left">日均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
	                                        }
	                                        if (params[i].seriesName == "周均线") {
	                                            str += '<span style="float:left">周均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
	                                        }
	                                        if (params[i].seriesName == "月均线") {
	                                            str += '<span style="float:left">月均线:</span>'+'<span style="color: yellow; float: right">' + params[i].data + '</span><br/>';
	                                        }
	                                    }
	                                    return str;
	                                }
	                            }
	                        },
	                        brush: {
	                            xAxisIndex: 'all',
	                            brushLink: 'all',
	                            outOfBrush: {
	                                colorAlpha: 0.1
	                            }
	                        },
	                        grid: [
	                            {
	                                show: true,
	                                left: '5%',
	                                right: '0%',
	                                top: '0%',
	                                height: '65%',
	                                borderColor: '#0752A3',
	                                borderWidth: 2
	                            },
	                            {
	                                show: true,
	                                left: '5%',
	                                right: '0%',
	                                top: '69%',
	                                height: '16%',
	                                borderColor: '#0752A3',
	                                lineStyle: {
	                                    width: 0,
	                                    color: '#0752A3'
	                                }
	                            }
	                        ],
	                        xAxis: [
	                            {
	                                type: 'category',
	                                data: data.categoryData,
	                                scale: true,
	                                boundaryGap: false,
	                                splitNumber: 1,
	                                min: 'dataMin',
	                                max: 'dataMax',
	                                axisTick: {
	                                    lineStyle: {
	                                        //  color:'rgb(7,37,109)'
	                                        color: '#ccc'
	                                    },
	                                    inside: false
	                                },
	                                axisLabel: {
	                                    inside: false,
	                                    textStyle: {
	                                        color: '#fff',
	                                        fontSize: 16,
	                                        fontFamily: 'Arial'
	                                    }
	                                },
	                                axisLine: {
	                                    lineStyle: {
	                                        color: "rgb(7,37,109)",
	                                        width: 1
	                                    }
	                                },
	                                splitLine: {
	                                    show: false
	                                }
	                            },
	                            {
	                                type: 'category',
	                                gridIndex: 1,
	                                data: data.categoryData,
	                                scale: true,
	                                boundaryGap: false,
	                                axisLine: {
	                                    onZero: true,
	                                    lineStyle: {
	                                        color: "#0752A3",
	                                        width: 2
	                                    }
	                                },
	                                axisTick: {show: false},
	                                splitLine: {show: false},
	                                axisLabel: {show: false},
	                                splitNumber: 1,
	                                min: 'dataMin',
	                                max: 'dataMax'
	                            }
	                        ],
	                        yAxis: [
	                            {
	                                scale: true,
	                                splitNumber:5,
	                                //minInterval:1,
	                                //min: 'dataMin',
	                                //max: 'dataMax',
	                                //interval: auto,
	                                precision: 1,
	                                splitArea: {
	                                    show: false
	                                },
	                                position: "right",
	                                axisTick: {
	                                    inside: true,
	                                    lineStyle: {
	                                        color: '#ccc'
	                                    }
	                                },
	                                splitLine: {
	                                    show: false
	                                },
	                                axisLabel: {
	                                    inside: true,
	                                    interval:2,
	                                    textStyle: {
	                                        color: '#fff',
	                                        fontSize: 16,
	                                        fontFamily: 'Arial'
	                                    }
	                                },
	                                axisLine: {
	                                    lineStyle: {
	                                        color: "#0752A3",
	                                        width: 2
	                                    }
	                                }
	                            },
	                            {
	                                scale: true,
	                                gridIndex: 1,
	                                splitNumber: 0,
	                                axisLabel: {show: false},
	                                axisLine: {
	                                    show: true,
	                                    lineStyle: {
	                                        color: "#0752A3",
	                                        width: 2
	                                    }
	                                },
	                                axisTick: {show: false},
	                                splitLine: {show: false}
	                            },
	                            {
	                                scale: true,
	                                gridIndex: 0,
	                                position: 'left',
	                                splitNumber: 0,
	                                axisLabel: {show: false},
	                                axisLine: {
	                                    show: true,
	                                    lineStyle: {
	                                        color: "#0752A3"
	                                    }
	                                },
	                                axisTick: {show: false},
	                                splitLine: {show: false}
	                            }
	                        ],
	                        dataZoom: [
	                            {
	                                type: 'inside',
	                                xAxisIndex: [0, 1],
	                                start: 90,
	                                end: 100
	                            },
	                            {
	                                show: false,
	                                xAxisIndex: [0, 1],
	                                type: 'slider',
	                                top: '85%',
	                                start: 90,
	                                end: 100
	                            }
	                        ],
	                        series: [
	                            {
	                                name: '日K',
	                                type: 'candlestick',
	                                data: data.values,
	                                itemStyle: {
	                                    normal: {
	                                        color: '#B11122',           // 阳线填充颜色
	                                        color0: 'rgba(0,0,0,0)',   // 阴线填充颜色
	                                        borderWidth: 2,
	                                        borderColor: '#C61111',    // 阳线边框颜色
	                                        borderColor0: '#4DD557'     // 阴线边框颜色

	                                    },
	                                    emphasis: {
	                                        color: '#e4393c',         // 阳线填充颜色
	                                        color0: 'white'         // 阴线填充颜色
	                                    }
	                                },
	                                tooltip: {
	                                    formatter: function (params) {
	                                        return [
	                                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
	                                            '开盘价: ' + param.data[0] + '<br/>',
	                                            '收盘价: ' + param.data[1] + '<br/>',
	                                            '最低级: ' + param.data[2] + '<br/>',
	                                            '最高价: ' + param.data[3] + '<br/>'
	                                        ].join('');
	                                    }
	                                },
	                                markPoint: {
	                                    label: {
	                                        normal: {
	                                            formatter: function (param) {
	                                                return param != null ? Math.round(param.value) : '';
	                                            }
	                                        }
	                                    },
	                                    itemStyle: {
	                                        normal: {
	                                            color: 'rgba(0,0,0,0)'
	                                        }
	                                    },
	                                    data: [
	                                        {
	                                            name: '最大值',
	                                            type: 'max',
	                                            valueDim: 'highest',
	                                            symbolOffset: [0, '80%']
	                                        },
	                                        {
	                                            name: '最小值',
	                                            type: 'min',
	                                            valueDim: 'lowest'
	                                        }
	                                    ],
	                                    tooltip: {
	                                        formatter: function (param) {
	                                            return param.name + '：' + (param.data.value || '');
	                                        }
	                                    }
	                                }
	                            },
	                            {
	                                name: '月均线',
	                                type: 'line',
	                                yAxisIndex: 2,
	                                data: calculateMA(30, data),
	                                //smooth: true,
	                                lineStyle: {
	                                    normal: {color: 'purple', opacity: 0.6}
	                                }
	                            },
	                            {
	                                name: '周均线',
	                                type: 'line',
	                                yAxisIndex: 2,
	                                data: calculateMA(7, data),
	                                smooth: true,
	                                lineStyle: {
	                                    normal: {color: 'yellow', opacity: 0.6}
	                                }
	                            },
	                            {
	                                name: '日均线',
	                                type: 'line',
	                                yAxisIndex: 2,
	                                data: data.pjjg,
	                                //smooth: true,
	                                lineStyle: {
	                                    normal: {color: 'green', opacity: 0.6}
	                                }
	                            },
	                            {
	                                name: '税收收入',
	                                type: 'bar',
	                                xAxisIndex: 1,
	                                yAxisIndex: 1,
	                                data: data.sssr,
	                                itemStyle: {
	                                    normal: {
	                                        color: 'red',
	                                        barBorderColor: 'green',
	                                        barBorderWidth: 1,
	                                        opacity: 1
	                                    },
	                                    emphasis: {
	                                        color: '#e4393c',
	                                        barBorderColor: 'green',
	                                        barBorderWidth: 1,
	                                        opacity: 1
	                                    }
	                                }
	                            }
	                        ]
	                    };
	                    myChart.setOption(option);

	                    getSsData();
	                    $scope.timer = $interval(function () {
	                        getSsData();
	                    }, 1000000);   //记得改回 10000
	                })
	                .error(function (data) {
	                    alertService.unmask();
	                });

	        };

	        $scope.changeDq();

	        $scope.$on('$destroy', function () {
	            $interval.cancel($scope.timer);
	        });
	        //背景效果
	        var script = document.createElement("script");
	        script.src = "js/bg/bg_1.js";
	        document.body.appendChild(script);
	    }]);
	//.config(function ($httpProvider) {
	//    $httpProvider.defaults.headers.common = {'Cache-Control': 'max-age = 86400'};
	//});
	//function getTimes() {
	//    var now = new Date();
	//    var year = now.getFullYear();
	//    var month = now.getMonth() + 1;
	//    month = month < 10 ? 0 + "" + month : month;
	//    var date = now.getDate();
	//    date = date < 10 ? 0 + "" + date : date;
	//    var hour = now.getHours();
	//    hour = hour < 10 ? 0 + "" + hour : hour;
	//    var minutes = now.getMinutes();
	//    minutes = minutes < 10 ? 0 + "" + minutes : minutes;
	//    var seconds = now.getSeconds();
	//    seconds = seconds < 10 ? 0 + "" + seconds : seconds;
	//    var str = now.getMilliseconds() < 500 ? (year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + seconds) : year + "-" + month + "-" + date + " " + hour + " " + minutes + " " + seconds;
	//    $(".line #sj").html(str)
	//}
	//setInterval(getTimes, 500);

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * @author : DingTianXiu
	 * @date : 2016/4/19
	 * @module : ssGDP
	 * @description :
	 */

	var app = angular.module("ssgdpApp", ['ui.alert']);
	app.controller("ssgdpCtrl", ['$scope', '$http', 'alertService', function ($scope, $http, alertService) {
	    alertService.mask();
	    //$http.get($scope.URL+'/gsssdb?qsnf=' + ($scope.curYear - 6) + '&zznf=' + ($scope.curYear - 1))
	    //    .success(function (data) {
	    //$scope.post('CxglDtzs2016BLH_selectGsssdb', {qsnf:$scope.curYear-6,zznf:$scope.curYear-1})
	    $http.get('./data_json/ssgdp/qsnf2011zznf2016.json')
	        .success(function (data) {
	            console.log("gdp_data",data);
	            //可以清晰看出数据结构
	            var ss_obj = {          //税收对象
	                s2010: {
	                    sname: [],     //省市名称
	                    sssl: [],      //税收率
	                    sgdp: [],      //gdp
	                    sss: []        //税收
	                },
	                s2011: {
	                    sname: [],
	                    sssl: [],
	                    sgdp: [],
	                    sss: []
	                },
	                s2012: {
	                    sname: [],
	                    sssl: [],
	                    sgdp: [],
	                    sss: []
	                },
	                s2013: {
	                    sname: [],
	                    sssl: [],
	                    sgdp: [],
	                    sss: []
	                },
	                s2014: {
	                    sname: [],
	                    sssl: [],
	                    sgdp: [],
	                    sss: []
	                },
	                s2015: {
	                    sname: [],
	                    sssl: [],
	                    sgdp: [],
	                    sss: []
	                }
	            }
	            var sj_obj_2010 = [];
	            var sj_gdp_2010 = [];
	            var sj_shuishou_2010 = [];
	            var sj_shl_2010 = [];
	            var sj_name_2010 = [];
	            var arr_2010 = JSON.parse(data.data[0].value);
	            for (var i = 0; i < arr_2010.length; i++) {
	                sj_obj_2010.push(arr_2010[i])
	            }
	            sj_obj_2010.sort(by("round(gdp/10000,2)"));
	            console.log("sj_obj_2010",sj_obj_2010)
	            for (var i = 0; i < sj_obj_2010.length; i++) {
	                sj_gdp_2010.push(parseFloat((sj_obj_2010[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2010.push(parseFloat((sj_obj_2010[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2010.push((sj_obj_2010[i]['gdptaxl'] * 100));
	                sj_name_2010.push(sj_obj_2010[i]['ssmc'])
	            }
	            ss_obj.s2010.sname = sj_name_2010;
	            ss_obj.s2010.sss = sj_shuishou_2010;
	            ss_obj.s2010.sssl = sj_shl_2010;
	            ss_obj.s2010.sgdp = sj_gdp_2010;
	            var sj_obj_2011 = [];
	            var sj_gdp_2011 = [];
	            var sj_shuishou_2011 = [];
	            var sj_shl_2011 = [];
	            var sj_name_2011 = [];
	            var arr_2011 = JSON.parse(data.data[1].value);
	            for (var i = 0; i < arr_2011.length; i++) {
	                sj_obj_2011.push(arr_2011[i])
	            }
	            sj_obj_2011.sort(by("round(gdp/10000,2)"));
	            for (var i = 0; i < sj_obj_2011.length; i++) {
	                sj_gdp_2011.push(parseFloat((sj_obj_2011[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2011.push(parseFloat((sj_obj_2011[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2011.push((sj_obj_2011[i]['gdptaxl'] * 100));
	                sj_name_2011.push(sj_obj_2011[i]['ssmc'])
	            }
	            ss_obj.s2011.sname = sj_name_2011;
	            ss_obj.s2011.sss = sj_shuishou_2011;
	            ss_obj.s2011.sssl = sj_shl_2011;
	            ss_obj.s2011.sgdp = sj_gdp_2011;
	            var sj_obj_2012 = [];
	            var sj_gdp_2012 = [];
	            var sj_shuishou_2012 = [];
	            var sj_shl_2012 = [];
	            var sj_name_2012 = [];
	            var arr_2012 = JSON.parse(data.data[2].value);
	            for (var i = 0; i < arr_2012.length; i++) {
	                sj_obj_2012.push(arr_2012[i])
	            }
	            sj_obj_2012.sort(by("round(gdp/10000,2)"));
	            for (var i = 0; i < sj_obj_2012.length; i++) {
	                sj_gdp_2012.push(parseFloat((sj_obj_2012[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2012.push(parseFloat((sj_obj_2012[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2012.push((sj_obj_2012[i]['gdptaxl'] * 100));
	                sj_name_2012.push(sj_obj_2012[i]['ssmc'])
	            }
	            ss_obj.s2012.sname = sj_name_2012;
	            ss_obj.s2012.sss = sj_shuishou_2012;
	            ss_obj.s2012.sssl = sj_shl_2012;
	            ss_obj.s2012.sgdp = sj_gdp_2012;
	            var sj_obj_2013 = [];
	            var sj_gdp_2013 = [];
	            var sj_shuishou_2013 = [];
	            var sj_shl_2013 = [];
	            var sj_name_2013 = [];
	            var arr_2013 = JSON.parse(data.data[3].value);
	            for (var i = 0; i < arr_2013.length; i++) {
	                sj_obj_2013.push(arr_2013[i])
	            }
	            sj_obj_2013.sort(by("round(gdp/10000,2)"));
	            for (var i = 0; i < sj_obj_2013.length; i++) {
	                sj_gdp_2013.push(parseFloat((sj_obj_2013[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2013.push(parseFloat((sj_obj_2013[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2013.push((sj_obj_2013[i]['gdptaxl'] * 100));
	                sj_name_2013.push(sj_obj_2013[i]['ssmc'])
	            }
	            ss_obj.s2013.sname = sj_name_2013;
	            ss_obj.s2013.sss = sj_shuishou_2013;
	            ss_obj.s2013.sssl = sj_shl_2013;
	            ss_obj.s2013.sgdp = sj_gdp_2013;
	            var sj_obj_2014 = [];
	            var sj_gdp_2014 = [];
	            var sj_shuishou_2014 = [];
	            var sj_shl_2014 = [];
	            var sj_name_2014 = [];
	            var arr_2014 =JSON.parse(data.data[4].value);
	            for (var i = 0; i < arr_2014.length; i++) {
	                sj_obj_2014.push(arr_2014[i])
	            }
	            sj_obj_2014.sort(by("round(gdp/10000,2)"));
	            for (var i = 0; i < sj_obj_2014.length; i++) {
	                sj_gdp_2014.push(parseFloat((sj_obj_2014[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2014.push(parseFloat((sj_obj_2014[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2014.push((sj_obj_2014[i]['gdptaxl'] * 100));
	                sj_name_2014.push(sj_obj_2014[i]['ssmc'])
	            }
	            ss_obj.s2014.sname = sj_name_2014;
	            ss_obj.s2014.sss = sj_shuishou_2014;
	            ss_obj.s2014.sssl = sj_shl_2014;
	            ss_obj.s2014.sgdp = sj_gdp_2014;
	            var sj_obj_2015 = [];
	            var sj_gdp_2015 = [];
	            var sj_shuishou_2015 = [];
	            var sj_shl_2015 = [];
	            var sj_name_2015 = [];
	            var arr_2015 = JSON.parse(data.data[5].value);
	            for (var i = 0; i < arr_2015.length; i++) {
	                sj_obj_2015.push(arr_2015[i])
	            }
	            sj_obj_2015.sort(by("round(gdp/10000,2)"));
	            for (var i = 0; i < sj_obj_2015.length; i++) {
	                sj_gdp_2015.push(parseFloat((sj_obj_2015[i]['round(gdp/10000,2)'])).toFixed(2) - 0);
	                sj_shuishou_2015.push(parseFloat((sj_obj_2015[i]['round(sshj/10000,2)'])).toFixed(2) - 0);
	                sj_shl_2015.push((sj_obj_2015[i]['gdptaxl'] * 100));
	                sj_name_2015.push(sj_obj_2015[i]['ssmc'])
	            }
	            ss_obj.s2015.sname = sj_name_2015;
	            ss_obj.s2015.sss = sj_shuishou_2015;
	            ss_obj.s2015.sssl = sj_shl_2015;
	            ss_obj.s2015.sgdp = sj_gdp_2015;
	            console.log("ss_obj11",ss_obj);
	           var option= {
	               title:{
	                   text:''
	               },
	               legend:{
	                   enabled:true,
	                   x:-350,
	                   y:-10,
	                   verticalAlign:'top',
	                   itemStyle:{
	                       color:'#fff',
	                       fontSize:"20px"
	                   },
	                   symbolWidth:20,
	                   itemHoverStyle:{
	                       color:"#fff"
	                   }
	               },
	               chart: {
	                   type: 'column',
	                   renderTo: 'ssgdp',
	                   backgroundColor:'rgba(0,0,0,0)',
	                   borderColor:'rgba(0,0,0,0)',
	                   type: 'column',
	                   margin: 100,
	                   borderWidth: 0,
	                   options3d: {
	                       enabled: true,
	                       alpha: 0,
	                       beta: 0,
	                       depth: 50,
	                       viewDistance: 25
	                   }
	               },
	               exporting: {
	                   enabled: false
	               },
	               xAxis: {
	                   categories: sj_name_2014,
	                   gridLineWidth:0,
	                   labels: {
	                       style: {
	                           color: '#fff',
	                           fontSize: '16',
	                           fontFamily: '方正小标宋简体'
	                       }
	                   }
	               },
	               yAxis:[{
	                   gridLineColor: 'rgb(38,105,206)',
	                   gridLineWidth: 1,
	                   gridLineDashStyle: 'longdash',
	                   name: "亿元",
	                   tickPixelInterval:120,
	                   labels: {
	                       style: {
	                           color: '#fff',
	                           fontSize: '16',
	                           fontFamily:'Arial'
	                       }
	                   },
	                   title: {
	                       text: '万亿元',
	                       rotation:0,
	                       align:'high',
	                       style:{
	                           color:'rgb(38,105,206)',
	                           fontFamily:'方正小标宋简体'
	                       },
	                       y:-30,
	                       x:50
	                   }
	               },{
	                   gridLineColor: 'rgb(38,105,206)',
	                   gridLineWidth: 1,
	                   gridLineDashStyle: 'longdash',
	                   name: "亿元",
	                   tickPixelInterval:120,
	                   labels: {
	                       style: {
	                           color: '#fff',
	                           fontSize: '16',
	                           fontFamily:'Arial'
	                       }
	                   },
	                   opposite:true,
	                   title: {
	                       text: '百分比',
	                       rotation:0,
	                       align:'high',
	                       style:{
	                           color:'rgb(38,105,206)',
	                           fontFamily:'方正小标宋简体'
	                       },
	                       x:-50,
	                       y:-30

	                   }
	               }
	               ],
	               plotOptions: {
	                   column: {
	                       borderColor: 'rgb(200,183,29)',
	                       depth: 25,
	                       edgeWidth:1,
	                       dataLabels: {
	                           enabled: true,
	                           allowOverlap: true,
	                           color: '#fff',
	                        style:{
	                            fontSize: "20px"
	                        }

	                       }
	                   },
	                   line:{
	                       dataLabels: {
	                           enabled: true,
	                           allowOverlap: true,
	                           formatter:function(e){
	                               return this.y+" %"
	                           },
	                           color: 'rgb(255,255,0)',
	                           shadow:false,
	                           style:{
	                               fontSize: "20px"
	                           }

	                       }
	                   }
	               },
	               tooltip: {
	                   backgroundColor: '#011641',
	                   style: {
	                       fontFamily: 'Arial',
	                       color: '#fff',
	                       fontSize: '16px',
	                       lineHeight: '30px',
	                       padding: '16px'
	                   },
	                   formatter: function (p) {
	                       //var str = '';
	                       //str += '<span style="color:#fff;font-family: \'方正小标宋简体\'">' + this.x + '</span><br/><span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[0].series.name + '：</span><span style="color:#fff;font-family:Arial;float:right ">' + this.points[0].y + '</span><span style="color:#fff;font-family:方正小标宋简体">亿</span><br>';
	                       //str += '<span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[1].series.name + '：</span><span style="color:#fff;font-family:Arial ">' +this.points[1].y +'</span><span style="color:#fff;font-family:方正小标宋简体">亿</span><br>';
	                       //str += '<span style="color:#fff;font-family:\'方正小标宋简体\' ">' + this.points[2].series.name +'：</span><span style="color:#fff;font-family:Arial ">'  + this.points[2].y + '</span><span style="color:#fff;font-family:方正小标宋简体">%</span><br>';
	                       //return str;
	                       if(this.series.name=="GDP税收率"){
	                           return '<span style="color:#fff;font-family:方正小标宋简体">'+this.key+'</span><br><span style="color:#fff;font-family:方正小标宋简体">'+this.series.name+'：</span><span style="color:yellow;font-family:Arial">'+this.y+'</span><span style="color:#fff;font-family:方正小标宋简体">%</span>'
	                       }
	                      return '<span style="color:#fff;font-family:方正小标宋简体">'+this.key+'</span><br><span style="color:#fff;font-family:方正小标宋简体">'+this.series.name+'：</span><span style="color:yellow;font-family:Arial">'+this.y+'</span><span style="color:#fff;font-family:方正小标宋简体">万亿</span>'
	                   }
	               },
	               series: [{
	                   name:'GDP',
	                   color:"rgb(30,194,255)",
	                   data: ss_obj.s2015.sgdp
	               },{
	                   name:'税收',
	                   color:"rgb(131,38,246)",
	                   data:ss_obj.s2015.sss
	               },{
	                   name:"GDP税收率",
	                   type:'line',
	                   color:"rgb(249,221,35)",
	                   data:ss_obj.s2015.sssl,
	                   yAxis:1,
	                   zIndex:200
	               }
	               ]
	           };
	            option1=new Highcharts.chart(option);
	            $("#gdp_line").click(function (e) {
	                var tar = e.target ;   //获得当前元素
	                $("#gdp_line li").removeClass("line");
	                $(tar).addClass("line");
	                if (tar.innerHTML == ($scope.curYear - 6) + "年") {
	                    option.series[0].data = ss_obj.s2010.sgdp;
	                    option.series[1].data = ss_obj.s2010.sss;
	                    option.series[2].data = ss_obj.s2010.sssl;
	                    option1=new Highcharts.chart(option)
	                } else if (tar.innerHTML == ($scope.curYear - 5) + "年") {
	                    option.series[0].data = ss_obj.s2011.sgdp;
	                    option.series[1].data = ss_obj.s2011.sss;
	                    option.series[2].data = ss_obj.s2011.sssl;
	                    option1=new Highcharts.chart(option)
	                } else if (tar.innerHTML == ($scope.curYear - 4) + "年") {
	                    option.series[0].data = ss_obj.s2012.sgdp;
	                    option.series[1].data = ss_obj.s2012.sss;
	                    option.series[2].data = ss_obj.s2012.sssl;
	                    option1=new Highcharts.chart(option)
	                } else if (tar.innerHTML == ($scope.curYear - 3) + "年") {
	                    option.series[0].data = ss_obj.s2013.sgdp;
	                    option.series[1].data = ss_obj.s2013.sss;
	                    option.series[2].data = ss_obj.s2013.sssl;
	                    option1=new Highcharts.chart(option)
	                } else if (tar.innerHTML == ($scope.curYear - 2) + "年") {
	                    option.series[0].data = ss_obj.s2014.sgdp;
	                    option.series[1].data = ss_obj.s2014.sss;
	                    option.series[2].data = ss_obj.s2014.sssl;
	                    option1=new Highcharts.chart(option)
	                } else if (tar.innerHTML == ($scope.curYear - 1) + "年") {
	                    option.series[0].data = ss_obj.s2015.sgdp;
	                    option.series[1].data = ss_obj.s2015.sss;
	                    option.series[2].data = ss_obj.s2015.sssl;
	                    option1=new Highcharts.chart(option)
	                }

	            });
	            alertService.unmask();
	        })
	        .error(function(){
	            alertService.unmask();
	        })
	    //添加背景效果
	    var script=document.createElement("script");
	    script.src="js/bg/bg_1.js";
	    document.body.appendChild(script);
	}]);


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by Zhaolq on 2016/6/30.
	 */
	angular.module('gdpcx',[])
	    .controller('gdpcxCtrl',['$scope','$http',function($scope,$http){

	        //模拟
	        //$scope.gdpData = [
	        //    {"SSND":2015,"SSMC":"广东省","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2015,"SSMC":"江苏省","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2014,"SSMC":"山东省","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2014,"SSMC":"浙江省","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2013,"SSMC":"上海市","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2013,"SSMC":"北京市","GDP":72813,"GTAX":8895,"DTAX":6615},
	        //    {"SSND":2012,"SSMC":"天津市","GDP":72813,"GTAX":8895,"DTAX":6615}
	        //];
	        //$scope.yearCheck = function(year){
	        //    console.log(year);
	        //    $scope.curGdpData = [];
	        //    for(var i=0;i<$scope.gdpData.length;i++){
	        //        if(data == $scope.gdpData[i].SSND){
	        //            $scope.curGdpData.push($scope.gdpData[i]);
	        //        }
	        //    }
	        //    console.log($scope.curGdpData);
	        //};

	        $scope.yearCheck = function(year){
	            $http.get("http://144.16.54.56:8088/dtzs/gt3/gdpsel?ssnd="+year).success(function(data){
	                $scope.gdpData = data.root.value;
	            }).error(function(){alert("请选择年份")});
	        };

	        //增加
	        $scope.addNew = function(){
	            var newObj = {};
	            newObj.ssnd = $scope.newSSND;
	            newObj.ssmc = $scope.newSSMC;
	            newObj.gdp = $scope.newGDP;
	            newObj.gtax = $scope.newGTAX;
	            newObj.dtax = $scope.newDTAX;
	            var ooo=newObj;
	            $http.post("http://localhost:8080/dtzs/gt3/gdpins",ooo).success(function(data, status, headers, config){
	                console.log(21)
	                console.log(data);
	                console.log(status)
	                $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
	                    $scope.gdpData = data.root.value;
	                });

	            })
	        };

	        //修改删除
	        $scope.cxiabiao = function($index){
	            $scope.curGdp = $scope.gdpData[$index];
	            $scope.revise = function(){
	                var newObj = {};
	                newObj.ssnd = $scope.curGdp.ssnd;
	                newObj.ssmc = $scope.curGdp.ssmc;
	                newObj.gdp = $scope.curGdp.gdp;
	                newObj.gtax = $scope.curGdp.gtax;
	                newObj.dtax = $scope.curGdp.dtax;
	                //for(var j=0;j<$scope.gdpData.length;j++){
	                //    if($scope.gdpData[j] == $scope.curGdpData[$index]){
	                //        $scope.gdpData[j] = newObj;
	                //    }
	                //}
	                $scope.gdpData[$index] = newObj;
	                var ooo=$scope.gdpData[$index];
	                console.log(ooo)
	                $http.post("http://localhost:8080/dtzs/gt3/gdpupd",ooo).success(function(){
	                    $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
	                        $scope.gdpData = data.root.value;
	                    });
	                })
	            };
	            $scope.remove = function(){
	                //for(var k=0;k<$scope.gdpData.length;k++){
	                //    if($scope.gdpData[k] == $scope.curGdpData[$index]){
	                //        $scope.gdpData.splice(k,1);
	                //    }
	                //}
	                console.log($scope.gdpData[$index])
	                $http.get("http://localhost:8080/dtzs/gt3/gdpdel?ssnd="+$scope.gdpData[$index].ssnd+"&ssmc="+$scope.gdpData[$index].ssmc).success(function(data){
	                    $http.get("http://localhost:8080/dtzs/gt3/gdpsel?ssnd="+$scope.year).success(function(data){
	                        $scope.gdpData = data.root.value;
	                    });
	                })
	                $scope.gdpData.splice($index,1);


	            };
	        }
	    }]);

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by bom on 2016/9/9.
	 */
	var new_list=[
	    {name: '杭州市', geoCoord: [120.1, 30.14]},
	    {name: '桐庐', geoCoord: [119.15, 29.8]},
	    {name: '桐庐', geoCoord: [119.5, 29.69]},
	    {name: '富阳', geoCoord: [119.77, 29.9]},
	    {name: '临安', geoCoord: [119, 30.1]},
	    {name: '临安', geoCoord: [119.4, 30.2]},
	    {name: '余杭局', geoCoord: [119.85, 30.2]},
	    {name: '余杭局', geoCoord: [119.6, 30.4]},
	    {name: '余杭局', geoCoord: [120.1, 30.37]},
	    {name: '建德', geoCoord: [119.2, 29.45]},
	    {name: '建德', geoCoord: [118.8, 29.2]},
	    {name: '淳安', geoCoord: [118.6, 29.5]},
	    {name: '萧山', geoCoord: [120.2, 29.95]},
	    {name: '萧山', geoCoord: [120.3, 30.1]},
	    {name: '萧山', geoCoord: [120.6, 30.2]},
	    {name: '温州', geoCoord: [120.5, 27.8]},
	    {name: '温州', geoCoord: [120.7, 27.7]},
	    {name: '温州', geoCoord: [120.9, 27.7]},
	    {name: '乐清', geoCoord: [121.1, 27.9]},
	    {name: '乐清', geoCoord: [121.3, 28.1]},
	    {name: '永嘉', geoCoord: [120.8, 28.15]},
	    {name: '平阳县', geoCoord: [120.5, 27.4]},
	    {name: '苍南县', geoCoord: [120.5, 27.2]},
	    {name: '苍南县', geoCoord: [120.5, 27.2]},
	    {name: '文成县', geoCoord: [120, 27.55]},
	    {name: '泰顺', geoCoord: [119.8, 27.3]},
	    {name: '瑞安', geoCoord: [120.4, 27.6]},
	    {name: '瑞安', geoCoord: [120.7, 27.55]},
	    {name: '嘉兴', geoCoord: [120.9, 30.65]},
	    {name: '嘉善', geoCoord: [121, 30.8]},
	    {name: '平湖', geoCoord: [121.3, 30.65]},
	    {name: '海盐', geoCoord: [121, 30.45]},
	    {name: '桐乡', geoCoord: [120.55, 30.5]},
	    {name: '湖州', geoCoord: [120.1, 30.7]},
	    {name: '德清', geoCoord: [119.9, 30.5]},
	    {name: '长兴', geoCoord: [119.6, 30.9]},
	    {name: '安吉', geoCoord: [119.3, 30.5]},
	    {name: '绍兴', geoCoord: [120.65, 29.85]},
	    {name: '新仓', geoCoord: [121.2, 29.3]},
	    {name: '诸暨', geoCoord: [120.3, 29.5]},
	    {name: '上虞', geoCoord: [121.1, 29.8]},
	    {name: '上虞', geoCoord: [121, 29.9]},
	    {name: '嵊州', geoCoord: [121, 29.5]},
	    {name: '嵊州', geoCoord: [120.7, 29.4]},
	    {name: '金华市', geoCoord: [119.5, 28.9]},
	    {name: '金华市', geoCoord: [119.2, 28.8]},
	    {name: '永康', geoCoord: [120, 28.75]},
	    {name: '武义', geoCoord: [119.6, 28.6]},
	    {name: '义乌', geoCoord: [120, 29.1]},
	    {name: '浦江', geoCoord: [119.8, 29.4]},
	    {name: '磐安', geoCoord: [120.6, 28.9]},
	    {name: '兰溪', geoCoord: [119.2, 29.2]},
	    {name: '东阳', geoCoord: [120.3, 29.1]},
	    {name: '衢州', geoCoord: [118.4, 28.8]},
	    {name: '常山', geoCoord: [118, 28.8]},
	    {name: '江山', geoCoord: [118, 28.3]},
	    {name: '开花', geoCoord: [117.7, 29]},
	    {name: '龙游', geoCoord: [118.8, 28.8]},
	    {name: '定海', geoCoord: [122.6, 30]},
	    {name: '普陀', geoCoord: [122.8, 29.65]},
	    {name: '岱山', geoCoord: [122.85, 30.2]},
	    {name: '嵊泗', geoCoord: [123, 30.6]},
	    {name: '丽水', geoCoord: [119.7, 28.3]},
	    {name: '龙泉', geoCoord: [118.7, 27.8]},
	    {name: '青田', geoCoord: [120, 27.9]},
	    {name: '云和', geoCoord: [119.3, 27.9]},
	    {name: '庆元', geoCoord: [118.8, 27.4]},
	    {name: '缙云', geoCoord: [120.1, 28.5]},
	    {name: '遂昌', geoCoord: [118.6, 28.3]},
	    {name: '松阳', geoCoord: [119.15, 28.25]},
	    {name: '景宁', geoCoord: [119.35, 27.65]},
	    {name: '台州', geoCoord: [121.5, 28.4]},
	    {name: '临海', geoCoord: [121.5, 28.7]},
	    {name: '温岭', geoCoord: [121.7, 28.2]},
	    {name: '仙居', geoCoord: [120.7, 28.5]},
	    {name: '天台', geoCoord: [121.2, 29]},
	    {name: '三门', geoCoord: [121.8, 28.85]},
	    {name: '洞头', geoCoord: [121.4, 27.65]},
	    {name: '余姚', geoCoord: [121.7, 29.6]},
	    {name: '余姚', geoCoord: [121.4, 29.9]},
	    {name: '余姚', geoCoord: [121.5, 30.2]},
	    {name: '余姚', geoCoord: [122.2, 29.7]},
	    {name: '余姚', geoCoord: [121.9, 29.15]},
	    {name: '余姚', geoCoord: [122.4, 29.2]},
	    {name: '余姚', geoCoord: [121.9, 29.8]},
	    {name: '玉环', geoCoord: [121.5, 27.9]},

	];
	var b=2;
	var geo=new_list[0].geoCoord;
	for(var i=0;i<788*b;i++){
	    new_list.push({
	        name:"杭州市",
	        geoCoord:[Math.random() >.5?geo[0]+Math.random()*0.4+0.021:geo[0]-Math.random()*0.4+0.021,Math.random() >.5?geo[1]+Math.random()*0.4+0.021:geo[1]-Math.random()*0.4+0.021]
	    })
	}

	var geo_2=new_list[1].geoCoord;
	for(var i=0;i<32*b;i++){
	    new_list.push({
	        name:"桐庐",
	        geoCoord:[Math.random() >.5?geo_2[0]+Math.random() *.2+0.05:geo_2[0]-Math.random() *.2+0.05,Math.random() >.5?geo_2[1]+Math.random()*0.1+0.021:geo_2[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_3=new_list[2].geoCoord;
	for(var i=0;i<32*b;i++){
	    new_list.push({
	        name:"桐庐",
	        geoCoord:[Math.random() >.5?geo_3[0]+Math.random() *.2+0.05:geo_3[0]-Math.random() *.2+0.05,Math.random() >.5?geo_3[1]+Math.random()*0.1+0.021:geo_3[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_4=new_list[3].geoCoord;
	for(var i=0;i<215*b;i++){
	    new_list.push({
	        name:"富阳",
	        geoCoord:[Math.random() >.5?geo_4[0]+Math.random() *.5+0.05:geo_4[0]-Math.random() *.5+0.05,Math.random() >.5?geo_4[1]+Math.random()*0.3+0.021:geo_4[1]-Math.random()*0.3+0.021]
	    })
	}

	var geo_5=new_list[4].geoCoord;
	for(var i=0;i<36*b;i++){
	    new_list.push({
	        name:"临安",
	        geoCoord:[Math.random() >.5?geo_5[0]+Math.random() *.3+0.05:geo_5[0]-Math.random() *.4+0.05,Math.random() >.5?geo_5[1]+Math.random()*0.1+0.021:geo_5[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_6=new_list[5].geoCoord;
	for(var i=0;i<36*b;i++){
	    new_list.push({
	        name:"临安",
	        geoCoord:[Math.random() >.5?geo_6[0]+Math.random() *.3+0.05:geo_6[0]-Math.random() *.4+0.05,Math.random() >.5?geo_6[1]+Math.random()*0.1+0.021:geo_6[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_7=new_list[6].geoCoord;
	for(var i=0;i<64*b;i++){
	    new_list.push({
	        name:"余杭",
	        geoCoord:[Math.random() >.5?geo_7[0]+Math.random() *.1+0.05:geo_7[0]-Math.random() *.1+0.05,Math.random() >.5?geo_7[1]+Math.random()*0.1+0.021:geo_7[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_8=new_list[7].geoCoord;
	for(var i=0;i<64*b;i++){
	    new_list.push({
	        name:"余杭",
	        geoCoord:[Math.random() >.5?geo_8[0]+Math.random() *.1+0.05:geo_8[0]-Math.random() *.1+0.05,Math.random() >.5?geo_8[1]+Math.random()*0.1+0.021:geo_8[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_9=new_list[8].geoCoord;
	for(var i=0;i<64*b;i++){
	    new_list.push({
	        name:"余杭",
	        geoCoord:[Math.random() >.5?geo_9[0]+Math.random() *.2+0.05:geo_9[0]-Math.random() *.2+0.05,Math.random() >.5?geo_9[1]+Math.random()*0.05+0.021:geo_9[1]-Math.random()*0.05+0.021]
	    })
	}

	var geo_10=new_list[9].geoCoord;
	for(var i=0;i<28*b;i++){
	    new_list.push({
	        name:"建德",
	        geoCoord:[Math.random() >.5?geo_10[0]+Math.random() *.2+0.05:geo_10[0]-Math.random() *.2+0.05,Math.random() >.5?geo_10[1]+Math.random()*0.1+0.021:geo_10[1]-Math.random()*0.3+0.021]
	    })
	}

	var geo_11=new_list[10].geoCoord;
	for(var i=0;i<28*b;i++){
	    new_list.push({
	        name:"建德",
	        geoCoord:[Math.random() >.5?geo_11[0]+Math.random() *.2+0.05:geo_11[0]-Math.random() *.2+0.05,Math.random() >.5?geo_11[1]+Math.random()*0.1+0.021:geo_11[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_12=new_list[11].geoCoord;
	for(var i=0;i<30*b;i++){
	    new_list.push({
	        name:"淳安",
	        geoCoord:[Math.random() >.5?geo_12[0]+Math.random() *.3+0.05:geo_12[0]-Math.random() *.3+0.05,Math.random() >.5?geo_12[1]+Math.random()*0.3+0.021:geo_12[1]-Math.random()*0.3+0.021]
	    })
	}

	var geo_13=new_list[12].geoCoord;
	for(var i=0;i<66*b;i++){
	    new_list.push({
	        name:"萧山",
	        geoCoord:[Math.random() >.5?geo_13[0]+Math.random() *.1+0.05:geo_13[0]-Math.random() *.1+0.05,Math.random() >.5?geo_13[1]+Math.random()*0.1+0.021:geo_13[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_14=new_list[13].geoCoord;
	for(var i=0;i<30*b;i++){
	    new_list.push({
	        name:"萧山",
	        geoCoord:[Math.random() >.5?geo_14[0]+Math.random() *.1+0.05:geo_14[0]-Math.random() *.1+0.05,Math.random() >.5?geo_14[1]+Math.random()*0.1+0.021:geo_14[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_15=new_list[14].geoCoord;
	for(var i=0;i<90*b;i++){
	    new_list.push({
	        name:"萧山",
	        geoCoord:[Math.random() >.5?geo_15[0]+Math.random() *.15+0.05:geo_15[0]-Math.random() *.15+0.05,Math.random() >.5?geo_15[1]+Math.random()*0.1+0.021:geo_15[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_16=new_list[15].geoCoord;
	for(var i=0;i<160*b;i++){
	    new_list.push({
	        name:"温州",
	        geoCoord:[Math.random() >.5?geo_16[0]+Math.random() *.3+0.05:geo_16[0]-Math.random() *.3+0.05,Math.random() >.5?geo_16[1]+Math.random()*0.3+0.021:geo_16[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_17=new_list[16].geoCoord;
	for(var i=0;i<180*b;i++){
	    new_list.push({
	        name:"温州",
	        geoCoord:[Math.random() >.5?geo_17[0]+Math.random() *.3+0.05:geo_17[0]-Math.random() *.3+0.05,Math.random() >.5?geo_17[1]+Math.random()*0.3+0.021:geo_17[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_18=new_list[17].geoCoord;
	for(var i=0;i<160*b;i++){
	    new_list.push({
	        name:"温州",
	        geoCoord:[Math.random() >.5?geo_18[0]+Math.random() *.2+0.05:geo_18[0]-Math.random() *.3+0.05,Math.random() >.5?geo_18[1]+Math.random()*0.3+0.021:geo_18[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_19=new_list[18].geoCoord;
	for(var i=0;i<60*b;i++){
	    new_list.push({
	        name:"乐清",
	        geoCoord:[Math.random() >.5?geo_19[0]+Math.random() *.1+0.05:geo_19[0]-Math.random() *.1+0.05,Math.random() >.5?geo_19[1]+Math.random()*0.1+0.021:geo_19[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_20=new_list[19].geoCoord;
	for(var i=0;i<60*b;i++){
	    new_list.push({
	        name:"乐清",
	        geoCoord:[Math.random() >.5?geo_20[0]+Math.random() *.1+0.05:geo_20[0]-Math.random() *.2+0.05,Math.random() >.5?geo_20[1]+Math.random()*0.1+0.021:geo_20[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_21=new_list[20].geoCoord;
	for(var i=0;i<84*b;i++){
	    new_list.push({
	        name:"永嘉",
	        geoCoord:[Math.random() >.5?geo_21[0]+Math.random() *.3+0.05:geo_21[0]-Math.random() *.3+0.05,Math.random() >.5?geo_21[1]+Math.random()*0.3+0.021:geo_21[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_22=new_list[21].geoCoord;
	for(var i=0;i<114*b;i++){
	    new_list.push({
	        name:"平阳",
	        geoCoord:[Math.random() >.5?geo_22[0]+Math.random() *.3+0.05:geo_22[0]-Math.random() *.4+0.05,Math.random() >.5?geo_22[1]+Math.random()*0.1+0.021:geo_22[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_23=new_list[22].geoCoord;
	for(var i=0;i<90*b;i++){
	    new_list.push({
	        name:"苍南",
	        geoCoord:[Math.random() >.5?geo_23[0]+Math.random() *.2+0.05:geo_23[0]-Math.random() *.2+0.05,Math.random() >.5?geo_23[1]+Math.random()*0.05+0.021:geo_23[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_24=new_list[23].geoCoord;
	for(var i=0;i<90*b;i++){
	    new_list.push({
	        name:"苍南",
	        geoCoord:[Math.random() >.5?geo_24[0]+Math.random() *.1+0.05:geo_24[0]-Math.random() *.1+0.05,Math.random() >.5?geo_24[1]+Math.random()*0.2+0.021:geo_24[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_25=new_list[24].geoCoord;
	for(var i=0;i<22*b;i++){
	    new_list.push({
	        name:"文成",
	        geoCoord:[Math.random() >.5?geo_25[0]+Math.random() *.3+0.05:geo_25[0]-Math.random() *.3+0.05,Math.random() >.5?geo_25[1]+Math.random()*0.2+0.021:geo_25[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_26=new_list[25].geoCoord;
	for(var i=0;i<26*b;i++){
	    new_list.push({
	        name:"泰顺",
	        geoCoord:[Math.random() >.5?geo_26[0]+Math.random() *.3+0.05:geo_26[0]-Math.random() *.3+0.05,Math.random() >.5?geo_26[1]+Math.random()*0.2+0.021:geo_26[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_27=new_list[26].geoCoord;
	for(var i=0;i<80*b;i++){
	    new_list.push({
	        name:"瑞安",
	        geoCoord:[Math.random() >.5?geo_27[0]+Math.random() *.2+0.05:geo_27[0]-Math.random() *.2+0.05,Math.random() >.5?geo_27[1]+Math.random()*0.1+0.021:geo_27[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_28=new_list[27].geoCoord;
	for(var i=0;i<54*b;i++){
	    new_list.push({
	        name:"瑞安",
	        geoCoord:[Math.random() >.5?geo_28[0]+Math.random() *.2+0.05:geo_28[0]-Math.random() *.2+0.05,Math.random() >.5?geo_28[1]+Math.random()*0.1+0.021:geo_28[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_29=new_list[28].geoCoord;
	for(var i=0;i<268*b;i++){
	    new_list.push({
	        name:"嘉兴",
	        geoCoord:[Math.random() >.5?geo_29[0]+Math.random() *.2+0.05:geo_29[0]-Math.random() *.2+0.05,Math.random() >.5?geo_29[1]+Math.random()*0.2+0.021:geo_29[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_30=new_list[29].geoCoord;
	for(var i=0;i<84*b;i++){
	    new_list.push({
	        name:"嘉善",
	        geoCoord:[Math.random() >.5?geo_30[0]+Math.random() *.2+0.05:geo_30[0]-Math.random() *.2+0.05,Math.random() >.5?geo_30[1]+Math.random()*0.2+0.021:geo_30[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_31=new_list[30].geoCoord;
	for(var i=0;i<82*b;i++){
	    new_list.push({
	        name:"平湖",
	        geoCoord:[Math.random() >.5?geo_31[0]+Math.random() *.1+0.05:geo_31[0]-Math.random() *.1+0.05,Math.random() >.5?geo_31[1]+Math.random()*0.1+0.021:geo_31[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_32=new_list[31].geoCoord;
	for(var i=0;i<76*b;i++){
	    new_list.push({
	        name:"海盐",
	        geoCoord:[Math.random() >.5?geo_32[0]+Math.random() *.1+0.05:geo_32[0]-Math.random() *.2+0.05,Math.random() >.5?geo_32[1]+Math.random()*0.1+0.021:geo_32[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_33=new_list[32].geoCoord;
	for(var i=0;i<188*b;i++){
	    new_list.push({
	        name:"桐乡",
	        geoCoord:[Math.random() >.5?geo_33[0]+Math.random() *.2+0.05:geo_33[0]-Math.random() *.2+0.05,Math.random() >.5?geo_33[1]+Math.random()*0.2+0.021:geo_33[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_34=new_list[33].geoCoord;
	for(var i=0;i<178*b;i++){
	    new_list.push({
	        name:"湖州",
	        geoCoord:[Math.random() >.5?geo_34[0]+Math.random() *.35+0.05:geo_34[0]-Math.random() *.3+0.05,Math.random() >.5?geo_34[1]+Math.random()*0.2+0.021:geo_34[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_35=new_list[34].geoCoord;
	for(var i=0;i<74*b;i++){
	    new_list.push({
	        name:"德清",
	        geoCoord:[Math.random() >.5?geo_35[0]+Math.random() *.3+0.05:geo_35[0]-Math.random() *.2+0.05,Math.random() >.5?geo_35[1]+Math.random()*0.1+0.021:geo_35[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_36=new_list[35].geoCoord;
	for(var i=0;i<88*b;i++){
	    new_list.push({
	        name:"长兴",
	        geoCoord:[Math.random() >.5?geo_36[0]+Math.random() *.35+0.05:geo_36[0]-Math.random() *.2+0.05,Math.random() >.5?geo_36[1]+Math.random()*0.2+0.021:geo_36[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_37=new_list[36].geoCoord;
	for(var i=0;i<90*b;i++){
	    new_list.push({
	        name:"安吉",
	        geoCoord:[Math.random() >.5?geo_37[0]+Math.random() *.4+0.05:geo_37[0]-Math.random() *.2+0.05,Math.random() >.5?geo_37[1]+Math.random()*0.2+0.021:geo_37[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_38=new_list[37].geoCoord;
	for(var i=0;i<132*b;i++){
	    new_list.push({
	        name:"绍兴",
	        geoCoord:[Math.random() >.5?geo_38[0]+Math.random() *.2+0.05:geo_38[0]-Math.random() *.2+0.05,Math.random() >.5?geo_38[1]+Math.random()*0.2+0.021:geo_38[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_39=new_list[38].geoCoord;
	for(var i=0;i<87*b;i++){
	    new_list.push({
	        name:"新仓",
	        geoCoord:[Math.random() >.5?geo_39[0]+Math.random() *.25+0.05:geo_39[0]-Math.random() *.25+0.05,Math.random() >.5?geo_39[1]+Math.random()*0.15+0.021:geo_39[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_40=new_list[39].geoCoord;
	for(var i=0;i<258*b;i++){
	    new_list.push({
	        name:"诸暨",
	        geoCoord:[Math.random() >.5?geo_40[0]+Math.random() *.3+0.05:geo_40[0]-Math.random() *.35+0.05,Math.random() >.5?geo_40[1]+Math.random()*0.4+0.021:geo_40[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_41=new_list[40].geoCoord;
	for(var i=0;i<74*b;i++){
	    new_list.push({
	        name:"上虞",
	        geoCoord:[Math.random() >.5?geo_41[0]+Math.random() *.1+0.05:geo_41[0]-Math.random() *.2+0.05,Math.random() >.5?geo_41[1]+Math.random()*0.1+0.021:geo_41[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_42=new_list[41].geoCoord;
	for(var i=0;i<74*b;i++){
	    new_list.push({
	        name:"上虞",
	        geoCoord:[Math.random() >.5?geo_42[0]+Math.random() *.1+0.05:geo_42[0]-Math.random() *.1+0.05,Math.random() >.5?geo_42[1]+Math.random()*0.2+0.021:geo_42[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_43=new_list[42].geoCoord;
	for(var i=0;i<52*b;i++){
	    new_list.push({
	        name:"嵊州",
	        geoCoord:[Math.random() >.5?geo_43[0]+Math.random() *.3+0.05:geo_43[0]-Math.random() *.2+0.05,Math.random() >.5?geo_43[1]+Math.random()*0.1+0.021:geo_43[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_44=new_list[43].geoCoord;
	for(var i=0;i<52*b;i++){
	    new_list.push({
	        name:"嵊州",
	        geoCoord:[Math.random() >.5?geo_44[0]+Math.random() *.2+0.05:geo_44[0]-Math.random() *.2+0.05,Math.random() >.5?geo_44[1]+Math.random()*0.2+0.021:geo_44[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_45=new_list[44].geoCoord;
	for(var i=0;i<52*b;i++){
	    new_list.push({
	        name:"金华市",
	        geoCoord:[Math.random() >.5?geo_45[0]+Math.random() *.2+0.05:geo_45[0]-Math.random() *.2+0.05,Math.random() >.5?geo_45[1]+Math.random()*0.2+0.021:geo_45[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_46=new_list[45].geoCoord;
	for(var i=0;i<52*b;i++){
	    new_list.push({
	        name:"金华市",
	        geoCoord:[Math.random() >.5?geo_46[0]+Math.random() *.2+0.05:geo_46[0]-Math.random() *.2+0.05,Math.random() >.5?geo_46[1]+Math.random()*0.2+0.021:geo_46[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_47=new_list[46].geoCoord;
	for(var i=0;i<188*b;i++){
	    new_list.push({
	        name:"永康",
	        geoCoord:[Math.random() >.5?geo_47[0]+Math.random() *.2+0.05:geo_47[0]-Math.random() *.2+0.05,Math.random() >.5?geo_47[1]+Math.random()*0.2+0.021:geo_47[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_48=new_list[47].geoCoord;
	for(var i=0;i<70*b;i++){
	    new_list.push({
	        name:"武义",
	        geoCoord:[Math.random() >.5?geo_48[0]+Math.random() *.2+0.05:geo_48[0]-Math.random() *.2+0.05,Math.random() >.5?geo_48[1]+Math.random()*0.2+0.021:geo_48[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_49=new_list[48].geoCoord;
	for(var i=0;i<352*b;i++){
	    new_list.push({
	        name:"义乌",
	        geoCoord:[Math.random() >.5?geo_49[0]+Math.random() *.3+0.05:geo_49[0]-Math.random() *.4+0.05,Math.random() >.5?geo_49[1]+Math.random()*0.3+0.021:geo_49[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_50=new_list[49].geoCoord;
	for(var i=0;i<70*b;i++){
	    new_list.push({
	        name:"浦江",
	        geoCoord:[Math.random() >.5?geo_50[0]+Math.random() *.15+0.05:geo_50[0]-Math.random() *.2+0.05,Math.random() >.5?geo_50[1]+Math.random()*0.15+0.021:geo_50[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_51=new_list[50].geoCoord;
	for(var i=0;i<40*b;i++){
	    new_list.push({
	        name:"磐安",
	        geoCoord:[Math.random() >.5?geo_51[0]+Math.random() *.15+0.05:geo_51[0]-Math.random() *.2+0.05,Math.random() >.5?geo_51[1]+Math.random()*0.2+0.021:geo_51[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_52=new_list[51].geoCoord;
	for(var i=0;i<44*b;i++){
	    new_list.push({
	        name:"兰溪",
	        geoCoord:[Math.random() >.5?geo_52[0]+Math.random() *.3+0.05:geo_52[0]-Math.random() *.2+0.05,Math.random() >.5?geo_52[1]+Math.random()*0.1+0.021:geo_52[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_53=new_list[52].geoCoord;
	for(var i=0;i<174*b;i++){
	    new_list.push({
	        name:"东阳",
	        geoCoord:[Math.random() >.5?geo_53[0]+Math.random() *.4+0.05:geo_53[0]-Math.random() *.3+0.05,Math.random() >.5?geo_53[1]+Math.random()*0.2+0.021:geo_53[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_54=new_list[53].geoCoord;
	for(var i=0;i<132*b;i++){
	    new_list.push({
	        name:"衢州",
	        geoCoord:[Math.random() >.5?geo_54[0]+Math.random() *.2+0.05:geo_54[0]-Math.random() *.2+0.05,Math.random() >.5?geo_54[1]+Math.random()*0.4+0.021:geo_54[1]-Math.random()*0.4+0.021]
	    })
	}
	var geo_55=new_list[54].geoCoord;
	for(var i=0;i<38*b;i++){
	    new_list.push({
	        name:"常山",
	        geoCoord:[Math.random() >.5?geo_55[0]+Math.random() *.3+0.05:geo_55[0]-Math.random() *.3+0.05,Math.random() >.5?geo_55[1]+Math.random()*0.2+0.021:geo_55[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_56=new_list[55].geoCoord;
	for(var i=0;i<54*b;i++){
	    new_list.push({
	        name:"江山",
	        geoCoord:[Math.random() >.5?geo_56[0]+Math.random() *.2+0.05:geo_56[0]-Math.random() *.2+0.05,Math.random() >.5?geo_56[1]+Math.random()*0.3+0.021:geo_56[1]-Math.random()*0.3+0.021]
	    })
	}

	var geo_57=new_list[56].geoCoord;
	for(var i=0;i<40*b;i++){
	    new_list.push({
	        name:"开化",
	        geoCoord:[Math.random() >.5?geo_57[0]+Math.random() *.2+0.05:geo_57[0]-Math.random() *.2+0.05,Math.random() >.5?geo_57[1]+Math.random()*0.3+0.021:geo_57[1]-Math.random()*0.3+0.021]
	    })
	}
	var geo_58=new_list[57].geoCoord;
	for(var i=0;i<40*b;i++){
	    new_list.push({
	        name:"龙游",
	        geoCoord:[Math.random() >.5?geo_58[0]+Math.random() *.1+0.05:geo_58[0]-Math.random() *.1+0.05,Math.random() >.5?geo_58[1]+Math.random()*0.4+0.021:geo_58[1]-Math.random()*0.4+0.021]
	    })
	}
	var geo_59=new_list[58].geoCoord;
	for(var i=0;i<78*b;i++){
	    new_list.push({
	        name:"定海",
	        geoCoord:[Math.random() >.5?geo_59[0]+Math.random() *.2+0.05:geo_59[0]-Math.random() *.1+0.05,Math.random() >.5?geo_59[1]+Math.random()*0.2+0.021:geo_59[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_60=new_list[59].geoCoord;
	for(var i=0;i<56*b;i++){
	    new_list.push({
	        name:"普陀",
	        geoCoord:[Math.random() >.5?geo_60[0]+Math.random() *.2+0.05:geo_60[0]-Math.random() *.2+0.05,Math.random() >.5?geo_60[1]+Math.random()*0.05+0.021:geo_60[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_61=new_list[60].geoCoord;
	for(var i=0;i<22*b;i++){
	    new_list.push({
	        name:"岱山",
	        geoCoord:[Math.random() >.5?geo_61[0]+Math.random() *.1+0.05:geo_61[0]-Math.random() *.1+0.05,Math.random() >.5?geo_61[1]+Math.random()*0.1+0.021:geo_61[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_62=new_list[61].geoCoord;
	for(var i=0;i<14*b;i++){
	    new_list.push({
	        name:"嵊泗",
	        geoCoord:[Math.random() >.5?geo_62[0]+Math.random() *.1+0.05:geo_62[0]-Math.random() *.1+0.05,Math.random() >.5?geo_62[1]+Math.random()*0.1+0.021:geo_62[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_63=new_list[62].geoCoord;
	for(var i=0;i<92*b;i++){
	    new_list.push({
	        name:"丽水",
	        geoCoord:[Math.random() >.5?geo_63[0]+Math.random() *.2+0.05:geo_63[0]-Math.random() *.2+0.05,Math.random() >.5?geo_63[1]+Math.random()*0.2+0.021:geo_63[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_64=new_list[63].geoCoord;
	for(var i=0;i<36*b;i++){
	    new_list.push({
	        name:"龙泉",
	        geoCoord:[Math.random() >.5?geo_64[0]+Math.random() *.35+0.05:geo_64[0]-Math.random() *.35+0.05,Math.random() >.5?geo_64[1]+Math.random()*0.25+0.021:geo_64[1]-Math.random()*0.25+0.021]
	    })
	}
	var geo_65=new_list[64].geoCoord;
	for(var i=0;i<62*b;i++){
	    new_list.push({
	        name:"青田",
	        geoCoord:[Math.random() >.5?geo_65[0]+Math.random() *.35+0.05:geo_65[0]-Math.random() *.35+0.05,Math.random() >.5?geo_65[1]+Math.random()*0.25+0.021:geo_65[1]-Math.random()*0.25+0.021]
	    })
	}
	var geo_66=new_list[65].geoCoord;
	for(var i=0;i<32*b;i++){
	    new_list.push({
	        name:"云和",
	        geoCoord:[Math.random() >.5?geo_66[0]+Math.random() *.1+0.05:geo_66[0]-Math.random() *.1+0.05,Math.random() >.5?geo_66[1]+Math.random()*0.1+0.021:geo_66[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_67=new_list[66].geoCoord;
	for(var i=0;i<30*b;i++){
	    new_list.push({
	        name:"庆元",
	        geoCoord:[Math.random() >.5?geo_67[0]+Math.random() *.4+0.05:geo_67[0]-Math.random() *.4+0.05,Math.random() >.5?geo_67[1]+Math.random()*0.2+0.021:geo_67[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_68=new_list[67].geoCoord;
	for(var i=0;i<58*b;i++){
	    new_list.push({
	        name:" 缙云",
	        geoCoord:[Math.random() >.5?geo_68[0]+Math.random() *.3+0.05:geo_68[0]-Math.random() *.2+0.05,Math.random() >.5?geo_68[1]+Math.random()*0.15+0.021:geo_68[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_69=new_list[68].geoCoord;
	for(var i=0;i<26*b;i++){
	    new_list.push({
	        name:" 遂昌",
	        geoCoord:[Math.random() >.5?geo_69[0]+Math.random() *.3+0.05:geo_69[0]-Math.random() *.2+0.05,Math.random() >.5?geo_69[1]+Math.random()*0.15+0.021:geo_69[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_70=new_list[69].geoCoord;
	for(var i=0;i<34*b;i++){
	    new_list.push({
	        name:" 松阳",
	        geoCoord:[Math.random() >.5?geo_70[0]+Math.random() *.3+0.05:geo_70[0]-Math.random() *.2+0.05,Math.random() >.5?geo_70[1]+Math.random()*0.15+0.021:geo_70[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_71=new_list[70].geoCoord;
	for(var i=0;i<26*b;i++){
	    new_list.push({
	        name:"景宁",
	        geoCoord:[Math.random() >.5?geo_71[0]+Math.random() *.3+0.05:geo_71[0]-Math.random() *.2+0.05,Math.random() >.5?geo_71[1]+Math.random()*0.15+0.021:geo_71[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_72=new_list[71].geoCoord;
	for(var i=0;i<20*b;i++){
	    new_list.push({
	        name:"台州",
	        geoCoord:[Math.random() >.5?geo_72[0]+Math.random() *.4+0.05:geo_72[0]-Math.random() *.4+0.05,Math.random() >.5?geo_72[1]+Math.random()*0.15+0.021:geo_72[1]-Math.random()*0.15+0.021]
	    })
	}
	for(var i=0;i<114*2;i++){
	    new_list.push({
	        name:"台州",
	        geoCoord:[Math.random() >.5?geo_72[0]+Math.random() *.4+0.05:geo_72[0]-Math.random() *.4+0.05,Math.random() >.5?geo_72[1]+Math.random()*0.15+0.021:geo_72[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_73=new_list[72].geoCoord;
	for(var i=0;i<78*b;i++){
	    new_list.push({
	        name:"临海",
	        geoCoord:[Math.random() >.5?geo_73[0]+Math.random() *.4+0.05:geo_73[0]-Math.random() *.4+0.05,Math.random() >.5?geo_73[1]+Math.random()*0.15+0.021:geo_73[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_74=new_list[73].geoCoord;
	for(var i=0;i<90*b;i++){   //190
	    new_list.push({
	        name:"温岭",
	        geoCoord:[Math.random() >.5?geo_74[0]+Math.random() *.3+0.05:geo_74[0]-Math.random() *.2+0.05,Math.random() >.5?geo_74[1]+Math.random()*0.15+0.021:geo_74[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_75=new_list[74].geoCoord;
	for(var i=0;i<34*b;i++){
	    new_list.push({
	        name:"仙居",
	        geoCoord:[Math.random() >.5?geo_75[0]+Math.random() *.4+0.05:geo_75[0]-Math.random() *.3+0.05,Math.random() >.5?geo_75[1]+Math.random()*0.2+0.021:geo_75[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_76=new_list[75].geoCoord;
	for(var i=0;i<76*b;i++){
	    new_list.push({
	        name:"天台",
	        geoCoord:[Math.random() >.5?geo_76[0]+Math.random() *.4+0.05:geo_76[0]-Math.random() *.3+0.05,Math.random() >.5?geo_76[1]+Math.random()*0.2+0.021:geo_76[1]-Math.random()*0.15+0.021]
	    })
	}
	var geo_77=new_list[76].geoCoord;
	for(var i=0;i<40*b;i++){
	    new_list.push({
	        name:"三门",
	        geoCoord:[Math.random() >.5?geo_77[0]+Math.random() *.3+0.05:geo_77[0]-Math.random() *.3+0.05,Math.random() >.5?geo_77[1]+Math.random()*0.1+0.021:geo_77[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_78=new_list[77].geoCoord;
	for(var i=0;i<9*b;i++){
	    new_list.push({
	        name:"玉环",
	        geoCoord:[Math.random() >.5?geo_78[0]+Math.random() *.1+0.05:geo_78[0]-Math.random() *.1+0.05,Math.random() >.5?geo_78[1]+Math.random()*0.1+0.021:geo_78[1]-Math.random()*0.1+0.021]
	    })
	}

	var geo_79=new_list[78].geoCoord;
	for(var i=0;i<165*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_79[0]+Math.random() *.6+0.05:geo_79[0]-Math.random() *.4+0.05,Math.random() >.5?geo_79[1]+Math.random()*0.3+0.021:geo_79[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_80=new_list[79].geoCoord;
	for(var i=0;i<165*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_80[0]+Math.random() *.5+0.05:geo_80[0]-Math.random() *.2+0.05,Math.random() >.5?geo_80[1]+Math.random()*0.3+0.021:geo_80[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_81=new_list[80].geoCoord;
	for(var i=0;i<15*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_81[0]+Math.random() *.4+0.05:geo_81[0]-Math.random() *.1+0.05,Math.random() >.5?geo_81[1]+Math.random()*0.1+0.021:geo_81[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_82=new_list[81].geoCoord;
	for(var i=0;i<30*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_82[0]+Math.random() *.3+0.05:geo_82[0]-Math.random() *.2+0.05,Math.random() >.5?geo_82[1]+Math.random()*0.1+0.021:geo_82[1]-Math.random()*0.1+0.021]
	    })
	}
	var geo_83=new_list[82].geoCoord;
	for(var i=0;i<205*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_83[0]+Math.random() *.6+0.05:geo_83[0]-Math.random() *.5+0.05,Math.random() >.5?geo_83[1]+Math.random()*0.2+0.021:geo_83[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_84=new_list[83].geoCoord;
	for(var i=0;i<55*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_84[0]+Math.random() *.1+0.05:geo_84[0]-Math.random() *.2+0.05,Math.random() >.5?geo_84[1]+Math.random()*0.3+0.021:geo_84[1]-Math.random()*0.25+0.021]
	    })
	}
	var geo_85=new_list[84].geoCoord;
	for(var i=0;i<105*b;i++){
	    new_list.push({
	        name:"余姚",
	        geoCoord:[Math.random() >.5?geo_85[0]+Math.random() *.2+0.05:geo_85[0]-Math.random() *.2+0.05,Math.random() >.5?geo_85[1]+Math.random()*0.2+0.021:geo_85[1]-Math.random()*0.2+0.021]
	    })
	}
	var geo_86=new_list[85].geoCoord;
	for(var i=0;i<50*b;i++){
	    new_list.push({
	        name:"玉环",
	        geoCoord:[Math.random() >.5?geo_86[0]+Math.random() *.1+0.05:geo_86[0]-Math.random() *.1+0.05,Math.random() >.5?geo_86[1]+Math.random()*0.1+0.021:geo_86[1]-Math.random()*0.1+0.021]
	    })
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by dingtianxiu on 16/5/13.
	 */
	angular.module('nsrdjApp', ['ui.alert'])
	    .controller('nsrdjCtrl', ['$scope', '$http', 'alertService', '$filter', function ($scope, $http, alertService, $filter) {
	        alertService.mask();
	        $scope.launchFullScreen = function () {
	            console.log(1);
	            if (document.documentElement.requestFullscreen) {
	                document.documentElement.requestFullscreen();
	            } else if (document.documentElement.mozRequestFullScreen) {
	                document.documentElement.mozRequestFullScreen();
	            } else if (document.documentElement.webkitRequestFullscreen) {
	                document.documentElement.webkitRequestFullscreen();
	            } else if (document.documentElement.msRequestFullscreen) {
	                document.documentElement.msRequestFullscreen();
	            }
	        };
	        //$http.get($scope.URL+'/nsrbd?qsnf=' + ($scope.curYear - 7) + '&zznf=' + $scope.curYear + '&tybm=33')
	        //$scope.post("CxglDtzs2016BLH_selectNsrbd", {qsnf: $scope.curYear - 7, zznf: $scope.curYear, tybm: 33})
	        $http.get("data_json/nsrdj/qsnf2010zznf2017tybm33.json")
	        .success(function (data) {
	                //$http.get($scope.URL + '/nsrhs?qsnf=' + $scope.curYear + '&zznf=' + $scope.curYear + '&tybm=33')
	                //$scope.post('CxglDtzs2016BLH_selectNsrhs', {qsnf: $scope.curYear, zznf: $scope.curYear, tybm: 33})
	                $http.get("data_json/nsrdj/qsnf2017zznf2017tybm33.json")
	                .success(function (data_2016) {
	                        console.log("data_2016", data_2016);
	                        data_2016 = JSON.parse(data_2016.data[0].value);
	                        $scope.count = 0;
	                        for (var i = 0, j = data_2016.length; i < j; i++) {
	                            $scope.count += parseInt(data_2016[i].hs);
	                        }
	                        console.log($scope.count);
	                    });
	                console.log("data", data);
	                alertService.unmask();
	                data = JSON.parse(data.data[0].value);
	                console.log(data);
	                var nf_index=0;
	                for(var i=0;i<data.length;i++){
	                    if(data[i].nf>nf_index)
	                    {
	                            nf_index=i;
	                    }
	                }
	                console.log("nf_index",nf_index);
	                $scope.xz = parseInt(data[nf_index].zc);
	                $scope.zx = parseInt(data[nf_index].zx);
	                var zc = [];
	                var zx = [];
	                var yx = [];
	                for (var i = 0; i < data.length; i++) {
	                    zc.push((parseInt(data[i]['zc']) / 10000).toFixed(2) - 0);
	                    zx.push((parseInt(data[i]['zx']) / 10000).toFixed(2) - 0);
	                }
	                for (var i = 0; i < zc.length; i++) {
	                    yx.push((zc[i] - zx[i]).toFixed(2) - 0)
	                }
	                zc.pop();
	                zx.pop();
	                yx.pop();
	                console.log(zc, zx, yx);
	                var chart = new Highcharts.Chart({
	                    chart: {
	                        backgroundColor: 'rgba(7,36,106,0.0)',
	                        renderTo: $('.leftBox')[0],
	                        type: 'column',
	                        margin: [160, 50, 200, 80],
	                        options3d: {
	                            enabled: true,
	                            alpha: 0,
	                            beta: 0,
	                            depth: 50,
	                            viewDistance: 25
	                        },
	                        borderWidth: 0
	                    },
	                    title: {
	                        text: ''
	                    },
	                    tooltip: {
	                        backgroundColor: '#011641',
	                        style: {
	                            fontFamily: 'Arial',
	                            color: '#fff',
	                            fontSize: '16px',
	                            lineHeight: '30px',
	                            padding: '16px'
	                        },
	                        //pointFormat:  '<span style="font-family: 方正小标宋简体">{series.name}</span>: <span style="color: yellow"> {point.y}</span><br/>'
	                        formatter: function () {
	                            var y = this.y;
	                            return '<span style="font-family: Arial">' + this.x + '</span><span style="font-family: 方正小标宋简体">年<span></span><br>' +
	                                '<span style="font-family: 方正小标宋简体">' + this.series.name[0] + '</span>' +
	                                ': <span style="color: yellow">' + $filter('number')(y, 2) + '</span><br/>'
	                        }
	                    },
	                    exporting: {
	                        enabled: false
	                    },
	                    xAxis: {
	                        labels: {
	                            style: {
	                                color: '#fff',
	                                fontSize: '16',
	                                fontFamily: 'Arial'
	                            }
	                        },
	                        gridLineColor: '#E4393c',
	                        gridLineWidth: 0,
	                        gridLineDashStyle: 'longdash',
	                        categories: [$scope.curYear - 7, $scope.curYear - 6, $scope.curYear - 5, $scope.curYear - 4, $scope.curYear - 3, $scope.curYear - 2, $scope.curYear - 1]
	                        //categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015]
	                    },
	                    yAxis: {
	                        gridLineColor: 'rgba(255,255,255,0.3)',
	                        gridLineWidth: 1,
	                        gridLineDashStyle: 'longdash',
	                        labels: {
	                            style: {
	                                color: '#fff',
	                                fontSize: '16',
	                                fontFamily: 'Arial'
	                            }
	                        },
	                        title: {
	                            text: ''
	                        }
	                    },
	                    plotOptions: {
	                        series: {
	                            //events: {
	                            //  legendItemClick: function(e) {
	                            //    return true; // 直接 return false 即可禁用图例点击事件
	                            //  }
	                            //}
	                            //pointWidth:60
	                        }
	                    },
	                    legend: {
	                        //data:['注册登记数','注册登','注']
	                        enable: true,
	                        labelFormat: '{name}',
	                        itemStyle: {
	                            color: '#aaa',
	                            fontSize: '18px',
	                            fontFamily: '方正小标宋简体'
	                        },
	                        itemHoverStyle: {
	                            color: '#fff'
	                        },
	                        padding: 70,
	                        itemDistance: 25
	                    },
	                    series: [
	                        {
	                            name: ['新增纳税人(万)'],
	                            color: '#1F97EE',
	                            data: zc,
	                            zIndex: 5,
	                            borderWidth: 10
	                        },
	                        {
	                            name: ['注销纳税人(万)'],
	                            data: zx,
	                            color: '#9834ff',
	                            zIndex: 5
	                        },
	                        {
	                            name: ['实际增加数(万)'],
	                            type: 'line',
	                            color: 'yellow',
	                            data: yx,
	                            zIndex: 100
	                        }
	                    ]
	                });
	                alertService.unmask();
	            })
	            .error(function () {
	                alertService.unmask();
	            });
	        //添加背景效果
	        var script = document.createElement("script");
	        script.src = "js/bg/bg_1.js";
	        document.body.appendChild(script);

	    }]);


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by ww on 2016/7/11.
	 */
	//浙江（市地图）
	$.get('ownGeo/zhejiang.json', function(geoJson){
	    echarts3.registerMap('浙江', geoJson);
	    //console.log(sss = geoJson);
	});
	//浙江（县地图）
	$.get('ownGeo/zjdetail.json', function(geoJson){
	    echarts3.registerMap('浙江县', geoJson);
	});
	//杭州
	$.get('ownGeo/hz.json', function(geoJson){
	    echarts3.registerMap('杭州市', geoJson);
	});
	//湖州
	$.get('ownGeo/huz.json', function(geoJson){
	    echarts3.registerMap('湖州市', geoJson);
	});
	//金华
	$.get('ownGeo/jh.json', function(geoJson){
	    echarts3.registerMap('金华市', geoJson);
	});
	//嘉兴
	$.get('ownGeo/jx.json', function(geoJson){
	    echarts3.registerMap('嘉兴市', geoJson);
	});
	//丽水
	$.get('ownGeo/ls.json', function(geoJson){
	    echarts3.registerMap('丽水市', geoJson);
	});
	//宁波
	$.get('ownGeo/nb.json', function(geoJson){
	    echarts3.registerMap('宁波市', geoJson);
	});
	//衢州
	$.get('ownGeo/qz.json', function(geoJson){
	    echarts3.registerMap('衢州市', geoJson);
	});
	//绍兴
	$.get('ownGeo/sx.json', function(geoJson){
	    echarts3.registerMap('绍兴市', geoJson);
	});
	//台州
	$.get('ownGeo/tz.json', function(geoJson){
	    echarts3.registerMap('台州市', geoJson);
	});
	//温州
	$.get('ownGeo/wz.json', function(geoJson){
	    echarts3.registerMap('温州市', geoJson);
	});
	//舟山
	$.get('ownGeo/zs.json', function(geoJson){
	    echarts3.registerMap('舟山市', geoJson);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
	 Highcharts JS v4.2.3 (2016-02-08)

	 (c) 2009-2016 Torstein Honsi

	 License: www.highcharts.com/license
	 */
	(function(E,X){typeof module==="object"&&module.exports?module.exports=E.document?X(E):X:E.Highcharts=X(E)})(typeof window!=="undefined"?window:this,function(E){function X(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);E.console&&console.log(c)}function pb(a,b,c){this.options=b;this.elem=a;this.prop=c}function D(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&
	Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function C(a,b){return parseInt(a,b||10)}function xa(a){return typeof a==="string"}function Y(a){return a&&typeof a==="object"}function Ia(a){return Object.prototype.toString.call(a)==="[object Array]"}function ma(a){return typeof a==="number"}function Da(a){return W.log(a)/
	  W.LN10}function na(a){return W.pow(10,a)}function oa(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function q(a){return a!==z&&a!==null}function K(a,b,c){var d,e;if(xa(b))q(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(q(b)&&Y(b))for(d in b)a.setAttribute(d,b[d]);return e}function ta(a){return Ia(a)?a:[a]}function Pa(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function L(a,b){if(ya&&!ca&&b&&b.opacity!==z)b.filter="alpha(opacity="+b.opacity*100+")";u(a.style,
	  b)}function Z(a,b,c,d,e){a=y.createElement(a);b&&u(a,b);e&&L(a,{padding:0,border:"none",margin:0});c&&L(a,c);d&&d.appendChild(a);return a}function pa(a,b){var c=function(){};c.prototype=new a;u(c.prototype,b);return c}function Ja(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Ya(a){return(Za&&Za(a)||qb||0)*6E4}function Ka(a,b){for(var c="{",d=!1,e,f,g,h,i,k=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];
	 if(f.length)f=f.join(":"),g=/\.([0-9])/,h=N.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=B.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Qa(f,e)}k.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}k.push(a);return k.join("")}function rb(a){return W.pow(10,T(W.log(a)/W.LN10))}function sb(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/
	  2)break;g*=c;return g}function ib(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}function Ra(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ea(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Sa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Ta(a){jb||(jb=Z(La));a&&jb.appendChild(a);jb.innerHTML=""}function fa(a,b){return parseFloat(a.toPrecision(b||
	  14))}function Ua(a,b){b.renderer.globalAnimation=p(a,b.animation)}function Fb(){var a=N.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";qa=a.Date||E.Date;qb=b&&a.timezoneOffset;Za=b&&a.getTimezoneOffset;kb=function(a,c,d,h,i,k){var j;b?(j=qa.UTC.apply(0,arguments),j+=Ya(j)):j=(new qa(a,c,p(d,1),p(h,0),p(i,0),p(k,0))).getTime();return j};tb=c+"Minutes";ub=c+"Hours";vb=c+"Day";$a=c+"Date";ab=c+"Month";bb=c+"FullYear";Gb=d+"Milliseconds";Hb=d+"Seconds";Ib=d+"Minutes";Jb=d+"Hours";wb=d+"Date";
	 xb=d+"Month";yb=d+"FullYear"}function ia(a){if(!(this instanceof ia))return new ia(a);this.init(a)}function O(){}function Va(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Kb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":
	  "top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var z,y=E.document,W=Math,A=W.round,T=W.floor,ua=W.ceil,t=W.max,F=W.min,P=W.abs,U=W.cos,$=W.sin,ra=W.PI,ga=ra*2/360,za=E.navigator&&E.navigator.userAgent||"",Lb=E.opera,ya=/(msie|trident|edge)/i.test(za)&&!Lb,lb=y&&y.documentMode===8,mb=!ya&&/AppleWebKit/.test(za),Ma=/Firefox/.test(za),Mb=/(Mobile|Android|Windows Phone)/.test(za),Fa="http://www.w3.org/2000/svg",ca=y&&y.createElementNS&&!!y.createElementNS(Fa,
	    "svg").createSVGRect,Qb=Ma&&parseInt(za.split("Firefox/")[1],10)<4,ha=y&&!ca&&!ya&&!!y.createElement("canvas").getContext,cb,db,Nb={},zb=0,jb,N,Qa,G,Aa=function(){},S=[],eb=0,La="div",Rb=/^[0-9]+$/,nb=["plotTop","marginRight","marginBottom","plotLeft"],qa,kb,qb,Za,tb,ub,vb,$a,ab,bb,Gb,Hb,Ib,Jb,wb,xb,yb,I={},B;B=E.Highcharts?X(16,!0):{win:E};B.seriesTypes=I;var Ga=[],ja,sa,o,Na,Ab,Ba,M,V,H,Wa,Oa;pb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===
	  1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new qa;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=
	  0;e.elem=this.elem;if(e()&&Ga.push(e)===1)e.timerId=setInterval(function(){for(f=0;f<Ga.length;f++)Ga[f]()||Ga.splice(f--,1);Ga.length||clearInterval(e.timerId)},13)},step:function(a){var b=+new qa,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+
	  (this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h=a.isArea,i=h?2:1,k=function(a){for(g=a.length;g--;)(a[g]==="M"||a[g]==="L")&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(k(b),k(c));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=c.slice(0,f).concat(c),h&&(c=c.concat(c.slice(c.length-f)));a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=b.slice().splice(b.length/i-f,f*i),
	e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),[].splice.apply(b,[b.length/i,0].concat(d));return[b,c]}};var u=B.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},p=B.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==z&&c!==null)return c},fb=B.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Qa=function(a,b,c){if(!q(b)||isNaN(b))return N.lang.invalidDate||"";var a=p(a,"%Y-%m-%d %H:%M:%S"),
	  d=new qa(b-Ya(b)),e,f=d[ub](),g=d[vb](),h=d[$a](),i=d[ab](),k=d[bb](),j=N.lang,l=j.weekdays,d=u({a:l[g].substr(0,3),A:l[g],d:Ja(h),e:h,w:g,b:j.shortMonths[i],B:j.months[i],m:Ja(i+1),y:k.toString().substr(2,2),Y:k,H:Ja(f),k:f,I:Ja(f%12||12),l:f%12||12,M:Ja(d[tb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ja(d.getSeconds()),L:Ja(A(b%1E3),3)},B.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};
	 G={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};B.numberFormat=function(a,b,c,d){var a=+a||0,e=N.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):isNaN(b)&&(b=2);g=String(C(i.toFixed(b)));h=g.length>3?g.length%3:0;c=p(c,e.decimalPoint);d=p(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);+b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));
	  return a};Math.easeInOutSine=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};ja=function(a,b){var c;if(b==="width")return Math.min(a.offsetWidth,a.scrollWidth)-ja(a,"padding-left")-ja(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-ja(a,"padding-top")-ja(a,"padding-bottom");return(c=E.getComputedStyle(a,void 0))&&C(c.getPropertyValue(b))};sa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Na=function(a,b){return[].filter.call(a,b)};Ba=function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};Ab=function(a){var b=y.documentElement,a=a.getBoundingClientRect();return{top:a.top+(E.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(E.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Oa=function(a){for(var b=Ga.length;b--;)if(Ga[b].elem===a)Ga[b].stopped=!0};o=function(a,b){return Array.prototype.forEach.call(a,b)};M=function(a,b,c){function d(b){b.target=b.srcElement||E;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};
	  if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE={};a.hcEventsIE[c.toString()]=d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};V=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=
	   sa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};H=function(a,b,c,d){var e;e=a.hcEvents;var f,g,h,i,c=c||{};if(y.createEvent&&(a.dispatchEvent||a.fireEvent))e=y.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,u(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;h=function(){c.defaultPrevented=!0};for(g=0;g<f;g++){i=e[g];if(c.stopped)return;c.preventDefault=h;c.target=a;if(!c.type)c.type=b;i.call(a,c)===!1&&c.preventDefault()}}d&&
	 !c.defaultPrevented&&d(c)};Wa=function(a,b,c){var d,e="",f,g,h;Y(c)||(d=arguments,c={duration:d[2],easing:d[3],complete:d[4]});if(!ma(c.duration))c.duration=400;c.easing=Math[c.easing]||Math.easeInOutSine;c.curAnim=D(b);for(h in b)g=new pb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(ja(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(E.jQuery)E.jQuery.fn.highcharts=function(){var a=
	   [].slice.call(arguments);if(this[0])return a[0]?(new (B[xa(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):S[K(this[0],"data-highcharts-chart")]};y&&!y.defaultView&&(ja=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return C(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,a[c]-2*ja(a,"padding");c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/
	   100}));return c===""?1:C(c)});Array.prototype.forEach||(o=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c});Array.prototype.indexOf||(sa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Na=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});B.Fx=pb;B.inArray=sa;B.each=o;B.grep=Na;B.offset=Ab;B.map=Ba;B.addEvent=M;B.removeEvent=V;B.fireEvent=H;B.animate=Wa;B.stop=Oa;N={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
	  symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,
	   canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.2.3/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",
	   align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===null?"":B.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},
	   verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",
	   fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ca,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
	   second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Mb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"",
	   href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var aa=N.plotOptions,da=aa.line;Fb();ia.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[C(a[1],16),C(a[2],16),C(a[3],16),
	  1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=Ba(a.stops,function(a){return new ia(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=D(b),d.stops=[].concat(d.stops),o(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],
	  b.get(a)]})):d=c&&!isNaN(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)o(this.stops,function(b){b.brighten(a)});else if(ma(a)&&a!==0)for(b=0;b<3;b++)c[b]+=C(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};O.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
	  init:function(a,b){this.element=b==="span"?Z(b):y.createElementNS(Fa,b);this.renderer=a},animate:function(a,b,c){b=p(b,this.renderer.globalAnimation,!0);Oa(this);if(b){b=D(b,{});if(c)b.complete=c;Wa(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,k,j,l,m,n,r,s=[],p;a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;j=a.stops;n=c.radialReference;Ia(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],
	   gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!q(g.gradientUnits)&&(h=g,g=D(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(r in g)r!=="id"&&s.push(r,g[r]);for(r in j)s.push(j[r]);s=s.join(",");i[s]?n=i[s].attr("id"):(g.id=n="highcharts-"+zb++,i[s]=k=d.createElement(f).attr(g).add(d.defs),k.radAttr=h,k.stops=[],o(j,function(a){a[1].indexOf("rgba")===0?(e=ia(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(k);
	   k.stops.push(a)}));p="url("+d.url+"#"+n+")";c.setAttribute(b,p);c.gradient=s;a.toString=function(){return p}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==z&&!ya;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(mb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),o(a.split(/\s?,\s?/g),
	    function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&o(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);K(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(C(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==z&&(d=a,a={},a[d]=
	    b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=
	    !1}c&&c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(null,a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=K(b,"class")||"";c.indexOf(a)===-1&&K(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",
	    a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=A(e)%2/2;a.x=T(a.x||this.x||0)+d;a.y=T(a.y||this.y||0)+d;a.width=T((a.width||this.width||0)-2*d);a.height=T((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()===
	    "text"&&C(a.width)||this.textWidth;b&&(a=u(b,c));this.styles=a;e&&(ha||!ca&&this.renderer.forExport)&&delete a.width;if(ya&&!ca)L(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";K(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;db&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=qa.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(za.indexOf("Android")===
	  -1||qa.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,
	    d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(q(c)||q(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;
	   if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||xa(c))this.alignTo=d=c||"renderer",oa(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=A(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=A(g);this[this.placed?
	     "animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var k,j=h.style,l,m=d.cache,n=d.cacheKeys,r;f=p(b,this.rotation);g=f*ga;e!==z&&(r=["",f||0,i&&i.fontSize,h.style.width].join(","),r=e===""||Rb.test(e)?"num:"+e.toString().length+r:e+r);r&&!a&&(c=m[r]);if(!c){if(h.namespaceURI===Fa||d.forExport){try{l=this.fakeTS&&function(a){o(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=
	      a})},Ma&&j.textShadow?(k=j.textShadow,j.textShadow=""):l&&l("none"),c=h.getBBox?u({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},k?j.textShadow=k:l&&l("")}catch(s){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=c.width;e=c.height;if(ya&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=P(e*$(g))+P(d*U(g)),c.height=P(e*U(g))+P(d*$(g))}if(r){for(;n.length>250;)delete m[n.shift()];m[r]||n.push(r);m[r]=c}}return c},show:function(a){return this.attr({visibility:a?
	    "inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=
	    a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Oa(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&o(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,
	    d=b;a.alignTo&&oa(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,k,j;if(a){i=p(a.width,3);k=(a.opacity||0.15)/i;j=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;K(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+j,fill:"none"});if(c)K(f,"height",t(K(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):
	    g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=
	    a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=C(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=y.createElementNS(Fa,"title"),this.element.appendChild(b));b.appendChild(y.createTextNode(String(p(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a===
	  "inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;q(a)&&(g.setAttribute(b,a),a=+a,this[b]===a&&(e=!1),this[b]=a);if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=K(e,"zIndex"),e!==g&&(C(f)>a||!q(a)&&q(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};O.prototype.yGetter=
	   O.prototype.xGetter;O.prototype.translateXSetter=O.prototype.translateYSetter=O.prototype.rotationSetter=O.prototype.verticalAlignSetter=O.prototype.scaleXSetter=O.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};O.prototype["stroke-widthSetter"]=O.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],O.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),
	   this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var Ca=function(){this.init.apply(this,arguments)};Ca.prototype={Element:O,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&K(g,"xmlns",Fa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ma||mb)&&y.getElementsByTagName("base").length?E.location.href.replace(/#.*?$/,
	   "").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 4.2.3"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Ma&&a.getBoundingClientRect)this.subPixelFix=b=function(){L(a,{left:0,top:0});h=a.getBoundingClientRect();L(a,{left:ua(h.left)-h.left+"px",top:ua(h.top)-h.top+"px"})},b(),
	   M(E,"resize",b)},getStyle:function(a){return this.style=u({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Sa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&V(E,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;
	  b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,k=K(b,"x"),j=a.styles,l=a.textWidth,m=j&&j.lineHeight,n=j&&j.textShadow,r=j&&j.textOverflow==="ellipsis",s=g.length,R=l&&!a.added&&this.box,v=function(a){return m?C(m):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:
	 j&&j.fontSize||c.style.fontSize||12,a).h},x=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};s--;)b.removeChild(g[s]);!f&&!n&&!r&&e.indexOf(" ")===-1?b.appendChild(y.createTextNode(x(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,R&&R.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===
	 ""&&e.pop(),o(e,function(e,f){var g,m=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");o(g,function(e){if(e!==""||g.length===1){var n={},s=y.createElementNS(Fa,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),K(s,"style",p));i.test(e)&&!d&&(K(s,"onclick",'location.href="'+e.match(i)[1]+'"'),L(s,{cursor:"pointer"}));e=x(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){s.appendChild(y.createTextNode(e));if(m)n.dx=0;else if(f&&k!==null)n.x=
	   k;K(s,n);b.appendChild(s);!m&&f&&(!ca&&d&&L(s,{display:"block"}),K(s,"dy",v(s)));if(l){for(var n=e.replace(/([^\^])-/g,"$1- ").split(" "),R=g.length>1||f||n.length>1&&j.whiteSpace!=="nowrap",o,w,q,t=[],u=v(s),A=1,z=a.rotation,B=e,D=B.length;(R||r)&&(n.length||t.length);)a.rotation=0,o=a.getBBox(!0),q=o.width,!ca&&c.forExport&&(q=c.measureSpanWidth(s.firstChild.data,a.styles)),o=q>l,w===void 0&&(w=o),r&&w?(D/=2,B===""||!o&&D<0.5?n=[]:(o&&(w=!0),B=e.substring(0,B.length+(o?-1:1)*ua(D)),n=[B+(l>3?"\u2026":
	   "")],s.removeChild(s.firstChild))):!o||n.length===1?(n=t,t=[],n.length&&(A++,s=y.createElementNS(Fa,"tspan"),K(s,{dy:u,x:k}),p&&K(s,"style",p),b.appendChild(s)),q>l&&(l=q)):(s.removeChild(s.firstChild),t.unshift(n.pop())),n.length&&s.appendChild(y.createTextNode(n.join(" ").replace(/- /g,"-")));w&&a.attr("title",a.textStr);a.rotation=z}m++}}})}),R&&R.removeChild(b),n&&a.applyTextShadow&&a.applyTextShadow(n))},getContrast:function(a){a=ia(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b,c,d,e,f,g,h,i){var k=this.label(a,b,c,i,null,null,null,null,"button"),j=0,l,m,n,r,s,p,a={x1:0,y1:0,x2:0,y2:1},e=D({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=D(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);r=f.style;delete f.style;g=D(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);s=g.style;delete g.style;h=D(e,{style:{color:"#CCC"}},
	   h);p=h.style;delete h.style;M(k.element,ya?"mouseover":"mouseenter",function(){j!==3&&k.attr(f).css(r)});M(k.element,ya?"mouseout":"mouseleave",function(){j!==3&&(l=[e,f,g][j],m=[n,r,s][j],k.attr(l).css(m))});k.setState=function(a){(k.state=j=a)?a===2?k.attr(g).css(s):a===3&&k.attr(h).css(p):k.attr(e).css(n)};return k.on("click",function(a){j!==3&&d.call(k,a)}).attr(e).css(u({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=A(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=A(a[2])+b%2/
	   2);return a},path:function(a){var b={fill:"none"};Ia(a)?b.d=a:Y(a)&&u(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=Y(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(Y(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=Y(a)?a.r:e,g=this.createElement("rect"),
	   a=Y(a)?a:a===z?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==z)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,b,c){K(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return q(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>
	 1&&u(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(A(b),A(c),d,e,f),k=/^url\((.*?)\)$/,j,l;if(i)h=this.path(i),u(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&u(h,f);else if(k.test(a))l=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(A((d-
	   b[0])/2),A((e-b[1])/2)))},j=a.match(k)[1],a=Nb[j]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(j).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):(h.attr({width:0,height:0}),Z("img",{onload:function(){this.width===0&&(L(this,{position:"absolute",top:"-999em"}),y.body.appendChild(this));l(h,Nb[j]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount)S[g.chartIndex].onload()},src:j})),this.imgCount++;return h},symbols:{circle:function(a,b,c,d){var e=
	   0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=U(f),k=$(f),j=U(g),g=$(g),
	   e=e.end-f<ra?0:1;return["M",a+c*i,b+c*k,"A",c,c,0,e,1,a+c*j,b+c*g,h?"M":"L",a+d*j,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*k,h?"":"Z"]},callout:function(a,b,c,d,e){var f=F(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,
	   a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+zb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=ha||!ca&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);
	  if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;!a&&b&&E.getComputedStyle&&(b=b.element||b,a=(c=E.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?C(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:A(a*
	   1.2);d=A(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*U(b*ga),4));return{x:-a/3*$(b*ga),y:d}},label:function(a,b,c,d,e,f,g,h,i){var k=this,j=k.g(i),l=k.text("",0,0,g).attr({zIndex:1}),m,n,r=0,s=3,p=0,v,x,w,t,ba=0,gb={},B,y,Bb,F,E;Bb=function(){var a,b;a=l.element.style;n=(v===void 0||x===void 0||j.styles.textAlign)&&q(l.textStr)&&l.getBBox();j.width=(v||n.width||0)+2*s+p;j.height=(x||n.height||0)+2*s;B=s+k.fontMetrics(a&&a.fontSize,l).b;if(y){if(!m)a=ba,b=(h?-B:0)+ba,j.box=
	   m=d?k.symbol(d,a,b,j.width,j.height,gb):k.rect(a,b,j.width,j.height,0,gb["stroke-width"]),m.isImg||m.attr("fill","none"),m.add(j);m.isImg||m.attr(u({width:A(j.width),height:A(j.height)},gb));gb=null}};F=function(){var a=j.styles,a=a&&a.textAlign,b=p+s,c;c=h?0:B;if(q(v)&&n&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(v-n.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==z&&l.attr("y",c);l.x=b;l.y=c};E=function(a,b){m?m.attr(a,b):gb[a]=b};j.onAdd=function(){l.add(j);j.attr({text:a||a===0?a:"",
	  x:b,y:c});m&&q(e)&&j.attr({anchorX:e,anchorY:f})};j.widthSetter=function(a){v=a};j.heightSetter=function(a){x=a};j.paddingSetter=function(a){if(q(a)&&a!==s)s=j.padding=a,F()};j.paddingLeftSetter=function(a){q(a)&&a!==p&&(p=a,F())};j.alignSetter=function(a){a={left:0,center:0.5,right:1}[a];a!==r&&(r=a,n&&j.attr({x:b}))};j.textSetter=function(a){a!==z&&l.textSetter(a);Bb();F()};j["stroke-widthSetter"]=function(a,b){a&&(y=!0);ba=a%2/2;E(b,a)};j.strokeSetter=j.fillSetter=j.rSetter=function(a,b){b==="fill"&&
	 a&&(y=!0);E(b,a)};j.anchorXSetter=function(a,b){e=a;E(b,A(a)-ba-w)};j.anchorYSetter=function(a,b){f=a;E(b,a-t)};j.xSetter=function(a){j.x=a;r&&(a-=r*((v||n.width)+2*s));w=A(a);j.attr("translateX",w)};j.ySetter=function(a){t=j.y=A(a);j.attr("translateY",t)};var C=j.css;return u(j,{css:function(a){if(a){var b={},a=D(a);o(j.textProps,function(c){a[c]!==z&&(b[c]=a[c],delete a[c])});l.css(b)}return C.call(j,a)},getBBox:function(){return{width:n.width+2*s,height:n.height+2*s,x:n.x-s,y:n.y-s}},shadow:function(a){m&&
	 m.shadow(a);return j},destroy:function(){V(j.element,"mouseenter");V(j.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());O.prototype.destroy.call(j);j=k=Bb=F=E=null}})}};cb=Ca;u(O.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=u(this.styles,a);L(this.element,a);return this},htmlGetBBox:function(){var a=this.element;
	  if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,k=this.styles;L(b,{marginLeft:c,marginTop:d});i&&o(i,function(a){L(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&o(b.childNodes,function(c){a.invertChild(c,
	   b)});if(b.tagName==="SPAN"){var i=this.rotation,j=C(this.textWidth),l=k&&k.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(m!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;q(i)&&this.setSpanRotation(i,h,k);if(b.offsetWidth>j&&/[ \-]/.test(b.textContent||b.innerText))L(b,{width:j+"px",display:"block",whiteSpace:l||"normal"}),this.hasTextWidth=!0;else if(this.hasTextWidth)L(b,{width:"",display:"",whiteSpace:l||"nowrap"}),this.hasTextWidth=!1;this.getSpanCorrection(this.hasTextWidth?
	   j:b.offsetWidth,k,h,i,g)}L(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(mb)k=b.offsetHeight;this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=ya?"-ms-transform":mb?"-webkit-transform":Ma?"MozTransform":Lb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ma?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";L(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});u(Ca.prototype,{html:function(a,b,c){var d=
	   this.createElement("span"),e=d.element,f=d.renderer,g=function(a,b){o(["opacity","visibility"],function(c){fb(a,c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:A(b),y:A(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,
	  fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;o(j.reverse(),function(a){var d,e=K(a.element,"class");e&&(e={className:e});b=a.div=a.div||Z(La,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;u(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=
	   b+"px";a[c]=b;a.doTransform=!0}});g(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var J;if(!ca&&!ha){J={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===La;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=Z(c);this.renderer=a},add:function(a){var b=
	   this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:O.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=U(a*ga),c=$(a*ga);L(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):
	   "none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?U(d*ga):1,g=d?$(d*ga):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),L(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ma(a[b]))c[b]=A(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+
	 5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,oa(c,b),c.push(b),b.destroyClip=function(){oa(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:lb?"inherit":"rect(auto)"});return b.css(a)},css:O.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Ta(a)},destroy:function(){this.destroyClip&&this.destroyClip();return O.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+
	 a]=function(){var a=E.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=C(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,k,j=f.path,l,m,n,r;j&&typeof j.value!=="string"&&(j="x");m=j;if(a){n=p(a.width,3);r=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(j.value,l+0.5));k=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',
	  m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=Z(g.prepVML(k),null,{left:C(i.left)+p(a.offsetX,1),top:C(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;k=['<stroke color="',a.color||"black",'" opacity="',r*e,'"/>'];Z(g.prepVML(k),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:Aa,setAttr:function(a,b){lb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b,c){(c.getElementsByTagName("stroke")[0]||Z(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},"fill-opacitySetter":function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c){Z(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:Aa,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-A($(a*ga)+1)+"px";c.top=A(U(a*ga))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ma(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&
	 (a="visible");this.shadows&&o(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,lb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};J["stroke-opacitySetter"]=J["fill-opacitySetter"];B.VMLElement=J=pa(O,J);J.prototype.ySetter=J.prototype.widthSetter=J.prototype.heightSetter=
	   J.prototype.xSetter;var Cb={Element:J,isIE8:za.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(La).css(u(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!y.namespaces.hcv){y.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{y.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){y.styleSheets[0].cssText+=
	   "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=Y(a);return u(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+A(a?e:d)+"px,"+
	 A(a?f:b)+"px,"+A(a?b:f)+"px,"+A(a?d:e)+"px)"};!a&&lb&&c==="DIV"&&u(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){o(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,k="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var j,l,m=a.linearGradient||a.radialGradient,n,r,s,p,v,x="",a=a.stops,w,q=[],ba=function(){h=['<fill colors="'+q.join(",")+'" opacity="',s,'" o:opacity2="',r,'" type="',i,'" ',
	  x,'focus="100%" method="any" />'];Z(e.prepVML(h),null,null,b)};n=a[0];w=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);w[0]<1&&a.push([1,w[1]]);o(a,function(a,b){g.test(a[1])?(f=ia(a[1]),j=f.get("rgb"),l=f.get("a")):(j=a[1],l=1);q.push(a[0]*100+"% "+j);b?(s=l,p=j):(r=l,v=j)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,x='angle="'+(90-W.atan((m-a)/(n-c))*180/ra)+'"',ba();else{var k=m.r,t=k*2,u=k*2,A=m.cx,B=m.cy,z=b.radialReference,y,k=function(){z&&(y=
	   d.getBBox(),A+=(z[0]-y.x)/y.width-0.5,B+=(z[1]-y.y)/y.height-0.5,t*=z[2]/y.width,u*=z[2]/y.height);x='src="'+N.global.VMLRadialGradientURL+'" size="'+t+","+u+'" origin="0.5,0.5" position="'+A+","+B+'" color2="'+v+'" ';ba()};d.added?k():d.onAdd=k;k=p}else k=j}else if(g.test(a)&&b.tagName!=="IMG")f=ia(a),d[c+"-opacitySetter"](f.get("a"),c,b),k=f.get("rgb");else{k=b.getElementsByTagName(c);if(k.length)k[0].opacity=1,k[0].type="solid";k=a}return k},prepVML:function(a){var b=this.isIE8,a=a.join("");b?
	   (a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:Ca.prototype.html,path:function(a){var b={coordsize:"10 10"};Ia(a)?b.d=a:Y(a)&&u(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(Y(a))c=a.r,b=a.y,a=a.x;d.isCircle=
	   !0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(La).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):Ca.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;L(a,{flip:"x",left:C(d.width)-(e?C(e.top):
	   1),top:C(d.height)-(e?C(e.left):1),rotation:-90});o(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=U(f),i=$(f),k=U(g),j=$(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*k,b+h*j];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*j,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,
	  b+d/2,"e"]},rect:function(a,b,c,d,e){return Ca.prototype.symbols[!q(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};B.VMLRenderer=J=function(){this.init.apply(this,arguments)};J.prototype=D(Ca.prototype,Cb);cb=J}Ca.prototype.measureSpanWidth=function(a,b){var c=y.createElement("span"),d;d=y.createTextNode(a);c.appendChild(d);L(c,b);this.box.appendChild(c);d=c.offsetWidth;Ta(c);return d};var Ob;if(ha)B.CanVGRenderer=J=function(){Fa="http://www.w3.org/1999/xhtml"},J.prototype.symbols={},Ob=function(){function a(){var a=
	   b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=y.getElementsByTagName("head")[0],f=y.createElement("script");f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),cb=J;Va.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],k=f===h[h.length-1],e=d?p(d[f],e[f],f):f,d=this.label,h=h.info,j;a.isDatetimeAxis&&h&&(j=b.dateTimeLabelFormats[h.higherRanks[f]||
	 h.unitName]);this.isFirst=i;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:k,dateTimeLabelFormat:j,value:a.isLog?fa(na(e)):e});q(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=q(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(D(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,
	   e=b.chart.spacing,f=p(b.labelLeft,F(b.pos,e[3])),e=p(b.labelRight,t(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],k=g.getBBox().width,j=b.slotWidth,l=1,m,n={};if(h)h<0&&c-i*k<f?m=A(c/U(h*ga)-f):h>0&&c+i*k>e&&(m=A((d-c)/U(h*ga)));else if(d=c+(1-i)*k,c-i*k<f?j=a.x+j*(1-i)-f:d>e&&(j=e-a.x+j*i,l=-1),j=F(b.slotWidth,j),j<b.slotWidth&&b.labelAlign==="center"&&(a.x+=l*(b.slotWidth-j-i*(b.slotWidth-F(k,j)))),k>j||b.autoRotation&&g.styles.width)m=j;if(m){n.width=
	   m;if(!b.options.labels.style.textOverflow)n.textOverflow="ellipsis";g.css(n)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,k=i.transA,j=i.reversed,l=i.staggerLines,m=i.tickRotCorr||
	   {x:0,y:0},n=e.y;q(n)||(n=i.side===2?m.y+8:n=U(c.rotation*ga)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*k*(j?-1:1):0);b=b+n-(f&&!d?f*k*(j?1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:A(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,k=this.pos,j=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":
	   "tick",r=e[m+"LineWidth"],s=e[m+"LineColor"],o=e[m+"LineDashStyle"],v=e[n+"Length"],m=p(e[n+"Width"],!h&&d.isXAxis?1:0),x=e[n+"Color"],w=e[n+"Position"],n=this.mark,q=j.step,ba=!0,t=d.tickmarkOffset,u=this.getPosition(g,k,t,b),A=u.x,u=u.y,B=g&&A===d.pos+d.len||!g&&u===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(r){k=d.getPlotLinePath(k+t,r*B,b,!0);if(l===z){l={stroke:s,"stroke-width":r};if(o)l.dashstyle=o;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=r?f.path(k).attr(l).add(d.gridGroup):null}if(!b&&
	   l&&k)l[this.isNew?"attr":"animate"]({d:k,opacity:c})}if(m&&v)w==="inside"&&(v=-v),d.opposite&&(v=-v),h=this.getMarkPath(A,u,v,m*B,g,f),n?n.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:x,"stroke-width":m,opacity:c}).add(d.axisGroup);if(i&&!isNaN(A))i.xy=u=this.getLabelPosition(A,u,i,g,j,t,a,q),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,1)?ba=!1:g&&!d.isRadial&&!j.step&&!j.rotation&&!b&&c!==0&&this.handleOverflow(u),q&&a%q&&(ba=!1),
	   ba&&!isNaN(u.y)?(u.opacity=c,i[this.isNew?"attr":"animate"](u),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Sa(this,this.axis)}};B.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};B.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,k=q(i)&&q(h),j=d.value,l=d.dashStyle,m=a.svgElem,n=[],r,s=d.color,o=p(d.zIndex,0),v=d.events,x={},w=b.chart.renderer;b.isLog&&(i=Da(i),h=Da(h),j=Da(j));if(g){if(n=
	     b.getPlotLinePath(j,g),x={stroke:s,"stroke-width":g},l)x.dashstyle=l}else if(k){n=b.getPlotBandPath(i,h,d);if(s)x.fill=s;if(d.borderWidth)x.stroke=d.borderColor,x["stroke-width"]=d.borderWidth}else return;x.zIndex=o;if(m)if(n)m.show(),m.animate({d:n});else{if(m.hide(),f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=m=w.path(n).attr(x).add(),v))for(r in d=function(b){m.on(b,function(c){v[b].apply(a,[c])})},v)d(r);e&&q(e.text)&&n&&n.length&&b.width>0&&b.height>0&&!n.flat?(e=D({align:c&&k&&"center",
	  x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},e),this.renderLabel(e,n,k,o)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||a.align,rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=Ra(d);f=Ra(b);e.align(a,!1,{x:c,y:f,width:Ea(d)-c,height:Ea(b)-f});e.show()},destroy:function(){oa(this.axis.plotLinesAndBands,
	   this);delete this.axis;Sa(this)}};var ka=B.Axis=function(){this.init.apply(this,arguments)};ka.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0,y:15},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,
	  minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return B.numberFormat(this.total,
	   -1)},style:D(aa.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=
	   b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=d.visible!==!1;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=q(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks=
	 {};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=p(d.crosshair,ta(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;sa(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&
	   c&&this.reversed===z)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)M(this,f,d[f]);if(this.isLog)this.val2lin=Da,this.lin2val=na},setOptions:function(a){this.options=D(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],D(N[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=
	   this.dateTimeLabelFormat,e=N.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ka(h,this);else if(c)g=b;else if(d)g=Qa(d,b);else if(f&&a>=1E3)for(;f--&&g===z;)c=Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=B.numberFormat(b/c,-1)+e[f]);g===z&&(g=P(b)>=1E4?B.numberFormat(b,-1):B.numberFormat(b,-1,z,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;
	  a.buildStacks&&a.buildStacks();o(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=F(p(a.dataMin,d[0]),Ra(d)),a.dataMax=t(p(a.dataMax,d[0]),Ea(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(q(c)&&q(f))a.dataMin=F(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,f),f);if(q(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,k=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,j=g.minPixelPadding,e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;if(!k)k=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=j,a=a/k+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*k+i+h*j+(ma(f)?k*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
	   (b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,k,j=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=F(t(b,a),c):m=!0;return a},e=p(e,this.translate(a,null,null,c)),a=c=A(e+i);i=k=A(j-e-i);isNaN(e)?m=!0:this.horiz?(i=h,k=j-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=l-this.right,i=k=n(i,h,h+this.height));return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",
	  c,k],b||1)},getLinearTickPositions:function(a,b,c){var d,e=fa(T(b/a)*a),f=fa(ua(c/a)*a),g=[];if(b===c&&ma(b))return[b];for(b=e;b<=f;){g.push(b);b=fa(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval===
	   "auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,k,j;if(this.isXAxis&&this.minRange===z&&!this.isLog)q(a.min)||q(a.max)?this.minRange=null:(o(this.series,function(a){i=a.xData;for(g=k=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-
	     i[g-1],f===z||h<f)f=h}),this.minRange=F(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){j=this.minRange;d=(j-c+b)/2;d=[b-d,p(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ea(d);c=[b+j,p(a.max,b+j)];if(e)c[2]=this.dataMax;c=Ra(c);c-b<j&&(d[0]=c-j,d[1]=p(a.min,c-j),b=Ea(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,k=b.transA,j=b.isXAxis;if(j||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(o(b.series,
	     function(a){var b=a.closestPointRange;!a.noSharedTooltip&&q(b)&&(e=q(e)?F(e,b):b)}),o(b.series,function(a){var c=i?1:j?p(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=t(d,c);b.single||(f=t(f,xa(a)?0:c/2),g=t(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=F(d,c),j)b.closestPointRange=e;if(a)b.oldTransA=k;b.translationSlope=b.transA=k=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=
	   k*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=d.maxPadding,k=d.minPadding,j=d.tickInterval,l=d.tickPixelInterval,m=b.categories,n=b.threshold,r=b.softThreshold,s,R,v,x;!f&&!m&&!h&&this.getTickAmount();v=p(b.userMin,d.min);x=p(b.userMax,d.max);h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==
	 b.linkedParent.options.type&&X(11,1)):(!r&&q(n)&&(b.dataMin>=n?(s=n,k=0):b.dataMax<=n&&(R=n,i=0)),b.min=p(v,s,b.dataMin),b.max=p(x,R,b.dataMax));if(e)!a&&F(b.min,p(b.dataMin,b.min))<=0&&X(10,1),b.min=fa(Da(b.min),15),b.max=fa(Da(b.max),15);if(b.range&&q(b.max))b.userMin=b.min=v=t(b.min,b.minFromRange()),b.userMax=x=b.max,b.range=null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!m&&!b.axisPointRange&&!b.usePercentage&&!h&&q(b.min)&&q(b.max)&&(c=b.max-b.min))!q(v)&&k&&(b.min-=c*k),!q(x)&&
	 i&&(b.max+=c*i);if(ma(d.floor))b.min=t(b.min,d.floor);if(ma(d.ceiling))b.max=F(b.max,d.ceiling);if(r&&q(b.dataMin))if(n=n||0,!q(v)&&b.min<n&&b.dataMin>=n)b.min=n;else if(!q(x)&&b.max>n&&b.dataMax<=n)b.max=n;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!j&&l===b.linkedParent.options.tickPixelInterval?j=b.linkedParent.tickInterval:p(j,this.tickAmount?(b.max-b.min)/t(this.tickAmount-1,1):void 0,m?1:(b.max-b.min)*l/t(b.len,l));g&&!a&&o(b.series,function(a){a.processData(b.min!==b.oldMin||
	   b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!j)b.tickInterval=t(b.pointRange,b.tickInterval);a=p(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!j&&b.tickInterval<a)b.tickInterval=a;if(!f&&!e&&!j)b.tickInterval=sb(b.tickInterval,null,rb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),
	   !!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
	     a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&q(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&
	 this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&q(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&o(this.chart[this.coll],function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=
	   !0:a[e]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=ua(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(fa(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=
	   b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(q(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=z}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;o(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||
	   this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=p(c,!0);o(f.series,function(a){delete a.kdTree});e=u(e,{min:a,max:b});H(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;
	  c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=F(c,p(e.min,c)),e=t(d,p(e.max,d));this.allowZoomOutside||(q(c)&&a<=f&&(a=f),q(d)&&b>=e&&(b=e));this.displayBtn=a!==z||b!==z;this.setExtremes(a,b,!1,z,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/
	   100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?fa(na(this.min)):this.min,max:a?fa(na(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?na(this.min):this.min,b=b?na(this.max):
	   this.max;a===null?a=b<0?b:c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},unsquish:function(){var a=this.ticks,b=this.options.labels,c=this.horiz,d=this.tickInterval,e=d,f=this.len/(((this.categories?1:0)+this.max-this.min)/d),g,h=b.rotation,i=this.chart.renderer.fontMetrics(b.style.fontSize,a[0]&&a[0].label),k,j=Number.MAX_VALUE,l,m=function(a){a/=f||1;a=a>1?ua(a):1;return a*
	   d};c?(l=!b.staggerLines&&!b.step&&(q(h)?[h]:f<p(b.autoRotationLimit,80)&&b.autoRotation))&&o(l,function(a){var b;if(a===h||a&&a>=-90&&a<=90)k=m(P(i.h/$(ga*a))),b=k+P(a/360),b<j&&(j=b,g=a,e=k)}):b.step||(e=m(i.h));this.autoRotation=l;this.labelRotation=p(g,h);return e},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=a.margin,h=this.categories?c.length:c.length-1,g=this.slotWidth=f&&(e.step||0)<2&&!e.rotation&&(this.staggerLines||
	   1)*a.plotWidth/h||!f&&(g[3]&&g[3]-a.spacing[3]||a.chartWidth*0.33),i=t(1,A(g-2*(e.padding||5))),k={},h=b.fontMetrics(e.style.fontSize,d[0]&&d[0].label),j=e.style.textOverflow,l,m=0,n,r;if(!xa(e.rotation))k.rotation=e.rotation||0;if(this.autoRotation)o(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),m>i&&m>h.h?k.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:i+"px"},!j)){l.textOverflow="clip";for(n=c.length;!f&&n--;)if(r=c[n],i=d[r].label)if(i.styles.textOverflow===
	   "ellipsis"&&i.css({textOverflow:"clip"}),i.getBBox().height>this.len/c.length-(h.h-h.f)||d[r].labelLength>g)i.specCss={textOverflow:"ellipsis"}}if(k.rotation&&(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!j))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))k.align=this.labelAlign;o(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(k),l&&b.css(D(l,b.specCss)),delete b.specCss,a.rotation=k.rotation});this.tickRotCorr=b.rotCorr(h.b,
	   this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,k,j,l=0,m,n=0,r=d.title,s=d.labels,R=0,v=a.opposite,x=b.axisOffset,b=b.clipOffset,w=[-1,1,1,-1][h],u,ba=a.axisParent;k=a.hasData();a.showAxis=j=k||p(d.showEmpty,!0);a.staggerLines=a.horiz&&s.staggerLines;if(!a.axisGroup)a.gridGroup=
	   c.g("grid").attr({zIndex:d.gridZIndex||1}).add(ba),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(ba),a.labelGroup=c.g("axis-labels").attr({zIndex:s.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add(ba);if(k||a.isLinked){if(o(e,function(b){f[b]?f[b].addLabel():f[b]=new Va(a,b)}),a.renderUnsquish(),s.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&o(e,function(a){R=t(f[a].getLabelSize(),R)}),a.staggerLines)R*=a.staggerLines,
	   a.labelOffset=R*(a.opposite?-1:1)}else for(u in f)f[u].destroy(),delete f[u];if(r&&r.text&&r.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(r.text,0,0,r.useHTML).attr({zIndex:7,rotation:r.rotation||0,align:r.textAlign||{low:v?"right":"left",middle:"center",high:v?"left":"right"}[r.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(r.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(j)l=a.axisTitle.getBBox()[g?"height":"width"],m=r.offset,n=q(m)?0:p(r.margin,g?5:10);a.axisTitle[j?
	   "show":"hide"](!0)}a.offset=w*p(d.offset,x[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===2?a.tickRotCorr.y:0;g=Math.abs(R)+n+(R&&w*(g?p(s.y,a.tickRotCorr.y+8):s.x)-c);a.axisTitleMargin=p(m,g);x[h]=t(x[h],a.axisTitleMargin+l+w*a.offset,g);d=d.offset?0:T(d.lineWidth/2)*2;b[i]=t(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:
	   f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,k=e.y||0,j=C(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?j:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+k-(g?this.height:0)+h:d+k}},render:function(){var a=this,
	   b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.ticks,k=a.minorTicks,j=a.alternateBands,l=d.stackLabels,m=d.alternateGridColor,n=a.tickmarkOffset,r=d.lineWidth,s,p=b.hasRendered&&q(a.oldMin)&&!isNaN(a.oldMin),v=a.showAxis,x=c.globalAnimation,w,t;a.labelEdge.length=0;a.overlap=!1;o([i,k,j],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||f){a.minorTickInterval&&!a.categories&&o(a.getMinorTickPositions(),function(b){k[b]||(k[b]=new Va(a,b,"minor"));
	  p&&k[b].isNew&&k[b].render(null,!0);k[b].render(null,!1,1)});if(g.length&&(o(g,function(b,c){if(!f||b>=a.min&&b<=a.max)i[b]||(i[b]=new Va(a,b)),p&&i[b].isNew&&i[b].render(c,!0,0.1),i[b].render(c)}),n&&(a.min===0||a.single)))i[-1]||(i[-1]=new Va(a,-1,null,!0)),i[-1].render(-1);m&&o(g,function(c,d){t=g[d+1]!==z?g[d+1]+n:a.max-n;if(d%2===0&&c<a.max&&t<=a.max+(b.polar?-n:n))j[c]||(j[c]=new B.PlotLineOrBand(a)),w=c+n,j[c].options={from:e?na(w):w,to:e?na(t):t,color:m},j[c].render(),j[c].isActive=!0});if(!a._addedPlotLB)o((d.plotLines||
	 []).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}o([i,k,j],function(a){var c,d,e=[],f=x?x.duration||500:0;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);Pa(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])},a===j||!b.hasRendered||!f?0:f)});if(r)s=a.getLinePath(r),a.axisLine?a.axisLine.animate({d:s}):a.axisLine=c.path(s).attr({stroke:d.lineColor,"stroke-width":r,zIndex:7}).add(a.axisGroup),a.axisLine[v?
	   "show":"hide"](!0);if(h&&v)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=!1;l&&l.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),o(this.plotLinesAndBands,function(a){a.render()}));o(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||V(b);for(d in c)Sa(c[d]),c[d]=null;o([b.ticks,b.minorTicks,b.alternateBands],function(a){Sa(a)});for(a=e.length;a--;)e[a].destroy();o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),
	   function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;if(!this.crosshair||(q(b)||!p(d.snap,!0))===!1)this.hideCrosshair();else if(p(d.snap,!0)?q(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(e=this.categories&&
	     !this.isRadial,f=p(d.width,e?this.transA:1),this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"stroke-width":f,stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:p(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};u(ka.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0);d&&c?
	   (d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new B.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===
	 a&&b[e].destroy();o([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&oa(b,b[e])})}});ka.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=N.global.useUTC,h,i=new qa(b-Ya(b)),k=a.unitRange,j=a.count;if(q(b)){i[Gb](k>=G.second?0:j*T(i.getMilliseconds()/j));if(k>=G.second)i[Hb](k>=G.minute?0:j*T(i.getSeconds()/j));if(k>=G.minute)i[Ib](k>=G.hour?0:j*T(i[tb]()/j));if(k>=G.hour)i[Jb](k>=G.day?0:j*T(i[ub]()/j));if(k>=G.day)i[wb](k>=G.month?
	   1:j*T(i[$a]()/j));k>=G.month&&(i[xb](k>=G.year?0:j*T(i[ab]()/j)),h=i[bb]());k>=G.year&&(h-=h%j,i[yb](h));if(k===G.week)i[wb](i[$a]()-i[vb]()+p(d,1));b=1;if(qb||Za)i=i.getTime(),i=new qa(i+Ya(i));h=i[bb]();for(var d=i.getTime(),l=i[ab](),m=i[$a](),n=!g||!!Za,r=(G.day+(g?Ya(i):i.getTimezoneOffset()*6E4))%G.day;d<c;)e.push(d),k===G.year?d=kb(h+b*j,0):k===G.month?d=kb(h,l+b*j):n&&(k===G.day||k===G.week)?d=kb(h,l,m+b*j*(k===G.day?1:7)):d+=k*j,b++;e.push(d);o(Na(e,function(a){return k<=G.hour&&a%G.day===
	   r}),function(a){f[a]="day"})}e.info=u(a,{higherRanks:f,totalRange:k*j});return e};ka.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=G[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=G[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+G[c[g+1][0]])/2)break;e===G.year&&a<5*e&&(f=[1,
	  2,5]);c=sb(a/e,f,d[0]==="year"?t(rb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ka.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=A(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=T(b),h,i,k,j,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)k=Da(na(f)*e[h]),k>b&&(!d||j<=c)&&j!==z&&g.push(j),j>c&&(l=!0),j=k}else if(b=na(b),c=na(c),a=e[d?
	     "minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=sb(a,null,rb(a)),g=Ba(this.getLinearTickPositions(a,b,c),Da),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g};var Pb=B.Tooltip=function(){this.init.apply(this,arguments)};Pb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=C(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=
	   !0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ha||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(P(a-f.x)>1||
	   P(b-f.y)>1),h=e.followPointer||e.len>1;u(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?z:g?(2*f.anchorX+c)/3:c,anchorY:h?z:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=p(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=Pa(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,
	   f=d.plotTop,g=d.plotLeft,h=0,i=0,k,j,a=ta(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===z&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(o(a,function(a){k=a.series.yAxis;j=a.series.xAxis;h+=a.plotX+(!e&&j?j.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&k?k.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ba(c,A)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,
	   f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],k=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],j=p(c.ttBelow,d.inverted&&!c.negative||!d.inverted&&c.negative),l=function(a,b,c,d,h,i){var k=c<d-e,l=d+e+c<b,m=d-e-c;d+=e;if(j&&l)f[a]=d;else if(!j&&k)f[a]=m;else if(k)f[a]=F(i-c,m-g<0?m:m-g);else if(l)f[a]=t(h,d+g+c>b?d:d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},n=function(a){var b=
	     i;i=k;k=b;h=a},r=function(){l.apply(0,i)!==!1?m.apply(0,k)===!1&&!h&&(n(!0),r()):h?f.x=f.y=0:(n(!0),r())};(d.inverted||this.len>1)&&n();r();return f},defaultFormatter:function(a){var b=this.points||ta(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},k,j=[];k=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;
	  clearTimeout(this.hideTimer);this.followPointer=ta(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&o(i,function(a){a.setState()}),o(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=j,this.len=j.length,a=a[0]):i=a.getLabelConfig();k=k.call(i,this);i=a.series;this.distance=p(i.tooltipOptions.distance,16);k===!1?this.hide():(this.isHidden&&(Oa(d),d.attr("opacity",
	    1).show()),d.attr({text:k}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);H(c,"tooltipRefresh",{text:k,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(A(c.x),A(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,
	   b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=Qa("%m-%d %H:%M:%S.%L",a.x);for(f in G){if(e===G.week&&+Qa("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}if(G[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,
	   f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&ma(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ka(c,{point:a,series:d})},bodyFormatter:function(a){return Ba(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var ea;db=y&&y.documentElement.ontouchstart!==z;var Xa=B.Pointer=function(a,b){this.init(a,b)};Xa.prototype={init:function(a,b){var c=
	   b.chart,d=c.events,e=ha?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(B.Tooltip&&b.tooltip.enabled)a.tooltip=new Pb(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||E.event;if(!a.target)a.target=a.srcElement;d=a.touches?
	   a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Ab(this.chart.container);d.pageX===z?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return u(a,{chartX:A(c),chartY:A(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};o(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,
	   g=b.hoverSeries,h=[Number.MAX_VALUE,Number.MAX_VALUE],i,k,j=[],l=[],m;if(!e&&!g)for(b=0;b<c.length;b++)if(c[b].directTouch||!c[b].options.stickyTracking)c=[];g&&(e?g.noSharedTooltip:g.directTouch)&&f?l=[f]:(o(c,function(b){i=b.noSharedTooltip&&e;k=!e&&b.directTouch;b.visible&&!i&&!k&&p(b.options.enableMouseTracking,!0)&&(m=b.searchPoint(a,!i&&b.kdDimensions===1))&&j.push(m)}),o(j,function(a){a&&o(["dist","distX"],function(b,c){typeof a[b]==="number"&&a[b]<h[c]&&(h[c]=a[b],l[c]=a)})}));if(e)for(b=
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        j.length;b--;)(j[b].clientX!==l[1].clientX||j[b].series.noSharedTooltip)&&j.splice(b,1);if(l[0]&&(l[0]!==this.prevKDPoint||d&&d.isHidden))if(e&&!l[0].series.noSharedTooltip)j.length&&d&&d.refresh(j,a),o(j,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||l[0]))}),this.prevKDPoint=l[1];else{d&&d.refresh(l[0],a);if(!g||!g.directTouch)l[0].onMouseOver(a);this.prevKDPoint=l[0]}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));
	  if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(S[ea])S[ea].pointer.onDocumentMouseMove(a)},M(y,"mousemove",this._onDocumentMouseMove);o(e?j:[p(l[1],f)],function(b){var c=b&&b.series;c&&o(["xAxis","yAxis","colorAxis"],function(d){c[d]&&c[d].drawCrosshair(a,b)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;(a=a&&g&&h)&&o(ta(h),function(b){b.plotX===void 0&&(a=!1)});if(a)g.refresh(h),e&&(e.setState(e.state,
	   !0),o(c.axes,function(a){p(a.options.crosshair&&a.options.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()}));else{if(e)e.onMouseOut();f&&o(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)V(y,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;o(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;o(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&
	 e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,k=b.plotWidth,j=b.plotHeight,
	   l,m=this.selectionMarker,n=this.mouseDownX,r=this.mouseDownY,s=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+k&&(d=h+k),e<i?e=i:e>i+j&&(e=i+j),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(r-e,2)),this.hasDragged>10){l=b.isInsidePlot(n-h,r-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!s&&!m)this.selectionMarker=m=b.renderer.rect(h,i,f?1:k,g?1:j,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=n,m.attr({width:P(d),x:(d>0?0:d)+n}));
	  m&&g&&(d=e-r,m.attr({height:P(d),y:(d>0?0:d)+r}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,k=f.attr?f.attr("height"):f.height,j;if(this.hasDragged||d)o(c.axes,function(c){if(c.zoomEnabled&&q(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type===
	 "touchend"?c.minPixelPadding:0,r=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+k)-n);e[c.coll].push({axis:c,min:F(r,f),max:t(r,f)});j=!0}}),j&&H(c,"selection",e,function(a){c.zoom(u(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)L(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();
	  this.dragStart(a)},onDocumentMouseUp:function(a){S[ea]&&S[ea].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=S[ea];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),b.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;if(!q(ea)||!S[ea]||!S[ea].mouseIsDown)ea=
	   b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=K(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&
	   !this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(H(c.series,"click",u(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(u(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&H(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=
	   function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};M(b,"mouseleave",a.onContainerMouseLeave);eb===1&&M(y,"mouseup",a.onDocumentMouseUp);if(db)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},eb===1&&M(y,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;V(this.chart.container,"mouseleave",this.onContainerMouseLeave);eb||(V(y,"mouseup",this.onDocumentMouseUp),
	   V(y,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};u(B.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,k=a?"x":"y",j=a?"X":"Y",l="chart"+j,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],r,s,p=h||1,o=i.inverted,x=i.bounds[a?
	   "h":"v"],w=b.length===1,q=b[0][l],t=c[0][l],u=!w&&b[1][l],A=!w&&c[1][l],B,c=function(){!w&&P(q-u)>20&&(p=h||P(t-A)/P(q-u));s=(n-t)/p+q;r=i["plot"+(a?"Width":"Height")]/p};c();b=s;b<x.min?(b=x.min,B=!0):b+r>x.max&&(b=x.max-r,B=!0);B?(t-=0.8*(t-g[k][0]),w||(A-=0.8*(A-g[k][1])),c()):g[k]=[t,A];o||(f[k]=s-n,f[m]=r);f=o?1/p:p;e[m]=r;e[k]=b;d[o?a?"scaleY":"scaleX":"scale"+j]=p;d["translate"+j]=f*n+(t-f*q)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=
	   b.hasZoom,i=b.selectionMarker,k={},j=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!j&&a.preventDefault();Ba(e,function(a){return b.normalize(a)});if(a.type==="touchstart")o(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&d[1].chartY],o(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,
	   a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=F(e,f),e=t(e,f);b.min=F(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=u({destroy:Aa,touch:!0},c.plotBox);b.pinchTranslate(d,e,k,i,l,g);b.hasPinched=h;b.scaleGroups(k,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},touch:function(a,b){var c=this.chart;ea=c.index;a.touches.length===1?(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,
	   a.chartY-c.plotTop)&&!c.openMenu?(b&&this.runPointActions(a),this.pinch(a)):b&&this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(a){S[ea]&&S[ea].pointer.drop(a)}});if(E.PointerEvent||E.MSPointerEvent){var va={},Db=!!E.PointerEvent,Sb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in va)va.hasOwnProperty(a)&&b.push({pageX:va[a].pageX,pageY:va[a].pageY,target:va[a].target});
	  return b},Eb=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&S[ea])d(a),d=S[ea].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:Aa,touches:Sb()})};u(Xa.prototype,{onContainerPointerDown:function(a){Eb(a,"onContainerTouchStart","touchstart",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Eb(a,"onContainerTouchMove","touchmove",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY};
	  if(!va[a.pointerId].target)va[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Eb(a,"onDocumentTouchEnd","touchend",function(a){delete va[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Db?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Db?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(y,Db?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});fb(Xa.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&
	 L(b.container,{"-ms-touch-action":"none","touch-action":"none"})});fb(Xa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(M)});fb(Xa.prototype,"destroy",function(a){this.batchMSEvents(V);a.call(this)})}var ob=B.Legend=function(a,b){this.init(a,b)};ob.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=D(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=p(b.padding,
	   8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),M(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},k;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(k in i.stroke=
	   h,g=a.convertAttribs(g),g)d=g[k],d!==z&&(i[k]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;o(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Ta(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();
	  if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,o(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,L(g,{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,
	   null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?Ka(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,k=this.padding,j=e?p(d.itemDistance,
	   20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,r=this.itemMarginTop,s=this.initialItemX,o=a.legendItem,v=a.series&&a.series.drawLegendSymbol?a.series:a,x=v.options,x=this.createCheckboxForItem&&x&&x.showCheckbox,w=d.useHTML;if(!o){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=o=c.text("",l?f+g:-g,this.baseline||0,w).css(D(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,o),
	   this.baseline=this.fontMetrics.f+3+r,o.attr("y",this.baseline);v.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,o,w,h,i);x&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=o.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+j+(x?20:0);this.itemHeight=g=A(a.legendItemHeight||c.height);if(e&&this.itemX-s+f>(m||b.chartWidth-2*k-s-d.x))this.itemX=s,this.itemY+=r+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,
	   f);this.lastItemY=r+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=r+g+n,this.lastLineHeight=g);this.offsetWidth=m||t((e?this.itemX-s-j:f)+k,this.offsetWidth)},getAllItems:function(){var a=[];o(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,!q(c.linkedTo)?z:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+
	   d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&o([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!q(a[g])&&(c[nb[g]]=t(c[nb[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+p(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,k=a.options,j=a.padding,l=k.borderWidth,m=k.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=
	   0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();ib(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});k.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;o(e,function(b){a.renderItem(b)});g=(k.width||a.offsetWidth)+j;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=j;if(l||m){if(i){if(g>
	   0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,k.borderRadius,l||0).attr({stroke:k.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(k.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;o(e,function(b){a.positionItem(b)});f&&d.align(u({width:g,height:h},k),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+
	   (e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,k=e.navigation,j=p(k.animation,!0),l=k.arrowSize||12,m=this.nav,n=this.pages,r=this.padding,s,R=this.allItems,v=function(a){i.attr({height:a});if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+r+"px,9999px,"+(r+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=F(f,g));n.length=0;if(a>f){this.clipHeight=h=t(f-20-this.titleHeight-r,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;o(R,function(a,b){var c=
	   a._legendItemPos[1],d=A(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(s||c)!==n[e-1])n.push(s||c),e++;b===R.length-1&&c+d-n[e-1]>h&&n.push(c);c!==s&&(s=c)});if(!i)i=b.clipRect=d.clipRect(0,r,9999,0),b.contentGroup.clip(i);v(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,j)}).add(m),this.pager=d.text("",15,10).css(k.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,
	   j)}).add(m);b.scroll(0);a=f}else if(m)v(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,k=this.padding;e>d&&(e=d);if(e>0)b!==z&&Ua(b,this.chart),this.nav.attr({translateX:k,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":
	   "pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};J=B.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=
	   this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-A(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(za)||Ma)&&fb(ob.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,
	   b)};d();setTimeout(d)});var hb=B.Chart=function(){this.getArgs.apply(this,arguments)};B.chart=function(a,b,c){return new hb(a,b,c)};hb.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(xa(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=D(N,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds=
	 {h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=S.length;S.push(f);eb++;d.reflow!==!1&&M(f,"load",function(){f.initReflow()});if(e)for(g in e)M(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ha?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=I[a.type||b.type||b.defaultSeriesType])||X(17,!0);b=new b;b.init(this,a);return b},
	  isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,k=this.isDirtyBox,j=c.length,l=j,m=this.renderer,n=m.isHidden(),r=[];Ua(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=j;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;o(c,function(a){a.isDirty&&
	  a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,o(b,function(a){a.setScale()});this.getMargins();i&&(o(b,function(a){a.isDirty&&(k=!0)}),o(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,r.push(function(){H(a,"afterSetExtremes",u(a.eventArgs,a.getExtremes()));delete a.eventArgs});(k||g)&&a.redraw()}));k&&this.drawChartBox();o(c,function(a){a.isDirty&&
	  a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();H(this,"redraw");n&&this.cloneRenderTo(!0);o(r,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ta(b.xAxis||{}),b=b.yAxis=ta(b.yAxis||
	    {});o(c,function(a,b){a.index=b;a.isX=!0});o(b,function(a,b){a.index=b});c=c.concat(b);o(c,function(b){new ka(a,b)})},getSelectedPoints:function(){var a=[];o(this.series,function(b){a=a.concat(Na(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Na(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=D(e.title,a);g=e.subtitle=D(e.subtitle,b),e=g;o([["title",a,f],["subtitle",b,e]],function(a){var b=
	    a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(u({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=
	    c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(u({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=ua(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!q(b))this.containerWidth=ja(c,"width");if(!q(a))this.containerHeight=
	    ja(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Ta(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),L(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block",
	    "important"),y.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;var f="highcharts-"+zb++;if(!a)this.renderTo=a=c.renderTo;if(xa(a))this.renderTo=a=y.getElementById(a);a||X(13,!0);d=C(K(a,"data-highcharts-chart"));!isNaN(d)&&S[d]&&S[d].hasRendered&&S[d].destroy();K(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=
	    a=Z(La,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},u({position:"relative",overflow:"hidden",width:d+"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (B[c.renderer]||cb)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);ha&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=
	    this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!q(c[0]))this.plotTop=t(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&o(a.axes,function(a){a.visible&&a.getOffset()});o(nb,function(d,e){q(c[e])||(a[d]+=
	    b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||ja(d,"width"),f=c.height||ja(d,"height"),c=a?a.target:E;if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===E||c===y)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Pa(function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null},a?100:0);b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};M(E,"resize",b);M(a,"destroy",
	    function(){V(E,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g=d.renderer;d.isResizing+=1;Ua(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(q(a))d.chartWidth=e=t(0,A(a)),d.hasUserSize=!!e;if(q(b))d.chartHeight=f=t(0,A(b));a=g.globalAnimation;(a?Wa:L)(d.container,{width:e+"px",height:f+"px"},a);d.setChartSize(!0);g.setSize(e,f,c);d.maxTicks=null;o(d.axes,function(a){a.isDirty=!0;a.setScale()});o(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();
	   d.getMargins();d.redraw(c);d.oldChartHeight=null;H(d,"resize");a=g.globalAnimation;Pa(function(){d&&H(d,"endResize",null,function(){d.isResizing-=1})},a===!1?0:a&&a.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,k,j,l;this.plotLeft=i=A(this.plotLeft);this.plotTop=k=A(this.plotTop);this.plotWidth=j=t(0,A(d-i-this.marginRight));this.plotHeight=l=t(0,A(e-k-this.marginBottom));this.plotSizeX=
	    b?l:j;this.plotSizeY=b?j:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:k,width:j,height:l};d=2*T(this.plotBorderWidth/2);b=ua(t(d,h[3])/2);c=ua(t(d,h[0])/2);this.clipBox={x:b,y:c,width:T(this.plotSizeX-t(d,h[1])/2-b),height:t(0,T(this.plotSizeY-t(d,h[2])/2-c))};a||o(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;o(nb,function(b,c){a[b]=p(a.margin[c],
	    a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,k=a.backgroundColor,j=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,r=this.plotLeft,p=this.plotTop,o=this.plotWidth,v=this.plotHeight,x=this.plotBox,w=this.clipRect,t=this.clipBox;n=i+(a.shadow?8:0);if(i||k)if(e)e.animate(e.crisp({width:c-
	  n,height:d-n}));else{e={fill:k||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(j)f?f.animate(x):this.plotBackground=b.rect(r,p,o,v,0).attr({fill:j}).add().shadow(a.plotShadow);if(l)h?h.animate(x):this.plotBGImage=b.image(l,r,p,o,v).add();w?w.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:r,y:p,
	   width:o,height:v}))):this.plotBorder=b.rect(r,p,o,v,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;o(["inverted","angular","polar"],function(g){c=I[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=I[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;o(b,function(a){a.linkedSeries.length=
	    0});o(b,function(b){var d=b.options.linkedTo;if(xa(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d,b.visible=p(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){o(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&o(b.items,function(c){var d=u(b.style,c.style),e=C(d.left)+a.plotLeft,f=C(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},
	  render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new ob(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=21;o(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,o(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&o(a,function(a){a.visible&&
	  a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)E.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;H(a,
	    "destroy");S[a.index]=z;eb--;a.renderTo.removeAttribute("data-highcharts-chart");V(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",V(d),f&&Ta(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;
	   return!ca&&E==E.top&&y.readyState!=="complete"||ha&&!E.canvg?(ha?Ob.push(function(){a.firstRender()},a.options.global.canvasToolsURL):y.attachEvent("onreadystatechange",function(){y.detachEvent("onreadystatechange",a.firstRender);y.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();H(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();o(b.series||[],function(b){a.initSeries(b)});a.linkSeries();
	   H(a,"beforeRender");if(B.Pointer)a.pointer=new Xa(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount)a.onload();a.cloneRenderTo(!0)}},onload:function(){var a=this;o([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});a.renderer.imgCount||H(a,"load")},splashArray:function(a,b){var c=b[a],c=Y(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};var Cb=B.CenteredSeriesMixin={getCenter:function(){var a=this.options,
	   b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[p(e[0],"50%"),p(e[1],"50%"),a.size||"100%",a.innerSize||0],f=F(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ha=function(){};Ha.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,
	     this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ha.prototype.optionsToObject.call(this,a);u(this,a);this.options=this.options?u(this.options,a):a;if(d)this.y=this[d];this.isNull=this.y===null;if(typeof this.x!=="number"&&c)this.x=b===void 0?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,
	   e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(typeof a==="number"||a===null)b[e[0]]=a;else if(Ia(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),oa(b,this),!b.length))a.hoverPoints=
	   null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)V(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,
	  total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";o(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ka(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&
	 e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});H(this,a,b,c)},visible:!0};var Q=B.Series=function(){};Q.prototype={isCartesian:!0,type:"line",pointClass:Ha,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-
	   p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();u(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ha)b.animation=!1;e=b.events;for(d in e)M(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();o(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-
	   1;ib(f,g);this.yAxis&&ib(this.yAxis.series,g);o(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;o(a.axisTypes||[],function(e){o(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==z&&b[e]===d.id||b[e]===z&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&X(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;o(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?
	   c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=p(b,a.pointStart,0);this.pointInterval=c=p(this.pointInterval,a.pointInterval,1);if(d==="month"||d==="year")a=new qa(b),a=d==="month"?+a[xb](a[ab]()+c):+a[yb](a[bb]()+c),c=a-b;this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=
	   b.plotOptions||{},e=c[this.type];this.userOptions=a;c=D(e,c.series,a);this.tooltipOptions=D(N.tooltip,N.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&q(a[a.length-1].value)&&
	 a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(q(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||aa[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=
	   0},drawLegendSymbol:J.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,k=e.chart,j=null,l=e.xAxis,m=l&&!!l.categories,n=i.turboThreshold,r=this.xData,s=this.yData,t=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)o(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;o(this.parallelArrays,function(a){e[a+"Data"].length=0});
	  if(n&&h>n){for(c=0;j===null&&c<h;)j=a[c],c++;if(ma(j)){m=p(i.pointStart,0);j=p(i.pointInterval,1);for(c=0;c<h;c++)r[c]=m,s[c]=a[c],m+=j;e.xIncrement=m}else if(Ia(j))if(t)for(c=0;c<h;c++)j=a[c],r[c]=j[0],s[c]=j.slice(1,t+1);else for(c=0;c<h;c++)j=a[c],r[c]=j[0],s[c]=j[1];else X(12)}else for(c=0;c<h;c++)if(a[c]!==z&&(j={series:e},e.pointClass.prototype.applyOptions.apply(j,[a[c]]),e.updateParallelArrays(j,c),m&&q(j.name)))l.names[j.x]=j.name;xa(s[0])&&X(14,!0);e.data=[];e.options.data=e.userOptions.data=
	    a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=k.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&k.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,k=this.options;i=k.cropThreshold;var j=this.getExtremesFromAll||k.getExtremesFromAll,l=this.isCartesian,k=h&&h.val2lin,m=h&&h.isLog,n,p;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;
	  if(h)a=h.getExtremes(),n=a.min,p=a.max;if(l&&this.sorted&&!j&&(!i||d>i||this.forceCrop))if(b[d-1]<n||b[0]>p)b=[],c=[];else if(b[0]<n||b[d-1]>p)e=this.cropData(this.xData,this.yData,n,p),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?k(b[i])-k(b[i-1]):b[i]-b[i-1],d>0&&(g===z||d<g)?g=d:d<0&&this.requireSorting&&X(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,
	   1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,k=this.hasGroupedData,j,l=[],m;if(!b&&!k)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=h+m,k?l[m]=(new f).init(this,[d[m]].concat(ta(e[m]))):(b[i]?j=b[i]:a[i]!==z&&(b[i]=j=(new f).init(this,
	   a[i],d[m])),l[m]=j),l[m].index=i;if(b&&(g!==(c=b.length)||k))for(m=0;m<c;m++)if(m===h&&!k&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=z;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,k,j,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(k=c[l],j=a[l],i=j!==null&&j!==z&&(!b.isLog||j.length||j>0),k=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||
	     (c[l+1]||k)>=g&&(c[l-1]||k)<=h,i&&k)if(i=j.length)for(;i--;)j[i]!==null&&(e[f++]=j[i]);else e[f++]=j;this.dataMin=Ra(e);this.dataMax=Ea(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,k=i==="between"||ma(i),j=a.threshold,l=a.startFromThreshold?j:0,m,n,r,o,R=Number.MAX_VALUE,a=0;a<g;a++){var v=f[a],x=v.x,w=v.y;n=v.low;var u=
	   b&&e.stacks[(this.negStacks&&w<(l?0:j)?"-":"")+this.stackKey];if(e.isLog&&w!==null&&w<=0)v.y=w=null,X(10);v.plotX=m=F(t(-1E5,c.translate(x,0,0,0,1,i,this.type==="flags")),1E5);if(b&&this.visible&&!v.isNull&&u&&u[x])o=this.getStackIndicator(o,x,this.index),u=u[x],w=u.points[o.key],n=w[0],w=w[1],n===l&&(n=p(j,e.min)),e.isLog&&n<=0&&(n=null),v.total=v.stackTotal=u.total,v.percentage=u.total&&v.y/u.total*100,v.stackY=w,u.setOffset(this.pointXOffset||0,this.barW||0);v.yBottom=q(n)?e.translate(n,0,1,0,
	   1):null;h&&(w=this.modifyValue(w,v));v.plotY=n=typeof w==="number"&&w!==Infinity?F(t(-1E5,e.translate(w,0,1,0,1)),1E5):z;v.isInside=n!==z&&n>=0&&n<=e.len&&m>=0&&m<=c.len;v.clientX=k?c.translate(x,0,0,0,1):m;v.negative=v.y<(j||0);v.category=d&&d[v.x]!==z?d[v.x]:v.x;a&&(R=F(R,P(m-r)));r=m}this.closestPointRangePx=R},getValidPoints:function(a){return Na(a||this.points,function(a){return!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,g=f||b.clipBox,
	   h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],k=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=k=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g)}a&&(i.count+=1);if(c.clip!==!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(k),this.sharedClipKey=h;a||(i.count-=1,i.count<=0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,
	   d;if(c&&!Y(c))c=aa[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();H(this,"afterAnimate")},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,k,j,l=this.options.marker,m=this.pointAttr[""],n,r,o,t=this.markerGroup,v=p(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b.length;f--;)if(g=b[f],d=T(g.plotX),e=g.plotY,j=g.graphic,n=g.marker||{},r=!!g.marker,a=v&&n.enabled===z||n.enabled,o=g.isInside,a&&e!==z&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=p(n.symbol,this.symbol),k=i.indexOf("url")===0,j)j[o?"show":"hide"](!0).attr(a).animate(u({x:d-h,y:e-h},j.symbolName?{width:2*h,height:2*h}:{}));else{if(o&&(h>0||k))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,r?n:l).attr(a).add(t)}else if(j)g.graphic=j.destroy()},convertAttribs:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=aa[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor;f={stroke:g,fill:g};var i=a.points||[],k,j,l=[],m=a.pointAttrToOptions;k=a.hasPointSpecificOptions;var n=c.lineColor,r=c.fillColor;j=b.turboThreshold;var s=a.zones,t=a.zoneAxis||"y",v;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,
	   e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||ia(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||ia(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,f);o(["hover","select"],function(b){l[b]=a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=i.length;if(!j||g<j||k)for(;g--;){j=i[g];if((c=j.options&&j.options.marker||j.options)&&c.enabled===!1)c.radius=0;if(s.length){k=0;for(f=s[k];j[t]>=f.value;)f=s[++k];j.color=j.fillColor=
	   p(f.color,a.color)}k=b.colorByPoint||j.color;if(j.options)for(v in m)q(c[m[v]])&&(k=!0);if(k){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||j.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!j.options.color&&e[j.negative&&h?"negativeColor":"color"]||ia(j.color).brighten(f.brightness||e.brightness).get();f={color:j.color};if(!r)f.fillColor=j.color;if(!n)f.lineColor=j.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;k[""]=a.convertAttribs(u(f,c),
	   l[""]);k.hover=a.convertAttribs(d.hover,l.hover,k[""]);k.select=a.convertAttribs(d.select,l.select,k[""])}else k=l;j.pointAttr=k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(za),d,e=a.data||[],f,g,h;H(a,"destroy");V(a);o(a.axisTypes||[],function(b){if(h=a[b])oa(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof O&&!a[g].survive&&
	 (d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;oa(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i,a=a||d.points;(g=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));o(a,function(g,j){var l=g.plotX,m=g.plotY,n=a[j-1];if((g.leftCliff||n&&n.rightCliff)&&!c)i=!0;g.isNull&&!q(b)&&j>0?i=!e.connectNulls:g.isNull&&!b?i=!0:(j===0||i?n=["M",g.plotX,
	  g.plotY]:d.getPointSpline?n=d.getPointSpline(a,g,j):f?(n=f===1?["L",n.plotX,m]:f===2?["L",(n.plotX+l)/2,n.plotY,"L",(n.plotX+l)/2,m]:["L",l,n.plotY],n.push("L",l,m)):n=["L",l,m],h.push.apply(h,n),i=!1)});return d.graphPath=h},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this),g=this.fillGraph&&this.color||"none";o(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||
	 a.color,d.dashStyle||b.dashStyle])});o(c,function(c,i){var k=c[0],j=a[k];if(j)j.animate({d:f});else if((d||g)&&f.length)j={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?j.dashstyle=c[2]:e&&(j["stroke-linecap"]=j["stroke-linejoin"]="round"),a[k]=a.chart.renderer.path(f).attr(j).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,k=this.area,j=t(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+
	 "Axis"],m,n=l.reversed,r=b.inverted,s=l.horiz,q,v,x,w=!1;if(d.length&&(i||k)&&l.min!==z)i&&i.hide(),k&&k.hide(),m=l.getExtremes(),o(d,function(d,o){e=n?s?b.plotWidth:0:s?0:l.toPixels(m.min);e=F(t(p(f,e),0),j);f=F(t(A(l.toPixels(p(d.value,m.max),!0)),0),j);w&&(e=f=l.toPixels(m.max));q=Math.abs(e-f);v=F(e,f);x=t(e,f);if(l.isXAxis){if(h={x:r?x:v,y:0,width:q,height:j},!s)h.x=b.plotHeight-h.x}else if(h={x:0,y:r?x:v,width:j,height:q},s)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?v:x,
	  height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[o]?g[o].animate(h):(g[o]=c.clipRect(h),i&&a["zoneGraph"+o].clip(g[o]),k&&a["zoneArea"+o].clip(g[o]));w=d.value>m.max}),this.clips=g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};o(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)M(c,"resize",a),M(b,"destroy",function(){V(c,"resize",a)}),a(),b.invertGroups=
	   a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&
	   b.renderer.isSVG&&p(c.duration,500)||0,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());o(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&
	 a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=Pa(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.isDirty,d=this.group,e=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:p(e&&e.left,a.plotLeft),translateY:p(f&&f.top,a.plotTop)}));this.translate();this.render();b&&H(this,"updatedData");
	  (c||b)&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,e,f){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,
	   c=b.kdDimensions;delete b.kdTree;Pa(function(){b.kdTree=a(b.getValidPoints(),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,j){var l=b.point,m=d.kdAxisArray[k%j],n,p,o=l;p=q(a[e])&&q(l[e])?Math.pow(a[e]-l[e],2):null;n=q(a[f])&&q(l[f])?Math.pow(a[f]-l[f],2):null;n=(p||0)+(n||0);l.dist=q(n)?Math.sqrt(n):Number.MAX_VALUE;l.distX=q(p)?Math.sqrt(p):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";p=m<0?"right":"left";b[n]&&(n=c(a,b[n],k+1,j),o=n[g]<o[g]?n:l);b[p]&&Math.sqrt(m*
	   m)<o[g]&&(a=c(a,b[p],k+1,j),o=a[g]<o[g]?a:o);return o}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Kb.prototype={destroy:function(){Sa(this,this.axis)},render:function(a){var b=this.options,c=b.format,c=c?Ka(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,
	  rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=P(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};hb.prototype.getStacks=
	   function(){var a=this;o(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});o(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+p(b.options.stack,"")})};ka.prototype.buildStacks=function(){var a=this.series,b,c=p(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();
	  if(this.usePercentage)for(e=0;e<d;e++)a[e].setPercentStacks()}};ka.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};ka.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),
	   delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};ka.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};Q.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,
	   k="-"+i,j=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,o,s,q,v,x,w,u;l.stacksTouched+=1;for(x=0;x<d;x++){w=a[x];u=b[x];o=this.getStackIndicator(o,w,this.index);v=o.key;q=(s=j&&u<(g?0:f))?k:i;m[q]||(m[q]={});if(!m[q][w])n[q]&&n[q][w]?(m[q][w]=n[q][w],m[q][w].total=null):m[q][w]=new Kb(l,l.options.stackLabels,s,w,h);q=m[q][w];if(u!==null)q.points[v]=q.points[this.index]=[p(q.cum,g)],q.touched=l.stacksTouched,o.index>0&&this.singleStacks===!1&&(q.points[v][0]=q.points[this.index+","+w+",0"][0]);
	  e==="percent"?(s=s?i:k,j&&m[s]&&m[s][w]?(s=m[s][w],q.total=s.total=t(s.total,q.total)+P(u)||0):q.total=fa(q.total+(P(u)||0))):q.total=fa(q.total+(u||0));q.cum=p(q.cum,g)+(u||0);u!==null&&q.points[v].push(q.cum);c[x]=q.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks={}}};Q.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;o([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=
	     (i=c[b]&&c[b][h])&&i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=fa(h[0]*i),h[1]=fa(h[1]*i),a.stackedYData[g]=h[1]})};Q.prototype.getStackIndicator=function(a,b,c){!q(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};u(hb.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),H(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;
	  new ka(this,D(a,{index:this[e].length,isX:b}));f[e]=ta(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&L(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=Z(La,{className:"highcharts-loading"},u(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=Z("span",null,e.labelStyle,d),M(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;
	  if(!b.loadingShown)L(d,{opacity:0,display:""}),Wa(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&Wa(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){L(b,{display:"none"})}});this.loadingShown=!1}});u(Ha.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(Y(a)&&!Ia(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=
	   h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;j.data[i]=Y(j.data[i])?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)k.isDirtyBox=!0;if(j.legendType==="point")k.isDirtyLegend=!0;b&&k.redraw(c)}var f=this,g=f.series,h=f.graphic,i,k=g.chart,j=g.options,l=g.xAxis&&g.xAxis.names,b=p(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(sa(this,
	   this.series.data),a,b)}});u(Q.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,k=e.chart,j=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,n,r=e.xData;Ua(d,k);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+d,"zoneArea"+d);o(m,function(a){if(e[a])e[a].shift=l+(f.step?2:1)})}if(i)i.isArea=!0;b=p(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=r.length;if(e.requireSorting&&m<r[d-1])for(n=!0;d&&r[d-1]>m;)d--;e.updateParallelArrays(i,
	   "splice",d,0,0);e.updateParallelArrays(i,d);if(j&&i.name)j[m]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),k.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||
	   {series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Ua(c,h);b=p(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart;H(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();p(a,!0)&&d.redraw(b)})},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=I[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;o(h,function(a){h[a]=
	   c[a];delete c[a]});a=D(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=z;u(this,I[a.type||f].prototype);o(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});u(ka.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=D(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=z;this.init(c,u(a,{events:z}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},
	  remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);oa(b.axes,this);oa(b[c],this);b.options[c].splice(this.options.index,1);o(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var wa=pa(Q);I.line=wa;aa.area=D(da,{softThreshold:!1,threshold:0});var la=pa(Q,{type:"area",singleStacks:!1,getStackPoints:function(){var a=
	   [],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,k=i.length,j,l=p(d.options.reversedStacks,!0)?1:-1,m,n;if(this.options.stacking){for(m=0;m<g.length;m++)f[g[m].x]=g[m];for(n in e)e[n].total!==null&&b.push(+n);b.sort(function(a,b){return a-b});j=Ba(i,function(){return this.visible});o(b,function(g,i){var n=0,p,q;if(f[g]&&!f[g].isNull)a.push(f[g]),o([-1,1],function(a){var c=a===1?"rightNull":"leftNull",d=0,n=e[b[i+a]];if(n)for(m=h;m>=0&&m<k;)p=n.points[m],
	 p||(m===h?f[g][c]=!0:j[m]&&(q=e[g].points[m])&&(d-=q[1]-q[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<k;){if(p=e[g].points[m]){n=p[1];break}m+=l}n=d.toPixels(n,!0);a.push({isNull:!0,plotX:c.toPixels(g,!0),plotY:n,yBottom:n})}})}return a},getGraphPath:function(a){var b=Q.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],k=this.index,j,l=e.stacks[this.stackKey],m=c.threshold,n=e.getThreshold(c.threshold),o,c=c.connectNulls||d==="percent",s=function(b,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,f){var g=a[b],b=d&&l[g.x].points[k],p=g[f+"Null"]||0,f=g[f+"Cliff"]||0,o,r,g=!0;f||p?(o=(p?b[0]:b[1])+f,r=b[0]+f,g=!!p):!d&&a[c]&&a[c].isNull&&(o=r=m);o!==void 0&&(i.push({plotX:j,plotY:o===null?n:e.toPixels(o,!0),isNull:g}),h.push({plotX:j,plotY:r===null?n:e.toPixels(r,!0)}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,j=p(a[f].rectPlotX,a[f].plotX),o=p(a[f].yBottom,n),!g||c){c||s(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:j,plotY:o});c||
	 s(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]="L");f=f.concat(g);b=b.call(this,i,!1,c);this.areaPath=f;return b},drawGraph:function(){this.areaPath=[];Q.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];o(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});o(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=
	   p(c.fillOpacity,0.75)),a[f]=a.chart.renderer.path(b).attr(g).add(a.group))})},drawLegendSymbol:J.drawRectangle});I.area=la;aa.spline=D(da);wa=pa(Q,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],c=a[c+1],g,h,i,k;if(f&&!f.isNull&&c&&!c.isNull){a=f.plotY;i=c.plotX;var c=c.plotY,j=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;k=(1.5*e+c)/2.5;i!==g&&(j=(k-h)*(i-d)/(i-g)+e-k);h+=j;k+=j;h>a&&h>e?(h=t(a,e),k=2*e-h):h<a&&h<e&&(h=F(a,e),k=2*e-h);k>c&&k>e?(k=t(c,e),
	   h=2*e-k):k<c&&k<e&&(k=F(c,e),h=2*e-k);b.rightContX=i;b.rightContY=k}b=["C",p(f.rightContX,f.plotX),p(f.rightContY,f.plotY),p(g,d),p(h,e),d,e];f.rightContX=f.rightContY=null;return b}});I.spline=wa;aa.areaspline=D(aa.area);la=la.prototype;wa=pa(wa,{type:"areaspline",getStackPoints:la.getStackPoints,getGraphPath:la.getGraphPath,setStackCliffs:la.setStackCliffs,drawGraph:la.drawGraph,drawLegendSymbol:J.drawRectangle});I.areaspline=wa;aa.column=D(da,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,
	  marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});wa=pa(Q,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,
	  init:function(){Q.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h=0;b.grouping===!1?h=1:o(a.chart.series,function(b){var c=b.options,e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===z&&(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=F(P(c.transA)*(c.ordinalSlope||
	    b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),k=i*b.groupPadding,j=(i-2*k)/h,b=F(b.maxPointWidth||c.len,p(b.pointWidth,j*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(j-b)/2+(k+((a.columnIndex||0)+(e?1:0))*j-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=P(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=
	    b;g&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,k=a.barW=t(i,1+2*d),j=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(k=ua(k));Q.prototype.translate.apply(a);o(a.points,function(c){var d=F(p(c.yBottom,f),9E4),h=999+P(d),h=F(t(-h,c.plotY),
	    e.len+h),o=c.plotX+j,s=k,q=F(h,d),v,u=t(h,d)-q;P(u)<g&&g&&(u=g,v=!e.reversed&&!c.negative||e.reversed&&c.negative,q=P(q-f)>g?d-g:f-(v?g:0));c.barX=o;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-o-s/2,u]:[o+s/2,h+e.pos-b.plotTop,u];c.shapeType="rect";c.shapeArgs=a.crispCol(o,q,s,u)})},getSymbol:Aa,drawLegendSymbol:J.drawRectangle,drawGraph:Aa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;o(a.points,function(h){var i=
	    h.plotY,k=h.graphic;if(i!==z&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=q(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],k?(Oa(k),k.attr(i).attr(g)[b.pointCount<e?"animate":"attr"](D(f))):h.graphic=d[h.shapeType](f).attr(i).attr(g).add(h.group||a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(k)h.graphic=k.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ca)a?(e.scaleY=0.001,a=F(b.pos+
	    b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0});Q.prototype.remove.apply(a,arguments)}});I.column=wa;aa.bar=D(aa.column);la=pa(wa,{type:"bar",inverted:!0});I.bar=la;aa.scatter=D(da,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
	  pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});la=pa(Q,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&Q.prototype.drawGraph.call(this)}});I.scatter=la;aa.pie=D(da,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:
	   this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});da={type:"pie",isCartesian:!1,pointClass:pa(Ha,{init:function(){Ha.prototype.init.apply(this,arguments);var a=this,b;a.name=p(a.name,"Slice");b=function(b){a.slice(b.type==="select")};M(a,"select",b);M(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,
	   b=p(b,f);if(a!==c.visible){c.visible=c.options.visible=a=a===z?!c.visible:a;d.options.data[sa(c,d.data)]=c.options;o(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;Ua(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=q(a)?a:!this.sliced;d.options.data[sa(this,d.data)]=this.options;a=a?this.slicedTranslation:
	 {translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",
	  fill:"color"},animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)o(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){Q.prototype.generatePoints.call(this);
	  this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,k=this.startAngleRad=ra/180*(i-90),i=(this.endAngleRad=ra/180*(p(c.endAngle,i+360)-90))-k,j=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=j.length,o;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=W.asin(F((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*U(h)*(a[2]/2+l)};for(m=0;m<n;m++){o=j[m];f=k+b*i;if(!c||o.visible)b+=o.percentage/
	   100;g=k+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:A(f*1E3)/1E3,end:A(g*1E3)/1E3};h=(g+f)/2;h>1.5*ra?h-=2*ra:h<-ra/2&&(h+=2*ra);o.slicedTranslation={translateX:A(U(h)*d),translateY:A($(h)*d)};f=U(h)*a[2]/2;g=$(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];o.half=h<-ra/2||h>ra/2?1:0;o.angle=h;e=F(e,l/2);o.labelPos=[a[0]+f+U(h)*l,a[1]+g+$(h)*l,a[0]+f+U(h)*e,a[1]+g+$(h)*e,a[0]+f,a[1]+g,l<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=
	   this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);o(a.points,function(k){if(k.y!==null){d=k.graphic;h=k.shapeArgs;f=k.shadowGroup;g=k.pointAttr[k.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=k.shadowGroup=b.g("shadow").add(a.shadowGroup);c=k.sliced?k.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(u(h,c));else{i={"stroke-linejoin":"round"};if(!k.visible)i.visibility=
	   "hidden";k.graphic=d=b[k.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,f)}}})},searchPoint:Aa,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:J.drawRectangle,getCenter:Cb.getCenter,getSymbol:Aa};da=pa(Q,da);I.pie=da;Q.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,k,j=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&
	 a.dlProcessOptions(d),k=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(k.attr({opacity:+h}),h||M(a,"afterAnimate",function(){a.visible&&k.show();k[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,o(e,function(e){var h,n=e.dataLabel,o,s,t=e.connector,v=!0,x,w={};f=e.dlOptions||e.options&&e.options.dataLabels;h=p(f&&f.enabled,g.enabled)&&e.y!==null;if(n&&!h)e.dataLabel=n.destroy();else if(h){d=D(g,f);x=d.style;h=d.rotation;o=e.getLabelConfig();
	  i=d.format?Ka(d.format,o):d.formatter.call(o,d);x.color=p(d.color,x.color,a.color,"black");if(n)if(q(i))n.attr({text:i}),v=!1;else{if(e.dataLabel=n=n.destroy(),t)e.connector=t.destroy()}else if(q(i)){n={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(x.color==="contrast")w.color=d.inside||d.distance<0||b.stacking?j.getContrast(e.color||a.color):"#000000";if(c)w.cursor=c;for(s in n)n[s]===z&&delete n[s];n=e.dataLabel=
	    j[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(n).css(u(x,w)).add(k).shadow(d.shadow)}n&&a.alignDataLabel(e,n,d,null,v)}})};Q.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-9999),i=p(a.plotY,-9999),k=b.getBBox(),j=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,n=this.visible&&(a.series.forceDL||f.isInsidePlot(h,A(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),o=p(c.overflow,"justify")==="justify";if(n)d=u({x:g?f.plotWidth-
	 i:h,y:A(g?f.plotHeight-h:i),width:0,height:0},d),u(c,{width:k.width,height:k.height}),l?(o=!1,g=f.renderer.rotCorr(j,l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g).attr({align:c.align}),h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?k.height:0:m==="center"?(g.x-=k.width/2,g.y-=k.height/2):m==="right"&&(g.x-=k.width,g.y-=h?0:k.height)):(b.align(c,null,d),g=b.alignAttr),o?this.justifyDataLabel(b,c,g,k,d,e):p(c.crop,!0)&&(n=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+k.width,
	     g.y+k.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!n)Oa(b),b.attr({y:-9999}),b.placed=!1};Q.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,k,j,l=a.box?0:a.padding||0;k=c.x+l;if(k<0)h==="right"?b.align="left":b.x=-k,j=!0;k=c.x+d.width-l;if(k>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-k,j=!0;k=c.y+l;if(k<0)i==="bottom"?b.verticalAlign="top":b.y=-k,j=!0;k=c.y+d.height-l;if(k>g.plotHeight)i==="top"?b.verticalAlign="bottom":
	   b.y=g.plotHeight-k,j=!0;if(j)a.placed=!f,a.align(b,null,e)};if(I.pie)I.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,k,j,l=p(e.softConnector,!0),m=e.distance,n=a.center,r=n[2]/2,q=n[1],u=m>0,v,x,w,B=[[],[]],z,y,E,D,C,G=[0,0,0,0],L=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){Q.prototype.drawDataLabels.apply(a);o(b,function(a){if(a.dataLabel&&
	   a.visible)B[a.half].push(a),a.dataLabel._pos=null});for(D=2;D--;){var H=[],M=[],I=B[D],K=I.length,J;if(K){a.sortByAngle(I,D-0.5);for(C=b=0;!b&&I[C];)b=I[C]&&I[C].dataLabel&&(I[C].dataLabel.getBBox().height||21),C++;if(m>0){x=F(q+r+m,d.plotHeight);for(C=t(0,q-r-m);C<=x;C+=b)H.push(C);x=H.length;if(K>x){c=[].concat(I);c.sort(L);for(C=K;C--;)c[C].rank=C;for(C=K;C--;)I[C].rank>=x&&I.splice(C,1);K=I.length}for(C=0;C<K;C++){c=I[C];w=c.labelPos;c=9999;var O,N;for(N=0;N<x;N++)O=P(H[N]-w[1]),O<c&&(c=O,J=N);
	  if(J<C&&H[C]!==null)J=C;else for(x<K-C+J&&H[C]!==null&&(J=x-K+C);H[J]===null;)J++;M.push({i:J,y:H[J]});H[J]=null}M.sort(L)}for(C=0;C<K;C++){c=I[C];w=c.labelPos;v=c.dataLabel;E=c.visible===!1?"hidden":"inherit";c=w[1];if(m>0){if(x=M.pop(),J=x.i,y=x.y,c>y&&H[J+1]!==null||c<y&&H[J-1]!==null)y=F(t(0,c),d.plotHeight)}else y=c;z=e.justify?n[0]+(D?-1:1)*(r+m):a.getX(y===q-r-m||y===q+r+m?c:y,D);v._attr={visibility:E,align:w[6]};v._pos={x:z+e.x+({left:f,right:-f}[w[6]]||0),y:y+e.y-10};v.connX=z;v.connY=y;
	  if(this.options.size===null)x=v.width,z-x<f?G[3]=t(A(x-z+f),G[3]):z+x>h-f&&(G[1]=t(A(z+x-h+f),G[1])),y-b/2<0?G[0]=t(A(-y+b/2),G[0]):y+b/2>i&&(G[2]=t(A(y+b/2-i),G[2]))}}}if(Ea(G)===0||this.verifyDataLabelOverflow(G))this.placeDataLabels(),u&&g&&o(this.points,function(b){k=b.connector;w=b.labelPos;if((v=b.dataLabel)&&v._pos&&b.visible)E=v._attr.visibility,z=v.connX,y=v.connY,j=l?["M",z+(w[6]==="left"?5:-5),y,"C",z,y,2*w[2]-w[4],2*w[3]-w[5],w[2],w[3],"L",w[4],w[5]]:["M",z+(w[6]==="left"?5:-5),y,"L",
	  w[2],w[3],"L",w[4],w[5]],k?(k.animate({d:j}),k.attr("visibility",E)):b.connector=k=a.chart.renderer.path(j).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:E}).add(a.dataLabelsGroup);else if(k)b.connector=k.destroy()})}},I.pie.prototype.placeDataLabels=function(){o(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},I.pie.prototype.alignDataLabel=Aa,I.pie.prototype.verifyDataLabelOverflow=
	   function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=t(b[2]-t(a[1],a[3]),e):(f=t(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=t(F(f,b[2]-t(a[0],a[2])),e):(f=t(F(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(I.column)I.column.prototype.alignDataLabel=function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=p(a.below,a.plotY>p(this.translatedThreshold,g.yAxis.len)),k=p(c.inside,!!this.options.stacking);if(h){d=D(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!k)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=p(c.align,!f||k?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,
	   f||k?"middle":i?"top":"bottom");Q.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}
	  b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,k,j,l,m,n,o,p;for(e=0;e<b;e++)if(d=a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){k=a[e];for(d=e+1;d<b;++d)if(j=a[d],k&&j&&k.placed&&j.placed&&k.newOpacity!==0&&j.newOpacity!==0&&(l=k.alignAttr,m=j.alignAttr,n=k.parentGroup,o=j.parentGroup,p=2*(k.box?0:k.padding),l=!(m.x+o.translateX>l.x+n.translateX+(k.width-p)||m.x+o.translateX+(j.width-
	   p)<l.x+n.translateX||m.y+o.translateY>l.y+n.translateY+(k.height-p)||m.y+o.translateY+(j.height-p)<l.y+n.translateY)))(k.labelrank<j.labelrank?k:j).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(B);da=B.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=
	   a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==z&&d!==b.hoverPoint)d.onMouseOver(a)};o(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)o(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),db))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:
	   a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,k=a.tracker,j=b.cursor,l=j&&{cursor:j},m=function(){if(f.hoverSeries!==a)a.onMouseOver()},n="rgba(192,192,192,"+(ca?1.0E-4:0.002)+")";if(e&&!c)for(j=e+1;j--;)d[j]==="M"&&d.splice(j+1,0,d[j+1]-i,d[j+2],"L"),(j&&d[j]==="M"||j===e)&&d.splice(j,0,"L",d[j-2]+i,d[j-1]);k?k.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":b.lineWidth+
	 (c?0:2*i),zIndex:2}).add(a.group),o([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(db)a.on("touchstart",m)}))}};if(I.column)wa.prototype.drawTracker=da.drawTrackerPoint;if(I.pie)I.pie.prototype.drawTracker=da.drawTrackerPoint;if(I.scatter)la.prototype.drawTracker=da.drawTrackerPoint;u(ob.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");
	  b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):H(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=Z("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);M(a.checkbox,"click",function(b){H(a.series||a,"checkboxClick",
	   {checked:b.target.checked,item:a},function(){a.select()})})}});N.legend.itemStyle.cursor="pointer";u(hb.prototype,{showResetZoom:function(){var a=this,b=N.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;H(a,"selection",{resetSelection:!0},
	   function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?o(this.axes,function(a){b=a.zoom()}):o(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&Y(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,
	   e;d&&o(d,function(a){a.setState()});o(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],k=(b.pointRange||0)/2,j=b.getExtremes(),l=b.toValue(i-h,!0)+k,k=b.toValue(i+b.len-h,!0)-k,i=i>h;if(b.series.length&&(i||l>F(j.dataMin,j.min))&&(!i||k<t(j.dataMax,j.max)))b.setExtremes(l,k,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);L(c.container,{cursor:"move"})}});u(Ha.prototype,{select:function(a,b){var c=this,d=c.series,
	   e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[sa(c,d.data)]=c.options;c.setState(a&&"select");b||o(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[sa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();
	  if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||sa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=D(this.series.options.point,this.options).events,b;this.events=a;for(b in a)M(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=
	   T(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=aa[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],k=i&&i.enabled===!1,j=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(k||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(D(o,g?{x:c-g,y:d-
	 g,width:2*g,height:2*g}:{})),j&&j.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,j&&j.currentSymbol!==l&&(j=j.destroy()),j)j[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=j=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),j.currentSymbol=l;if(j)j[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),j.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(u({fill:this.color||e.color,"fill-opacity":c.opacity,
	  zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});u(Q.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&H(this,"mouseOver");this.setState("hover");
	  a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&H(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};
	  for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===z?!h:a)?"show":"hide";o(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&o(d.series,function(a){if(a.options.stacking&&
	   a.visible)a.isDirty=!0});o(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();H(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===z?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;H(this,a?"select":"unselect")},drawTracker:da.drawTrackerGraph});u(B,{Color:ia,Point:Ha,Tick:Va,Renderer:cb,SVGElement:O,SVGRenderer:Ca,arrayMin:Ra,arrayMax:Ea,charts:S,dateFormat:Qa,error:X,format:Ka,pathAnim:void 0,
	  getOptions:function(){return N},hasBidiBug:Qb,isTouchDevice:Mb,setOptions:function(a){N=D(!0,N,a);Fb();return N},addEvent:M,removeEvent:V,createElement:Z,discardElement:Ta,css:L,each:o,map:Ba,merge:D,splat:ta,stableSort:ib,extendClass:pa,pInt:C,svg:ca,canvas:ha,vml:!ca&&!ha,product:"Highcharts",version:"4.2.3"});return B});


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
	 Highcharts JS v4.2.3 (2016-02-08)

	 3D features for Highcharts JS

	 @license: www.highcharts.com/license
	*/
	(function(d){typeof module==="object"&&module.exports?module.exports=d:d(Highcharts)})(function(d){function r(c,b,a){var e,f,g=b.options.chart.options3d,d=!1;a?(d=b.inverted,a=b.plotWidth/2,b=b.plotHeight/2,e=g.depth/2,f=u(g.depth,1)*u(g.viewDistance,0)):(a=b.plotLeft+b.plotWidth/2,b=b.plotTop+b.plotHeight/2,e=g.depth/2,f=u(g.depth,1)*u(g.viewDistance,0));var j=[],k=a,i=b,l=e,w=f,a=A*(d?g.beta:-g.beta),g=A*(d?-g.alpha:g.alpha),o=p(a),q=m(a),n=p(g),y=m(g),x,s,z,t,v,C;B(c,function(a){x=(d?a.y:a.x)-
	k;s=(d?a.x:a.y)-i;z=(a.z||0)-l;t=q*x-o*z;v=-o*n*x+y*s-q*n*z;C=o*y*x+n*s+q*y*z;w>0&&w<Number.POSITIVE_INFINITY&&(t*=w/(C+l+w),v*=w/(C+l+w));t+=k;v+=i;C+=l;j.push({x:d?v:t,y:d?t:v,z:C})});return j}function D(c){return c!==void 0&&c!==null}function I(c){var b=0,a,e;for(a=0;a<c.length;a++)e=(a+1)%c.length,b+=c[a].x*c[e].y-c[e].x*c[a].y;return b/2}function E(c){var b=0,a;for(a=0;a<c.length;a++)b+=c[a].z;return c.length?b/c.length:0}function q(c,b,a,e,f,g,d,j){var k=[];g>f&&g-f>o/2+1.0E-4?(k=k.concat(q(c,
	b,a,e,f,f+o/2,d,j)),k=k.concat(q(c,b,a,e,f+o/2,g,d,j))):g<f&&f-g>o/2+1.0E-4?(k=k.concat(q(c,b,a,e,f,f-o/2,d,j)),k=k.concat(q(c,b,a,e,f-o/2,g,d,j))):(k=g-f,k=["C",c+a*m(f)-a*F*k*p(f)+d,b+e*p(f)+e*F*k*m(f)+j,c+a*m(g)+a*F*k*p(g)+d,b+e*p(g)-e*F*k*m(g)+j,c+a*m(g)+d,b+e*p(g)+j]);return k}function J(c){if(this.chart.is3d()){var b=this.chart.options.plotOptions.column.grouping;if(b!==void 0&&!b&&this.group.zIndex!==void 0&&!this.zIndexSet)this.group.attr({zIndex:this.group.zIndex*10}),this.zIndexSet=!0;var a=
	this.options,e=this.options.states;this.borderWidth=a.borderWidth=D(a.edgeWidth)?a.edgeWidth:1;d.each(this.data,function(b){if(b.y!==null)b=b.pointAttr,this.borderColor=d.pick(a.edgeColor,b[""].fill),b[""].stroke=this.borderColor,b.hover.stroke=d.pick(e.hover.edgeColor,this.borderColor),b.select.stroke=d.pick(e.select.edgeColor,this.borderColor)})}c.apply(this,[].slice.call(arguments,1))}var B=d.each,M=d.extend,N=d.inArray,G=d.merge,u=d.pick,K=d.wrap,o=Math.PI,A=o/180,p=Math.sin,m=Math.cos,L=Math.round;
	d.perspective=r;var F=4*(Math.sqrt(2)-1)/3/(o/2);d.SVGRenderer.prototype.toLinePath=function(c,b){var a=[];d.each(c,function(b){a.push("L",b.x,b.y)});c.length&&(a[0]="M",b&&a.push("Z"));return a};d.SVGRenderer.prototype.cuboid=function(c){var b=this.g(),c=this.cuboidPath(c);b.front=this.path(c[0]).attr({zIndex:c[3],"stroke-linejoin":"round"}).add(b);b.top=this.path(c[1]).attr({zIndex:c[4],"stroke-linejoin":"round"}).add(b);b.side=this.path(c[2]).attr({zIndex:c[5],"stroke-linejoin":"round"}).add(b);
	b.fillSetter=function(a){var b=d.Color(a).brighten(0.1).get(),c=d.Color(a).brighten(-0.1).get();this.front.attr({fill:a});this.top.attr({fill:b});this.side.attr({fill:c});this.color=a;return this};b.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};b.attr=function(a){if(a.shapeArgs||D(a.x))a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0],zIndex:a[3]}),this.top.attr({d:a[1],zIndex:a[4]}),this.side.attr({d:a[2],
	zIndex:a[5]});else return d.SVGElement.prototype.attr.call(this,a);return this};b.animate=function(a,b,c){D(a.x)&&D(a.y)?(a=this.renderer.cuboidPath(a),this.front.attr({zIndex:a[3]}).animate({d:a[0]},b,c),this.top.attr({zIndex:a[4]}).animate({d:a[1]},b,c),this.side.attr({zIndex:a[5]}).animate({d:a[2]},b,c),this.attr({zIndex:-a[6]})):a.opacity?(this.front.animate(a,b,c),this.top.animate(a,b,c),this.side.animate(a,b,c)):d.SVGElement.prototype.animate.call(this,a,b,c);return this};b.destroy=function(){this.front.destroy();
	this.top.destroy();this.side.destroy();return null};b.attr({zIndex:-c[6]});return b};d.SVGRenderer.prototype.cuboidPath=function(c){function b(a){return i[a]}var a=c.x,e=c.y,f=c.z,g=c.height,h=c.width,j=c.depth,k=d.map,i=[{x:a,y:e,z:f},{x:a+h,y:e,z:f},{x:a+h,y:e+g,z:f},{x:a,y:e+g,z:f},{x:a,y:e+g,z:f+j},{x:a+h,y:e+g,z:f+j},{x:a+h,y:e,z:f+j},{x:a,y:e,z:f+j}],i=r(i,d.charts[this.chartIndex],c.insidePlotArea),f=function(a,c){var e=[],a=k(a,b),c=k(c,b);I(a)<0?e=a:I(c)<0&&(e=c);return e},c=f([3,2,1,0],
	[7,6,5,4]),a=[4,5,2,3],e=f([1,6,7,0],a),f=f([1,2,5,6],[0,7,4,3]);return[this.toLinePath(c,!0),this.toLinePath(e,!0),this.toLinePath(f,!0),E(c),E(e),E(f),E(k(a,b))*9E9]};d.SVGRenderer.prototype.arc3d=function(c){function b(a){var b=!1,c={},e;for(e in a)N(e,f)!==-1&&(c[e]=a[e],delete a[e],b=!0);return b?c:!1}var a=this.g(),e=a.renderer,f="x,y,r,innerR,start,end".split(","),c=G(c);c.alpha*=A;c.beta*=A;a.top=e.path();a.side1=e.path();a.side2=e.path();a.inn=e.path();a.out=e.path();a.onAdd=function(){var b=
	a.parentGroup;a.top.add(a);a.out.add(b);a.inn.add(b);a.side1.add(b);a.side2.add(b)};a.setPaths=function(b){var c=a.renderer.arc3dPath(b),e=c.zTop*100;a.attribs=b;a.top.attr({d:c.top,zIndex:c.zTop});a.inn.attr({d:c.inn,zIndex:c.zInn});a.out.attr({d:c.out,zIndex:c.zOut});a.side1.attr({d:c.side1,zIndex:c.zSide1});a.side2.attr({d:c.side2,zIndex:c.zSide2});a.zIndex=e;a.attr({zIndex:e});b.center&&(a.top.setRadialReference(b.center),delete b.center)};a.setPaths(c);a.fillSetter=function(a){var b=d.Color(a).brighten(-0.1).get();
	this.fill=a;this.side1.attr({fill:b});this.side2.attr({fill:b});this.inn.attr({fill:b});this.out.attr({fill:b});this.top.attr({fill:a});return this};B(["opacity","translateX","translateY","visibility"],function(b){a[b+"Setter"]=function(b,c){a[c]=b;B(["out","inn","side1","side2","top"],function(e){a[e].attr(c,b)})}});K(a,"attr",function(c,e,d){var f;if(typeof e==="object"&&(f=b(e)))M(a.attribs,f),a.setPaths(a.attribs);return c.call(this,e,d)});K(a,"animate",function(a,c,e,d){var f,l=this.attribs,
	m;delete c.center;delete c.z;delete c.depth;delete c.alpha;delete c.beta;if(e=u(e,this.renderer.globalAnimation))if(typeof e!=="object"&&(e={}),c=G(c),f=b(c))m=f,e.step=function(a,b){function c(a){return l[a]+(u(m[a],l[a])-l[a])*b.pos}b.elem.setPaths(G(l,{x:c("x"),y:c("y"),r:c("r"),innerR:c("innerR"),start:c("start"),end:c("end")}))};return a.call(this,c,e,d)});a.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();d.SVGElement.prototype.destroy.call(this)};
	a.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};a.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();this.side2.show()};return a};d.SVGRenderer.prototype.arc3dPath=function(c){function b(a){a%=2*o;a>o&&(a=2*o-a);return a}var a=c.x,e=c.y,d=c.start,g=c.end-1.0E-5,h=c.r,j=c.innerR,k=c.depth,i=c.alpha,l=c.beta,w=m(d),u=p(d),c=m(g),r=p(g),n=h*m(l);h*=m(i);var y=j*m(l),x=j*m(i),j=k*p(l),s=k*p(i),k=["M",a+n*w,e+h*u],k=
	k.concat(q(a,e,n,h,d,g,0,0)),k=k.concat(["L",a+y*c,e+x*r]),k=k.concat(q(a,e,y,x,g,d,0,0)),k=k.concat(["Z"]),z=l>0?o/2:0,l=i>0?0:o/2,z=d>-z?d:g>-z?-z:d,t=g<o-l?g:d<o-l?o-l:g,v=2*o-l,i=["M",a+n*m(z),e+h*p(z)],i=i.concat(q(a,e,n,h,z,t,0,0));g>v&&d<v?(i=i.concat(["L",a+n*m(t)+j,e+h*p(t)+s]),i=i.concat(q(a,e,n,h,t,v,j,s)),i=i.concat(["L",a+n*m(v),e+h*p(v)]),i=i.concat(q(a,e,n,h,v,g,0,0)),i=i.concat(["L",a+n*m(g)+j,e+h*p(g)+s]),i=i.concat(q(a,e,n,h,g,v,j,s)),i=i.concat(["L",a+n*m(v),e+h*p(v)]),i=i.concat(q(a,
	e,n,h,v,t,0,0))):g>o-l&&d<o-l&&(i=i.concat(["L",a+n*m(t)+j,e+h*p(t)+s]),i=i.concat(q(a,e,n,h,t,g,j,s)),i=i.concat(["L",a+n*m(g),e+h*p(g)]),i=i.concat(q(a,e,n,h,g,t,0,0)));i=i.concat(["L",a+n*m(t)+j,e+h*p(t)+s]);i=i.concat(q(a,e,n,h,t,z,j,s));i=i.concat(["Z"]);l=["M",a+y*w,e+x*u];l=l.concat(q(a,e,y,x,d,g,0,0));l=l.concat(["L",a+y*m(g)+j,e+x*p(g)+s]);l=l.concat(q(a,e,y,x,g,d,j,s));l=l.concat(["Z"]);w=["M",a+n*w,e+h*u,"L",a+n*w+j,e+h*u+s,"L",a+y*w+j,e+x*u+s,"L",a+y*w,e+x*u,"Z"];a=["M",a+n*c,e+h*r,"L",
	a+n*c+j,e+h*r+s,"L",a+y*c+j,e+x*r+s,"L",a+y*c,e+x*r,"Z"];r=Math.atan2(s,-j);e=Math.abs(g+r);c=Math.abs(d+r);d=Math.abs((d+g)/2+r);e=b(e);c=b(c);d=b(d);d*=1E5;g=c*1E5;e*=1E5;return{top:k,zTop:o*1E5+1,out:i,zOut:Math.max(d,g,e),inn:l,zInn:Math.max(d,g,e),side1:w,zSide1:e*0.99,side2:a,zSide2:g*0.99}};d.Chart.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};d.wrap(d.Chart.prototype,"isInsidePlot",function(c){return this.is3d()||c.apply(this,[].slice.call(arguments,
	1))});d.getOptions().chart.options3d={enabled:!1,alpha:0,beta:0,depth:100,viewDistance:25,frame:{bottom:{size:1,color:"rgba(255,255,255,0)"},side:{size:1,color:"rgba(255,255,255,0)"},back:{size:1,color:"rgba(255,255,255,0)"}}};d.wrap(d.Chart.prototype,"init",function(c){var b=[].slice.call(arguments,1),a;if(b[0].chart&&b[0].chart.options3d&&b[0].chart.options3d.enabled)b[0].chart.options3d.alpha=(b[0].chart.options3d.alpha||0)%360,b[0].chart.options3d.beta=(b[0].chart.options3d.beta||0)%360,a=b[0].plotOptions||
	{},a=a.pie||{},a.borderColor=d.pick(a.borderColor,void 0);c.apply(this,b)});d.wrap(d.Chart.prototype,"setChartSize",function(c){c.apply(this,[].slice.call(arguments,1));if(this.is3d()){var b=this.inverted,a=this.clipBox,e=this.margin;a[b?"y":"x"]=-(e[3]||0);a[b?"x":"y"]=-(e[0]||0);a[b?"height":"width"]=this.chartWidth+(e[3]||0)+(e[1]||0);a[b?"width":"height"]=this.chartHeight+(e[0]||0)+(e[2]||0)}});d.wrap(d.Chart.prototype,"redraw",function(c){if(this.is3d())this.isDirtyBox=!0;c.apply(this,[].slice.call(arguments,
	1))});d.wrap(d.Chart.prototype,"renderSeries",function(c){var b=this.series.length;if(this.is3d())for(;b--;)c=this.series[b],c.translate(),c.render();else c.call(this)});d.Chart.prototype.retrieveStacks=function(c){var b=this.series,a={},e,f=1;d.each(this.series,function(d){e=u(d.options.stack,c?0:b.length-1-d.index);a[e]?a[e].series.push(d):(a[e]={series:[d],position:f},f++)});a.totalStacks=f+1;return a};d.wrap(d.Axis.prototype,"setOptions",function(c,b){var a;c.call(this,b);if(this.chart.is3d())a=
	this.options,a.tickWidth=d.pick(a.tickWidth,0),a.gridLineWidth=d.pick(a.gridLineWidth,1)});d.wrap(d.Axis.prototype,"render",function(c){c.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var b=this.chart,a=b.renderer,e=b.options.chart.options3d,d=e.frame,g=d.bottom,h=d.back,d=d.side,j=e.depth,k=this.height,i=this.width,l=this.left,m=this.top;if(!this.isZAxis)this.horiz?(h={x:l,y:m+(b.xAxis[0].opposite?-g.size:k),z:0,width:i,height:g.size,depth:j,insidePlotArea:!1},this.bottomFrame?this.bottomFrame.animate(h):
	this.bottomFrame=a.cuboid(h).attr({fill:g.color,zIndex:b.yAxis[0].reversed&&e.alpha>0?4:-1}).css({stroke:g.color}).add()):(e={x:l+(b.yAxis[0].opposite?0:-d.size),y:m+(b.xAxis[0].opposite?-g.size:0),z:j,width:i+d.size,height:k+g.size,depth:h.size,insidePlotArea:!1},this.backFrame?this.backFrame.animate(e):this.backFrame=a.cuboid(e).attr({fill:h.color,zIndex:-3}).css({stroke:h.color}).add(),b={x:l+(b.yAxis[0].opposite?i:-d.size),y:m+(b.xAxis[0].opposite?-g.size:0),z:0,width:d.size,height:k+g.size,depth:j,
	insidePlotArea:!1},this.sideFrame?this.sideFrame.animate(b):this.sideFrame=a.cuboid(b).attr({fill:d.color,zIndex:-2}).css({stroke:d.color}).add())}});d.wrap(d.Axis.prototype,"getPlotLinePath",function(c){var b=c.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d())return b;if(b===null)return b;var a=this.chart,d=a.options.chart.options3d,a=this.isZAxis?a.plotWidth:d.depth,d=this.opposite;this.horiz&&(d=!d);b=[this.swapZ({x:b[1],y:b[2],z:d?a:0}),this.swapZ({x:b[1],y:b[2],z:a}),this.swapZ({x:b[4],
	y:b[5],z:a}),this.swapZ({x:b[4],y:b[5],z:d?0:a})];b=r(b,this.chart,!1);return b=this.chart.renderer.toLinePath(b,!1)});d.wrap(d.Axis.prototype,"getLinePath",function(c){return this.chart.is3d()?[]:c.apply(this,[].slice.call(arguments,1))});d.wrap(d.Axis.prototype,"getPlotBandPath",function(c){if(!this.chart.is3d())return c.apply(this,[].slice.call(arguments,1));var b=arguments,a=b[1],b=this.getPlotLinePath(b[2]);(a=this.getPlotLinePath(a))&&b?a.push("L",b[10],b[11],"L",b[7],b[8],"L",b[4],b[5],"L",
	b[1],b[2]):a=null;return a});d.wrap(d.Tick.prototype,"getMarkPath",function(c){var b=c.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return b;b=[this.axis.swapZ({x:b[1],y:b[2],z:0}),this.axis.swapZ({x:b[4],y:b[5],z:0})];b=r(b,this.axis.chart,!1);return b=["M",b[0].x,b[0].y,"L",b[1].x,b[1].y]});d.wrap(d.Tick.prototype,"getLabelPosition",function(c){var b=c.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return b;var a=r([this.axis.swapZ({x:b.x,y:b.y,z:0})],this.axis.chart,
	!1)[0];a.x-=!this.axis.horiz&&this.axis.opposite?this.axis.transA:0;a.old=b;return a});d.wrap(d.Tick.prototype,"handleOverflow",function(c,b){if(this.axis.chart.is3d())b=b.old;return c.call(this,b)});d.wrap(d.Axis.prototype,"getTitlePosition",function(c){var b=this.chart.is3d(),a,d;if(b)d=this.axisTitleMargin,this.axisTitleMargin=0;a=c.apply(this,[].slice.call(arguments,1));if(b)a=r([this.swapZ({x:a.x,y:a.y,z:0})],this.chart,!1)[0],a[this.horiz?"y":"x"]+=(this.horiz?1:-1)*(this.opposite?-1:1)*d,this.axisTitleMargin=
	d;return a});d.wrap(d.Axis.prototype,"drawCrosshair",function(c){var b=arguments;this.chart.is3d()&&b[2]&&(b[2]={plotX:b[2].plotXold||b[2].plotX,plotY:b[2].plotYold||b[2].plotY});c.apply(this,[].slice.call(b,1))});d.Axis.prototype.swapZ=function(c,b){if(this.isZAxis){var a=b?0:this.chart.plotLeft,d=this.chart;return{x:a+(d.yAxis[0].opposite?c.z:d.xAxis[0].width-c.z),y:c.y,z:c.x-a}}return c};var H=d.ZAxis=function(){this.isZAxis=!0;this.init.apply(this,arguments)};d.extend(H.prototype,d.Axis.prototype);
	d.extend(H.prototype,{setOptions:function(c){c=d.merge({offset:0,lineWidth:0},c);d.Axis.prototype.setOptions.call(this,c);this.coll="zAxis"},setAxisSize:function(){d.Axis.prototype.setAxisSize.call(this);this.width=this.len=this.chart.options.chart.options3d.depth;this.right=this.chart.chartWidth-this.width-this.left},getSeriesExtremes:function(){var c=this,b=c.chart;c.hasVisibleSeries=!1;c.dataMin=c.dataMax=c.ignoreMinPadding=c.ignoreMaxPadding=null;c.buildStacks&&c.buildStacks();d.each(c.series,
	function(a){if(a.visible||!b.options.chart.ignoreHiddenSeries)if(c.hasVisibleSeries=!0,a=a.zData,a.length)c.dataMin=Math.min(u(c.dataMin,a[0]),Math.min.apply(null,a)),c.dataMax=Math.max(u(c.dataMax,a[0]),Math.max.apply(null,a))})}});d.wrap(d.Chart.prototype,"getAxes",function(c){var b=this,a=this.options,a=a.zAxis=d.splat(a.zAxis||{});c.call(this);if(b.is3d())this.zAxis=[],d.each(a,function(a,c){a.index=c;a.isX=!0;(new H(b,a)).setScale()})});d.wrap(d.seriesTypes.column.prototype,"translate",function(c){c.apply(this,
	[].slice.call(arguments,1));if(this.chart.is3d()){var b=this.chart,a=this.options,e=a.depth||25,f=(a.stacking?a.stack||0:this._i)*(e+(a.groupZPadding||1));a.grouping!==!1&&(f=0);f+=a.groupZPadding||1;d.each(this.data,function(a){if(a.y!==null){var c=a.shapeArgs,d=a.tooltipPos;a.shapeType="cuboid";c.z=f;c.depth=e;c.insidePlotArea=!0;d=r([{x:d[0],y:d[1],z:f}],b,!1)[0];a.tooltipPos=[d.x,d.y]}});this.z=f}});d.wrap(d.seriesTypes.column.prototype,"animate",function(c){if(this.chart.is3d()){var b=arguments[1],
	a=this.yAxis,e=this,f=this.yAxis.reversed;if(d.svg)b?d.each(e.data,function(b){if(b.y!==null&&(b.height=b.shapeArgs.height,b.shapey=b.shapeArgs.y,b.shapeArgs.height=1,!f))b.shapeArgs.y=b.stackY?b.plotY+a.translate(b.stackY):b.plotY+(b.negative?-b.height:b.height)}):(d.each(e.data,function(a){if(a.y!==null)a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,e.options.animation)}),this.drawDataLabels(),e.animate=null)}else c.apply(this,[].slice.call(arguments,
	1))});d.wrap(d.seriesTypes.column.prototype,"init",function(c){c.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var b=this.options,a=b.grouping,d=b.stacking,f=u(this.yAxis.options.reversedStacks,!0),g=0;if(a===void 0||a){a=this.chart.retrieveStacks(d);g=b.stack||0;for(d=0;d<a[g].series.length;d++)if(a[g].series[d]===this)break;g=10*(a.totalStacks-a[g].position)+(f?d:-d);this.xAxis.reversed||(g=a.totalStacks*10-g)}b.zIndex=g}});d.wrap(d.Series.prototype,"alignDataLabel",function(c){if(this.chart.is3d()&&
	(this.type==="column"||this.type==="columnrange")){var b=arguments[4],a={x:b.x,y:b.y,z:this.z},a=r([a],this.chart,!0)[0];b.x=a.x;b.y=a.y}c.apply(this,[].slice.call(arguments,1))});d.seriesTypes.columnrange&&d.wrap(d.seriesTypes.columnrange.prototype,"drawPoints",J);d.wrap(d.seriesTypes.column.prototype,"drawPoints",J);d.wrap(d.seriesTypes.pie.prototype,"translate",function(c){c.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var b=this,a=b.options,d=a.depth||0,f=b.chart.options.chart.options3d,
	g=f.alpha,h=f.beta,j=a.stacking?(a.stack||0)*d:b._i*d;j+=d/2;a.grouping!==!1&&(j=0);B(b.data,function(c){var f=c.shapeArgs;c.shapeType="arc3d";f.z=j;f.depth=d*0.75;f.alpha=g;f.beta=h;f.center=b.center;f=(f.end+f.start)/2;c.slicedTranslation={translateX:L(m(f)*a.slicedOffset*m(g*A)),translateY:L(p(f)*a.slicedOffset*m(g*A))}})}});d.wrap(d.seriesTypes.pie.prototype.pointClass.prototype,"haloPath",function(c){var b=arguments;return this.series.chart.is3d()?[]:c.call(this,b[1])});d.wrap(d.seriesTypes.pie.prototype,
	"drawPoints",function(c){var b=this.options,a=b.states;if(this.chart.is3d())this.borderWidth=b.borderWidth=b.edgeWidth||1,this.borderColor=b.edgeColor=d.pick(b.edgeColor,b.borderColor,void 0),a.hover.borderColor=d.pick(a.hover.edgeColor,this.borderColor),a.hover.borderWidth=d.pick(a.hover.edgeWidth,this.borderWidth),a.select.borderColor=d.pick(a.select.edgeColor,this.borderColor),a.select.borderWidth=d.pick(a.select.edgeWidth,this.borderWidth),B(this.data,function(b){var c=b.pointAttr;c[""].stroke=
	b.series.borderColor||b.color;c[""]["stroke-width"]=b.series.borderWidth;c.hover.stroke=a.hover.borderColor;c.hover["stroke-width"]=a.hover.borderWidth;c.select.stroke=a.select.borderColor;c.select["stroke-width"]=a.select.borderWidth});c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&B(this.points,function(a){var b=a.graphic;if(b)b[a.y?"show":"hide"]()})});d.wrap(d.seriesTypes.pie.prototype,"drawDataLabels",function(c){if(this.chart.is3d()){var b=this.chart.options.chart.options3d;B(this.data,
	function(a){var c=a.shapeArgs,d=c.r,g=(c.beta||b.beta)*A,h=(c.start+c.end)/2,j=a.labelPos,k=-d*(1-m((c.alpha||b.alpha)*A))*p(h),i=d*(m(g)-1)*m(h);B([0,2,4],function(a){j[a]+=i;j[a+1]+=k})})}c.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.pie.prototype,"addPoint",function(c){c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update(this.userOptions,!0)});d.wrap(d.seriesTypes.pie.prototype,"animate",function(c){if(this.chart.is3d()){var b=arguments[1],a=this.options.animation,
	e=this.center,f=this.group,g=this.markerGroup;if(d.svg)if(a===!0&&(a={}),b){if(f.oldtranslateX=f.translateX,f.oldtranslateY=f.translateY,b={translateX:e[0],translateY:e[1],scaleX:0.001,scaleY:0.001},f.attr(b),g)g.attrSetters=f.attrSetters,g.attr(b)}else b={translateX:f.oldtranslateX,translateY:f.oldtranslateY,scaleX:1,scaleY:1},f.animate(b,a),g&&g.animate(b,a),this.animate=null}else c.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.scatter.prototype,"translate",function(c){c.apply(this,
	[].slice.call(arguments,1));if(this.chart.is3d()){var b=this.chart,a=d.pick(this.zAxis,b.options.zAxis[0]),e=[],f,g,h;for(h=0;h<this.data.length;h++)f=this.data[h],g=a.isLog&&a.val2lin?a.val2lin(f.z):f.z,f.plotZ=a.translate(g),f.isInside=f.isInside?g>=a.min&&g<=a.max:!1,e.push({x:f.plotX,y:f.plotY,z:f.plotZ});b=r(e,b,!0);for(h=0;h<this.data.length;h++)f=this.data[h],a=b[h],f.plotXold=f.plotX,f.plotYold=f.plotY,f.plotX=a.x,f.plotY=a.y,f.plotZ=a.z}});d.wrap(d.seriesTypes.scatter.prototype,"init",function(c,
	b,a){if(b.is3d())this.axisTypes=["xAxis","yAxis","zAxis"],this.pointArrayMap=["x","y","z"],this.parallelArrays=["x","y","z"];c=c.apply(this,[b,a]);if(this.chart.is3d())this.tooltipOptions.pointFormat=this.userOptions.tooltip?this.userOptions.tooltip.pointFormat||"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>":"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>";return c});if(d.VMLRenderer)d.setOptions({animate:!1}),d.VMLRenderer.prototype.cuboid=d.SVGRenderer.prototype.cuboid,
	d.VMLRenderer.prototype.cuboidPath=d.SVGRenderer.prototype.cuboidPath,d.VMLRenderer.prototype.toLinePath=d.SVGRenderer.prototype.toLinePath,d.VMLRenderer.prototype.createElement3D=d.SVGRenderer.prototype.createElement3D,d.VMLRenderer.prototype.arc3d=function(c){c=d.SVGRenderer.prototype.arc3d.call(this,c);c.css({zIndex:c.zIndex});return c},d.VMLRenderer.prototype.arc3dPath=d.SVGRenderer.prototype.arc3dPath,d.wrap(d.Axis.prototype,"render",function(c){c.apply(this,[].slice.call(arguments,1));this.sideFrame&&
	(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))})});


/***/ },
/* 15 */
/***/ function(module, exports) {

	/* super inefficient right now, could be improved */
	$(function(){
	    var c = document.getElementById('cvs'),
	        ctx = c.getContext('2d'),
	        cw = c.width = 327,
	        ch = c.height = 327,
	        rand = function (a, b) {
	            return ~~((Math.random() * (b - a + 1)) + a);
	        },
	        dToR = function (degrees) {
	            return degrees * (Math.PI / 180);
	        },
	        circle = {
	            x: (cw / 2) + 5,
	            y: (ch / 2) + 0,
	            radius: 90,
	            speed: 2,
	            rotation: 0,
	            angleStart: 270,
	            angleEnd: 90,
	            hue: 220,
	            thickness: 18,
	            blur: 25
	        },
	        particles = [],
	        particleMax = 100,
	        updateCircle = function () {
	            if (circle.rotation < 360) {
	                circle.rotation += circle.speed;
	            } else {
	                circle.rotation = 0;
	            }
	        },
	        renderCircle = function () {
	            ctx.save();
	            ctx.translate(circle.x, circle.y);
	            ctx.rotate(dToR(circle.rotation));
	            ctx.beginPath();
	            ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
	            ctx.lineWidth = circle.thickness;
	            ctx.strokeStyle = gradient1;
	            ctx.stroke();
	            ctx.restore();
	        },
	        renderCircleBorder = function () {
	            ctx.save();
	            ctx.translate(circle.x, circle.y);
	            ctx.rotate(dToR(circle.rotation));
	            ctx.beginPath();
	            ctx.arc(0, 0, circle.radius + (circle.thickness / 2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
	            ctx.lineWidth = 2;
	            ctx.strokeStyle = gradient2;
	            ctx.stroke();
	            ctx.restore();
	        },
	        renderCircleFlare = function () {
	            ctx.save();
	            ctx.translate(circle.x, circle.y);
	            ctx.rotate(dToR(circle.rotation + 185));
	            ctx.scale(1, 1);
	            ctx.beginPath();
	            ctx.arc(0, circle.radius, 30, 0, Math.PI * 2, false);
	            ctx.closePath();
	            var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 30);
	            gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
	            gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
	            ctx.fillStyle = gradient3;
	            ctx.fill();
	            ctx.restore();
	        },
	        renderCircleFlare2 = function () {
	            ctx.save();
	            ctx.translate(circle.x, circle.y);
	            ctx.rotate(dToR(circle.rotation + 165));
	            ctx.scale(1.5, 1);
	            ctx.beginPath();
	            ctx.arc(0, circle.radius, 25, 0, Math.PI * 2, false);
	            ctx.closePath();
	            var gradient4 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 25);
	            gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
	            gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
	            ctx.fillStyle = gradient4;
	            ctx.fill();
	            ctx.restore();
	        },
	        createParticles = function () {
	            if (particles.length < particleMax) {
	                particles.push({
	                    x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
	                    y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
	                    vx: (rand(0, 100) - 50) / 1000,
	                    vy: (rand(0, 100) - 50) / 1000,
	                    radius: rand(1, 6) / 2,
	                    alpha: rand(10, 20) / 100
	                });
	            }
	        },
	        updateParticles = function () {
	            var i = particles.length;
	            while (i--) {
	                var p = particles[i];
	                p.vx += (rand(0, 100) - 50) / 750;
	                p.vy += (rand(0, 100) - 50) / 750;
	                p.x += p.vx;
	                p.y += p.vy;
	                p.alpha -= .01;

	                if (p.alpha < .02) {
	                    particles.splice(i, 1)
	                }
	            }
	        },
	        renderParticles = function () {
	            var i = particles.length;
	            while (i--) {
	                var p = particles[i];
	                ctx.beginPath();
	                ctx.fillRect(p.x, p.y, p.radius, p.radius);
	                ctx.closePath();
	                ctx.fillStyle = 'hsla(0, 0%, 100%, ' + p.alpha + ')';
	            }
	        },
	        clear = function () {
	            ctx.globalCompositeOperation = 'destination-out';
	            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
	            ctx.fillRect(0, 0, cw, ch);
	            ctx.globalCompositeOperation = 'lighter';
	        }
	    loop = function () {
	        clear();
	        updateCircle();
	        renderCircle();
	        renderCircleBorder();
	        renderCircleFlare();
	        renderCircleFlare2();
	        createParticles();
	        updateParticles();
	        renderParticles();
	    }

	    /* Append Canvas */
	//document.body.appendChild(c);

	    /* Set Constant Properties */
	    ctx.shadowBlur = circle.blur;
	    ctx.shadowColor = 'hsla(' + circle.hue + ', 80%, 60%, 1)';
	    ctx.lineCap = 'round'

	    var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
	    gradient1.addColorStop(0, 'hsla(' + circle.hue + ', 60%, 50%, .25)');
	    gradient1.addColorStop(1, 'hsla(' + circle.hue + ', 60%, 50%, 0)');

	    var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
	    gradient2.addColorStop(0, 'hsla(' + circle.hue + ', 100%, 50%, 0)');
	    gradient2.addColorStop(.1, 'hsla(' + circle.hue + ', 100%, 100%, .7)');
	    gradient2.addColorStop(1, 'hsla(' + circle.hue + ', 100%, 50%, 0)');

	    /* Loop It, Loop It Good */
	    setInterval(loop, 16);
	});



/***/ },
/* 16 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.6 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
	d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/***/ }
/******/ ]);