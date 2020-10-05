import {Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'

export default class HomeNav extends React.Component {
    render(){
      return (
        <div>
          <Navbar bg="light" expand="lg" id="nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about-me">About Me</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
      }
  }