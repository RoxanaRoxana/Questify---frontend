import Landing from '../src/Components/landing/Landing'
import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";


const Landing = lazy(() => import("./Components/Landing/Landing"));
const Layout = lazy(() => import("./Components/Layout/Layout"));
const NewQuest = lazy(() => import("./Components/NewQuest/NewQuest"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/Questify" element={<Landing/>} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Layout/>
              <NewQuest/>
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

  );
};

export default App;
