import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

const CatsList = ({ withFilters = false }) => {
    const [cats, setCats] = useState([]);
    const [origins, setOrigins] = useState([]);
    const [filterByOrigin, setFilterByOrigin] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.thecatapi.com/v1/breeds";
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setCats(data);

                let tempOrigins = [];
                for (const cat of data) {
                    if (!tempOrigins.includes(cat.origin)) {
                        tempOrigins.push(cat.origin);
                    }
                }
                tempOrigins.push(null);
                setOrigins(tempOrigins);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    let content;
    let filters;
    if (cats.length === 0 && !(withFilters && origins.length === 0)) {
        content = <p>Loading...</p>;
    } else {
        content = cats
            .filter((cat) => {
                console.log(filterByOrigin, cat, cat.origin === filterByOrigin);
                return filterByOrigin === null
                    ? true
                    : cat.origin === filterByOrigin
                    ? true
                    : false;
            })
            .map((cat, index) => {
                let imageUrl = cat.image !== undefined ? cat.image.url : null;

                return (
                    <div key={index} className={style.card}>
                        <div className={style.imageWrapper}>
                            <img
                                src={imageUrl}
                                alt={cat.name + " cat picture"}
                            />
                        </div>
                        <div className={style.cardBody}>
                            <p>{cat.name}</p>
                            <p className={style.origin}>{cat.origin}</p>
                            <p>
                                <span className={style.field}>
                                    Temperament:
                                </span>{" "}
                                {cat.temperament}
                            </p>
                            <p>
                                <span className={style.field}>Life Span:</span>{" "}
                                {cat.life_span}
                            </p>
                            <p>
                                <span className={style.field}>Weight:</span>{" "}
                                {cat.weight.imperial} Kg
                            </p>
                            <p className={style.description}>
                                <span className={style.field}>Description</span>
                                <br /> {cat.description}
                            </p>
                        </div>
                    </div>
                );
            });
        filters = origins.map((country, index) => {
            return (
                <div
                    key={index}
                    onClick={() => {
                        console.log(country);
                        setFilterByOrigin(country);
                    }}
                >
                    {country !== null ? country : "All"} (
                    {country !== null
                        ? cats.reduce(
                              (acc, cur) =>
                                  cur.origin === country ? ++acc : acc,
                              0
                          )
                        : cats.length}
                    )
                </div>
            );
        });
    }

    return (
        <div>
            <div className={style.catsFilter}>{filters}</div>
            <div className={style.catsList}>{content}</div>
        </div>
    );
};

export default CatsList;
