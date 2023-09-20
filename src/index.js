import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import createPaymentIntent from "./stripe";
const stripKey = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(stripKey);
window.localStorage.setItem("cur", "AE");

async function initializeStripe() {
  try {
    let amount = 0;
    if (window.location.href.includes("cart")) {
      amount = localStorage.getItem("lastTotalPrice") * 100;
    }
    if (window.location.href.includes("advertisement")) {
      if (window.location.href.includes("add")) {
        amount = localStorage.getItem("adFees") * 100;
      } else {
        console.log(true);
        amount = localStorage.getItem("adPrice") * 100;
      }
    }
    if (window.location.href.includes("deals")) {
      amount = localStorage.getItem("dealFinalPrice") * 100;
    }
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

    const paymentIntentData = await createPaymentIntent(amount.toString(), cur);

    const options = {
      // Use the clientSecret from paymentIntentData
      clientSecret: paymentIntentData.client_secret,
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Provider store={store}>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </Provider>
    );
  } catch (error) {
    // Handle any errors that might occur during the fetch or processing
    console.error(error);
  }
}

initializeStripe();
