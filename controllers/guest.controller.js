import express from 'express';
import GuestService from '../services/guest.service.js';

const { Request, Response } = express;

// Création d'une instance du "GuestService"
const guestService = new GuestService();

// Controller pour les endpoints "Guest"
const guestController = {

    /**
     * Get Guest info by Id
     * @param {Request} req 
     * @param {Response} res 
     */
    getById: async (req, res) => {
        const id = req.params.id;
        const personDB = await guestService.getById(id);

        if (personDB) {
            res.status(200).json(personDB);
        }
        else {
            res.sendStatus(404);
        }
    },

    /**
     * Get all guest
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll: async (req, res) => {
        const data = await guestService.getAll();
        res.status(200).json(data);
    },

    /**
     * Add new guest
     * @param {Request} req 
     * @param {Response} res 
     */
    add: async (req, res) => {
        const personIn = req.body;
        const personDb = await guestService.add(personIn);

        res.status(201);
        res.location('guest/' + personDb.id);
        res.json(personDb);
    },

    /**
     * Delete guest
     * @param {Request} req 
     * @param {Response} res 
     */
    delete: async (req, res) => {
        const { id } = req.params;
        const isDeleted = await guestService.delete(id);

        if(isDeleted) {
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    },

    /**
     * Update guest infos
     * @param {Request} req 
     * @param {Response} res 
     */
    update: async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        const dataUpdated = await guestService.update(id, data);

        if(dataUpdated) {
            res.status(200).json(dataUpdated);
        }
        else {
            res.sendStatus(404);
        }
    }
};

export default guestController;