// NEXT
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// JOEUN
import JoeunDAOLogo from "../public/joeundao-logo.png";

// REACT
import { useState, useEffect } from "react";
import { useConnect } from "wagmi";

const PolygonWidget = dynamic(() => import("../components/PolygonWidget"), {
  ssr: false,
});

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

const Home: NextPage = () => {
  const isMounted = useIsMounted();
  const [{ data, error }, connect] = useConnect();

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

            <div className="mb-10">
              <PolygonWidget />
              {data.connectors.map((x) => (
                <button
                  className="w-full px-10 py-4 mb-5 mr-5 font-extrabold transition duration-300 ease-in-out delay-150 rounded-lg shadow text-cyan-900 bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-200 md:w-fit"
                  disabled={isMounted ? !x.ready : false}
                  key={x.id}
                  onClick={() => connect(x)}
                >
                  {isMounted ? x.name : x.id === "injected" ? x.id : x.name}
                  {isMounted ? !x.ready && " (unsupported)" : ""}
                </button>
              ))}
              {error && (
                <div className="mt-5 text-rose-800">
                  {error?.message ?? "Failed to connect"}
                </div>
              )}
            </div>
            <Link href="https://snapshot.org/#/joeundao.eth">
              <button className="px-12 py-5 font-extrabold transition duration-300 ease-in-out delay-150 rounded-lg shadow text-rose-800 bg-rose-50 hover:bg-rose-100 active:bg-rose-200">
                Join Joeun DAO Snapshot
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
