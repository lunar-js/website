import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL, cleanupOutdatedCaches } from 'workbox-precaching';
import { setDefaultHandler, registerRoute, NavigationRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst, CacheFirst } from 'workbox-strategies';

setCacheNameDetails({
	prefix: 'djs',
	suffix: 'v3',
	precache: 'precache',
	runtime: 'runtime',
});

void caches.delete('djs-precache-v1');
void caches.delete('djs-cdn-v1');
void caches.delete('djs-external-v1');
void caches.delete('djs-docs-v1');

// eslint-disable-next-line @typescript-eslint/no-use-before-define
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')));

const defaultStrategy = new StaleWhileRevalidate({
	cacheName: 'djs-external-v3',
	plugins: [
		new ExpirationPlugin({
			maxEntries: 50,
			maxAgeSeconds: 60 * 60 * 24,
			purgeOnQuotaError: true,
		}),
		new CacheableResponsePlugin({
			statuses: [0, 200],
		}),
	],
});

setDefaultHandler((args) => {
	if (args.request.method === 'GET') {
		return defaultStrategy.handle(args);
	}
	return fetch(args.request);
});

registerRoute(
	/^https:\/\/raw\.githubusercontent\.com\/lunar-js\/.*\.json/i,
	new NetworkFirst({
		cacheName: 'djs-docs-v3',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 20,
				maxAgeSeconds: 60 * 60 * 24 * 7,
				purgeOnQuotaError: true,
			}),
		],
	}),
);

registerRoute(
	/^.*\\.(png|jpg|jpeg|gif|svg|ico)/i,
	new CacheFirst({
		cacheName: 'djs-media-v3',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 50,
				maxAgeSeconds: 60 * 60 * 24,
				purgeOnQuotaError: true,
			}),
		],
	}),
);

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
	void self.skipWaiting();
});

self.addEventListener('message', (event) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	if (event.data && event.data.type === 'SKIP_WAITING') {
		void self.skipWaiting();
	}
});
