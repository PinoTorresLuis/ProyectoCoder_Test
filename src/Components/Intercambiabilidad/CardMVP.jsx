import React from "react";
import './_intercambiabilidad.scss';
import MVP from '../../assets/Personas/MVP.png'

const CardMVP = () => {
  return (
    <div className='socios_texto'>
    <img data-aos="fade-left" className='img_socios_mvp' src= {MVP} alt="socios"/>
    </div>
  )
}

export default CardMVP