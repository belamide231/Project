import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET, 
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
}, (request: any, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
    return done(null, profile);
}));

passport.serializeUser(function(user: any, done: (err: any, id?: any) => void) {
    done(null, user);
});

passport.deserializeUser(function(user: any, done: (err: any, user?: any) => void) {
    done(null, user);
});