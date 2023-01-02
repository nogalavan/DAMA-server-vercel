const mongoose = require('mongoose');

const stockItem = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    myId: {
        required: true,
        type: String
    },
    demandRateForYear: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    orderCost: {
        required: true,
        type: Number
    },
    unitPrice: {
        required: true,
        type: Number
    },
    annualInterestPerItem: {
        required: true,
        type: Number
    },
    unitHoldingCost: {
        required: true,
        type: Number
    },
    deliveryTime: {
        required: true,
        type: Number
    },
    amount: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('StockItem', stockItem)