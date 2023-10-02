import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavScroll() {
  const cartProducts=useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/products' as={Link}>Products </Nav.Link>
          </Nav>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length} </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;