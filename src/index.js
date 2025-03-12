const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());
const port = 2000;
const uri=`mongodb+srv://kendrobindu:jfqNyWlkwkxxetEC@cluster0.0pbks.mongodb.net/Kendrobindu?retryWrites=true&w=majority&appName=Cluster0`
app.get('/', (req, res) => {
    res.send('This is ok!');
});

const connectDB = async () => {

    try {
        
        await mongoose.connect(uri);
        mongoose.set('bufferCommands', false);
        console.log('MongoDB connected');
    } catch (err) {
        console.log('Database connection error:', err);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
