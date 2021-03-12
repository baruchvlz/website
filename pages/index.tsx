import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Epsilon Community</title>
        <link rel="icon" href="/EC-Logo-v2-32.ico" />
      </Head>

      <main>
        Main
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  );
}
