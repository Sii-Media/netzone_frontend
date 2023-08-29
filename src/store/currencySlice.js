import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    selectedCurrency: "AE", // Initial state for selected currency code
  },
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
      // window.location.reload();
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;
export default currencySlice.reducer;
