# Yorokobi Studio — Official Site (喜悦)

The institutional website for **Yorokobi Studio (喜悦)**, an independent visual novel
studio. *Joy earned through overcoming hardship.*

This is a fully **static** site — plain HTML, CSS, and vanilla JavaScript with local
assets. There is **no database, backend, build step, or CMS**. It is designed to be
published directly to **GitHub Pages**.

---

## What this site is

A small, honest home for the studio while it is still in its **foundation stage**. The
studio has **no published works yet** and no catalog. There is currently a single
**early narrative concept** for its first long-term visual novel. The site covers:

- studio identity and philosophy;
- the concept for the first long-term visual novel;
- a development roadmap;
- a mini press kit;
- future support channels;
- contact information.

Development notes (the studio blog) are published separately at
**<https://adriansantos.blog>**. The first concept note lives at
<https://adriansantos.blog/posts/building-yorokobi-studio-the-beginning-of-a-long-visual-novel-journey>.

---

## Project structure

```txt
/
  index.html          Home
  works.html          First visual novel concept (no published works yet)
  studio.html         About / philosophy
  roadmap.html        Development roadmap (timeline)
  support.html        Future support channels
  press.html          Mini press kit + quick facts
  contact.html        Contact + visual form placeholder
  CNAME               Custom domain for GitHub Pages
  robots.txt          SEO
  sitemap.xml         SEO
  .nojekyll           Tells GitHub Pages to skip Jekyll processing
  README.md
  assets/
    css/style.css     Design system (colors, type, components)
    js/main.js        Mobile menu, active link, reveal, back-to-top
    img/
      logo.svg              Full logo lockup (emblem + wordmark)
      logo-mark.svg         Crane emblem (used in the header)
      og-image.png          Social share image (1200×630)
      placeholder-hero.svg     Home hero illustration
      placeholder-concept.svg  Artwork for the first concept card
    favicon/
      favicon.ico
      favicon.svg
      favicon-16x16.png
      favicon-32x32.png
      apple-touch-icon.png
      android-chrome-192x192.png
      android-chrome-512x512.png
```

---

## Open it locally

Just open `index.html` in any browser — no build, no server required.

If you prefer a local server (recommended so relative paths behave exactly like in
production):

```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

---

## Publish on GitHub Pages

This project is built for the **Yorokobi Studio** GitHub organization.

1. Create a repository in the organization and push these files to it.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**.
4. Choose your branch (e.g. `main`) and the **`/ (root)`** folder. Save.
5. Wait for the deployment to finish.

**Custom domain:** the `CNAME` file already contains `yorokobistudio.com`. If the domain
is configured in GitHub Pages, leave this file as-is. **Do not overwrite `CNAME`** with a
different value unless you are intentionally changing the domain.

All asset paths are **relative** (`assets/...`), so the site works whether it is served
from a domain root or a project subpath.

> Cloudflare Pages is *not* the intended host for this project, so no Cloudflare-specific
> configuration is included.

---

## Editing guide

### Text content
Edit the `.html` files directly — each page is self-contained:

- `index.html` — hero, studio notes, first-concept card, philosophy, current development;
- `works.html` — institutional intro + the single first-concept card (`.concept-card`);
- `studio.html` — philosophy and "how we build";
- `roadmap.html` — the four development phases;
- `support.html` — support copy and future channels;
- `press.html` — descriptions, tagline, and the **Quick Facts** list;
- `contact.html` — email, interest tags, and the placeholder form.

### Colors
All colors live as CSS variables at the top of `assets/css/style.css`:

```css
--color-bg: #F8F5EF;     /* off-white background */
--color-primary / red    /* carmine #DC143C */
--color-gold: #C6A43F;   /* soft gold */
--color-text: #2B2523;
--color-muted: #8A817C;
```

### Images
Replace the SVG/PNG files in `assets/img/`. Keep the same filenames to avoid touching the
HTML. All `<img>` elements include descriptive `alt` text — update it if you change an
image's meaning.

### Links
- The **Blog** link (header, footer, and CTAs) points to **<https://adriansantos.blog>**.
  Search the project for `adriansantos.blog` to find every reference.
- The official email is `contact@yorokobistudio.com`.

### Favicon
The favicons in `assets/favicon/` were generated from the studio's paper-crane mark.
To regenerate them after a logo change, recreate the PNG/ICO set from the source artwork
(any favicon generator works) and keep the existing filenames. `favicon.svg` is the
crisp vector version used by modern browsers; `favicon.ico` is the legacy fallback.

---

## Notes

- The contact form is a **visual placeholder only** — it does not submit anywhere. The
  page makes this explicit and directs visitors to email instead.
- The site uses no third-party JavaScript. Google Fonts (Shippori Mincho + Inter) are
  loaded for typography and degrade gracefully to system serif/sans-serif fonts offline.
- The official blog is **<https://adriansantos.blog>**. Any older blog address is no
  longer used — all blog links across the site point here.
