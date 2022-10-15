import React from "react";
import Modal from 'react-bootstrap/Modal';
import './_iframe.scss';

function Formulario (props){

    return(
        <>
        <Modal className="container_body" {...props}>
        <Modal.Header closeButton/>
        <Modal.Body>
        <iframe className="iframe_container" src="https://docs.google.com/forms/d/e/1FAIpQLSdp9iGuQNsjWAv06YCzcOnhSQN5CqM38WmM-TgMW09Y9nh8KQ/viewform?embedded=true" width="640" height="1233" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </Modal.Body>
        </Modal>
        </>
    )
};

export default Formulario