import "./style.css"

const WorldPopulationGraph = ({data}) => {
    let countries = [],
        populationGraphs = [],
        populations = []

    // Sort by population
    data.sort((countryA, countryB) => countryA.population - countryB.population).reverse()

    // Function to add commas in populations numbers
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Prepare content
    data.forEach((country, index) => {
        const maxPopulation = data[0].population
        countries.push(<li key={index}>{country.country}</li>)

        // Graph width
        const graphWidth = country.population / maxPopulation * 100 + "%"
        populationGraphs.push(<li key={index} style={{ width: graphWidth }}></li>)
        populations.push(<li key={index}>{numberWithCommas(country.population)}</li>)
    });

    return (
        <div className="worldPopulationGraph">
            <h2>30 Days Of React</h2>
            <p>World population</p>
            <p className="small">Ten most populated countries</p>
            <div className="data">
                <ul className="countries">
                    {countries}
                </ul>
                <ul className="populationGraphs">
                    {populationGraphs}
                </ul>
                <ul className="populations">
                    {populations}
                </ul>
            </div>
        </div>
    )
}

export default WorldPopulationGraph