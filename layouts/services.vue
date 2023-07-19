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
      img: "/assets/img/Uslugi/uslugi-img.jpg",
      title: "Usługi",
      subtitle: "Nasze usługi - profesjonalizm, który spełnia Twoje oczekiwania."
    };
  },
};
</script>
