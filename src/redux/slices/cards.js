import { createSlice } from "@reduxjs/toolkit";
import { createCard, deleteCard, getAllCards } from "../../services/api";

const initialState = {
  loading: false,
  cardsList: null,
  error: {},
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
    [getAllCards.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [createCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardsList.cards.push(action.payload);
    },
    [createCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
    },
    [deleteCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default cardsSlice.reducer;
