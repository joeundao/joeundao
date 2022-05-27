// NEXT
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// JOEUN
import JoeunDAOLogo from "../public/joeundao-logo.png";

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
        <div className="px-10 mb-20 md:container md:mx-auto">
          <div className="mt-10">
            <Image
              src={JoeunDAOLogo}
              width={100}
              height={100}
              placeholder="blur"
              alt="Joeun DAO Logo"
            />
          </div>
          <div className="text-2xl">
            Joeun DAO (좋은다오) <span className="text-xs align-top">Beta</span>
          </div>
          <div>
            <small className="text-gray-500">
              Decentralized Community for Good.
            </small>
          </div>
          <div className="p-10 mt-10 bg-gray-100 rounded-lg lg:p-20 p-lg-20">
            <p className="w-3/4 mb-10 text-2xl leading-relaxed text-gray-400 sm:text-4xl sm:leading-relaxed">
              Joeun DAO is a community of good humans trying to do random acts
              of kindness worldwide. We believe kind acts have superpowers.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
