# Aeri Learning confirmation page

The confirmation page and its page-specific assets are kept together in this `thanks/` folder. They remain separate from the landing page's shared `css/style.css` and `js/script.js` files.

## Files in this folder

```text
thanks/
├── index.html       # Confirmation content and direct PDF download
├── README.md        # This guide
├── css/
│   └── thanks.css   # Confirmation-page-only responsive styles
└── js/
    └── thanks.js    # Confirmation-page download feedback
```

The page loads `css/thanks.css` and `js/thanks.js` from this folder. Its logo and PDF links use `../assets/...` to reach the site's shared assets directory.

## Routing and download

After the landing-page form receives a successful response from the Google Apps Script web app, `js/script.js` redirects to the configured public destination:

`https://softwareupload2025-del.github.io/aeri-learning-thanks/`

The local confirmation page in this project is available at `/thanks/`. To redirect form submissions to this local page instead, set `successRedirectUrl` in the root `js/script.js` to:

```js
new URL('thanks/', window.location.href).href
```

The confirmation page itself does not store form submissions or send email. It provides the confirmation copy and a direct download link to `../assets/documents/aeri-learning-activity-pack.pdf`.

## Responsive behavior

`index.html` in this folder includes a viewport meta tag. The dedicated `css/thanks.css` includes desktop, mobile, extra-small screen (up to 360px), focus-visible, and reduced-motion rules. The card, heading, logo, and download button resize to fit the available width.

## Preview locally

From the project root, run:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/thanks/>. Keep this folder alongside the root `css/`, `js/`, and `assets/` folders so the page's local asset links resolve.

## Making changes

- Edit the confirmation wording or download link in `thanks/index.html`.
- Edit only confirmation-page styling in `thanks/css/thanks.css`.
- Edit only confirmation-page behavior in `thanks/js/thanks.js`.
- If the PDF moves or is renamed, update the download link in `thanks/index.html`.
- If you want form submissions to use `/thanks/` instead of the configured public URL, update `successRedirectUrl` in root `js/script.js` as shown above.
