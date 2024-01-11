const express = require('express')
const router = express.Router()
const stripe = require('./handler/stripe')

router.get('/test', (req, res) => {
    res.send("Test Passed")
})

router.get('/stripe/config', stripe.config)
router.post('/stripe/create-payment-intent', stripe.createPaymentIntent)
router.post('/stripe/webhook', stripe.webhook)

module.exports = router