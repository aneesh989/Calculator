import React, { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }; 
  const C = () => {
    setResult(result.slice(0, -1));
  }
  const clear = () => {
    setResult("");
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700 text-center">Calculator</h1>
    <div className="bg-black mx-20 flex items-center flex-col m-2 p-2 ">
      <form>
        <input type="text" className="bg-lime-200 m-2 p-2" value={result} />
      </form>
      <div className="keyboard grid grid-cols-4 w-1/4">
        <button name="Clear" onClick={clear} className="btn  bg-slate-300 rounded-full m-2 ">AC</button>
          <button name="C" onClick={C} className="btn bg-slate-300 rounded-full m-2 " >C</button>
          <button name="%" onClick={handleClick} className="btn rounded-full bg-yellow-400 m-2">%</button>
        <button name="/" onClick={handleClick} className="btn rounded-full bg-yellow-400 m-2">/</button>
        <button name="7" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">7</button>
        <button name="8" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">8</button>
        <button name="9" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">9</button>
        <button name="*" onClick={handleClick} className="btn rounded-full bg-yellow-400 m-2">*</button>
        <button name="4" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">4</button>
        <button name="5" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">5</button>
        <button name="6" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">6</button>
        <button name="-" onClick={handleClick} className="btn rounded-full bg-yellow-400 m-2">-</button>
        <button name="1" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">1</button>
        <button name="2" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">2</button>
        <button name="3" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">3</button>
        <button name="+" onClick={handleClick} className="btn rounded-full bg-yellow-400 m-2">+</button>
        <button name="0" onClick={handleClick} className="btn rounded-full bg-gray-500 m-2 col-span-2 ">0</button>
        <button name="." onClick={handleClick} className="btn rounded-full bg-gray-500 m-2">.</button>
        <button name="=" onClick={calculate} className="btn rounded-full bg-yellow-400 m-2">=</button>
      </div>
      </div>
      </div>

  );
}

export default App;
