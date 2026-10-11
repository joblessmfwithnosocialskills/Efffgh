# YEAGER HUB

A responsive, black-and-red gaming resources landing page inspired by the supplied mobile screenshots. Built with plain HTML, CSS, and JavaScript; no build step required.

## Files
- `index.html` — page content
- `style.css` — responsive layout and visual theme
- `script.js` — mobile menu and link configuration

## Preview locally
Open `index.html` in a browser. For local development, you can also use VS Code Live Server.

## Publish with GitHub + Vercel (Android-friendly)
1. Extract this ZIP.
2. Sign in to GitHub and create a **public** repository named `yeager-hub`.
3. In the repository, tap **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` (upload the files, not the containing folder).
5. Tap **Commit changes**.
6. Sign in to Vercel with GitHub and choose **Add New → Project**.
7. Import `yeager-hub`.
8. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (or leave the default if Vercel detects static files).
9. Tap **Deploy**. Vercel will provide a public URL.

## Customize
Open `script.js` and replace the example `discord`, `github`, and `email` values in `SITE_CONFIG`. The Private and Terms links currently show a message because no login/backend or legal text has been configured.

## Notes
- This is a front-end static website. It does not contain an authentication system, server, or actual script-download catalog yet.
- The Google Font is loaded online; the site uses system fonts if it cannot load.
- Use only resources you have permission to publish and ensure any scripts you share comply with the relevant game's rules and terms.
