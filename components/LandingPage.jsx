import React, { useState } from "react";
import 'react-range-slider-input/dist/style.css';
import Slider from "./Slider";
const LandingPage = () => {
  const [distrib, setDistrib] = useState([0]);
  const [total, setTotal] = useState(0);
  const [numOfParty, setNumOfParty] = useState(1);
  const [value, setValue] = useState(0);
  const addMore = () => {
    setDistrib([...distrib, value]);
    setNumOfParty(numOfParty+1);
    console.log(distrib);
  }
  return (
    <div className="w-full h-full p-10 flex flex-col justify-start gap-5">
      <button
        onClick={() => addMore()}
        className="relative inline-block px-4 py-2 font-medium group w-96"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
        <span className="relative text-black">Add Participant</span>
      </button>
      <div className="w-full h-8 flex flex-col justify-start items-center gap-10 mt-10">
        {distrib.map((value, i) => {
          return (
            <div className="w-full h-full flex flex-row gap-5 justify-between items-center" key={i}>
              <div className="user-box">
                <div
                  className="relative inline-block px-4 py-2 font-medium group w-96"
                >
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-8 rounded text-black relative"
                    disabled={i!==numOfParty-1}
                    required
                  ></input>
                <label className="px-5">{"Address "+i+"*"}</label>
                </div>
              </div>
              <Slider total={total} setTotal={setTotal} disabled={i!==numOfParty-1} setValue={setValue}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default LandingPage;
