//__HEAD__
// package.json
var version = "0.1.37";

// sw.imba
var app_name = "fuzzyhome";
var app_prefix = "" + app_name + "_cache";
var cache_name = "sw-" + app_prefix + "-" + version;
var p = function(s) {
  return console.log("" + cache_name + " " + s);
};
p("loaded");
var urls = [
  "./",
  "./__assets__/all.css",
  "./__assets__/app/client.js",
  "./__assets__/app/client.css"
];
globalThis.addEventListener("fetch", function(e) {
  p("fetch");
  function intercept(request) {
    if (request) {
      p("responding with cache " + e.request.url);
      return request;
    } else {
      p("not cached, fetching " + e.request.url);
      return this.fetch(e.request);
    }
    ;
  }
  ;
  return e.respondWith(caches.match(e.request.url).then(intercept));
});
globalThis.addEventListener("install", function(e) {
  p("install");
  function add_urls_to_cache(cache) {
    p("adding urls to cache");
    cache.addAll(urls);
    return this.skipWaiting();
  }
  ;
  return e.waitUntil(caches.open(cache_name).then(add_urls_to_cache));
});
globalThis.addEventListener("activate", function(e) {
  p("activate");
  function delete_cached(keys) {
    var self = this;
    let temp = keys.map(async function(key, i) {
      p("checking cache " + key);
      if (key !== cache_name) {
        p("deleting cache " + key);
        let result = await self.caches.delete(key);
        return p("deletion of " + key + " result: " + result);
      }
      ;
    });
    return Promise.all(temp);
  }
  ;
  return e.waitUntil(caches.keys().then(delete_cached));
});
//__FOOT__
