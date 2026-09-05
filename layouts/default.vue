<template>
  <div class="content-page">
    <Navbar />
    <PageIntro image="/assets/img/HomePage/background-img.jpg" video="/assets/video/HomePage/background-video.mp4" eyebrow="CLEANWWA · Warszawa i okolice" title="Pranie tapicerki meblowej i samochodowej w Warszawie" description="Czyste meble, świeże wnętrze. Profesjonalne pranie tapicerki i wykładzin z dojazdem pod Twój adres.">
      <div class="contact-actions">
        <a class="content-button" href="tel:+48733740112">Zamów z rabatem −10%</a>
        <button ref="contactTrigger" class="content-button content-button--outline" @click="showForm = true">Napisz do nas</button>
      </div>
    </PageIntro>
    <ContactForm v-if="showForm" :show-overlay="true" id-prefix="home-dialog" @closeForm="closeForm" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import seo from '~/mixins/seo';
export default {
  mixins: [seo],
  data() { return { showForm: false }; },
  methods: { closeForm() { this.showForm = false; this.$nextTick(() => this.$refs.contactTrigger.focus()); } },
};
</script>
