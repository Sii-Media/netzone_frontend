import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCurrency } from "../../store/currencySlice";
import ReactFlagsSelect from "react-flags-select";
import "./Flags.css";
const CurrencyFlagSelect = () => {
  // Fetch the selectedCurrency from the Redux store
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  // Dispatch the setSelectedCurrency action to update the Redux state
  const dispatch = useDispatch();

  return (
    <div className="mr-2">
      <ReactFlagsSelect
        selectedSize={14}
        optionsSize={18}
        countries={["AE", "SA", "EG", "JO", "IQ"]}
        customLabels={{ AE: "AED", SA: "SAR", EG: "EGP", JO: "	JOD", IQ: "IQD" }}
        placeholder="Select Currency"
        selected={selectedCurrency} // Set the selected currency based on the Redux state
        onSelect={(countryCode) => {
          // Dispatch the action to update the selected currency in Redux
          dispatch(setSelectedCurrency(countryCode));
        }}
      />
    </div>
  );
};

export default CurrencyFlagSelect;
