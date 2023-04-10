
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import logo from "../../src/logoas.png"

  function Navbarr() {
    return (
      <Navbar bg="bg-danger" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              navbarScroll
            >
              <Nav.Link target={"_blank"} href= "https://www.astralis.gg/for-the-fans" className='textcolor'>For The Fans</Nav.Link>
              <Nav.Link target={"_blank"}href="https://www.astralis.gg/company/about" className='textcolor'>Company</Nav.Link>
              <Nav.Link target={"_blank"} href="https://www.astralis.gg/investor" className='textcolor'>Investor</Nav.Link>
              <Nav.Link target={"_blank"} href="/Aboutus" className='textcolor'>Aboutus</Nav.Link>
              <Nav.Link target={"_blank"}href="/Contactus" className='textcolor'>Contactus</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          <Container>
          <Navbar.Brand>
          <img src={logo} width="40" height="40" alt="Astralis logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    );
  }

  export default Navbarr;