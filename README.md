# Aeri Learning confirmation page

This README documents the standalone `thanks.html` confirmation page. Its markup, styling, and page-specific JavaScript are kept separate from the landing page files.

## Files used by this page

```text
thanks.html                         # Confirmation content and direct PDF download
css/thanks.css                      # Responsive styles for the confirmation page only
js/thanks.js                        # Download-start feedback for the confirmation page
assets/images/aeri-learning-logo.png
assets/icons/aeri-learning-mark.png
assets/documents/aeri-learning-activity-pack.pdf
```

`thanks.html` does not load `css/style.css` or `js/script.js`. Keep the dedicated `thanks.css` and `thanks.js` files in their listed folders and keep the referenced assets under `assets/`.

## How the page is reached

After the landing-page form receives a successful response from the Google Apps Script web app, `js/script.js` navigates to the configured destination: `https://softwareupload2025-del.github.io/aeri-learning-thanks/`. The confirmation page itself does not submit or store form data. Only `thanks.html` is used as the local confirmation page; there is no second thank-you HTML page. To redirect to this local file instead, change `successRedirectUrl` in `js/script.js` to `new URL('thanks.html', window.location.href).href`.

The page provides the confirmation copy and a direct download link to `assets/documents/aeri-learning-activity-pack.pdf`. The current Apps Script stores form submissions in the configured spreadsheet; it does not automatically email the PDF.

## Responsive behavior

The page includes a viewport meta tag and responsive rules in `css/thanks.css` for standard mobile screens and extra-small screens (up to 360 pixels). Its card, heading, logo, and download button resize to fit the viewport. Reduced-motion preferences are respected.

## Preview locally

Run this command from the project root:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/thanks.html>. Keep the `css/`, `js/`, and `assets/` folders alongside the page so the relative paths resolve. The links are also relative for GitHub Pages project sites.

## Making changes

- Edit the confirmation wording or download link in `thanks.html`.
- Edit only confirmation-page layout and colors in `css/thanks.css`.
- Edit only confirmation-page interactions in `js/thanks.js`.
- If the PDF filename or location changes, update the download link in `thanks.html`.
- If the confirmation filename changes, update the success redirect in `js/script.js` as well.
