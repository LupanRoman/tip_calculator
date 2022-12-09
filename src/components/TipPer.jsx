import React, { useContext } from 'react';
import StateContext from '../../context/StateContext';

const TipPer = () => {
  const {
    getPercentage5,
    getPercentage10,
    getPercentage15,
    getPercentage25,
    getPercentage50,
  } = useContext(StateContext);
  return (
    <>
      <div>
        <h6 className="text-sm text-v-dark-cyan font-bold mb-1">
          Select Tip %
        </h6>
        <div className="layout mb-5">
          <button
            onClick={getPercentage5}
            className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan"
          >
            5%
          </button>
          <button
            onClick={getPercentage10}
            className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan"
          >
            10%
          </button>
          <button
            onClick={getPercentage15}
            className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan"
          >
            15%
          </button>
          <button
            onClick={getPercentage25}
            className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan"
          >
            25%
          </button>
          <button
            onClick={getPercentage50}
            className="bg-v-dark-cyan rounded-md font-bold h-8 text-xl text-white active:bg-strong-cyan"
          >
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
