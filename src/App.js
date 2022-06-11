import React from "react";
import { TodayContainer, TomorrowContainer, DoneContainer } from "./containers";
import { Navbar, NewQuest } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <div className="section_container">
        <TodayContainer />

        <TomorrowContainer />
        <DoneContainer />
        <NewQuest />
  
      </div>
    </div>
  );
};

export default App;
