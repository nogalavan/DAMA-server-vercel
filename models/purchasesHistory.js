const mongoose = require('mongoose');

const purchasesHistory = new mongoose.Schema({
    itemName: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('PurchasesHistory', purchasesHistory)