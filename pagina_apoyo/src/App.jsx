import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/template/NavBar";
import Footer from "./components/template/Footer";
import LogServices from "./pages/LogServices";
import Confect from "./pages/Confect";
import Blog from "./pages/Blog";

function App() {
  const [currentView, setCurrentView] = useState("blog");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home setCurrentView={setCurrentView} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "log_services":
        return <LogServices />;
      case "confect":
        return <Confect />;
      case "blog":
        return <Blog />;
      default:
        return <Home setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onSelect={setCurrentView} currentView={currentView} />
      <div>{renderView()}</div>
      <Footer />
    </div>
  );
}

export default App;
