# Zhenjie Jin — academic website

This Jekyll site presents research and publications for PhD application readers. The CV is submitted separately with applications.

## Preview locally

Start Docker Desktop, then run from this repository:

```bash
docker compose up --build
```

Open [http://localhost:4000](http://localhost:4000). Jekyll rebuilds pages as you edit them; refresh the browser to see changes. The first start may take a minute while Ruby dependencies are installed. If you edit `_config.yml`, restart the server because Jekyll does not reload that file automatically.

Stop the server with `Ctrl+C`. If you started it in the background, use `docker compose down`.

## Main content

- `_pages/about.md` — single-page homepage with background, research, publications, and posters
- `_pages/research.md`, `_pages/publications.html` — redirects from old page URLs to the matching homepage sections
- `_pages/cv.md` — redirects the old CV URL to the homepage
- `_publications/` — one Markdown file per publication
- `_data/navigation.yml` — top navigation
- `_config.yml` — site title, profile links, and metadata

The profile photo is in `images/zhenjie-jin.jpg`. The full CV PDF is intentionally not hosted because it includes private contact details.
