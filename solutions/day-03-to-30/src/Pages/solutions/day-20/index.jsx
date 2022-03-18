import Header from "../../../Components/Header";
import CatsParadise from "../../../Components/CatsParadise";
import CatsList from "../../../Components/CatsList";

const Day20 = () => {
    return (
        <div>
            <Header day="20">
                <CatsParadise noCountries />
            </Header>
            <CatsList withFilters />
        </div>
    );
};

export default Day20;
