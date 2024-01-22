import { Sequelize } from 'sequelize';
import guestModel from './guest.model.js';

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_SERVER, DB_PORT } = process.env; 

// Initialisation de Sequelize
// - Exemple pour du SQLite
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    dialect: 'sqlite',
    storage: './db/data.sqlite'
});

// - Exemple pour du postgreSQL
/*
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVER,
    port: DB_PORT,
    dialect: 'postgres'
})
*/


// Création d'un objet "db" pour contenir le necessaire pour interagir avec Sequelize
const db = {};

// - Ajout de l'instance de sequelize
db.sequelize = sequelize;

// - Ajout des modeles
db.Guest = guestModel(sequelize);

// - Ajout des relations
// TODO ...

// - Export l'objet "db"
export default db;