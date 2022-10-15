import React from 'react'

import {FormattedMessage} from 'react-intl';
import Socios from '../../assets/Personas/3socios@250x 1.png';
import './_intercambiabilidad.scss';


const CardSocios = () => {


  return (
    <div className='socios_texto'>
    <img  data-aos="fade-down" className='img_socios' src= {Socios} alt="socios"/>
       <div  data-aos="fade-up" className='text_socios_container'> 
        <h1>
        <FormattedMessage
          id="about.title_socios"
          defaultMessage= "Nuestra historia"
          />
        </h1>
        <p>
          <FormattedMessage
          id="app.about"
          defaultMessage= "IT Work Es una startup creada por 3 amigos y excompañeros de Microsoft que luego de 25 años de desarrollo profesional, cada uno dentro de su especialidad (marketing y ventas, tecnología y management), vieron que muchos de los problemas a los que se enfrentaron durante tantos años son los mismos a los que se enfrentan a diario cientos de empresas, comercios y autónomos, y creen que uniendo esfuerzos y conocimientos pueden hacer que estas empresas se eviten los problemas relacionados a la baja productividad, la escasa información para tomar buenas decisiones, la falta de clientes o de vínculo con los mismos, y el desconocimiento de la tecnología disponible para lograr el éxito de sus negocios en la era digital. Cada uno de los socios de IT work estuvo en esa situación, entiende el costo de no resolver esos problemas y los beneficios de resolverlos, por eso pudieron alcanzar sus objetivos, y están dispuestos a hacer lo mismo por su negocio."
          />
        </p>
        </div>
    </div>
  )
}

export default CardSocios