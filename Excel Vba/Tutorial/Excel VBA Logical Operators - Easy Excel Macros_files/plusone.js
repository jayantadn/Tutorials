var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var n=void 0,r=!0,s=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,v=document,w=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",x="push",z="test",fa="exec",ga="width",A="replace",ha="getElementById",B="concat",ia="JSON",C="indexOf",ja="match",ka="readyState",D="createElement",E="setAttribute",F="getTime",la="getElementsByTagName",ma="substr",G="length",na="prototype",H="split",K="location",L="style",oa="removeChild",pa="call",M="getAttribute",qa="charCodeAt",N="href",ra="substring",sa="action",O="apply",ta="attributes",P="parentNode",ua="update",va="height",Q="join",wa="toLowerCase";var R=u,S=v,xa=R[K],ya=function(){},za=/\[native code\]/,T=function(a,b,c){return a[b]=a[b]||c},Aa=function(a){for(var b=0;b<this[G];b++)if(this[b]===a)return b;return-1},Ba=function(a){a=a.sort();for(var b=[],c=n,e=0;e<a[G];e++){var d=a[e];d!=c&&b[x](d);c=d}return b},Ca=/&/g,Da=/</g,Ea=/>/g,Fa=/"/g,Ga=/'/g,Ha=function(a){return w(a)[A](Ca,"&amp;")[A](Da,"&lt;")[A](Ea,"&gt;")[A](Fa,"&quot;")[A](Ga,"&#39;")},U=function(){var a;if((a=ba.create)&&za[z](a))a=a(s);else{a={};for(var b in a)a[b]=n}return a},
V=function(a,b){return ba[na].hasOwnProperty[pa](a,b)},Ia=function(a){if(za[z](ba.keys))return ba.keys(a);var b=[],c;for(c in a)V(a,c)&&b[x](c);return b},W=function(a,b){a=a||{};for(var c in a)V(a,c)&&(b[c]=a[c])},Ja=function(a){return function(){R.setTimeout(a,0)}},Ka=function(a,b){if(!a)throw Error(b||"");},X=T(R,"gapi",{});var La=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[fa](a)||b[fa](a)))try{c=ca(a[2])}catch(d){}return c},Ma=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Na=function(a){a=a[ja](Ma);var b=U();b.u=a[1];b.d=a[3]?[a[3]]:[];b.k=a[5]?[a[5]]:[];return b},Oa=function(a){return a.u+(0<a.d[G]?"?"+a.d[Q]("&"):"")+(0<a.k[G]?"#"+a.k[Q]("&"):"")},Pa=function(a,b){var c=[];if(a)for(var e in a)if(V(a,e)&&a[e]!=s){var d=b?b(a[e]):a[e];c[x](aa(e)+"="+aa(d))}return c},
Qa=function(a,b,c,e){a=Na(a);a.d[x][O](a.d,Pa(b,e));a.k[x][O](a.k,Pa(c,e));return Oa(a)},Ra=function(a,b){var c="";2E3<b[G]&&(c=b[ra](2E3),b=b[ra](0,2E3));var e=a[D]("div"),d=a[D]("a");d.href=b;e[ea](d);e.innerHTML=e.innerHTML;b=w(e.firstChild[N]);e[P]&&e[P][oa](e);return b+c},Sa=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var Ta=function(a,b,c,e){if(R[c+"EventListener"])R[c+"EventListener"](a,b,t);else if(R[e+"tachEvent"])R[e+"tachEvent"]("on"+a,b)},Wa=function(a){var b=Ua;if("complete"!==S[ka])try{b()}catch(c){}Va(a)},Va=function(a){if("complete"===S[ka])a();else{var b=t,c=function(){if(!b)return b=r,a[O](this,arguments)};R.addEventListener?(R.addEventListener("load",c,t),R.addEventListener("DOMContentLoaded",c,t)):R.attachEvent&&(R.attachEvent("onreadystatechange",function(){"complete"===S[ka]&&c[O](this,arguments)}),
R.attachEvent("onload",c))}},Xa=function(a){for(;a.firstChild;)a[oa](a.firstChild)},Ya={button:r,div:r,span:r};var Y;Y=T(R,"___jsl",U());T(Y,"I",0);T(Y,"hel",10);var $a=function(a){return!Y.dpo?La(a,"jsh",Y.h):Y.h},ab=function(a){var b=T(Y,"sws",[]);b[x][O](b,a)},bb=function(a){var b=T(Y,"PQ",[]);Y.PQ=[];var c=b[G];if(0===c)a();else for(var e=0,d=function(){++e===c&&a()},f=0;f<c;f++)b[f](d)},cb=function(a){return T(T(Y,"H",U()),a,U())};var db=T(Y,"perf",U()),eb=T(db,"g",U()),fb=T(db,"i",U());T(db,"r",[]);U();U();var gb=function(a,b,c){var e=db.r;"function"===typeof e?e(a,b,c):e[x]([a,b,c])},hb=function(a,b,c){eb[a]=!b&&eb[a]||c||(new Date)[F]();gb(a)},jb=function(a,b,c){b&&0<b[G]&&(b=ib(b),c&&0<c[G]&&(b+="___"+ib(c)),28<b[G]&&(b=b[ma](0,28)+(b[G]-28)),c=b,b=T(fb,"_p",U()),T(b,c,U())[a]=(new Date)[F](),gb(a,"_p",c))},ib=function(a){return a[Q]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var kb=U(),lb=[],Z;Z={c:"callback",A:"sync",v:"config",j:"_c",o:"h",B:"platform",q:"jsl",TIMEOUT:"timeout",w:"ontimeout",D:"mh",C:"u"};lb[x]([Z.q,function(a){for(var b in a)if(V(a,b)){var c=a[b];"object"==typeof c?Y[b]=T(Y,b,[])[B](c):T(Y,b,c)}if(b=a[Z.C])a=T(Y,"us",[]),a[x](b),(b=/^https:(.*)$/[fa](b))&&a[x]("http:"+b[1])}]);var mb=decodeURI("%73cript");kb.m=function(a){var b=Y.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[C](".."))throw"Bad hint";return b+"/"+a[A](/^\//,"")};
var nb=function(a){return a[Q](",")[A](/\./g,"_")[A](/-/g,"_")},ob=function(a,b){for(var c=[],e=0;e<a[G];++e){var d=a[e];d&&0>Aa[pa](b,d)&&c[x](d)}return c},pb=function(){var a=$a(xa[N]);if(!a)throw"Bad hint";return a},qb=function(a){var b=a[H](";"),c=kb[b.shift()],b=c&&c(b);if(!b)throw"Bad hint:"+a;return b},rb=/^[\/_a-zA-Z0-9,.\-!:=]+$/,sb=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,tb=/\/cb=/g,ub=/\/\//g,vb=function(a){var b=a[ja](ub),c=a[ja](tb);return!!c&&1===c[G]&&sb[z](a)&&rb[z](a)&&
!!b&&1===b[G]},xb=function(a){"loading"!=S[ka]?wb(a):S.write("<"+mb+' src="'+encodeURI(a)+'"></'+mb+">")},wb=function(a){var b=S[D](mb);b[E]("src",a);b.async="true";(a=S[la](mb)[0])?a[P].insertBefore(b,a):(S.head||S.body||S.documentElement)[ea](b)},yb=function(a,b){var c=b&&b[Z.j];if(c)for(var e=0;e<lb[G];e++){var d=lb[e][0],f=lb[e][1];f&&V(c,d)&&f(c[d],a,b)}},Ab=function(a,b){zb(function(){var c;c=b===$a(xa[N])?T(X,"_",U()):U();c=T(cb(b),"_",c);a(c)})},Cb=function(a,b){var c=b||{};"function"==typeof b&&
(c={},c[Z.c]=b);yb(a,c);var e=a?a[H](":"):[],d=c[Z.o]||pb(),f=T(Y,"ah",U());if(!f["::"]||!e[G])Bb(e||[],c,d);else{for(var l=[],h=s;h=e.shift();){var m=h[H]("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||d,g=l[G]&&l[l[G]-1]||s,k=g;if(!g||g.hint!=m)k={hint:m,p:[]},l[x](k);k.p[x](h)}var p=l[G];if(1<p){var y=c[Z.c];y&&(c[Z.c]=function(){0==--p&&y()})}for(;e=l.shift();)Bb(e.p,c,e.hint)}},Bb=function(a,b,c){a=Ba(a)||[];var e=b[Z.c],d=b[Z.v],f=b[Z.TIMEOUT],l=b[Z.w],h=s,m=t;if(f&&!l||!f&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
var g=T(cb(c),"r",[]).sort(),k=T(cb(c),"L",[]).sort(),p=[][B](g),y=function(a,b){if(m)return 0;R.clearTimeout(h);k[x][O](k,q);var e=((X||{}).config||{})[ua];e?e(d):d&&T(Y,"cu",[])[x](d);if(b){jb("me0",a,p);try{Ab(b,c)}finally{jb("me1",a,p)}}return 1};0<f&&(h=R.setTimeout(function(){m=r;l()},f));var q=ob(a,k);if(q[G]){var q=ob(a,g),I=T(Y,"CP",[]),J=I[G];I[J]=function(a){if(!a)return 0;jb("ml1",q,p);var b=function(b){I[J]=s;y(q,a)&&bb(function(){e&&e();b()})},c=function(){var a=I[J+1];a&&a()};0<J&&
I[J-1]?I[J]=function(){b(c)}:b(c)};if(q[G]){var Za="loaded_"+Y.I++;X[Za]=function(a){I[J](a);X[Za]=s};a=qb(c);a=a[A]("__features__",nb(q))[A](/\/$/,"")+(g[G]?"/ed=1/exm="+nb(g):"")+("/cb=gapi."+Za);if(!vb(a))throw"Bad URL "+a;g[x][O](g,q);jb("ml0",q,p);b[Z.A]||R.___gapisync?xb(a):wb(a)}else I[J](ya)}else y(q)&&e&&e()};var zb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Cb("debug_error",function(){u.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return zb(function(){return Cb(a,b)})};var Db=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},Eb=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Fb=function(a){return"object"===typeof a&&/\[native code\]/[z](a[x])},Gb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Fb(a[c])&&!Fb(b[c])?Gb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Fb(b[c])?[]:{},Gb(a[c],b[c])):a[c]=b[c])},Hb=function(a){if(a&&!/^\s+$/[z](a)){for(;0==a[qa](a[G]-
1);)a=a[ra](0,a[G]-1);var b;try{b=u[ia].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(e){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return Eb();a=a[H]("/");for(var b=Eb(),c=0,e=a[G];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[G]&&b!==n?b:n},Ib=function(){Eb(r);var a=u.___gcfg,b=Db("cu");if(a&&a!==u.___gu){var c={};Gb(c,a);b[x](c);u.___gu=
a}var a=Db("cu"),e=v.scripts||v[la]("script")||[],c=[],d=[];d[x][O](d,Db("us"));for(var f=0;f<e[G];++f)for(var l=e[f],h=0;h<d[G];++h)l.src&&0==l.src[C](d[h])&&c[x](l);0==c[G]&&(0<e[G]&&e[e[G]-1].src)&&c[x](e[e[G]-1]);for(e=0;e<c[G];++e)c[e][M]("gapi_processed")||(c[e][E]("gapi_processed",r),(d=c[e])?(f=d.nodeType,d=3==f||4==f?d.nodeValue:d.textContent||d.innerText||d.innerHTML||""):d=n,(d=Hb(d))&&a[x](d));e=Db("cd");a=0;for(c=e[G];a<c;++a)Gb(Eb(),e[a]);e=Db("ci");a=0;for(c=e[G];a<c;++a)Gb(Eb(),e[a]);
a=0;for(c=b[G];a<c;++a)Gb(Eb(),b[a])};var Jb=function(){var a=u.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),T(Y,"ci",[])[x](a),u.__GOOGLEAPIS=n)};var Kb=u.console;var Lb=T(Y,"rw",U()),Mb=function(a,b){var c=Lb[a];c&&c.state<b&&(c.state=b)};var Nb=function(a){var b;a[ja](/^https?%3A/i)&&(b=ca(a));return Ra(v,b?b:a)},Ob=function(a){a=a||"canonical";for(var b=v[la]("link"),c=0,e=b[G];c<e;c++){var d=b[c],f=d[M]("rel");if(f&&f[wa]()==a&&(d=d[M]("href")))if((d=Nb(d))&&d[ja](/^https?:\/\/[\w\-\_\.]+/i)!=s)return d}return u[K][N]};var Pb;var Qb=function(){};var Rb=function(){this.b=[];this.l=[];this.t=[];this.i=[];this.i[0]=128;for(var a=1;64>a;++a)this.i[a]=0;this.reset()};(function(){function a(){}a.prototype=Qb[na];Rb.F=Qb[na];Rb.prototype=new a})();Rb[na].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.n=this.g=0};
var Sb=function(a,b,c){c||(c=0);var e=a.t;if("string"==typeof b)for(var d=0;16>d;d++)e[d]=b[qa](c)<<24|b[qa](c+1)<<16|b[qa](c+2)<<8|b[qa](c+3),c+=4;else for(d=0;16>d;d++)e[d]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(d=16;80>d;d++){var f=e[d-3]^e[d-8]^e[d-14]^e[d-16];e[d]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var l=a.b[2],h=a.b[3],m=a.b[4],g,d=0;80>d;d++)40>d?20>d?(f=h^c&(l^h),g=1518500249):(f=c^l^h,g=1859775393):60>d?(f=c&l|h&(c|l),g=2400959708):(f=c^l^h,g=3395469782),f=(b<<5|b>>>27)+
f+m+g+e[d]&4294967295,m=h,h=l,l=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+l&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+m&4294967295};Rb[na].update=function(a,b){b===n&&(b=a[G]);for(var c=b-64,e=0,d=this.l,f=this.g;e<b;){if(0==f)for(;e<=c;)Sb(this,a,e),e+=64;if("string"==typeof a)for(;e<b;){if(d[f]=a[qa](e),++f,++e,64==f){Sb(this,d);f=0;break}}else for(;e<b;)if(d[f]=a[e],++f,++e,64==f){Sb(this,d);f=0;break}}this.g=f;this.n+=b};var Zb=function(){var a;Tb?(a=new R.Uint32Array(1),Ub.getRandomValues(a),a=Number("0."+a[0])):(a=Vb,a+=parseInt(Wb[ma](0,20),16),Wb=Xb(Wb),a/=Yb+Math.pow(16,20));return a},Ub=R.crypto,Tb=t,$b=0,ac=0,Vb=1,Yb=0,Wb="",bc=function(a){a=a||R.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[F]()%1E6);Vb=Vb*b%Yb;0<$b&&++ac==$b&&Ta("mousemove",bc,"remove","de")},Xb=function(a){var b=new Rb;b[ua](a);a=[];var c=8*b.n;56>b.g?b[ua](b.i,56-b.g):b[ua](b.i,64-(b.g-56));for(var e=63;56<=
e;e--)b.l[e]=c&255,c/=256;Sb(b,b.l);for(e=c=0;5>e;e++)for(var d=24;0<=d;d-=8)a[c]=b.b[e]>>d&255,++c;b="";for(e=0;e<a[G];e++)b+="0123456789ABCDEF".charAt(Math.floor(a[e]/16))+"0123456789ABCDEF".charAt(a[e]%16);return b},Tb=!!Ub&&"function"==typeof Ub.getRandomValues;Tb||(Yb=1E6*(screen[ga]*screen[ga]+screen[va]),Wb=Xb(S.cookie+"|"+S[K]+"|"+(new Date)[F]()+"|"+Math.random()),$b=$("random/maxObserveMousemove")||0,0!=$b&&Ta("mousemove",bc,"add","at"));var cc=function(){var a=Y.onl;if(!a){a=U();Y.onl=a;var b=U();a.e=function(a){var e=b[a];e&&(delete b[a],e())};a.a=function(a,e){b[a]=e};a.r=function(a){delete b[a]}}return a},dc=function(a,b){var c=b.onload;return"function"===typeof c?(cc().a(a,c),c):s},ec=function(a){Ka(/^\w+$/[z](a),"Unsupported id - "+a);cc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},fc=function(a){cc().r(a)};var gc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},hc={allowtransparency:r,onload:r},ic=0,jc=function(a){Ka(!a||Sa[z](a),"Illegal url for new iframe - "+a)},kc=function(a,b,c,e,d){jc(c.src);var f,l=dc(e,c),h=l?ec(e):"";try{f=a[D]('<iframe frameborder="'+Ha(c.frameborder)+'" scrolling="'+Ha(c.scrolling)+'" '+h+' name="'+Ha(c.name)+'"/>')}catch(m){f=a[D]("iframe"),l&&(f.onload=function(){f.onload=
s;l[pa](this)},fc(e))}for(var g in c)a=c[g],"style"===g&&"object"===typeof a?W(a,f[L]):hc[g]||f[E](g,w(a));g=d&&d.beforeNode||s;!g&&(!d||!d.dontclear)&&Xa(b);b.insertBefore(f,g);f=g?g.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=r);return f};var lc=/^:[\w]+$/,mc=/:([a-zA-Z_]+):/g,nc=function(){var a=$("googleapis.config/sessionIndex");a==s&&(a=u.__X_GOOG_AUTHUSER);if(a==s){var b=u.google;b&&(a=b.authuser)}a==s&&(a=n,a==s&&(a=u[K][N]),a=a?La(a,"authuser")||s:s);return a==s?s:w(a)},oc=function(a,b){if(!Pb){var c=$("iframes/:socialhost:"),e=nc()||"0",d=nc();Pb={socialhost:c,session_index:e,session_prefix:d!==n&&d!==s&&""!==d?"u/"+d+"/":"",im_prefix:$("googleapis.config/signedIn")===t?"_/im/":""}}return Pb[b]||""};var pc={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},qc="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),rc=T(Y,"WI",U()),sc=["style","data-gapiscan"],tc=function(a){var b=n;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},uc=function(){};var vc,wc,xc,yc,zc,Ac=/(?:^|\s)g-((\S)*)(?:$|\s)/;vc=T(Y,"SW",U());wc=T(Y,"SA",U());xc=T(Y,"SM",U());yc=T(Y,"FW",[]);zc=s;
var Cc=function(a,b){Bc(n,t,a,b)},Bc=function(a,b,c,e){hb("ps0",r);c=("string"===typeof c?v[ha](c):c)||S;var d;d=S.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:Ia(vc)[B](Ia(wc))[B](Ia(xc));for(var f=[],l=0;l<d[G];l++){var h=d[l];f[x](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(f[Q](","))}else d=c[la]("*");c=U();for(f=0;f<d[G];f++){l=d[f];var m=l,h=e,g=m.nodeName[wa](),k=n;m[M]("data-gapiscan")?h=s:(0==g[C]("g:")?k=g[ma](2):(m=(m=w(m.className||m[M]("class")))&&Ac[fa](m))&&(k=m[1]),h=k&&(vc[k]||
wc[k]||xc[k])&&(!h||k===h)?k:s);h&&(l[E]("data-gapiscan",r),T(c,h,[])[x](l))}if(b)for(var p in c){b=c[p];for(e=0;e<b[G];e++)b[e][E]("data-onload",r)}for(var y in c)yc[x](y);hb("ps1",r);((p=yc[Q](":"))||a)&&X.load(p,a);if(Dc(zc||{}))for(var q in c){a=c[q];y=0;for(b=a[G];y<b;y++)a[y].removeAttribute("data-gapiscan");Ec(q)}else{e=[];for(q in c){a=c[q];y=0;for(b=a[G];y<b;y++){l=a[y];d=q;h=f=l;l=U();k=0!=h.nodeName[wa]()[C]("g:");m=0;for(g=h[ta][G];m<g;m++){var I=h[ta][m],J=I.name,I=I.value;0<=Aa[pa](sc,
J)||(k&&0!=J[C]("data-")||"null"===I)||(k&&(J=J[ma](5)),l[J[wa]()]=I)}k=l;h=h[L];(m=tc(h&&h[va]))&&(k.height=w(m));(h=tc(h&&h[ga]))&&(k.width=w(h));Fc(d,f,l,e,b)}}Gc(p,e)}},Hc=function(a){var b=T(X,a,{});b.go||(b.go=function(b){return Cc(b,a)},b.render=function(b,e){var d=e||{};da(d,a);var f=d.type;delete d.type;var l=("string"===typeof b?v[ha](b):b)||n;if(l){var h={},m;for(m in d)V(d,m)&&(h[m[wa]()]=d[m]);h.rd=1;d=[];Fc(f,l,h,d,0);Gc(f,d)}else Kb&&Kb.log&&Kb.log("string"==="gapi."+f+".render: missing element "+
typeof b?b:"")})},Ic=function(a){vc[a]=r},Jc=function(a){wc[a]=r},Kc=function(a){xc[a]=r};var Ec=function(a,b){var c=T(Y,"watt",U())[a];b&&c?(c(b),(c=b.iframeNode)&&c[E]("data-gapiattached",r)):X.load(a,function(){var c=T(Y,"watt",U())[a],d=b&&b.iframeNode;!d||!c?(0,X[a].go)(d&&d[P]):(c(b),d[E]("data-gapiattached",r))})},Dc=function(){return t},Gc=function(){},Fc=function(a,b,c,e,d){switch(Lc(b,a)){case 0:a=xc[a]?a+"_annotation":a;e={};e.iframeNode=b;e.userParams=c;Ec(a,e);break;case 1:var f;if(b[P]){var l=r;c.dontclear&&(l=t);delete c.dontclear;var h,m,g;m=g=a;"plus"==a&&c[sa]&&(g=a+
"_"+c[sa],m=a+"/"+c[sa]);(g=$("iframes/"+g+"/url"))||(g=":socialhost:/_/widget/render/"+m);m=Ra(S,g[A](mc,oc));g={};W(c,g);g.hl=$("lang")||$("gwidget/lang")||"en-US";g.origin=u[K].origin||u[K].protocol+"//"+u[K].host;g.exp=$("iframes/"+a+"/params/exp");var k=$("iframes/"+a+"/params/location");if(k)for(var p=0;p<k[G];p++){var y=k[p];g[y]=R[K][y]}switch(a){case "plus":case "follow":k=g[N];p=c[sa]?n:"publisher";k=(k="string"==typeof k?k:n)?Nb(k):Ob(p);g.url=k;delete g[N];break;case "plusone":case "recobox":g.url=
c[N]?Nb(c[N]):Ob();k=c.db;p=$();k==s&&p&&(k=p.db,k==s&&(k=p.gwidget&&p.gwidget.db));g.db=k||n;k=c.ecp;p=$();k==s&&p&&(k=p.ecp,k==s&&(k=p.gwidget&&p.gwidget.ecp));g.ecp=k||n;delete g[N];break;case "signin":g.url=Ob()}Y.ILI&&(g.iloader="1");delete g["data-onload"];delete g.rd;g.gsrc=$("iframes/:source:");k=$("inline/css");"undefined"!==typeof k&&(0<d&&k>=d)&&(g.ic="1");k=/^#|^fr-/;d={};for(h in g)V(g,h)&&k[z](h)&&(d[h[A](k,"")]=g[h],delete g[h]);h=[][B](qc);(k=$("iframes/"+a+"/methods"))&&("object"===
typeof k&&za[z](k[x]))&&(h=h[B](k));for(var q in c)if(V(c,q)&&/^on/[z](q)&&("plus"!=a||"onconnect"!=q))h[x](q),delete g[q];delete g.callback;d._methods=h[Q](",");h=Qa(m,g,d);q={allowPost:1,attributes:pc};q.dontclear=!l;l={};l.userParams=c;l.url=h;da(l,a);c.rd?g=b:(g=v[D]("div"),b[E]("data-gapistub",r),g[L].cssText="position:absolute;width:100px;left:-10000px;",b[P].insertBefore(g,b));l.siteElement=g;g.id||(b=g,T(rc,a,0),m="___"+a+"_"+rc[a]++,b.id=m);b=U();b[">type"]=a;W(c,b);m=h;c=g;h=q||{};b=h[ta]||
{};Ka(!h.allowPost||!b.onload,"onload is not supported by post iframe");q=b=m;lc[z](b)&&(q=$("iframes/"+q[ra](1)+"/url"),Ka(!!q,"Unknown iframe url config for - "+b));m=Ra(S,q[A](mc,oc));b=c.ownerDocument||S;g=0;do q=h.id||["I",ic++,"_",(new Date)[F]()][Q]("");while(b[ha](q)&&5>++g);Ka(5>g,"Error creating iframe id");g={};d={};W(h.queryParams||{},g);W(h.fragmentParams||{},d);k=U();k.id=q;k.parent=b[K].protocol+"//"+b[K].host;p=La(b[K][N],"id","");y=La(b[K][N],"pfname","");(p=p?y+"/"+p:"")&&(k.pfname=
p);W(k,d);(k=La(m,"rpctoken")||g.rpctoken||d.rpctoken)||(k=d.rpctoken=h.rpctoken||w(Math.round(1E8*Zb())));h.rpctoken=k;p=b[K][N];k=U();(y=La(p,"_bsh",Y.bsh))&&(k._bsh=y);(p=$a(p))&&(k.jsh=p);h.hintInFragment?W(k,d):W(k,g);m=Qa(m,g,d,h.paramsSerializer);d=U();W(gc,d);W(h[ta],d);d.name=d.id=q;d.src=m;if((h||{}).allowPost&&2E3<m[G]){g=Na(m);d.src="";d["data-postorigin"]=m;m=kc(b,c,d,q);-1!=navigator.userAgent[C]("WebKit")&&(f=m.contentWindow.document,f.open(),d=f[D]("div"),k={},p=q+"_inner",k.name=
p,k.src="",k.style="display:none",kc(b,d,k,p,h));d=(h=g.d[0])?h[H]("&"):[];h=[];for(k=0;k<d[G];k++)p=d[k][H]("=",2),h[x]([ca(p[0]),ca(p[1])]);g.d=[];d=Oa(g);g=b[D]("form");g.action=d;g.method="POST";g.target=q;g[L].display="none";for(q=0;q<h[G];q++)d=b[D]("input"),da(d,"hidden"),d.name=h[q][0],d.value=h[q][1],g[ea](d);c[ea](g);g.submit();g[P][oa](g);f&&f.close();f=m}else f=kc(b,c,d,q,h);l.iframeNode=f;l.id=f[M]("id");f=l.id;c=U();c.id=f;c.userParams=l.userParams;c.url=l.url;da(c,l.type);c.state=1;
Lb[f]=c;f=l}else f=s;f&&((l=f.id)&&e[x](l),Ec(a,f))}},Lc=function(a,b){if(a&&1===a.nodeType&&b)if(xc[b]){if(Ya[a.nodeName[wa]()]){var c=a.innerHTML;return c&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}}else{if(wc[b])return 0;if(vc[b])return 1}return s};T(X,"platform",{}).go=Cc;var Dc=function(a){for(var b=[Z.j,Z.q,Z.o],c=0;c<b[G]&&a;c++)a=a[b[c]];b=$a(xa[N]);return!a||0!=a[C]("n;")&&0!=b[C]("n;")&&a!==b},Gc=function(a,b){Mc(a,b)},Ua=function(a){Bc(a,r)},Nc=function(a,b){for(var c=b||[],e=0;e<c[G];++e)a(c[e]);for(e=0;e<c[G];e++)Hc(c[e])};lb[x]([Z.B,function(a,b,c){zc=c;b&&yc[x](b);Nc(Ic,a);Nc(Jc,c[Z.j].annotation);Nc(Kc,c[Z.j].bimodal);Jb();Ib();if("explicit"!=$("parsetags")){ab(a);var e;if(c&&(a=c[Z.c]))e=Ja(a),delete c[Z.c];Wa(function(){Ua(e)})}}]);var Oc=function(a){a=(a=Lb[a])?a.oid:n;if(a){var b=S[ha](a);b&&b[P][oa](b);delete Lb[a];Oc(a)}},uc=function(a,b,c){if(c[ga]&&c[va]){a[L].cssText="";a:{var e=c||{};if((c=Y.ssfn)&&c(n)){if("number"===typeof Y.ucs)break a;var d=b.id;if(d){c=(c=Lb[d])?c.state:n;if(1===c||4===c)break a;Oc(d)}}c=e[ga];var e=e[va],f=a[L];f.textIndent="0";f.margin="0";f.padding="0";f.background="transparent";f.borderStyle="none";f.cssFloat="none";f.styleFloat="none";f.lineHeight="normal";f.fontSize="1px";f.verticalAlign=
"baseline";a=a[L];a.display="inline-block";f=b[L];f.position="static";f.left=0;f.top=0;f.visibility="visible";c&&(a.width=f.width=c+"px");e&&(a.height=f.height=e+"px");d&&Mb(d,3)}b["data-csi-wdt"]=(new Date)[F]()}};var Pc=/^\{h\:'/,Qc=/^!_/,Mc=function(a,b){function c(){Ta("message",e,"remove","de")}function e(e){var l=e.data,h=e.origin;if(Rc(l,b)){var m=d;d=t;m&&hb("rqe");Sc(a,function(){m&&hb("rqd");c();for(var a=T(Y,"RPMQ",[]),b=0;b<a[G];b++)a[b]({data:l,origin:h})})}}if(!(0===b[G]||!u[ia]||!u[ia].parse)){var d=r;Ta("message",e,"add","at");Cb(a,c)}},Rc=function(a,b){a=w(a);if(Pc[z](a))return r;a=a[A](Qc,"");if(!/^\{/[z](a))return t;try{var c=u[ia].parse(a)}catch(e){return t}if(!c)return t;var d=c.f;if(c.s&&
d&&-1!=Aa[pa](b,d)){if("_renderstart"===c.s){var c=c.a&&c.a[1],f=S[ha](d);Mb(d,2);(d=Lb[d])&&(d.args=c);c&&f&&uc(f[P],f,c)}return r}return t},Sc=function(a,b){Cb(a,b)};hb("bs0",r,u.gapi._bs);hb("bs1",r);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[102,103,100,71,96,97,79,45,17,86,81,61,30],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","persist":true},"isLoggedIn":true,"isPlusUser":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"shortlists":{"url":"?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.Y3In_W4Itv8.O/m\u003d__features__/am\u003dQQ/rt\u003dj/d\u003d1/rs\u003dAItRSTOyEOMKD-NmdZUrhxHhwd0BBWeNMw","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"ffff6ebccb5263caca4b12aec565f8c0f5c36701","dpo":false},"platform":["additnow","identity","panoembed","plus","plusone","recobox","savetodrive","shortlists","savetowallet","notifications","hangout"],"fp":"ffff6ebccb5263caca4b12aec565f8c0f5c36701","annotation":["autocomplete","profile","interactivepost"],"bimodal":["signin"]}});