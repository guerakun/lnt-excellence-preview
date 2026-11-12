# LNT Excellence

React/Vite source for the LNT Excellence one-page website. Production is hosted on Netlify at https://lntexcellence.com/. This repository also includes a separate GitHub Pages build for team review.

## Build

Use Node 22.13+ and run `npm ci` followed by `npm run check`.

| Target | Command | Output | Contact form |
| --- | --- | --- | --- |
| Netlify production | `npm run build` | `dist/` | Submits through Netlify Forms as `lnt-inquiry`. |
| GitHub Pages preview | `npm run build:pages` | `docs/` | Opens an email draft; the visitor sends it from their email app. |

For a manual Netlify update, upload the contents of `dist/` to the existing site. Keep form detection enabled and check delivery to the business inbox after deployment. Notification delivery is configured in Netlify.

For GitHub Pages, commit `docs/` with the source. The preview uses relative asset paths and requests that search engines not index it. Anyone with the preview URL can still view it.

See `plans.md` and `progress.md` for the project history.
