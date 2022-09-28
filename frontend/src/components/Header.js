import {Container, Navbar, Nav } from 'react-bootstrap';
import { logout } from './actions'
import { Link } from "react-router-dom";
const Header=({currUser, setCurrUser})=>{
  
  return (
   <div>
   <Navbar collapseOnSelect bg="light" expand='xs' fixed="top"  >
      <Container>

        <Navbar.Brand className="font-face-cg" style={{color: 'green', fontSize:'30px', padding:'0px'}} as={Link} to='/' >
          Zoo Logic
        </Navbar.Brand>
        {currUser ?
          <Navbar.Toggle  style={{background:'green', color:'white'}} >{currUser.username[0]}</Navbar.Toggle>
          :
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        }
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
              {!currUser && <Nav.Link href="#user" as={Link} to='/'>Login/Signup</Nav.Link>}
              <Nav.Link href="#gamelist" as={Link} to="/gamelist" >Games</Nav.Link>
              <Nav.Link href="#score" as={Link} to="/score" >Score</Nav.Link>
              <Nav.Link href="#about" as={Link} to="/about"  >About the Game</Nav.Link>
              {currUser && <Nav.Link href="#logout"  onClick={()=>logout(currUser.id, setCurrUser)}>Logout</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
   </Navbar>

   </div>
  
  );
}

export default Header;