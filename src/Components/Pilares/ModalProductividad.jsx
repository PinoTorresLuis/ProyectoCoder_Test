import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {FormattedMessage} from 'react-intl';

import imgProductividad from '../../assets/IconosPilar/ProduPersonas.png';
import svgLogo from '../../assets/IconosPilar/productividad.svg';

import './_pilares.scss';


function  ModalProductividad(props) {
 
    return (
      <>
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className='title_produ'>
              <FormattedMessage
              id='modal.title_produ'
              defaultMessage="Productividad"
              />
            </h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='parrafo_modal'>
          <FormattedMessage
          id='modal.texto_produ'
          defaultMessage= 'La organización en una empresa es lo principal para el exito de la misma. IT Work tiene las mejores herramientas para que puedas simplificar y optimizar tareas y procesos relacionados con la oficina e informatica.'
          />
        </p> 
        
        <div className='container_img_logo_pilar'>
        <img className='img_pilar_produ' src= {imgProductividad} />
        <img className='img_pilar_svg' src= {svgLogo} alt="" />
        </div>
        </Modal.Body>
      </Modal>
      </>
    );
}

export default ModalProductividad
