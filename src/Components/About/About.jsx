import React, {useState} from 'react'

import {FormattedMessage} from 'react-intl';
import CardMVP from '../Intercambiabilidad/CardMVP';

import CardSocios from '../Intercambiabilidad/CardSocios';
import CardUs from '../Intercambiabilidad/CardUs';

import './_about.scss';

const About = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = () => setShow (2)
  let position = 1

  return (
    <div className='section_container_grid'>
     {  show === false ? 
          <div data-aos="fade-right" className='class_title_h1' onClick={handleShow}>
          <h1 className='title_about'>
          <FormattedMessage
          id="about.us"
          defaultMessage= "Nosotros"
          />
        </h1>
        </div>
        :
        <div data-aos="fade-right" className='class_title_h1' onClick={handleClose}>
        <h2 className='title_about'>
          <FormattedMessage
          id="about.btn_history"
          defaultMessage= "Historia"
          />
        </h2>
        </div>
        }

       { show === false && <CardSocios/> }
       { show === true && <CardUs/>}
       { (position === 1 && show === 2) && <CardMVP/> }
     

      <div data-aos="fade-left" className='class_title_h2' onClick={handleChange}>  
        <h3 className='title_about'>
          <FormattedMessage   
          id="about.mvp"
          defaultMessage= "MVP"
          />
        </h3>
        
      </div>
    </div>
      

  )
}

export default About