<template>
  <main class="content-page">
    <PageIntro image="/assets/img/DlaFirm/companies-background.jpg" eyebrow="Usługi dla firm" title="Czyszczenie wykładzin biurowych i pranie tapicerki dla firm w Warszawie" description="Obsługujemy biura, hotele, restauracje, siłownie i salony beauty w Warszawie i okolicach. Przyjeżdżamy wieczorami i w weekendy, dopasowując prace do rytmu Twojej firmy.">
      <ContactActions />
    </PageIntro>
    <section class="content-wrap content-section company-intro">
      <div>
        <h2 v-reveal>Profesjonalny sprzęt. Czystość bez przestojów.</h2>
        <p>Do dyspozycji mamy sprzęt przemysłowy i profesjonalną chemię, dzięki czemu efekt jest widoczny od razu, a zapach nie przeszkadza pracownikom następnego dnia.</p>
        <div class="content-note">
          <p><strong>Sprzęt:</strong> szorowarki walcowe Carpet Cleaner TM3, szorowarki obrotowe Viper, maszyny ekstrakcyjne Prochem Galaxy.</p>
          <p><strong>Chemia:</strong> profesjonalne linie Solution, Chemspec i Prochem – środki dopasowane do rodzaju powierzchni i zabrudzeń.</p>
        </div>
      </div>
      <OptimizedImage loading="eager" src="/assets/img/DlaFirm/IMG_3747.jpeg" alt="Profesjonalne pranie wykładziny biurowej przez CLEANWWA" />
    </section>
    <section class="content-section content-section--soft">
      <div class="content-wrap">
        <h2 v-reveal>Dlaczego firmy wybierają CLEANWWA?</h2>
        <div class="content-grid">
          <article v-reveal="(index % 3) * 70" v-for="(item, index) in whyUs" :key="item.title" class="content-card">
            <span class="company-number" aria-hidden="true">0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3><p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="content-wrap content-section">
      <h2 v-reveal>Co czyścimy w firmach i obiektach komercyjnych?</h2>
      <div class="company-services">
        <article v-for="item in services" :key="item.title">
          <h3>{{ item.title }}</h3><p>{{ item.text }}</p>
        </article>
      </div>
    </section>
    <section class="content-section content-section--soft">
      <div class="content-wrap">
        <h2 v-reveal>Cennik usług profesjonalnych</h2>
        <div class="content-note">Wszystkie ceny są cenami <strong>netto</strong>. Do kwot należy doliczyć <strong>23% VAT</strong>. Minimalna kwota zamówienia: <strong>200,00 zł netto</strong>.</div>
        <table class="price-table">
          <caption>Pranie wykładzin i dywanów</caption>
          <thead><tr><th scope="col">Rodzaj powierzchni</th><th scope="col">Cena netto / m²</th></tr></thead>
          <tbody><tr v-for="row in carpetPricing" :key="row.label"><th scope="row">{{ row.label }}</th><td>{{ row.price }}</td></tr></tbody>
        </table>
        <table class="price-table">
          <caption>Meble i wyposażenie biurowe</caption>
          <thead><tr><th scope="col">Element</th><th scope="col">Cena netto / szt.</th></tr></thead>
          <tbody><tr v-for="row in furniturePricing" :key="row.label"><th scope="row">{{ row.label }}</th><td>{{ row.price }}</td></tr></tbody>
        </table>
        <p class="company-legal">Przy zamówieniach obejmujących większą ilość mebli cena końcowa ustalana jest indywidualnie, z uwzględnieniem rabatów ilościowych. Cennik ma charakter informacyjny i nie stanowi oferty w rozumieniu Kodeksu cywilnego.</p>
      </div>
    </section>
    <section class="content-section content-section--dark">
      <div class="content-wrap">
        <h2 v-reveal>Zapytaj o stałą współpracę</h2>
        <p class="section-lead">Obsługujemy firmy na zasadach cyklicznych zleceń: miesięcznych, kwartalnych lub według potrzeb obiektu. Podaj typ obiektu i orientacyjną powierzchnię, a przygotujemy indywidualną ofertę.</p>
        <ContactActions />
      </div>
    </section>
  </main>
</template>

<script>
import { whyUs, services, carpetPricing, furniturePricing } from '~/data/companies';
import { structuredData } from '~/utils/structured-data';
export default {
  layout: 'content',
  data() { return { whyUs, services, carpetPricing, furniturePricing }; },
  head() {
    return structuredData('company-service-schema', {
      '@context': 'https://schema.org', '@type': 'Service',
      serviceType: 'Czyszczenie wykładzin biurowych i pranie tapicerki dla firm',
      provider: { '@id': 'https://cleanwwa.pl/#business' },
      areaServed: 'Warszawa i okolice',
      audience: { '@type': 'BusinessAudience', audienceType: 'Biura, hotele, restauracje, siłownie, salony beauty' },
    });
  },
};
</script>

<style lang="scss" scoped>
.company-intro { display: grid; grid-template-columns: 1.4fr 1fr; gap: 40px; align-items: center; }
.company-intro img { width: 100%; max-height: 450px; object-fit: cover; border-radius: 8px; }
.company-intro .content-note p + p { margin-top: 15px; }
.company-number { display: block; font-size: 28px; font-weight: 700; color: #037b80; margin-bottom: 15px; }
.company-services { display: grid; grid-template-columns: 1fr 1fr; gap: 26px 44px; }
.company-services article { border-bottom: 1px solid #d4e3e3; padding: 0 0 24px; }
.company-legal { color: #555; font-size: 17px; }
@media (max-width: 750px) { .company-intro, .company-services { grid-template-columns: 1fr; } }

</style>
