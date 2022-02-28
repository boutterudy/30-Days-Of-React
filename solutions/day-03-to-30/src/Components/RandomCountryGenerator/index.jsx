import { useState } from "react"
import Button from "../Button"
import { countriesData } from "../../data/countries"
import './style.css'

const RandomCountryGenerator = () => {
    const [country, setCountry] = useState(countriesData[0])

    function selectRandom(e) {
        e.preventDefault()
        setCountry(countriesData[Math.floor(Math.floor(Math.random() * countriesData.length))])
    }

    // Function to add commas in populations numbers
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="randomCountryGenerator">
            <div className="country">
                <h2>{country.name}</h2>
                <ul>
                    <li><span>Capital:</span> {country.capital}</li>
                    <li><span>Language:</span> {country.languages.join(', ')}</li>
                    <li><span>Population:</span> {numberWithCommas(country.population)}</li>
                    <li><span>Currency:</span> {country.currency}</li>
                </ul>
            </div>
            <Button onClick={selectRandom}>Select Country</Button>
        </div>
    )
}

export default RandomCountryGenerator