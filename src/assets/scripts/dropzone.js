
import { Dropzone } from "dropzone";

export const myDropzone = new Dropzone("#file-dropzone", {
    url: "/dummy",  // Une URL factice, car on enverra via MailJS
    autoProcessQueue: false, // Empêche Dropzone d'envoyer les fichiers automatiquement
    addRemoveLinks: true,
    uploadMultiple: true,
    parallelUploads: 10,
    dictDefaultMessage:
        "Glisser vos fichiers ou <span class='link'>cliquer</span> <br/>pour parcourir vos fichiers.",
  });
