# scalestreet.com

Plain static site on Netlify. There is no build step: Netlify publishes `public/` as is (see `netlify.toml`).

- `public/`: the website. Pages are flat HTML files (`about.html` serves at `/about`).
- `netlify.toml`: publish settings, redirects from old URLs, security and cache headers.

**Where edits happen:** this repo is the deploy target for the "Rebrand Initiative" project folder on Tyler's Mac, which holds the source of truth (shared CSS, header and footer partials, copy decks, fact audit, and QA tools). Edit there, run `node tools/sync.mjs` and the checks, then `tools/stage_repos.sh` to copy the result here on a branch. Small text fixes made directly in `public/*.html` are fine; copy them back to the project so the next sync doesn't overwrite them. Don't edit inside the `<!-- @meta -->`, `<!-- @header -->` or `<!-- @footer -->` blocks; the sync script owns them.

**Deploys:** open a pull request to get a Netlify deploy preview. Merging to `main` publishes to production.
