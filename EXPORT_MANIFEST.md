# Export Manifest

## Local core assets

The package includes the following local files under `public/assets/`:

| Asset group | Files |
|---|---|
| Brand | `images/logo.svg` |
| Doctor and treatment images | `images/dr-zoltan-rusznak.webp`, `images/single-implant.webp`, `images/dental-crowns.jpg`, `images/wisdom-tooth.jpg`, `images/general-care.jpg` |
| Implant comparison | `images/implant-before.jpg`, `images/implant-after.jpg` |
| Practice media | `images/clinic-fallback.jpg`, `video/practice-tour.mp4` |
| Typography | `fonts/DM-Sans-Regular.ttf`, `fonts/DM-Sans-Bold.ttf`, `fonts/Tiempos-Headline-Semibold.woff2` |

## Deliberate external connections

| Connection | Reason | Configuration |
|---|---|---|
| WhatConverts loader | Dynamic-number insertion and lead tracking | `PUBLIC_WHATCONVERTS_ACCOUNT` |
| Google Analytics | GA4 measurement | `PUBLIC_GA4_MEASUREMENT_ID` |
| Mailgun API | Appointment confirmation and internal report delivery | Server-only `MAILGUN_*` values |

No external font, image, icon, or UI-library CDN is required by the rendered site.
