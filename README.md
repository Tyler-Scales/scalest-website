# Scale Street Website

Source for [scalestreet.com](https://scalestreet.com), the marketing site for Scale Street, an AI enablement partner for healthcare organizations offering strategy, training and implementation.

## Highlights

- **Static-first.** Built with Astro, so every page ships as plain HTML for fast loads and full crawlability, with no client-side framework.
- **Content separated from layout.** Page copy lives in `content/pages/*.json`, separate from the Astro templates, so wording can change without touching markup.
- **SEO basics built in.** An auto-generated sitemap, a robots policy, 301 redirects for retired URLs and security headers through `public/_headers`.
- **Continuous deployment.** Netlify builds and deploys on every push to `main`.

## Structure

```
content/pages/    # JSON content for each page (home, strategy, training, implementation, …)
src/layouts/      # Shared BaseLayout: navigation, footer, meta tags
src/pages/        # One .astro file per route
public/           # Static assets, headers, robots.txt
netlify.toml      # Build settings and redirects
```

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

**Stack:** Astro 5 · @astrojs/sitemap · Netlify
