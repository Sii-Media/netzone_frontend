import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import createPaymentIntent from "../../stripe";
const stripePromise = loadStripe(
  "pk_test_51NcotDFDslnmTEHTC1GIVWyuc6ZGAfhWvQFlyE7v6Pno2VZeZ8gAHlwFPP1Euj5Rqdxyo58LMdOuLTQKIazuD13G00cUhvtJLe"
);
const CheckOutFormPage = ({ toPayAmount }) => {
  async function initializeStripe() {
    try {
      const toStripeAmount = (toPayAmount * 100).toString();
      let cur = localStorage.getItem("cur");

      // Convert the currency code to the desired format
      switch (cur) {
        case "AE":
          cur = "AED";
          break;
        case "SA":
          cur = "SAR";
          break;
        case "EG":
          cur = "EGP";
          break;
        case "IQ":
          cur = "IQD";
          break;
        case "JO":
          cur = "JOD";
          break;
        default:
          cur = "USD";
      }

      const paymentIntentData = await createPaymentIntent(
        toStripeAmount.toString(),
        cur
      );

      const options = {
        // Use the clientSecret from paymentIntentData
        clientSecret: paymentIntentData.client_secret,
      };
      console.log(true);
      return <Elements stripe={stripePromise} options={options}></Elements>;
    } catch (error) {
      // Handle any errors that might occur during the fetch or processing
      console.error(error);
    }
  }
  initializeStripe();
};

export default CheckOutFormPage;
