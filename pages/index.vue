<template>
  <div class="index">
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
          <h2>Efekty naszej pracy</h2>
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
    <!-- <section class="more">
      <div class="more__container">
        <div class="more__content">
          <div class="more__content-offer show-elem show-elem-bottom">
            <p>
              Chcesz poznać całość oferowanych przez nas usług? Kliknij tutaj!
            </p>
            <i class="fa-solid fa-clipboard-list"></i>
          </div>
          <div class="more__content-gallery show-elem show-elem-bottom">
            <p>Całość naszych prac przed i po znajdziesz tutaj!</p>
            <i class="fa-solid fa-camera"></i>
          </div>
        </div>
      </div>
    </section> -->
    <section class="opinions">
      <div class="opinions__container">
        <div class="opinions__content">
          <div
            class="opinions__content-opinion opinion-1 show-elem show-elem-bottom"
          >
            <img src="assets/img/HomePage/fb-male.jpg" alt="" />
            <p>
              Korzystałem z usług już wielokrotnie i zawsze byłem w pełni
              zadowolony z efektów jak i utrzymania czystości w trakcie pracy.
              Profesjonalna obsługa, a ceny konkurencyjne.
            </p>
            <h1>Krzysztof</h1>
          </div>
          <div
            class="opinions__content-opinion opinion-2 show-elem show-elem-bottom"
          >
            <img src="assets/img/HomePage/fb-famale.jpg" alt="" />
            <p>
              Z usług firmy cleanwwa korzystałam pierwszy raz, ale na pewno nie
              ostatni. Szybko, rzetelnie i punktualnie. Z całego serca mogę
              polecić usługi prania tapicerki meblowej, mój narożnik wygląda jak
              nowy i bardzo ładnie pachnie. Polecam!!!
            </p>
            <h1>Joanna</h1>
          </div>
          <div
            class="opinions__content-opinion opinion-3 show-elem show-elem-bottom"
          >
            <img src="assets/img/HomePage/fb-male.jpg" alt="" />
            <p>
              Jestem bardzo zadowolony z usługi prania tapicerki samochodowej.
              Szybki i sprawny kontakt. Firma wyróżniła się punktualnością i
              sprawnie uporała się nawet z najtrudniejszymi plamami i
              nieprzyjemnym zapachem. Polecam.
            </p>
            <h1>Marcin</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import showElement from "~/mixins/showElement";

export default {
  name: "IndexPage",

  mixins: [showElement],

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
          delay: 3000,
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
.index {
  position: relative;
  z-index: 15;
  background-color: #fff;
}

.description {
  margin-bottom: 100px;

  //   margin-top: 50px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin: 0 4%;
    padding-top: 100px;

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

  @media (max-width: 999px) {
    &__content {
      flex-direction: column;

      &-text {
        width: 100%;
      }

      &-photo {
        width: 100%;
        padding-top: 20px;
      }
    }
  }
}
.carousel {
  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 100px;

    h2 {
      margin: 20px 4%;
    }
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
  margin-top: 150px;
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
      // background-color: #7637b3;
      background-color: #03989e;
      border-radius: 30px;
      cursor: pointer;

      p {
        margin: 70px 5%;
        font-size: 26px;
        color: white;
        font-weight: bold;
        text-align: center;
      }

      i {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 100px;
        color: white;
      }
    }

    &-offer:hover {
      // background-color: #9044db;
      background-color: #00b1b8;
    }

    &-gallery {
      width: 47%;
      height: 400px;
      position: relative;
      // background-color: #c12994;
      background-color: #03989e;
      border-radius: 30px;
      cursor: pointer;

      p {
        margin: 70px 5%;
        font-size: 26px;
        color: white;
        font-weight: bold;
        text-align: center;
      }

      i {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 100px;
        color: white;
      }
    }

    &-gallery:hover {
      background-color: #00b1b8;
    }
  }
}
.opinions {
  width: 100%;
  background-color: #212121;
  color: white;
  padding-top: 100px;
  padding-bottom: 100px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    margin: 0 4%;
    display: flex;
    justify-content: space-around;

    &-opinion {
      width: 25%;
      text-align: center;

      img {
        max-width: 100px;
        border-radius: 50%;
      }
    }

    .opinion-2 {
      margin-top: 30px;
    }
  }
}
</style>
