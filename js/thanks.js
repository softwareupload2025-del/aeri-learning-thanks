"use strict";

const downloadLink = document.getElementById('download-pack');
const downloadStatus = document.getElementById('download-status');
const homeUrl = 'https://softwareupload2025-del.github.io/aeri-learning/';
const homeRedirectDelayMs = 8000;

// Let visitors see the confirmation and start the PDF download before returning home.
window.setTimeout(() => {
  window.location.replace(homeUrl);
}, homeRedirectDelayMs);

if (downloadLink && downloadStatus) {
  downloadLink.addEventListener('click', () => {
    downloadStatus.textContent = 'Your activity pack download should begin shortly. You will return to the home page in a few seconds.';
  });
}
