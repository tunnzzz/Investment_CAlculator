import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Results from './Components/Results';
import UserInput from './Components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const inputIsValid = userInput.duration >= 1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
      < Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="centre">Pleasee Enter the Duration value Greater than zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </>

  );
}

export default App;
