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
      img: "/assets/img/Cennik/price-list-img.jpg",
      title: "Cennik",
      subtitle: "Sprawdź nasze atrakcyjne ceny i wybierz najlepszą ofertę dla siebie!"
    };
  },
};
</script>
