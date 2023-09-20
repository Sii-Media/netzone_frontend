const createPaymentIntent = async (amount, currency) => {
  try {
    const body = {
      amount: amount,
      currency: currency,
    };

    const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer sk_test_51NcotDFDslnmTEHTPCFTKNDMtYwf06E9qZ0Ch3rHa8kI6wbx6LPPTuD0qmN3JG2MF9MtoSr8JjmAfwcxNECDaBvZ00yMpBm3f1",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    });

    return await response.json();
  } catch (err) {
    throw new Error(err.toString());
  }
};

export default createPaymentIntent;
