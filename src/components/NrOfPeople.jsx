import React from 'react';

const NrOfPeople = () => {
  return (
    <>
      <div className="">
        <label
          htmlFor="nrOfPeople"
          className="text-sm text-v-dark-cyan font-bold mb-1"
        >
          Number of People
        </label>
        <input
          type="text"
          name="nrOfPeople"
          id="nrOfPeople"
          className="bg-very-light-cyan h-10 rounded-md outline-dark-gray-cyan cursor-pointer mb-5 w-full text-right p-2"
        />
      </div>
    </>
  );
};

export default NrOfPeople;
