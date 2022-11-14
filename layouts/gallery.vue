<template>
  <div>
    <Navbar :img="img" :title="title" />
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
      title: "Galeria",
    };
  },
};
</script>
