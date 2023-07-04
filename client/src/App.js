import React, { useState, useEffect } from "react";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./Assets/global-stylesheet/style.css";

function App() {
  const [navLinks] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Resume" },
    { name: "Contact" },
  ]);
  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  // Scroll to the top of the page whenever the currentNav state changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentNav]);

  return (
    <div id="header-color">
      <Header
        navLinks={navLinks}
        currentLink={currentNav}
        setCurrentLink={setCurrentNav}
      />
      <main id="primaryContainer" style={{minHeight: 'calc(100vh - 180px)'}}>
        {currentNav === navLinks[0] && <About></About>}
        {currentNav === navLinks[2] && <Resume></Resume>}
        {currentNav === navLinks[1] && <Projects></Projects>}
        {currentNav === navLinks[3] && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
