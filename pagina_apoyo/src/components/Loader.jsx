import React from "react";

const Loader = () => (
  <div className="fixed inset-0 z-50 bg-fondo backdrop-blur-sm flex items-center justify-center">
    <div className="w-4/5 h-50 grid grid-rows-2 text-texto text-4xl">
      <div className="flex justify-center">
        <h1 className="w-fit text-center p-2 h-20  rounded-xl animate-glow ">
          Apoyo Logístico ZF
        </h1>
      </div>
      <div className="flex justify-center">
        <span className="inline-flex space-x-3 text-6xl">
          <span className="animate-bounce [animation-delay:0ms]">.</span>
          <span className="animate-bounce [animation-delay:200ms]">.</span>
          <span className="animate-bounce [animation-delay:400ms]">.</span>
        </span>
      </div>
    </div>
  </div>
);

export default Loader;
