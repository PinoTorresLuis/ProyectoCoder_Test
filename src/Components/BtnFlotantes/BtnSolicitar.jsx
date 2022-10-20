import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';

import Formulario from '../Pilares/Formulario';

import wplogo from '../../assets/LogosNavFondo/whatssAppLogo.png';

import './_btnstyles.scss';

const BtnSolicitar = () => {
  const [form, setForm] = useState(false)


  window.addEventListener("scroll", function(){
    let showBtn = document.querySelector(".container_btn");
    showBtn.classList.toggle("container_show_btn",window.scrollY> 50 && window.scrollY < 1500);
  })
    
  return (
    <div className='container_btn'>

     <ul className='container_show_btn'>
      <li><button className='info_active_btn' onClick={()=> setForm(true)}>
            <FormattedMessage
            id="pilares.btn"
            defaultMessage= "Solicitar"
            />
          </button>
      </li>
      <li><a className='a_link' href="https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información"><img  data-aos="fade-left" className='wp_active' src={wplogo}/></a></li>
    </ul>
    <Formulario show={form} onHide={()=>setForm(false)} />
    
    </div>
  )
}

export default BtnSolicitar