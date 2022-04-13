<template>
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
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }
  &__content {
    margin: 0 8%;
    display: flex;
    justify-content: space-between;

    &__logo {
      min-width: 200px;
      .logo {
        text-decoration: none;

        p {
          color: black;
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
          color: black;
        }
      }
    }
  }
}
</style>
