<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/Cennik/price-list-img.jpg" eyebrow="Cennik" title="Cennik prania tapicerki i wykładzin w Warszawie" description="Pranie mebli, materacy, dywanów i tapicerki samochodowej. Przejrzyste ceny i wycena przed rozpoczęciem pracy." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
