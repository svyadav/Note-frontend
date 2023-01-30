import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const handleDelete=()=>{
    localStorage.removeItem("userInfo");
    navigate('/');
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Zote Saver</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Form>
                <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                  onChange={(e)=>setSearch(e.target.value)}
                />
              </Form>
            </Nav>
            <Nav>
              <Nav>
                <Link to="/mynotes" style={{color:"white"}}>My Notes</Link>
              </Nav>

              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleDelete}
                  
                >
                  Logout
                </NavDropdown.Item>
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
    
      </Navbar>
   
    </>
  );
};

export default Header;
