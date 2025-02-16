import emailjs from "@emailjs/browser";

export const sendEmail = (data) => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  emailjs.init(publicKey);

  emailjs
    .send(serviceId, templateId, data)
    .then(
      function (response) {
        console.log("Succès!", response.status, response.text);
      },
      function (error) {
        console.error("Erreur:", error);
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    );
};