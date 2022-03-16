import { useEffect, useState } from "react";
import axios from "axios";

const CatsParadise = ({ noCountries }) => {
    const [cats, setCats] = useState([]);
    const [averageLifetime, setAverageLifetime] = useState(0);
    const [averageWeight, setAverageWeight] = useState(0);
    const [countries, setCountries] = useState([]);
    const [countryWithHighestNumberOfCats, setCountryWithHighestNumberOfCats] =
        useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.thecatapi.com/v1/breeds";
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setCats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setAverageLifetime(
            Math.round(
                (cats.reduce(
                    (total, next) =>
                        total +
                        (next.life_span.split(/(\s+)/)[0] +
                            next.life_span.split(/(\s+)/)[1]) /
                            2,
                    0
                ) /
                    cats.length) *
                    100
            ) / 100
        );

        setAverageWeight(
            Math.round(
                (cats.reduce(
                    (total, next) =>
                        total +
                        (next.weight.metric.split(/(\s+)/)[0] +
                            next.weight.metric.split(/(\s+)/)[1]) /
                            2,
                    0
                ) /
                    cats.length) *
                    100
            ) / 100
        );

        if (!noCountries) {
            let count = cats
                .map((cat) => cat.country_code)
                .reduce(function (obj, val) {
                    obj[val] = (obj[val] || 0) + 1;
                    return obj;
                }, {});

            // Order by occurences
            count = Object.keys(count).sort(function (a, b) {
                return count[b] - count[a];
            });

            setCountryWithHighestNumberOfCats(count[0]);
            setCountries(count);
        }
    }, [cats]);

    let content;
    if (cats.length === 0) {
        content = <p>Loading...</p>;
    } else {
        let countryPart = null;

        if (!noCountries)
            countryPart = (
                <div>
                    <p>Cat breeds have {countries.length} countries.</p>
                    <p>
                        Country with the highest number of cat breeds is{" "}
                        {countryWithHighestNumberOfCats}
                    </p>
                    <ul>
                        <p>List of countries by cat breeds number:</p>
                        {countries.map((country, index) => (
                            <li key={index}>{country}</li>
                        ))}
                    </ul>
                </div>
            );

        content = (
            <div>
                <p>There are {cats.length} cat breeds</p>
                <p>
                    On average a cat can weight about {averageWeight} Kg and
                    live {averageLifetime} years.
                </p>
                {countryPart}
            </div>
        );
    }

    return (
        <div>
            <h2>Cats Paradise</h2>
            {content}
        </div>
    );
};

export default CatsParadise;
