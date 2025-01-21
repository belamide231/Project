import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if(req.user) {
        
        next();
        
    } else {

        res.sendStatus(401);
        return;
    }
}