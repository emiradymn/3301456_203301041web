'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f914eea78501e8139eccb2bb3ab5b9aa",
"assets/assets/fonts/BlackOpsOne-Regular.ttf": "0a0055cabc89752001e4195c355e7d54",
"assets/assets/images/aksesuar1.jpeg": "4ad3da5ac37c0772d47bf60fee65d641",
"assets/assets/images/aksesuar10.jpeg": "1da4177dc228afa8887a2ff8f2caedcb",
"assets/assets/images/aksesuar2.jpeg": "e7db1bb16ae55789facc02be91a8b4d1",
"assets/assets/images/aksesuar3.jpeg": "810b1baa380534e2938ebd469d751c84",
"assets/assets/images/aksesuar4.jpeg": "73744bfdb78a7e5925686277405f61bc",
"assets/assets/images/aksesuar5.jpeg": "efa5208ee8b1d9e7e40d80621e790a05",
"assets/assets/images/aksesuar6.jpeg": "05b0a31239fc59275dc6f6602864025c",
"assets/assets/images/aksesuar7.jpeg": "e7d137749e23369cfded5fbdce93b085",
"assets/assets/images/aksesuar8.jpeg": "da0bd592bccc0ea7ed4352e2cc149a2d",
"assets/assets/images/aksesuar9.jpeg": "7c209c8e97f52cd958bf467e3df9727f",
"assets/assets/images/body1.jpg": "b79be7c4341dbedd65226f133045d40a",
"assets/assets/images/body10.jpg": "6ccf829765f31c0644b8692d08d55e44",
"assets/assets/images/body11.jpg": "848212e2a3407781db106ae53a1cc929",
"assets/assets/images/body13.png": "c7df7c770d74418b7c26f0dac0fd51ff",
"assets/assets/images/body14.jpg": "5e03bacf14871814bbe9a7e27a4c944e",
"assets/assets/images/body15.jpg": "7b5283a66db43f967f0d9115bcf8a6d0",
"assets/assets/images/body2.jpg": "2481738d4fc385bfe69dfea3e9258f18",
"assets/assets/images/body3.jpg": "b300e0597f008dd8fc9e17421903a0d3",
"assets/assets/images/body6.jpg": "0e5e34d2abcd56a65a0f0e7d6aef93d6",
"assets/assets/images/body7.jpg": "f55acbbf7c8e62dd4754bf5117002a48",
"assets/assets/images/body8.jpg": "374f365e3ae0372fecb49ec4d9a5493a",
"assets/assets/images/body9.jpg": "66d253a57831e04259264662fa8ae5e0",
"assets/assets/images/fit1.jpg": "300ea4c375a1d9c5b402021226392f7c",
"assets/assets/images/fit11.jpg": "be7e5cfc0b2df5982914b98329e0a88f",
"assets/assets/images/fit2.jpg": "c3939cef428da86c3cedfb8d18c16320",
"assets/assets/images/fit3.jpg": "99d02fee1b30357bb7837f384a7cb42f",
"assets/assets/images/fit5.png": "be5e0235a6e636628bd4bcb18eb4480a",
"assets/assets/images/fit6.jpg": "3eab7826c5ea5fedd8473f4d1ef47283",
"assets/assets/images/gainer1.jpeg": "e01893b909b815b215db6a1a6d58da02",
"assets/assets/images/gainer2.jpeg": "a710d16fe721b8bd748aa9b650ef80d0",
"assets/assets/images/gainer3.jpeg": "b57b31ac8595279eda17e2c71ee3f7ba",
"assets/assets/images/gainer4.jpeg": "84adbb0acd8dc88cf72b757818263f8f",
"assets/assets/images/gainer5.jpeg": "9f6ca99dbe62a151b9d53428b5e41534",
"assets/assets/images/gainer6.jpeg": "2b46c9db39de174ac5c6a3dfce810ffd",
"assets/assets/images/kap1.jpeg": "1e170a15582347ee547a29f3fa3cb049",
"assets/assets/images/kap2.jpeg": "4f5e2f6b219f7f1ef4df227d9e96f570",
"assets/assets/images/kreatin1.jpeg": "3cf1ab055f206d67df2e47759debe102",
"assets/assets/images/kreatin2.jpeg": "7f73671e8e2a13456f7f8fe707179d3d",
"assets/assets/images/kreatin3.jpeg": "c4e20fff38f12a99ef43e6f2db6d1122",
"assets/assets/images/kreatin4.jpeg": "93c0f50a231d1df89bde057d4179cac7",
"assets/assets/images/kreatin5.jpeg": "33443a73b41842c2f0146f4abf6af4f8",
"assets/assets/images/kreatin6.jpeg": "0bc6ea16127f16b13c1006bf56102c01",
"assets/assets/images/preworkout1.jpeg": "9e1bfd56b50071473a1a13b04a1d44cf",
"assets/assets/images/preworkout2.jpeg": "f1d30ea0a5f946b1615072c07a90e8a2",
"assets/assets/images/preworkout3.jpeg": "158735248e184f9c93417b4f5c67dc1a",
"assets/assets/images/preworkout4.jpeg": "fe05912e366171181dcce2f26140acd9",
"assets/assets/images/preworkout5.jpeg": "3720a36e362f2bedb72bc4c7c2cd0d3a",
"assets/assets/images/preworkout6.jpeg": "d092fd93e15b1731851b3c592caf5d7d",
"assets/assets/images/protein1.jpeg": "340235964a7fb41b72cf8a64ce52fd08",
"assets/assets/images/protein2.1.png": "9ac509f5456e94fd0b6f6446677cd857",
"assets/assets/images/protein2.jpeg": "49212bc500fb4b40369ed02a3fdded6f",
"assets/assets/images/protein3.jpeg": "5646142dc58033be486a9f89637461bd",
"assets/assets/images/protein4.jpeg": "c6bd2b0c78437172911fc77a73d648a8",
"assets/assets/images/protein5.jpeg": "0b4a9c2b99971d8c2b1a07c910e802d5",
"assets/assets/images/protein6.jpeg": "34f7d552ffc197a9815503426c0a56fb",
"assets/assets/images/shaker1.jpeg": "01ca0f093ac96ac9447cf6a9ed0ebaf7",
"assets/assets/images/shaker2.jpeg": "9d75eb43cd8653238023c24a80ac0250",
"assets/assets/images/shaker3.jpeg": "f06d2e327198edaf896727014f630e64",
"assets/assets/images/shaker4.jpeg": "8b1741be4f60eae08ae35cba1f4483f5",
"assets/assets/images/vitamin1.jpeg": "6858474f5623dd3bf793a3a9bfb127d4",
"assets/assets/images/vitamin2.jpeg": "f70d70a97bf530658cd6f86f2c5c947c",
"assets/assets/images/vitamin3.jpeg": "eb722c7aba8f3c6e32950612e70a7f16",
"assets/assets/images/vitamin4.jpeg": "ed880be6676e988a0f0338fbb2e4f8ae",
"assets/assets/images/vitamin5.jpeg": "68bc7acccf12c1d4f45cf2521c9baf86",
"assets/assets/images/vitamin6.jpeg": "76c656e60d7f826931a9a7e811e0ae9f",
"assets/assets/images/yemek1.jpg": "f1ebe5d73c3ec5124227f24ba73a4639",
"assets/assets/images/yemek10.webp": "8cda8e6c2670dd1e717564e68f498f4f",
"assets/assets/images/yemek3.jpg": "626666de5ebaceb87d91eebda0e9ffe3",
"assets/assets/images/yemek4.webp": "bfc0ee0a671db5785a4372153adcf5a4",
"assets/assets/images/yemek5.jpg": "72ed8c57770b08fd20083c29a6c14e97",
"assets/assets/images/yemek6.webp": "79c2fe320aeda4e9fa5896af41a9710a",
"assets/assets/images/yemek7.jpg": "37454a6044f287c45704b5c8e236cd45",
"assets/assets/images/yemek9.jpg": "2207e3be2379ee74fb43871a5f792c3a",
"assets/assets/images/yuvarlaklogo.png": "6d09f429b99d3e9c1fab990867c271b1",
"assets/FontManifest.json": "b6b32ca70f4c44ead7772efafc9d5edf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08f5b4661f42b114136eaff8e06b2592",
"/": "08f5b4661f42b114136eaff8e06b2592",
"main.dart.js": "5bf79ea2944a9e3a197cd3e1044d2fcc",
"manifest.json": "71bb6fa12448f971385070cab0b579cb",
"version.json": "5ad90bdce2849ed05ac225269e05c4b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
