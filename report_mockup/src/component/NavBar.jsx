import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Wärtsilä_Logo from "../assets/image/Wärtsilä_Logo.svg";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navHeight">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Wärtsilä_Logo}
            alt="Wartisila Logo"
            height="40px"
            className="me-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">FORM</Nav.Link>
            <Nav.Link href="#link">REPORT</Nav.Link>
            <NavDropdown title="PROPULSION SYSTEM" id="basic-nav-dropdown">
              <NavDropdown.Item href="#THRUSTER/3.1">THRUSTER</NavDropdown.Item>
              <NavDropdown.Item href="#GEAR BOXES/3.2">
                GEAR BOXES
              </NavDropdown.Item>
              <NavDropdown.Item href="#OIL DISTRIBUTION BOXES/3.3">
                OIL DISTRIBUTION BOXES
              </NavDropdown.Item>
              <NavDropdown.Item href="#METALLURGICAL REPAIR/3.4">
                METALLURGICAL REPAIR
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="STROKE ENGINE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#CYLINDER HEAD/3.1">
                CYLINDER HEAD
              </NavDropdown.Item>
              <NavDropdown.Item href="#CYLINDER COVER/3.2">
                CYLINDER COVER
              </NavDropdown.Item>
              <NavDropdown.Item href="#INJECTION EQUIPMENT/3.3">
                INJECTION EQUIPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="#PUMP/3.4">PUMP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
