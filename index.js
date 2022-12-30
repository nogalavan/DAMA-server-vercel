require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
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
const purchasesHistoryRoutes = require('./routes/purchasesHistoryRoutes');

app.use('/api', itemRoutes);
app.use('/api', purchasesHistoryRoutes);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})