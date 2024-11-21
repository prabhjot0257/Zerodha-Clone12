require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.get('/addHoldings', async(req, res) => {
    
});

app.listen(PORT, () => {
    console.log('App Started!');
    mongoose.connect(uri);
    console.log(`DB connected!`);
});