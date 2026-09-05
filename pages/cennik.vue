<template>
  <main class="content-wrap content-section price-page">
    <div class="price-page__intro">
      <p>Minimalny koszt zamówienia usługi na terenie Warszawy: <strong>110 zł</strong>.</p>
      <nuxt-link class="content-button" to="/kontakt/">Zapytaj o termin</nuxt-link>
    </div>
    <section v-for="group in pricing" :key="group.title" class="price-page__group">
      <table class="price-table">
        <caption><h2 v-reveal>{{ group.title }}</h2></caption>
        <thead><tr><th scope="col">Usługa</th><th scope="col">Cena</th></tr></thead>
        <tbody><tr v-for="row in group.rows" :key="row.label"><th scope="row">{{ row.label }}</th><td>{{ row.price }}</td></tr></tbody>
      </table>
    </section>
    <p class="price-page__bonus">* Miarka proszku (100 g) Prochem Crystal Green GRATIS!</p>
    <aside class="content-note price-page__note">
      <h2 v-reveal>Warto wiedzieć przed zamówieniem</h2>
      <p>Pomimo zastosowania odpowiednich odplamiaczy nie jesteśmy w stanie zagwarantować, że każda plama zostanie usunięta. Czasami zdarza się, że materiał jest permanentnie odbarwiony.</p>
      <p>Na zamówioną usługę jest przyznawana 3-dniowa gwarancja. Jeżeli nie będą Państwo zadowoleni z efektu lub po wyschnięciu będą widoczne plamy, przyjedziemy i poprawimy je bezpłatnie.</p>
    </aside>
  </main>
</template>

<script>
import { pricing } from '~/data/pricing';
export default { layout: 'price', data() { return { pricing }; } };
</script>

<style lang="scss" scoped>
.price-page__intro { display: flex; gap: 24px; justify-content: space-between; align-items: center; padding: 24px 28px; background: var(--surface); border: 1px solid var(--line); border-radius: 10px; margin-bottom: 50px; }
.price-page__intro .content-button { flex: none; }
.price-page__group + .price-page__group { margin-top: 48px; }
.price-page__bonus { margin-top: 16px; color: var(--muted); font-size: 17px; }
.price-page__note { margin: 40px 0 0; }
.price-page__note h2 { font-size: 28px; }
.price-page__note p + p { margin-top: 16px; }
@media (max-width: 650px) { .price-page__intro { align-items: stretch; flex-direction: column; padding: 22px; } }
</style>
