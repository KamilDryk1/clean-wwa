<template>
  <section class="blog">
    <div class="blog__container">
      <div class="blog__content">
		<div class="blog__content-chemistry">
			<img
            	src="/assets/img/Blog/image3.jpg"
        		alt="Usuwanie krwi"
           		class="blog__content-removal-img"
        	/>
			<div class="blog__content-chemistry-text">
				<h1>Usuwanie plam to kwestia chemii</h1>
				<p>
					Kiedy Twój ulubiony mebel lub drogi dywan ulegnie nagłemu zabrudzeniu, często pierwszą reakcją jest próba samodzielnego usunięcia plamy. Ponieważ supermarkety oferują tak szeroką gamę produktów o nazwach obiecujących usunięcie wszelkiego rodzaju plam, nie jest zaskoczeniem, że konsumenci sięgają po butelkę z półki. Wiele osób nie wie jednak, że zgodnie z niedawnym raportem, w 90% przypadków, w których klient próbuje samodzielnie usunąć plamę, kończy się to roszczeniem ubezpieczeniowym. Prawda jest taka, że usuwanie plam jest w rzeczywistości kwestią chemii i w rezultacie nie ma jednego produktu, który poradziłby sobie ze wszystkimi plamami na każdym włóknie dywanu!
				</p>
				<div class="blog__content-chemistry-more" :class="chemistryOn" v-if="chemistryOn">
					<h3>Usuwanie plam to nauka, która wymaga specjalistycznej wiedzy i dbałości o szczegóły</h3>
					<p>
						Zanim spróbujesz samodzielnie usunąć plamę, musisz znać rodzaj włókna i jego
						właściwości.Pomimo obietnic dotyczących produktów do czyszczenia, nie ma jednego
						rozwiązania, które poradziłoby sobie ze wszystkimi plamami na każdym dywanie meblu.
						Niekiedy może zdarzyć się tak, że bardziej wyszukany materiału typu wiskoza, jedwab,
						carabu mogą ulec zniszczeniu poprzez zastosowanie niewłaściwej chemii.
					</p>
					<h3>Co powinienem zrobić, gdy nagle muszę poradzić sobie z plamą?</h3>
					<p>
						Jeśli w Twoim domu właśnie pojawiła się plama, nie panikuj! Lepiej zostawić plamę na noc,
						niż próbować usunąć ją w domu za pomocą YouTube. Ważne jest jednak, aby usunąć
						plamę tak szybko, jak to możliwe, aby ułatwić proces usuwania. W CLEANWWA zawsze
						chętnie udzielamy klientom bezpłatnych porad dotyczących kolejnych kroków lub sami
						dokładnie oceniamy przedmiot. Możesz również skontaktować się z producentem
						przedmiotu, aby uzyskać szczegółowe porady. Jeśli próbowałeś już wyczyścić plamę, a jej
						stan się nie poprawił lub pogorszył, jeszcze ważniejsze jest skontaktowanie się z
						doświadczonym specjalistą. W międzyczasie zalecamy usunięcie wszelkich ciał stałych i
						wytarcie świeżych plam czystymi, białymi ręcznikami lub serwetkami.
					</p>
					<h3>Ważne informacje na temat tych powszechnych plam</h3>
					<h3>Plama z kawy</h3>
					<p>
						Mogłoby się wydawać, że wszystkie plamy z kawy są takie same, ale głównym czynnikiem
						jest temperatura. Gorąca kawa wniknie głębiej we włókno i zastygnie, podczas gdy plama z
						zimnej kawy może łatwiej zejść. Kolor kawy również ma znaczenie: biała kawa zawiera
						mleko, w związku z czym białko zawarte w mleku musi zostać usunięte w pierwszej
						kolejności przed garbnikami zawartymi w samej kawie.
					</p>
					<h3>Czerwone wino</h3>
					<p>
						Wiele osób uważa, że białe wino zneutralizuje plamę z czerwonego wina, ale jest to
						nieprawda. Usuwanie plam z czerwonego wina jest trudne i w idealnym przypadku wymaga
						profesjonalisty. Najlepiej jest nie robić nic z plamą samodzielnie, ponieważ im bardziej jest
						ona naruszona, tym głębsza staje się plama.
					</p>
					<h3>Lakier do paznokci</h3>
					<p>
						Jest to szczególnie trudna plama i pomimo pokusy, nigdy nie należy używać zmywacza do paznokci, ponieważ rozpuści on klej, który utrzymuje włókna przymocowane do podłoża dywanu.
					</p>
					<h3>Krew</h3>
					<p>
						Ponieważ jest to płyn ustrojowy, konieczne jest noszenie rękawiczek. Wirusy mogą przetrwać w zaschniętej krwi do 7 dni. Należy używać tylko zimnej wody bez szorowania, ale domowe usuwanie może pozostawić ślad wody.
					</p>
					<h3>Plama z moczu</h3>
					<p>
						Usuwanie plam z moczu to kolejny bardzo trudny przypadek, ale pierwszym krokiem jest
						zawsze spłukanie plamy, ponieważ obszar musi być całkowicie odkażony. Profesjonalista
						powinien zazwyczaj być w stanie zapewnić zadowalające usunięcie plam już po tym
						pierwszym procesie, o ile zostanie on wykonany szybko.
					</p>
					<p>
						Oddzielna usługa jest konieczna, jeśli odbarwienie utrzymuje się po wyschnięciu obszaru w
						celu usunięcia pozostałości koloru. Mocz jest silnie kwaśny, ale staje się silnie zasadowy, gdy
						wchodzi w kontakt z włóknami, a te skrajne wartości pH mogą wpływać na oryginalny kolor,
						szczególnie w przypadku dywanów wełnianych. W CLEANWWA używamy
						zaawansowanego procesu usuwania plam, aby przetestować obszar mebla, aby zobaczyć, jak
						zareaguje na działanie, zanim w pełni usuniemy plamę z moczu. Jeśli zabieg zostanie
						wykonany szybko, nie powinna nastąpić utrata koloru.
					</p>
					<h3>Czy możemy zagwarantować, aby każda plama zniknęła?</h3>
					<p>
						Jesteśmy w pełni certyfikowanym specjalistą w zakresie pielęgnacji włókien i mamy ponad
						dziesięcioletnie doświadczenie w skutecznym usuwaniu szerokiej gamy plam, które
						pozostały nietknięte. Możemy również ocenić i kontynuować leczenie, gdy próbowano
						usunąć plamę w domu za pomocą produktów domowych, ale nie możemy zagwarantować, że
						każda plama zostanie usunięta w tym przypadku.
					</p>
				</div>
				<button class="blog__content-chemistry-btn" @click="showChemistry" v-if="!chemistryOn">
			  		Czytaj więcej
				</button>
			</div>
		</div>
		<div class="blog__content-blood">
			<img
            	src="/assets/img/Blog/image2.jpg"
        		alt="Usuwanie krwi"
           		class="blog__content-removal-img"
        	/>
			<div class="blog__content-blood-text">
				<h1>Jak czyścić plamy krwi z tapicerki?</h1>
				<p>
					Nasze meble tapicerowane są jednym z największych powodów do dumy i radości w
					naszym życiu. Na tej trudnej ścieżce naszej egzystencji niewiele jest osiągnięć, które są
					naprawdę trwałe. Choć może to zabrzmieć głupio, dekorowanie i tworzenie domu jest jedną
					z najbardziej pielęgnujących duszę rzeczy, jakie możemy zrobić. Jednak meble pokryte
					tkaniną mają wielu wrogów, którzy próbują zrujnować ich piękny wygląd. Jednym z tych
					plamiących wrogów jest krew. Krew może być trudna do usunięcia z mebli tapicerowanych,
					zwłaszcza jeśli wyschła. Dlatego przygotowaliśmy ten przewodnik, aby wyjaśnić, jak czyścić
					plamy krwi z tapicerki.
				</p>
				<div class="blog__content-blood-more" :class="bloodOn" v-if="bloodOn">
					<h3>Różne materiały tapicerskie</h3>
					<p>
						Zanim powiemy, jak czyścić plamy krwi z tapicerki, warto zapoznać się z różnymi rodzajami
						tkanin, którymi tapicerowane są meble. Każdy rodzaj ma swoje mocne i słabe strony,
						dlatego warto zapoznać się z nimi przed przystąpieniem do samodzielnego czyszczenia.
						Jest ich wiele, więc wymienimy najpopularniejsze tkaniny w Polsce.
					</p>
					<p>● Wełna - niezbyt odporna na plamy, skomplikowany proces czyszczenia;</p>
					<p>● Bawełna - niezbyt odporna na blaknięcie, skomplikowany proces czyszczenia;</p>
					<p>● Nylon - trwały, łatwy w czyszczeniu, wysoka odporność na ścieranie;</p>
					<p>● Poliester - trwały, łatwy w czyszczeniu;</p>
					<p>● Akryl - długotrwały, łatwy w czyszczeniu;</p>
					<p>● Olefina - trwała, łatwa w czyszczeniu;</p>
					<p>● Rayon - niezbyt trwały, czyszczenie w niskiej wilgotności.</p>
					<p>
						Znajomość kluczowych cech tych tkanin pozwoli ci wiedzieć, czy należy odstąpić od
						niektórych instrukcji czyszczenia i wprowadzić własne poprawki do procesu czyszczenia.
						Zalecamy również sprawdzenie etykiet z instrukcjami czyszczenia tapicerki, aby nie
						uszkodzić tapicerki. Teraz, bez dalszych ceregieli, oto nasze instrukcje dotyczące
						czyszczenia plam krwi z tapicerki.
					</p>
					<h3>Jak czyścić plamy krwi z tapicerki?</h3>
					<p>
						Czyszczenie plam krwi, niezależnie od tego, czy czyścisz tapicerkę, czy nie, może wiązać
						się z ryzykiem higienicznym. Przed rozpoczęciem procesu czyszczenia chcielibyśmy zwrócić
						uwagę na 2 bardzo ważne rzeczy:
					</p>
					<p>
						1. Podczas czyszczenia krwi należy zawsze nosić rękawice PPE. Wirusy takie jak HIV,
						wirusowe zapalenie wątroby typu B i C, kiła, bruceloza i wiele innych są przenoszone
						przez krew. Wirusy te mogą przetrwać do 7 dni w plamach krwi, dlatego należy
						zachować ostrożność.
					</p>
					<p>
						2. Nigdy nie czyść krwi gorącą wodą. Krew jest plamą białkową i gorąca woda sprawi,
						że zastygnie ona w tkaninie, uniemożliwiając jej usunięcie.
					</p>
					<p>
						Jak czyścić plamy krwi z tapicerki:
					</p>
					<p>
						1. Użyj szczoteczki do zębów, aby usunąć krew z tkaniny, jeśli plama krwi zaschła.
					</p>
					<p>
						2. Jeśli pokrowce mebli tapicerowanych można zdjąć, zrób to.
					</p>
					<p>
						3. Wypłucz pokrowce wiele razy, wypłukując jak najwięcej krwi.
					</p>
					<p>
						4. Jeśli nie, weź chłonną szmatkę lub gąbkę i zwilż ją.
					</p>
					<p>
						5. Przetrzyj obszar i usuń jak najwięcej plamy. Wypłucz gąbkę lub ściereczkę, aby uniknąć rozprzestrzeniania się plamy.
					</p>
					<p>
						6. Weź filiżankę zimnej wody i wymieszaj ją z odrobiną wody sodowej.
					</p>
					<p>
						7. Wylej tę mieszaninę na obszar i użyj czystej gąbki, aby zetrzeć plamę.
					</p>
					<p>
						8. Powtórz krok 7 kilka razy. Gdy zauważysz, że woda wypłukiwana z gąbki nie ma już krwistego zabarwienia, możesz zakończyć krok 7.
					</p>
					<p>
						9. Wymieszaj 8 części wody z 1 częścią gliceryny i 1 częścią detergentu do prania (wybierz najlepszy detergent, który pasuje do rodzaju tapicerki) i dodaj kroplę płynu do mycia naczyń fairy.
					</p>
					<p>
						10. Wymieszaj w butelce z rozpylaczem.
					</p>
					<p>
						11. Spryskaj plamę 2 lub 3 razy i wyszoruj ją gąbką.
					</p>
					<p>
						12. Jeśli uważasz, że może to być konieczne, powtórz krok 11 kilka razy.
					</p>
					<p>
						13. Gdy plama przestanie być widoczna, weź miskę z czystą, chłodną wodą i wypłucz tkaninę, aż nie będzie już mydlin.
					</p>
				</div>
				<button class="blog__content-blood-btn" @click="showBlood" v-if="!bloodOn">
			  		Czytaj więcej
				</button>
			</div>
		</div>
		<div class="blog__content-bestCarpet">
			<img
            	src="/assets/img/Blog/image5.jpg"
        		alt="Najlepszy dywan do salonu"
           		class="blog__content-removal-img"
        	/>
			<div class="blog__content-bestCarpet-text">
				<h1>Jak wybrać dywan do salonu (najlepszy materiał)</h1>
				<p>
					Przyjrzymy się, jak wybrać dywan do salonu według materiału. Wybór tkaniny może zależeć
					od tego, czego szukasz. Pamiętaj, że jeśli masz zwierzęta lub dzieci, będziesz potrzebować
					czegoś bardziej trwałego i odpornego na plamy.
				</p>
				<div class="blog__content-bestCarpet-more" :class="bestCarpetOn" v-if="bestCarpetOn">
					<h3>1. Wiskoza Tencel:</h3>
					<p>
						Jeśli chcesz zaprojektować wnętrze swojego domu w luksusowym stylu, możesz
						zdecydować się na wiskozę Tencel, znaną również jako jedwab artystyczny. Wiskoza to
						wszechstronne włókno, które zapewnia taki sam komfort jak włókna naturalne. Jest uważane
						za półsyntetyczne, ponieważ wykorzystuje również naturalną celulozę. Jedwab artystyczny
						jest oddychający, chłodny w dotyku i bardzo łatwo przyjmuje kolory.
					</p>
					<h3>2. polipropylen:</h3>
					<p>
						Posiadanie dzieci i zwierząt domowych nie pozwala na stosowanie luksusowych materiałów
						w salonie. Najlepszą opcją w tym przypadku jest ładny dywan polipropylenowy. Są one tanie
						w zakupie i mają długą żywotność (10-15 lat, jeśli są dobrze pielęgnowane). Z punktu
						widzenia czyszczenia dywanów jest to najlepszy wybór, ponieważ jest naturalny, trwały i
						łatwy do czyszczenia i konserwacji.
					</p>
					<h3>3. wełna</h3>
					<p>
						Dywany wełniane to kolejny optymalny wybór do salonu. Ze względu na zawartość lanoliny
						w wełnie, ten rodzaj tkaniny jest naturalnie odporny na plamy i znacznie łatwiejszy do
						czyszczenia niż dywany syntetyczne. Dobry wełniany dywan z krótkim włosiem nie będzie
						miał żadnych problemów z rozlanymi płynami. Jeśli zdążysz na czas, łatwo je zetrzeć.
						Ponadto regularne odkurzanie pomaga utrzymać je w doskonałym stanie. Jeśli odpowiednio
						dbasz o swój wełniany dywan, możesz spodziewać się jego żywotności na poziomie 15-20
						lat. Należy jednak pamiętać, że niektóre dywany wełniane o intensywnych kolorach mogą ścierać swój kolor. Jeśli dywan będzie położony na wykładzinie dopasowanej do ściany, takie przeniesienie koloru jest niemożliwe do usunięcia.
					</p>
					<p>
						Oczywiście są to tylko nasze wytyczne dotyczące najlepszego wyboru. Nasze wybory zostały
						dokonane z punktu widzenia profesjonalnego sprzątacza. Oznacza to, że są to najlepsze opcje
						w zakresie konserwacji i czyszczenia. Kolejna szybka wskazówka: zalecamy również zakup
						dywanu z krótkim włosiem. Jest on bardziej odporne na plamy i łatwiejsze w czyszczeniu
						niż dywany z długim włosiem.
					</p>
				</div>
				<button class="blog__content-bestCarpet-btn" @click="showBestCarpet" v-if="!bestCarpetOn">
			  		Czytaj więcej
				</button>
			</div>
		</div>
		<div class="blog__content-oldLook">
			<img
            	src="/assets/img/Blog/blog3.jpg"
        		alt="Przywracanie dawnego wyglądu"
           		class="blog__content-removal-img"
        	/>
			<div class="blog__content-oldLook-text">
				<h1>4 sposoby na przywrócenie sofie dawnego wyglądu</h1>
				<p>
					Czy Twoja sofa wygląda na nieco zabrudzoną? Jeśli tak, to może być kuszące, aby
					kupić nową. Jednak zakup nowej sofy to znacząca inwestycja, która wymaga wielu
					poszukiwań i cierpliwości. Nawet jeśli wybierzesz ją szybko, być może będziesz musiał
					czekać tygodniami na jej dostawę, aby przekonać się, że nie pasuje do Twojego mieszkania
					tak, jak sobie wyobrażałeś. Dlaczego więc nie spróbować odnowić sofę, którą już masz? W
					końcu podobała ci się, gdy ją kupiłeś i do tej pory dobrze ci służyła, prawda? Jeśli rama nie
					jest zepsuta, możesz poprawić wygląd i stan swoich mebli za pomocą kilku prostych
					sztuczek. Nasi specjaliści od pielęgnacji tkanin dzielą się sposobami na odświeżenie starej
					sofy i cieszenie się nią przez wiele kolejnych lat.
				</p>
				<div class="blog__content-oldLook-more" :class="oldLookOn" v-if="oldLookOn">
					<h3>Zadzwoń do firmy czyszczącej sofy</h3>
					<p>
						Kiedy sofa zaczyna wyglądać na zużytą, pierwszym i najważniejszym krokiem jest
						zorganizowanie głębokiego czyszczenia tapicerki. Profesjonalny zabieg to najlepszy sposób
						na przywrócenie pięknego wyglądu miękkim meblom. Jest to niedrogie i szybkie rozwiązanie
						na odświeżenie matowego wyglądu sofy, nawet w przypadku starych, nieestetycznych plam.
						Eksperci używają potężnego sprzętu i zaawansowanych produktów do radzenia sobie z
						różnymi rodzajami zabrudzeń; na przykład my w CLEANWWA używamy ponad 10 różnych
						rozwiązań, które pomagają nam pozbyć się wszelkiego rodzaju plam, w tym tłuszczu, krwi,
						moczu, kawy, czerwonego wina, sosu sojowego i wielu innych.
					</p>
					<p>
						Głębokie czyszczenie co najmniej raz w roku pomaga nie tylko odświeżyć wygląd, ale także
						przedłuża żywotność sofy. Profesjonalne zabiegi, takie jak ekstrakcja gorącą wodą, usuną
						brud i kurz osadzony głęboko w tkaninach i zapobiegną ich zużyciu. I nie zapomnij poprosić
						o ochronę przed plamami wraz z usługą głębokiego czyszczenia sofy, aby chronić świeżo
						wyczyszczone meble. W ostatecznym rozrachunku czyszczenie sofy kosztuje mniej niż
						zakup nowych mebli.
					</p>
					<h3>Usunięcie zmechaceń</h3>
					<p>
						Z biegiem czasu możesz zauważyć, że na powierzchni Twojej sofy gromadzi się
						zmechacenia - podobne do tego, który tworzy się na ubraniach. Problem ten jest najbardziej
						powszechny w przypadku luźniejszych, krótszych włókien, a niektóre tkaniny mają tendencję
						do mechacenia się bardziej niż inne. Tapicerka wykonana tylko z jednego rodzaju nici -
						naturalnej lub syntetycznej - ma tendencję do łatwiejszego powstawania zmechaceń niż sofy
						pokryte materiałami mieszanymi, z wyjątkiem aksamitu, jedwabiu i lnu.
					</p>
					<p>
						Te uciążliwe zmechacenia powstają w wyniku codziennego zużycia, gdy zerwane włókna na
						powierzchni tapicerki stają się splątane. Z czasem nitki te zlepiają się ze sobą, tworząc
						charakterystyczne kuleczki przyklejone do mebli. I chociaż te małe kulki są dość
						nieestetyczne i mogą sprawić, że sofa będzie wyglądać na zużytą, można sobie z nimi łatwo
						poradzić. Wszystko, czego potrzebujesz, to zasilana bateryjnie golarka do tkanin - taka sama,
						jakiej możesz używać do swetrów i innych ubrań. Przeciągnij gadżet po problematycznych
						obszarach, a usunie on nadmiar zmechaceń, natychmiast poprawiając wygląd sofy.
					</p>
					<h3>Ponowne tapicerowanie</h3>
					<p>
						Prawdę mówiąc, pokrycie sofy nową tapicerką nie jest najprostszym rozwiązaniem.
						Zalecamy je tylko w przypadku wyblakłych kolorów i rozdarć na tkaninie. Zmiana tapicerki to
						złożony proces, który nie trwa jeden dzień. Jest to również dość niewygodne - musisz
						rozstać się ze swoją sofą na kilka tygodni, ponieważ profesjonaliści nie mogą pracować nad
						nią w Twoim domu. Zazwyczaj trzeba zorganizować transport mebla do ich pracowni, gdzie
						dysponują narzędziami i materiałami potrzebnymi do jego odnowienia. Mimo to,
						tapicerowanie nadaje się do odnawiania wyblakłych lub podartych luksusowych lub
						zabytkowych mebli. Jeśli rama sofy jest nienaruszona, a ty nadal ją uwielbiasz,
						tapicerowanie jest sposobem na uratowanie jej i nadal może być tańsze niż zakup nowego.
					</p>
					<h3>Wypróbuj pokrowce, koce</h3>
					<p>
						Jeśli twoja sofa ma zdejmowane poduszki, możesz znaleźć profesjonalistę, który uszyje ci
						całkowicie nowe pokrowce tapicerskie, które idealnie pasują do każdej części sofy. Nie
						działa to jednak w przypadku mebli, które mają stałe poduszki. Pokrowce na kanapy są
						bardziej bezproblemowym i przyjaznym dla budżetu rozwiązaniem niż pranie tapicerki.
						Obecnie można kupić całe pokrowce, które w pełni otulają sofę. Są one elastyczne i dobrze
						dopasowują się do krzywizn kanapy. Kolejną zaletą jest to, że można wybierać spośród
						wielu wzorów, co pomaga zmienić wygląd mebli. Jednakże, chociaż gotowe elastyczne
						pokrowce są piękne, są one jedynie rozwiązaniem kosmetycznym. Nie sprawią, że brud i
						utrzymujące się zapachy znikną. Dlatego nadal warto zarezerwować profesjonalne
						czyszczenie tapicerki i upewnić się, że sofa jest higieniczna pod nowym pokrowcem.
					</p>
				</div>
				<button class="blog__content-oldLook-btn" @click="showOldLook" v-if="!oldLookOn">
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
	  removalOn: false,
	  mattressOn: false,
	  couchOn: false,
	  oldLookOn: false,
	  bestCarpetOn: false,
	  bloodOn: false,
	  chemistryOn: false,
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
	},
	showOldLook() {
		this.oldLookOn = true;
	},
	showBestCarpet() {
		this.bestCarpetOn = true;
	},
	showBlood() {
		this.bloodOn = true;
	},
	showChemistry() {
		this.chemistryOn = true;
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
    margin: 100px 4% 0;
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

	&-oldLook {
		padding-top: 100px;
		min-height: 500px;
	}

	&-bestCarpet {
		padding-top: 100px;
		min-height: 500px;
	}

	&-blood {
		padding-top: 100px;
		min-height: 500px;
	}

	&-chemistry {
		padding-top: 100px;
		min-height: 500px;
	}
  }
}
</style>
