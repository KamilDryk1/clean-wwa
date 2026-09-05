<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/Uslugi/meblowa.jpg" eyebrow="Pytania klientów" title="Odpowiedzi na Twoje pytania" description="Dowiedz się więcej o naszych usługach." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
