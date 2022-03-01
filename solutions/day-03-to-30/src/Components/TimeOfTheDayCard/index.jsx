import './style.css'

const TimeOfTheDayCard = () => {
    let background,
        partOfTheDay,
        time = new Date().getHours()
    
    // Morning
    if(2 <= time && time < 12) {
        partOfTheDay = 'morning'
        background = { backgroundColor: '#006995', color: 'white' }

    // Noon
    } else if (12 <= time && time < 17) {
        partOfTheDay = 'noon'
        background = { backgroundColor: '#7ED957', color: 'white' }

    // Evening
    } else if (17 <= time && time < 23) {
        partOfTheDay = 'evening'
        background = { backgroundColor: '#00B980', color: 'white' }

    // Night
    } else {
        partOfTheDay = 'night'
        background = { backgroundColor: '#009299', color: 'white' }
    }


    return (
        <section className="timeOfTheDayCard" style={background}>
            <h1>{partOfTheDay}</h1>
            <p>The background of this card is defined based on the current season.</p>
        </section>
    )
}

export default TimeOfTheDayCard