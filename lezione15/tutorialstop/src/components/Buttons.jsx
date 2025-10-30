import Button from "react-bootstrap/esm/Button";

function Buttons({ prevP, nextP, ciccioP }) {

    return (
        <>
            <section className="p-3 border rounded">
                <Button onClick={prevP}>Previous</Button>
                <Button onClick={nextP}>Next</Button>
                <Button onClick={ciccioP}>Ciccio</Button>
            </section> 
        </>
    )

}

export default Buttons;