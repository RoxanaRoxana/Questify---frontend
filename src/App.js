import React from "react";
import { TodayContainer, TomorrowContainer, DoneContainer } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <TodayContainer />
      
      <TomorrowContainer />
      <DoneContainer />
    </div>
  );
};

export default App;
