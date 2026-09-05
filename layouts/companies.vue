<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/DlaFirm/companies-background.jpg" eyebrow="Dla firm" title="Czystość dopasowana do Twojej firmy" description="Profesjonalne pranie wykładzin i tapicerki w Warszawie i okolicach." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
