import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const tokenizer = (id: string, role: string) => {

    const secret = process.env.JWT_SECRET;
    return secret ? jwt.sign({ id, role }, secret, { expiresIn: '1h' }) : false;
}