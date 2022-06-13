import React from "react";
import { TodayContainer, TomorrowContainer, DoneContainer } from "./containers";
import { Landing, Navbar, NewQuest } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
    <Landing/>
    <div className="app_container">
      <Navbar />
      <div className="section_container">
        <TodayContainer />

        <TomorrowContainer />
        <DoneContainer />
        <NewQuest />
  
      </div>
      </div>
      </div>
  );
};

export default App;
