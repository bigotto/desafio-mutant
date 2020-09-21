import express from 'express';
import TransferController from './controllers/TransferController';
import Log from './utils/log';

const routes = express.Router();
const transferController = new TransferController();
const logs = new Log();

routes.get('/download', transferController.download);
routes.get('/save', transferController.save);
routes.get('/log', logs.load);

export default routes;