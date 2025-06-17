import React from "react";
import ButonRenderLink from "../components/blog/ButonRenderLink";

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-stone-950 to-slate-800 pt-3 pb-3">
      <h1 className="text-white text-2xl text-center mb-6 mt-3 p-2 w-1/3 mx-auto shadow shadow-purple-500">Normatividad Actual</h1>
      <div className="grid grid-cols-2 h-96 ">
        <div className="w-2/3 h-80 mx-auto">
          <ButonRenderLink
            text={"RESOLUCIÓN 2107 DE 2019"}
            url={
              "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30042225"
            }
          />
        </div>
        <div className="w-2/3 h-80 mx-auto">
          <ButonRenderLink
            text={"RESOLUCIÓN 2109 DE 2019"}
            url={
              "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30042047"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
