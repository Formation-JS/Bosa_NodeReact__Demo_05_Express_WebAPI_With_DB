import { DataTypes, Sequelize } from 'sequelize';

// Package pour générer le model via la database → sequelize-auto
// https://github.com/sequelize/sequelize-auto#sequelize-auto


/**
 * Fonction pour générer le model "Guest"
 * @param {Sequelize} sequelize
 * @returns
 */
export default (sequelize) => {

    // Les parametres de la méthode define : 
    // - Nom de l'entité
    // - Les attributs de l'entité

    const Guest = sequelize.define('Guest', {
        // id: {
        //     type: DataTypes.BIGINT,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: {
                name: 'UK_Guest__Email'
            }
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        hasConfirm: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    return Guest;
}