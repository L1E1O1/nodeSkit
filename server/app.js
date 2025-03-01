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
app.get('/getAll', (request, response) => {
    response.json({
        success: true
        
    })
})

//Update


//delete


app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}/getAll`);
});