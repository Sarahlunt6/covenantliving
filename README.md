# Covenant Living site

Blog-first site for the Covenant Living Etsy shop. Built with Astro, hosted free on Cloudflare Pages, domain covenantlivingco.com.

## Where things live

| To change… | Edit this file |
| --- | --- |
| Site name, Etsy shop link, email form, Pinterest link | `src/data/site.ts` |
| Products on the Shop page | `src/data/products.ts` |
| Blog posts | `src/content/blog/*.md` (one file per post) |
| Colors and fonts | `src/styles/global.css` |
| About page | `src/pages/about.astro` |
| Images | `public/images/` |

## Add a blog post

1. Copy an existing file in `src/content/blog/` and rename it (the file name becomes the URL: `my-post.md` → `/blog/my-post/`).
2. Update the front matter at the top:
   - `title`: include the main search phrase
   - `description`: one sentence, under 160 characters
   - `pubDate`: `2026-11-11` format
   - `category`: `Come Follow Me`, `Missionary`, `Primary`, `Holidays`, or `Gospel Living`
   - `product`: the `slug` of the matching product in `src/data/products.ts`
   - `heroImage` / `pinImage` (optional): paths like `/images/my-post/pin.jpg` (pin image 1000×1500)
   - `draft`: `true` hides it from the live site; set to `false` to publish
3. Write the post in Markdown below the front matter.
4. Commit and push. Cloudflare publishes in about a minute.

The page automatically adds the product card, the email signup, and related posts at the bottom.

## Add a product

Copy one block in `src/data/products.ts` and change every field. Use the Share & Save link for `etsyUrl` (yourshopname.etsy.com format) so Etsy credits the sale.

## Preview on your computer

```bash
npm install
npm run dev
```

Open http://localhost:4321. Drafts show here but not on the live site.

## Deploy on Cloudflare Pages (one-time)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this GitHub repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Save and deploy.
5. **Custom domains** → add `covenantlivingco.com` (and `www`).

Every push to `main` deploys automatically after that.
