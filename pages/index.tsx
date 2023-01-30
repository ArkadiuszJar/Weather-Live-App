import type { NextPage } from "next";
import Forecast from "../components/forecast";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Forecast />
      <Forecast />
    </div>
  );
};

export default Home;
