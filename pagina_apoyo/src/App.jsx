import { useState, useEffect } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/template/NavBar";
import Footer from "./components/template/Footer";
import LogServices from "./pages/LogServices";
import Confect from "./pages/Confect";
import Blog from "./pages/Blog";

function App() {
  const [currentView, setCurrentView] = useState("confect");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home setCurrentView={setCurrentView} key="home" />;
      case "about":
        return <About key="about" />;
      case "contact":
        return <Contact key="contact" />;
      case "log_services":
        return <LogServices key="log_services" />;
      case "confect":
        return <Confect key="confect" />;
      case "blog":
        return <Blog key="blog" />;
      default:
        return <Home setCurrentView={setCurrentView} key="default" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 to-slate-800 ">
      <NavBar onSelect={setCurrentView} currentView={currentView} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
