import React from "react";
import styles from "./app.css";
import { Footer, Blog, Possibility, WhatGPT3, Header, Features } from "./pages";
import { Cta, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
