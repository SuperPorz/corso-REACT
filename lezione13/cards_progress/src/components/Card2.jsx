//ipotesi 1

import cardClasses from './Card2.module.css';

const person = {
    name: 'LORENZO',
    surname: 'MICHELON',
    age: 258,
    email: 'BUBULA@top.com',
    avatar: 'https://images.pexels.com/photos/21554935/pexels-photo-21554935/free-photo-of-paesaggio-tramonto-moda-uomo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici)."
};

function Card2() {

    console.log("CARD()");
    return(
        <article className={cardClasses.cardSection}>
            <h2>{person.name + ' ' + person.surname}</h2>
            <img src={person.avatar} width="200px" height="200px" className={cardClasses.avatar}/>
            <p className={cardClasses.testP}>Età: {person.age}</p>
            <p>Esperienza: {person.email}</p>
        </article>
    );
}

export default Card2;

