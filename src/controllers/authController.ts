import { Router, Request, Response } from 'express';
import passport from 'passport';

const authController = Router();

import '../auth/google';
import '../global/d';
import '../model/sessionPassport';
import { isAuthenticated } from '../middlewares/authentication';
import { isAuthorized } from '../middlewares/authorization';

//authController.get('/', (req: Request, res: Response) => {
//    res.send('<a href="/auth/google">Login with Google</a>');
//});

authController.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

authController.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req: Request, res: Response) => {
        res.redirect("/profile");
    }
);

//authController.get("/profile", isAuthenticated, (req: Request, res: Response) => {
//    if(req.user) {

//        console.log(JSON.parse(JSON.stringify(req.user)).id);

//        res.send(`Welcome ${req.user.displayName}`);
//    } else {
//        res.send('Not logged in');
//    }
//});


//authController.get("/logout", (req: Request, res: Response) => {
//    req.logout(() => {
//        res.redirect("/");
//    });
//});

export default authController;
