import React from "react";
// import { Menu } from "semantic-ui-react";
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
import logo from "../../logo.svg";

export default class NavBar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <Container>
        <Navbar
          collapseOnSelect
          className="bg-light justify-content-between"
          expand="lg"
          fixed="top"
        >
          <div className="row main-nav justify-content-between">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              gds-event
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Gallery</Nav.Link>
                <Nav.Link href="#link">Book an Event</Nav.Link>
                <NavDropdown title="Manage" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Active Events
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Past Events
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Reserves
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Container>
    );
  }
}
