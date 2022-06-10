import React, { useState } from 'react';

function UseState() {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputvalue] = useState('Linda')
  
    const handleDecrement = () => {
      counter > 0 &&
      setCounter (counter - 1)
    }
    const handleIncrement = () => {
      setCounter (counter + 1)
    }
  
    const handleChange = (e)=> {
      const newValue = e.target.value
      setInputvalue(newValue)
    }
  
    return (
      <div>
        <h1>useState</h1>
        <button onClick = {handleDecrement}>Decrement</button>
        {counter}
        <button onClick = {handleIncrement}>Increment</button>
        <div>
        <input type="text" placeholder='enter name...' onChange={handleChange} />
        {inputValue}
        </div>
      </div>
    );
  }
  
  export default UseState;
  