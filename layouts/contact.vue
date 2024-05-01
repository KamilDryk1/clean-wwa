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
		img: "/assets/img/Kontakt/kontakt-img.jpg",
		title: "Kontakt",
		subtitle: "Odkryj nowe życie Twoich mebli! Skontaktuj się z nami już dziś!"
	  };
	},
  };
  </script>
  