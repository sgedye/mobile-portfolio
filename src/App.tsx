import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

import "./assets/scss/layout.scss";
import "./assets/scss/radio-toggler.scss";

function App() {
  return (
    <div className="App">
      <Helmet titleTemplate="%s | sgedye" />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
