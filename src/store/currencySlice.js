import { createSlice } from "@reduxjs/toolkit";

// Function to get the "cur" item from LocalStorage
const getCurrencyFromLocalStorage = () => {
  const currency = localStorage.getItem("cur");
  return currency || "AE"; // Default value "AE" if "cur" doesn't exist in LocalStorage
};

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    selectedCurrency: getCurrencyFromLocalStorage(), // Get currency from LocalStorage or default to "AE"
  },
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
      // Update the LocalStorage when selectedCurrency changes
      localStorage.setItem("cur", action.payload);
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;
export default currencySlice.reducer;
