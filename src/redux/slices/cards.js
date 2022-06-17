import { createSlice } from "@reduxjs/toolkit";
import { createCard, deleteCard, getAllCards } from "../../services/api";

const initialState = {
  loading: false,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: {
    [getAllCards.pending]: (state) => {
      state.loading = true;
    },
    [getAllCards.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
      state.loading = false;
    },
    [createCard.fulfilled]: (state, action) => {
      state.cardsList.push(action.payload);
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
    },
  },
});

export default cardsSlice.reducer;
