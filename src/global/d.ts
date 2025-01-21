// express.d.ts

import * as express from 'express';

declare global {
    namespace Express {
        interface User {
            displayName: string;
        }

        interface Request {
            logout(): void;
        }
    }
}
