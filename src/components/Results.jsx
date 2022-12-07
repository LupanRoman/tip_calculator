import React from 'react';

const Results = () => {
  return (
    <>
      <div className="flex flex-col bg-v-dark-cyan p-5 rounded-xl">
        <div className="flex justify-between h-12 items-center">
          <p className="text-white text-sm">Tip Amount</p>
          <h5 className="font-bold text-strong-cyan text-2xl">$4.27</h5>
        </div>
        <div className="flex justify-between h-12 items-center mb-2">
          <p className="text-white text-sm">Total</p>
          <h5 className="font-bold text-strong-cyan text-2xl">$32.79</h5>
        </div>
        <button className="bg-strong-cyan h-10 rounded-md font-bold text-v-dark-cyan text-xl">
          RESET
        </button>
      </div>
    </>
  );
};

export default Results;
