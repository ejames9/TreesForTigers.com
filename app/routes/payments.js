/*
payments.js

payments.js is an addition to the router.js file, that houses stripe endpoints
for donation payment processing.....

Eric James Foster
*/

const router = require('express').Router()
const stripe = require("stripe")("sk_test_a3Up43VvKSwpQZF7TwznnZ2G00JwhYCuE6")

const log = require('../src/js/utils/nodeLoggers').log
const dir = require('../src/js/utils/nodeLoggers').dir



// Stripe endpoint for creating a payment intent...
router.post('/secret', async (req, res) => {
  // console.log('this is the amount: ' + req.body.amount * 100)

  try {
    let intent = await stripe.paymentIntents.create({
// The donation form's amount is received in dollars, but stripe requires an input
// amount in cents, so, the amount must be multiplied by 100...
      amount: req.body.amount * 100,
      currency: 'usd',
      description: "Trees for Tigers Donation",
      payment_method_types: ['card']
    })

    res.json({
      client_secret: intent.client_secret,
      id: intent.id
    })
  } catch (err) {
    console.log(err)
    res
       .json({
         error: true,
         type: err.type,
         code: err.code,
         param: err.param,
         message: err.message
       })
       .status(500)
       .end()
  }
})


// Stripe endpoint for updating amount on an existing intent...
router.post('/secret/update_intent', async (req, res) => {
  if (!req.body.isAmount) {
    log(`Donor email: ${req.body.receipt_email}`, ['yellow', 'bold'])
  }
// Declare intent here .....
  let intent

  try {
    if (req.body.isAmount) {
      intent = await stripe.paymentIntents.update(req.body.intent, {
// The donation form's amount is received in dollars, but stripe requires an input
// amount in cents, so, the amount must be multiplied by 100...
        amount: req.body.amount * 100
      })

    } else {
      intent = await stripe.paymentIntents.update(req.body.intent, {
        receipt_email: req.body.receipt_email
      })

    }
    res.json({
      client_secret: intent.client_secret,
      id: intent.id
    })
  } catch (err) {
    console.log(err)
    res
     .json({
       error: true,
       type: err.type,
       code: err.code,
       param: err.param,
       message: err.message
    })
      .status(500)
      .end()
  }
})


// Stripe webhook endpoint...
const endpointSecret = 'whsec_UpUTXmqZYHBKdtgtIXm4zehwN9m7YZ4Z'

// Endpoint for payment intent webhook....
router.post('/webhook', (req, res)=> {
  const event = req.body

// If there's an error...
  if (req.error) {
    log(err, 'red')

    res.status(400).end()
    return
  }

  let intent = null
  switch (event.type) {
    case 'payment_intent.succeeded':
      intent = event.data.object
      log(`Payment Succeeded: ${intent.id}`, 'green')
      break
    case 'payment_intent.payment_failed':
      intent = event.data.object
      const message = intent.last_payment_error && intent.last_payment_error.message
      log('Payment Failed:', intent.id, message)
      break
  }

  res.sendStatus(200)
})








// // Stripe endpoint...
// router.post('/charge', async (req, res) => {
//   console.log('this is the amount: ' + req.body.amount)
//   console.log('this is the token: ' + req.body.token)
//   console.log('this is the email: ' + req.body.email)
//
//   try {
//     let {status} = await stripe.charges.create({
//       amount: req.body.amount * 100,
//       currency: "usd",
//       description: "Trees for Tigers Donation",
//       source: req.body.token,
//       receipt_email: req.body.email
//     })
//
//     res.json(status)
//   } catch (err) {
//     console.log(err)
//     res
//        .json({
//          error: true,
//          type: err.type,
//          code: err.code,
//          param: err.param,
//          message: err.message
//        })
//        .status(500)
//        .end()
//   }
// })



module.exports = router
