import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ReactSlider from 'react-slider'
// import required modules
import { FreeMode, Pagination } from "swiper";
const LandingPage = () => {
  return (
    <div>
      <div className="w-full h-8 flex flex-col justify-start items-center gap-10 bg-red-500">
        <ReactSlider
          className="horizontal-slider w-full h-full bg-red-900 p-0"
          thumbClassName="example-thumb bg-black text-white"
          trackClassName="example-track bg-red-500"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          onChange={console.log}
        />
      </div>
      <footer className="bg-[#f2dbd0]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <h1 className="text-2xl text-black">Made with ❤️ for FilBanglore</h1>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
