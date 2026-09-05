<template>
  <main class="content-page">
    <PageIntro image="/assets/img/Obszar/warszawa.jpg" eyebrow="Gdzie działamy" title="Pranie tapicerki i wykładzin w całej Warszawie i okolicach" description="Nasza baza znajduje się na Woli, przy ul. Kasprzaka 29c. Stąd dojeżdżamy do mieszkań, domów i firm w każdej dzielnicy Warszawy oraz w pobliskich miastach i gminach.">
      <div class="area-stats"><p><strong>{{ districts.length }}</strong> dzielnic Warszawy</p><p><strong>{{ towns.length }}</strong> miast i gmin w okolicy</p></div>
    </PageIntro>
    <section class="content-section content-section--soft">
      <div class="content-wrap area-finder-grid">
        <div>
          <h2 v-reveal>Z dojazdem pod Twój adres</h2>
          <p>{{ travelPolicy }}</p>
          <p class="area-mobile-note">Usługi wykonujemy mobilnie, bezpośrednio u klienta. Nie prowadzimy punktu przyjęć mebli ani samochodów.</p>
        </div>
        <div class="area-finder">
          <label for="location-search">Sprawdź, czy działamy w Twojej okolicy</label>
          <p id="location-search-hint">Wpisz dzielnicę lub miasto, np. Mokotów, Łomianki, Piaseczno.</p>
          <input id="location-search" v-model="query" type="search" placeholder="Dzielnica lub miasto" autocomplete="off" aria-describedby="location-search-hint" />
          <div v-if="query.trim()" class="area-results" aria-live="polite">
            <ul v-if="matches.length"><li v-for="location in matches" :key="location.slug"><a :href="`#${location.slug}`" @click.prevent="goToLocation(location.slug)">{{ location.name }} – zobacz szczegóły →</a></li></ul>
            <p v-else>Nie widzisz swojej lokalizacji? <a href="#wycena" @click.prevent="enquire('Inna lokalizacja')">Zapytaj o dojazd i wycenę.</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="content-wrap content-section">
      <h2 v-reveal>Jedna firma, cała aglomeracja warszawska</h2>
      <p class="section-lead">Mapa poglądowa naszych lokalizacji. Wybierz punkt, aby przejść do opisu dzielnicy lub miejscowości. Lokalizacje znajdziesz również na listach poniżej.</p>
      <div class="area-map" role="group" aria-label="Poglądowa mapa obszaru działania CLEANWWA">
        <svg viewBox="0 0 800 800" aria-labelledby="area-map-title">
          <title id="area-map-title">Dzielnice Warszawy i pobliskie miejscowości. Baza CLEANWWA na Woli.</title>
          <circle cx="400" cy="400" r="255" class="map-ring" />
          <circle cx="400" cy="400" r="360" class="map-ring" />
          <path d="M460 20 C500 120 425 260 470 400 C512 540 478 650 540 780" class="map-river" />
          <a v-for="location in allLocations" :key="location.slug" :href="`#${location.slug}`" :aria-label="`${location.name} – zobacz szczegóły`" class="map-node" :class="{ 'map-node--town': location.type === 'town', 'map-node--hub': location.isHub }" @click.prevent="goToLocation(location.slug)">
            <circle :cx="location.x" :cy="location.y" r="19" class="map-target" />
            <circle :cx="location.x" :cy="location.y" :r="location.isHub ? 12 : 7" />
            <text :x="location.x" :y="location.y + (location.dy || -17)" :text-anchor="location.anchor || 'middle'">{{ location.name }}</text>
          </a>
        </svg>
        <div class="map-legend"><span>● Dzielnice Warszawy</span><span>● Okolice Warszawy</span><span>Wola – baza CLEANWWA</span></div>
        <p class="map-note">Mapa poglądowa, nie w skali. Koszt dojazdu poza Warszawę potwierdzamy przy wycenie.</p>
      </div>
    </section>
    <section id="dzielnice" class="content-section content-section--soft">
      <div class="content-wrap">
        <h2 v-reveal>Warszawa – dzielnica po dzielnicy</h2>
        <p class="section-lead">Od biurowców na Woli i Mokotowie po domy na Wawrze i mieszkania na Ursynowie. Wybierz dzielnicę, aby poznać szczegóły.</p>
        <LocationCards :locations="districts" @enquire="enquire" />
      </div>
    </section>
    <section id="okolice" class="content-wrap content-section">
      <h2 v-reveal>Miasta i gminy w okolicy</h2>
      <p class="section-lead">Granice Warszawy nie są dla nas granicą działania. Obsługujemy także poniższe lokalizacje. Koszt dojazdu ustalamy indywidualnie podczas wyceny.</p>
      <LocationCards :locations="towns" @enquire="enquire" />
    </section>
    <section class="content-section content-section--dark">
      <div class="content-wrap">
        <h2 v-reveal>Obsługa firm w Warszawie i okolicach</h2>
        <p class="section-lead">Pracujemy elastycznie, także poza godzinami otwarcia. Wystawiamy faktury VAT i ustalamy stały harmonogram, jeśli tego potrzebujesz.</p>
        <div class="area-business"><article v-for="item in b2bItems" :key="item.title"><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
        <nuxt-link class="content-button" to="/dla-firm/">Oferta i cennik dla firm</nuxt-link>
      </div>
    </section>
    <section id="wycena" class="content-section content-section--soft">
      <div class="content-wrap area-quote-grid">
        <div>
          <h2 v-reveal>Działamy w Twojej okolicy – zapytaj o wolny termin</h2>
          <p>Napisz, zadzwoń albo wypełnij formularz. Odpowiemy z propozycją terminu i orientacyjną wyceną w ciągu jednego dnia roboczego.</p>
          <p class="area-mobile-note">Telefon odbieramy codziennie od 7:00 do 23:00.</p>
          <ContactActions />
        </div>
        <AreaQuoteForm :locations="allLocations" :selected-area="selectedArea" />
      </div>
    </section>
  </main>
</template>

<script>
import { districts, towns, b2bItems } from '~/data/locations';
import { travelPolicy } from '~/data/site';
import { findLocations } from '~/utils/location-search';
const allLocations = [...districts.map(item => ({ ...item, type: 'district' })), ...towns.map(item => ({ ...item, type: 'town' }))];

export default {
  layout: 'content',
  data() { return { districts, towns, b2bItems, travelPolicy, allLocations, query: '', selectedArea: '' }; },
  computed: { matches() { return findLocations(this.allLocations, this.query); } },
  mounted() { this.openHashLocation(); },
  watch: { '$route.hash'() { this.openHashLocation(); } },
  methods: {
    openHashLocation() {
      const slug = this.$route.hash.slice(1);
      if (this.allLocations.some(item => item.slug === slug)) this.$nextTick(() => this.goToLocation(slug));
    },
    goToLocation(slug) {
      const card = document.getElementById(slug);
      if (!card) return;
      card.open = true;
      card.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      const summary = card.querySelector('summary');
      if (summary) summary.focus({ preventScroll: true });
    },
    enquire(name) {
      this.selectedArea = name;
      this.$nextTick(() => {
        document.getElementById('wycena').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        document.getElementById('area-name').focus({ preventScroll: true });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.area-stats { display: flex; flex-wrap: wrap; gap: 36px; margin-top: 28px; }
.area-stats strong { font-size: 40px; color: #75e5e8; display: block; line-height: 1.1; }
.area-finder-grid, .area-quote-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 44px; align-items: start; }
.area-finder { background: #fff; padding: 26px; border: 1px solid #d4e3e3; border-radius: 8px; }
.area-finder label { display: block; font-size: 26px; font-weight: 700; line-height: 1.2; margin-bottom: 12px; }
.area-finder p { font-size: 18px; }
.area-finder input { width: 100%; margin-top: 18px; padding: 12px 16px; border: 1px solid #becfcf; border-radius: 6px; font: inherit; }
.area-results { margin-top: 16px; }
.area-results ul { list-style: none; }
.area-results a { color: #037b80; display: inline-block; padding: 5px 0; }
.area-mobile-note { margin-top: 20px; }
.area-map { padding: 24px; background: #f3f8f8; border: 1px solid #d4e3e3; border-radius: 8px; }
.area-map svg { display: block; max-width: 800px; width: 100%; margin: auto; }
.map-ring { stroke: #c2d6d6; stroke-dasharray: 4 7; fill: none; }
.map-river { stroke: #b9e3e9; stroke-width: 15; fill: none; }
.map-node { fill: #037b80; cursor: pointer; }
.map-node--town { fill: #98521d; }
.map-node--hub { fill: #212121; }
.map-node text { fill: #212121; font: 19px 'Saira Condensed', sans-serif; }
.map-node .map-target { fill: transparent; }
.map-node:hover text, .map-node:focus text { font-weight: 700; }
.map-node:focus .map-target { stroke: #037b80; stroke-width: 2px; }
.map-legend { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; font-size: 18px; color: #037b80; }
.map-legend span:nth-child(2) { color: #98521d; }
.map-legend span:nth-child(3) { color: #212121; }
.map-note { text-align: center; color: #555; font-size: 16px; margin-top: 14px; }
.area-business { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; margin-bottom: 32px; }
.area-business article { border-top: 2px solid #03989e; padding-top: 22px; }
.area-business p { color: #ddd; }
@media (max-width: 800px) { .area-finder-grid, .area-quote-grid { grid-template-columns: 1fr; gap: 30px; } .area-business { grid-template-columns: 1fr 1fr; } }
@media (max-width: 540px) { .area-business { grid-template-columns: 1fr; } .area-map { padding: 10px; } .area-map svg { min-width: 0; } }
</style>
