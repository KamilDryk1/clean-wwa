const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { parseDOM, DomUtils } = require('htmlparser2');

const dist = path.resolve(__dirname, '../dist');
const routes = ['/', '/cennik', '/galeria', '/uslugi', '/dla-firm', '/gdzie-dzialamy', '/pytania-klientow', '/kontakt', '/blog'];
const pages = new Map();
const text = node => DomUtils.getText(node).replace(/\s+/g, ' ').trim();
const select = (nodes, name, predicate = () => true) => nodes.filter(node => node.name === name && predicate(node.attribs || {}));

for (const route of routes) {
  const file = path.join(dist, route, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  const dom = parseDOM(html, { decodeEntities: true });
  const nodes = DomUtils.findAll(node => Boolean(node.name), dom);
  pages.set(route, { html, nodes });
  assert.equal(select(nodes, 'title').filter(node => node.parent.name === 'head').length, 1, `${route}: one document title`);
  assert.equal(select(nodes, 'meta', attrs => attrs.name === 'description').length, 1, `${route}: one description`);
  assert.equal(select(nodes, 'link', attrs => attrs.rel === 'canonical').length, 1, `${route}: one canonical`);
  const canonical = select(nodes, 'link', attrs => attrs.rel === 'canonical')[0].attribs.href;
  assert.equal(canonical, `https://cleanwwa.pl${route === '/' ? '/' : (route === '/blog' ? '/pytania-klientow' : route) + '/'}`);
  assert.ok(html.indexOf('charset="utf-8"') < 1024, `${route}: early charset`);
  assert.equal(select(nodes, 'h1').length, 1, `${route}: one main heading`);
  if (route !== '/blog') assert.equal(select(nodes, 'header', attrs => attrs.class === 'page-intro').length, 1, `${route}: shared page header`);
  assert.ok(!html.includes('+48 000 000 000'), `${route}: no placeholder phone`);

  const scripts = select(nodes, 'script');
  const cookieyes = scripts.filter(node => node.attribs.id === 'cookieyes');
  assert.equal(cookieyes.length, 1, `${route}: one CookieYes loader`);
  assert.equal(cookieyes[0].attribs.src, 'https://cdn-cookieyes.com/client_data/b82f63af74b22b08ba61f4cd/script.js');
  assert.equal(scripts.filter(node => node.attribs.src === 'https://www.googletagmanager.com/gtag/js?id=G-RZXEW35YZW').length, 1);
  const gtm = scripts.filter(node => text(node).includes('GTM-M98BZDK') && text(node).includes('gtm.start'));
  const pixel = scripts.filter(node => /fbq\(['"]init/.test(text(node)));
  assert.equal(gtm.length, 1, `${route}: one GTM initialization`);
  assert.equal(pixel.length, 1, `${route}: one Pixel initialization`);
  assert.ok(text(pixel[0]).includes('545261208667560'));
  assert.ok(html.indexOf('id="cookieyes"') < html.indexOf('gtm.start'));
  assert.equal(select(nodes, 'iframe', attrs => attrs.src === 'https://www.googletagmanager.com/ns.html?id=GTM-M98BZDK').length, 1);
  assert.equal(select(nodes, 'img', attrs => (attrs.src || '').includes('tr?id=545261208667560&ev=PageView&noscript=1')).length, 1);
  assert.equal(select(nodes, 'div', attrs => attrs.id === 'fb-root').length, 1);
  assert.equal(select(nodes, 'div', attrs => attrs.id === 'fb-customer-chat').length, 1);
  assert.equal(scripts.filter(node => text(node).includes('xfbml.customerchat.js')).length, 1);

  for (const script of scripts) {
    if (script.attribs.type === 'application/ld+json') JSON.parse(text(script));
    else if (!script.attribs.src) new Function(DomUtils.getText(script)); // Parse, never execute tracking code.
  }
  for (const node of nodes) {
    const url = node.attribs.src || (node.name === 'link' ? node.attribs.href : null);
    if (url && url.startsWith('/') && !url.startsWith('//')) {
      assert.ok(fs.existsSync(path.join(dist, decodeURIComponent(url.split('?')[0]))), `${route}: missing asset ${url}`);
    }
    if (node.name === 'a' && (node.attribs.href || '').startsWith('/') && !node.attribs.href.startsWith('//')) {
      const target = decodeURIComponent(node.attribs.href.split(/[?#]/)[0]);
      assert.ok(fs.existsSync(path.join(dist, target)) || fs.existsSync(path.join(dist, target, 'index.html')), `${route}: broken link ${target}`);
    }
  }
}

const home = pages.get('/');
assert.equal(text(select(home.nodes, 'title')[0]), 'Pranie tapicerki i wykładzin Warszawa | CLEANWWA');
assert.equal(select(home.nodes, 'meta', attrs => attrs.name === 'description')[0].attribs.content, 'Kompleksowe pranie tapicerki meblowej i samochodowej oraz wykładzin biurowych na terenie Warszawy i okolic. Wynajem profesjonalnego sprzętu piorącego. Sprawdź cennik!');

const faq = pages.get('/pytania-klientow');
const schema = JSON.parse(text(select(faq.nodes, 'script', attrs => attrs['data-hid'] === 'faq-schema')[0]));
assert.equal(schema['@type'], 'FAQPage');
assert.equal(schema.mainEntity.length, 37);
const details = select(faq.nodes, 'details');
assert.equal(details.length, 37);
schema.mainEntity.forEach((item, index) => assert.ok(text(details[index]).includes(item.acceptedAnswer.text.replace(/\s+/g, ' ')), `FAQ answer ${index + 1} matches structured data`));

const area = pages.get('/gdzie-dzialamy');
assert.equal(select(area.nodes, 'details').length, 31);
assert.equal(new Set(select(area.nodes, 'details').map(node => node.attribs.id)).size, 31);
const areaSchema = JSON.parse(text(select(area.nodes, 'script', attrs => attrs['data-hid'] === 'site-schema')[0]))['@graph'].find(item => item['@type'] === 'LocalBusiness');
assert.equal(areaSchema.areaServed.length, 31);
assert.ok(!area.html.includes('/dzielnice/'), 'No links to unimplemented district pages');

const services = select(pages.get('/uslugi').nodes, 'h2', attrs => attrs.class === 'services__content-title').map(text);
assert.equal(services[2], 'Pranie materacy');
assert.equal(services[3], 'Pranie tapicerki samochodowej');
const companies = pages.get('/dla-firm');
assert.equal(select(companies.nodes, 'table').length, 2);
assert.equal(select(companies.nodes, 'tbody').reduce((sum, node) => sum + DomUtils.findAll(child => child.name === 'tr', node.children).length, 0), 14);
const pricing = pages.get('/cennik');
assert.equal(select(pricing.nodes, 'table').length, 8);
assert.equal(select(pricing.nodes, 'tbody').reduce((sum, node) => sum + DomUtils.findAll(child => child.name === 'tr', node.children).length, 0), 39);

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const route of routes.filter(route => route !== '/blog')) assert.ok(sitemap.includes(`https://cleanwwa.pl${route}`), `Sitemap includes ${route}`);
assert.ok(!sitemap.includes('https://cleanwwa.pl/blog'));
assert.ok(!sitemap.includes('/index.html'));
assert.equal(fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8').trim(), 'User-agent: *\nAllow: /\nSitemap: https://cleanwwa.pl/sitemap.xml');
const blog = pages.get('/blog');
assert.equal(select(blog.nodes, 'meta', attrs => attrs.name === 'robots')[0].attribs.content, 'noindex, follow');
assert.equal(select(blog.nodes, 'meta', attrs => attrs['http-equiv'] === 'refresh')[0].attribs.content, '0;url=/pytania-klientow/');
assert.ok(fs.existsSync(path.join(dist, '404.html')));
console.log('PASS: 9 generated routes, metadata, integrations without duplicates, script syntax, local assets and links, 37 FAQs, 31 locations, services, pricing, sitemap and blog redirect.');

const titles = new Set();
const descriptions = new Set();
for (const [route, { nodes }] of pages) {
  if (route === '/blog') continue;
  const title = text(select(nodes, 'title')[0]);
  const description = select(nodes, 'meta', attrs => attrs.name === 'description')[0].attribs.content;
  assert.ok(!titles.has(title), `${route}: unique title`); titles.add(title);
  assert.ok(!descriptions.has(description), `${route}: unique description`); descriptions.add(description);
  assert.ok(select(nodes, 'html', attrs => attrs.lang === 'pl').length === 1);
  assert.ok(!select(nodes, 'meta', attrs => attrs.name === 'robots')[0].attribs.content.includes('noindex'));
  for (const property of ['og:type', 'og:locale', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt']) {
    assert.equal(select(nodes, 'meta', attrs => attrs.property === property).length, 1, `${route}: one ${property}`);
  }
  const canonical = select(nodes, 'link', attrs => attrs.rel === 'canonical')[0].attribs.href;
  assert.equal(select(nodes, 'meta', attrs => attrs.property === 'og:url')[0].attribs.content, canonical);
  assert.equal(select(nodes, 'meta', attrs => attrs.name === 'twitter:card')[0].attribs.content, 'summary_large_image');
  const graph = JSON.parse(text(select(nodes, 'script', attrs => attrs['data-hid'] === 'site-schema')[0]))['@graph'];
  const business = graph.filter(item => item['@type'] === 'LocalBusiness');
  assert.equal(business.length, 1); assert.equal(business[0]['@id'], 'https://cleanwwa.pl/#business');
  assert.equal(business[0].telephone, '+48733740112'); assert.equal(business[0].areaServed.length, 31);
  assert.ok(!business[0].aggregateRating, 'No self-serving review markup');
  assert.equal(graph.filter(item => item['@type'] === 'BreadcrumbList').length, route === '/' ? 0 : 1);
  assert.equal(select(nodes, 'nav', attrs => attrs['aria-label'] === 'Ścieżka nawigacji').length, route === '/' ? 0 : 1);
  const hero = select(nodes, 'img', attrs => (attrs.class || '').includes('page-intro__image'))[0];
  assert.equal(hero.attribs.loading, 'eager'); assert.equal(hero.attribs.fetchpriority, 'high');
  assert.ok(hero.attribs.srcset); assert.ok(select(nodes, 'link', attrs => attrs['data-hid'] === 'hero-preload').length === 1);
  for (const node of select(nodes, 'img')) {
    assert.ok(Object.hasOwn(node.attribs, 'alt'), `${route}: image alt`);
    assert.ok(Number(node.attribs.width) > 0 && Number(node.attribs.height) > 0, `${route}: image dimensions ${node.attribs.src}`);
    for (const variant of (node.attribs.srcset || '').split(',').filter(Boolean)) {
      const asset = variant.trim().split(' ')[0];
      assert.ok(fs.existsSync(path.join(dist, asset)), `${route}: responsive image ${asset}`);
    }
  }
}
assert.equal(select(home.nodes, 'div', attrs => (attrs.class || '').includes('content-carousel__track')).length, 2, 'Both carousels are rendered without JS');
assert.ok(home.html.includes('Polecam CLEAN WWA 100%'), 'Review content is prerendered');
const notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8');
const errorNodes = DomUtils.findAll(node => Boolean(node.name), parseDOM(notFound));
assert.equal(select(errorNodes, 'meta', attrs => attrs.name === 'robots')[0].attribs.content, 'noindex, follow');
assert.equal(select(errorNodes, 'link', attrs => attrs.rel === 'canonical').length, 0, '404 does not canonicalize to homepage');
assert.ok(notFound.includes('Nie znaleziono tej strony'), '404 is readable without JS');
assert.ok(!sitemap.includes('https://cleanwwa.pl/404'));
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(locs.length, 8); assert.ok(locs.every(url => url.endsWith('/')), 'Sitemap URLs match production redirects');
console.log('PASS: unique SEO metadata, social previews, consistent business graph, breadcrumbs, responsive images, SSR carousels, noindex 404 and canonical sitemap URLs.');

const fontPreloads = select(home.nodes, 'link', attrs => attrs.rel === 'preload' && attrs.as === 'font');
assert.equal(fontPreloads.length, 2, 'Preload only the two initially used font weights');
for (const font of fontPreloads) {
  assert.equal(font.attribs.type, 'font/woff2');
  assert.equal(font.attribs.crossorigin, 'anonymous');
  assert.ok(font.attribs.href.endsWith('.woff2'));
}
console.log('PASS: WOFF2 font preloads use existing assets and anonymous CORS.');
