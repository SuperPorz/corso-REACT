import { useState } from 'react';
//import EmoticonsRater from './EmoticonsRater';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormTutorials({ tutorials, onAddComment })
{
    const totalTutorials = tutorials.length;

    const [choice, setChoice] = useState(0);
    const [test, setTest] = useState("");
    const [rateValue, setRateValue] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const comment = {
            id: Date.now(),
            tutorialTitle: tutorials[choice].title,
            text: test,
            rate: rateValue,
        }

        //onAddComment -> LIFT THE STATE UP
        onAddComment(comment);//passiamo il commento ad App.jsx, il quale prenderà il dato elaborandolo per riaggiornare il componente fratello di FormTutorials;S
        
        //qui resettiamo questi stati.
        //setChoice(0);
        setTest("")
    }

    const handleChoiceChange = (e) => {
        console.log(e.target.value);
        setChoice(+e.target.value);//convertiamo la stringa del value in numero; il target dell'evento è la option, quindi ne leggiamo il value;
    }
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setTest(e.target.value);
    }

    // eslint-disable-next-line no-unused-vars
    const handleRateValue= (n) => {
        setRateValue(n);
    }

    return(
        <Form className="row border rounded" onSubmit={handleSubmit}>
            <Form.Group className="col-xs-12 col-sm-6 col-md-4 mb-3" controlId="tutorialSelect">
                <Form.Label>Scegli il tutorial</Form.Label>
                <Form.Select value={choice} onChange={handleChoiceChange}>
                    {totalTutorials > 0 ? (
                        tutorials.map((tutorial, index) => (
                            <option key={index} value={index}>{tutorial.title}</option>
                        )
                    )) : (
                        <option key={1}>Nessun tutorial</option>
                    )}

                    {console.log("Ciao!")}
                </Form.Select>
            </Form.Group>

            <Form.Group className="col-xs-12 col-sm-6 col-md-4 mb-3" controlId="tutorialText">
                <Form.Label>Scrivi il commento</Form.Label>
                <Form.Control type="text" placeholder="" value={test} onChange={handleChange}/>
                {/* <EmoticonsRater onRateValue={handleRateValue} /> */}
            </Form.Group>
            <Form.Group className="col-xs-12 mb-3">
                <Button type="submit">Invia</Button>
            </Form.Group>
        </Form>
    )
}

export default FormTutorials;