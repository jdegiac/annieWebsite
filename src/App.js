import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import './styles.css';


function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutMe />
   </div>
  );
}

export default App;