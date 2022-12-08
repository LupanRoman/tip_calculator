import React, { useContext } from 'react';
import StateContext from '../../context/StateContext';

const Results = () => {
  const { calculate, tipPerPers, totalBillAmountPerPers } =
    useContext(StateContext);
  return (
    <>
      <div className="flex flex-col bg-v-dark-cyan p-5 rounded-xl md:w-80 md:h-full md:relative">
        <div className="flex justify-between h-12 md:h-24 items-center">
          <p className="text-white text-sm">Tip Amount</p>
          <h5 className="font-bold text-strong-cyan text-2xl md:text-3xl">
            $4.7
          </h5>
        </div>
        <div className="flex justify-between h-12 md:h-24 items-center mb-2">
          <p className="text-white text-sm">Total</p>
          <h5 className="font-bold text-strong-cyan text-2xl md:text-3xl">
            $32.79
          </h5>
        </div>
        <button
          onClick={calculate}
          className="bg-strong-cyan h-10 rounded-md font-bold text-v-dark-cyan text-xl md:absolute md:bottom-5 md:ml-auto md:mr-auto md:left-5 md:right-5"
        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default Results;
