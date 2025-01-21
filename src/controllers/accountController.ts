import { Router, Request, Response } from "express";
import { loginAccountDTO } from "../dto/accountController/loginAccount";
import { tokenizer } from '../utils/jwt';

const accountController = Router();

accountController.post('/addAccountManager', (req: Request, res: Response) => {
    res.sendStatus(200);
});

accountController.post('/login', (req: Request, res: Response) => {

    const account = req.body as loginAccountDTO;

    if(account.username === 'ibcadmin' && account.password === 'ibcadmin') {

        res.status(200).json({ 'token': tokenizer('ibcadmin', 'admin') });
    }

    res.sendStatus(403);
});

accountController.post('/createAccount', (req: Request, res: Response) => {

    res.sendStatus(200);
});

accountController.post('/deleteAccount', (req: Request, res: Response) => {

});

export default accountController;