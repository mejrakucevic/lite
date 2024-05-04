import React, { useState, useEffect } from "react";
import "../BmiCalc.css";

function Main() {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reset = () => {
    window.location.reload();
  };

  const handleCalculations = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid height/weight");
    } else {
      let bmiFormula = weight / (height / 100) ** 2;
      setBmi(bmiFormula.toFixed(2));
    }
  };

  useEffect(() => {
    if (bmi) {
      if (bmi <= 18.5) {
        setMsg("You are underweight");
        document.getElementById("result").style.backgroundColor = "red";
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMsg("You're at a healthy weight!🎉");
        document.getElementById("result").style.backgroundColor = "#36581b";
      } else if (bmi >= 25) {
        setMsg("You're overweight!");
        document.getElementById("result").style.backgroundColor = "red";
      }
    }
  }, [bmi]);

  return (
    <div>
      <>
        <body>
          <form onSubmit={handleCalculations}>
            <h1>BMI Calculator</h1>
            <div className="user-input">
              <h4>Age</h4>
              <input
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
              <div className="radios">
                <h4>Gender</h4>
                <input type="radio" name="Male" id="rad1"></input>
                <label htmlFor="rad1">Male</label>
                <input type="radio" name="Female" id="rad2"></input>
                <label htmlFor="rad2">Female</label>
              </div>
              <div className="w">
                <h4>Height</h4>
                <input
                  type="number"
                  placeholder="                                   170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                ></input>
              </div>{" "}
              <div className="w">
                <h4>Weight</h4>
                <input
                  type="number"
                  placeholder="                                     65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                ></input>{" "}
              </div>
              <br />
              <div className="btns">
                <button type="submit">Calculate</button>
                <button onClick={reset} type="button">
                  Reset
                </button>
              </div>
            </div>{" "}
          </form>
          <div className="results" id="result">
            <h3>Your BMI is : {bmi}</h3>
            <p className="p-msg">{msg}</p>{" "}
          </div>
        </body>
      </>
    </div>
  );
}

export default Main;
