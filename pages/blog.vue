<template>
  <main class="content-page content-wrap content-section">
    <h1>Pytania klientów</h1>
    <p>Porady dotyczące prania znajdziesz teraz w odpowiedziach na pytania klientów.</p>
    <nuxt-link class="content-link" to="/pytania-klientow/">Przejdź do pytań klientów</nuxt-link>
  </main>
</template>

<script>
export default {
  layout: 'content',
  head() {
    return { meta: [
      { hid: 'robots', name: 'robots', content: 'noindex, follow' },
      { 'http-equiv': 'refresh', content: '0;url=/pytania-klientow/' },
    ] };
  },
  mounted() { this.$router.replace('/pytania-klientow/'); },
};
</script>
