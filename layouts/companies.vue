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
      img: "/assets/img/DlaFirm/companies-background.jpg",
      title: "Dla firm",
      subtitle: "Profesjonalne pranie wykładzin i tapicerki – dla firm, hoteli i restauracji."
    };
  },
};
</script>
