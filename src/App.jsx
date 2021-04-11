import React from "react";
import Hello from './jsxfile/Hello';
import Header from './jsxfile/Header';
import Footer from './jsxfile/Footer';
import About from './jsxfile/About';
import Contact from './jsxfile/Contact.jsx';
import Projects from './jsxfile/Projects';
import {Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </switch>
      <Footer />
    </>
  );
};
export default App;
