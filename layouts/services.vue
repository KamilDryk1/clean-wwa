<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/Uslugi/uslugi-img.jpg" eyebrow="Usługi" title="Pranie tapicerki, materacy i wykładzin w Warszawie" description="Profesjonalne czyszczenie z dojazdem do domu lub firmy. Poznaj nasze usługi i wybierz rozwiązanie dla siebie." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
