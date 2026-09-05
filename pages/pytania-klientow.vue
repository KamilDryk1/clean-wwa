<template>
  <main class="content-page">
    <PageIntro image="/assets/img/Uslugi/meblowa.jpg" eyebrow="Pytania klientów" title="Pranie tapicerki – pytania i odpowiedzi" :description="`${faqs.length} odpowiedzi na pytania o tapicerkę, materace, dywany i wykładziny. Sprawdź, jak przygotować się do wizyty i czego oczekiwać po czyszczeniu.`" />
    <section class="content-wrap content-section">
      <h2 v-reveal>Najczęściej zadawane pytania</h2>
      <nav class="faq-filters" aria-label="Kategorie pytań">
        <button v-for="category in categories" :key="category" type="button" :aria-pressed="String(activeCategory === category)" :class="{ active: activeCategory === category }" @click="activeCategory = category">
          {{ category }} <span>{{ categoryCounts[category] }}</span>
        </button>
      </nav>
      <p class="faq-count" role="status">Liczba odpowiedzi: {{ filteredFaqs.length }}<span v-if="activeCategory !== 'Wszystkie'"> · {{ activeCategory }}</span></p>
      <div class="faq-list">
        <details v-for="item in filteredFaqs" :key="item.question" class="faq-item">
          <summary>
            <IconQuestion />
            <span class="faq-question">{{ item.question }}</span>
            <span class="faq-category">{{ item.category }}</span>
            <span class="faq-plus" aria-hidden="true"></span>
          </summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </section>
    <section class="content-section content-section--soft">
      <div class="content-wrap">
        <h2 v-reveal>Nie znalazłeś odpowiedzi?</h2>
        <p>Napisz lub zadzwoń. Pomożemy dobrać usługę do Twoich potrzeb. Telefon odbieramy codziennie od 7:00 do 23:00.</p>
        <ContactActions />
      </div>
    </section>
  </main>
</template>

<script>
import { categories, faqs } from '~/data/faq';
import { structuredData } from '~/utils/structured-data';

export default {
  layout: 'content',
  data() { return { categories, faqs, activeCategory: 'Wszystkie' }; },
  computed: {
    categoryCounts() {
      return Object.fromEntries(this.categories.map(category => [category, category === 'Wszystkie' ? this.faqs.length : this.faqs.filter(item => item.category === category).length]));
    },
    filteredFaqs() {
      return this.activeCategory === 'Wszystkie' ? this.faqs : this.faqs.filter(item => item.category === this.activeCategory);
    },
  },
  head() {
    return structuredData('faq-schema', {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
    });
  },
};
</script>

<style lang="scss" scoped>
.faq-filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px; }
.faq-filters button { display: flex; align-items: center; gap: 10px; min-height: 46px; border: 1px solid #c9dcdc; border-radius: 24px; padding: 8px 18px; color: #333; background: #fff; font: inherit; font-size: 18px; cursor: pointer; }
.faq-filters button.active { background: #037b80; color: #fff; border-color: #037b80; }
.faq-filters span { font-size: 15px; opacity: .85; }
.faq-count { color: #555; font-size: 17px; margin-bottom: 20px; }
.faq-item { border-bottom: 1px solid #d4e3e3; }
.faq-item:first-child { border-top: 1px solid #d4e3e3; }
.faq-item summary { list-style: none; display: flex; align-items: center; gap: 16px; padding: 23px 12px; cursor: pointer; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-question { flex: 1; font-weight: 700; font-size: 23px; line-height: 1.35; }
.faq-category { font-size: 15px; color: #575757; }
.faq-plus { width: 18px; flex: none; color: #037b80; font-size: 28px; }
.faq-plus::before { content: '+'; }
.faq-item[open] { background: #f3f8f8; }
.faq-item[open] .faq-plus::before { content: '−'; }
.faq-item p { padding: 0 52px 26px; max-width: 950px; }
@media (max-width: 650px) { .faq-category { display: none; } .faq-item summary { padding: 20px 0; gap: 12px; } .faq-item p { padding: 0 16px 24px 36px; } }
</style>
