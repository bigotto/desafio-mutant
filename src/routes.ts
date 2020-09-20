import express from 'express';
import TransferController from './controllers/TransferController';

const routes = express.Router();
const transferController = new TransferController();

routes.get('/download', transferController.download);
routes.get('/save', transferController.save);

export default routes;