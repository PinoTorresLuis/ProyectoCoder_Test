import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconoWP from '../../assets/imgWP.png'
import FlagEspain from '../../assets/Banderas/spain.png';
import FlagUnited from '../../assets/Banderas/unitedK.png';
import React, { useContext} from 'react';
import Logo from '../../assets/Logo.png';
import { LangContext } from '../Context/langContext';

import './_navbar.scss';


const NavBar = () => {
   const { establecerLenguaje} = useContext (LangContext)

  return (
    <>
     <Navbar className='container_navbar'>
        <Container className='container_container'>
          <Navbar.Brand href="#home">
            <img className='img-logo' src= {Logo} alt="logo"/>
          </Navbar.Brand>
          <Nav className="me-end">
            
            <Nav.Link className='text_nav' href="https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información"><img className='wp_logo' src= {iconoWP} alt=""/>Whatsapp</Nav.Link>
            <NavDropdown title ="idioma" id="navbarScrollingDropdown">
              <NavDropdown.Item  className='drop_container' href="#action3"> 
              <button onClick={() => establecerLenguaje('es-ES')}><img className='img_flag' src= {FlagEspain} /></button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <button onClick={() => establecerLenguaje('en-US')}><img className='img_flag' src= {FlagUnited}/></button>
              </NavDropdown.Item>
           </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default NavBar