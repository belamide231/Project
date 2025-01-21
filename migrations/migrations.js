const mysql = require('mysql2');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
dotenv.config();

const recursion = async (connectionInstance, sql) => {

    await connectionInstance.promise().query(sql[0]);
    sql.shift();

    if(sql.length !== 1) {

        await recursion(connectionInstance, sql);
    }

    return;
}

const startMigrations = async () => {

    try {

        connectionInstance = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        await connectionInstance.promise().query("CREATE DATABASE IF NOT EXISTS chat;");
        await connectionInstance.promise().query("USE chat;");
        
        const tables = fs.readFileSync(path.join(__dirname, 'tables.sql'), 'utf-8').split(';');
        await recursion(connectionInstance, tables);

        const procedures = fs.readFileSync(path.join(__dirname, 'procedures.sql'), 'utf-8').split(';-----');
        await recursion(connectionInstance, procedures);
        
        await connectionInstance.end();

        console.log("MIGRATING DATABASE SUCCESS");
        process.exit();


    } catch (error) {

        console.log("MIGRATING DATABASE FAILED");
        console.log(error);
        process.exit();

    }
};
startMigrations();
