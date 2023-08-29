import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app.js';
const PORT = process.env.PORT || 1967;
const server = createServer(app);
server.listen(PORT);
server.on('listening', () => {
    console.log(`Listening on port ${PORT}`);
});
server.on('error', (error) => {
    console.log(`Error ${error.message}`);
});
/* El app.listen está pendiente de lo que le llega al PORT. */
