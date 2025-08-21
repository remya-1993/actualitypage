import React from "react";
import Home from "./Home";
import Hero from "./Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import VantaNet from "./components/VantaNet";
import Team from "./Team";

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <div className="content">
            <Home />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>

        {/* <About /> */}
      
    </div>
  );
}

export default App;
