import createDebug from 'debug';
import { HttpError } from '../model/http.error';
const debug = createDebug('W6E:Middleware:Error');
debug('Loaded');
export const errorMiddleware = (error, _req, res, _next) => {
    debug('Error', error.message);
    if (error instanceof HttpError) {
        res.status(error.status);
        res.statusMessage = error.statusMessage;
        res.json({
            type: 'Error Http',
            status: res.statusCode,
            statusMessage: res.statusMessage,
            message: error.message,
        });
    }
    else {
        res.status(500);
        res.json({
            type: 'Error',
            message: error.message,
        });
    }
};
