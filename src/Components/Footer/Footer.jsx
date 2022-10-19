import React from 'react';
import { Link } from 'react-router-dom';

import LogoFooter from '../../assets/LogoFooter.png';
import Phone from '../../assets/Iconos footer/Phone.png';
import Email from '../../assets/Iconos footer/Email.png';
import Instagram from '../../assets/Iconos footer/Instagram.png';
import Whatsapp from '../../assets/Iconos footer/Whatsapp.png';
import Facebook from '../../assets/Iconos footer/Facebook.png';
import {FormattedMessage} from 'react-intl';

import './_footer.scss';

const Footer = () => {
  return (
     <footer className='footer_container'>
        <h1>
        <FormattedMessage
          id="footer.title"
          defaultMessage= "Contáctanos"
          />
        </h1>
         <div className='footer_sedes'>
            
            <i className='i_texto_sedes'>ESPAÑA/BARCELONA(sede comercial)</i>
            <i className='i_subtexto_sedes'>C/Montserrat, 60 1°B 08302, Matarú</i>
            
            <div className='column'>
            <i className='i_texto_sedes'>ESPAÑA/MÁLAGA(sede administrativa)</i>
            <i className='i_subtexto_sedes'>C/Conrado del campo 18,P 4, B12, 3°D, 29620, Torremolinos</i>            
            </div>
         </div>
         <div className='footer_container_contacto'>
         <div className='footer_email'>            
          <i className='i_contacto_email'><img className='icono_footer_contacto' src= {Email}/>contacto@itwork.digital</i>
          <i className='i_contacto_email'><img className='icono_footer_contacto' src= {Phone}/>+34 635282005</i>            
         </div>

         <div className='footer_redes'>
         <a className='a_link' href="https://www.facebook.com/Itwork.digital"><i className='i_redes_img'><img className='icono_footer' src= {Instagram}/>ITwork.digital</i></a>
         <a className='a_link' href="https://www.facebook.com/Itwork.digital"><i className='i_redes_img'><img className='icono_footer' src= {Facebook}/>www.facebook.com/Itwork.digital</i></a>           
         <a className='a_link' href='https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información'><i className='i_redes_img'><img className='icono_footer' src= {Whatsapp}/>+34 635282005</i></a>
         </div>
         </div>
         <div className='footer_logo'>
            <i><a href='#Home'><img className='img_logo' src= {LogoFooter} alt=""/></a></i> 
         </div>
         
      <div className='footer_copyrigth'>

      <p>Política de datos</p>


      </div>
       
     </footer>
  )
}

export default Footer