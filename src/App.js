import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import Title from "./Components/Title";
import Services from "./Components/Services";
import Carousel from "./Components/Carousel";
import CustomCards from "./Components/CustomCards";
import SignupForm from "./Components/SignupForm";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Heading />
      <Routes>
        <Route path="" element={<Title />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/customcards" element={<CustomCards />} />
        <Route path="/signupform" element={<SignupForm />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
