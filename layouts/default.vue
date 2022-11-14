<template>
  <div>
    <Navbar :video="video" :img="img" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "assets/video/HomePage/background-video.mp4",
      img: null,
    };
  },

  methods: {
    checkWidth() {
      let width = window.innerWidth;

      if (width < 1000) {
        this.video = null;
        this.img = "assets/img/HomePage/background-img.jpeg";
      } else {
        this.video = "assets/video/HomePage/background-video.mp4";
        this.img = null;
      }
    },
  },
  mounted() {
    this.checkWidth();

    window.addEventListener("resize", this.checkWidth);
  },
};
</script>
