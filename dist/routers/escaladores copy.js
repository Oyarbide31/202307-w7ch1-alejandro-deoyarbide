import { Router } from 'express';
// eslint-disable-next-line new-cap
const escaladoresRouter = Router();
escaladoresRouter.get('/escaladores', (request, response) => {
    // Request: se usa para obtener parámetros (peticion)
    response.send('LIST ESCALADORES');
});
export default escaladoresRouter;
