import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

const CatsList = () => {
    const [cats, setCats] = useState([]);

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

    let content;
    console.log("cats", cats);
    if (cats.length === 0) {
        content = <p>Loading...</p>;
    } else {
        content = cats.map((cat, index) => {
            let imageUrl = cat.image !== undefined ? cat.image.url : null;
            return (
                <div key={index} className={style.card}>
                    <div className={style.imageWrapper}>
                        <img src={imageUrl} alt={cat.name + " cat picture"} />
                    </div>
                    <div className={style.cardBody}>
                        <p>{cat.name}</p>
                        <p className={style.origin}>{cat.origin}</p>
                        <p>
                            <span className={style.field}>Temperament:</span>{" "}
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
    }

    return <div className={style.catsList}>{content}</div>;
};

export default CatsList;
