import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BmiCalc from "./comps/pages/BmiCalculator";
import Landing from "./comps/pages/Landing";
import CalorieCalc from "./comps/pages/CalorieCounter";
import LogIn from "./comps/pages/LogIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route path="/bmicalc" element={<BmiCalc />} />
        <Route path="/caloriecounter" element={<CalorieCalc />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
