# LNT Excellence — team testing preview

Private source repository with a prebuilt static site in `docs/`. No live contact delivery is configured. Original Sites publication is unchanged.

## Enable temporary GitHub Pages
1. Confirm this account has a plan supporting Pages from private repositories (Pro/Team/Enterprise).
2. Repository Settings → Pages → Build and deployment → Deploy from a branch.
3. Choose `main` and `/docs`, then Save.
4. Use the URL GitHub reports, normally https://guerakun.github.io/lnt-excellence-preview/ . This expected URL is not a verified deployment.

Pages normally makes the rendered preview publicly accessible even though this repository is private. `noindex` discourages search indexing; it is not access control. Do not connect lntexcellence.com for this test.

## Build / update
Use Node 22.13+ (Node 22.12+ Vite minimum). Run `npm install`, `npm run check`, then `npm run build`. Commit source and generated `docs/` together. No Actions workflow is necessary; the committed build avoids workflow-token permissions. The site uses relative asset paths for the repository subpath.

## Contact configuration
`src/contact-config.ts` contains `contactEmail = ''`, the intentional placeholder. Empty means the form downloads a local draft and explicitly says nothing was sent. Use sample data for testing.

When a business inbox is confirmed, set that value and rebuild. The configured action opens a `mailto:` draft; the visitor must send it from their own email app. Automated delivery requires a separate form backend/provider, spam protection, and end-to-end receipt testing. Never put API keys in frontend code. No email address is inferred from personal accounts.

## Review and remaining launch steps
See `plans.md` and `progress.md`. This copy is for team feedback, not production launch. Confirm intended customer segments, proposed deliverables, and specialty labels with the founders before launch. No geographic coverage, client testimonials, or quantified business outcomes have been invented.
