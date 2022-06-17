import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "../slices/users";
import cardsReducer from "../slices/cards";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";
import localStorage from "redux-persist/lib/storage";

const reducers = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage: localStorage,
  blacklist: ["users.loading", "cards.loading"],
  rootReducer: reducers,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
