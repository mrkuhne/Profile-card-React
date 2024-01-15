import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountIncrease = () => setCount((s) => s + 1 * step);

  const handleCountDecrease = () => setCount((s) => s - 1 * step);

  const handleStepIncrease = () => setStep((s) => s + 1);

  const handleStepDecrease = () => setStep((s) => s - 1);

  return (
    <div className="container">
      <div className="step">
        <button className="button" onClick={handleStepDecrease}>
          -
        </button>
        <span>Step: {step} </span>
        <button className="button" onClick={handleStepIncrease}>
          +
        </button>
      </div>
      <div className="counter">
        <button className="button" onClick={handleCountDecrease}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="button" onClick={handleCountIncrease}>
          +
        </button>
      </div>
      <span className="message">
        {count === 0 && `Today is ${date.toDateString()}`}
      </span>
      <span className="message">
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
      </span>
      <span className="message">
        {count < 0 && `${Math.abs(count)} days ago was ${date.toDateString()}`}
      </span>
    </div>
  );
};
