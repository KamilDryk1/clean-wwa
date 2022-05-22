<template>
  <div>
    <Navbar :img="img" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: null,
      img: "assets/img/Galeria/gallery-img.jpg",
    };
  },
};
</script>
