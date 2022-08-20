import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTractor } from '@fortawesome/free-solid-svg-icons'
import { IconoCarrito } from './carrito';


export const Navegador = () => {

  return (


    <section>


      <Navbar bg="dark" variant="dark">
        <Container>
 
          <Navbar.Brand href="#home"> <FontAwesomeIcon icon={faTractor} /> </Navbar.Brand>
          <Navbar.Brand href="#home">AGRONLINE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Maquinas</Nav.Link>
            <Nav.Link href="#pricing">Repuestos</Nav.Link>


          </Nav>
          <Navbar.Brand href="#home"> <IconoCarrito />   </Navbar.Brand>
        </Container>
      </Navbar>





    </section>

  )



}

export default Navegador
