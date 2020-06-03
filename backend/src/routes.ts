import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//index(list), show(exibir um unico registro), create, update, delete

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create)

export default routes;
