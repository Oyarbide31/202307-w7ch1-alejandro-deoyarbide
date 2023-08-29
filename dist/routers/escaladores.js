const debug = createDebug('W6E:Router:EscaladoresRouter');
debug('Loaded');
const repo = new EscaladoresFsRepository(); //aki tienes 1 archivo
const escaladorController = new escaladorController(repo); //Aki tienes otro archivo
export const taskRouter = createRouter();
escaladoresRouter.get('/escaladores', escaladorController.getAll.bind(escaladorController));
escaladoresRouter.get('/escaladores/:id', escaladorController.getById.bind(escaladorController));
escaladoresRouter.post('/escaladores', escaladorController.create.bind(escaladorController));
escaladoresRouter.patch('/escaladores/:id', escaladorController.update.bind(escaladorController));
escaladoresRouter.delete('/escaladores/:id', escaladorController.delete.bind(escaladorController));
/* Aki se define un enrutador de express para las rutas seleccionadas. Utilizamos un controlador y un AppRepository
 
