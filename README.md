# Zhengxu Jiang — Personal Website

Bilingual academic homepage for Zhengxu Jiang (姜政旭), built with Astro and deployed to GitHub Pages.

## Local development

```powershell
pnpm install
pnpm dev
```

Quality checks:

```powershell
pnpm check
pnpm build
```

## Content

- Chinese homepage: `/`
- English homepage: `/en/`
- Project data: `src/content/projects/`
- Biography, education, publications, awards, and news: `src/data/site.ts`
- Design tokens and global styles: `src/styles/global.css`

The public site intentionally excludes phone numbers and downloadable CV files.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which checks, builds, and deploys the static site to `https://zysishuiyears.github.io/`.
