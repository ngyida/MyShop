require('dotenv').config('../.env')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

const config = (req, res) => {
    res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY, })
}

const createPaymentIntent = async (req, res) => {
    const { currency, amount, paymentMethodOptions, } = req.body
    const params = {
        automatic_payment_methods: { enabled: true, },
        amount: amount,
        currency: currency,
    }
    if (paymentMethodOptions) {
        params.payment_method_options = paymentMethodOptions
    }

    try {
        const intent = await stripe.paymentIntents.create(params)
        res.json({
            client_secret: intent.client_secret,
        })
    } catch (e) {
        return res.status(400).send({
            error: {
              message: e.message,
            },
        });    
    }
}

const webhook = async (req, res) => {
    let event = req.body
  
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        handlePaymentIntentSucceeded(paymentIntent)
        break;
      default:
        console.log(`Unhandled event type ${event.type}.`)
    }
  
    res.send();
};

const handlePaymentIntentSucceeded = (paymentIntent) => {
    console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
}


module.exports = {
    config,
    createPaymentIntent,
    webhook,
}