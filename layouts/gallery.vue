<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/Galeria/gallery-img.jpg" eyebrow="Galeria" title="Zobacz efekty naszej pracy" description="Nasze realizacje przed i po czyszczeniu. Tapicerka, która odzyskała świeżość w domach i firmach naszych klientów." />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default { mixins: [seo] };
</script>
