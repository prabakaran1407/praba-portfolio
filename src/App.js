import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/nav-bar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
