const express = require('express');
const env = require('dotenv');
const app = express();
var bodyParser = require('body-parser')
const { body } = require('express-validator');
const mongoose = require('mongoose');
//const assert = require('assert');


// routes

const userRoutes = require('./routes/auth');

env.config();

//umzyHiJIRlSAIbBs
//hasan

//mongodb+srv://hasan:<password>@cluster0.zhrq2.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://root:<password>@cluster0.5scrf.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.5scrf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then(() =>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log('Connection failed !!'+ err.message);
      });

//app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api', userRoutes);
//const PORT = process.env.PORT || 5000;


// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello from server!!!'
//     });
// });

// app.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
});