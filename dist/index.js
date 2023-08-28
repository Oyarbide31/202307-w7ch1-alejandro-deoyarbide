import 'dotenv/config';
import { app } from './app.js';
const PORT = process.env.PORT || 1989;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
/* El app.listen está pendiente de lo que le llega al PORT. */
