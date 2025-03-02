const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE, 

});

console.log('Database Host:', process.env.HOST);
console.log('Database User:', process.env.USER);
console.log('Database Password:', process.env.PASSWORD);
console.log('Database Name:', process.env.DATABASE);
console.log('Database Port:', process.env.DB_PORT);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Database state:', /*connection.state*/);
});


class DbService {
    // Static instance variable
    static instance = null;

    // Method to get the singleton instance
    static getDbServiceInstance() {
        if (!DbService.instance) {
            DbService.instance = new DbService();
        }
        return DbService.instance;
    }

    constructor() {
        if (DbService.instance) {
            throw new Error("Use DbService.getDbServiceInstance() to get the singleton instance.");
        }
        DbService.instance = this;
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names";
                connection.query(query, (err, rows) => {
                    if (err) reject(new Error(err.message));
                    resolve(rows);
                });
            });
            return response;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }

    async insertName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO names (name) VALUES (?)";
                connection.query(query, [name], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            });
            return response;
        } catch (error) {
            console.error('Error inserting data:', error.message);
            throw error;
        }
    }
}

module.exports = DbService;