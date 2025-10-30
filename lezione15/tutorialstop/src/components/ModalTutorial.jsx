import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { useState } from 'react';

function ModalTutorial({ showP, tutorialP, onHandleClick })
{
    console.log('MODALTUTORIAL()');
    //const [showS, setShowS] = useState(true); //destrutturaziione - EXTRA IMPORTANTE IN REAAACCTTTTT - restituisce un array

    const handleClose = () => {
        onHandleClick();//funzione passata tramite etichetta props 'onHandleClick'
    }

    return (
        // <Modal show={show} onHide={handleClose} centered>
        <Modal show={showP} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{tutorialP.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{tutorialP.allText}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
    )   
}

export default ModalTutorial;