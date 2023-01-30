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

//Post Method
router.post('/mail/post', async (req, res) => {

  var mailOptions = {
    from: 'Dama.inventory@gmail.com',
    to: 'Dama.inventory@gmail.com',
    subject: 'INEVENTORY REORDER!',
    text: "Hello "+ req.body.name + ", you reached your reorder point for item:" +req.body.item+ ". Make an order of " +req.body.amount+ " units. ",
  };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(200).json({message: info.response});
          console.log('Email sent: ' + info.response);
        }
      });
})


module.exports = router;