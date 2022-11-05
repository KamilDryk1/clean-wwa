<template>
  <section class="blog">
    <div class="blog__container">
      <div class="blog__content">
        <div class="blog__content-furniture">
          <img
            src="/assets/img/Blog/meble.jpg"
            alt=""
            class="blog__content-furniture-img"
          />
          <div class="blog__content-furniture-text">
            <h1>Pranie tapicerki meblowej - na czym polega?</h1>
            <p>
              Wygodna kanapa, fotel, narożnik to jedne z najczęściej używanych
              mebli przez domowników niekiedy czas, lub niechciane zdarzenie
              może spowodować jej zabrudzenie np. przypadkowe wylanie wina. Nie
              musisz z tego powodu myśleć o wyrzuceniu mebla. Nasza firma będzie
              w stanie przywrócić pierwotny stan mebla z pomocą profesjonalnego
              sprzętu marki Prochem, Karcher i najlepszej chemii dostępnej na
              rynku.
            </p>
            <div class="blog__content-furniture-more" :class="furnitureOn">
              <h3>Pranie tapicerki metodą ekstrakcyjną</h3>
              <p>
                Tapicerka meblowa gromadzi na sobie również inne niewidoczne dla
                oka zabrudzenia jak roztocza, grzyby, bakterie. Ponadto
                posiadając zwierzęta możemy spodziewać się niechcianej sierści,
                lub nieprzyjemnego zapachu. Pranie na własną rękę może
                spowodować pogorszenie sytuacji, lub permanentnie utrwalić
                niektóre plamy. Nie pozwól, aby przydarzyło się to Tobie!
              </p>
              <h3>Proces czyszczenia</h3>
              <p>
                Po przybyciu fachowca określa on rodzaj materiału i dobiera
                odpowiednie środki, aby proces prania był jak najskuteczniejszy.
                Następnie zabezpiecza on podłogę tak aby jej nie uszkodzić.
              </p>
              <p>Kolejne etapy polegają na:</p>
              <ul>
                <li>Dokładnym odkurzeniu mebla,</li>
                <li>naniesienie odplamiacza na plamy,</li>
                <li>rozprowadzenie pre-sprayu,</li>
                <li>dokładne szczotkowanie,</li>
                <li>
                  właściwe pranie ekstrakcyjne poprzez specjalistyczny
                  odkurzacz, wraz z odpowiednim roztworem dobranym do materiału,
                </li>
                <li>zaczesanie materiału.</li>
              </ul>
              <h3>Podsumowanie</h3>
              <p>
                Nie musisz przedwcześnie wyrzucać swojego ulubionego mebla
                wystarczy, że umówisz wizytę, a my zajmiemy się resztą.
                Zapraszamy do kontaktu!
              </p>
            </div>
            <button class="blog__content-furniture-btn" @click="showFurniture">
              Czytaj więcej
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "blog",
  data() {
    return {
      furnitureOn: "false",
      carOn: false,
      carpetOn: false,
    };
  },
  methods: {
    showFurniture() {
      this.furnitureOn = "true";
    },
    showCar() {
      this.carOn = true;
    },
    showCarpet() {
      this.carpetOn = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
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

    .false {
      display: none;
    }

    &-furniture {
      padding-top: 100px;

      &-img {
        float: right;
        width: 40%;
      }

      &-text {
        ul {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
