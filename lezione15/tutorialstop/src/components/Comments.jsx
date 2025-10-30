import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Comments({ comments }) {
    console.log(comments)
    const totalComments = comments.length;

    return (
        <Row className='border rounded'>
            <Col>
                <div>
                    {totalComments !== 0 && (
                        <ul>
                            {comments.map((comment) => (
                                <li key={comment.id} value={comment.id}>{"titolo: " + comment.tutorialTitle  + ", commento: " + comment.text + ", rate: " + comment.rate}</li>
                            ))} 
                        </ul>
                    )}
                    {totalComments === 0 && (
                        <>Nessun commento</>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Comments;