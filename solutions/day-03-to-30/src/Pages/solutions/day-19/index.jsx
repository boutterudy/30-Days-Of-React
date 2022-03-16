import Header from "../../../Components/Header";
import CatsParadise from "../../../Components/CatsParadise";
import CatsList from "../../../Components/CatsList";

const Day19 = () => {
    return (
        <div>
            <Header day="19">
                <CatsParadise noCountries />
            </Header>
            <CatsList />
        </div>
    );
};

export default Day19;
