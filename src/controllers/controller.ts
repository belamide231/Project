// IMPORTED 3RD PARTY PACKAGES
import { Router } from "express";

// IMPORTED FILES
import messageController from "./messageController";
import accountController from "./accountController";
import pingController from "./pingController";
import authController from "./authController";
import homeController from "./homeController";
import { socketio } from "./socketio";

const controller = Router();

// REGISTER ALL THE CONTROLLER HERE!
controller.use(messageController);
controller.use(accountController);
controller.use(pingController);
controller.use(homeController);
controller.use(socketio)

//controller.use(authController);

export default controller;