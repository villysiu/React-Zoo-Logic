import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header({currUser}) {
  return (
    <Navbar bg="light" expand="false">
      <Container>
        <Navbar.Brand href="#home">Zoo Logic</Navbar.Brand>
        {currUser && 
            <DropdownButton align="end" title="User Name" id="dropdown-menu-align-end">
                <Dropdown.Item href="#/action-1">Score</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </DropdownButton>
        }      
      </Container>
    </Navbar>
  );
}

export default Header;