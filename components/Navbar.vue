<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__content">
        <div class="navbar__content__logo">
          <nuxt-link to="/"></nuxt-link>
        </div>
        <div class="navbar__content-menu">
          <ul class="navbar__content-menu-list">
            <li class="navbar__content-menu-item">
              <nuxt-link to="/oferta" @click.native="closeModal"
                >Oferta</nuxt-link
              >
            </li>
            <li class="navbar__content-menu-item">
              <nuxt-link to="/cennik" @click.native="closeModal"
                >Cennik</nuxt-link
              >
            </li>
            <li class="navbar__content-menu-item">
              <nuxt-link to="/galeria" @click.native="closeModal"
                >Galeria</nuxt-link
              >
            </li>
            <li class="navbar__content-menu-item">
              <nuxt-link to="/kontakt" @click.native="closeModal"
                >Kontakt</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
