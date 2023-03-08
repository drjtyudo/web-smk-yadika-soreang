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
          <Nav className="nav-link ms-auto fw-semibold">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/profile"}>Profile</Link>
            </Nav.Link>
            <NavDropdown title="Jurusan" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/rpl"}>
                  <p>RPL</p>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/akutansi"}>
                  <p>Akutansi</p>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/hotel"}>
                  <p>Perhotelan</p>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {window.innerWidth > 430 && (
              <Button
                className="CTA-ppdb ms-5"
                href="https://forms.gle/kFauTzPghcec6wXw6"
              >
                PPDB
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
