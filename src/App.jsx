import React, { useContext } from 'react';
import StateContext from '../context/StateContext';
import BillAmount from './components/BillAmount';
import NrOfPeople from './components/NrOfPeople';
import Results from './components/Results';
import TipPer from './components/TipPer';

const App = () => {
  // const {increase} = useContext(StateContext);

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-between md:justify-around bg-light-gray-cyan">
        <div className="h-32 md:h-2 flex items-center font-bold text-v-dark-cyan text-2xl tracking-space">
          <h5>
            SPLI<br></br>TTER
          </h5>
        </div>
        <div className="h-full bg-white rounded-tl-3xl rounded-tr-3xl md:rounded-3xl p-6 md:flex md:gap-10 md:h-96">
          <div className="">
            <BillAmount />
            <TipPer />
            <NrOfPeople />
          </div>
          <div>
            <Results />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
