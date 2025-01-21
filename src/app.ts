// 3RD PARTY PACKAGES
import express, { urlencoded, json } from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import dontenv from 'dotenv';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

dontenv.config();

// IMPORTED FILES
import controller from './controllers/controller';
import getMysqlConnection from './configuration/mysql';
import getRedisConnection from './configuration/redis';
import { connection } from './sockets/connection';
import './auth/google';

export const mysql = getMysqlConnection();
export const redis = getRedisConnection();

const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
export const users: Record<string, string[]> = {};
export const io = new Server(server);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true, cookie: { secure: false } }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../public/views/browser')));
app.use(controller);

io.on('connection', connection); 

server.listen(port, () => console.log(`http://localhost:${port}`));