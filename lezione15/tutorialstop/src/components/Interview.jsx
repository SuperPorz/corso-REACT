function Interview({ interviewCounterP, interviewsP }) {

    return(
        <>
            {console.log(interviewsP)}
            <section className="p-3 border rounded">
                <h2>{ interviewCounterP } Interview.</h2>
                { interviewsP }
            </section>
        </>
    )

}

export default Interview;