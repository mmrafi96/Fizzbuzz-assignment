
import React, { useState } from "react";
import FizzBuzzInput from "./components/FizzBuzzInput";
import ResultDisplay from "./components/ResultDisplay";
import axios from "axios";
import "./App.css";

const App = () => {
  const [results, setResults] = useState([]);

  const handleFizzBuzzSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:3001/fizzbuzz", {
        values,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error processing FizzBuzz:", error);
    }
  };

  return (
    <div className="App">
      <h1>FizzBuzz Application</h1>
      <FizzBuzzInput onSubmit={handleFizzBuzzSubmit} />
      <ResultDisplay results={results} />
    </div>
  );
};

export default App;
