import { Router } from 'express';
// eslint-disable-next-line new-cap
const futbolistas = Router();
futbolistas.get('/futbolistas', (request, response) => {
    // Request: se usa para obtener parámetros (peticion)
    response.send('LIST PRINGAOS');
});
export default futbolistas;
