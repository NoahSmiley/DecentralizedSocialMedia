import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Chip } from "@mui/material";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Mevo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{ color: "white" }}>
            {" "}
            Feed
          </Nav.Link>
          <Nav.Link href="#features" style={{ color: "white" }}>
            Communities
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: "white" }}>
            Directs
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: "white" }}>
            Profile
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Decentralize"
            />
          </FormGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
