export const setModalContent = (description) => {
    const modalDesc = document.querySelector("#modal .modal__desc")
    modalDesc.textContent = description
}

export const setModalIcon = (classe) => {
    const modalIcon = document.querySelector("#modal .modal__icon")
    modalIcon.classList.remove('fa-check', 'fa-times'); 
    
    // Ajoute les nouvelles classes nécessaires
    modalIcon.classList.add('fas', classe); // 'fas' pour FontAwesome et la classe passée en argument
}