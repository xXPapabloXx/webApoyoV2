import React from "react";
import Timeline from "../components/about/Timeline";
import Events from "../components/about/Events";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-stone-950 to-slate-900">
      <Timeline />
      <Events />
    </div>
  );
};

export default About;
