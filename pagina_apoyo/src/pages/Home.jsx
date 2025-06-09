import React from "react";
import ModelRender from "../util/ModelRender";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div style={{backgroundColor:"red", width:"100%"}}>
        <ModelRender
          modelPath="/models/montacargas.glb"
          width={600}
          height={400}
        />
      </div>
    </>
  );
};

export default Home;
