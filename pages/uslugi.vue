<template>
  <section class="services">
    <div class="services__container">
      <div class="services__content">
        <div class="services__content-furniture">
          <h1 class="services__content-title">
            Czyszczenie tapicerki meblowej
          </h1>
          <div class="elements">
            <p class="services__content-text">
              Pierzemy meble z dojazdem do klienta. Pranie jest wykonywane
              metodą ekstrakcyjną przy użyciu specjalistycznych maszyn wiodących
              marek (Karcher, Prochem), oraz najlepszej chemii dostępnej na
              rynku (Prochem, Chemspec). Na uporczywe plamy typu farba, oleje,
              gumy używamy odpowiednio dobranych odplamiaczy. Dodatkowo usuwamy
              nieprzyjemne zapachy środkami neutralizacyjnymi. Czas schnięcia
              jest uzależniony od temperatury, wilgotność, stopnia zabrudzenia i
              zajmuje od kilku do kilkunastu godzin.
            </p>
            <div class="services__content-img">
              <img src="/assets/img/Uslugi/meblowa.jpg" class="" alt="" />
            </div>
          </div>
        </div>
        <div class="services__content-carpet show-elem show-elem-bottom">
          <h1 class="services__content-title">Pranie wykładzin i dywanów</h1>
          <div class="elements">
            <div class="services__content-img">
              <img src="/assets/img/Uslugi/dywany.jpg" class="" alt="" />
            </div>
            <p class="services__content-text">
              Pranie odbywa się metodą ekstrakcyjną, przy użyciu skutecznych
              środków (Prochem,Chemspec) w domu klienta. Przed właściwym praniem
              jest nanoszony prespray, który zostaje dokładnie rozprowadzony,
              wraz z zebraniem brudu szorowarką. Regularne pranie dywanu pozwoli
              zachować go na dłuższy czas. Dzięki temu zabiegowi zostaną
              usunięte wszelkie roztocza, alergeny i bakterie, oraz nieprzyjemny
              zapach. Zapraszam do kontaktu po więcej informacji.
            </p>
          </div>
        </div>
        <div class="services__content-auto show-elem show-elem-bottom">
          <h1 class="services__content-title">Auto detailing wnętrza</h1>
          <div class="elements">
            <p class="services__content-text">
              Oferujemy czyszczenie wnętrza samochodów do każdej usługi
              podchodzimy indywidualnie dobierając odpowiedni środki. Usuwamy
              farby, smary, gumy z tapicerki, kokpitu i podsufitki.<br />Usługa
              zawiera:<br />- pranie tapicerki,<br />- kompleksowe czyszczenie
              wnętrza,<br />- bonetowanie podsufitki.<br />* Czyszczenie
              wykonujemy u klienta (potrzebny dostęp do prądu).
            </p>
            <div class="services__content-img">
              <img src="/assets/img/Uslugi/auto.jpg" class="" alt="" />
            </div>
          </div>
        </div>
        <div class="services__content-leather show-elem show-elem-bottom">
          <h1 class="services__content-title">
            Czyszczenie skór z impregnacją
          </h1>
          <div class="elements">
            <div class="services__content-img">
              <img src="/assets/img/Uslugi/skora.jpg" class="" alt="" />
            </div>
            <p class="services__content-text">
              Czyścimy wszelkie skóry oraz zabezpieczamy je po wykonanej usłudze
              przez co zachowują dłużej swoje właściwości. Korzystamy z środków
              wiodącej marki Prochem. Do każdej usługi podchodzimy z dużą
              starannością. Zapraszamy do wyceny usługi!
            </p>
          </div>
        </div>
        <div class="services__content-rent show-elem show-elem-bottom">
          <h1 class="services__content-title">Wynajem odkurzacza</h1>
          <div class="elements">
            <p class="services__content-text">
              Również możesz wyprać we własnym zakresie tapicerkę meblową,
              wykładziny, dywany bez pomocy profesjonalisty. Wszystko przez
              możliwość wypożyczenia odkurzacza piorącego marki Profi, Karcher.
              Dzięki tej usłudze jesteś w stanie zaoszczędzić znaczną kwotę.
            </p>
            <div class="services__content-img">
              <img src="/assets/img/Uslugi/wynajem.jpg" class="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import showElement from "~/mixins/showElement";

export default {
  mixins: [showElement],

  layout: "services",
};
</script>

<style lang="scss" scoped>
.services {
  position: relative;
  z-index: 15;
  background-color: #fff;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
  }

  &__content {
    margin: 0 4%;
    padding: 0 4%;
    position: relative;
    background-color: #fff;
    z-index: 5;

    &-title {
      color: #03989e;
      text-align: center;
      padding-bottom: 30px;
      padding-top: 100px;
      font-size: 30px;
    }

    &-text {
      margin: auto 0;
      text-align: justify;
      font-size: 20px;
      width: 100%;
    }

    &-img {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .elements {
      display: flex;
      gap: 3%;
    }

    &-rent {
      padding-bottom: 100px;
    }
  }
}
</style>
