import cors from "cors";
import createDebug from "debug";
import express from "express";
import morgan from "morgan";
import escaladoresRouter from "./routers/escaladores";
export const app = express();
const debug = createDebug('W6E:App');
debug('Started'); // guardo mensajes de depuración
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
    debug('Middleware de error');
    next();
});
app.get('/', (req, res) => {
    debug('Listado de escaladores');
    res.write('<h1>Listado de escaladores </h1>');
    res.end();
});
app.use('/escaladores', escaladoresRouter);
/* Aquí configura el servidor web, se definen rutas y el middleware para manejar solicitudes y respuestas
además se utilizan funciones de depuración para registar la info por consola

- Middleware códigos que se ejuctan antes de que una petición HTTP llegue al manejador de rutas.

*/
