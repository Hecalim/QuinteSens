export const validateForm = () => {
  let isValid = true;

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const comment = document.getElementById("comment")
  const modal = document.getElementById("modal")

  // Validation du nom
  isValid = validateField(name, name.value.trim() !== "") && isValid;

  // Validation de l'email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValid = validateField(email, emailPattern.test(email.value)) && isValid;

  // Validation du téléphone (optionnel)
  const phonePattern = /^\+?\d{10,15}$/;
  isValid =
    validateField(
      phone,
      phone.value.trim() === "" || phonePattern.test(phone.value)
    ) && isValid

  // Validation du message
  isValid = validateField(comment, comment.value.trim() !== "") && isValid

  return isValid
}

const validateField = (element, condition) => {
  showWarning(element, !condition)
  return condition
  }
  
const showWarning = (element, show) => {
  const warning = element.nextElementSibling
  warning.style.visibility = show ? "visible" : "hidden"
  if (show) {
    element.classList.add('input__error');
  } else {
    element.classList.remove('input__error');
  }
}
