import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { logout } from './actions'
import { Link } from "react-router-dom";

function Header({currUser, setCurrUser}){
  const handleLogout=()=>{
    logout(currUser.id, setCurrUser)
  }
  return (
    <Navbar bg="light" expand="false">
      <Container>
        <Navbar.Brand as={Link} to="/games/1"><h1>Zoo Logic</h1></Navbar.Brand>
        {currUser && 
            <DropdownButton align="end" title={currUser.username} id="dropdown-menu-align-end">
  
                <Dropdown.Item as={Link} to="/gamelist">Game</Dropdown.Item>
                <Dropdown.Item as={Link} to="/score">Score</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Button} onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
        }      
      </Container>
    </Navbar>
  );
}

export default Header;