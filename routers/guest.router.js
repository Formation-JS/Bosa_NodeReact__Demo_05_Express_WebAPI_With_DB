import { Router } from 'express';
import guestController from '../controllers/guest.controller.js';

import { bodyValidatorMiddleware } from '../middlewares/bodyValidator.middleware.js';
import { guestValidator } from '../validators/guest.validator.js';


const guestRouter = Router();

guestRouter.route('/')
    .get(guestController.getAll)
    .post(bodyValidatorMiddleware(guestValidator), guestController.add)
    .all((req, res) => res.sendStatus(405));

guestRouter.route('/:id([0-9]+)')
    .get(guestController.getById)
    .put(bodyValidatorMiddleware(guestValidator), guestController.update)
    .delete(guestController.delete)
    .all((req, res) => res.sendStatus(405));


export default guestRouter;