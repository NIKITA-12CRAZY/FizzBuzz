import React, { useState } from 'react';

function Fizzbuzz() {
  const [result, setResult] = useState([]);

  function handleButtonClick() {
    let output = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push('FizzBuzz');
      } else if (i % 3 === 0) {
        output.push('Fizz');
      } else if (i % 5 === 0) {
        output.push('Buzz');
      } else {
        output.push(i);
      }
    }
    setResult(output);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Run Fizzbuzz</button>
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fizzbuzz;
