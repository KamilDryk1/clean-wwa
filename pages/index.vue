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
              Zachęcamy Państwa do skorzystania z naszych usług oraz do
              zapoznania się z cennikiem.
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
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
  height: 800px;

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
      width: 45%;
      margin: auto 0;

      img {
        width: 100%;
      }
    }
  }
}
</style>
