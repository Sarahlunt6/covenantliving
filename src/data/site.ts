// One place for site-wide settings. Edit these, not the page files.
export const SITE = {
  name: 'Covenant Living',
  tagline: 'Gospel-centered printables for families, missionaries, and Primary',
  url: 'https://covenantlivingco.com',
  // Your Share & Save shop link (Shop Manager → Marketing → Share & Save).
  // Must be the yourshopname.etsy.com format so Etsy credits the sale.
  etsyShopUrl: 'https://CovenantLiving.etsy.com',
  pinterestUrl: '', // add once the Pinterest business account is set up
  // Paste the form "action" URL from Kit or MailerLite here.
  // Leave empty and the signup box shows a "coming soon" note instead of a form.
  emailFormAction: '',
  // Home page hero backdrops: they slowly cross-fade and zoom. Put photos in public/images/hero/.
  // Wide photos (at least 1600px across) work best. One to three images.
  heroImages: ['/images/hero/hero-thankful.webp', '/images/hero/hero-advent.webp', '/images/hero/hero-missionary.webp'],
  // Products fanned across the right side of the hero (slugs from products.ts, need an image).
  heroProducts: ['gratitude-journal', 'luke-2-advent-cards', 'missionary-christmas-package'],
  // Interactive Luke 2 Advent calendar on the home page. Set to false after Christmas.
  showAdvent: true,
  aiDisclosure:
    'Some illustrations on this site were created with the help of AI tools and finished by hand.',
};

export const CATALOG_SECTIONS = [
  'Missionary Printables',
  'Come Follow Me',
  'Invitations & Canva Templates',
  'Scripture Wall Art',
  'Baptism Prep',
  'Primary Resources',
] as const;

export type CatalogSection = (typeof CATALOG_SECTIONS)[number];
