import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

// import { Provider } from "react-redux";
// import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

