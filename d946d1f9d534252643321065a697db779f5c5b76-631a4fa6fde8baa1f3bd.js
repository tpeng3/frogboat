(self.webpackChunkgatsby_starter_typescript_deluxe=self.webpackChunkgatsby_starter_typescript_deluxe||[]).push([[758],{6241:function(e,t,n){"use strict";n.d(t,{Z:function(){return $e}});var r=n(8481),o=n(6156),i=n(9756),a=n(2122),s=n(7294),c=n(2585),p=n(3945);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return(0,p.Z)(e)?t:(0,a.Z)({},t,{ownerState:(0,a.Z)({},t.ownerState,n)})}var l=n(1340),f=n(2915),d=n(6462),m=n(4429),h=n(1994),v=n(7355),g=n(71),b=n(4374),y=n(1085),w=n(515);function x(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=O(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function T(e){return e instanceof O(e).Element||e instanceof Element}function R(e){return e instanceof O(e).HTMLElement||e instanceof HTMLElement}function E(e){return"undefined"!=typeof ShadowRoot&&(e instanceof O(e).ShadowRoot||e instanceof ShadowRoot)}function P(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){return((T(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return x(j(e)).left+Z(e).scrollLeft}function k(e){return O(e).getComputedStyle(e)}function D(e){var t=k(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function L(e,t,n){void 0===n&&(n=!1);var r,o,i=j(t),a=x(e),s=R(t),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(s||!s&&!n)&&(("body"!==P(t)||D(i))&&(c=(r=t)!==O(r)&&R(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:Z(r)),R(t)?((p=x(t)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=M(i))),{x:a.left+c.scrollLeft-p.x,y:a.top+c.scrollTop-p.y,width:a.width,height:a.height}}function S(e){var t=x(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function C(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(E(e)?e.host:null)||j(e)}function B(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:R(e)&&D(e)?e:B(C(e))}function W(e,t){var n;void 0===t&&(t=[]);var r=B(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=O(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(W(C(a)))}function A(e){return["table","td","th"].indexOf(P(e))>=0}function N(e){return R(e)&&"fixed"!==k(e).position?e.offsetParent:null}function H(e){for(var t=O(e),n=N(e);n&&A(n)&&"static"===k(n).position;)n=N(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===k(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&R(e)&&"fixed"===k(e).position)return null;for(var n=C(e);R(n)&&["html","body"].indexOf(P(n))<0;){var r=k(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var I="top",F="bottom",q="right",U="left",_="auto",z=[I,F,q,U],V="start",X="end",Y="viewport",Q="popper",G=z.reduce((function(e,t){return e.concat([t+"-"+V,t+"-"+X])}),[]),J=[].concat(z,[_]).reduce((function(e,t){return e.concat([t,t+"-"+V,t+"-"+X])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function $(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ne(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ee:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:s,setOptions:function(n){l(),s.options=Object.assign({},i,s.options,n),s.scrollParents={reference:T(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var o=function(e){var t=$(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=o.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=s.elements,t=e.reference,n=e.popper;if(te(t,n)){s.rects={reference:L(t,H(n),"fixed"===s.options.strategy),popper:S(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),p=!0}};if(!te(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var re={passive:!0};var oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=O(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,re)})),s&&c.addEventListener("resize",n.update,re),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),s&&c.removeEventListener("resize",n.update,re)}},data:{}};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case I:t={x:s,y:n.y-r.height};break;case F:t={x:s,y:n.y+n.height};break;case q:t={x:n.x+n.width,y:c};break;case U:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?se(i):null;if(null!=p){var u="y"===p?"height":"width";switch(a){case V:t[p]=t[p]-(n[u]/2-r[u]/2);break;case X:t[p]=t[p]+(n[u]/2-r[u]/2)}}return t}var pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ue=Math.max,le=Math.min,fe=Math.round,de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,u=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:fe(fe(t*r)/r)||0,y:fe(fe(n*r)/r)||0}}(i):"function"==typeof p?p(i):i,l=u.x,f=void 0===l?0:l,d=u.y,m=void 0===d?0:d,h=i.hasOwnProperty("x"),v=i.hasOwnProperty("y"),g=U,b=I,y=window;if(c){var w=H(n),x="clientHeight",Z="clientWidth";w===O(n)&&"static"!==k(w=j(n)).position&&(x="scrollHeight",Z="scrollWidth"),w=w,o===I&&(b=F,m-=w[x]-r.height,m*=s?1:-1),o===U&&(g=q,f-=w[Z]-r.width,f*=s?1:-1)}var T,R=Object.assign({position:a},c&&de);return s?Object.assign({},R,((T={})[b]=v?"0":"",T[g]=h?"0":"",T.transform=(y.devicePixelRatio||1)<2?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},R,((t={})[b]=v?m+"px":"",t[g]=h?f+"px":"",t.transform="",t))}var he={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,(function(e){return he[e]}))}var ge={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,(function(e){return ge[e]}))}function ye(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&E(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function we(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xe(e,t){return t===Y?we(function(e){var t=O(e),n=j(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+M(e),y:s}}(e)):R(t)?function(e){var t=x(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):we(function(e){var t,n=j(e),r=Z(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=ue(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ue(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+M(e),c=-r.scrollTop;return"rtl"===k(o||n).direction&&(s+=ue(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(j(e)))}function Oe(e,t,n){var r="clippingParents"===t?function(e){var t=W(C(e)),n=["absolute","fixed"].indexOf(k(e).position)>=0&&R(e)?H(e):e;return T(n)?t.filter((function(e){return T(e)&&ye(e,n)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=xe(e,n);return t.top=ue(r.top,t.top),t.right=le(r.right,t.right),t.bottom=le(r.bottom,t.bottom),t.left=ue(r.left,t.left),t}),xe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ze(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Te(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Re(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?Y:s,p=n.elementContext,u=void 0===p?Q:p,l=n.altBoundary,f=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=Ze("number"!=typeof m?m:Te(m,z)),v=u===Q?"reference":Q,g=e.elements.reference,b=e.rects.popper,y=e.elements[f?v:u],w=Oe(T(y)?y:y.contextElement||j(e.elements.popper),a,c),O=x(g),Z=ce({reference:O,element:b,strategy:"absolute",placement:o}),R=we(Object.assign({},b,Z)),E=u===Q?R:O,P={top:w.top-E.top+h.top,bottom:E.bottom-w.bottom+h.bottom,left:w.left-E.left+h.left,right:E.right-w.right+h.right},M=e.modifiersData.offset;if(u===Q&&M){var k=M[o];Object.keys(P).forEach((function(e){var t=[q,F].indexOf(e)>=0?1:-1,n=[I,F].indexOf(e)>=0?"y":"x";P[e]+=k[n]*t}))}return P}function Ee(e,t,n){return ue(e,le(t,n))}function Pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[I,q,F,U].some((function(t){return e[t]>=0}))}var Me=ne({defaultModifiers:[oe,pe,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:ie(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];R(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});R(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce((function(e,n){return e[n]=function(e,t,n){var r=ie(e),o=[U,I].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[U,q].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,u=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=ie(v),b=c||(g===v||!m?[ve(v)]:function(e){if(ie(e)===_)return[];var t=ve(e);return[be(e),t,be(t)]}(v)),y=[v].concat(b).reduce((function(e,n){return e.concat(ie(n)===_?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?J:c,u=ae(r),l=u?s?G:G.filter((function(e){return ae(e)===u})):z,f=l.filter((function(e){return p.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,n){return t[n]=Re(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ie(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=y[0],R=0;R<y.length;R++){var E=y[R],P=ie(E),j=ae(E)===V,M=[I,F].indexOf(P)>=0,k=M?"width":"height",D=Re(t,{placement:E,boundary:u,rootBoundary:l,altBoundary:f,padding:p}),L=M?j?q:U:j?F:I;w[k]>x[k]&&(L=ve(L));var S=ve(L),C=[];if(i&&C.push(D[P]<=0),s&&C.push(D[L]<=0,D[S]<=0),C.every((function(e){return e}))){T=E,Z=!1;break}O.set(E,C)}if(Z)for(var B=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===B(W))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,u=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=Re(t,{boundary:c,rootBoundary:p,padding:l,altBoundary:u}),g=ie(t.placement),b=ae(t.placement),y=!b,w=se(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,T=t.rects.popper,R="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,E={x:0,y:0};if(O){if(i||s){var P="y"===w?I:U,j="y"===w?F:q,M="y"===w?"height":"width",k=O[w],D=O[w]+v[P],L=O[w]-v[j],C=d?-T[M]/2:0,B=b===V?Z[M]:T[M],W=b===V?-T[M]:-Z[M],A=t.elements.arrow,N=d&&A?S(A):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=_[P],X=_[j],Y=Ee(0,Z[M],N[M]),Q=y?Z[M]/2-C-Y-z-R:B-Y-z-R,G=y?-Z[M]/2+C+Y+X+R:W+Y+X+R,J=t.elements.arrow&&H(t.elements.arrow),K=J?"y"===w?J.clientTop||0:J.clientLeft||0:0,$=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ee=O[w]+Q-$-K,te=O[w]+G-$;if(i){var ne=Ee(d?le(D,ee):D,k,d?ue(L,te):L);O[w]=ne,E[w]=ne-k}if(s){var re="x"===w?I:U,oe="x"===w?F:q,ce=O[x],pe=ce+v[re],fe=ce-v[oe],de=Ee(d?le(pe,ee):pe,ce,d?ue(fe,te):fe);O[x]=de,E[x]=de-ce}}t.modifiersData[r]=E}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ie(n.placement),c=se(s),p=[U,q].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Ze("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Te(e,z))}(o.padding,n),l=S(i),f="y"===c?I:U,d="y"===c?F:q,m=n.rects.reference[p]+n.rects.reference[c]-a[c]-n.rects.popper[p],h=a[c]-n.rects.reference[c],v=H(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,y=u[f],w=g-l[p]-u[d],x=g/2-l[p]/2+b,O=Ee(y,x,w),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ye(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Re(t,{elementContext:"reference"}),s=Re(t,{altBoundary:!0}),c=Pe(a,r),p=Pe(s,o,i),u=je(c),l=je(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),ke=n(7732),De=n(5893),Le=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Se=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ce(e){return"function"==typeof e?e():e}var Be={},We=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,c=e.direction,p=e.disablePortal,u=e.modifiers,l=e.open,f=e.placement,d=e.popperOptions,m=e.popperRef,h=e.TransitionProps,v=(0,i.Z)(e,Le),g=s.useRef(null),w=(0,b.Z)(g,t),x=s.useRef(null),O=(0,b.Z)(x,m),Z=s.useRef(O);(0,y.Z)((function(){Z.current=O}),[O]),s.useImperativeHandle(m,(function(){return x.current}),[]);var T=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(f,c),R=s.useState(T),E=(0,r.Z)(R,2),P=E[0],j=E[1];s.useEffect((function(){x.current&&x.current.forceUpdate()})),(0,y.Z)((function(){if(n&&l){Ce(n);var e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;j(t.placement)}}];null!=u&&(e=e.concat(u)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));var t=Me(Ce(n),g.current,(0,a.Z)({placement:T},d,{modifiers:e}));return Z.current(t),function(){t.destroy(),Z.current(null)}}}),[n,p,u,l,d,T]);var M={placement:P};return null!==h&&(M.TransitionProps=h),(0,De.jsx)("div",(0,a.Z)({ref:w,role:"tooltip"},v,{children:"function"==typeof o?o(M):o}))})),Ae=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,c=e.container,p=e.direction,u=void 0===p?"ltr":p,l=e.disablePortal,f=void 0!==l&&l,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,g=e.placement,b=void 0===g?"bottom":g,y=e.popperOptions,x=void 0===y?Be:y,O=e.popperRef,Z=e.style,T=e.transition,R=void 0!==T&&T,E=(0,i.Z)(e,Se),P=s.useState(!0),j=(0,r.Z)(P,2),M=j[0],k=j[1];if(!m&&!v&&(!R||M))return null;var D=c||(n?(0,w.Z)(Ce(n)).body:void 0);return(0,De.jsx)(ke.Z,{disablePortal:f,container:D,children:(0,De.jsx)(We,(0,a.Z)({anchorEl:n,direction:u,disablePortal:f,modifiers:h,ref:t,open:R?!M:v,placement:b,popperOptions:x,popperRef:O},E,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:v||!m||R&&!M?null:"none"},Z),TransitionProps:R?{in:v,onEnter:function(){k(!1)},onExited:function(){k(!0)}}:null,children:o}))})})),Ne=n(3641),He=s.forwardRef((function(e,t){var n=(0,Ne.Z)();return(0,De.jsx)(Ae,(0,a.Z)({direction:null==n?void 0:n.direction},e,{ref:t}))})),Ie=n(8905),Fe=n(8571),qe=n(2583).Z,Ue=n(2160),_e=n(9786),ze=n(1219),Ve=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var Xe=(0,d.ZP)(He,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,r=e.ownerState,i=e.open;return(0,a.Z)({zIndex:n.zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},r.arrow&&(t={},(0,o.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(ze.Z.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,o.Z)(t,'&[data-popper-placement*="top"] .'.concat(ze.Z.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,o.Z)(t,'&[data-popper-placement*="right"] .'.concat(ze.Z.arrow),(0,a.Z)({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,o.Z)(t,'&[data-popper-placement*="left"] .'.concat(ze.Z.arrow),(0,a.Z)({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),Ye=(0,d.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,v.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,r=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:(0,f.Fq)(r.palette.grey[700],.92),borderRadius:r.shape.borderRadius,color:r.palette.common.white,fontFamily:r.typography.fontFamily,padding:"4px 8px",fontSize:r.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:r.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:r.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:r.typography.fontWeightRegular},(t={},(0,o.Z)(t,".".concat(ze.Z.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,o.Z)(t,".".concat(ze.Z.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,o.Z)(t,".".concat(ze.Z.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,o.Z)(t,".".concat(ze.Z.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),Qe=(0,d.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,f.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),Ge=!1,Je=null;function Ke(e,t){return function(n){t&&t(n),e(n)}}var $e=s.forwardRef((function(e,t){var n,o,p,f,d,b,y=(0,h.Z)({props:e,name:"MuiTooltip"}),w=y.arrow,x=void 0!==w&&w,O=y.children,Z=y.components,T=void 0===Z?{}:Z,R=y.componentsProps,E=void 0===R?{}:R,P=y.describeChild,j=void 0!==P&&P,M=y.disableFocusListener,k=void 0!==M&&M,D=y.disableHoverListener,L=void 0!==D&&D,S=y.disableInteractive,C=void 0!==S&&S,B=y.disableTouchListener,W=void 0!==B&&B,A=y.enterDelay,N=void 0===A?100:A,H=y.enterNextDelay,I=void 0===H?0:H,F=y.enterTouchDelay,q=void 0===F?700:F,U=y.followCursor,_=void 0!==U&&U,z=y.id,V=y.leaveDelay,X=void 0===V?0:V,Y=y.leaveTouchDelay,Q=void 0===Y?1500:Y,G=y.onClose,J=y.onOpen,K=y.open,$=y.placement,ee=void 0===$?"bottom":$,te=y.PopperComponent,ne=y.PopperProps,re=void 0===ne?{}:ne,oe=y.title,ie=y.TransitionComponent,ae=void 0===ie?g.Z:ie,se=y.TransitionProps,ce=(0,i.Z)(y,Ve),pe=(0,m.Z)(),ue="rtl"===pe.direction,le=s.useState(),fe=(0,r.Z)(le,2),de=fe[0],me=fe[1],he=s.useState(null),ve=(0,r.Z)(he,2),ge=ve[0],be=ve[1],ye=s.useRef(!1),we=C||_,xe=s.useRef(),Oe=s.useRef(),Ze=s.useRef(),Te=s.useRef(),Re=(0,_e.Z)({controlled:K,default:!1,name:"Tooltip",state:"open"}),Ee=(0,r.Z)(Re,2),Pe=Ee[0],je=Ee[1],Me=Pe,ke=qe(z),Le=s.useRef(),Se=s.useCallback((function(){void 0!==Le.current&&(document.body.style.WebkitUserSelect=Le.current,Le.current=void 0),clearTimeout(Te.current)}),[]);s.useEffect((function(){return function(){clearTimeout(xe.current),clearTimeout(Oe.current),clearTimeout(Ze.current),Se()}}),[Se]);var Ce=function(e){clearTimeout(Je),Ge=!0,je(!0),J&&!Me&&J(e)},Be=(0,Ie.Z)((function(e){clearTimeout(Je),Je=setTimeout((function(){Ge=!1}),800+X),je(!1),G&&Me&&G(e),clearTimeout(xe.current),xe.current=setTimeout((function(){ye.current=!1}),pe.transitions.duration.shortest)})),We=function(e){ye.current&&"touchstart"!==e.type||(de&&de.removeAttribute("title"),clearTimeout(Oe.current),clearTimeout(Ze.current),N||Ge&&I?Oe.current=setTimeout((function(){Ce(e)}),Ge?I:N):Ce(e))},Ae=function(e){clearTimeout(Oe.current),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Be(e)}),X)},Ne=(0,Ue.Z)(),$e=Ne.isFocusVisibleRef,et=Ne.onBlur,tt=Ne.onFocus,nt=Ne.ref,rt=s.useState(!1),ot=(0,r.Z)(rt,2)[1],it=function(e){et(e),!1===$e.current&&(ot(!1),Ae(e))},at=function(e){de||me(e.currentTarget),tt(e),!0===$e.current&&(ot(!0),We(e))},st=function(e){ye.current=!0;var t=O.props;t.onTouchStart&&t.onTouchStart(e)},ct=We,pt=Ae;s.useEffect((function(){if(Me)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Be(e)}}),[Be,Me]);var ut=(0,Fe.Z)(me,t),lt=(0,Fe.Z)(nt,ut),ft=(0,Fe.Z)(O.ref,lt);""===oe&&(Me=!1);var dt=s.useRef({x:0,y:0}),mt=s.useRef(),ht={},vt="string"==typeof oe;j?(ht.title=Me||!vt||L?null:oe,ht["aria-describedby"]=Me?ke:null):(ht["aria-label"]=vt?oe:null,ht["aria-labelledby"]=Me&&!vt?ke:null);var gt=(0,a.Z)({},ht,ce,O.props,{className:(0,c.Z)(ce.className,O.props.className),onTouchStart:st,ref:ft},_?{onMouseMove:function(e){var t=O.props;t.onMouseMove&&t.onMouseMove(e),dt.current={x:e.clientX,y:e.clientY},mt.current&&mt.current.update()}}:{});var bt={};W||(gt.onTouchStart=function(e){st(e),clearTimeout(Ze.current),clearTimeout(xe.current),Se(),Le.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Te.current=setTimeout((function(){document.body.style.WebkitUserSelect=Le.current,We(e)}),q)},gt.onTouchEnd=function(e){O.props.onTouchEnd&&O.props.onTouchEnd(e),Se(),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Be(e)}),Q)}),L||(gt.onMouseOver=Ke(ct,gt.onMouseOver),gt.onMouseLeave=Ke(pt,gt.onMouseLeave),we||(bt.onMouseOver=ct,bt.onMouseLeave=pt)),k||(gt.onFocus=Ke(at,gt.onFocus),gt.onBlur=Ke(it,gt.onBlur),we||(bt.onFocus=at,bt.onBlur=it));var yt=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ge),options:{element:ge,padding:4}}];return null!=(e=re.popperOptions)&&e.modifiers&&(t=t.concat(re.popperOptions.modifiers)),(0,a.Z)({},re.popperOptions,{modifiers:t})}),[ge,re]),wt=(0,a.Z)({},y,{isRtl:ue,arrow:x,disableInteractive:we,placement:ee,PopperComponentProp:te,touch:ye.current}),xt=function(e){var t=e.classes,n=e.disableInteractive,r=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch","tooltipPlacement".concat((0,v.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,l.Z)(a,ze.Q,t)}(wt),Ot=null!=(n=T.Popper)?n:Xe,Zt=null!=(o=null!=(p=T.Transition)?p:ae)?o:g.Z,Tt=null!=(f=T.Tooltip)?f:Ye,Rt=null!=(d=T.Arrow)?d:Qe,Et=u(Ot,(0,a.Z)({},re,E.popper),wt),Pt=u(Zt,(0,a.Z)({},se,E.transition),wt),jt=u(Tt,(0,a.Z)({},E.tooltip),wt),Mt=u(Rt,(0,a.Z)({},E.arrow),wt);return(0,De.jsxs)(s.Fragment,{children:[s.cloneElement(O,gt),(0,De.jsx)(Ot,(0,a.Z)({as:null!=te?te:He,placement:ee,anchorEl:_?{getBoundingClientRect:function(){return{top:dt.current.y,left:dt.current.x,right:dt.current.x,bottom:dt.current.y,width:0,height:0}}}:de,popperRef:mt,open:!!de&&Me,id:ke,transition:!0},bt,Et,{className:(0,c.Z)(xt.popper,null==re?void 0:re.className,null==(b=E.popper)?void 0:b.className),popperOptions:yt,children:function(e){var t,n,r=e.TransitionProps;return(0,De.jsx)(Zt,(0,a.Z)({timeout:pe.transitions.duration.shorter},r,Pt,{children:(0,De.jsxs)(Tt,(0,a.Z)({},jt,{className:(0,c.Z)(xt.tooltip,null==(t=E.tooltip)?void 0:t.className),children:[oe,x?(0,De.jsx)(Rt,(0,a.Z)({},Mt,{className:(0,c.Z)(xt.arrow,null==(n=E.arrow)?void 0:n.className),ref:be})):null]}))}))}}))]})}))},1219:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});var r=n(7318);function o(e){return(0,r.Z)("MuiTooltip",e)}var i=(0,n(8851).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=i}}]);
//# sourceMappingURL=d946d1f9d534252643321065a697db779f5c5b76-631a4fa6fde8baa1f3bd.js.map