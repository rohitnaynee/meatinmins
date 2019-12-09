import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0eBpWwW0W59224uylYyF8Q1I00zSvvfd3M';

    const onToken = token => {
        console.log(token);
        alert('payment Successfull');
    }

    return (
        <StripeCheckout 
         label = 'Pay Now Online'
         name = 'MEAT IN MINS Ltd'
         billingAddress
         shippingAddress
         image ='/images/chicken-logo.png'
         description = {`Your total is ₹${price}`}
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {publishableKey}
        />
    )
};
export  default StripeCheckoutButton;