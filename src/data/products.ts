import type { CatalogSection } from './site';

// One entry per Etsy listing you want on the site.
// To add a product: copy one block, change every field, save.
//
// etsyUrl: the Share & Save link for that listing (Etsy Seller App → listing → Share).
//   Leave '' until you have it; the button falls back to your shop home page.
// image: put the 2000×2000 mockup in public/images/products/ and use its path here.
// price: as shown on Etsy, e.g. '$14.99'. Leave '' to hide the price.
// previews (optional): 1–4 sample pages for the "Peek inside" slideshow, in
//   public/images/previews/<slug>/. Keep them web-size and watermarked so they can't be printed.

export type Product = {
  slug: string;
  name: string;
  section: CatalogSection;
  blurb: string;
  price: string;
  image: string;
  etsyUrl: string;
  featured?: boolean;
  previews?: string[];
};

const previews = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/previews/${slug}/${i + 1}.webp`);

export const PRODUCTS: Product[] = [
  {
    slug: 'gratitude-journal',
    name: 'Scripture-Centered November Gratitude Journal',
    section: 'Come Follow Me',
    blurb: 'Daily scripture and gratitude prompts for the weeks leading up to Thanksgiving.',
    price: '$8.00',
    image: '/images/products/gratitude-journal.webp',
    etsyUrl: 'https://covenantliving.etsy.com/listing/4587275802',
    featured: true,
  },
  {
    slug: 'luke-2-advent-cards',
    name: 'Luke 2 Advent Scripture Cards',
    section: 'Scripture Wall Art',
    blurb: 'A 24-day Christ-centered countdown to Christmas through Luke 2.',
    price: '$5.00',
    image: '/images/products/luke-2-advent-cards.webp',
    etsyUrl: 'https://covenantliving.etsy.com/listing/4609252707',
    featured: true,
  },
  {
    slug: 'missionary-christmas-package',
    name: 'Countdown to Christmas Missionary Package Guide',
    section: 'Missionary Printables',
    blurb: 'Plan and pack a Christmas countdown box for your missionary.',
    price: '$7.00',
    image: '/images/products/missionary-christmas-package.webp',
    etsyUrl: 'https://covenantliving.etsy.com/listing/4601807691',
    featured: true,
    previews: previews('missionary-christmas-package', 4),
  },
  {
    slug: 'missionary-mom-journal',
    name: 'Missionary Mom Journal',
    section: 'Missionary Printables',
    blurb: 'A place to record letters, milestones, and feelings while your missionary serves.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'missionary-countdown',
    name: 'Missionary Countdown Printables (Elder & Sister)',
    section: 'Missionary Printables',
    blurb: 'Count down to the farewell or the homecoming, in elder and sister versions.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'spanish-pmg-flip-books',
    name: 'Preach My Gospel Flip Books in Spanish',
    section: 'Missionary Printables',
    blurb: 'Lessons 1–3 study flip books for Spanish-speaking missionaries.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'family-nt-journal-2027',
    name: 'Family New Testament Study Journal 2027',
    section: 'Come Follow Me',
    blurb: 'One page per week, dated to the 2027 Come Follow Me schedule.',
    price: '',
    image: '',
    etsyUrl: '',
    featured: true,
  },
  {
    slug: 'nt-reading-chart-2027',
    name: '2027 New Testament Reading Chart Bundle',
    section: 'Come Follow Me',
    blurb: 'Track your family’s 2027 Come Follow Me reading week by week.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'daily-scripture-cards-2027',
    name: '2027 Daily Scripture Cards',
    section: 'Come Follow Me',
    blurb: 'Daily New Testament scripture cards, in Cottage and Bold styles.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'primary-lesson-plans',
    name: '2027 Come Follow Me Primary Teaching Guide',
    section: 'Primary Resources',
    blurb: '52 weekly New Testament lessons plus 12 new fast-Sunday lessons, ready to teach.',
    price: '',
    image: '/images/products/primary-lesson-plans.webp',
    etsyUrl: '',
    previews: previews('primary-lesson-plans', 4),
  },
  {
    slug: 'articles-of-faith-cards',
    name: 'Articles of Faith Picture Cards (4×6)',
    section: 'Primary Resources',
    blurb: 'All 13 Articles of Faith on illustrated cards for memorizing at home or in Primary.',
    price: '',
    image: '/images/products/articles-of-faith-cards.webp',
    etsyUrl: '',
    previews: previews('articles-of-faith-cards', 4),
  },
  {
    slug: 'twelve-days-christmas-chart',
    name: '12 Days of Christmas Scripture Reading Chart',
    section: 'Come Follow Me',
    blurb: 'Twelve days of prophecy and nativity readings, December 13 to Christmas Eve.',
    price: '',
    image: '/images/products/twelve-days-christmas-chart.webp',
    etsyUrl: '',
    previews: previews('twelve-days-christmas-chart', 1),
  },
  {
    slug: 'november-primary-coloring',
    name: 'November Come Follow Me Coloring Pages',
    section: 'Primary Resources',
    blurb: 'Old Testament coloring pages for each November lesson.',
    price: '',
    image: '',
    etsyUrl: '',
  },
  {
    slug: 'temple-tracker',
    name: '52-Week Temple Attendance Tracker',
    section: 'Scripture Wall Art',
    blurb: 'A year-long temple goal chart to color in week by week.',
    price: '',
    image: '',
    etsyUrl: '',
  },
];

export const getProduct = (slug?: string) => PRODUCTS.find((p) => p.slug === slug);
