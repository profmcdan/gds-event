import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
