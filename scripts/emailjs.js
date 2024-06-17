import emailjs from "@emailjs/browser";

export const sendEmail = (data) => {
  emailjs.init("nju6C88XlDznSctFp"); // Public key

  emailjs
    .send("service_gwe1pzr", "template_gojvs3v", data) //Service, template
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

// Service
// service_gwe1pzr
// Template 
// template_gojvs3v
// Public key 
// nju6C88XlDznSctFp


// Service
// service_Quinte&Sens
// Template
// template_Quinte_&_Sens
// Public key
// fe-5ZMtB6UOY8CYDB