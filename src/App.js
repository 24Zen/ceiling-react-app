import React, { useState } from 'react';
import './App.css';  // Import App.css เพื่อใช้สไตล์ที่กำหนด


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);

    if (isNaN(floatNum1) || isNaN(floatNum2)) {
      alert('Please enter valid numbers.');
      return;
    }

    const intNum1 = Math.floor(floatNum1);
    const intNum2 = Math.floor(floatNum2);

    const up1 = Math.ceil(floatNum1);
    const up2 = Math.ceil(floatNum2);

    setResult(`Number of first fill is: ${intNum1} AND Number of first fill after up is: ${up1}
    Number of second fill is: ${intNum2} AND Number of second fill after up is: ${up2}`);
  };

  return (
    <div>
      <h1>Decimal Number Operations</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Decimal Number"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Decimal Number"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <h3>Results:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}


export default App;
