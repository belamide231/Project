import { Router } from "express";
import { isAuthenticated } from "../middlewares/authentication";
import { isAuthorized } from "../middlewares/authorization";

const homeController = Router();

//''
//'chat'
//'users'
//'notification'
//'settings'
//'profile'
//'login'

homeController.get('/login', (req, res) => {
    res.redirect('login');
});

homeController.get('/chat', isAuthenticated, isAuthorized, (req, res) => {
    res.redirect('chat');
});

homeController.get('/users', isAuthenticated, isAuthorized, (req, res) => {
    res.redirect('users');
});

homeController.get('/notification', isAuthenticated, isAuthorized, (req, res) => {
    res.redirect('notification');
});

homeController.get('/settings', isAuthenticated, isAuthorized, (req, res) => {
    res.redirect('settings');
});

homeController.get('/profile', isAuthenticated, isAuthorized, (req, res) => {
    console.log("trigger");
    res.redirect('profile');
});

//homeController.get('/', isAuthenticated, isAuthorized, (req, res) => {
//    res.redirect('/');
//});

export default homeController;