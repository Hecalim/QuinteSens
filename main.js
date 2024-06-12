// main.js
import "/sass/style.scss"

import { carousel } from "./scripts/carousel.js"
import { initGallery } from './scripts/gallery.js'
import { randomizeGalleryItems } from './scripts/randomize.js'
import { validateForm } from './scripts/form-validation.js'
import { sendEmail } from './scripts/emailjs.js';


document.getElementById('js-contacts').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

window.onload = carousel();

document.addEventListener("DOMContentLoaded", function() {
    randomizeGalleryItems()
    initGallery()

});


document.getElementById('js-contacts').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            comment: document.getElementById('comment').value
        };
        sendEmail(data);
    } else {
        console.log('Formulaire invalide. Veuillez corriger les erreurs.');
    }
});