# My Ashburn Dentist — Cloudflare Pages Export

This directory is a **separate Astro project** prepared for Cloudflare Pages. It does not replace or modify the current Manus-hosted site. The package contains local logo, practice video, treatment imagery, fallback imagery, and local font files. The UI has no external framework, icon library, or font CDN dependency.

## Included routes

| Route | Purpose |
|---|---|
| `/` | Dental implant landing page with silent practice video and before/after comparison |
| `/general` | General dentistry hub |
| `/general/dental-crowns` | Dental crowns treatment page |
| `/general/wisdom-tooth-extractions` | Wisdom tooth extraction treatment page |
| `/root-canal` | Root canal treatment page |
| `/patient-results` | Patient-results page |
| `/meet-your-dentist` | Dr. Zoltan Rusznak page |
| `/appointment-request` | `book-consultation` form with U.S. phone and email validation |
| `/disclaimer`, `/privacy-policy` | Legal pages |

## Local development

Use Node.js **18.17.1 or later**. This package was validated with Node 22.

```bash
pnpm install
cp .dev.vars.example .dev.vars
pnpm dev
pnpm check
pnpm build
```

The production build command is:

```bash
npm run build
```

The build output directory is `dist/`.

## Cloudflare Pages via GitHub

1. Create a new GitHub repository and commit the contents of this directory as the repository root.
2. In Cloudflare Dashboard, select **Workers & Pages → Create → Pages → Connect to Git** and choose the repository.
3. Set the production build command to `npm run build` and the build output directory to `dist`.
4. Use the repository root (`./`) as the root directory and select a Node.js version of 18.17.1 or later.
5. Add the production environment variables below in **Settings → Environment variables**. Do not commit `.dev.vars` or any production API key.
6. Deploy the project. After a successful preview deployment, add the intended custom domain in **Custom domains** and complete the DNS verification steps shown by Cloudflare.

> The current Manus-hosted site remains live during this process. Keep it as the production fallback until the Cloudflare preview, tracking, and form-delivery tests are accepted.

## Environment variables

| Variable | Required | Purpose |
|---|---:|---|
| `PUBLIC_GA4_MEASUREMENT_ID` | Yes | GA4 measurement ID. Defaulted to `G-G02B9W4PGM` in source for continuity. |
| `PUBLIC_WHATCONVERTS_ACCOUNT` | Yes | WhatConverts account loader ID. Defaulted to `129138` in source for continuity. |
| `MAILGUN_API_KEY` | Yes for form delivery | Mailgun API key used only by the server-side appointment endpoint. |
| `MAILGUN_DOMAIN` | Yes for form delivery | Mailgun sending domain, normally `100marketers.com`. |
| `MAILGUN_FROM` | Yes for form delivery | Sender identity, for example `My Ashburn Dentist <noreply@100marketers.com>`. |
| `REPORTING_EMAIL` | Yes for form delivery | Internal recipient, normally `reporting_ashburn-va-dentist@100marketers.com`. |

The appointment endpoint is `/api/appointment-request`. It validates Name, U.S. Phone, and Email; accepts Procedure, Message, and A2P consent; sends the patient confirmation to the submitted email; and sends the internal report to `REPORTING_EMAIL`.

## Tracking configuration

GA4 and the WhatConverts bootstrap/loader are included in the shared `BaseLayout.astro`, which wraps every page. Their loader IDs are configurable by environment variables. The package intentionally retains these external scripts because they provide the requested analytics and call-tracking integrations; core site assets, styles, icons, and fonts are local.

The number-swapping helper keeps new client-rendered phone actions—such as the post-submission confirmation—aligned with the active WhatConverts number. Before production cutover, add the Cloudflare Pages domain to the relevant WhatConverts tracking number configuration and verify a swap in a real browser session.

## Validation completed

The exported package has passed both:

```bash
pnpm check
pnpm build
```

The package includes a Cloudflare adapter in `astro.config.mjs`, `wrangler.toml`, server-side form delivery route, local assets under `public/assets/`, local `@font-face` declarations, Schema.org dentist JSON-LD, Open Graph metadata, `robots.txt`, and `sitemap.xml`.

## Deployment considerations

Cloudflare Pages supports the Astro server bundle and API route included here. The only runtime dependency is the Mailgun API call from the appointment endpoint. Ensure the Mailgun sender domain is authorized before sending live requests.

Because this is an external-hosting export, it does not receive Manus-managed secrets, OAuth, database, or storage helpers. Those values and operational controls must be configured in Cloudflare. Manus hosting remains available with custom-domain support if you prefer to retain the current managed deployment.
