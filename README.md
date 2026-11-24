# MD.SUMON Portfolio

A responsive Next.js portfolio for engineering, web development, and creative technology.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before deployment

- Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin, for example `https://your-domain.com`. This is used for metadata and the sitemap. Vercel's `VERCEL_URL` is used as a fallback when the variable is not set.
- Replace the example social profile destinations in `src/app/page.tsx` with your own profile URLs where needed.
- The contact form opens an email draft addressed to `sumon.tuhin00@gmail.com`; visitors must send that draft themselves. It does not submit to a backend.
- Replace project placeholder details and add verified demo/source links before presenting those projects as completed work.
- The About photo is `public/images/sumon.jpeg`.

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Push this project to GitHub and connect the repository to a Next.js host such as Vercel. GitHub stores the source code; GitHub Pages does not run a standard Next.js server deployment.
