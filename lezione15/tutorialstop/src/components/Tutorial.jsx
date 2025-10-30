//destrutturazione
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Tutorial({ tutorialP, onHandleShow })
{
console.log('TUTORIAL()');

    //siamo nel figlio; passiamo per PROP le informazioni tra figlio/padre
    const handleShow = () => {
        console.log("tutorial -> HANDLESHOW()");
        onHandleShow(tutorialP);
    }

    return (
        <Card className='w-100'>
            <Card.Header as="h5">{tutorialP.title}</Card.Header>
            <Card.Img variant="top" src={tutorialP.pic} className='w-100 my-3'/>
            <Card.Body>
            <Card.Text>
                {tutorialP.topic + " " + tutorialP.language}
            </Card.Text>
            <Card.Text>
                {tutorialP.excerpt}
            </Card.Text>
            <ListGroup variant="flush" className='my-3'>
                <ListGroup.Item>{tutorialP.isDifficult ? "Per esperti" : "Per tutti"}</ListGroup.Item>
                <ListGroup.Item><i>Il tempo di lettura è di {tutorialP.readingTime} minuti</i></ListGroup.Item>
            </ListGroup>
            <Button onClick={handleShow} variant="primary">Vai al tutorial</Button>
            </Card.Body>
            <Card.Body>
                <Card.Link href={tutorialP.website.link} target="_blank">{tutorialP.website.title}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Tutorial;



/* // vecchio modo
function Tutorial(props) {
    return (
        <p>{ props.tutorial }</p>
    )
} */

// altro modo
/* function Tutorial({ props }) {
    return (
        <>
            <hr />
            <p>{ props.tutorialP.topic }</p>
            <p>{ props.tutorialP.language }</p>
            <p>{ props.tutorialP.title }</p>
        </>
    )
} */

// ultimo modo prima di importare CARD da libreria react-bootstrap
/* function Tutorial({ tutorialP }) {
    return (
        <>
            <hr />
            <p>{ tutorialP.topic }</p>
            <p>{ tutorialP.language }</p>
            <p>{ tutorialP.title }</p>
        </>
    )
} */