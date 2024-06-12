export const validateForm = () => {
    let isValid = true;
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const comment = document.getElementById('comment');
  
    // Validation du nom
    isValid = validateField(name, name.value.trim() !== '') && isValid;
  
    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = validateField(email, emailPattern.test(email.value)) && isValid;
  
    // Validation du téléphone (optionnel)
    const phonePattern = /^\+?\d{10,15}$/;
    isValid = validateField(phone, phone.value.trim() === '' || phonePattern.test(phone.value)) && isValid;
  
    // Validation du message
    isValid = validateField(comment, comment.value.trim() !== '') && isValid;
  
    // Si tout est valide, soumettez le formulaire (vous pouvez ajouter votre logique d'envoi ici)
    if (isValid) {
      console.log('Formulaire valide et prêt à être soumis.');
      // Ajoutez ici la logique pour envoyer le formulaire via AJAX ou une autre méthode
    }
    return isValid;

  };
  
  const validateField = (element, condition) => {
    showWarning(element, !condition);
    return condition;
  };
  
  const showWarning = (element, show) => {
    const warning = element.nextElementSibling;
    warning.style.visibility = show ? 'visible' : 'hidden';
  };