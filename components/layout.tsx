import Navbar from "./navbar";
import Head from "next/head";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Weather Live</title>
        <meta name="description" content="Weather Live" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-slate-600 bg-cover bg-center text-white">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
