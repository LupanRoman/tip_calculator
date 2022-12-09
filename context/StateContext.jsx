import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {

  let percentage;
  let tipPerPers;
  let totalBillAmountPerPers;

  const getPercentage5 = () => {
    percentage = 0.05;
    console.log(percentage);
  };

  const getPercentage10 = () => {
    percentage = 0.1;
    console.log(percentage);
  };

  const getPercentage15 = () => {
    percentage = 0.15;
    console.log(percentage);
  };

  const getPercentage25 = () => {
    percentage = 0.25;
    console.log(percentage);
  };

  const getPercentage50 = () => {
    percentage = 0.5;
    console.log(percentage);
  };

  const calculate = () => {
    const billAmount = document.getElementById('bill').value;
    const numberOfPeople = document.getElementById('nrOfPeople').value;
    const resultPerPers = document.getElementById('amountPerPers');
    const totalResPerPers = document.getElementById('totalAmountPerPers');

    const split = billAmount / numberOfPeople;
    tipPerPers = split * percentage;
    totalBillAmountPerPers = split + tipPerPers;

    resultPerPers.innerHTML = '$' + tipPerPers;
    totalResPerPers.innerHTML = '$' + totalBillAmountPerPers;

  };

  return (
    <StateContext.Provider
      value={{
        calculate,
        getPercentage5,
        getPercentage10,
        getPercentage15,
        getPercentage25,
        getPercentage50,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
