import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReadingBar from './ReadingBar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Interview from './Interview';
import Buttons from './Buttons';

const interviews = [
    "1) È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell'utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
    "2) Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni",
    "3) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante.",
    "4) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante.",
    "5) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante.",
    "6) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante.",
    "7) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante. ",
    "8) Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell'inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è bene essere certi che non contenga nulla di imbarazzante. "
]

function Interviews()
{
    const [interviewCounter, setInterviewCounter] = useState(1)
    
    //i gestori di evento devono essere definiti all'interno della funzione del componente (quella esportata)
    const totalInterviews = interviews.length; //salviamo il numero totale di elementi dell'array in una variab.

    function ciccio() {

        // qui react NON cambia lo stato ad ogni istruzione:
        setInterviewCounter( interviewCounter + 1 );
        setInterviewCounter( interviewCounter + 1 );
        setInterviewCounter( interviewCounter + 1 );
        setInterviewCounter( interviewCounter + 1 );

        // qui react effettivamente cambia lo stato ad ogni istruzione: (usiamo una funzione di callback)
        setInterviewCounter( (iC) => iC + 1 ); //iC è solo un'etichetta, il contenuto dipende dalla variabile di stato
        setInterviewCounter( (iC) => iC + 1 );
        setInterviewCounter( (iC) => iC + 1 );
        setInterviewCounter( (iC) => iC + 1 );
    }

    // ++iC = pre-incremento
    // iC++ = post-incremento

    function next() {
        if (interviewCounter < totalInterviews) {
            setInterviewCounter( (iC) => iC + 1 ); //non usare iC++ perchè equivale ad assegnare un valore di stato senza usare la sua specifica funzione setter
            //interviewCounter++; si potrebbe usare ++iC (funziona ma da verificare il dietro-le-quinte) pre-incremento
        }
        console.log("NEXT() -> interviewCounter: ", interviewCounter );
    }

    function prev() {
        if (interviewCounter > 1) { //il prev si attiva solo se il counter è maggiore di 2
            setInterviewCounter( (iC) => iC - 1 ); //si potrebbe usare --iC (da verificare)
        }
        console.log("PREV() -> interviewCounter: ", interviewCounter );
    }

    return (
        <>
            <Row>
                <Col>
                    <ReadingBar
                        totalInterviewsP={totalInterviews} 
                        interviewCounterP={interviewCounter} >
                        <p>Posizione dell'intervista</p>
                    </ReadingBar>
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col>
                    <Interview interviewCounterP={interviewCounter} interviewsP={interviews[interviewCounter - 1]} />
                </Col>
                <Col>
                    <Buttons prevP={prev} nextP={next} ciccioP={ciccio} /> 
                </Col>
            </Row>
        </>
    )
}

export default Interviews;

//esercizio: tradurre in componenti INTERVIEW e BUTTONS.JSX
//variante aggiuntiva: passare solamente l'elemento giusto