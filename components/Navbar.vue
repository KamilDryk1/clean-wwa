<template>
  <div>
    <nav class="navbar">
      <div class="navbar__container">
        <div class="navbar__content">
          <div class="navbar__content__logo">
            <nuxt-link to="/" class="logo"><p>CLEAN-WWA</p></nuxt-link>
          </div>
          <div class="navbar__content-menu">
            <ul class="navbar__content-menu-list">
              <li class="navbar__content-menu-item">
                <nuxt-link
                  to="/cennik"
                  class="menu-link"
                  @click.native="closeModal"
                  >Cennik</nuxt-link
                >
              </li>
              <li class="navbar__content-menu-item">
                <nuxt-link
                  to="/galeria"
                  class="menu-link"
                  @click.native="closeModal"
                  >Galeria</nuxt-link
                >
              </li>
              <li class="navbar__content-menu-item">
                <nuxt-link
                  to="/kontakt"
                  class="menu-link"
                  @click.native="closeModal"
                  >Kontakt</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalStatus: "inactive",
    };
  },
  methods: {
    openModal() {
      this.modalStatus = "active";
    },
    closeModal() {
      this.modalStatus = "inactive";
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }
  &__content {
    margin: 0 4%;
    display: flex;
    justify-content: space-between;

    &__logo {
      min-width: 200px;
      .logo {
        text-decoration: none;

        p {
          margin-top: 20px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          letter-spacing: 3px;
        }
      }
    }

    &-menu {
      &-list {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: black;
        width: 400px;
        margin-top: 20px;
      }

      &-item {
        .menu-link {
          text-decoration: none;
          font-size: 20px;
          color: white;
        }
      }
    }
  }
}
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 1;

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
          black 0% 1%,
          rgba(0, 0, 0, 0.3),
          black 99% 100%
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
</style>
