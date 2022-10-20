import React from 'react';
import Cohete from '../../assets/Personas/personas_cohete.png'
import LogoIt from '../../assets/LogosNavFondo/Logo.png';
import {motion} from 'framer-motion';

import {FormattedMessage} from 'react-intl';

import './_intercambiabilidad.scss';

const CardUs = () => {
  return (
    <div className='socios_texto'>
    <motion.img initial = {{y: -15}}
          animate = {{
            y:15,
            transition:{
              duration: 2,
              ease:"easeIn",
              repeat: Infinity,
              repeatType: "reverse"
            },
          }} data-aos="fade-right" className='img_socios' src= {Cohete} alt="socios"/>
    <div data-aos="fade-left" className='text_socios_container'> 
        <h1>
        <FormattedMessage
          id="about.title_us"
          defaultMessage= "Nosotros"
          />
        </h1>
        <p>
          <FormattedMessage
          id="app.history"
          defaultMessage= "Somos una empresa de tecnología integrada por especialistas en tecnología (IT), atención al cliente, marketing y estrategia; contamos con más de 25 años de trabajo en la industria que nos permite acompañarte en la identificación y el desarrollo de soluciones digitales, garantizandote una gran experiencia.Nuestro objetivo es ayudar a nuestros clientes."
          />
        </p>
        <img data-aos="fade-up" className='img_logo_us' src= {LogoIt} alt="" />
     </div>   
    </div>
  )
}

export default CardUs