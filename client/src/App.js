import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";
import NavigationBar from "./components/Common/NavigationBar";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <NavigationBar />
        <Home />
        <Footer />
      </Container>
    );
  }
}

export default App;
