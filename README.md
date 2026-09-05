# CLEANWWA

## Uruchomienie i build

```bash
npm install
npm run dev
npm run build
npm run check:dist
```

`npm run build` oraz `npm run generate` generują gotowy do publikacji katalog `dist/`.
Wysyłaj na hosting całą zawartość tego katalogu, a nie sam `index.html`.
Podstrony mają własne pliki HTML z treścią, metadanymi i adresami kanonicznymi.
`npm run build:server` zachowuje możliwość wykonania samego `nuxt build`.

## Materiały klienta

- `/pytania-klientow`: 37 odpowiedzi z filtrowaniem kategorii i danymi FAQPage.
- `/gdzie-dzialamy`: 18 dzielnic, 13 miejscowości i gmin, mapa, wyszukiwarka oraz formularz wyceny.
- `/dla-firm`: usługi B2B, sprzęt, korzyści i cennik netto z VAT 23% i minimum 200 zł netto.
- `/uslugi`: pranie materacy jako trzecia usługa, zdjęcie przed/po oraz nowy opis prania tapicerki samochodowej.
- Blog usunięto z nawigacji i mapy witryny. `/blog` jest stroną przekierowania do FAQ, również bez JavaScript, z `noindex`.

Treści znajdują się w `data/faq.js`, `data/locations.js` i `data/companies.js`.
Metadane i wspólna zasada dojazdu są w `data/site.js`. Zgodnie z decyzją właściciela:
Warszawa gratis, koszt dojazdu poza Warszawę ustalany podczas wyceny.
Zdjęcia z materiałów klienta znajdują się w `static/assets/img/Uslugi/materac-przed-po.jpg`
i `static/assets/img/Obszar/warszawa.jpg`.

Formularz obszaru działania korzysta z tego samego konta Web3Forms co istniejący formularz.
Obsługuje błąd, ponowną próbę, oczekiwanie i potwierdzenie dopiero po odpowiedzi `success: true`.
Testy formularza używają atrap odpowiedzi API i nie wysyłają wiadomości do klienta.

## Wspólny wygląd strony

Wszystkie aktywne podstrony używają `PageIntro.vue` i `Navbar.vue`. Nagłówki mają
wspólną typografię, nakładkę na zdjęcie i odstępy. Strona główna zachowuje wideo.
`assets/css/content.scss` definiuje wspólne szerokości, kolory, odstępy, przyciski,
tabele i formularze. Dane dotychczasowego cennika przeniesiono do `data/pricing.js`
bez zmiany kwot.

Menu mobilne ma zaznaczenie aktywnej strony, przewijanie na niskich ekranach,
zamknięcie klawiszem Escape i po kliknięciu poza panelem oraz blokadę przewijania
strony w tle. Formularz kontaktowy i formularz obszaru działania używają wspólnych
stylów oraz obsługi odpowiedzi Web3Forms.

## Integracje dodawane automatycznie

`app.html` to szablon Nuxt zastępujący ręczne kopiowanie z `index-example-3.html`:

- Google Tag Manager `GTM-M98BZDK` i jego wariant `noscript`;
- istniejący loader Google tag `G-RZXEW35YZW`;
- Meta Pixel `545261208667560`, inicjalizacja PageView i obraz `noscript`;
- CookieYes `b82f63af74b22b08ba61f4cd`, przed wykonywalnymi skryptami integracji;
- integracja Facebook Customer Chat oraz kontenery DOM z referencyjnego HTML,
  z poprawioną kolejnością elementów i bez błędnego kodowania cudzysłowów.

Nie dodajemy drugi raz tych skryptów w `nuxt.config.js` ani w komponentach.
Hashowane pliki Nuxt i znaczniki `data-n-head` generuje framework.
Pozostawiono ustawienia identyfikatorów z dostarczonego HTML; nie wprowadzono dodatkowych
zdarzeń konwersji ani konfiguracji Google Ads z innych, starszych plików przykładowych.
Ustawienia kont GTM, CookieYes i Meta pozostają po stronie dostawców. Lokalne testy
sprawdzają obecność i składnię integracji, nie odbiór zdarzeń na kontach produkcyjnych
ani dostępność starszej usługi Facebook Customer Chat.

`static/robots.txt` wskazuje `https://cleanwwa.pl/sitemap.xml`, generowany przez Nuxt.

## SEO i animacje

Szczegółowe wyniki przeglądu i czynności po publikacji: [docs/SEO-AUDIT.md](docs/SEO-AUDIT.md).

- `mixins/seo.js` oraz `data/site.js`: tytuły, opisy, canonicale z końcowym `/`, Open Graph i Twitter Card.
- `utils/site-schema.js`: wspólny graf firmy, witryny, stron i okruszków nawigacyjnych. Usługi i FAQ dodają własne dane zgodne z widoczną treścią.
- `pages/404.vue`: Nuxt generuje z tej trasy plik `dist/404.html`; `layouts/error.vue` obsługuje błędy podczas nawigacji. Hosting powinien podawać dokument błędu z kodem HTTP 404.
- `components/OptimizedImage.vue`, `data/images.json` i `static/assets/optimized/`: responsywne warianty WebP (jakość 80, do 1600 px), wymiary obrazów i natywne lazy loading. Warianty są zapisane w repozytorium; build nie wymaga dodatkowej biblioteki do ich konwersji. Przy zmianie zdjęcia trzeba odświeżyć jego warianty oraz wpis manifestu.
- `components/ContentCarousel.vue`: galerie i opinie w HTML, przewijanie CSS i przyciski. Nie wymagają Swipera ani automatycznego przesuwania.
- `plugins/reveal.js`: dyrektywa `v-reveal` animuje element raz przy pierwszym wejściu w widok. `v-reveal="70"` dodaje opóźnienie 70 ms (maksymalnie 180 ms). Nie zagnieżdżać animowanych bloków i nie dodawać dyrektywy do H1, całych długich sekcji ani kontrolek formularzy.

Treści pozostają widoczne bez JavaScript i IntersectionObserver. Animacje respektują
`prefers-reduced-motion`, również po zmianie ustawienia. Wideo główne jest odroczone
i wyłączone na telefonach, przy ograniczonych animacjach i oszczędzaniu danych.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
