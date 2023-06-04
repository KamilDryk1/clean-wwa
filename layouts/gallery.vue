<template>
  <div>
    <Navbar :img="img" :title="title" :subtitle="subtitle" />
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
      subtitle: "Piękno i czystość łączą siły - odkryj nasze prace."
    };
  },
};
</script>
