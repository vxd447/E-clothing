import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStipe = price * 100;
  const publishableKey =
    "pk_test_51IyWwlSHGrm8kq5B9ks71lIPGqUu75yw4mW0oJ8Vvj9ztZHomNlSV1j32aDcxteLmh5uHw0u9olZPHOvC528gwiO00Fwuos0Pw";
  return (
    <StripeCheckout
      label="Pay Now"
      name="E- Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
