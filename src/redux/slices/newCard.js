import { createSlice } from "@reduxjs/toolkit";
import { createEmptyCard } from "../../services/api";

const initialState = {
  loading: false,
  newCardData: null,
  error: null,
};

export const cardsSlice = createSlice({
  name: "newCard",
  initialState,
  extraReducers: {
    [createEmptyCard.pending]: (state) => {
      state.loading = true;
    },
    [createEmptyCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.newCardData = [action.payload];
    },
    [createEmptyCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default cardsSlice.reducer;
