import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import JoeunDAOLogo from "../public/joeundao-logo.png";
// import Web3 from "web3";
// import Web3Modal from "web3modal";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joeun DAO</title>
        <meta name="description" content="Decentrailzed Community for Good." />
        <link rel="icon" href="/joeundao-logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div className="md:container md:mx-auto px-10">
          <div className="mt-28">
            <Image
              src={JoeunDAOLogo}
              width={100}
              height={100}
              placeholder="blur"
              alt="Joeun DAO Logo"
            />
          </div>
          <div className="text-2xl">Joeun DAO (좋은다오)</div>
          <div>
            <small className="text-gray-500">
              Decentralized Community for Good.
            </small>
          </div>
          <p className="text-5xl py-10 leading-relaxed text-gray-400">
            Joeun DAO is a community of good humans trying to do random acts of
            kindness worldwide. We believe kind acts have superpowers.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
