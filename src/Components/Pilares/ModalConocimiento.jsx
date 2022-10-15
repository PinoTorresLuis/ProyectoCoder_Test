import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {FormattedMessage} from 'react-intl';

import imgConocimiento from '../../assets/IconosPilar/ConocimientoPersonas.png'; 
import svgLogo from '../../assets/IconosPilar/conocimiento.svg'
import './_pilares.scss';


function  ModalConocimiento(props) {
 
    return (
      <>
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h1 className='title_conocimiento'>
              <FormattedMessage
              id='modal.title.conocimiento'
              defaultMessage="Conocimiento"
              />
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='parrafo_modal'>
          <FormattedMessage
          id='modal.texto.conocimiento'
          defaultMessage= 'Estamos presentes en tu crecimiento personal y en el de tu empresa. Por eso te brindamos la posibilidad de capacitarte en los servicios que presta IT work y también en herramientas de software, aplicaciones y procesos utilizados en la prestación de los servicios.'
          />
        </p> 
        
        </Modal.Body>
        <div className='container_img_logo_pilar'>
        <img className='img_pilar_conocimiento' src= {imgConocimiento} />
        <img className='img_pilar_svg' src= {svgLogo} alt="" />
        </div>
      </Modal>
      </>
    );
}

export default ModalConocimiento
