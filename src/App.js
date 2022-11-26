import React from "react";
import Navbar from "./components/navbar/Navbar";
import Cta from "./components/cta/Cta";
import Brand from "./components/brand/Brand";
import "./App.css";

import {
  Footer,
  Blog,
  Features,
  Header,
  Posiblity,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
