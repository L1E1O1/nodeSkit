const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = 3000;
dotenv.config();

const dbService = require('./db_service');

app.use(cors()) //when we have an api datacall it wont block it  
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

//create
app.post('/insert', (request, response) => {
    
    })

//read
app.get('/getAll', async (request, response) => {
    const db = dbService.getDbServiceInstance();
    const result = await db.getAllData();
    response.json({ data: result }); // Send the data as a JSON response
});

//Update


//delete


app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}/getAll`);
});