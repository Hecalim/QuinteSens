// main.js

import "./styles/style.scss"

import { initGallery } from './scripts/gallery.js'
import { randomizeGalleryItems } from './scripts/randomize.js'
import { validateForm } from './scripts/form-validation.js'
// import { myDropzone } from './scripts/dropzone.js'
import { setModalContent, setModalIcon } from "./scripts/modal.js"
import { sendEmail } from './scripts/emailjs.js'
import { activateDiv, startInterval } from './scripts/services.js'


document.addEventListener("DOMContentLoaded", () => {
    const serviceDivs = document.querySelectorAll(".services > div")
    const imageElement = document.querySelector(".services img")
    let currentIndex = { value: 0 }
    let intervalId

    function initializeAnimation() {
        activateDiv(serviceDivs, imageElement, currentIndex.value);
        intervalId = startInterval(serviceDivs, imageElement, intervalId, currentIndex);
    }

    serviceDivs.forEach((div, index) => {
        div.addEventListener("mouseover", () => {
            clearInterval(intervalId)
            activateDiv(serviceDivs, imageElement, index)
        })

        div.addEventListener("mouseout", () => {
            intervalId = startInterval(serviceDivs, imageElement, intervalId, currentIndex)
        })
    })

    initializeAnimation()
    randomizeGalleryItems()
    initGallery()
})


// Contacts form
document.getElementById("js-contacts").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const modal = document.getElementById("modal")

    if (validateForm()) {
        modal.classList.add("modal--valid", "modal--visible");
        setModalContent("Message envoyé")
        setModalIcon("fa-check")

        // Récupérer les données du formulaire
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            comment: document.getElementById('comment').value,
            files: []
        }

        // Récupérer les fichiers de la Dropzone
        // const files = myDropzone.getAcceptedFiles();
        // files.forEach((file, index) => {
        //     data.files.push(file); // Ajoute chaque fichier dans le tableau files: []
        // })

        // Réinitialiser le formulaire après 1 seconde
        setTimeout(() =>{
            document.getElementById("js-contacts").reset()
            // myDropzone.removeAllFiles()
        }, 1000)
      sendEmail(data); // Décommenter quand le formulaire est okay

    } else {
        
        modal.classList.add("modal--invalid", "modal--visible")
        setModalContent("Erreur dans le formulaire")
        setModalIcon("fa-xmark")
    }

    // Masquer la modal après 3 secondes
    setTimeout(() => {
        modal.classList.remove("modal--visible")
    }, 3000)

    // Réinitialiser les classes de validation/erreur après 4 secondes
    setTimeout(() => {
        modal.classList.remove("modal--valid", "modal--invalid")
    }, 4000)
})