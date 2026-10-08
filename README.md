# Aeri Learning confirmation page

The confirmation page and page-specific assets are kept together in the `thanks/` folder, separate from the landing page's `css/style.css` and `js/script.js`.

## Files

```text
thanks/
├── index.html       # Confirmation content and download button
├── README.md        # This guide
├── css/
│   └── thanks.css   # Responsive confirmation-page styles
└── js/
    └── thanks.js    # Download-start feedback

assets/
├── images/aeri-learning-logo.png
├── icons/aeri-learning-mark.png
└── documents/aeri-learning-free-activity-pack.pdf
```

The button in `thanks/index.html` downloads `../assets/documents/aeri-learning-free-activity-pack.pdf` and saves it as `Aeri-Learning-Free-Activity-Pack.pdf`. The older generated `aeri-learning-activity-pack.pdf` is not the file linked by this button.

## Routing

After the landing-page form receives a successful response from the Google Apps Script web app, `js/script.js` redirects to the configured public destination:

`https://softwareupload2025-del.github.io/aeri-learning-thanks/`

The local confirmation page in this project is available at `/thanks/`. To direct form submissions to this local folder instead, set `successRedirectUrl` in the root `js/script.js` to:

```js
new URL('thanks/', window.location.href).href
```

This page displays the confirmation copy and provides the direct PDF download. It does not store form submissions or send email.

## Responsive behavior

`thanks/index.html` includes a viewport meta tag. `thanks/css/thanks.css` includes desktop, mobile, extra-small screen (up to 360px), focus-visible, and reduced-motion rules. The card, heading, logo, and button resize to fit the available width.

## Preview locally

From the project root, run:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/thanks/>. Keep `thanks/`, `css/`, `js/`, and `assets/` in the project so all relative links work.

## Making changes

- Edit confirmation copy or the download URL in `thanks/index.html`.
- Edit page styling in `thanks/css/thanks.css`.
- Edit download feedback in `thanks/js/thanks.js`.
- Replace the linked PDF in `assets/documents/` or change the button href if its file path changes.
- If you want form submissions to redirect to `/thanks/` instead of the configured public URL, update `successRedirectUrl` in root `js/script.js` as shown above.
