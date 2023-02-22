const express = require('express');
const StockItem = require('../models/stockItem');

const router = express.Router()

//Post Method
router.post('/stockItem/post', async (req, res) => {

    
    const data = new StockItem({
        name: req.body.name,
        myId: req.body.myId,
        demandRateForYear: req.body.demandRateForYear,
        description: req.body.description,
        orderCost: req.body.orderCost,
        unitPrice: req.body.unitPrice,
        annualInterestPerItem: req.body.annualInterestPerItem,
        unitHoldingCost: req.body.unitHoldingCost,
        deliveryTime: req.body.deliveryTime,
        amount: req.body.amount
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/stockItem/getAll', async (req, res) => {
    try{
        const data = await StockItem.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// //Get by ID Method
// router.get('/stockItem/getOne/:id', async (req, res) => {
//     try{
//         const data = await StockItem.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

//Update by ID Method
router.put('/stockItem/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await StockItem.findByIdAndUpdate(
            id, updatedData
        )
            
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// //Delete by ID Method
// router.delete('/stockItem/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await StockItem.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

module.exports = router;