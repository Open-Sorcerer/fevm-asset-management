import Head from "next/head";
import Image from "next/image";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
      <footer className="bg-[#f2dbd0] fixed w-full h-fit bottom-0 z-[1000]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <h1 className="text-2xl text-black">Made with ❤️ for FilBanglore</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// fdeab1
