import { getCollection } from 'astro:content';

// Drafts show while you preview locally (npm run dev) and are hidden on the live site.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
