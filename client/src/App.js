import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Common/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
          </div>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
