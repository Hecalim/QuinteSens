// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL pour les chemins des ressources dans le build
  base: './',  // Cela garantit que les chemins générés sont relatifs et non absolus

  // Configuration pour les assets statiques
  build: {
    // Le répertoire de sortie des fichiers compilés
    outDir: 'dist',

    // Le répertoire des assets (pour les fichiers comme images, vidéos, etc.)
    assetsDir: 'assets', // Cela place tous les assets dans le dossier `dist/assets`

    // Pour gérer les ressources statiques, par exemple les images
    assetsInlineLimit: 4096, // Limite la taille pour l'encodage inline des fichiers en base64 (par défaut 4096 octets)
  },

  // Plugins (optionnel)
  plugins: [
    // Tu peux ajouter des plugins ici si nécessaire
  ],

  // Autres configurations spécifiques (si nécessaire)
  server: {
    open: true, // Ouvre automatiquement le navigateur au démarrage du serveur
  },
});
