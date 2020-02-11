import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NoMatch from "./Components/NoMatch";
import Layout from "./Components/Layout";
import './App.css';

  // `React.Fragment` can be used in place of `div` for component wrapper

  // Set Up a `Router` with a `Switch` element to select `Route` paths to change between rendered components or page content.

  // Paths and Components are relative and can be named anything. The `NoMatch` component is in place without a path, acting as a catch for any path not connected to a component.

  // Navigation Elements, such as `Link`, should be placed WITHIN the `Router` tag to use "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
