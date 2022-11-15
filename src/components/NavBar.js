import CartWidgets from "./CartWidgets";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
const NavBar = ({greeting}) => {
    
return ( <div>
    <Navbar bg="primary" variant="dark">
        <Container>     
            <button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Boca_escudo.png" width="40"></img>     
            </button>     
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#futbol">Futbol</Nav.Link>
            <Nav.Link href="#features">Entrenamiento</Nav.Link>
            <Nav.Link href="#pricing">Tiempo Libre</Nav.Link>
          </Nav>
          <CartWidgets/>
        </Container>
        </Navbar>
    <p>{greeting}</p>
    </div>

);
};

export default NavBar;