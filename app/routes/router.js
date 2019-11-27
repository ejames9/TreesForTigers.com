/*
router.js

This file creates and exports the application's routes to the
main app file.

Author: Eric James Foster
*/


//Instantiate Router..
const router = require('express').Router(),
        User = require('../models/users'),
      stripe = require("stripe")("sk_test_a3Up43VvKSwpQZF7TwznnZ2G00JwhYCuE6")



//Home page..
router.get('/', function(req, res) {
  res.render('home')
})

// Donation page..
router.get('/donate', function(req, res) {
  res.render('donate')
})

// Kim Voyle Bios page..
router.get('/KimVoyle', function(req, res) {
  res.render('KimVoyle')
})

// Rob Voyle Bios page..
router.get('/RobVoyle', function(req, res) {
  res.render('RobVoyle')
})

// Martin Royle Bios page..
router.get('/MartinRoyle', function(req, res) {
  res.render('MartinRoyle')
})

// Alexander Batalov Bios page..
router.get('/AlexanderBatalov', function(req, res) {
  res.render('AlexanderBatalov')
})

// Donation page..
// router.get('/charge', function(req, res) {
//   res.send('hello there')
// })


// Stripe endpoint...
// router.post('/charge', async (req, res) => {
//   try {
//     let {status} = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     })
//
//     res.json({status})
//   } catch (err) {
//     console.log(err)
//     res
//        .status(500)
//        .end()
//   }
// })


module.exports = router
