<template>
  <div class="location-grid">
    <details v-for="location in locations" :id="location.slug" :key="location.slug" class="location-card">
      <summary><span>{{ location.name }}</span><span aria-hidden="true" class="location-plus"></span></summary>
      <p v-if="location.isHub" class="location-hub">Baza CLEANWWA · ul. Kasprzaka 29c</p>
      <p>{{ location.text }}</p>
      <a href="#wycena" class="content-link" @click.prevent="$emit('enquire', location.name)">Zapytaj o wycenę: {{ location.name }} →</a>
    </details>
  </div>
</template>

<script>
export default { props: { locations: { type: Array, required: true } } };
</script>

<style lang="scss" scoped>
.location-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: start; gap: 16px; }
.location-card { border: 1px solid #d4e3e3; border-radius: 8px; background: #fff; scroll-margin-top: 24px; }
.location-card[open] { border-color: #037b80; }
.location-card summary { display: flex; justify-content: space-between; align-items: center; gap: 10px; list-style: none; cursor: pointer; padding: 18px 22px; font-weight: 700; font-size: 24px; }
.location-card summary::-webkit-details-marker { display: none; }
.location-card p { padding: 0 22px 20px; }
.location-card a { display: block; margin: 0 22px 22px; }
.location-plus { color: #037b80; }
.location-plus::before { content: '+'; }
.location-card[open] .location-plus::before { content: '−'; }
.location-hub { color: #037b80; font-size: 17px; font-weight: 700; }
@media (max-width: 850px) { .location-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 580px) { .location-grid { grid-template-columns: 1fr; } }
</style>
