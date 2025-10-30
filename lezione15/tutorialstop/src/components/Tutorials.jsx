import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tutorial from './Tutorial';
import ModalTutorial from './ModalTutorial';
import { useState } from 'react';

function Tutorials({ tutorialsP }) {
    console.log('TUTORIALS()');

    const [showS, setShowS] = useState(false);
    const [selectedTutorial, setSelectedTutorial] = useState(null);

    const handleClose = () => {
        setSelectedTutorial(null); // impostiamo che nessun tutorial è selezionato
        setShowS(false); // settiamo l'apertura del modale a "false", quindi non verrà renderizzata
    }

    const handleShow = (tutorial) => {
        console.log("TUTORIALS -> HANDLESHOW()");
        console.log(JSON.stringify(tutorial));

        setShowS(true);
        setSelectedTutorial(tutorial);
    };

    return (
        <div>
            <Row>
                <Col><h2>Tutorial ed articoli</h2></Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={6}> { tutorialsP.map((tutorial, index) => (
                <Col key={index} className="flex-grow-1" >
                    <Tutorial 
                        tutorialP={tutorial} 
                        onHandleShow={handleShow} 
                    />
                </Col>))}
            </Row>
            {selectedTutorial ? <ModalTutorial showP={showS} tutorialP={selectedTutorial} onHandleClick={handleClose}/> : undefined} {/* gli diamo le due variabili di stato */}
        </div>
    )
}

export default Tutorials;