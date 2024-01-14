import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [currentOperation, setCurrentOperation] = useState(null);

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (operation) => {
    if (currentOperation !== null) handleEqualClick();
    setCurrentOperation(operation);
    setInput(input + operation);
  };

  const handleResetClick = () => {
    setInput('');
    setResult('');
    setCurrentOperation(null);
  };

  const handleEqualClick = () => {
    let calculation;
    const num1 = parseFloat(input.split(currentOperation)[0]);
    const num2 = parseFloat(input.split(currentOperation)[1]);

    switch (currentOperation) {
      case '+':
        calculation = num1 + num2;
        break;
      case '-':
        calculation = num1 - num2;
        break;
      case '*':
        calculation = num1 * num2;
        break;
      case '/':
        calculation = num1 / num2;
        break;
      default:
        return;
    }

    setResult(calculation);
    setInput(calculation.toString());
    setCurrentOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? <div className="result">{result}</div> : ''}
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;