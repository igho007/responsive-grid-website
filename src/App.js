import React from "react";

import "./App.scss";
import { Boxes, Footer, Info, Navbar, Showcase } from "./component";
import "./App.scss";
const App = () => {
  return (
    <div className="app__wrapper">
      <Navbar />
      <Showcase />
      <Boxes />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
