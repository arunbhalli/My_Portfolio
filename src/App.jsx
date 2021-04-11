import React from "react";
import Header from './jsxfile/Header';
import Footer from './jsxfile/Footer';
import About from './jsxfile/About';
import Contact from './jsxfile/Contact.jsx';
import Projects from './jsxfile/Projects';
import CV from "./jsxfile/CV";
import {Redirect, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <Route
      exact
      path="/"
      render={() => {
        return <Redirect to="/about" />;
      }}
    />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/cv" component={CV}></Route>
        
      </Switch>
      <Footer />
    </>
  );
};
export default App;
