"use strict";var precacheConfig=[["/index.html","45f17c2ff31b91c0c5002b5f1a3d0884"],["/static/css/main.ce9362f1.css","485035380aa7e7514c6d0c125aad3fe3"],["/static/js/main.b774d12a.js","41b021f884ccff64600f95e4dc0494d2"],["/static/media/Tangerine-Bold.ba83db53.ttf","ba83db53ea0a5abd5eaea8595793c9df"],["/static/media/Tangerine-Regular.13dd711b.ttf","13dd711b61d355fd1609732d1f22249f"],["/static/media/bg_louise.89e15c9a.jpg","89e15c9a84a0973c49ebf23c9e13482d"],["/static/media/logo_louise.32e75705.png","32e757052a709a255fac253d49d57ff1"],["/static/media/logo_louise_poisson.4a039ebf.png","4a039ebf43dcdc7d6d6fa266eed68a48"],["/static/media/logo_louise_texte.d8a404b8.png","d8a404b8312271988892e0fa7703e2a2"],["/static/media/louise_dessert.f4cb59a0.jpg","f4cb59a0b2de919ccbb6dde4aa649883"],["/static/media/louise_dessert_2_600.f2fdd323.jpg","f2fdd323d4bdb2dda9081992106d1247"],["/static/media/louise_entree_2_600.0a6bc1d9.jpg","0a6bc1d9b038c0d8342ae9a8789e2eb0"],["/static/media/louise_plat.88e9bd06.jpg","88e9bd06dbb30da73456f342f4070f16"],["/static/media/louise_plat_2_600.80caecec.jpg","80caecec7a6e2d22c518a3e5cb33f414"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});