import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { logout } from './actions'
function Header({currUser, setCurrUser}){
  const handleLogout=()=>{
    logout(currUser.id, setCurrUser)
  }
  return (
    <Navbar bg="light" expand="false">
      <Container>
        <Navbar.Brand href="#home">Zoo Logic</Navbar.Brand>
        {currUser && 
            <DropdownButton align="end" title={currUser.username} id="dropdown-menu-align-end">
                <Dropdown.Item href="#/action-1">Score</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
        }      
      </Container>
    </Navbar>
  );
}

export default Header;