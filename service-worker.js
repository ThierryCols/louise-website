"use strict";var precacheConfig=[["/index.html","a364479e1447341f567ac773186acc74"],["/static/css/main.783a9a87.css","d95ffea337bbb8d6cccc468459ea79f1"],["/static/js/main.7e3ce420.js","8af9ae4e55a969f0c46ab6835f916839"],["/static/media/Tangerine-Bold.ba83db53.ttf","ba83db53ea0a5abd5eaea8595793c9df"],["/static/media/Tangerine-Regular.13dd711b.ttf","13dd711b61d355fd1609732d1f22249f"],["/static/media/asperges.75560c54.jpg","75560c543298d5f19d31adbb3f6a018e"],["/static/media/bbq.d9399ca7.jpg","d9399ca76ead77aae9f07ab0684a5f4f"],["/static/media/canapes.425b206a.jpg","425b206afa8cabdb5c222267c211734a"],["/static/media/closeup.eeef7096.jpg","eeef709627e4730bcfccf9d5ddd56e75"],["/static/media/cuisine.7b8104e6.jpg","7b8104e61c188100923a72be33359c7b"],["/static/media/dessert.dde3741c.jpg","dde3741c4b4bace13d37b0521f8dbf65"],["/static/media/fb_icon.9e64f545.svg","9e64f54560cb063912934b5a011cf8a1"],["/static/media/instagram.3dd84e93.svg","3dd84e93fe03c76d7d7c4117ee6aa168"],["/static/media/interieur_bleu.4384081e.jpg","4384081ec17fbbb80aeaea9933daecdf"],["/static/media/interieur_depuis_cuisine.3a29cabf.jpg","3a29cabf22785890f847b5871f0cfb78"],["/static/media/interieur_depuis_rue.d4848016.jpg","d4848016cf310a47e81e929a1980d745"],["/static/media/interieur_table_closeup.c0f9c1ed.jpg","c0f9c1edd4c88ced54de2e7e83a7e943"],["/static/media/julien_bw.d0a4358f.jpg","d0a4358f20a1eb63002f39d52d8fc1d4"],["/static/media/jus_court.32b14a3e.jpg","32b14a3ee64414882daaadcd53e7ec12"],["/static/media/le_chef.7fab760a.jpg","7fab760a75812eb3c59d6dbf0a84779b"],["/static/media/logo_louise.32e75705.png","32e757052a709a255fac253d49d57ff1"],["/static/media/louise_exterieur.641f9d33.jpg","641f9d3333987b0284402824f43169f9"],["/static/media/louise_tempestlamp_bg.47d12fff.jpg","47d12fff332fab8a75c82a08d12dbf84"],["/static/media/louise_tempestlamp_mobile_bg.1cd894eb.jpg","1cd894eb41acebf06ff377db78c1e3bd"],["/static/media/rhums.3bd88eb6.jpg","3bd88eb689df0f1a14b4eed241507aed"],["/static/media/tablier.50e22111.jpg","50e22111cb7774f7493569bb87b04aa1"],["/static/media/team_bw.502f05b9.jpg","502f05b91df3c981fd46641e7115b98e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});