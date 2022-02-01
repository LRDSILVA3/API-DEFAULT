import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';
const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.get('/', clientsController.index);
clientsRouter.get('/:id', clientsController.show);
clientsRouter.post('/', clientsController.create);
clientsRouter.put('/:id', clientsController.update);
clientsRouter.delete('/:id', clientsController.delete);

export default clientsRouter;
