import React from 'react';

const TipPer = () => {
  return (
    <>
      <div>
        <h6 className="text-sm text-v-dark-cyan font-bold mb-1">
          Select Tip %
        </h6>
        <div className="layout mb-5">
          <button className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan">
            5%
          </button>
          <button className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan">
            10%
          </button>
          <button className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan">
            15%
          </button>
          <button className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan">
            25%
          </button>
          <button className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan">
            50%
          </button>
          <button className="bg-very-light-cyan rounded-md font-bold h-8 text-xl text-v-dark-cyan active:bg-strong-cyan">
            Custom
          </button>
        </div>
      </div>
    </>
  );
};

export default TipPer;
