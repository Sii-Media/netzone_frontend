export const getCurrencySymbol = (currency) => {
  switch (currency) {
    case "AE":
      return "AED";
    case "SA":
      return "SAR";
    case "EG":
      return "EGP";
    case "JO":
      return "JOD";
    case "IQ":
      return "IQD";
    default:
      return "USD";
  }
};
