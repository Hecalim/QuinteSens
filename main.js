// main.js
import "/sass/style.scss"

import { initGallery } from './scripts/gallery.js'
import { randomizeGalleryItems } from './scripts/randomize.js'
import { validateForm } from './scripts/form-validation.js'
import { sendEmail } from './scripts/emailjs.js'
import { closeDialog, setModalContent } from './scripts/modal.js'



document.addEventListener("DOMContentLoaded", function() {
    randomizeGalleryItems()
    initGallery()
})

document.getElementById('js-contacts').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
      const modal = document.getElementById("modal")

      setModalContent("Formulaire validé", "Votre formulaire a été validé")
      modal.showModal()
      const data = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          comment: document.getElementById('comment').value
      };
      // sendEmail(data); // uncomment when mail is okay to be sent
    }
})
closeDialog()