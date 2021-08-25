import { Navbar, Container } from "react-bootstrap";
import logo from "./img/logo.jpg";
function Navigasi() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
