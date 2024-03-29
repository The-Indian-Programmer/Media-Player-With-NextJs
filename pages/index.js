import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex items-center justify-center h-screen ">
          <div className="container">
            <div className="bg-white p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Work <span className="text-indigo-600">On Progress</span>
                </h2>
                <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
                <p className="text-md md:text-xl mt-10">
                  <a
                    className="hover:underline"
                    href="https://www.quicktoolz.com"
                  >
                    Next Player
                  </a>{" "}
                  is under contruction.Please wait for some time
                </p>
              </div>
              <div className="flex flex-wrap mt-10 justify-center">
                <div className="m-3">
                  <a
                    href="https://github.com/The-Indian-Programmer"
                    className="md:w-32 bg-white tracking-wide text-black font-bold rounded border-2 border-black  hover:bg-black hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    <span className="mx-auto">GitHub</span>
                  </a>
                </div>
                <div className="m-3">
                  <a
                    href="https://www.facebook.com/sumit.kosta.589"
                    className="md:w-32 bg-white tracking-wide text-blue-500 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    <span className="mx-auto">Facebook</span>
                  </a>
                </div>
                <div className="m-3">
                  <a
                    href="https://www.instagram.com/coding_sumit/"
                    className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    <span className="mx-auto">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
