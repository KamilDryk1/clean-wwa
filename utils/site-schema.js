import { siteUrl, canonicalUrl, pageLabels } from '~/data/site';
import { districts, towns } from '~/data/locations';

export const businessId = `${siteUrl}/#business`;
export function siteSchema(path, metadata, image) {
  const url = canonicalUrl(path);
  const graph = [
    {
      '@type': 'LocalBusiness', '@id': businessId, name: 'CLEANWWA', alternateName: 'CLEAN-WWA', url: `${siteUrl}/`,
      description: 'Mobilne pranie tapicerki meblowej i samochodowej oraz czyszczenie wykładzin w Warszawie i okolicach. Usługi bezpośrednio u klienta.',
      telephone: '+48733740112', email: 'cleanwwa@gmail.com', taxID: '5060122821',
      logo: `${siteUrl}/assets/img/logo-sm-alt.png`, image: `${siteUrl}/assets/img/HomePage/description-2.jpg`,
      address: { '@type': 'PostalAddress', streetAddress: 'ul. Kasprzaka 29c', addressLocality: 'Warszawa', postalCode: '01-234', addressRegion: 'Mazowieckie', addressCountry: 'PL' },
      contactPoint: { '@type': 'ContactPoint', telephone: '+48733740112', contactType: 'obsługa klienta', availableLanguage: 'pl', hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '23:00' } },
      areaServed: [...districts.map(item => `Warszawa, ${item.name}`), ...towns.map(item => item.name)].map(name => ({ '@type': 'Place', name })),
      sameAs: ['https://www.facebook.com/CleanWwa', 'https://www.instagram.com/pranie_tapicerki_cleanwwa/', 'https://www.tiktok.com/@cleanwwa', 'https://www.youtube.com/@Cleanwwa-pranietapicerki/shorts'],
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'CLEANWWA', alternateName: 'CLEAN-WWA', inLanguage: 'pl-PL', publisher: { '@id': businessId } },
    { '@type': path === '/kontakt' ? 'ContactPage' : path === '/galeria' ? 'CollectionPage' : 'WebPage', '@id': `${url}#webpage`, url, name: metadata.title, description: metadata.description, inLanguage: 'pl-PL', isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': businessId }, primaryImageOfPage: { '@type': 'ImageObject', url: image }, ...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}) },
  ];
  if (path !== '/') graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: pageLabels[path], item: url },
  ] });
  return { '@context': 'https://schema.org', '@graph': graph };
}
