import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import {Switch,Route} from "react-router-dom"
import "./index.css";
const App = () => {
  return (
    <>
      <Header />
      <switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </switch>
      <Footer />
    </>
  );
};
export default App;
