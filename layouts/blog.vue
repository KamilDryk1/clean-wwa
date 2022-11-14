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
      img: "assets/img/Blog/blog-img.jpg",
      title: "Blog",
    };
  },
};
</script>
