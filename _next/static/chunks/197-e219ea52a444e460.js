(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(1024),s=r(8533),n=s._(r(2265)),a=i._(r(4887)),o=i._(r(9232)),u=r(3655),l=r(6921),c=r(8143);r(7707);let h=r(7650),d=i._(r(5324)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dear-admin-web/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,s,n){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function y(e){let[t,r]=n.version.split("."),i=parseInt(t,10),s=parseInt(r,10);return i>18||18===i&&s>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:a,width:o,decoding:u,className:l,style:c,fetchPriority:h,placeholder:d,loading:f,unoptimized:m,fill:g,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:S,setShowAltText:R,onLoad:O,onError:C,...w}=e;return n.default.createElement("img",{...w,...y(h),loading:f,width:o,height:a,decoding:u,"data-nimg":g?"fill":"1",className:l,style:c,sizes:s,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,d,v,b,S,m))},[r,d,v,b,S,C,m,t]),onLoad:e=>{let t=e.currentTarget;p(t,d,v,b,S,m)},onError:e=>{R(!0),"empty"!==d&&S(!0),C&&C(e)}})});function g(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):n.default.createElement(o.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let v=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(h.RouterContext),i=(0,n.useContext)(c.ImageConfigContext),s=(0,n.useMemo)(()=>{let e=f||i||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:o}=e,p=(0,n.useRef)(a);(0,n.useEffect)(()=>{p.current=a},[a]);let y=(0,n.useRef)(o);(0,n.useEffect)(()=>{y.current=o},[o]);let[v,b]=(0,n.useState)(!1),[S,R]=(0,n.useState)(!1),{props:O,meta:C}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:s,blurComplete:v,showAltText:S});return n.default.createElement(n.default.Fragment,null,n.default.createElement(m,{...O,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:R,ref:t}),C.priority?n.default.createElement(g,{isAppRouter:!r,imgAttributes:O}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let i=r(1024),s=i._(r(2265)),n=s.default.createContext({})},8827:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3655:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(7707);let i=r(8932),s=r(6921);function n(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,u,l,{src:c,sizes:h,unoptimized:d=!1,priority:f=!1,loading:p,className:y,quality:m,width:g,height:v,fill:b=!1,style:S,onLoad:R,onLoadingComplete:O,placeholder:C="empty",blurDataURL:w,fetchPriority:_,layout:E,objectFit:I,objectPosition:P,lazyBoundary:F,lazyRoot:x,...j}=e,{imgConf:D,showAltText:M,blurComplete:U,defaultLoader:Q}=t,k=D||s.imageConfigDefault;if("allSizes"in k)o=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);o={...k,allSizes:e,deviceSizes:t}}let A=j.loader||Q;delete j.loader,delete j.srcSet;let z="__next_img_default"in A;if(z){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!h&&(h=t)}let T="",q=a(g),L=a(v);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,l=e.blurHeight,w=w||e.blurDataURL,T=e.src,!b){if(q||L){if(q&&!L){let t=q/e.width;L=Math.round(e.height*t)}else if(!q&&L){let t=L/e.height;q=Math.round(e.width*t)}}else q=e.width,L=e.height}}let G=!f&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,G=!1),o.unoptimized&&(d=!0),z&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),f&&(_="high");let N=a(m),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:P}:{},M?{}:{color:"transparent"},S),W=U||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:q,heightInt:L,blurWidth:u,blurHeight:l,blurDataURL:w||"",objectFit:V.objectFit})+'")':'url("'+C+'")',B=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:a,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:n,kind:"x"}}(t,s,a),c=u.length-1;return{sizes:a||"w"!==l?a:"100vw",srcSet:u.map((e,i)=>o({config:t,src:r,quality:n,width:e})+" "+("w"===l?e:i+1)+l).join(", "),src:o({config:t,src:r,quality:n,width:u[c]})}}({config:o,src:c,unoptimized:d,width:q,quality:N,sizes:h,loader:A}),K={...j,loading:G?"lazy":p,fetchPriority:_,width:q,height:L,decoding:"async",className:y,style:{...V,...B},sizes:H.sizes,srcSet:H.srcSet,src:H.src},$={unoptimized:d,priority:f,placeholder:C,fill:b};return{props:K,meta:$}}},9232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return p}});let i=r(1024),s=r(8533),n=s._(r(2265)),a=i._(r(5184)),o=r(6948),u=r(3305),l=r(8827);function c(e){void 0===e&&(e=!1);let t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7707);let d=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(h,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return s=>{let n=!0,a=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){a=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=s.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?n=!1:(r.add(e),i[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,n.default.cloneElement(e,t)}return n.default.cloneElement(e,{key:i})})}let p=function(e){let{children:t}=e,r=(0,n.useContext)(o.AmpStateContext),i=(0,n.useContext)(u.HeadManagerContext);return n.default.createElement(a.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,l.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8932:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:a}=e,o=i?40*i:t,u=s?40*s:r,l=o&&u?"viewBox='0 0 "+o+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},8143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let i=r(1024),s=i._(r(2265)),n=r(6921),a=s.default.createContext(n.imageConfigDefault)},6921:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},2597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},unstable_getImgProps:function(){return u}});let i=r(1024),s=r(3655),n=r(7707),a=r(6964),o=i._(r(5324)),u=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dear-admin-web/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=a.Image},5324:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},7650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let i=r(1024),s=i._(r(2265)),n=s.default.createContext(null)},5184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=r(8533),s=i._(r(2265)),n=s.useLayoutEffect,a=s.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function i(){if(t&&t.mountedInstances){let i=s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return n(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),n(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6691:function(e,t,r){e.exports=r(2597)},3002:function(e,t,r){"use strict";r.d(t,{A:function(){return o},z:function(){return u}});var i=r(300),s=r(7987),n=r(1640),a=r(9024),o=class extends a.F{#e;#t;#r;#i;#s;#n;#a;constructor(e){super(),this.#a=!1,this.#n=e.defaultOptions,this.setOptions(e.options),this.#s=[],this.#r=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#e,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.#n,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#s.length||"idle"!==this.state.fetchStatus||this.#r.remove(this)}setData(e,t){let r=(0,i.oE)(this.state.data,e,this.options);return this.#o({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#o({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#i?.promise;return this.#i?.cancel(e),t?t.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.#s.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.#s.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.#s.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){let e=this.#s.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.#s.includes(e)||(this.#s.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.#s.includes(e)&&(this.#s=this.#s.filter(t=>t!==e),this.#s.length||(this.#i&&(this.#a?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.#s.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.#s.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let r=new AbortController,s={queryKey:this.queryKey,meta:this.meta},a=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#a=!0,r.signal)})};a(s);let o={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==i.CN?(this.#a=!1,this.options.persister)?this.options.persister(this.options.queryFn,s,this):this.options.queryFn(s):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};a(o),this.options.behavior?.onFetch(o,this),this.#t=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#o({type:"fetch",meta:o.fetchOptions?.meta});let u=e=>{(0,n.DV)(e)&&e.silent||this.#o({type:"error",error:e}),(0,n.DV)(e)||(this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#i=(0,n.Mz)({fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){u(Error(`${this.queryHash} data is undefined`));return}this.setData(e),this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(e,t)=>{this.#o({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode}),this.#i.promise}#o(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...u(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,n.DV)(r)&&r.revert&&this.#t)return{...this.#t,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),s.V.batch(()=>{this.#s.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function u(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.Kw)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}},7663:function(e,t,r){"use strict";let i;r.d(t,{a:function(){return I}});var s=r(300),n=r(7987),a=r(9198),o=r(2996),u=r(3002),l=class extends o.l{constructor(e,t){super(),this.options=t,this.#u=e,this.#l=null,this.bindMethods(),this.setOptions(t)}#u;#c=void 0;#h=void 0;#d=void 0;#f;#p;#l;#y;#m;#g;#v;#b;#S;#R=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#c.addObserver(this),c(this.#c,this.options)?this.#O():this.updateResult(),this.#C())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.#c,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.#c,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#w(),this.#_(),this.#c.removeObserver(this)}setOptions(e,t){let r=this.options,i=this.#c;if(this.options=this.#u.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.#E(),this.#c.setOptions(this.options),r._defaulted&&!(0,s.VS)(this.options,r)&&this.#u.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#c,observer:this});let n=this.hasListeners();n&&d(this.#c,i,this.options,r)&&this.#O(),this.updateResult(t),n&&(this.#c!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.#I();let a=this.#P();n&&(this.#c!==i||this.options.enabled!==r.enabled||a!==this.#S)&&this.#F(a)}getOptimisticResult(e){let t=this.#u.getQueryCache().build(this.#u,e),r=this.createResult(t,e);return(0,s.VS)(this.getCurrentResult(),r)||(this.#d=r,this.#p=this.options,this.#f=this.#c.state),r}getCurrentResult(){return this.#d}trackResult(e,t){let r={};return Object.keys(e).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),t?.(i),e[i])})}),r}trackProp(e){this.#R.add(e)}getCurrentQuery(){return this.#c}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#u.defaultQueryOptions(e),r=this.#u.getQueryCache().build(this.#u,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#O({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#d))}#O(e){this.#E();let t=this.#c.fetch(this.options,e);return e?.throwOnError||(t=t.catch(s.ZT)),t}#I(){if(this.#w(),s.sk||this.#d.isStale||!(0,s.PN)(this.options.staleTime))return;let e=(0,s.Kp)(this.#d.dataUpdatedAt,this.options.staleTime);this.#v=setTimeout(()=>{this.#d.isStale||this.updateResult()},e+1)}#P(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#c):this.options.refetchInterval)??!1}#F(e){this.#_(),this.#S=e,!s.sk&&!1!==this.options.enabled&&(0,s.PN)(this.#S)&&0!==this.#S&&(this.#b=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.#O()},this.#S))}#C(){this.#I(),this.#F(this.#P())}#w(){this.#v&&(clearTimeout(this.#v),this.#v=void 0)}#_(){this.#b&&(clearInterval(this.#b),this.#b=void 0)}createResult(e,t){let r;let i=this.#c,n=this.options,a=this.#d,o=this.#f,l=this.#p,h=e!==i,p=h?e.state:this.#h,{state:y}=e,m={...y},g=!1;if(t._optimisticResults){let r=this.hasListeners(),s=!r&&c(e,t),a=r&&d(e,i,t,n);(s||a)&&(m={...m,...(0,u.z)(y.data,e.options)}),"isRestoring"===t._optimisticResults&&(m.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:S}=m;if(t.select&&void 0!==m.data){if(a&&m.data===o?.data&&t.select===this.#y)r=this.#m;else try{this.#y=t.select,r=t.select(m.data),r=(0,s.oE)(a?.data,r,t),this.#m=r,this.#l=null}catch(e){this.#l=e}}else r=m.data;if(void 0!==t.placeholderData&&void 0===r&&"pending"===S){let e;if(a?.isPlaceholderData&&t.placeholderData===l?.placeholderData)e=a.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#g?.state.data,this.#g):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#l=null}catch(e){this.#l=e}void 0!==e&&(S="success",r=(0,s.oE)(a?.data,e,t),g=!0)}this.#l&&(v=this.#l,r=this.#m,b=Date.now(),S="error");let R="fetching"===m.fetchStatus,O="pending"===S,C="error"===S,w=O&&R,_=void 0!==r,E={status:S,fetchStatus:m.fetchStatus,isPending:O,isSuccess:"success"===S,isError:C,isInitialLoading:w,isLoading:w,data:r,dataUpdatedAt:m.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!O,isLoadingError:C&&!_,isPaused:"paused"===m.fetchStatus,isPlaceholderData:g,isRefetchError:C&&_,isStale:f(e,t),refetch:this.refetch};return E}updateResult(e){let t=this.#d,r=this.createResult(this.#c,this.options);if(this.#f=this.#c.state,this.#p=this.options,void 0!==this.#f.data&&(this.#g=this.#c),(0,s.VS)(r,t))return;this.#d=r;let i={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.#R.size)return!0;let i=new Set(r??this.#R);return this.options.throwOnError&&i.add("error"),Object.keys(this.#d).some(e=>{let r=this.#d[e]!==t[e];return r&&i.has(e)})})()&&(i.listeners=!0),this.#x({...i,...e})}#E(){let e=this.#u.getQueryCache().build(this.#u,this.options);if(e===this.#c)return;let t=this.#c;this.#c=e,this.#h=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#C()}#x(e){n.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#d)}),this.#u.getQueryCache().notify({query:this.#c,type:"observerResultsUpdated"})})}};function c(e,t){return!1!==t.enabled&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)||void 0!==e.state.data&&h(e,t,t.refetchOnMount)}function h(e,t,r){if(!1!==t.enabled){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&f(e,t)}return!1}function d(e,t,r,i){return(e!==t||!1===i.enabled)&&(!r.suspense||"error"!==e.state.status)&&f(e,r)}function f(e,t){return!1!==t.enabled&&e.isStaleByTime(t.staleTime)}var p=r(2265);r(7437);var y=p.createContext((i=!1,{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i})),m=()=>p.useContext(y),g=r(8038),v=p.createContext(!1),b=()=>p.useContext(v);v.Provider;var S=r(4805),R=(e,t)=>{(e.suspense||e.throwOnError)&&!t.isReset()&&(e.retryOnMount=!1)},O=e=>{p.useEffect(()=>{e.clearReset()},[e])},C=({result:e,errorResetBoundary:t,throwOnError:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(0,S.L)(r,[e.error,i]),w=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},_=(e,t)=>e?.suspense&&t.isPending,E=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function I(e,t){return function(e,t,r){let i=(0,g.NL)(r),s=b(),a=m(),o=i.defaultQueryOptions(e);o._optimisticResults=s?"isRestoring":"optimistic",w(o),R(o,a),O(a);let[u]=p.useState(()=>new t(i,o)),l=u.getOptimisticResult(o);if(p.useSyncExternalStore(p.useCallback(e=>{let t=s?()=>void 0:u.subscribe(n.V.batchCalls(e));return u.updateResult(),t},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),p.useEffect(()=>{u.setOptions(o,{listeners:!1})},[o,u]),_(o,l))throw E(o,u,a);if(C({result:l,errorResetBoundary:a,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw l.error;return o.notifyOnChangeProps?l:u.trackResult(l)}(e,l,t)}}}]);