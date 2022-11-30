import Head from "next/head";
import Image from "next/image";

import SplineObj from "../components/SplineObj";
const Home = () => {
  return (
    <div>
      <Head>
        <title>FEVM Asset Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <SplineObj scene={"scene.splinecode"} />
        {/* <SplineObj scene={'https://prod.spline.design/DxJImpAG0NRWpxwQ/scene.splinecode'} /> */}
      </div>
      <div className="h-fit w-full lg:w-1/2 xl:w-1/4 absolute left-2 sm:left-32 top-2 sm:top-10 z-100 text-white flex flex-col gap-5 sm:gap-6 bg-black/10 backdrop-blur-md rounded-lg p-3 sm:p-10 ">
        <div className="ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl text-purple-900 bold md:mb-10">
          FEVM Asset Management
        </div>
        <p className="text-black text-xl font-semibold">
          FEVM Asset Management is a decentralized asset management platform
          built on Filecoin and Filecoin VM.
        </p>
      </div>

      <footer className="bg-[#f2dbd0] w-full h-fit fixed bottom-0 z-[1000]">
        <div className="max-w-7xl mx-auto py-5 px-4 overflow-hidden sm:px-6 lg:px-8">
          <h1 className="text-2xl text-black">Made with ❤️ for FilBanglore</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// fdeab1
