import React from "react";
import "./App.css";
import { Navbar } from "./components";
import {
  Header,
  AboutUs,
  Menu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  Contact,
  Footer,
} from "./containers";
const App = () => {
  return (
    <div className="App">
      <div style={{ minHeight: "100vh", background: "#0c0c0c" }}>
        <Navbar />
        <Header />
      </div>
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
