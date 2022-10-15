import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {motion} from 'framer-motion';

import pilar from '../../assets/circulo virtuoso 1.png';
import persona from '../../assets/Carrousel/img_persona.png';

import ModalProductividad from './ModalProductividad';
import ModalInfo from './ModalInfo';
import ModalCliente from './ModalCliente';
import ModalConocimiento from './ModalConocimiento';
import Formulario from './Formulario';

import './_pilares.scss';

//COMPONENTE DONDE ESTÁN LOS 4 PILARES + IMAGEN

const Pilares = () => {
  const [estadoModal1, setEstadoModal1] = useState(false)
  const [estadoModal2, setEstadoModal2] = useState(false)
  const [estadoModal3, setEstadoModal3] = useState(false)
  const [estadoModal4, setEstadoModal4] = useState(false)

  const [form, setForm] = useState(false)

  return (
    <article className='article_container_grid'>
        <h1  data-aos="fade-right">
        <FormattedMessage
          id="pilares.title"
          defaultMessage= "Nuestros 4 pilares"
          />
        </h1>
    
      <div className='container_pilar_info'>
        
          <div className='container_info'>
          <motion.img initial = {{y: -10}}
          animate = {{
            y:10,
            transition:{
              duration: 2,
              ease:"easeIn",
              repeat: Infinity,
              repeatType: "reverse"
            },
          }}
          data-aos="fade-right" className='img_persona' src= {persona} alt="" /> 
            <img data-aos="zoom-in" className='img_pilar_circulo' src= {pilar} alt="pilares"/>

            <h2 data-aos="zoom-out-up">
            <FormattedMessage
            id="pilares.subtitle"
            defaultMessage= "¿Buscás más información?"
            />
            </h2>
            <p data-aos="zoom-out-up">
            <FormattedMessage
            id="pilares.info"
            defaultMessage= "Aprovecha la oportunidad de solicitar información gratuita personalizada para tu negocio"
            />
            </p>

            <button data-aos="flip-down" className='btn_solicitar' onClick={()=> setForm(true)}>
            <FormattedMessage
            id="pilares.btn"
            defaultMessage= "Solicitar"
            />
            </button>

            <button data-aos="zoom-in-down" className='btn_pilares_produ' onClick={() => setEstadoModal1(true)}>  
            <FormattedMessage
              id='modal.title_produ'
              defaultMessage="Productividad"
              />
            </button>
            <button data-aos="zoom-in-rigth" className='btn_pilares_info' onClick={() => setEstadoModal2(true)}>
            <FormattedMessage
              id='modal.title.info'
              defaultMessage="Información"
              />
            </button>
            <button data-aos="zoom-in-left" className='btn_pilares_cliente' onClick={()=> setEstadoModal3(true)}>
            <FormattedMessage
              id='modal.title.cliente'
              defaultMessage="Cliente"
              />
            </button>
            <button data-aos="zoom-in-up" className='btn_pilares_cono' onClick={()=>setEstadoModal4(true)}>
            <FormattedMessage
              id='modal.title.conocimiento'
              defaultMessage="Conocimiento"
              />
            </button>
          </div>

          <ModalProductividad show={estadoModal1} onHide={() => setEstadoModal1(false)}/>
          <ModalInfo show={estadoModal2} onHide={() => setEstadoModal2(false)}/>
          <ModalCliente show={estadoModal3} onHide={() => setEstadoModal3(false)}/>
          <ModalConocimiento show={estadoModal4} onHide={() => setEstadoModal4(false)} />
          <Formulario show={form} onHide={()=>setForm(false)} />
      </div>  
    </article>
  )
}

export default Pilares