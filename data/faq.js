import { travelPolicy } from "./site";

// Treści na podstawie materiałów przekazanych przez klienta.
export const categories = [
  "Wszystkie",
  "Tapicerka meblowa",
  "Materace",
  "Dywany",
  "Wykładziny biurowe",
  "Tapicerka samochodowa",
  "Gwarancje i reklamacje",
  "Sprzęt i informacje"
];

export const faqs = [
  {
    "category": "Tapicerka meblowa",
    "question": "Mam nietypowy mebel, którego nie widzę w cenniku. Jak dokonać wyceny?",
    "answer": "Zachęcamy do przesłania zdjęcia mebli na nasz adres e-mail lub przez SMS. Możliwe jest również opisanie ich podczas rozmowy telefonicznej. Będziemy mieli kilka pytań odnośnie wymiarów, co pozwoli nam określić dokładną cenę usługi prania."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Ile czasu trwa pranie kanapy?",
    "answer": "Pranie kanapy przeważnie zajmuje od 45 minut do godziny. W niektórych przypadkach, jeżeli mebel jest ekstremalnie zabrudzony, ten czas może wynieść do 2 godzin."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Jak długo schną meble?",
    "answer": "Czas schnięcia tapicerki kanapy wynosi od 6 do 12 godzin, natomiast krzesło lub fotel schnie od 3 do 6 godzin. W niektórych przypadkach, w zależności od grubości materiału, stopnia zabrudzenia oraz wilgotności w pomieszczeniu, proces schnięcia może wydłużyć się nawet do 16 godzin. Pora roku ma niewielki wpływ na ten proces, pod warunkiem, że temperatura w pomieszczeniu jest odpowiednia – kanapa schnie z podobną efektywnością zarówno w styczniu, jak i w czerwcu."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Czy usuwacie zapach moczu zwierząt?",
    "answer": "Tak, usuwamy. Aby skorzystać z naszej usługi usuwania zapachów, prosimy o zgłoszenie tego podczas rezerwacji. Neutralizacja zapachów wiąże się z dodatkowym kosztem wynoszącym 30 zł."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Czy wszystkie plamy zostaną usunięte?",
    "answer": "Niestety nie możemy zapewnić, że wszystkie plamy zostaną całkowicie usunięte. Istnieją rodzaje plam, które wnikają w struktury włókien i mogą trwale odbarwić lub uszkodzić materiał. Niemniej jednak w 97% przypadków skutecznie eliminujemy plamy, przywracając tkaninom ich pierwotny wygląd."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Czy pierzecie każdy rodzaj tapicerki?",
    "answer": "Nasza firma skutecznie czyści 99% rodzajów mebli tapicerowanych, w tym trudne tkaniny, takie jak Penta i Carabu (przy dodatkowej opłacie w wysokości 30-50%). Należy jednak zaznaczyć, że nie podejmujemy się prania mebli wypełnionych pierzem ani niektórych delikatnych antyków – ostateczną decyzję podejmujemy po rozmowie telefonicznej z klientem."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Czy można przywieźć do Państwa mebel?",
    "answer": "Usługi wykonujemy jedynie mobilnie w domu, garażu lub biurze u klienta. Dojeżdżamy w pełni wyposażeni bezpośrednio pod wskazany adres."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Jaką metodą pierzecie tapicerkę?",
    "answer": "Pranie tapicerki wykonujemy metodą ekstrakcyjną, która jest powszechnie uważana za najbardziej efektywną technikę czyszczenia dostępną na rynku. Ta zaawansowana metoda umożliwia skuteczne wypłukanie głębokich zabrudzeń oraz nieprzyjemnych zapachów. Proces ten wymaga specjalistycznego sprzętu, odpowiednich środków czyszczących oraz fachowej wiedzy, co gwarantuje pełne bezpieczeństwo dla czyszczonych tkanin."
  },
  {
    "category": "Tapicerka meblowa",
    "question": "Mam małe dziecko, czy Wasza chemia jest bezpieczna?",
    "answer": "Tak, używamy jedynie certyfikowanych i sprawdzonych środków, które po profesjonalnym odciągnięciu są w 100% bezpieczne dla dzieci, dorosłych, alergików oraz zwierząt domowych."
  },
  {
    "category": "Materace",
    "question": "Jak długo schnie materac po praniu?",
    "answer": "Przewidywany czas schnięcia materaca wynosi od 8 do 14 godzin, choć w specyficznych warunkach (niska temperatura lub wysoka wilgotność) może się wydłużyć do 24 godzin. Długość tego procesu zależy głównie od rodzaju wkładu, materiału pokrowca oraz wentylacji pomieszczenia."
  },
  {
    "category": "Materace",
    "question": "Czy plamy z krwi zejdą z materaca?",
    "answer": "Skutecznie usuwamy świeże plamy krwi pod warunkiem, że nie były wcześniej zapierane domowymi sposobami lub ciepłą wodą (co utrwala białko we włóknach). Przed wizytą naszego specjalisty zalecamy utrzymywanie plamy w stanie wilgotnym (używając wyłącznie zimnej wody), co drastycznie zwiększa szansę na sukces. W przypadku plam mających już wiele tygodni lub miesięcy, pełne usunięcie przebarwienia z pokrowca może okazać się niemożliwe."
  },
  {
    "category": "Materace",
    "question": "Czy usuwacie zapach moczu z materaca?",
    "answer": "Tak, posiadamy specjalistyczne preparaty enzymatyczne do rozkładania mocznika i w zdecydowanej większości przypadków udaje nam się usunąć nieprzyjemny zapach w 100%. Należy jednak pamiętać, że jeśli ciecz wniknęła bardzo głęboko w strukturę grubej pianki lub rdzeń materaca, całkowite wyciągnięcie zapachu ze środka bywa technologicznie niemożliwe."
  },
  {
    "category": "Materace",
    "question": "Czy wszystkie plamy uda się usunąć z materaca?",
    "answer": "Nie można tego zagwarantować bez przeprowadzenia próby na miejscu. Efekt zależy od wieku plamy, materiału pokrowca oraz stosowanej wcześniej domowej chemii. Pamiętajmy, że pranie materaca to przede wszystkim zabieg wysoce higieniczny – skutecznie eliminuje pot, kurz, naskórek, roztocza i bakterie ze struktur tkaniny, dbając o Twoje zdrowie, nawet jeśli stary, zżółknięty zaciek uległ już trwałemu przebarwieniu."
  },
  {
    "category": "Materace",
    "question": "Ile czasu trwa pranie materaca?",
    "answer": "Pranie materaca trwa przeważnie od 30 do 45 minut, w zależności od jego gabarytów (jednoosobowy/dwuosobowy) oraz stopnia ogólnego zabrudzenia."
  },
  {
    "category": "Materace",
    "question": "Jak trzeba przygotować materac do prania?",
    "answer": "Prosimy jedynie o wcześniejsze zdjęcie pościeli i prześcieradła – całą resztą (odkurzaniem, przygotowaniem stanowiska) zajmie się nasz pracownik. Jeśli planują Państwo pranie z obu stron jednocześnie, warto przygotować np. miskę lub plastikowe wiaderko, na którym będziemy mogli oprzeć pionowo materac, co znacznie ułatwi jego równomierne schnięcie."
  },
  {
    "category": "Dywany",
    "question": "Jakie rodzaje dywanów pierzecie?",
    "answer": "Pierzemy dywany syntetyczne oraz wełniane o krótkim włosiu. Ze względów technologicznych nie podejmujemy się prania na miejscu dywanów wykonanych z wiskozy oraz modeli z bardzo długim, gęstym włosiem typu SHAGGY."
  },
  {
    "category": "Dywany",
    "question": "Pierzecie dywan na miejscu czy zabieracie go ze sobą?",
    "answer": "Wszystkie usługi realizujemy wyłącznie jako serwis mobilny – pierzemy dywany na miejscu, bezpośrednio w domu lub biurze klienta."
  },
  {
    "category": "Dywany",
    "question": "Jak długo schnie dywan po praniu?",
    "answer": "W zależności od gęstości oraz wysokości włosia, dywan schnie zazwyczaj od 6 do 12 godzin od zakończenia ekstrakcji."
  },
  {
    "category": "Dywany",
    "question": "Czy podłoga, na której leży i schnie dywan, będzie mokra?",
    "answer": "Nie. Dywany czyścimy wyłącznie od strony użytkowej (wierzchniej), ściśle kontrolując ilość podawanej wody. Dzięki temu spód dywanu oraz podłoga pod nim (panele, parkiet) pozostają bezpieczne i suche."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Czy przesuwacie meble biurowe podczas prania wykładzin?",
    "answer": "Tak, bez problemu przesuwamy lekkie meble, krzesła obrotowe oraz szafki posiadające kółka. Ze względów bezpieczeństwa nie przesuwamy ciężkich szaf pancernych, biurek z podłączonym sprzętem komputerowym ani mebli o dużych gabarytach."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "W jaki sposób trzeba przygotować biuro do prania wykładziny?",
    "answer": "Biuro nie wymaga skomplikowanych przygotowań. Prosimy jedynie o uprzątnięcie luźnych rzeczy z podłogi wokół biurek (dokumenty, kartony, drobne przedmioty osobiste), aby nasz zespół miał swobodny dostęp do powierzchni."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Jakiego sprzętu używacie do czyszczenia wykładzin w firmach?",
    "answer": "Pracujemy wyłącznie na zaawansowanym sprzęcie przemysłowym. Do czyszczenia wykładzin biurowych wykorzystujemy potężny ekstraktor Prochem Galaxy oraz profesjonalną szorowarkę walcową Carpet Cleaner TM3, co gwarantuje najwyższą skuteczność nawet przy mocno wydeptanych ciągach komunikacyjnych."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Jaki jest średni koszt prania wykładziny biurowej?",
    "answer": "Ostateczna cena zależy głównie od całkowitego metrażu oraz stopnia zabrudzenia wykładziny. Przyjmuje się, że uśredniona stawka rynkowa dla obiektów komercyjnych wynosi około 15 zł netto za m². Przy dużych powierzchniach oferujemy atrakcyjne rabaty."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Czy z wykładziny biurowej zejdą absolutnie wszystkie plamy?",
    "answer": "Nie jesteśmy w stanie zagwarantować usunięcia 100% zabrudzeń, ponieważ stare plamy (np. z tonera do drukarek, agresywnej kawy lub mocnych kwasów) mogą trwale odbarwić strukturę polipropylenu lub poliamidu. Mimo to nasza udokumentowana skuteczność w usuwaniu plam w biurach wynosi około 98%."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Ile czasu zajmie pranie wykładziny w naszym biurze?",
    "answer": "Czas trwania prac zależy od specyfiki powierzchni i zabrudzeń. Przeciętnie, dysponując profesjonalnym sprzętem przemysłowym, jesteśmy w stanie dokładnie wyprać około 50-70 m² wykładziny w ciągu jednej godziny."
  },
  {
    "category": "Wykładziny biurowe",
    "question": "Jak długo schnie wykładzina biurowa?",
    "answer": "Wykładzina obiektowa, ze względu na niskie i zbite runo, schnie bardzo szybko – zazwyczaj zajmuje to od 5 do 10 godzin od zakończenia prac. Na życzenie firmy możemy wykonać usługę wieczorem lub w weekend, by w poniedziałek rano biuro było w pełni gotowe do pracy."
  },
  {
    "category": "Tapicerka samochodowa",
    "question": "Czy mogę przywieźć samochód do Waszego punktu?",
    "answer": "Nie prowadzimy punktu stacjonarnego. Świadczymy usługi wyłącznie mobilnie, przyjeżdżając pod wskazany adres prywatny, do firmy lub garażu klienta."
  },
  {
    "category": "Tapicerka samochodowa",
    "question": "Czego potrzebujecie na miejscu do wykonania usługi prania auta?",
    "answer": "Do sprawnego przeprowadzenia czyszczenia wnętrza pojazdu potrzebujemy jedynie stałego dostępu do prądu (230V) oraz około 10 litrów czystej wody."
  },
  {
    "category": "Tapicerka samochodowa",
    "question": "Jak przygotować samochód przed przyjazdem specjalisty?",
    "answer": "Prosimy o całkowite opróżnienie wnętrza z rzeczy osobistych, wyjęcie fotelików dziecięcych oraz usunięcie większych śmieci (np. butelek, luźnych papierów). Jeśli na tapicerce znajdują się duże luźne zanieczyszczenia, warto je wstępnie odkurzyć, co ułatwi nam pracę ekstrakcyjną."
  },
  {
    "category": "Tapicerka samochodowa",
    "question": "Jak wygląda proces schnięcia tapicerki samochodowej?",
    "answer": "Czas schnięcia zależy mocno od pogody (w przypadku pracy na zewnątrz) lub wentylacji w garażu, ale przeważnie wynosi od 12 do 24 godzin. Bezpośrednio po wykonanym praniu zalecamy pozostawienie lekko uchylonych szyb w aucie, aby nagromadzona wilgoć mogła swobodnie odparować z wnętrza pojazdu."
  },
  {
    "category": "Gwarancje i reklamacje",
    "question": "Jak działa Wasza 3-dniowa Gwarancja Jakości?",
    "answer": "Do każdej wykonanej usługi oferujemy unikalną, trzydniową gwarancję satysfakcji. W przypadku, gdy po wyschnięciu materiału efekt nie spełni w pełni Państwa oczekiwań, prosimy o kontakt – przyjedziemy w najbliższym możliwym terminie, aby bezpłatnie dokonać poprawek. Jeśli efekt nadal nie będzie zadowalający, zwrócimy do 100% ceny wykonanej usługi lub jej część."
  },
  {
    "category": "Gwarancje i reklamacje",
    "question": "Zapach moczu lub wymiocin nie został do końca usunięty. Co zrobić?",
    "answer": "Nie możemy dać 100% gwarancji na pełne usunięcie głębokich zapachów organicznych. Substancje te potrafią wsiąknąć głęboko w gąbkę mebla – poza zasięg działania maszyn ekstrakcyjnych, które piorą tapicerkę oraz wyłącznie powierzchniową warstwę gąbki. Z doświadczenia wiemy, że w większości przypadków uciążliwa woń znika, jednak pełna eliminacja nie zawsze jest fizycznie możliwa. Jeśli usługa nie spełni oczekiwań, w ramach naszej polityki oferujemy zwrot do 100% kosztów prania danego mebla."
  },
  {
    "category": "Sprzęt i informacje",
    "question": "Gdzie dojeżdżacie i ile kosztuje transport?",
    "answer": travelPolicy
  },
  {
    "category": "Sprzęt i informacje",
    "question": "Jakiej chemii i detergentów używacie do prania?",
    "answer": "Używamy wyłącznie chemii profesjonalnej renomowanych, światowych marek, takich jak Prochem, Chemspec oraz Solution World of Clean. Detergenty dobieramy ściśle pod kątem składu materiału i rodzaju plam, co gwarantuje pełne bezpieczeństwo przed uszkodzeniem włókien. Środki te są całkowicie bezpieczne dla ludzi, zwierząt oraz są przyjazne dla alergików."
  },
  {
    "category": "Sprzęt i informacje",
    "question": "Na jakim sprzęcie pracujecie?",
    "answer": "Po pierwsze, żadnego Karchera! Działamy na sprzęcie profesjonalnym o znacznie wyższych parametrach podawania i odsysania wody. W większości przypadków pracujemy na maszynie Sabrina Santoemma, która ma około dwukrotnie większą siłę ssania niż popularne odkurzacze marketowe. Posiadamy także ekstraktor przemysłowy Prochem Galaxy, szorowarkę walcową Carpet Cleaner TM3, szorowarkę obrotową Viper LS160 oraz akumulatorowe opryskiwacze ciśnieniowe. Taki park maszynowy pozwala nam bez problemu obsługiwać zarówno małe mieszkania, jak i ogromne powierzchnie biurowe."
  },
  {
    "category": "Sprzęt i informacje",
    "question": "Czy dostanę fakturę na swoją firmę?",
    "answer": "Tak, jak najbardziej. Nasza firma jest czynnym podatnikiem VAT, dlatego po zrealizowaniu usługi bez problemu wystawimy pełną fakturę VAT na Twoją firmę."
  },
  {
    "category": "Sprzęt i informacje",
    "question": "Czy Wasza firma posiada ubezpieczenie OC?",
    "answer": "Tak, posiadamy pełną polisę ubezpieczenia odpowiedzialności cywilnej (OC) od wszelkich ewentualnych szkód lub zniszczeń mogących powstać w trakcie wykonywania naszych usług, opiewającą na kwotę do 100 000 zł. Zamawiając nas, zyskujesz pełne bezpieczeństwo i spokój."
  }
];
