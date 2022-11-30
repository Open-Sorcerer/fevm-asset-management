import Head from "next/head";
import Image from "next/image";

import SplineObj from "../components/SplineObj";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        {/* <SplineObj scene={'https://prod.spline.design/eBcxlYl5eV3WlaMm/scene.splinecode'}/> */}
        <SplineObj scene={'https://prod.spline.design/DxJImpAG0NRWpxwQ/scene.splinecode'} />
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
