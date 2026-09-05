<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/Kontakt/kontakt-img.jpg" eyebrow="Kontakt" title="Porozmawiajmy o Twoim zleceniu" description="Zadzwoń, napisz lub wypełnij formularz. Pomożemy dobrać usługę i ustalimy dogodny termin." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
