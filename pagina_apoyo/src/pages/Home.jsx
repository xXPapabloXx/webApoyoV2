import React from "react";
import ModelRender from "../util/ModelRender";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <ModelRender modelPath="/models/montacarga.glb" width={600} height={400} />
    </>
  );
};

export default Home;
