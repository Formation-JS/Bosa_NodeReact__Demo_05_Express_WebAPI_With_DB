import express from 'express';
const { Request, Response } = express;

const guestController = {

    /**
     * Get Guest info by Id
     * @param {Request} req 
     * @param {Response} res 
     */
    getById: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Get all guest
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll: (req, res) => {
        res.sendStatus(501);
    },
    
    /**
     * Add new guest
     * @param {Request} req 
     * @param {Response} res 
     */
    add: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Delete guest
     * @param {Request} req 
     * @param {Response} res 
     */
    delete: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Update guest infos
     * @param {Request} req 
     * @param {Response} res 
     */
    update: (req, res) => {
        res.sendStatus(501);
    }
};

export default guestController;