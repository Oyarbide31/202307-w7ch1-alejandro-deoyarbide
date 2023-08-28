import { Router } from 'express';
import escaladores from '../data.json' assert { type: 'json' };
// eslint-disable-next-line new-cap
const escaladoresRouter = Router();
escaladoresRouter.get('/escaladores', (request, response) => {
    // Request: se usa para obtener parámetros (peticion)
    response.send({
        data: escaladores.Escaladores,
    });
});
escaladoresRouter.post('/escaladores', (request, response) => {
    const newEscalador = request.body;
    const position = escaladores.Escaladores.length - 1;
    const id = escaladores.Escaladores.length === 0
        ? 0
        : escaladores.Escaladores[position].id + 1;
    escaladores.Escaladores.push({
        id,
        ...newEscalador,
    });
    response.send({
        guardado: true,
    });
});
escaladoresRouter.get('/escaladores/:id', (request, response) => {
    const { id } = request.params;
    const escalador = escaladores.Escaladores.find((escaladorEnArray) => escaladorEnArray.id === parseInt(id, 10));
    response.send({
        data: escalador,
    });
});
escaladoresRouter.delete('/escaladores/:id', (request, response) => {
    const { id } = request.params;
    let borrado = false;
    const newArrayEscaladores = escaladores.Escaladores.filter((escaladorEnArray) => escaladorEnArray.id !== parseInt(id, 10));
    escaladores.Escaladores = newArrayEscaladores;
    borrado = true;
    response.send({
        borrado,
    });
});
escaladoresRouter.patch('/escaladores/:id', (request, response) => {
    const { id } = request.params;
    const escaladorIndex = escaladores.Escaladores.findIndex((escalador) => escalador.id === parseInt(id, 10));
    if (escaladorIndex === -1) {
        response.sendStatus(404).send({
            update: false,
        });
        return;
    }
    const escaladorFromRequest = request.body;
    const oldEscalador = escaladores.Escaladores[escaladorIndex];
    escaladores.Escaladores[escaladorIndex] = {
        ...oldEscalador,
        ...escaladorFromRequest,
    };
    response.send({
        update: true,
    });
});
export default escaladoresRouter;
