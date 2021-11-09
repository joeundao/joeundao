import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import JoeunDAOLogo from "../public/joeundao-logo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joeun DAO</title>
        <meta
          name="description"
          content="Decentrailzed Governance Community for Good."
        />
        <link rel="icon" href="/joeundao-logo.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src={JoeunDAOLogo}
          width={200}
          height={200}
          alt="Joeun DAO Logo"
        />
        <p className={styles.title}>Joeun DAO (좋은다오)</p>
        <small className={styles.description}>
          Decentralized Governance Community for Good.
        </small>
      </main>
    </div>
  );
};

export default Home;
