const app_name = "fuzzyhome"
let p = console.log
import { version } from './package.json'
const app_prefix = "{app_name}_cache"
const cache_name = "sw-{app_prefix}-{version}"
p cache_name

let urls = [
	'./',
	'./__assets__/all.css'
	'./__assets__/app/client.js'
	'./__assets__/app/client.css'
]

self.addEventListener('fetch') do |e|
	p "{cache_name} fetch"
	def intercept request
		if request
			p "{cache_name} responding with cache {e.request.url}"
			request
		else
			p "{cache_name} not cached, fetching {e.request.url}"
			fetch e.request
	e.respondWith(caches.match(e.request.url).then(intercept))

self.addEventListener('install') do |e|
	p "{cache_name} install"
	def add_urls_to_cache cache
		p "{cache_name} adding urls to cache"
		cache.addAll urls
		skipWaiting!
	e.waitUntil(caches.open(cache_name).then(add_urls_to_cache))

self.addEventListener('activate') do |e|
	p "{cache_name} activate"
	def delete_cached keys
		let temp = keys.map! do |key, i|
			p "{cache_name} checking cache {key}"
			if key !== cache_name
				p "{cache_name} deleting cache {keys[i]}"
				caches.delete key
		Promise.all(temp)
	e.waitUntil(caches.keys().then(delete_cached))
