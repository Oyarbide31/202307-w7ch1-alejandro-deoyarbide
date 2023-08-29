import createDebug from 'debug';
import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app.js';
import { dbConnect } from './db/db.connect.js';

const PORT = process.env.PORT || 1968;

const server = createServer(app);
const debug = createDebug('W6E:App');

dbConnect().then((mongoose) => {
  server.listen(PORT);
  debug('Connected to DB:', mongoose.connection.db.databaseName);
});

server.on('listening', () => {
  console.log(`Listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.log(`Error ${error.message}`);
});

/* El app.listen está pendiente de lo que le llega al PORT. */
