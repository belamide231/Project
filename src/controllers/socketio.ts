import { Router, Request, Response } from 'express';
import path from 'path';

export const socketio = Router();

socketio.get('/socketio', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../test/test.html'));
});