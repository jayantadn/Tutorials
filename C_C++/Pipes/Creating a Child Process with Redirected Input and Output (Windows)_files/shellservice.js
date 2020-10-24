(function(n){function t(t){var f=n(this),r=null,u=[],e=null,o=null,i=n.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",toleranceUp:75,toleranceDown:75,enter:n.noop,exit:n.noop,activate:n.noop,deactivate:n.noop,exitMenu:n.noop},t),c=3,l=300,a=function(n){u.push({x:n.pageX,y:n.pageY});u.length>c&&u.shift()},v=function(){o&&clearTimeout(o);i.exitMenu(this)&&(r&&i.deactivate(r),r=null)},y=function(){o&&clearTimeout(o);i.enter(this);h(this)},p=function(){i.exit(this)},w=function(){s(this)},s=function(n){n!=r&&(r&&i.deactivate(r),i.activate(n),r=n)},h=function(n){var t=b();t?o=setTimeout(function(){h(n)},t):s(n)},b=function(){function v(n,t){return(t.y-n.y)/(t.x-n.x)}var h,c;if(!r||!n(r).is(i.submenuSelector))return 0;var t=f.offset(),y={x:t.left,y:t.top-i.toleranceUp},w={x:t.left+f.outerWidth(),y:y.y-i.toleranceUp},p={x:t.left,y:t.top+f.outerHeight()+i.toleranceDown},a={x:t.left+f.outerWidth(),y:p.y+i.toleranceDown},s=u[u.length-1],o=u[0];if(!s||(o||(o=s),o.x<t.left||o.x>a.x||o.y<t.top||o.y>a.y)||e&&s.x==e.x&&s.y==e.y)return 0;h=w;c=a;i.submenuDirection=="left"?(h=p,c=y):i.submenuDirection=="below"?(h=a,c=p):i.submenuDirection=="above"&&(h=y,c=w);var b=v(s,h),k=v(s,c),d=v(o,h),g=v(o,c);return b<d&&k>g?(e=s,l):(e=null,0)};f.mouseleave(v).find(i.rowSelector).mouseenter(y).mouseleave(p).click(w);n(document).mousemove(a)}n.fn.menuAim=function(n){return this.each(function(){t.call(this,n)}),this}})(jQuery);
"use strict";(function(n){function t(){var t=this;t.shellUserDropdown=null;t.shellNavDropdown=null;t.shellNavTab=null;t.shellToggle=null;t.breakpoint=899;t.resizeTimeout=null;t.resizeThrottler=function(){t.resizeTimeout||(t.resizeTimeout=setTimeout(function(){t.resizeTimeout=null;t.resizeHandler()},250))};t.resizeHandler=function(){t.shellNavDropdown.adjustMenuPane()};t.matchesSmall=function(){return n(".shell-rwd").length===0?!1:!window.msCommonShellIE8&&window.matchMedia?window.matchMedia("(max-width: "+t.breakpoint+"px)").matches:n(window).width()<t.breakpoint};t.matchesLarge=function(){return n(".shell-rwd").length===0?!0:!window.msCommonShellIE8&&window.matchMedia?window.matchMedia("(min-width: "+t.breakpoint+"px)").matches:n(window).width()>=t.breakpoint};t.init=function(){t.shellUserDropdown=new i(t);t.shellNavDropdown=new r(t);t.shellNavTab=new u(t);t.shellToggle=new f(t);n(window).resize(t.resizeThrottler);n(".shell-header-dropdown-content").menuAim({rowSelector:"> dl",activate:t.shellNavTab.display,toleranceUp:500,toleranceDown:300})};t.init()}function i(t){var i=this;i.shellUI=t;i.open=function(){n(".shell-header-user").addClass("active")};i.close=function(){n(".shell-header-user").removeClass("active")};i.toggle=function(t){n(t).closest(".shell-header-user").toggleClass("active")};i.init=function(){n(".shell-header-user-label a").on("click.shellUserDropdown",function(){return i.toggle(this),!1});n(document).on("click.shellUserDropdownOutside",function(t){n(t.target).closest(".shell-header-user").length||i.close()});n(document).on("keyup.shellUserDropdownOutside",function(n){n.keyCode==27&&i.close()})};i.init()}function r(t){var i=this;i.shellUI=t;i.open=function(t){var u;if(t.addClass("active"),this.shellUI.matchesSmall())t.children(".shell-header-dropdown-content").attr("style","");else if(i.shellUI.matchesLarge())if(t.hasClass("horizontalLayout")){var f=t.data("navcontainer"),r=n("#"+f),e=r.siblings(".shell-header-horizontalL2-container");r.hasClass("active")||(u=r.find(".shell-header-dropdown-label:first .top-level-link-text"),u.length&&u[0].click(),e.removeClass("active"),r.addClass("active"))}else i.shellUI.shellNavTab.displayFirst(t),i.shellUI.shellNavTab.displayImg(t),i.offset(t)};i.offset=function(t){var e=t.closest(".shell-header-wrapper"),r=t.find(".shell-header-dropdown-content"),l="left",i=0,u=0,o=n(".shell-rwd").length>0,f=o?n("body").width():n(window).width(),a=n("body").css("direction")==="rtl",s,h,c;a?(l="right",i=t.offset().left+t.outerWidth()-(e.offset().left+r.outerWidth()),s=t.offset().left+t.outerWidth()-i,u=f-s-(s-r.outerWidth())):(i=(o?e.offset().left+e.outerWidth():f)-(t.offset().left+r.outerWidth()),h=t.offset().left+i,u=h-(f-h-r.outerWidth()));(u<0||!o)&&(i-=u/2);a?(c=f-t.offset().left-t.outerWidth(),i=-i>c?-c:i):i=-i>t.offset().left?-t.offset().left:i;r.css(l,i<0?i:"")};i.adjustMenuPaneSize=function(t,i){var o,f,r,h,e,u,s;if(this.shellUI.matchesSmall())n(i[0]).attr("style","");else if(t.hasClass("shell-tab-mcol")&&(o=t.children(".shell-header-dropdown-tab-label"),f=t.children(".shell-header-dropdown-tab-content"),o&&f&&(i.width(o.outerWidth()+f.outerWidth()),r=f.children(),r.length>0))){for(h=r[0].offsetTop,e=0,u=0;u<r.length;u++)s=r[u].offsetTop+r[u].clientHeight,s>e&&(e=s);i.height(e-h+20)}};i.adjustMenuPane=function(){var t=n(".shell-header-dropdown.active");t.length&&(i.adjustMenuPaneSize(t.find(".shell-header-dropdown-tab.active"),t.children(".shell-header-dropdown-content")),i.offset(t))};i.close=function(n){n.removeClass("active")};i.closeAll=function(){n(".shell-header-dropdown:not(.horizontalLayout)").removeClass("active")};i.toggle=function(t){var r=n(t).closest(".shell-header-dropdown"),u=r.siblings(".shell-header-dropdown"),f=r.siblings(".shell-header-dropdown-label");r.length&&(r.hasClass("active")&&!r.hasClass("horizontalLayout")?i.close(r):(f.removeClass("active"),u.removeClass("active"),i.open(r)))};i.init=function(){n(".shell-header-dropdown-label a:not(.shell-header-direct-link)").click(function(){i.toggle(this)});n(document).on("click.shellNavDropdownOutside",function(t){n(t.target).closest(".shell-header-nav").length||i.closeAll()});n(document).on("keyup.shellNavDropdownOutside",function(n){n.keyCode==27&&i.closeAll()})};i.init()}function u(t){var i=this;i.shellUI=t;i.display=function(r){var u,e,f;i.shellUI.matchesLarge()&&(u=n(r).closest(".shell-header-dropdown-tab"),e=u.siblings(".shell-header-dropdown-tab"),u.hasClass("active")||(e.removeClass("active"),u.addClass("active")),f=u.closest(".shell-header-dropdown-content"),t.shellNavDropdown.adjustMenuPaneSize(u,f),u.find(".shell-header-dropdown-tab-content").length?(f.removeClass("shell-header-dropdown-content-notab"),i.displayImg(u)):f.hasClass("shell-header-dropdown-content-notab")||f.addClass("shell-header-dropdown-content-notab"))};i.displayImg=function(t){t.find("img[data-src]").attr("src",function(){return n(this).attr("data-src")}).removeAttr("data-src")};i.toggle=function(t){var i=n(t).closest(".shell-header-dropdown-tab"),r=i.siblings(".shell-header-dropdown-tab");i.hasClass("active")?i.removeClass("active"):(r.removeClass("active"),i.addClass("active"))};i.displayFirst=function(n){i.display(n.find(".shell-header-dropdown-tab:first-child .shell-header-dropdown-tab-label a"))};i.init=function(){n(".shell-header-dropdown-tab-label a").on("focus.shellNavTab",function(){i.shellUI.matchesLarge()&&i.display(this)}).on("click.shellNavTab",function(){return n(this).closest(".shell-header-dropdown-tab-label").hasClass("shell-header-L2menu-direct-link")?!0:(i.shellUI.matchesSmall()&&i.toggle(this),!1)})};i.init()}function f(t){var i=this;i.shellUI=t;i.init=function(){n(".shell-header-toggle-search").on("click.shellToggle",function(){var t=n(".shell-header-search");t.toggleClass("expanded");t.hasClass("expanded")&&t.find('input[type="search"]').focus()});n(".shell-header-toggle-menu").on("click.shellToggle",function(){n(".shell-header-user, .shell-header-nav").toggleClass("expanded")})};i.init()}n(function(){window.shellUI=new t})})(jQuery),function(n){function f(n){for(var r=document.cookie.split("; "),i,u,t=0;t<r.length;t++)if(i=r[t].split("="),u=o(i.shift()),u===n)return o(i.join("="));return null}function e(n,t,i){var u,r;i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toUTCString()):u="";window.document.cookie=n+"="+t+u+"; path=/;"}function o(n){var t=decodeURIComponent(n.replace("/+/g"," "));return t.indexOf('"')===0&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),t}function h(n,t){var i,r;t=t||{};i="MECONTROLLOG:"+n+",";for(r in t)i+=r+"="+t[r]+",";console&&console.log(i)}function c(t){var r=t.elements[0];if(!n.trim(r.value).length)return r.focus(),!1;if(i&&i.onSearch)i.onSearch(t);return!0}function l(t){var i=n(document.getElementById(t)),r,e,u,f;i.length&&(i.addClass("current"),i.hasClass("horizontalLayout")?i.addClass("active"):(i.parents(".shell-header-dropdown-tab").find(".shell-header-dropdown-tab-label").addClass("current"),r=i.parents(".shell-header-dropdown"),r.hasClass("horizontalLayout")&&(r.addClass("active"),e=r.attr("data-navcontainer"),u=n(document.getElementById(e)),u.length&&(u.siblings(".shell-header-horizontalL2-container").removeClass("active"),u.addClass("active"))),r.find(".shell-header-dropdown-label").addClass("current")));i=n(document.getElementById(t+"_HL"));i.length&&(i.addClass("current"),f=i.parents(".shell-header-horizontalL2-container"),f.siblings(".shell-header-horizontalL2-container").removeClass("active"),f.addClass("active"))}function a(){var i=t,s,r,f,e,o;if(i){s='<div><div class="msame_Header"><a style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 64px; font-family: \'Segoe UI\'; font-size: 86%; color: rgb(80,80,80); padding: 0 5px;"><\/a><\/div><\/div>';r=i.rpData.preferredIdp==="msa"?i.rpData.msaInfo:i.rpData.aadInfo;i.userData.authenticatedState==1?(f=i.signOutStr||"Sign out",e=r.signOutUrl):(f=i.signInStr||"Sign in",e=i.rpData.preferredIdp==="msa"?r.signInUrl:r.signInUrlPlaceHolder);o=n(s);n(".msame_Header a",o).attr("href",e).text(f);n("#"+i.containerId).html(o);i.events.onEventLog("loadMeControl",{type:"qos",success:"0",errorCode:"LoadFailed: Reverted to fallback",duration:u})}}function s(i){if(i&&(t=n.extend(!0,{},t,i)),window.MSA&&window.MSA.MeControl)window.MSA.MeControl.Loader.load(t);else{var r=setTimeout(function(){a()},u);window.onMeControlReadyToLoad=function(){t.events.onEventLog("loadMeControl",{type:"qos",success:"1"});clearTimeout(r);window.onMeControlReadyToLoad=null;window.MSA.MeControl.Loader.load(t)}}}function v(n){var t=document.createElement("a");return t.href=n,t.href}function y(u){u&&(u.rpData.aadInfo&&u.rpData.aadInfo.siteUrl&&(u.rpData.aadInfo.siteUrl=v(u.rpData.aadInfo.siteUrl)),u.rpData.msaInfo&&u.rpData.msaInfo.meUrl&&(u.rpData.msaInfo.meUrl=u.rpData.msaInfo.meUrl+"&wreply="+encodeURIComponent(window.location.protocol+"//"+window.location.host)),u.userData={idp:window.msCommonShell.SupportedAuthIdp.MSA,firstName:null,lastName:null,memberName:null,cid:null,authenticatedState:window.msCommonShell.NotSignedIn},u.events={onEventLog:function(t,r){if(u.debug&&h(t,r),t=="DropdownOpen"&&n(".shell-header-dropdown:not(.horizontalLayout)").removeClass("active"),i&&i.onEventLog)i.onEventLog("MeControl_"+t,r)}},r=!1,t=n.extend(!0,{},u,t||{}))}function p(t){var r,u;meControlInitOptions&&(y(meControlInitOptions),meControlInitOptions.lcaDisclaimerEnabled&&(r=n("#lca-cookie-notification"),f("msstore_hide_cn")!=="true"&&r.addClass("shell-notification-active"),n("#lca-disclaimer-close").click(function(){e("msstore_hide_cn","true",365);r.removeClass("shell-notification-active")})));t!=null?(t.events!=null&&(i=t.events),t.currentMenuItemId!=null&&l(t.currentMenuItemId),t.searchSuggestCallback!=null&&(u=window.msCommonShellSuggestion,u.initialize(t.searchSuggestCallback)),s(t.meControlOptions)):s();n(".shell-header-horizontalL2-container.active").length||n(".shell-header-horizontalL2-container").first().addClass("active")}function w(){return r}var t=null,r=!1,u=5e3,i=null;window.msCommonShell={AuthState:{SignedIn:1,SignedInIdp:2,NotSignedIn:3},SupportedAuthIdp:{MSA:"msa",AAD:"aad"},meControlOptions:function(){return t},isUserSignedIn:w,getCookie:f,setCookie:e,load:function(n){p(n)},onSearch:function(n){return c(n)}};window.onShellReadyToLoad&&window.onShellReadyToLoad()}(jQuery),function(n){window.msCommonShellSuggestion={initialize:function(t){var i=n("#cli_shellHeaderSearchInput"),r=n("#cli_searchSuggestionsResults"),u=n("#cli_searchSuggestionsContainer"),f="";i.bind("input",function(){var n=i.val();n!=f&&t({text:n,response:window.msCommonShellSuggestion.displayResults});f=n});i.keydown(function(n){function i(n){t.removeClass("selected");n.addClass("selected")}var t=r.find(".selected"),u=t.length>0;switch(n.keyCode){case 38:u?i(t.prev()):i(r.children().last());n.preventDefault();break;case 40:u?i(t.next()):i(r.children().first());n.preventDefault();break;case 13:u&&(t.click(),n.preventDefault())}});i.focus(function(){r.children().length>0&&u.addClass("visible")});i.blur(function(){setTimeout(function(){u.removeClass("visible")},200)})},displayResults:function(t){var r=this,u=n("#cli_shellHeaderSearchInput"),i=n("#cli_searchSuggestionsResults");r.text==u.val()&&(i.empty(),n.each(t.suggestions,function(t,f){var e=n("<li>");f.image&&e.append(n("<img>").attr("src",f.image));e.append(f.title.replace(new RegExp(r.text,"ig"),"<strong>$&<\/strong>"));e.mouseover(function(){i.children().removeClass("selected");e.addClass("selected")});e.click(function(){u.val(f.title);f.target?window.location.href=f.target:n("#srv_shellHeaderSearchForm").submit()});i.append(e)}));i.children().length>0?n("#cli_searchSuggestionsContainer").addClass("visible"):n("#cli_searchSuggestionsContainer").removeClass("visible")}}}(jQuery)