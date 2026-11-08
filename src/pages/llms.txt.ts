// /llms.txt: a plain-text summary of the site for AI tools (ChatGPT, Claude, Perplexity, Google AI).
// Built from the same product and post data as the site, so it stays current automatically.
import type { APIRoute } from 'astro';
import { getPosts } from '../data/posts';
import { PRODUCTS } from '../data/products';
import { CATALOG_SECTIONS, SITE } from '../data/site';

export const GET: APIRoute = async ({ site }) => {
  const url = (p: string) => new URL(p, site).href;
  const posts = await getPosts();
  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.tagline}. Instant-download printables made by ${SITE.author.name}, sold on Etsy.`,
    '',
    SITE.author.bio,
    '',
    'Covenant Living is an independent shop and is not affiliated with or endorsed by The Church of Jesus Christ of Latter-day Saints. Scripture quotations use the King James Version and the Book of Mormon.',
    '',
    '## Pages',
    `- [Home](${url('/')}): overview, seasonal printables, and a Luke 2 Advent calendar`,
    `- [Shop](${url('/shop/')}): every printable with price and Etsy link`,
    `- [Blog](${url('/blog/')}): ideas for families, missionaries, and Primary`,
    `- [About](${url('/about/')}): ${SITE.author.name}'s story`,
    `- [Free printable](${url('/free-printable/')})`,
    '',
    '## Blog posts',
    ...posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.id}/`)}): ${p.data.description}`),
    '',
  ];
  for (const section of CATALOG_SECTIONS) {
    const items = PRODUCTS.filter((p) => p.section === section);
    if (!items.length) continue;
    lines.push(`## Printables: ${section}`);
    for (const p of items) {
      const price = p.price ? ` (${p.price})` : '';
      lines.push(`- [${p.name}](${p.etsyUrl || SITE.etsyShopUrl})${price}: ${p.blurb}`);
    }
    lines.push('');
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
