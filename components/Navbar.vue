<template>
  <div>
    <nav class="navbar">
      <div class="navbar__container">
        <div class="navbar__content">
          <div class="navbar__content__logo">
            <nuxt-link to="/" class="logo"
              ><img
                class="logo-sm"
                src="/assets/img/logo-sm-alt.png"
                alt="logo"
              />
              <h1 class="title">CLEAN-WWA</h1></nuxt-link
            >
          </div>
          <div class="navbar__content-menu">
            <ul class="navbar__content-menu-list">
              <div
                class="navbar__content-overlay"
                v-if="modalStatus === 'active'"
                @click="closeModal"
              >
                <li class="navbar__content-overlay-item">
                  <nuxt-link
                    to="/cennik"
                    class="menu-link"
                    @click.native="closeModal"
                    >Cennik</nuxt-link
                  >
                </li>
                <li class="navbar__content-overlay-item">
                  <nuxt-link
                    to="/galeria"
                    class="menu-link"
                    @click.native="closeModal"
                    >Galeria</nuxt-link
                  >
                </li>
                <li class="navbar__content-overlay-item">
                  <nuxt-link
                    to="/uslugi"
                    class="menu-link"
                    @click.native="closeModal"
                    >Usługi</nuxt-link
                  >
                </li>
                <li class="navbar__content-overlay-item">
                  <nuxt-link
                    to="/blog"
                    class="menu-link"
                    @click.native="closeModal"
                    >Blog</nuxt-link
                  >
                </li>
              </div>
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
                  to="/uslugi"
                  class="menu-link"
                  @click.native="closeModal"
                  >Usługi</nuxt-link
                >
              </li>
              <li class="navbar__content-menu-item">
                <nuxt-link
                  to="/blog"
                  class="menu-link"
                  @click.native="closeModal"
                  >Blog</nuxt-link
                >
              </li>
              <li class="navbar__content-menu-item">
                <span
                  v-scroll-to="'#footer'"
                  class="menu-link"
                  @click.native="closeModal"
                  >Kontakt</span
                >
              </li>
              <div
                class="navbar__content-menu-hamburger"
                v-if="modalStatus === 'inactive'"
                @click="openModal"
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <TheHeader :video="video" :img="img" :title="title" :subtitle="subtitle" :tel="tel" :mail="mail" />
  </div>
</template>

<script>
export default {
  props: ["video", "img", "title", "subtitle", "tel", "mail"],
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
        display: flex;

        .title {
          margin: auto 0;
          padding-left: 15px;
          font-size: 32px;
          text-decoration: none;
          color: white;
        }

        // p {
        //   margin-top: 20px;
        //   color: white;
        //   font-weight: bold;
        //   font-size: 20px;
        //   letter-spacing: 3px;
        // }

        .logo-sm {
          max-width: 70px;
          margin-top: 5px;
        }
      }
    }

    &-menu {
      position: relative;
      &-list {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: black;
        width: 600px;
        margin-top: 20px;
      }

      @media (max-width: 1000px) {
        width: 100px;
      }

      &-item {
        .menu-link {
          text-decoration: none;
          font-size: 22px;
          color: white;
          cursor: pointer;
        }
      }

      @media (max-width: 1000px) {
        &-item {
          display: none;
        }

        &-hamburger {
          width: 40px;
          height: 30px;
          position: absolute;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          div {
            width: 100%;
            height: 6px;
            border-radius: 10px;
            background-color: white;
          }
        }
      }
    }

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #212121;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 35px;

      &-item {
        font-size: 36px;

        .menu-link {
          text-decoration: none;
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
