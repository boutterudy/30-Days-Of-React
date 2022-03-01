import './style.css'

const SeasonCard = () => {
    function getSeason() {
        const month = new Date().getMonth() + 1

        if (3 <= month && month <= 5) {
            return 'spring'
        }

        if (6 <= month && month <= 8) {
            return 'summer'
        }

        if (9 <= month && month <= 11) {
            return 'fall'
        }

        return 'winter'
    }

    const season = getSeason()
    let background
    switch (season) {
        case 'spring':
            background = {backgroundColor: '#FFB5B6', color: 'black'}
            break;

        case 'summer':
            background = {backgroundColor: '#1FC9C9', color: 'black'}
            break;

        case 'fall':
            background = {backgroundColor: '#F84502', color: 'white'}
            break;
    
        default:
            // winter
            background = {backgroundColor: '#5F1296', color: 'white'}
            break;
    }

    return (
        <section className="seasonCard" style={background}>
            <h1>{season}</h1>
            <p>The background of this card is defined based on the current season.</p>
        </section>
    )
}

export default SeasonCard