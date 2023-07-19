<template>
  <section class="gallery">
    <div class="gallery__container">
      <div class="gallery__content">
        <!-- <h1 class="gallery__content-title">Efekty naszej pracy</h1> -->
        <ul class="gallery__content-list">
          <li
            class="gallery__content-element"
            v-for="item in galleryContent"
            :key="item"
          >
            <img :src="item" alt="pranie" class="lazyload" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "gallery",

  data() {
    return {
      galleryContent: [
        "/assets/img/Galeria/img0.jpg",
        "/assets/img/Galeria/img1.jpg",
        "/assets/img/Galeria/img2.jpg",
        "/assets/img/Galeria/img3.jpg",
        "/assets/img/Galeria/img4.jpg",
        "/assets/img/Galeria/img5.jpg",
        "/assets/img/Galeria/img6.jpg",
        "/assets/img/Galeria/img7.jpg",
        "/assets/img/Galeria/img8.jpg",
        "/assets/img/Galeria/img9.jpg",
        "/assets/img/Galeria/img10.jpg",
        "/assets/img/Galeria/img11.jpg",
        "/assets/img/Galeria/img12.jpg",
        "/assets/img/Galeria/img13.jpg",
        "/assets/img/Galeria/img14.jpg",
        "/assets/img/Galeria/img15.jpg",
        "/assets/img/Galeria/img16.jpg",
        "/assets/img/Galeria/img17.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  // z-index: 15;
  background-color: #fff;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    // height: 400px;
    margin: 0 4%;
    padding: 0 4%;
    position: relative;
    background-color: #fff;
    // transform: translateY(-100px);
    z-index: 5;

    &-title {
      text-align: center;
      padding-top: 50px;
      font-size: 30px;
      color: #03989e;
    }

    &-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      // gap: 2%;
      justify-content: space-between;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    &-element {
      width: 49%;
      list-style: none;
      margin-bottom: 2%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
