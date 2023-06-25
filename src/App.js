import React, { useState } from "react";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact";


function App() {
  const [navLinks] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ]);
  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div style={{backgroundColor: '#6c757d'}}>
      <Header
        navLinks={navLinks}
        currentLink={currentNav}
        setCurrentLink={setCurrentNav}
      />
      <main id="primaryContainer">
        {currentNav === navLinks[0] && <About></About>}
        {currentNav === navLinks[3] && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;