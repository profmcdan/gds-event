import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  NavbarBrand,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-nav">
        <p className="footer-text">&copy; 2019 GDSEvent</p>
      </div>
    );
  }
}
