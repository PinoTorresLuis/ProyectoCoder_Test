import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {FormattedMessage} from 'react-intl';

import img1 from '../../assets/Carrousel/carrousel1.jpg';
import img2 from '../../assets/Carrousel/carrousel2.jpg';
import img3 from '../../assets/Carrousel/carrousel3.jpg';
import img4 from '../../assets/Carrousel/carrousel4.jpg';

import './_main.scss';

// PORTADA

const Main = () => {
  return (
    <main data-aos="fade-down" data-aps-duration="2000" className='main_container'>
    <Carousel fade>
    <Carousel.Item>
      {/* IMAGEN 1 */}
      <img
        className="d-block"
        src= {img1}
        alt="First slide"
      />
      <div data-aos="fade-up"  data-aps-duration="2000" className="container_texto">
      <h1 className='titulo_conocimiento'>
      <FormattedMessage
              id='main_title_conocimiento'
              defaultMessage="Conocimiento_"
              />
      </h1>
      <p>
      <FormattedMessage
              id='main_texto_conocimiento'
              defaultMessage="Nos interesa que aprendas, contamos con capacitaciones técnicas y prácticas para que puedas implementar en tu negocio."
              />
      </p>
      </div>    
    </Carousel.Item>
    <Carousel.Item>
      {/* IMAGEN 2 */}
      <img
        className="d-block"
        src= {img2}
        alt="Second slide"
      />
       <div data-aos="fade-up" className="container_texto">
      <h1 className='titulo_conocimiento'>
      <FormattedMessage
              id='main_title_cliente'
              defaultMessage="Cliente_"
              />
      </h1>
      <p>
      <FormattedMessage
              id='main_texto_cliente'
              defaultMessage="Queremos que te vaya bien, por eso nos enfocamos en que incrementes la cantidad y calidad de tus clientes para que encuentres la libertad económica y financiera."
              />
      </p>
      </div>    
    </Carousel.Item>
    <Carousel.Item>
      {/* IMAGEN 3 */}
      <img
        className="d-block"
        src= {img3}
        alt="Second slide"
      />
       <div data-aos="fade-up" className="container_texto">
      <h1 className='titulo_conocimiento'>
      <FormattedMessage
              id='main_title_informacion'
              defaultMessage="Información_"
              />
      </h1>
      <p>
      <FormattedMessage
              id='main_texto_informacion'
              defaultMessage="Nos encargamos de que la información de valor se encuentre organizada, minimizando el margen de error en la toma de decisiones."
              />
      </p>
      </div>    
    </Carousel.Item>
    <Carousel.Item>
      {/* IMAGEN 4 */}
      <img
        className="d-block"
        src= {img4}
        alt="Second slide"
      />
       <div data-aos="fade-up" className="container_texto">
      <h1 className='titulo_conocimiento'>
      <FormattedMessage
              id='main_title_productividad'
              defaultMessage="Productividad_"
              />
      </h1>
      <p>
      <FormattedMessage
              id='main_texto_productividad'
              defaultMessage="Hacemos más eficiente tu negocio, optimizando el tiempo para que puedas dedicarte de pleno a lo que realmente sabes hacer."
              />
      </p>
      </div>    
    </Carousel.Item>
  </Carousel>
  </main>
  )
}

export default Main