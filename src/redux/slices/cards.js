import { createSlice } from "@reduxjs/toolkit";
import {
  createCard,
  deleteCard,
  editCard,
  getAllCards,
  updateCardStatus,
} from "../../services/api";

const initialState = {
  loading: "",
  cardsList: null,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: {
    [getAllCards.pending]: (state, action) => {
      state.loading = action.type;
    },
    [getAllCards.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
      state.loading = action.type;
      state.error = null;
    },
    [getAllCards.rejected]: (state, action) => {
      state.loading = action.type;
      state.error = action.payload.message;
    },
    [createCard.pending]: (state, action) => {
      state.loading = action.type;
    },
    [createCard.fulfilled]: (state, action) => {
      state.loading = action.type;
      state.cardsList.cards.push(action.payload.createdCard);
      state.error = null;
    },
    [createCard.rejected]: (state, action) => {
      state.loading = action.type;
      state.error = action.payload.message;
    },
    [editCard.pending]: (state, action) => {
      state.loading = action.type;
    },
    [editCard.fulfilled]: (state, action) => {
      state.loading = action.type;
      state.error = null;
    },
    [editCard.rejected]: (state, action) => {
      state.loading = action.type;
      state.error = action.payload.message;
    },
    [deleteCard.pending]: (state, action) => {
      state.loading = action.type;
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.loading = action.type;
      state.cardsList = action.payload;
      state.error = null;
    },
    [deleteCard.rejected]: (state, action) => {
      state.loading = action.type;
      state.error = action.payload.message;
    },
    [updateCardStatus.pending]: (state, action) => {
      state.loading = action.type;
    },
    [updateCardStatus.fulfilled]: (state, action) => {
      state.loading = action.type;
      state.error = null;
    },
    [updateCardStatus.rejected]: (state, action) => {
      state.loading = action.type;
      state.error = action.payload.message;
    },
  },
});

export default cardsSlice.reducer;
