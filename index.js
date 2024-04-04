const express = require('express');
const app = express();
 
// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 8000;

// middleware to parse  json request body 
app.use(express.json());

// importing todo routes
const todoRoutes = require('./routes/blog');
// mounting the todo APIs routes
app.use('/api/v1', todoRoutes);

// starting the server
app.listen(PORT, ()=>{
    console.log(`server is started at ${PORT}`);
});

// connecting to the database
const dbConnect = require('./config/Database');
dbConnect();

// default route
app.get('/', (req, res)=>{
    res.send(`<h1>Welcome To Home Blog Page</h1>`);
})