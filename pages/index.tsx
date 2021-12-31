import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
          <p className="text-5xl py-10 leading-normal text-gray-400 w-3/4">
            Joeun DAO is a community of good humans trying to do random acts of
            kindness worldwide. We believe kind acts have superpowers.
          </p>
          <div className="mt-20 w-2/3">
            <span className="text-3xl">How DAO is different?</span>
            <p className="mt-10 leading-relaxed text-gray-500">Simple.</p>
            <p className="leading-relaxed text-gray-500">No middle man.</p>
            <p className="leading-relaxed text-gray-500">
              Donations go directly to recipient.
            </p>
          </div>
          <div className="mt-20 w-2/3">
            <span className="text-3xl">Why Joeun DAO?</span>
            <p className="mt-10 leading-relaxed text-gray-500">
              Decide who to give together.
            </p>
            <p className="leading-relaxed text-gray-500">
              Two is better than one.
            </p>
            <p className="leading-relaxed text-gray-500">
              Use open source and non-custodial liquidity pool for earning
              interest.
            </p>

            <div className="mt-20">
              <Link href="https://twitter.com/joeundao">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 float-left"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  JoeunDAO
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
