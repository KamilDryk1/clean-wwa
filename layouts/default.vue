<template>
  <div>
    <Navbar
      :video="video"
      :img="img"
      :title="title"
      :subtitle="subtitle"
      :tel="tel"
      :mail="mail"
	  @openForm="openForm"
    />
	<ContactForm @closeForm="closeForm" v-if="showForm"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Agreement from '../components/Agreement.vue';
import ContactForm from "../components/ContactForm.vue";
export default {
	components: { Agreement, ContactForm },
  data() {
    return {
      video: "/assets/video/HomePage/background-video.mp4",
      img: null,
      title:
        "Pranie tapicerki meblowej i samochodowej na terenie Warszawy i okolic.",
      subtitle: "Poznaj naszą ofertę!",
      tel: "tel:+48733740112",
      mail: "mailto:cleanwwa@gmail.com",
	  showForm: false,
    };
  },

  methods: {
    checkWidth() {
      let width = window.innerWidth;

      if (width < 1000) {
        this.video = null;
        this.img = "/assets/img/HomePage/background-img.jpg";
      } else {
        this.video = "/assets/video/HomePage/background-video.mp4";
        this.img = null;
      }
    },

	closeForm() {
		this.showForm = false;
	},

	openForm() {
		this.showForm = true;
	}
  },
  mounted() {
    // this.checkWidth();

    // window.addEventListener("resize", this.checkWidth);
  },
};
</script>
