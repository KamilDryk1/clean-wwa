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
      img: "/assets/img/Blog/blog-img.jpg",
      title: "Blog",
      subtitle: "Odkryj świat naszej branży i bądź na bieżąco z najnowszymi trendami i rozwiązaniami."
    };
  },
};
</script>
