import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo/logoyadika.png" alt="" />
          SMK Yadika Soreang
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/profile"}>Profile</Link>
            </Nav.Link>
            <NavDropdown title="Jurusan" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/rpl"}>RPL</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/akutansi"}>Akutansi</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/hotel"}>Perhotelan</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button className="CTA-ppdb ms-5">PPDB</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
