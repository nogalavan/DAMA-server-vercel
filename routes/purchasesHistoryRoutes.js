const express = require('express');
const PurchasesHistory = require('../models/purchasesHistory');

const router = express.Router()

//Post Method
router.post('/purchasesHistory/post', async (req, res) => {
    const data = new PurchasesHistory({
        itemName: req.body.itemName,
        date: req.body.date,
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
router.get('/purchasesHistory/getAll', async (req, res) => {
    try{
        const data = await PurchasesHistory.find();
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

// //Update by ID Method
// router.patch('/stockItem/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await StockItem.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

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