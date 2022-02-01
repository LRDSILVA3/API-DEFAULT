import clientsRouter from '@modules/clients/routes/clients.routes';
import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/clients', clientsRouter);
export default routes;
