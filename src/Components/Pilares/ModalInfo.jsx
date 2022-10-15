import Modal from 'react-bootstrap/Modal';
import {FormattedMessage} from 'react-intl';

import imgInfo from '../../assets/IconosPilar/InformacionPersonas.png'; 
import svgLogo from '../../assets/IconosPilar/informacion.svg'
import './_pilares.scss';

function  ModalInfo(props) {
 
    return (
      <>
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h1 className='title_info'>
              <FormattedMessage
              id='modal.title.info'
              defaultMessage="Información"
              />
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='parrafo_modal'>
          <FormattedMessage
          id='modal.texto.info'
          defaultMessage= 'Toda la información de tu empresa es valiosa, desde nuestra parte intentaremos optimizarla y organizarla para no dejar pasar ningún detalle y mejorar la toma de decisiones de la mano de los mejores servicios de Data Management. Nuestra premisa es “lo que no se mide, no se puede mejorar"'
          />
        </p> 
          <div className='container_img_logo_pilar'>
        <img className='img_pilar_info' src= {imgInfo} />
        <img className='img_pilar_svg' src= {svgLogo} alt="" />
        </div>
        </Modal.Body>
      </Modal>
      </>
    );
}

export default ModalInfo
