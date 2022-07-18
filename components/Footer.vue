<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__content-logo">
          <img src="assets/img/logo.jpg" alt="logo" />
        </div>
        <div class="footer__content-contact">
          <h1>Adres i dane kontaktowe</h1>
          <p>ul. Kasprzaka 29c</p>
          <p>01-234 Warszawa</p>
          <p>cleanwwa@gmail.com</p>
          <p>+48 733 740 112</p>
        </div>
        <div class="footer__content-socials">
          <a href="https://www.facebook.com/CleanWwa"
            ><img class="social" src="assets/img/facebook.png" alt="facebook"
          /></a>
          <a href="https://www.instagram.com/pranie_tapicerki_cleanwwa/"
            ><img class="social" src="assets/img/instagram.png" alt="instagram"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #03989e;
  z-index: 15;
  position: relative;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    margin: 0 4%;
    display: flex;
    color: white;
    justify-content: space-between;

    &-logo {
      img {
        max-width: 300px;
      }
    }

    &-contact {
      margin: auto 0;
      min-width: 300px;
      text-align: center;

      p {
        font-size: 20px;
      }
    }

    &-socials {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      min-width: 300px;
      //   margin-top: 60px;

      a {
        max-width: 150px;
        margin: 0 auto;
      }

      .social {
        max-width: 150px;
        cursor: pointer;
      }

      .social:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
