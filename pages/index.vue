<template>
  <div>
    <section class="header">
      <div class="header__container">
        <div class="header__content">
          <div class="header__content-video">
            <video
              class="vid"
              autoplay
              loop
              muted
              src="assets/video/HomePage/background-video.mp4"
            ></video>
            <div class="overlay"></div>
          </div>
          <div class="header__content-text">
            <h1 class="title">CLEAN-WWA</h1>
            <h2 class="subtitle">
              Pranie tapicerki meblowej i samochodowej na terenie Warszawy i
              okolic.
            </h2>
            <p>Poznaj naszą ofertę!</p>
          </div>
        </div>
      </div>
    </section>
    <section class="description">
      <div class="description__container">
        <div class="description__content">
          <div class="description__content-text">
            <h2>Pranie tapicerki nr 1 w Warszawie!</h2>
            <p>
              Jesteśmy profesjonalną firmą zajmującą się praniem tapicerki
              meblowej i samochodowej, oraz wykładzin na terenie Warszawy i
              okolic. Posiadamy wieloletnie doświadczenie w przywracaniu
              pierwotnego stanu Państwa mebli. Pracujemy wyłącznie na najlepszym
              sprzęcie wiodących marek Prochem, Karcher. Stosujemy najlepszą
              chemię, która pozwoli usunąć uporczywe plamy, oraz nieprzyjemne
              zapachy. Nasze kompetencje, oraz liczne specjalistyczne kursy
              pozwalają dostarczać Państwu usługi na najwyższym poziomie.
              Zachęcamy do skorzystania z naszych usług oraz do zapoznania się z
              cennikiem.
            </p>
          </div>
          <div class="description__content-photo">
            <img
              src="assets/img/HomePage/description-img.jpg"
              alt="Pranie tapicerki bagażnika"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="carousel">
      <div class="carousel__container">
        <div class="carousel__content">
          <swiper
            class="swiper carousel__content-swiper"
            :options="swiperOptions"
          >
            <swiper-slide>
              <div class="swiper__element">
                <div class="swiper__slide-visual">
                  <img
                    src="assets/img/HomePage/carousel-photo-1.jpg"
                    alt=""
                    class="swiper__element-img"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper__element">
                <div class="swiper__slide-visual">
                  <img
                    src="assets/img/HomePage/carousel-photo-2.jpg"
                    alt=""
                    class="swiper__element-img"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper__element">
                <div class="swiper__slide-visual">
                  <img
                    src="assets/img/HomePage/carousel-photo-3.jpg"
                    alt=""
                    class="swiper__element-img"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper__element">
                <div class="swiper__slide-visual">
                  <img
                    src="assets/img/HomePage/carousel-photo-4.jpg"
                    alt=""
                    class="swiper__element-img"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper__element">
                <div class="swiper__slide-visual">
                  <img
                    src="assets/img/HomePage/carousel-photo-5.jpg"
                    alt=""
                    class="swiper__element-img"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <section class="more">
      <div class="more__container">
        <div class="more__content">
          <div class="more__content-offer">
            <p>
              Chcesz poznać całość oferowanych przez nas usług? Kliknij tutaj!
            </p>
            <i class="fa-solid fa-clipboard-list"></i>
          </div>
          <div class="more__content-gallery">
            <p>Całość naszych prac przed i po znajdziesz tutaj!</p>
            <i class="fa-solid fa-camera"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
          1000: {
            slidesPerView: 3.4,
          },
          800: {
            slidesPerView: 2.4,
          },
          500: {
            slidesPerView: 1.6,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;

  &__container {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
  }

  &__content {
    height: 700px;
    max-width: 1440px;
    margin: 0 auto;

    &-video {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 700px;

      .vid {
        position: absolute;
        top: 0;
        left: 0;
        height: 700px;
        width: 100%;
        z-index: 1;
        object-fit: cover;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 700px;
        background: linear-gradient(
          to right,
          black 0% 3%,
          rgba(0, 0, 0, 0.4),
          black 97% 100%
        );
        z-index: 3;
      }
    }

    &-text {
      position: absolute;
      top: 25%;
      z-index: 4;
      margin: 0 4%;
      color: white;
      max-width: 65%;

      h1 {
        font-size: 64px;
      }

      h2 {
        font-weight: 400;
        font-size: 30px;
        margin-top: 30px;
      }

      p {
        font-weight: 200;
        margin-top: 30px;
        font-size: 20px;
      }
    }
  }
}

.description {
  margin-bottom: 200px;
  margin-top: 50px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin: 0 4%;
    padding-top: 150px;

    &-text {
      width: 45%;

      h2 {
        margin-bottom: 20px;
        font-size: 32px;
      }

      p {
        text-align: justify;
        font-size: 20px;
      }
    }

    &-photo {
      margin: auto 0;
      max-height: 380px;
      width: 45%;
      //   overflow: hidden;

      img {
        object-fit: cover;
        max-height: 380px;
        width: 100%;
      }
    }
  }
}
.carousel {
  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }
}
.swiper {
  max-width: 1440px;
  margin: 0 0 0 4%;

  &__slide-visual {
    position: relative;
    max-width: 350px;
    height: 350px;
    border-radius: 30px;
    overflow: hidden;
  }

  &__element-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.swiper-slide-next + .swiper-slide + .swiper-slide {
  opacity: 0.5;
}
.more {
  margin-top: 200px;
  margin-bottom: 150px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    margin: 0 4%;
    display: flex;
    justify-content: space-between;

    &-offer {
      width: 47%;
      height: 400px;
      position: relative;
      background-color: #7637b3;
      border-radius: 30px;
      cursor: pointer;

      p {
        margin: 70px 5%;
        font-size: 28px;
        color: white;
        font-weight: bold;
        text-align: center;
      }

      i {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 120px;
        color: white;
      }
    }

    &-offer:hover {
      background-color: #9044db;
    }

    &-gallery {
      width: 47%;
      height: 400px;
      position: relative;
      background-color: #c12994;
      border-radius: 30px;
      cursor: pointer;

      p {
        margin: 70px 5%;
        font-size: 28px;
        color: white;
        font-weight: bold;
        text-align: center;
      }

      i {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 120px;
        color: white;
      }
    }

    &-gallery:hover {
      background-color: #db30a8;
    }
  }
}
</style>
