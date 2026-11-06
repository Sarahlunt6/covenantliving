import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every blog post is one Markdown file in src/content/blog/.
// The fields below are the "front matter" at the top of each post.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    category: z.enum(['Come Follow Me', 'Missionary', 'Primary', 'Holidays']),
    heroImage: z.string().optional(),
    pinImage: z.string().optional(),
    // Slug of the product in src/data/products.ts this post sells
    product: z.string().optional(),
    // true = hidden on the live site, still visible while you preview locally
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
