import { Request, Response, NextFunction } from "express";

const allowedEmails = ["belamidemills29@gmail.com"];

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {

    if(allowedEmails.includes(JSON.parse(JSON.stringify(req.session)).passport.user.emails[0].value)) {
        
        next();

    } else {

        req.logOut;
        req.session.destroy;
        res.sendStatus(401);
    }
}