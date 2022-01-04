/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5cdf2571947b75dc5d57eb08c11e43e7"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ec1ab2ed.css",
    "revision": "7f015db3e66e0edd0edcee08eed5e1eb"
  },
  {
    "url": "assets/img/CreateDatafile.4ab00e5a.png",
    "revision": "4ab00e5a22d36c2875c0a984b6699930"
  },
  {
    "url": "assets/img/CreateDataset.13ef445e.png",
    "revision": "13ef445e07934f2c5fdee59b52ba44e2"
  },
  {
    "url": "assets/img/DeleteDatafile.af3ccb90.png",
    "revision": "af3ccb9087115eec21714d698ef58b89"
  },
  {
    "url": "assets/img/DeleteDataset.132523d1.png",
    "revision": "132523d1cc26bffcc0f1ed5b052679f2"
  },
  {
    "url": "assets/img/GetAllDatafiles.422bf00b.png",
    "revision": "422bf00bdcd508cff3361a32c5640198"
  },
  {
    "url": "assets/img/GetAllDatafilesInDataset.23055851.png",
    "revision": "23055851f870d67d396f2b5afc447644"
  },
  {
    "url": "assets/img/GetAllDatasets.cf558662.png",
    "revision": "cf558662ebe05d4bbda9f1ca7963032d"
  },
  {
    "url": "assets/img/GetDatafileInDatasetById.8236b005.png",
    "revision": "8236b005e78bf6c32133a0a91faa53aa"
  },
  {
    "url": "assets/img/GetDatasetById.37a9d1f7.png",
    "revision": "37a9d1f79646945cbc3a5e17956c977d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SQL_scheme.08c064f0.png",
    "revision": "08c064f0cfd9ec80be9732e84784e8be"
  },
  {
    "url": "assets/img/UpdateDatafile.d6329ae8.png",
    "revision": "d6329ae8e4916f3bb86ac32f32a5c372"
  },
  {
    "url": "assets/img/UpdateDataset.17ee287f.png",
    "revision": "17ee287f550b979fa4199bfc81096498"
  },
  {
    "url": "assets/js/10.1f0b2db4.js",
    "revision": "7261d191012f74783ea34f4f8a154111"
  },
  {
    "url": "assets/js/11.2db13ea8.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.04791660.js",
    "revision": "ecf163b4cefceb8e30e509ee10eaaf6f"
  },
  {
    "url": "assets/js/13.500837e6.js",
    "revision": "3f2b81417dd1c8bb9b68f6752dbf0f89"
  },
  {
    "url": "assets/js/14.ea916717.js",
    "revision": "a5fa3be4087ea846ea72c874302fffe7"
  },
  {
    "url": "assets/js/15.b2c8db1a.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.c8506fcd.js",
    "revision": "3fae09b010dafd1d4152b7d80cbb32d2"
  },
  {
    "url": "assets/js/17.25b47757.js",
    "revision": "57b283282cbe91f27f774445b307149e"
  },
  {
    "url": "assets/js/18.a7d487ca.js",
    "revision": "21de0fae8f972d8575c3213c8eb075b5"
  },
  {
    "url": "assets/js/19.3146e2b8.js",
    "revision": "99f1fb6e9ee915940793efb65ad3ab34"
  },
  {
    "url": "assets/js/2.f9deb490.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.03e0853e.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.1d813f95.js",
    "revision": "8cbe5ccaab6bfe1ac73aabc7189932e1"
  },
  {
    "url": "assets/js/22.964e134f.js",
    "revision": "04c0968f725c2506e4d840d8d5469d4b"
  },
  {
    "url": "assets/js/23.f68ddb1e.js",
    "revision": "96753db895ff06fb99d1ba1df20b39f2"
  },
  {
    "url": "assets/js/24.f309a456.js",
    "revision": "d573a42394be1e19a0ce45cf8f05df27"
  },
  {
    "url": "assets/js/25.ec993620.js",
    "revision": "70bf3c132f069dbe97263ec168a48e90"
  },
  {
    "url": "assets/js/26.05733454.js",
    "revision": "91521429148346ec1f0e8d6faf69b8e7"
  },
  {
    "url": "assets/js/28.25540517.js",
    "revision": "fc272a814812339bb8e0a9924b0e8a8a"
  },
  {
    "url": "assets/js/3.cb3cca81.js",
    "revision": "8be872f6d6b9a70a0213d7f34bfa60ad"
  },
  {
    "url": "assets/js/4.2905fd12.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.19446e2c.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.7525d4ef.js",
    "revision": "a0a4cee121c8320f622cb3df1cd0675d"
  },
  {
    "url": "assets/js/7.63bbc8ba.js",
    "revision": "551fa76df78ffe15a8e30aa95237f044"
  },
  {
    "url": "assets/js/8.3a86f016.js",
    "revision": "2d2f62a3531e0c4502d404d9577c62a9"
  },
  {
    "url": "assets/js/9.2d16f536.js",
    "revision": "5b9395e5038943e959cbbc77ceb89ea4"
  },
  {
    "url": "assets/js/app.ebea273d.js",
    "revision": "8bc47f4f9b87885da41d01ebf991b308"
  },
  {
    "url": "conclusion/index.html",
    "revision": "eb8e8c680d1ad18ad1f79b88c7421a66"
  },
  {
    "url": "design/index.html",
    "revision": "22033d681e3899ddaf59ad1d4bad010b"
  },
  {
    "url": "index.html",
    "revision": "07b310045af6057827b9d5597b412de7"
  },
  {
    "url": "intro/index.html",
    "revision": "44f35e6d3bb095ec9476a3f85ddf9eb7"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1f5ed73276dc854de2602f3a6f30c4bf"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c79ce84e8598a357c1450160fd882392"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "40737886e1192ff0ec6fe6a2cf87c00b"
  },
  {
    "url": "software/index.html",
    "revision": "a629ece37dc9feb55be022abf25ef21f"
  },
  {
    "url": "test/index.html",
    "revision": "949ab62f787b7deb43be02c061b99af8"
  },
  {
    "url": "use cases/DataConsumer.html",
    "revision": "57eb713ce450ecaacdb1e2deacaa9fd0"
  },
  {
    "url": "use cases/DataPublisher.html",
    "revision": "4005a2c4d1d382a43589fd6382018b90"
  },
  {
    "url": "use cases/index.html",
    "revision": "4fe0e991ce8314b9334656247c8745d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
