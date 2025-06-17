import React from "react";
import Landing from "../components/home/Landing";
import Buttons from "../components/home/Buttons";

const Home = ({ setCurrentView }) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-stone-950 to-slate-800 min-h-screen">
      <Landing />
      <Buttons setCurrentView={setCurrentView} />
    </div>
  );
};

export default Home;
