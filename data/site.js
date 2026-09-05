export const siteUrl = 'https://cleanwwa.pl';
export const homeTitle = 'Pranie tapicerki i wykładzin Warszawa | CLEANWWA';
export const homeDescription = 'Kompleksowe pranie tapicerki meblowej i samochodowej oraz wykładzin biurowych na terenie Warszawy i okolic. Wynajem profesjonalnego sprzętu piorącego. Sprawdź cennik!';
export const travelPolicy = 'Dojazd na terenie Warszawy jest bezpłatny. Koszt dojazdu poza Warszawę ustalamy indywidualnie podczas wyceny, przed potwierdzeniem zlecenia.';

export const pageMetadata = {
  '/': { title: homeTitle, description: homeDescription },
  '/uslugi': { title: 'Pranie tapicerki, materacy i wykładzin Warszawa | CLEANWWA', description: 'Pranie tapicerki meblowej i samochodowej, materacy, dywanów i wykładzin. Czyszczenie skór i posadzek oraz wynajem sprzętu. Warszawa i okolice.' },
  '/dla-firm': { title: 'Pranie wykładzin biurowych Warszawa – dla firm | CLEANWWA', description: 'Czyszczenie wykładzin i tapicerki dla biur, hoteli i restauracji w Warszawie. Praca wieczorami i w weekendy, faktura VAT. Poznaj ofertę i cennik dla firm.' },
  '/pytania-klientow': { title: 'Pranie tapicerki – pytania i odpowiedzi | CLEANWWA', description: 'Ile schnie kanapa po praniu? Jak przygotować meble do czyszczenia? Odpowiedzi na pytania o pranie tapicerki, materacy i wykładzin w CLEANWWA.' },
  '/gdzie-dzialamy': { title: 'Gdzie działamy – pranie tapicerki Warszawa i okolice | CLEANWWA', description: 'Pranie tapicerki i czyszczenie wykładzin w 18 dzielnicach Warszawy i 13 pobliskich miastach i gminach. Sprawdź swój obszar i zapytaj o wycenę.' },
  '/cennik': { title: 'Cennik prania tapicerki i wykładzin Warszawa | CLEANWWA', description: 'Sprawdź ceny prania kanap, narożników, materacy, dywanów i tapicerki samochodowej. CLEANWWA – mobilne czyszczenie w Warszawie i okolicach.' },
  '/galeria': { title: 'Efekty prania tapicerki – galeria przed i po | CLEANWWA', description: 'Zobacz efekty czyszczenia tapicerki, dywanów i wykładzin przez CLEANWWA. Zdjęcia naszych realizacji przed i po praniu.' },
  '/kontakt': { title: 'Kontakt i wycena prania tapicerki Warszawa | CLEANWWA', description: 'Zadzwoń do CLEANWWA: 733 740 112, codziennie 7:00–23:00. Zamów mobilne pranie tapicerki i wykładzin w Warszawie i okolicach.' },
};

export const pageLabels = { '/': 'Strona główna', '/uslugi': 'Usługi', '/dla-firm': 'Dla firm', '/pytania-klientow': 'Pytania klientów', '/gdzie-dzialamy': 'Gdzie działamy', '/cennik': 'Cennik', '/galeria': 'Galeria', '/kontakt': 'Kontakt' };

export const pageImages = {
  '/': '/assets/img/HomePage/background-img.jpg',
  '/uslugi': '/assets/img/Uslugi/uslugi-img.jpg',
  '/dla-firm': '/assets/img/DlaFirm/companies-background.jpg',
  '/pytania-klientow': '/assets/img/Uslugi/meblowa.jpg',
  '/gdzie-dzialamy': '/assets/img/Obszar/warszawa.jpg',
  '/cennik': '/assets/img/Cennik/price-list-img.jpg',
  '/galeria': '/assets/img/Galeria/gallery-img.jpg',
  '/kontakt': '/assets/img/Kontakt/kontakt-img.jpg',
};

export function normalizePath(path) { return path.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/'; }
export function canonicalUrl(path) { const normalized = normalizePath(path); return `${siteUrl}${normalized === '/' ? '/' : `${normalized}/`}`; }
