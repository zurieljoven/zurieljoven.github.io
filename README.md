# zurieljoven.com — patent-style portfolio (Jekyll)

A minimal, modern, patent-style portfolio. You write content in Markdown,
push to GitHub, and GitHub Pages builds and hosts the site automatically.

---

## See it without installing anything

Open **`preview.html`** in a browser. It's a static render of the home,
projects-index, and project-detail templates using the real stylesheet —
exactly what the built site looks like.

---

## How the content is organized

| You want to change…            | Edit this |
|--------------------------------|-----------|
| Name, email, nav, hero text, metadata strip, social links | `_data/site.yml` |
| Colors & typography (one place) | `:root` tokens at the top of `assets/css/style.css` |
| A project (add / edit / remove) | a `.md` file in `_projects/` |
| Research / Publications / Honors / CV pages | `research.html`, `publications.html`, `honors.html`, `cv.html` |
| Site name / URL / build options | `_config.yml` |

### Adding a project

Create a new file in `_projects/`, e.g. `06-my-project.md`:

```markdown
---
title: My Project
ref: "06"            # controls ordering (sorted by ref) and "no. 06"
year: 2026
period: "2026 —"
category: research   # research | course | miscellaneous
status: active       # active -> red dot/label; anything else -> "done"
status_label: active research
lab: yun lab · mgh
role: lead
tools: optics, python
summary: one-line description shown in lists
figures:
  - { src: "/img/fig1.jpg", caption: "fig. 1 — setup", labels: "1 part · 2 part" }
  - { src: "", placeholder: "[ figure ]", caption: "fig. 2 — result" }
thumb: "/img/myproject.jpg"   # shown on home + projects index (optional)
---

Each top-level paragraph is automatically numbered [0001], [0002]…

## Contributions

1. First contribution.
2. Second contribution.
```

That's it — the home grid, projects index, detail page, and prev/next links
all update automatically.

### Adding images

Drop files in an `img/` folder at the repo root and reference them as
`/img/filename.jpg` in front matter (`thumb`, `figures[].src`, or the hero
`figure.image` in `_data/site.yml`). Leave a path blank to keep the
striped placeholder.

---

## Publish on GitHub Pages

1. Create a repo named **`<your-username>.github.io`** (for a root-level site)
   or any repo name (then set `baseurl: "/<repo>"` in `_config.yml`).
2. Put **the contents of this `site/` folder at the repo root** and push.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait ~1 minute. Your site is live at `https://<your-username>.github.io`.

To use your custom domain (zurieljoven.com), add it under Settings → Pages →
Custom domain, and create a `CNAME` file (GitHub does this for you).

---

## Optional: preview locally before pushing

Requires Ruby. Then:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. If you set a `baseurl`, use
`bundle exec jekyll serve` and visit `http://localhost:4000/<baseurl>/`.

If you'd rather not install Ruby: just edit Markdown, push, and let GitHub
build it — `preview.html` shows you the look in the meantime.
