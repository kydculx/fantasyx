'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "73193f7ccf26feaa63df013ed3745fa1",
"index.html": "8afdebcbf128f044dcebcc6cc917e020",
"/": "8afdebcbf128f044dcebcc6cc917e020",
"main.dart.js": "9b899be25b19d1f4caab56b03f38f239",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "712ca857ac26141fb3a5bd96f15d94a3",
"assets/images/card_14.png": "dd57a868d2d24ca49a169ae62991da65",
"assets/images/card_15.png": "e9907b9e6dd4cd59fd9a1423261438dd",
"assets/images/card_17.png": "d0773662a573371aca73e0b27cbf56da",
"assets/images/card_16.png": "2641f8d8eed82542fb5cc36354318b90",
"assets/images/guide_banner.png": "243cdc2c3d9a7e1000056085d7f208ed",
"assets/images/deck_icon_9.png": "17a4ea592823af3499962621a7935bdd",
"assets/images/deck_icon_18.png": "1faa32d094e5dd74fd5d56f833098f69",
"assets/images/card_12.png": "815b0361cdc2835e061c9c6bc0a6b196",
"assets/images/card_13.png": "8d17f4d39a3cda6704739cc1b7ce88f5",
"assets/images/ranking_3_badge.png": "6c44f303c8e4e26bbc695e2dd1e6a1d9",
"assets/images/deck_icon_8.png": "b6feaa9a1c74a43395099c0ac2fac3cc",
"assets/images/card_11.png": "1fa5d9879c27b838d7ec9f8dd460446c",
"assets/images/remove_icon.png": "197dc9454d57bb25400af7cbfe7feb49",
"assets/images/profile_10.png": "936946da62e60dd55f9fd9a76ddb14e6",
"assets/images/card_10.png": "58822b8a7a851f144bcf850d9213d385",
"assets/images/card_9.png": "078be3baf0a430158aa64e485debd4f9",
"assets/images/profile_8.png": "e60b4446b7fc74b79782ec6065f34934",
"assets/images/profile_9.png": "33b65220b91c98a0c48e6625c5eaf68a",
"assets/images/card_8.png": "3030838a734c726d4c2287d94ca3ad7a",
"assets/images/main_banner_03.png": "fc44eb515c3268bf6248ef3ddb31b875",
"assets/images/ranking_2_badge.png": "7c5c994c3f325b874e734b5d765d9684",
"assets/images/main_banner_02.png": "f58c7cf2470abc3c3a708546030e1bd5",
"assets/images/main_banner_01.png": "0d0a843835c3b789a005061398d702ff",
"assets/images/card_3.png": "c5438c44f39a6092cf8b8437600b892f",
"assets/images/profile_2.png": "d4c6ae462552b1df8b65a503f6497fae",
"assets/images/scroll_down.png": "88693912adb9dec9e5f80e5aaff8d9e5",
"assets/images/profile_3.png": "bab5b4f45b4bbf66a333b06891054bbc",
"assets/images/card_2.png": "fcec86431f43705dfeb0cf5436f54f48",
"assets/images/profile_1.png": "a032b30470b92b26e2cd8bcf8708e52e",
"assets/images/logo.png": "3ceb08e8c299b256dc0f0286867da3ed",
"assets/images/card_1.png": "48c678f16463d1a4aa48046b2d7f9727",
"assets/images/profile_4.png": "5de11fdd1e8d6e3fdd4bf3a14a44c945",
"assets/images/card_5.png": "ef3ffb798c596cda623b9e03e655e0f3",
"assets/images/ranking_1_badge.png": "df55c731ed8781c8ded9d16571e3bf3c",
"assets/images/card_4.png": "b79db929447229450b935226ee04ce42",
"assets/images/profile_5.png": "6db0636e9dbc473bccea38abf84c2ebd",
"assets/images/card_6.png": "9a391400cc1f3fd18fa95fd4fd39ebc9",
"assets/images/profile_7.png": "37708ec8ddaddbd07ee1a820c4bcd2fe",
"assets/images/profile_6.png": "1a873ee96e62054e9c9aec772557fcaa",
"assets/images/card_7.png": "5251168e434ba078e4a3618e3e674393",
"assets/images/deck_icon_6.png": "32e9ce036d70e7993613f74a5383c509",
"assets/images/deck_icon_17.png": "d69c512d124b132e337847b5a984afb3",
"assets/images/deck_icon_16.png": "3982286572cdd80231b7b7ed78eb37dd",
"assets/images/deck_empty.png": "c8e6c008fc9dd5b75fe064750f7e5883",
"assets/images/deck_icon_7.png": "2167492de04ace8de9e23418db8bd68a",
"assets/images/deck_icon_5.png": "447d45f8047febf3461527d481d7eb4b",
"assets/images/deck_icon_14.png": "9ffb12006faaaa325ada42a18958f53a",
"assets/images/deck_icon_15.png": "64d4def25d3fd6ea27fc8ba5a7d1752e",
"assets/images/deck_icon_4.png": "aafdb9704079ae7d2c0393a9c916b223",
"assets/images/deck_icon_11.png": "5d4908ed1579a56b4bab11af9e449103",
"assets/images/deck_icon_10.png": "0ebb811790f6e37eb95b47a9e7648134",
"assets/images/deck_icon_1.png": "eac7e157f59b54eea07177b3ad349bc1",
"assets/images/deck_icon_3.png": "9af7ba43b693f06ebcee87c35207f278",
"assets/images/card_18.png": "d065b53277b5ba566764fb6a3db0671d",
"assets/images/deck_icon_12.png": "408d2f072bb488ff3e649691f4b78020",
"assets/images/deck_icon_13.png": "9b6419c68e8586329086221c7c97b86c",
"assets/images/deck_icon_2.png": "47e5fc3c90953726717b6e861bddbc5e",
"assets/AssetManifest.json": "52655a74305db0860554e13e5d9fde35",
"assets/NOTICES": "0bc1893b89138e7353704a1027e15f30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
