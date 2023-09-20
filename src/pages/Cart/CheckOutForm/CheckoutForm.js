import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { RiSecurePaymentFill } from "react-icons/ri";

const CheckoutForm = ({ lastTotalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const returnURL = window.location.origin + "/deliveryInformation";
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: returnURL,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  console.log(true);
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-center mt-4`}>
      <PaymentElement />
      <button
        disabled={!stripe}
        className={`self-stretch px-2 py-1 bg-green-500 flex  items-center justify-between mt-4 rounded-md disabled:bg-white`}
      >
        <span className={`text-white`}>
          Pay <span className={`mx-2 font-medium`}>{lastTotalPrice}</span>{" "}
          Securely
        </span>

        <span>
          <RiSecurePaymentFill className={`text-white text-3xl`} />
        </span>
      </button>
    </form>
  );
};

export default CheckoutForm;
