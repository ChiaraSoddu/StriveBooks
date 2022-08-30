import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const MyNav = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing">Prodotti</Nav.Link>
            <NavDropdown title="Categorie" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gialli</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rosa
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Storia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Horror
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrello</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
    export default MyNav