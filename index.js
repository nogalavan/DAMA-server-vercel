require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;

DATABASE_URL = "mongodb+srv://noganoganoga:noganoganoga@cluster0.25y4qcu.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const itemRoutes = require('./routes/itemRoutes');
const mailRoutes = require('./routes/mailRoutes');
const purchasesHistoryRoutes = require('./routes/purchasesHistoryRoutes');

app.use('/api', itemRoutes);
app.use('/api', mailRoutes);
app.use('/api', purchasesHistoryRoutes);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})