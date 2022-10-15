import React from 'react';
import {FormattedMessage} from 'react-intl';
import imgCliente from '../../assets/IconosPilar/ClientePersonas.png';
import svgLogo from  '../../assets/IconosPilar/clientes.svg';
import Modal from 'react-bootstrap/Modal';

import './_pilares.scss';


function  ModalCliente(props) {
 
    return (
      <>
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h1 className='title_cliente'>
              <FormattedMessage
              id='modal.title.cliente'
              defaultMessage="Cliente"
              />
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='parrafo_modal'>
          <FormattedMessage
          id='modal.texto.cliente'
          defaultMessage= 'En la actualidad es muy importante estar presente en el mundo digital, por eso desde IT work te brindamos servicios de marketing digital y atención al cliente para acompañarte en todo el proceso.'
          />
          </p>
          <div className='container_img_logo_pilar'>
        <img className='img_pilar_cliente' src= {imgCliente} />
        <img className='img_pilar_svg' src= {svgLogo} alt="" />
        </div>
        </Modal.Body>
      </Modal>
      </>
    );
}

export default ModalCliente
