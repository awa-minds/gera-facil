(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{5271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(7503);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},521:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let r=n(5547);function o(e){return(0,r.pathHasPrefix)(e,"/gera-facil")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(6927),o=n(5909),i=o._(n(6006)),a=r._(n(9619)),u=n(9080),l=n(9600),s=n(5934);n(4169);let c=r._(n(8697)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/gera-facil/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function m(e){let[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:a,className:u,imgStyle:l,blurStyle:s,isLazy:c,fetchPriority:f,fill:d,placeholder:p,loading:g,srcString:y,config:b,unoptimized:v,loader:_,onLoadRef:P,onLoadingCompleteRef:j,setBlurComplete:O,setShowAltText:w,onLoad:x,onError:C,...E}=e;return g=c?"lazy":g,i.default.createElement("img",{...E,...m(f),loading:g,width:o,height:r,decoding:"async","data-nimg":d?"fill":"1",className:u,style:{...l,...s},...n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,y,p,P,j,O,v))},[y,p,P,j,O,C,v,t]),onLoad:e=>{let t=e.currentTarget;h(t,y,p,P,j,O,v)},onError:e=>{w(!0),"blur"===p&&O(!0),C&&C(e)}})}),y=(0,i.forwardRef)((e,t)=>{var n;let r,o,{src:h,sizes:y,unoptimized:b=!1,priority:v=!1,loading:_,className:P,quality:j,width:O,height:w,fill:x,style:C,onLoad:E,onLoadingComplete:M,placeholder:S="empty",blurDataURL:R,fetchPriority:k,layout:I,objectFit:A,objectPosition:U,lazyBoundary:L,lazyRoot:N,...T}=e,z=(0,i.useContext)(s.ImageConfigContext),D=(0,i.useMemo)(()=>{let e=f||z||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[z]),W=T.loader||c.default;delete T.loader;let F="__next_img_default"in W;if(F){if("custom"===D.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:n,...r}=t;return e(r)}}if(I){"fill"===I&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!y&&(y=t)}let B="",$=p(O),q=p(w);if("object"==typeof(n=h)&&(d(n)||void 0!==n.src)){let e=d(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,B=e.src,!x){if($||q){if($&&!q){let t=$/e.width;q=Math.round(e.height*t)}else if(!$&&q){let t=q/e.height;$=Math.round(e.width*t)}}else $=e.width,q=e.height}}let H=!v&&("lazy"===_||void 0===_);(!(h="string"==typeof h?h:B)||h.startsWith("data:")||h.startsWith("blob:"))&&(b=!0,H=!1),D.unoptimized&&(b=!0),F&&h.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0),v&&(k="high");let[K,V]=(0,i.useState)(!1),[G,Q]=(0,i.useState)(!1),Z=p(j),J=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:U}:{},G?{}:{color:"transparent"},C),Y="blur"===S&&R&&!K?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,u.getImageBlurSvg)({widthInt:$,heightInt:q,blurWidth:r,blurHeight:o,blurDataURL:R,objectFit:J.objectFit})+'")'}:{},X=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,r)=>u({config:t,src:n,quality:i,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:u({config:t,src:n,quality:i,width:l[c]})}}({config:D,src:h,unoptimized:b,width:$,quality:Z,sizes:y,loader:W}),ee=h,et=(0,i.useRef)(E);(0,i.useEffect)(()=>{et.current=E},[E]);let en=(0,i.useRef)(M);(0,i.useEffect)(()=>{en.current=M},[M]);let er={isLazy:H,imgAttributes:X,heightInt:q,widthInt:$,qualityInt:Z,className:P,imgStyle:J,blurStyle:Y,loading:_,config:D,fetchPriority:k,fill:x,unoptimized:b,placeholder:S,loader:W,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:V,setShowAltText:Q,...T};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...er,ref:t}),v?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src,imageSrcSet:X.srcSet,imageSizes:X.sizes,crossOrigin:T.crossOrigin,...m(k)})):null)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(6927),o=r._(n(6006)),i=n(4495),a=n(757),u=n(330),l=n(7707),s=n(5271),c=n(8923),f=n(6996),d=n(6723),p=n(521),h=n(325),m=n(245),g=new Set;function y(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(g.has(i))return;g.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:g,children:v,prefetch:_=null,passHref:P,replace:j,shallow:O,scroll:w,locale:x,onClick:C,onMouseEnter:E,onTouchStart:M,legacyBehavior:S=!1,...R}=e;n=v,S&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let k=!1!==_,I=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,A=o.default.useContext(c.RouterContext),U=o.default.useContext(f.AppRouterContext),L=null!=A?A:U,N=!A,{href:T,as:z}=o.default.useMemo(()=>{if(!A){let e=b(u);return{href:e,as:g?b(g):e}}let[e,t]=(0,i.resolveHref)(A,u,!0);return{href:e,as:g?(0,i.resolveHref)(A,g):t||e}},[A,u,g]),D=o.default.useRef(T),W=o.default.useRef(z);S&&(r=o.default.Children.only(n));let F=S?r&&"object"==typeof r&&r.ref:t,[B,$,q]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(W.current!==z||D.current!==T)&&(q(),W.current=z,D.current=T),B(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[z,F,T,q,B]);o.default.useEffect(()=>{L&&$&&k&&y(L,T,z,{locale:x},{kind:I},N)},[z,T,$,x,k,null==A?void 0:A.locale,L,N,I]);let K={ref:H,onClick(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,i,u,l,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:u,locale:s,scroll:l}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,L,T,z,j,O,w,x,N,k)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(k||!N)&&y(L,T,z,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:I},N)},onTouchStart(e){S||"function"!=typeof M||M(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(k||!N)&&y(L,T,z,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:I},N)}};if((0,l.isAbsoluteUrl)(z))K.href=z;else if(!S||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==x?x:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);K.href=t||(0,h.addBasePath)((0,s.addLocale)(z,e,null==A?void 0:A.defaultLocale))}return S?o.default.cloneElement(r,K):o.default.createElement("a",{...R,...K},n)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},408:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6723:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(6006),o=n(408),i="function"==typeof IntersectionObserver,a=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},u.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let r=n(6927),o=r._(n(6006)),i=o.default.createContext({})},5224:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},5561:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},9619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return h}});let r=n(6927),o=n(5909),i=o._(n(6006)),a=r._(n(2776)),u=n(4920),l=n(508),s=n(5224);function c(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(4169);let d=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9080:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=r||t,l=o||n,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+u+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5934:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(6927),o=r._(n(6006)),i=n(9600),a=o.default.createContext(i.imageConfigDefault)},9600:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8697:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},8923:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let r=n(6927),o=r._(n(6006)),i=o.default.createContext(null)},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return u},formatWithValidation:function(){return l}});let r=n(5909),o=r._(n(32)),i=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,r=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+r+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},7359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(3295),o=n(6259);function i(e,t,n){let i="",a=(0,o.getRouteRegex)(e),u=a.groups,l=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;let s=Object.keys(u);return s.every(e=>{let t=l[e]||"",{repeat:n,optional:r}=u[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in l)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},4523:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});let n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(7707),o=n(6206);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},1244:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},5547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let r=n(6980);function o(e,t){if("string"!=typeof e)return!1;let{pathname:n}=(0,r.parsePath)(e);return n===t||n.startsWith(t+"/")}},32:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},4495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(32),o=n(330),i=n(1244),a=n(7707),u=n(7503),l=n(757),s=n(4523),c=n(7359);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,m=h.split("?");if((m[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,u)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[d]:d}}},3295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(7707);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),a}}},6259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return c},getNamedMiddlewareRegex:function(){return f}});let r=n(5561),o=n(7420),i="nxtP";function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function u(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),n={},i=1;return{parameterizedRoute:t.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,r.escapeStringRegexp)(e);{let{key:t,optional:r,repeat:o}=a(e.slice(1,-1));return n[t]={pos:i++,repeat:o,optional:r},o?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function l(e){let{parameterizedRoute:t,groups:n}=u(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e,t){let n,u;let l=(0,o.removeTrailingSlash)(e).slice(1).split("/"),s=(n=97,u=1,()=>{let e="";for(let t=0;t<u;t++)e+=String.fromCharCode(n),++n>122&&(u++,n=97);return e}),c={};return{namedParameterizedRoute:l.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,r.escapeStringRegexp)(e);{let{key:n,optional:r,repeat:o}=a(e.slice(1,-1)),u=n.replace(/\W/g,"");t&&(u=""+i+u);let l=!1;return(0===u.length||u.length>30)&&(l=!0),isNaN(parseInt(u.slice(0,1)))||(l=!0),l&&(u=s()),t?c[u]=""+i+n:c[u]=""+n,o?r?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}}).join(""),routeKeys:c}}function c(e,t){let n=s(e,t);return{...l(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function f(e,t){let{parameterizedRoute:n}=u(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},2776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(5909),o=r._(n(6006)),i=o.useLayoutEffect,a=o.useEffect;function u(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return u},getDisplayName:function(){return l},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function u(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),n=t[0];return n.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw Error(t)}return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}},4169:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},7586:function(e){e.exports={style:{fontFamily:"'__Inter_715b51', '__Inter_Fallback_715b51'",fontStyle:"normal"},className:"__className_715b51",variable:"__variable_715b51"}}}]);