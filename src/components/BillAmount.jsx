import React from 'react';

const BillAmount = () => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor="billAmount"
          className="text-sm text-v-dark-cyan font-bold mb-1"
        >
          Bill $
        </label>
        <input
          type="text"
          inputMode='numeric'
          name="amount"
          id="bill"
          className="bg-very-light-cyan h-10 rounded-md outline-dark-gray-cyan cursor-pointer mb-5 text-right p-2"
        />
      </div>
    </>
  );
};

export default BillAmount;
