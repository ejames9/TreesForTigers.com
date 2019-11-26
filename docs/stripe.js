/*
stripe.js

This file deals with donation payment processing for the treesForTigers.com
site...

Author: Eric Foster
*/


const stripe = require('stripe')('sk_test_a3Up43VvKSwpQZF7TwznnZ2G00JwhYCuE6');

// (async ()=> {
//   const charge = await stripe.charges.create({
//     amount: 1000,
//     currency: 'usd',
//     source: 'tok_visa',
//     receipt_email: 'jenny.rosen@example.com'
//   });
//
//   console.log(charge)
// })();

(async ()=> {
  const charge = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    payment_method_types: [ 'card'],
    receipt_email: 'jenny.rosen@example.com'
  });

  console.log(charge)
})();
