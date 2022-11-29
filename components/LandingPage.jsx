import React, { useState } from "react";
import 'react-range-slider-input/dist/style.css';
import Slider from "./Slider";
const LandingPage = () => {
  const [distrib, setDistrib] = useState([0]);
  const [total, setTotal] = useState(0);
  return (
    <div>
      <div className="w-full px-20 h-8 flex flex-col justify-start items-center gap-10">
        {distrib.map((item, i) => {
          return (
            <div className="w-full h-full flex flex-row gap-5 justify-start items-center">
              <div className="user-box">
              <input
                type="text"
                name="user_name"
                className="w-full px-8 rounded"
                required
              ></input>
              <label>Address*</label>
            </div>
              <Slider total={total} setTotal={setTotal}/>
            </div>
          )
        })}
      </div>
      <button onClick={()=>setDistrib([...distrib, 0])}>+</button>
    </div>
  );
};

export default LandingPage;
