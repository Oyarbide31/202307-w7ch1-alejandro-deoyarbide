import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express'; // SErvidor de petciones HTTP
import escaladoresRouter from './routers/escaladores.js';
export const app = express();
//
// app.use(morgan('deve'));
app.use(cors());
app.use(bodyParser.json());
app.use(escaladoresRouter);
app.get('/', (request, response) => {
    // Request: se usa para obtener parámetros (peticion)
    response.send('Hola Mundo');
});
