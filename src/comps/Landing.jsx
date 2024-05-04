import React from "react";
import { Link } from "react-router-dom";
import "../comps/Landing.css";
import BmiCalc from "./pages/BmiCalculator";

function Landing() {
  return (
    <body>
      <div className="container">
        <h1>Welcome to WLEasy</h1>
        <Link to="/bmicalc">
          <button>Start</button>
        </Link>
      </div>
    </body>
  );
}

export default Landing;
