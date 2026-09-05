import { pageMetadata, pageImages, pageLabels, siteUrl, normalizePath, canonicalUrl } from '~/data/site';
import { structuredData } from '~/utils/structured-data';
import { siteSchema } from '~/utils/site-schema';

export default {
  head() {
    const path = normalizePath(this.$route.path);
    const canonicalPath = path === '/blog' ? '/pytania-klientow' : path;
    const metadata = pageMetadata[canonicalPath];
    if (!metadata) return {
      title: 'Nie znaleziono strony | CLEANWWA',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex, follow' }, { hid: 'description', name: 'description', content: 'Nie znaleziono strony. Sprawdź usługi CLEANWWA lub skontaktuj się z nami w sprawie prania tapicerki w Warszawie.' }],
    };
    const url = canonicalUrl(canonicalPath);
    const image = `${siteUrl}${pageImages[canonicalPath]}`;
    const og = (property, content) => ({ hid: property, property, content });
    const twitter = (name, content) => ({ hid: name, name, content });
    return {
      title: metadata.title,
      meta: [
        { hid: 'description', name: 'description', content: metadata.description },
        { hid: 'robots', name: 'robots', content: 'index, follow, max-image-preview:large' },
        og('og:type', 'website'), og('og:locale', 'pl_PL'), og('og:site_name', 'CLEANWWA'),
        og('og:title', metadata.title), og('og:description', metadata.description), og('og:url', url),
        og('og:image', image), og('og:image:alt', `CLEANWWA – ${pageLabels[canonicalPath]}`),
        twitter('twitter:card', 'summary_large_image'), twitter('twitter:title', metadata.title),
        twitter('twitter:description', metadata.description), twitter('twitter:image', image),
        twitter('twitter:image:alt', `CLEANWWA – ${pageLabels[canonicalPath]}`),
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: url }],
      ...structuredData('site-schema', siteSchema(canonicalPath, metadata, image)),
    };
  },
};
