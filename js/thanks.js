"use strict";

const downloadLink = document.getElementById('download-pack');
const downloadStatus = document.getElementById('download-status');

if (downloadLink && downloadStatus) {
  downloadLink.addEventListener('click', () => {
    downloadStatus.textContent = 'Your activity pack download should begin shortly.';
  });
}
