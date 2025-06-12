import React from "react";
import Landing from "../components/home/Landing";
import Buttons from "../components/home/Buttons";

const Home = ({ setCurrentView }) => {
  return (
    <>
      <Landing />
      <Buttons setCurrentView={setCurrentView} />
    </>
  );
};

export default Home;
