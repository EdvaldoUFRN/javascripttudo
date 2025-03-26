import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, inputValue]);
    setInputValue("");

  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type='submit'>Adicionar</button>
      </form>
      <ul>
        {list.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
