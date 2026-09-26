# Optimum French — website

Static bilingual (EN/FR) site, rebuilt from the old Wix site. Plain HTML/CSS/JS, no build step.

```
index.html          Home (services, programs, about, contact form)
training.html       TCF / TEF Canada preparation
about.html          History, virtual center, teaching staff
government.html     Federal public service training
assets/css/style.css
assets/js/i18n.js   ALL text, English + French — edit wording here
assets/js/main.js   Header/footer, language switch, menu, contact form
assets/img/         Optimized images
_wix-originals/     Full-size originals downloaded from Wix (not published)
```

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Contact form

1. Create a free account at https://formspree.io and add a form that sends to `info@optimumfrench.com`.
2. Copy the form ID (the part after `/f/`) into `FORMSPREE_ID` at the top of `assets/js/main.js`.

Until then, the form opens the visitor's email app with the message pre-filled.

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `optimum-french`) and push this folder to it.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. The site goes live at `https://<username>.github.io/optimum-french/`.

## Custom domain (Tierranet)

1. On GitHub: **Settings → Pages → Custom domain**, enter e.g. `www.optimumfrench.com` and save.
   This creates a `CNAME` file in the repo.
2. In the Tierranet DNS manager, add:

   | Type  | Host | Value                   |
   |-------|------|-------------------------|
   | A     | @    | 185.199.108.153         |
   | A     | @    | 185.199.109.153         |
   | A     | @    | 185.199.110.153         |
   | A     | @    | 185.199.111.153         |
   | CNAME | www  | `<username>.github.io.` |

   Remove any old A/CNAME records that pointed to Wix.
3. Wait for DNS to propagate (minutes to a few hours), then tick **Enforce HTTPS** in GitHub Pages settings.

## Images to consider replacing

Some photos came from Wix's built-in media library, which is licensed only for use on Wix.
Swap these for your own photos or free ones from Unsplash / Pexels (same file name = no code change):

- `adult-class.jpg`, `kids-tutoring.jpg`, `reading.jpg`: Wix stock
- `texture-ice.jpg`, `texture-sand.jpg`: probably Wix free media

`parliament.jpg`, `corporate.jpg`, `fleur-de-lis.png`, `maple-pattern.png` were uploaded to the site directly.
`canada-flag.jpg` is from Unsplash (free to use).
