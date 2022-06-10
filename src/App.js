import React from "react";
import { TodayContainer, TomorrowContainer, DoneContainer } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <div className="section_container">
        <TodayContainer />

        <TomorrowContainer />
        <DoneContainer />
      </div>
    </div>
  );
};

export default App;
