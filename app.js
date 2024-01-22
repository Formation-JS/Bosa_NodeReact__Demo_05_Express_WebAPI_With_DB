// Importation des packages (ESM)
import express from 'express';
import routerMain from './routers/index.js';

// Récuperation des variable d'env
const { NODE_ENV, PORT } = process.env;

// Initialisation de la Web API
const app = express();

// Ajout des middlewares
// - Inject les données du body dans l'objet "req.body"
app.use(express.json());

// Ajout des endpoints (Router)
app.use(routerMain);

// Démarrage de l'API
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT} [${NODE_ENV}]`);
});