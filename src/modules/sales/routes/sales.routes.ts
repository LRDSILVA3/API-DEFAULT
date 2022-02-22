import { Router } from 'express';
import SalesController from '../controllers/SalesController';
const salesRouter = Router();
const salesController = new SalesController();

salesRouter.get('/', salesController.index);

export default salesRouter;