import './style.scss'

const DAYS_OF_THE_WEEK = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

function getCurrentDay() {
    const date = new Date("2023/04/23");
    const day = date.getDay();
    return DAYS_OF_THE_WEEK[day - 1] || DAYS_OF_THE_WEEK[6]; // -1, um Montag als den ersten Tag der Woche zu setzen
}



function BusinessHours(times) {

    const currentDay = getCurrentDay();

    const hasTimes = () => {
        openingHours.filter(entry => entry.weekday === currentDay)
    }


const {openingHours} = times;
    return (
        <section id="business-hours">
            <h1>Wochentage</h1>
            <ul className='business-hours__list'>
                {DAYS_OF_THE_WEEK.map((day, index) => (
                    <li key={`${index}_${day}`} className={day === currentDay ? 'currentday' : 'regularday'}>
                        {day}
                        {hasTimes}

                    </li>
                ))}
            </ul>
        </section>
    );
}

export default BusinessHours;

