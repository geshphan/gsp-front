/*! For license information please see 955.6eefac74.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgsp_front=self.webpackChunkgsp_front||[]).push([[955],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:function(){return _taggedTemplateLiteral}})},"./node_modules/cookie/index.js":function(__unused_webpack_module,exports){exports.Q=function parse(str,options){if("string"!=typeof str)throw new TypeError("argument str must be a string");var obj={},dec=(options||{}).decode||decode,index=0;for(;index<str.length;){var eqIdx=str.indexOf("=",index);if(-1===eqIdx)break;var endIdx=str.indexOf(";",index);if(-1===endIdx)endIdx=str.length;else if(endIdx<eqIdx){index=str.lastIndexOf(";",eqIdx-1)+1;continue}var key=str.slice(index,eqIdx).trim();if(void 0===obj[key]){var val=str.slice(eqIdx+1,endIdx).trim();34===val.charCodeAt(0)&&(val=val.slice(1,-1)),obj[key]=tryDecode(val,dec)}index=endIdx+1}return obj},exports.q=function serialize(name,val,options){var opt=options||{},enc=opt.encode||encode;if("function"!=typeof enc)throw new TypeError("option encode is invalid");if(!fieldContentRegExp.test(name))throw new TypeError("argument name is invalid");var value=enc(val);if(value&&!fieldContentRegExp.test(value))throw new TypeError("argument val is invalid");var str=name+"="+value;if(null!=opt.maxAge){var maxAge=opt.maxAge-0;if(isNaN(maxAge)||!isFinite(maxAge))throw new TypeError("option maxAge is invalid");str+="; Max-Age="+Math.floor(maxAge)}if(opt.domain){if(!fieldContentRegExp.test(opt.domain))throw new TypeError("option domain is invalid");str+="; Domain="+opt.domain}if(opt.path){if(!fieldContentRegExp.test(opt.path))throw new TypeError("option path is invalid");str+="; Path="+opt.path}if(opt.expires){var expires=opt.expires;if(!function isDate(val){return"[object Date]"===__toString.call(val)||val instanceof Date}(expires)||isNaN(expires.valueOf()))throw new TypeError("option expires is invalid");str+="; Expires="+expires.toUTCString()}opt.httpOnly&&(str+="; HttpOnly");opt.secure&&(str+="; Secure");if(opt.priority){switch("string"==typeof opt.priority?opt.priority.toLowerCase():opt.priority){case"low":str+="; Priority=Low";break;case"medium":str+="; Priority=Medium";break;case"high":str+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(opt.sameSite){switch("string"==typeof opt.sameSite?opt.sameSite.toLowerCase():opt.sameSite){case!0:str+="; SameSite=Strict";break;case"lax":str+="; SameSite=Lax";break;case"strict":str+="; SameSite=Strict";break;case"none":str+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return str};var __toString=Object.prototype.toString,fieldContentRegExp=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function decode(str){return-1!==str.indexOf("%")?decodeURIComponent(str):str}function encode(val){return encodeURIComponent(val)}function tryDecode(str,decode){try{return decode(str)}catch(e){return str}}},"./node_modules/jotai/esm/react.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{KO:function(){return useAtom}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/jotai/esm/vanilla.mjs");const StoreContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useStore=options=>{const store=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StoreContext);return(null==options?void 0:options.store)||store||(0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.K7)()},isPromiseLike=x=>"function"==typeof(null==x?void 0:x.then),use=react__WEBPACK_IMPORTED_MODULE_0__.use||(promise=>{if("pending"===promise.status)throw promise;if("fulfilled"===promise.status)return promise.value;throw"rejected"===promise.status?promise.reason:(promise.status="pending",promise.then((v=>{promise.status="fulfilled",promise.value=v}),(e=>{promise.status="rejected",promise.reason=e})),promise)});function useAtomValue(atom,options){const store=useStore(options),[[valueFromReducer,storeFromReducer,atomFromReducer],rerender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((prev=>{const nextValue=store.get(atom);return Object.is(prev[0],nextValue)&&prev[1]===store&&prev[2]===atom?prev:[nextValue,store,atom]}),void 0,(()=>[store.get(atom),store,atom]));let value=valueFromReducer;storeFromReducer===store&&atomFromReducer===atom||(rerender(),value=store.get(atom));const delay=null==options?void 0:options.delay;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const unsub=store.sub(atom,(()=>{"number"!=typeof delay?rerender():setTimeout(rerender,delay)}));return rerender(),unsub}),[store,atom,delay]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(value),isPromiseLike(value)?use(value):value}function useSetAtom(atom,options){const store=useStore(options);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>{if(!("write"in atom))throw new Error("not writable atom");return store.set(atom,...args)}),[store,atom])}function useAtom(atom,options){return[useAtomValue(atom,options),useSetAtom(atom,options)]}},"./node_modules/jotai/esm/vanilla.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K7:function(){return getDefaultStore},MT:function(){return createStore},cn:function(){return atom}});let keyCount=0;function atom(read,write){const key="atom"+ ++keyCount,config={toString:()=>key};return"function"==typeof read?config.read=read:(config.init=read,config.read=get=>get(config),config.write=(get,set,arg)=>set(config,"function"==typeof arg?arg(get(config)):arg)),write&&(config.write=write),config}const hasInitialValue=atom=>"init"in atom,isActuallyWritableAtom=atom=>!!atom.write,cancelPromiseMap=new WeakMap,cancelPromise=(promise,next)=>{const cancel=cancelPromiseMap.get(promise);cancel&&(cancelPromiseMap.delete(promise),cancel(next))},resolvePromise=(promise,value)=>{promise.status="fulfilled",promise.value=value},rejectPromise=(promise,e)=>{promise.status="rejected",promise.reason=e},isEqualAtomValue=(a,b)=>"v"in a&&"v"in b&&Object.is(a.v,b.v),isEqualAtomError=(a,b)=>"e"in a&&"e"in b&&Object.is(a.e,b.e),hasPromiseAtomValue=a=>"v"in a&&a.v instanceof Promise,returnAtomValue=atomState=>{if("e"in atomState)throw atomState.e;return atomState.v},createStore=()=>{const atomStateMap=new WeakMap,mountedMap=new WeakMap,pendingMap=new Map;let storeListenersRev2,mountedAtoms;storeListenersRev2=new Set,mountedAtoms=new Set;const getAtomState=atom=>atomStateMap.get(atom),setAtomState=(atom,atomState)=>{Object.freeze(atomState);const prevAtomState=atomStateMap.get(atom);if(atomStateMap.set(atom,atomState),pendingMap.has(atom)||pendingMap.set(atom,prevAtomState),prevAtomState&&hasPromiseAtomValue(prevAtomState)){const next="v"in atomState?atomState.v instanceof Promise?atomState.v:Promise.resolve(atomState.v):Promise.reject(atomState.e);cancelPromise(prevAtomState.v,next)}},updateDependencies=(atom,nextAtomState,nextDependencies)=>{const dependencies=new Map;let changed=!1;nextDependencies.forEach(((aState,a)=>{aState||a!==atom||(aState=nextAtomState),aState?(dependencies.set(a,aState),nextAtomState.d.get(a)!==aState&&(changed=!0)):console.warn("[Bug] atom state not found")})),(changed||nextAtomState.d.size!==dependencies.size)&&(nextAtomState.d=dependencies)},setAtomValue=(atom,value,nextDependencies)=>{const prevAtomState=getAtomState(atom),nextAtomState={d:(null==prevAtomState?void 0:prevAtomState.d)||new Map,v:value};if(nextDependencies&&updateDependencies(atom,nextAtomState,nextDependencies),prevAtomState&&isEqualAtomValue(prevAtomState,nextAtomState)&&prevAtomState.d===nextAtomState.d)return prevAtomState;if(prevAtomState&&hasPromiseAtomValue(prevAtomState)&&hasPromiseAtomValue(nextAtomState)&&(b=nextAtomState,"v"in(a=prevAtomState)&&"v"in b&&a.v.orig&&a.v.orig===b.v.orig)){if(prevAtomState.d===nextAtomState.d)return prevAtomState;nextAtomState.v=prevAtomState.v}var a,b;return setAtomState(atom,nextAtomState),nextAtomState},setAtomValueOrPromise=(atom,valueOrPromise,nextDependencies,abortPromise)=>{if("function"==typeof(null==(x=valueOrPromise)?void 0:x.then)){let continuePromise;const promise=new Promise(((resolve,reject)=>{let settled=!1;valueOrPromise.then((v=>{if(!settled){settled=!0;const prevAtomState=getAtomState(atom),nextAtomState=setAtomValue(atom,promise,nextDependencies);resolvePromise(promise,v),resolve(v),(null==prevAtomState?void 0:prevAtomState.d)!==nextAtomState.d&&mountDependencies(atom,nextAtomState,null==prevAtomState?void 0:prevAtomState.d)}}),(e=>{if(!settled){settled=!0;const prevAtomState=getAtomState(atom),nextAtomState=setAtomValue(atom,promise,nextDependencies);rejectPromise(promise,e),reject(e),(null==prevAtomState?void 0:prevAtomState.d)!==nextAtomState.d&&mountDependencies(atom,nextAtomState,null==prevAtomState?void 0:prevAtomState.d)}})),continuePromise=next=>{settled||(settled=!0,next.then((v=>resolvePromise(promise,v)),(e=>rejectPromise(promise,e))),resolve(next))}}));return promise.orig=valueOrPromise,promise.status="pending",((promise,cancel)=>{cancelPromiseMap.set(promise,cancel),promise.catch((()=>{})).finally((()=>cancelPromiseMap.delete(promise)))})(promise,(next=>{next&&continuePromise(next),null==abortPromise||abortPromise()})),setAtomValue(atom,promise,nextDependencies)}var x;return setAtomValue(atom,valueOrPromise,nextDependencies)},readAtomState=(atom,force)=>{const atomState=getAtomState(atom);if(!force&&atomState){if(mountedMap.has(atom))return atomState;if(Array.from(atomState.d).every((([a,s])=>a===atom||readAtomState(a)===s)))return atomState}const nextDependencies=new Map;let isSync=!0;const getter=a=>{if(a===atom){const aState2=getAtomState(a);if(aState2)return nextDependencies.set(a,aState2),returnAtomValue(aState2);if(hasInitialValue(a))return nextDependencies.set(a,void 0),a.init;throw new Error("no atom init")}const aState=readAtomState(a);return nextDependencies.set(a,aState),returnAtomValue(aState)};let controller,setSelf;const options={get signal(){return controller||(controller=new AbortController),controller.signal},get setSelf(){return isActuallyWritableAtom(atom)||console.warn("setSelf function cannot be used with read-only atom"),!setSelf&&isActuallyWritableAtom(atom)&&(setSelf=(...args)=>{if(isSync&&console.warn("setSelf function cannot be called in sync"),!isSync)return writeAtom(atom,...args)}),setSelf}};try{const valueOrPromise=atom.read(getter,options);return setAtomValueOrPromise(atom,valueOrPromise,nextDependencies,(()=>null==controller?void 0:controller.abort()))}catch(error){return((atom,error,nextDependencies)=>{const prevAtomState=getAtomState(atom),nextAtomState={d:(null==prevAtomState?void 0:prevAtomState.d)||new Map,e:error};return nextDependencies&&updateDependencies(atom,nextAtomState,nextDependencies),prevAtomState&&isEqualAtomError(prevAtomState,nextAtomState)&&prevAtomState.d===nextAtomState.d?prevAtomState:(setAtomState(atom,nextAtomState),nextAtomState)})(atom,error,nextDependencies)}finally{isSync=!1}},readAtom=atom=>returnAtomValue(readAtomState(atom)),canUnmountAtom=(atom,mounted)=>!mounted.l.size&&(!mounted.t.size||1===mounted.t.size&&mounted.t.has(atom)),recomputeDependents=atom=>{const dependencyMap=new Map,dirtyMap=new WeakMap,loop1=a=>{const mounted=mountedMap.get(a);null==mounted||mounted.t.forEach((dependent=>{dependent!==a&&(dependencyMap.set(dependent,(dependencyMap.get(dependent)||new Set).add(a)),dirtyMap.set(dependent,(dirtyMap.get(dependent)||0)+1),loop1(dependent))}))};loop1(atom);const loop2=a=>{const mounted=mountedMap.get(a);null==mounted||mounted.t.forEach((dependent=>{var _a;if(dependent!==a){let dirtyCount=dirtyMap.get(dependent);if(dirtyCount&&dirtyMap.set(dependent,--dirtyCount),!dirtyCount){let isChanged=!!(null==(_a=dependencyMap.get(dependent))?void 0:_a.size);if(isChanged){const prevAtomState=getAtomState(dependent),nextAtomState=readAtomState(dependent,!0);isChanged=!prevAtomState||!isEqualAtomValue(prevAtomState,nextAtomState)}isChanged||dependencyMap.forEach((s=>s.delete(dependent)))}loop2(dependent)}}))};loop2(atom)},writeAtomState=(atom,...args)=>{let isSync=!0;const result=atom.write((a=>returnAtomValue(readAtomState(a))),((a,...args2)=>{let r;if(a===atom){if(!hasInitialValue(a))throw new Error("atom not writable");const prevAtomState=getAtomState(a),nextAtomState=setAtomValueOrPromise(a,args2[0]);prevAtomState&&isEqualAtomValue(prevAtomState,nextAtomState)||recomputeDependents(a)}else r=writeAtomState(a,...args2);if(!isSync){const flushed=flushPending();storeListenersRev2.forEach((l=>l({type:"async-write",flushed:flushed})))}return r}),...args);return isSync=!1,result},writeAtom=(atom,...args)=>{const result=writeAtomState(atom,...args),flushed=flushPending();return storeListenersRev2.forEach((l=>l({type:"write",flushed:flushed}))),result},mountAtom=(atom,initialDependent)=>{var _a;null==(_a=getAtomState(atom))||_a.d.forEach(((_,a)=>{const aMounted=mountedMap.get(a);aMounted?aMounted.t.add(atom):a!==atom&&mountAtom(a,atom)})),readAtomState(atom);const mounted={t:new Set(initialDependent&&[initialDependent]),l:new Set};if(mountedMap.set(atom,mounted),mountedAtoms.add(atom),isActuallyWritableAtom(atom)&&atom.onMount){const onUnmount=atom.onMount(((...args)=>writeAtom(atom,...args)));onUnmount&&(mounted.u=onUnmount)}return mounted},unmountAtom=atom=>{var _a;const onUnmount=null==(_a=mountedMap.get(atom))?void 0:_a.u;onUnmount&&onUnmount(),mountedMap.delete(atom),mountedAtoms.delete(atom);const atomState=getAtomState(atom);atomState?(hasPromiseAtomValue(atomState)&&cancelPromise(atomState.v),atomState.d.forEach(((_,a)=>{if(a!==atom){const mounted=mountedMap.get(a);mounted&&(mounted.t.delete(atom),canUnmountAtom(a,mounted)&&unmountAtom(a))}}))):console.warn("[Bug] could not find atom state to unmount",atom)},mountDependencies=(atom,atomState,prevDependencies)=>{const depSet=new Set(atomState.d.keys());null==prevDependencies||prevDependencies.forEach(((_,a)=>{if(depSet.has(a))return void depSet.delete(a);const mounted=mountedMap.get(a);mounted&&(mounted.t.delete(atom),canUnmountAtom(a,mounted)&&unmountAtom(a))})),depSet.forEach((a=>{const mounted=mountedMap.get(a);mounted?mounted.t.add(atom):mountedMap.has(atom)&&mountAtom(a,atom)}))},flushPending=()=>{let flushed;for(flushed=new Set;pendingMap.size;){const pending=Array.from(pendingMap);pendingMap.clear(),pending.forEach((([atom,prevAtomState])=>{const atomState=getAtomState(atom);if(atomState){atomState.d!==(null==prevAtomState?void 0:prevAtomState.d)&&mountDependencies(atom,atomState,null==prevAtomState?void 0:prevAtomState.d);const mounted=mountedMap.get(atom);!mounted||prevAtomState&&!hasPromiseAtomValue(prevAtomState)&&(isEqualAtomValue(prevAtomState,atomState)||isEqualAtomError(prevAtomState,atomState))||(mounted.l.forEach((listener=>listener())),flushed.add(atom))}else console.warn("[Bug] no atom state to flush")}))}return flushed},subscribeAtom=(atom,listener)=>{const mounted=(atom=>{let mounted=mountedMap.get(atom);return mounted||(mounted=mountAtom(atom)),mounted})(atom),flushed=flushPending(),listeners=mounted.l;return listeners.add(listener),storeListenersRev2.forEach((l=>l({type:"sub",flushed:flushed}))),()=>{listeners.delete(listener),(atom=>{const mounted=mountedMap.get(atom);mounted&&canUnmountAtom(atom,mounted)&&unmountAtom(atom)})(atom),storeListenersRev2.forEach((l=>l({type:"unsub"})))}};return{get:readAtom,set:writeAtom,sub:subscribeAtom,dev_subscribe_store:(l,rev)=>{if(2!==rev)throw new Error("The current StoreListener revision is 2.");return storeListenersRev2.add(l),()=>{storeListenersRev2.delete(l)}},dev_get_mounted_atoms:()=>mountedAtoms.values(),dev_get_atom_state:a=>atomStateMap.get(a),dev_get_mounted:a=>mountedMap.get(a),dev_restore_atoms:values=>{for(const[atom,valueOrPromise]of values)hasInitialValue(atom)&&(setAtomValueOrPromise(atom,valueOrPromise),recomputeDependents(atom));const flushed=flushPending();storeListenersRev2.forEach((l=>l({type:"restore",flushed:flushed})))}}};let defaultStore;"number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1;const getDefaultStore=()=>(defaultStore||(1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),defaultStore=createStore()),defaultStore)},"./node_modules/react-cookie/es6/Cookies.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return es6_Cookies}});var cookie=__webpack_require__("./node_modules/cookie/index.js");function readCookie(value,options={}){const cleanValue=function cleanupCookieValue(value){if(value&&"j"===value[0]&&":"===value[1])return value.substr(2);return value}(value);if(!options.doNotParse)try{return JSON.parse(cleanValue)}catch(e){}return value}var es6_Cookies=class Cookies{constructor(cookies,defaultSetOptions={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const previousCookies=this.cookies;this.cookies=cookie.Q(document.cookie),this._checkChanges(previousCookies)};const domCookies="undefined"==typeof document?"":document.cookie;this.cookies=function parseCookies(cookies){return"string"==typeof cookies?cookie.Q(cookies):"object"==typeof cookies&&null!==cookies?cookies:{}}(cookies||domCookies),this.defaultSetOptions=defaultSetOptions,this.HAS_DOCUMENT_COOKIE=function hasDocumentCookie(){return"object"==typeof document&&"string"==typeof document.cookie}()}_emitChange(params){for(let i=0;i<this.changeListeners.length;++i)this.changeListeners[i](params)}_checkChanges(newCookies){new Set(Object.keys(newCookies).concat(Object.keys(this.cookies))).forEach((name=>{newCookies[name]!==this.cookies[name]&&this._emitChange({name:name,value:readCookie(newCookies[name])})}))}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(name,options={}){return options.doNotUpdate||this.update(),readCookie(this.cookies[name],options)}getAll(options={}){options.doNotUpdate||this.update();const result={};for(let name in this.cookies)result[name]=readCookie(this.cookies[name],options);return result}set(name,value,options){options=options?Object.assign(Object.assign({},this.defaultSetOptions),options):this.defaultSetOptions;const stringValue="string"==typeof value?value:JSON.stringify(value);this.cookies=Object.assign(Object.assign({},this.cookies),{[name]:stringValue}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,stringValue,options)),this._emitChange({name:name,value:value,options:options})}remove(name,options){const finalOptions=options=Object.assign(Object.assign({},options),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[name],this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,"",finalOptions)),this._emitChange({name:name,value:void 0,options:options})}addChangeListener(callback){this.changeListeners.push(callback),1===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(callback){const idx=this.changeListeners.indexOf(callback);idx>=0&&this.changeListeners.splice(idx,1),0===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}}}]);