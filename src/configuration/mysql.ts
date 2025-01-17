import mysql, { Pool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

let connectionInstance: Pool | null = null;

const getMysqlConnection = (): Pool => {

    if (!connectionInstance) {

        connectionInstance = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

    }
    return connectionInstance;
};

export default getMysqlConnection;
