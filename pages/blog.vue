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
		<div class="blog__content-removal">
          <img
            src="/assets/img/Blog/odplamianie.jpg"
            alt="Domowe odplamianie tapicerki meblowej"
            class="blog__content-removal-img"
          />
          <div class="blog__content-removal-text">
            <h1>Domowe Sposoby na Odplamianie Tapicerki Meblowej</h1>
            <p>
				Nie ma nic gorszego niż widok uporczywych plam na naszej ulubionej tapicerce meblowej. Niezależnie od tego, czy jesteśmy rodzicami małych dzieci, posiadaczami zwierząt domowych czy po prostu miłośnikami kawy, plamy są nieuniknionym problemem. Nie martwcie się! W tym blogu przedstawimy Wam kilka prostych i skutecznych domowych sposobów na odplamianie tapicerki meblowej, które nie tylko przywrócą jej blask, ale także są przyjazne dla środowiska.
            </p>
            <div class="blog__content-removal-more" :class="removalOn" v-if="removalOn">
              <p>
                1. Sok z cytryny i sól 
				to naturalne środki, które są bardzo skuteczne w usuwaniu plam z tapicerki meblowej. Wystarczy wycisnąć sok z cytryny na plamę i posypać ją solą. Następnie trzeba poczekać kilka minut, aż mieszanka wyschnie, a następnie zeskrobać resztki soli i przetrzeć tapicerkę wilgotną ściereczką.
              </p>
              <p>
                2. Ocet i soda oczyszczona
 				to kolejne naturalne środki, które można zastosować do usuwania plam z tapicerki meblowej. Wystarczy wymieszać 1 łyżkę sody oczyszczonej z 1/4 szklanki octu i nałożyć mieszaninę na plamę. Następnie trzeba poczekać kilka minut, aż mieszanka wyschnie, a następnie zeskrobać resztki i przetrzeć tapicerkę wilgotną ściereczką.
              </p>
              <p>3.  Mydło i woda 
				to prosty, ale skuteczny sposób na usuwanie plam z tapicerki meblowej. Namocz ściereczkę w letniej wodzie z dodatkiem mydła i delikatnie przetrzyj plamę. Po przetarciu plamy, dokładnie przetrzyj tapicerkę wilgotną ściereczką.</p>
				<p>
					4. Rozpuszczalnik
					Jeśli masz trudną plamę, którą nie można usunąć za pomocą naturalnych środków, można spróbować użycia rozpuszczalnika. Należy jednak pamiętać, że rozpuszczalnik może uszkodzić tkaninę, dlatego należy najpierw przetestować go na niewielkiej, niewidocznej powierzchni tapicerki. Następnie nałóż niewielką ilość rozpuszczalnika na plamę i delikatnie przetrzyj ją wilgotną ściereczką.
              </p>
			  <p>
				5. Plamy z białka (np. jajka, również świeża krew):
				Plamy z białka najlepiej usuwać zimną wodą. Należy unikać używania gorącej wody, ponieważ może to spowodować denaturacji białka, co utrudni usunięcie plamy.
              </p>
			  <h3>Ważne wskazówki:</h3>
              <ul>
                <li>Zawsze przetestuj nowy środek na niewielkim, niewidocznym obszarze tapicerki, aby upewnić się, że nie powoduje on uszkodzeń ani zmiany koloru.</li>
                <li>Unikaj intensywnego pocierania, aby nie uszkodzić włókien tapicerki.</li>
                <li>Jeśli masz wątpliwości co do usuwania konkretnej plamy, lepiej skonsultować się z profesjonalistą lub specjalistycznym serwisem czyszczącym.</li>
			  </ul>
              <p>
                Odplamianie tapicerek meblowych to bardzo ważne zadanie, które należy wykonywać regularnie, aby zachować wizualną atrakcyjność mebli. Niezależnie od tego, czy chodzi o sofę, fotel czy krzesło, tapicerka jest podatna na zabrudzenia i plamy, które mogą zniszczyć jej wygląd. Dlatego warto zwrócić się o pomoc do profesjonalnej firmy, która posiada odpowiednie narzędzia i doświadczenie, aby skutecznie odplamić tapicerki meblowe. Niekiedy niewłaściwe zastosowanie środka odplamiającego może permanentnie utrwalić plamę, proszę mieć to na uwadze!
              </p>
            </div>
            <button class="blog__content-removal-btn" @click="showRemoval" v-if="!removalOn">
			  Czytaj więcej
			</button>
          </div>
        </div>
		<div class="blog__content-mattress">
          <img
            src="/assets/img/Blog/materac.jpg"
            alt="Pranie materaca"
            class="blog__content-mattress-img"
          />
          <div class="blog__content-mattress-text">
            <h1>Pranie Materacy: Troska o Zdrowie i Komfort Twojego Snu</h1>
            <p>
				Witajcie w kolejnym artykule na naszym blogu! Dzisiaj porozmawiamy o jednym z najważniejszych aspektów utrzymania zdrowego i komfortowego otoczenia w naszych sypialniach - praniu materacy. Choć często bagatelizujemy tę czynność, regularne czyszczenie i pranie materaca przynosi szereg korzyści, zarówno dla naszego zdrowia, jak i samopoczucia. Dodatkowo, jako profesjonalna firma, korzystamy z zaawansowanych środków, takich jak Chemspec i TMF, co pozwala nam uzyskać najlepsze efekty i zadowolenie naszych klientów.
            </p>
            <div class="blog__content-mattress-more" :class="mattressOn" v-if="mattressOn">
              <h3>1. Poprawa jakości snu:</h3>
              <p>
                Czysty i świeży materac przyczynia się do znacznej poprawy jakości snu. Podczas snu nasze ciało wytwarza pot, który może wnikać w materac, powodując rozwój pleśni i roztoczy. Regularne pranie materaca usuwa te niepożądane zanieczyszczenia, co pomaga nam zasnąć szybciej i utrzymać spokojny sen przez całą noc.
              </p>
              <h3>2. Redukcja alergenów:</h3>
				<p>
					Nieświadomie, na naszym materacu gromadzi się duża ilość alergenów, takich jak roztocza, kurz, pyłki i grzyby. Dla osób cierpiących na alergie, to szczególnie ważne, aby regularnie prać materac, aby zmniejszyć ilość tych czynników drażniących i zapewnić sobie zdrowsze i bardziej komfortowe środowisko snu.
              </p>
			  <h3>3. Eliminacja nieprzyjemnych zapachów:</h3>
			  <p>
				Materace mogą łatwo wchłaniać różne zapachy, takie jak pot, dym papierosowy czy zapachy jedzenia. Regularne pranie pozwala pozbyć się tych nieprzyjemnych zapachów, pozostawiając nasz materac świeżym i przyjemnym w odbiorze.
              </p>
			  <h3>4. Przedłużenie trwałości materaca:</h3>
              <p>
				Pranie materaca to również sposób na przedłużenie jego trwałości. Regularne usuwanie zanieczyszczeń i brudu zapobiega powstawaniu plam i osadu, co może prowadzić do uszkodzenia materaca na dłuższą metę. W ten sposób, inwestycja w profesjonalne pranie może zaoszczędzić nam pieniądze na zakupie nowego materaca.
              </p>
			  <h3>5. Ochrona zdrowia:</h3>
              <p>
                Nasz materac jest miejscem, w którym spędzamy znaczną część naszego życia. Dbając o jego czystość i higienę, chronimy nasze zdrowie i dobre samopoczucie. Pranie materaca eliminuje potencjalne zagrożenia zdrowotne, zwłaszcza dla osób z problemami oddechowymi i alergiami.
              </p>
			  <p>Jako profesjonalna firma specjalizująca się w czyszczeniu i praniu materacy, korzystamy z zaawansowanych środków takich jak Chemspec i TMF. Dzięki nim, możemy zagwarantować naszym klientom najlepsze efekty i osiągnięcie najwyższego poziomu czystości i higieny. Te profesjonalne środki są skuteczne w usuwaniu najtrudniejszych plam i zanieczyszczeń, jednocześnie zapewniając delikatne podejście do włókien materaca.</p>
			  <p>Podsumowując, pranie materacy to nie tylko kwestia estetyki, ale przede wszystkim zdrowia i komfortu. Dbając o nasz materac, inwestujemy w nasze dobre samopoczucie i spokojny sen. Dlatego warto powierzyć tę czynność profesjonalistom, którzy stosują zaawansowane środki i techniki, aby uzyskać najlepsze efekty.</p>
			  <p>Dziękujemy za przeczytanie naszego artykułu i zapraszamy do skorzystania z naszych usług prania materacy, by cieszyć się zdrowszym i bardziej komfortowym snem!</p>
            </div>
            <button class="blog__content-mattress-btn" @click="showMattress" v-if="!mattressOn">
			  Czytaj więcej
			</button>
          </div>
        </div>
		<div class="blog__content-couch">
          <img
            src="/assets/img/Blog/kanapa.jpg"
            alt="JAK CZĘSTO PRAĆ TAPICERKĘ"
            class="blog__content-couch-img"
          />
          <div class="blog__content-couch-text">
            <h1>Jak Często Prać Tapicerkę? Odkryj Tęsknotę za Czystością z Naszą Firmą!</h1>
            <p>
				Każdy z nas marzy o pięknie urządzonej i czystej przestrzeni w swoim domu. Niezależnie od tego, czy uwielbiamy spędzać czas na miękkiej kanapie czy wygodnym fotelu, tapicerka meblowa stanowi serce naszego wnętrza. Jednak w miarę upływu czasu i codziennego użytkowania, nasza tapicerka zaczyna tracić swój blask i świeżość. Dlatego dzisiaj rozmawiamy o tym, jak często prać tapicerkę i dlaczego warto zaufać naszej firmie, aby wskrzesić dawny blask naszych mebli.
            </p>
            <div class="blog__content-couch-more" :class="couchOn" v-if="couchOn">
              <h3>Jak często prać tapicerkę?</h3>
              <p>
                Częstotliwość prania tapicerki może się różnić w zależności od wielu czynników, takich jak rodzaj tkaniny, stopień użytkowania i obecność alergenów czy zwierząt w domu. Jednak ogólna zasada brzmi: im częściej, tym lepiej! Oto kilka wytycznych, które warto wziąć pod uwagę:
              </p>
              <p>1. Codzienne użytkowanie: Jeśli meble są używane codziennie przez całą rodzinę, zalecamy pranie tapicerki co najmniej dwa razy w roku. Regularne oczyszczanie pozwoli uniknąć gromadzenia się brudu i zanieczyszczeń.</p>
				<p>
					2. Zwierzęta domowe: Jeśli w domu przebywają zwierzęta, szczególnie te, które uwielbiają spać na meblach, pranie tapicerki powinno być przeprowadzane częściej - co 3-4 miesiące. To pozwoli nie tylko na zachowanie czystości, ale także na eliminację alergenów i nieprzyjemnych zapachów.
              </p>
			  <p>
				3. Alergie i astma: Dla osób cierpiących na alergie lub astmę, częste pranie tapicerki (co 3-6 miesięcy) jest kluczowe dla zmniejszenia ilości alergenów, takich jak roztocza i kurz.
              </p>
			  <p>4. Plamy i zabrudzenia: W przypadku pojawienia się plam lub zabrudzeń, warto je natychmiast usunąć i przeprowadzić dokładne pranie tapicerki. W ten sposób unikniemy trwałych uszkodzeń i pozostawimy meble w nienagannej czystości.</p>
			  <h3>Dlaczego zaufać naszej firmie?</h3>
              <p>Odpowiedź jest prosta - nasza pasja i profesjonalizm! Jesteśmy zespołem ekspertów, którzy kochają swoją pracę i pragną dostarczyć Wam najwyższą jakość usług. Dlaczego warto skorzystać z naszej firmy do prania tapicerki?</p>
              <p>
                1. Wiedza i doświadczenie: Mamy wiele lat doświadczenia w czyszczeniu i praniu tapicerki różnych rodzajów i materiałów. Nasza wiedza pozwala nam dostosować metody i środki czyszczące do indywidualnych potrzeb każdego mebla.
              </p>
			  <p>2. Profesjonalne środki: Wykorzystujemy zaawansowane i bezpieczne środki czyszczące, które efektywnie usuwają plamy i zanieczyszczenia, pozostawiając tkaniny świeże i pachnące.</p>
			  <p>3. Skuteczne usuwanie alergenów: Jeśli zmagasz się z alergiami, nasze pranie tapicerki pomoże zmniejszyć ilość alergenów, które mogą wpływać negatywnie na Twoje zdrowie.</p>
			  <p>4. Szybkość i wygoda: Nasz zespół pracuje sprawnie i dokładnie, aby zapewnić Ci szybki powrót do czystego i przyjemnego otoczenia.</p>
			  <p>5. Miłość do szczegółów: Nasza firma dba o każdy detal. Nie zostawiamy niczego przypadkowi, dbając o to, aby Twój mebel odzyskał swoją pierwotną świetność.</p>
			  <p>Jeśli tęsknisz za świeżością, czystością i blaskiem swoich mebli, skorzystaj z naszych usług prania tapicerki. Zaufaj nam, a nasza firma odrodzi Twoje meble, pozostawiając Cię z uśmiechem na twarzy!</p>
			  <p>Dziękujemy za przeczytanie naszego bloga. Zachęcamy do skorzystania z naszych usług i do zobaczenia wkrótce!</p>
            </div>
            <button class="blog__content-couch-btn" @click="showCouch" v-if="!couchOn">
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
	  removalOn: false,
	  mattressOn: false,
	  couchOn: false,
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
	showRemoval() {
		this.removalOn = true;
	},
	showMattress() {
		this.mattressOn = true;
	},
	showCouch() {
		this.couchOn = true;
	}
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

	&-removal {
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

	&-mattress {
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

	&-couch {
      padding-top: 100px;
	  min-height: 500px;
	  padding-bottom: 100px;

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
