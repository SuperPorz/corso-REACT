import ProgressBar from 'react-bootstrap/ProgressBar';

function ReadingBar({ children, interviewCounterP, totalInterviewsP }) {

    const percentage = interviewCounterP / totalInterviewsP * 100; //parziel / totale * 100 = percentuale%
    return (
        <section className="p-3 border rounded">
            { children }
            <ProgressBar 
                now={percentage} 
                label={`${percentage}%`} 
                /* visuallyHidden */ />
        </section>
    )
}

export default ReadingBar;