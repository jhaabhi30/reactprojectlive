import React from 'react';

import Nav from "../src/component/Navbar/Nav"
import Banner from './component/Banner/Banner';
import Features from './container/Features';
import "../src/component/Card/css/animate.css";
import "./component/Card/css/normalize.css";
import "./component/Card/css/queries.css";
import "./component/Card/css/ionicons.min.css";





function App() {
  return (
    <div>
      <Nav /> 
      <Banner />
      <Features />
      </div>
      
  );
}

export default App;
