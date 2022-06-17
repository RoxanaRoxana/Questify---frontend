
import {CardQuest} from './components/Cards/CardQuest';
import React from 'react';

import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { lazy, Suspense } from "react";


const Landing = lazy(() => import("./components/Landing/Landing"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const NewQuest = lazy(() => import("./components/NewQuest/NewQuest"));

const App = () => {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Questify" element={<Landing />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Layout />
              <NewQuest />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <h1 className="wrong-address">There's nothing here: 404!</h1>
          }
        />
      </Routes>
    </Suspense>
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
