const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Fix typo in 'dotenv'

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE, 

});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Database state:', connection.state);
});


class DbService {
    static getDbServiceInstance(){
        
    }
}