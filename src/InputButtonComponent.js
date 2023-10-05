import React, { useState } from 'react';
import "./styles.css";
import App from './App';

const InputButtonComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputButtonComponent;