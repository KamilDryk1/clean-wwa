<template>
  <NotFound v-if="error.statusCode === 404" />
  <main v-else class="content-page content-wrap content-section"><h1>Nie udało się wyświetlić strony</h1><p>Spróbuj ponownie za chwilę lub <nuxt-link to="/kontakt/">skontaktuj się z nami</nuxt-link>.</p></main>
</template>
<script>
export default {
  layout: 'content',
  props: { error: { type: Object, default: () => ({ statusCode: 404 }) } },
  head() { return { title: this.error.statusCode === 404 ? 'Nie znaleziono strony | CLEANWWA' : 'Błąd strony | CLEANWWA', meta: [{ hid: 'robots', name: 'robots', content: 'noindex, follow' }] }; },
};
</script>
