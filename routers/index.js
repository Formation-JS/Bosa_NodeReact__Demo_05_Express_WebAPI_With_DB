import { Router } from 'express';
import guestRouter from './guest.router.js';


const routerMain = Router();

routerMain.use('/guest', guestRouter);


export default routerMain;