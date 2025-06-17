import React from "react";

import CurrentNorm from "../components/blog/CurrentNorm";
import TablesRenderer from "../components/blog/TablesRenderer";

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-stone-950 to-slate-800">
      <CurrentNorm />
      <TablesRenderer />
    </div>
  );
};

export default Blog;
