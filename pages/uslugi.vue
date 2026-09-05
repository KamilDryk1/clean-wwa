<template>
  <main class="services">
    <div class="services__container">
      <div class="services__content">
        <div id="pranie-tapicerki-meblowej" class="services__content-furniture">
          <h2 v-reveal class="services__content-title">
            Czyszczenie tapicerki meblowej
          </h2>
          <div class="elements">
            <p class="services__content-text">
              Pierzemy meble z dojazdem do klienta. Pranie jest wykonywane
              metodą ekstrakcyjną przy użyciu specjalistycznych maszyn wiodących
              marek (Karcher, Prochem), oraz najlepszej chemii dostępnej na
              rynku (Prochem, Chemspec). Na uporczywe plamy typu farba, oleje,
              gumy używamy odpowiednio dobranych odplamiaczy. Dodatkowo usuwamy
              nieprzyjemne zapachy środkami neutralizacyjnymi. Czas schnięcia
              jest uzależniony od temperatury, wilgotność, stopnia zabrudzenia i
              zajmuje od kilku do kilkunastu godzin.
            </p>
            <div v-reveal="90" class="services__content-img">
              <OptimizedImage loading="eager"
                src="/assets/img/Uslugi/meblowa.jpg"
                class=""
                alt="Tapicerka meblowa"
              />
            </div>
          </div>
        </div>
        <div id="pranie-wykladzin-dywanow" class="services__content-carpet">
          <h2 v-reveal class="services__content-title">Pranie wykładzin i dywanów</h2>
          <div class="elements">
            <div v-reveal="90" class="services__content-img">
              <OptimizedImage src="/assets/img/Uslugi/dywany.jpg" class="" alt="Dywan" />
            </div>
            <p class="services__content-text">
              Pranie odbywa się metodą ekstrakcyjną, przy użyciu skutecznych
              środków (Prochem,Chemspec) w domu klienta. Przed właściwym praniem
              jest nanoszony prespray, który zostaje dokładnie rozprowadzony,
              wraz z zebraniem brudu szorowarką. Regularne pranie dywanu pozwoli
              zachować go na dłuższy czas. Dzięki temu zabiegowi zostaną
              usunięte wszelkie roztocza, alergeny i bakterie, oraz nieprzyjemny
              zapach. Zapraszam do kontaktu po więcej informacji.
            </p>
          </div>
        </div>
        <div id="pranie-materacy" class="services__content-mattress">
          <h2 v-reveal class="services__content-title">Pranie materacy</h2>
          <div class="elements">
            <div class="services__content-text">
              <p>Pranie materaca metodą ekstrakcyjną to jedna z najskuteczniejszych technik głębokiego oczyszczania, która pozwala nie tylko na usunięcie powierzchownych plam i zabrudzeń, ale również na eliminację głęboko osadzonych zanieczyszczeń, suchych pyłów, roztoczy, bakterii i alergenów oraz nieprzyjemnych zapachów. Dzięki temu procesowi materac odzyskuje świeżość, a także staje się bardziej higieniczny i bezpieczny dla zdrowia, co jest szczególnie istotne dla osób cierpiących na alergie czy astmę.</p>
              <p class="service-note"><strong>Ważne:</strong> w przypadku prania materacy nie jesteśmy w stanie zagwarantować, że każda żółta plama zejdzie, ale materac będzie higieniczny i czysty.</p>
            </div>
            <figure v-reveal="90" class="services__content-img">
              <OptimizedImage src="/assets/img/Uslugi/materac-przed-po.jpg" alt="Materac przed praniem i po czyszczeniu metodą ekstrakcyjną przez CLEANWWA" loading="lazy" />
              <figcaption>Przed i po praniu materaca – realizacja CLEANWWA.</figcaption>
            </figure>
          </div>
        </div>
        <div id="pranie-tapicerki-samochodowej" class="services__content-auto">
          <h2 v-reveal class="services__content-title">Pranie tapicerki samochodowej</h2>
          <div class="elements">
            <div v-reveal="90" class="services__content-img">
              <OptimizedImage src="/assets/img/Uslugi/auto.jpg" alt="Pranie tapicerki samochodowej" loading="lazy" />
            </div>
            <div class="services__content-text">
              <p>Oferujemy profesjonalne pranie tapicerki samochodowej w Warszawie i okolicach. Do każdego pojazdu podchodzimy w sposób indywidualny, dobierając specjalistyczne i bezpieczne środki czyszczące dopasowane do rodzaju materiału. Cały proces obejmuje dokładne odkurzanie wnętrza, a następnie dogłębne pranie metodą ekstrakcyjną (na mokro). Skutecznie usuwamy trudne plamy po napojach, zalaniach, olejach, farbach oraz trwale eliminujemy nieprzyjemne zapachy (np. po nikotynie czy zwierzętach).</p>
              <p><strong>Kompleksowa usługa zawiera:</strong></p>
              <ul>
                <li>Dokładne pranie tapicerki foteli, kanapy tylnej oraz bocznej tapicerki drzwi.</li>
                <li>Czyszczenie podłogi auta, bagażnika oraz materiałowych dywaników.</li>
                <li>Bonetowanie podsufitki w bezpieczny sposób, po uprzedniej ocenie stanu technicznego materiału.</li>
              </ul>
              <p class="service-note"><strong>Usługę wykonujemy wyłącznie mobilnie, bezpośrednio u klienta.</strong> Do przeprowadzenia prac niezbędny jest dostęp do prądu w zasięgu kabla przedłużającego oraz około 10 litrów czystej wody.</p>
            </div>
          </div>
        </div>
        <div id="czyszczenie-skor" class="services__content-leather">
          <h2 v-reveal class="services__content-title">
            Czyszczenie skór z impregnacją
          </h2>
          <div class="elements">
            <div v-reveal="90" class="services__content-img">
              <OptimizedImage
                src="/assets/img/Uslugi/skora.jpg"
                class=""
                alt="Tapicerka skórzana"
              />
            </div>
            <p class="services__content-text">
              Czyścimy wszelkie skóry oraz zabezpieczamy je po wykonanej usłudze
              przez co zachowują dłużej swoje właściwości. Korzystamy z środków
              wiodącej marki Prochem. Do każdej usługi podchodzimy z dużą
              starannością. Zapraszamy do wyceny usługi!
            </p>
          </div>
        </div>
		<div id="czyszczenie-posadzek" class="services__content-floor">
          <h2 v-reveal class="services__content-title">
            Czyszczenie posadzek
          </h2>
          <div class="elements">
			  <p class="services__content-text">
				  W naszej firmie specjalizujemy się w kompleksowym i profesjonalnym czyszczeniu posadzek zarówno w budynkach firmowych, jak i prywatnych domach. Dzięki wieloletniemu doświadczeniu oraz zastosowaniu najnowocześniejszych technik i środków czyszczących, gwarantujemy osiągnięcie doskonałych efektów. Czyścimy przede wszystkim: gres, granit, posadzki przemysłowe, lastryko oraz PCV.. Już dzisiaj zapoznaj się z naszą ofertą na czyszczenie posadzek. Zadbaj o swoje posadzki.
			  </p>
            <div v-reveal="90" class="services__content-img">
              <OptimizedImage
                src="/assets/img/Uslugi/posadzki.jpg"
                class=""
                alt="Czyszczenie posadzek"
              />
            </div>
          </div>
        </div>
        <div id="wynajem-odkurzacza" class="services__content-rent">
          <h2 v-reveal class="services__content-title">Wynajem odkurzacza</h2>
          <div class="elements">
			  <div v-reveal="90" class="services__content-img">
				  <OptimizedImage
				  src="/assets/img/Uslugi/wynajem.jpg"
				  class=""
				  alt="Odkurzacz"
				  />
				</div>
				<p class="services__content-text">
				  Również możesz wyprać we własnym zakresie tapicerkę meblową,
				  wykładziny, dywany bez pomocy profesjonalisty. Wszystko przez
				  możliwość wypożyczenia odkurzacza piorącego marki Profi, Karcher.
				  Dzięki tej usłudze jesteś w stanie zaoszczędzić znaczną kwotę.
				</p>
          </div>
        </div>
      </div>
      <div class="content-note services-links"><p>Sprawdź <nuxt-link to="/cennik/">ceny prania tapicerki i wykładzin</nuxt-link>, zobacz <nuxt-link to="/galeria/">efekty naszych realizacji</nuxt-link> lub przeczytaj <nuxt-link to="/pytania-klientow/">jak przygotować się do wizyty</nuxt-link>.</p><p>Szukasz obsługi biura? Poznaj <nuxt-link to="/dla-firm/">ofertę czyszczenia dla firm</nuxt-link>.</p></div>
    </div>
  </main>
</template>

<script>
import { structuredData } from '~/utils/structured-data';
const services = [
  ['pranie-tapicerki-meblowej', 'Czyszczenie tapicerki meblowej'],
  ['pranie-wykladzin-dywanow', 'Pranie wykładzin i dywanów'],
  ['pranie-materacy', 'Pranie materacy'],
  ['pranie-tapicerki-samochodowej', 'Pranie tapicerki samochodowej'],
  ['czyszczenie-skor', 'Czyszczenie skór z impregnacją'],
  ['czyszczenie-posadzek', 'Czyszczenie posadzek'],
  ['wynajem-odkurzacza', 'Wynajem odkurzacza'],
];


export default {


  layout: "services",
  head() {
    return structuredData('services-schema', {
      '@context': 'https://schema.org',
      '@graph': services.map(([id, name]) => ({ '@type': 'Service', '@id': `https://cleanwwa.pl/uslugi/#${id}`, url: `https://cleanwwa.pl/uslugi/#${id}`, name, serviceType: name, provider: { '@id': 'https://cleanwwa.pl/#business' }, areaServed: 'Warszawa i okolice' })),
    });
  },
};
</script>

<style lang="scss" scoped>
.services-links a { color: var(--brand); text-underline-offset: 3px; }
.services__container { max-width: 1280px; margin: auto; padding: 0 6%; }
.services__content > div { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); column-gap: 48px; padding: var(--section-space) 0; border-bottom: 1px solid var(--line); align-items: start; }
.services__content > div:last-child { border: 0; }
.services__content-title { grid-column: 1; grid-row: 1; text-align: left; }
.services__content .elements { display: contents; }
.services__content-text { grid-column: 1; grid-row: 2; line-height: 1.65; }
.services__content-img { grid-column: 2; grid-row: 1 / span 2; align-self: center; }
.services__content-img img { display: block; width: 100%; height: auto; border-radius: 12px; }
.services__content > div:nth-child(even) .services__content-title, .services__content > div:nth-child(even) .services__content-text { grid-column: 2; }
.services__content > div:nth-child(even) .services__content-img { grid-column: 1; }
.services__content-text p + p { margin-top: 20px; }
.services__content-text ul { padding-left: 24px; margin: 16px 0; }
.services__content-text li + li { margin-top: 10px; }
.service-note { padding: 20px; border-left: 3px solid var(--brand); background: var(--surface); border-radius: 0 8px 8px 0; font-size: 18px; }
figcaption { font-size: 16px; color: var(--muted); margin-top: 12px; }
@media (max-width: 800px) {
  .services__content > div { display: flex; flex-direction: column; gap: 0; }
  .services__content-title { order: 0; }
  .services__content-text { order: 1; }
  .services__content-img { order: 2; margin-top: 28px; width: 100%; }
}
</style>
