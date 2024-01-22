// Importation des packages (ESM)
import express from 'express';
import 'express-async-errors';
import routerMain from './routers/index.js';
import db from './models/index.js';

// Récuperation des variable d'env
const { NODE_ENV, PORT } = process.env;

// Initialisation de la base de donnée
// - Test de connection
db.sequelize.authenticate()
    .then(() => console.log('Connection DB : OK'))
    .catch((error) => console.log('Connection DB : Error', error));

// - Synchronisation de la DB et des models (Pas necessaire en DB first)
if(NODE_ENV === 'dev') {
    // db.sequelize.sync({
    //     alter: { drop: false }
    // });
}

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