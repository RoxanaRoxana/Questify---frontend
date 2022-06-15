import React from "react";

import { Landing, Layout } from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/Questify" element={<Landing />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      />

      <Route
        path="*"
        element={<h1 className="wrong-address">There's nothing here: 404!</h1>}
      />
    </Routes>

    // <div>
    // <Landing/>
    // <div className="app_container">
    //   <Navbar />
    //   <div className="section_container">
    //     <TodayContainer />

    //     <TomorrowContainer />
    //     <DoneContainer />
    //     <NewQuest />

    //   </div>
    //   </div>
    //   </div>
  );
};

export default App;
