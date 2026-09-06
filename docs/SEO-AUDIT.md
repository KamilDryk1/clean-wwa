# Audyt SEO CLEANWWA

Data: 5–6 września 2026. Zakres: kod projektu, wygenerowane pliki `dist`, widoki desktop/mobile oraz odczyt publicznej domeny. Zmiany przygotowano lokalnie; audyt nie obejmuje publikacji ani dostępu do Google Search Console, Profilu Firmy w Google i kont analitycznych.

## Stan publicznej strony

W odczytanej odpowiedzi HTML strona główna i `/cennik/` miały ten sam tytuł „Pranie tapicerki - Clean WWA” i ten sam opis. W początkowym HTML obu stron nie było H1 ani canonicala. To obserwacja kodu odpowiedzi HTTP, nie twierdzenie, że Google nie potrafi wyrenderować dotychczasowego JavaScript.

- `https://cleanwwa.pl/` i `/cennik/`: odpowiedź 200.
- `/cennik` kończy się pod `/cennik/`; linki, canonicale i sitemapę w projekcie dopasowano do tej konwencji.
- HTTP oraz wariant `www` kończą się pod `https://cleanwwa.pl/`.
- `/robots.txt`: odpowiedź 404. Przygotowany `dist/robots.txt` dopuszcza indeksowanie i wskazuje sitemapę.
- `/sitemap.xml`: odpowiedź 200.
- Testowy nieistniejący adres: odpowiedź 404. Ten kod należy zachować po publikacji, również przy własnym wyglądzie strony błędu.

## Wdrożone zmiany w projekcie

| Obszar | Zmiana i weryfikacja |
| --- | --- |
| Renderowanie | Pełny HTML każdej aktywnej strony po `npm run build`. Zawiera treść, nagłówki, linki i metadane jeszcze przed uruchomieniem JS. |
| Tytuły i opisy | Unikalne dla wszystkich 8 stron. Skrócono tytuł strony głównej i oferty B2B; doprecyzowano FAQ oraz H1 usług i cennika. |
| Adresy kanoniczne | Jeden bezwzględny canonical na stronę, domena HTTPS bez www, końcowy `/`. Aliasy `/index.html` i `/cennik/index.html` wskazują właściwy adres główny. |
| Udostępnianie | Open Graph i Twitter Card: tytuł, opis, adres, obraz, opis obrazu; `og:locale=pl_PL` i nazwa firmy. |
| Dane firmy | Jeden spójny węzeł `LocalBusiness` o identyfikatorze `https://cleanwwa.pl/#business`, kontakt, adres, NIP, profile społecznościowe i 31 obsługiwanych lokalizacji. Godziny 7–23 opisują dostępność kontaktu, zgodnie z treścią strony. |
| Dane stron i usług | `WebSite`, `WebPage` / `ContactPage` / `CollectionPage`, `BreadcrumbList`, 7 usług zgodnych z widocznymi sekcjami. Oferta B2B odwołuje się do tego samego identyfikatora firmy. |
| FAQ | Zachowano 37 pytań i odpowiedzi oraz zgodne z nimi `FAQPage`. Nie dodano sztucznych ocen ani danych o recenzjach własnej firmy. |
| Linkowanie | Widoczne okruszki na podstronach, linki kontekstowe między usługami, cenami, galerią, obszarem działania i FAQ. Linki nawigacji mają prawdziwe `href`. |
| Obrazy | 48 grafik ma zoptymalizowane warianty WebP, `srcset`, `sizes` i wymiary. Zdjęcia galerii otrzymały indywidualne opisy na podstawie zawartości zdjęć. |
| Ładowanie | Obraz nagłówka ładuje się od razu z wysokim priorytetem i responsywnym preloadem. Dalsze zdjęcia korzystają z natywnego lazy loading. |
| Galeria i opinie na głównej | Dostępne w HTML, z przewijaniem opartym na CSS scroll snap i przyciskami. Usunięto zależność wyświetlania tych treści od `client-only`; Swiper nie jest ładowany przez plugin aplikacji. |
| Strona błędu | Wygenerowany, czytelny bez JS `404.html`, własny widok błędu w aplikacji, `noindex, follow`, brak canonicala do strony głównej. |
| Blog i mapa witryny | Blog zachowuje przekierowanie do FAQ i `noindex`; sitemap zawiera dokładnie 8 aktywnych stron, bez bloga, 404 i aliasów. |
| Integracje | Zachowano istniejące GTM, loader Google tag, Meta Pixel i CookieYes. Test nadal sprawdza ich obecność, identyfikatory, składnię oraz brak duplikatów. |

## Wydajność i animacje

Suma oryginalnych 48 grafik: **6 524 448 bajtów**. Suma największych wygenerowanych wariantów WebP: **2 528 780 bajtów**, czyli około **61% mniej**. To porównanie całego zestawu grafik, nie transferu jednej strony; mniejsze ekrany mogą pobierać jeszcze mniejsze warianty. Oryginały pozostają w repozytorium.

Zdjęcie wykładziny na stronie B2B zmniejszono z **2 057 610 do 220 322 bajtów** w największym wariancie. Wymiary obrazów rezerwują miejsce w układzie, ograniczając przeskakiwanie treści podczas ładowania.

Cztery używane odmiany fontu Saira Condensed przekonwertowano bez zmiany glifów do WOFF2: **354 200 → 132 596 bajtów**, czyli około **63% mniej**. Odmiany Regular i Bold są wstępnie ładowane z tych samych adresów, które wykorzystuje CSS. Oryginalne TTF i licencja pozostają w projekcie.

Wideo tła uruchamia się po załadowaniu strony i krótkim opóźnieniu, wyłącznie na ekranach od 768 px. Przy oszczędzaniu danych lub `prefers-reduced-motion` nie jest uruchamiane. Nie konkuruje z początkowym ładowaniem obrazu nagłówka na telefonach.

`v-reveal` dodaje delikatne pojawienie się i przesunięcie o 18 px, trwające 560 ms. Wybrane karty mają krótkie opóźnienia. Animacja działa raz na element w czasie jego obecności na stronie; ponowne przewijanie jej nie powtarza. Główne H1 pozostają bez animacji. Treść jest domyślnie widoczna, także bez JavaScript, bez IntersectionObserver i przy ograniczonych animacjach. Zmiana preferencji oraz wejście fokusem przerywają animację.

## Kontrole

`npm run check:dist` sprawdza cały wynik builda: metadane, canonicale, graf JSON-LD, okruszki, indeksowanie, sitemapę, pliki obrazów i ich warianty, linki, integracje, FAQ, obszar działania, wszystkie dotychczasowe ceny oraz 404.

Testy w lokalnym Chrome obejmują 8 stron przy szerokościach 1440, 768, 390 i 320 px, brak poziomego przepełnienia, obrazy nagłówków, aktualizację metadanych po nawigacji, animacje jednokrotne, preferencje ograniczonego ruchu, nawigację mobilną, galerie, aliasy i obsługę 404. Osobny kontekst przeglądarki wyłącza JavaScript, aby sprawdzić dostępność treści.

Lokalne testy blokują zewnętrzne żądania integracji. Nie stanowią pomiaru terenowego Core Web Vitals ani oceny Lighthouse i nie potwierdzają faktycznej indeksacji czy pozycji w Google.

## Po publikacji

1. Wgrać całą zawartość `dist`, w tym `robots.txt`, `sitemap.xml`, `404.html` i katalogi podstron. W konfiguracji hostingu wskazać własny dokument błędu `/404.html`, zachowując HTTP 404. Nie przekierowywać nieistniejących adresów na stronę główną z kodem 200.
2. Sprawdzić publiczne odpowiedzi 200/404 i canonicale po wdrożeniu. Jeżeli hosting obsługuje przekierowania, ustawić stałe przekierowanie `/blog/` do `/pytania-klientow/`; lokalnie działa już wariant HTML i routera.
3. Zgłosić `https://cleanwwa.pl/sitemap.xml` w Google Search Console, sprawdzić reprezentatywne adresy przez inspekcję URL i zweryfikować dane strukturalne na opublikowanym adresie.
4. Sprawdzić w Search Console indeksację i Core Web Vitals po zebraniu danych. Wykonać PageSpeed Insights na produkcji z rzeczywistym hostingiem, fontami i integracjami zgód.
5. Zweryfikować zgodność nazwy, telefonu, obszaru świadczenia usług i godzin kontaktu w Profilu Firmy w Google. Nie zmieniano danych na zewnętrznych kontach.

## Podstawa techniczna

Google zaleca opisowe, zwięzłe tytuły adekwatne do konkretnej strony. [Dokumentacja tytułów](https://developers.google.com/search/docs/appearance/title-link).

Canonicale, sitemapę i linki wewnętrzne należy utrzymywać w spójnej konwencji adresów. [Dokumentacja canonicali](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Linki HTML i dostępna treść ułatwiają odnajdywanie i przetwarzanie stron. [Podstawy JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Dane firmy muszą opisywać rzeczywistą firmę i zgadzać się z widoczną treścią; znaczniki nie gwarantują konkretnego wyglądu wyniku wyszukiwania. [LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business), [zasady danych strukturalnych](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

Wymiary obrazów pomagają ograniczać przesunięcia układu; obrazów widocznych od razu nie należy ładować leniwie. [Lazy loading obrazów](https://web.dev/articles/browser-level-image-lazy-loading), [optymalizacja CLS](https://web.dev/articles/optimize-cls).
