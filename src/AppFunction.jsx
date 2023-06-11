import { useState, useEffect } from "react";
import './app.scss'
import Header from "./components/Hearder";
import Result from "./components/Result";
import BmiForm from "./components/BmiForm";

function AppFunction() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="container">
      <Header/>
      <BmiForm
      height={height}
      weight={weight}
      setHeight={setHeight}
      setWeight={setWeight}
      setResult={setResult}
      />

      <Result result={result}/>
    </div>
  );
}

export default AppFunction;
