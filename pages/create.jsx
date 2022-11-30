import Head from "next/head";
import Image from "next/image";

import LandingPage from "../components/LandingPage";
const Create = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <Head>
        <title>Create Vault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
};

export default Create;

// fdeab1
