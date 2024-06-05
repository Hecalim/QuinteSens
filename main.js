// main.js
import "/sass/style.scss"

import { carousel } from "./scripts/carousel.js"
import { initGallery } from './scripts/gallery.js'
import { randomizeGalleryItems } from './scripts/randomize.js'
import { validateForm } from './scripts/form-validation.js'

document.getElementById('js-contacts').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

window.onload = carousel();

document.addEventListener("DOMContentLoaded", function() {
    randomizeGalleryItems()
    initGallery()

});
