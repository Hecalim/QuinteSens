import emailjs from '@emailjs/browser';

export const sendEmail = (data) => {
    emailjs.init('nju6C88XlDznSctFp'); // Initialisez EmailJS avec votre clé publique

    emailjs.send('service_gwe1pzr', 'template_gojvs3v', data)
    .then(function(response) {
        console.log('Succès!', response.status, response.text);
        alert('Votre message a été envoyé avec succès!');
    }, function(error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
    });
};
