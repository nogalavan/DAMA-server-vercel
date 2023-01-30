const express = require('express');

const router = express.Router()

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Dama.inventory@gmail.com',
    pass: 'axadvtlvlycdbqyv'
  }
});

var mailOptions = {
  from: 'Dama.inventory@gmail.com',
  to: 'Dama.inventory@gmail.com',
  subject: 'INEVENTORY REORDER!',
  text: 'That was easy!'
};



//Post Method
router.post('/mail/post', async (req, res) => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(200).json({message: info.response});
          console.log('Email sent: ' + info.response);
        }
      });
    // const data = new StockItem({
    //     name: req.body.name,
    //     myId: req.body.myId,
    //     demandRateForYear: req.body.demandRateForYear,
    //     description: req.body.description,
    //     orderCost: req.body.orderCost,
    //     unitPrice: req.body.unitPrice,
    //     annualInterestPerItem: req.body.annualInterestPerItem,
    //     unitHoldingCost: req.body.unitHoldingCost,
    //     deliveryTime: req.body.deliveryTime,
    //     amount: req.body.amount
    // })

    // try {
    //     const dataToSave = await data.save();
    //     res.status(200).json(dataToSave)
    // }
    // catch (error) {
    //     res.status(400).json({message: error.message})
    // }
})


module.exports = router;