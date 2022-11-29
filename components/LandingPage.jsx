import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
const LandingPage = () => {
  return (
    <div>
      <footer className="bg-[#f2dbd0]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <h1 className="text-2xl text-black">Made with ❤️ for FilBanglore</h1>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
