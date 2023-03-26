import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


const NavComponent = () => {
  return(
    <Navbar>
    <Container>
      <Nav>
      <Link className="nav-link" to ="/characters">Personajes</Link>
      <Link className="nav-link" to ="/locations">Localizaciones</Link>
      <Link className="nav-link" to ="/episondes">Capítulossssssss</Link>
      </Nav>
    </Container>
    </Navbar>
        )
};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
