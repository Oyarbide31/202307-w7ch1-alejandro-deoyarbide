import createDebug from 'debug';
import { Router as createRouter } from 'express';
import { EscaladorController } from '../controller/escalador.controller';
import { EscaladorRepo } from '../repository/escalador.fs.repository';

const debug = createDebug('W6E:Router:EscaladoresRouter');

debug('Loaded');

const repo = new EscaladorRepo(); // Aki tienes 1 archivo
const controller = new EscaladorController(repo); // Aki tienes otro archivo
export const escaladoresRouter = createRouter();

escaladoresRouter.get('/escaladores', controller.getAll.bind(controller));
escaladoresRouter.get('/escaladores/:id', controller.getById.bind(controller));
escaladoresRouter.post('/escaladores', controller.create.bind(controller));
escaladoresRouter.patch('/escaladores/:id', controller.update.bind(controller));
escaladoresRouter.delete(
  '/escaladores/:id',
  controller.delete.bind(controller)
);

/* Aki se define un enrutador de express para las rutas seleccionadas. Utilizamos un controlador y un AppRepository */
