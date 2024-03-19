import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar = () => {
  return (
    <div >

<Navbar expand="lg" className="">
      <Container fluid className='container'>
        <Navbar.Brand href="#">
        <img className='logo' src="/images/nikelogo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='fw-bold' href="#action1">Manu</Nav.Link>
            <Nav.Link className='fw-bold' href="#action2">Location</Nav.Link>
            <Nav.Link className='fw-bold' href="#action2">About</Nav.Link>
            <Nav.Link className='fw-bold' href="#action2">Contact</Nav.Link>
            
          
          </Nav>
          <Form className="d-flex">
            <Button variant="btn btn-danger">Log In </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      
    </div>
  )
}

export default NavBar
