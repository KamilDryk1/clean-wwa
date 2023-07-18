<template>
  <section class="blog">
    <div class="blog__container">
      <div class="blog__content">
        <div class="blog__content-furniture">
          <img
            src="/assets/img/Blog/meble.jpg"
            alt="Pranie tapicerki meblowej"
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
            <div class="blog__content-furniture-more" :class="furnitureOn" v-if="furnitureOn">
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
            <button class="blog__content-furniture-btn" @click="showFurniture" v-if="!furnitureOn">
			  Czytaj więcej
			</button>
          </div>
        </div>
        <div class="blog__content-auto">
          <img
            src="/assets/img/Blog/samochod.jpg"
            alt="Pranie tapicerki samochodowej"
            class="blog__content-auto-img"
          />
          <div class="blog__content-auto-text">
            <h1>
              Pranie tapicerki samochodowej na własną rękę jest nieopłacalne?
            </h1>
            <p>
              Samochód dla wielu osób jest jego wizytówką, przez co chcą
              utrzymać go w jak najlepszej kondycji. Czyste fotele, wykładziny,
              kokpit i podsufitka przyczyniają się do znacznie większego
              komfortu podróżowania. Niestety niekiedy zdarza się, iż
              niefortunne incydenty w znacznym stopniu ograniczają ten komfort
              takie jak np. wylanie soku na tylnym siedzeniu przez dziecko. W
              takich przypadkach pranie na własną rękę może być ryzykowne,
              ponieważ bez odpowiedniego sprzętu, chemii i wiedzy ciężko jest
              przywrócić poprzedni stan, a niekiedy można permanentnie uszkodzić
              tapicerkę.
            </p>
            <div class="blog__content-auto-more" :class="carOn" v-if="carOn">
              <h3>Czy zlecenie profesjonaliście jest korzystniejsze?</h3>
              <p>
                Niektóre czynności w czyszczeniu samochodu mogą być stosunkowe
                łatwe tj. odkurzanie, przetarcie kurzu. Natomiast całkiem
                inaczej jest w przypadku czyszczenia podsufitki, gdzie
                niewłaściwe pranie może spowodować odklejenie jej, powodując
                znaczne koszty dla właściciela pojazdu.<br />Kolejnym z
                argumentów przemawiających za skorzystaniem z usługi
                profesjonalisty jest kwestia dotycząca finansów. Koszty
                profesjonalnej chemii, jeżeli nie są kupowane w większych
                ilościach są mało opłacalne. Niektóre plamy, lub wieloletnie
                zaniedbania wymagają różnych odplamiaczy, które automatycznie
                podbijają stawkę i przeważnie nie są dostępne w małych
                opakowaniach.<br />Należy mieć na uwadzę, że pranie tapicerki w
                samochodzie wymaga również specjalistycznego odkurzacza na
                mokro, którego zakup może wahać się od 1.500 zł do 3000 zł, a
                pojedyncze wypożyczenie 60 zł, więc zliczając te wszystkie
                wydatki może ono znacznie przewyższyć zlecenie profesjonalnej
                usługi.
              </p>
              <h3>A więc warto to robić na własną rękę?</h3>
              <p>
                Czyszczenie na własną rękę w mniejszym zakresie tj. odkurzenie,
                starcie kurzu jest jak najbardziej możliwe. Jednak, jeżeli
                chcesz zwiększyć zakres swoich prac np. w postaci bonetowania
                podsufitki, może to już wymagać wiedzy i odpowiedniej chemii. W
                tym przypadku zdecydowanie lepszym rozwiązaniem będzie zlecenie
                pracy firmie, która ma już w tym doświadczenie, oraz niezbędne
                narzędzia.
              </p>
            </div>
            <button class="blog__content-furniture-btn" @click="showCar" v-if="!carOn">
			  Czytaj więcej
			</button>
          </div>
        </div>
        <div class="blog__content-carpet">
          <img
            src="/assets/img/Blog/dywan.jpg"
            alt="Pranie dywanów"
            class="blog__content-carpet-img"
          />
          <div class="blog__content-carpet-text">
            <h1>
              Pranie dywanów, wykładzin metodą ekstrakcyjna - na czym polega?
            </h1>
            <p>
              Dywany i wykładziny nadają naszym pomieszczeniom przyjemniejszy
              nastrój, ale niestety również ulegają zabrudzeniom. Aby odzyskały
              swój pierwotny stan należy je systematycznie prać, najlepiej co
              najmniej raz na pół roku. Najskuteczniejszą metodą i najbardziej
              zalecaną jest czyszczenie ekstrakcyjne. Po wyżej wymienionym
              zabiegu Twoja wykładzina, lub dywan odzyska dawny blask.
            </p>
            <div class="blog__content-auto-more" :class="carpetOn" v-if="carpetOn">
              <h3>Etapy prania:</h3>
              <ul>
                <li>Dokładne odkurzanie wraz z zebraniem luźnych zabrudzeń,</li>
                <li>rozprowadzenie pre-sprayu do rozpuszczenia brudu,</li>
                <li>
                  szorowanie dywanu, lub wykładziny przy pomocy szorowarki,
                </li>
                <li>
                  pranie ekstrakcyjne z użyciem specjalistycznego sprzętu i
                  odpowiednio dobranej chemii,
                </li>
              </ul>
              <h3>Dlaczego warto skorzystać z naszych usług?</h3>
              <p>
                Zyskujesz pewność, że usługa zostanie wykonana z należytą
                starannością i odpowiednimi środkami piorącymi. Nasza firma
                posiada również odpowiedni park maszynowy, aby dostarczyć usługę
                najwyższej jakości. Preparaty, którymi zostanie przeprowadzone
                pranie mają wszelkie atesty bezpieczeństwa zarówno dla ludzi jak
                i zwierząt. Posiadamy środki, które z łatwością poradzą sobie z
                nieprzyjemnym zapachem, drobnoustrojami i dezynfekującymi
                podłożę. Dokładamy również starania, co do plam powstałych np. z
                tuszu, smaru, gumy poprzez dobór odpowiednich odplamiaczy.
              </p>
            </div>
            <button class="blog__content-furniture-btn" @click="showCarpet" v-if="!carpetOn">
			  Czytaj więcej
			</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import showElement from "~/mixins/showElement";

export default {
  layout: "blog",

  mixins: [showElement],

  data() {
    return {
      furnitureOn: false,
      carOn: false,
      carpetOn: false,
    };
  },
  methods: {
    showFurniture() {
      this.furnitureOn = true;
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
  // z-index: 15;
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

	h1 {
		font-size: 26px;
	}

	h3 {
		font-size: 22px;
	}

	p {
		font-size: 18px;
	}

	button {
		background-color: #03989e;
		border: none;
		color: white;
		width: 120px;
		height: 30px;
		font-size: 16px;
		font-family: Saira Condensed, sans-serif;
		cursor: pointer;
		border-radius: 15px;
		margin-top: 10px;
	}

    .false {
      display: none;
    }

    &-furniture {
      padding-top: 100px;
	  min-height: 500px;

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

    &-auto {
      padding-top: 100px;
	  min-height: 500px;

      &-img {
        float: right;
        width: 40%;
      }
    }

    &-carpet {
      padding-top: 100px;
      padding-bottom: 100px;
	  min-height: 500px;

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
