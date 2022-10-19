import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BtnSolicitar from '../BtnFlotantes/BtnSolicitar'
import iconoWP from '../../assets/imgWP.png'
import FlagEspain from '../../assets/Banderas/spain.png';
import FlagUnited from '../../assets/Banderas/unitedK.png';
import React, { useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import { LangContext } from '../Context/langContext';

import Logo from '../../assets/Logo.png';

import './_navbar.scss';


const NavBar = () => {
   const { establecerLenguaje} = useContext (LangContext)

  return (
    <>
     <Navbar className='container_navbar'>
        <Container className='container_container'>
          <Navbar.Brand>
          <a name="Home"><img className='img-logo' src= {Logo} alt="logo"/></a>
          </Navbar.Brand>
          <Nav className="me-end">
            <div className='container_nav_link'>
            <Nav.Link className='text_nav' href="https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información"><img className='wp_logo' src= {iconoWP} alt=""/>Whatsapp</Nav.Link>
            <Nav.Link  className='text_nav_idioma'><FormattedMessage
              id='idioma.texto'
              defaultMessage="Idioma"
              />
            </Nav.Link> 
            <NavDropdown  id="navbarScrollingDropdown">
              <NavDropdown.Item  className='drop_container'> 
              <button onClick={() => establecerLenguaje('es-ES')}><img className='img_flag' src= {FlagEspain} /></button>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <button onClick={() => establecerLenguaje('en-US')}><img className='img_flag' src= {FlagUnited}/></button>
              </NavDropdown.Item>
           </NavDropdown>
           </div>
          </Nav>
        </Container>
        <BtnSolicitar/>
      </Navbar>
      </>
  )
}

export default NavBar