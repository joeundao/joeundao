import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
          <div className="text-2xl">Joeun DAO (좋은다오)</div>
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
            <Link href="https://snapshot.org/#/joeundao.eth">
              <button className="px-12 py-5 text-white transition duration-300 ease-in-out delay-150 rounded-lg shadow-md bg-rose-500 hover:-translate-y-1 hover:bg-rose-600">
                Join Joeun DAO Snapshot
              </button>
            </Link>
          </div>
          <div className="w-2/3 mt-20">
            <span className="text-3xl">How DAO is different?</span>
            <p className="mt-10 leading-relaxed text-gray-500">Simple.</p>
            <p className="leading-relaxed text-gray-500">No middle man.</p>
            <p className="leading-relaxed text-gray-500">
              Donations go directly to recipient.
            </p>
          </div>
          <div className="w-2/3 mt-20">
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
            <p className="leading-relaxed text-gray-500">
              NFT certificate for every gift.
            </p>
            <p className="leading-relaxed text-gray-500">
              Transparency on blockchain.
            </p>

            <div className="mt-20">
              <Link href="https://twitter.com/joeundao">
                <a>@JoeunDAO</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
