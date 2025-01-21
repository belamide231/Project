import { Router, Request, Response } from "express";

const pingController = Router();

pingController.get('/ping', (req: Request, res: Response) => {
    res.send('HELLO WORLD!');
});

pingController.post('/ping', (req: Request, res: Response) => {
    res.json({ 'response': 'HELLO WORLD!' });
});

export default pingController;