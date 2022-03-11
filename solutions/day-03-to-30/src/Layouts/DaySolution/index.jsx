import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Day03 from "../../Pages/solutions/day-03";
import Day04 from "../../Pages/solutions/day-04";
import Day05 from "../../Pages/solutions/day-05";
import Day06 from "../../Pages/solutions/day-06";
import Day07 from "../../Pages/solutions/day-07";
import Day08 from "../../Pages/solutions/day-08";
import Day09 from "../../Pages/solutions/day-09";
import Day10 from "../../Pages/solutions/day-10";
import Day11 from "../../Pages/solutions/day-11";
import Day12 from "../../Pages/solutions/day-12";
import Day13 from "../../Pages/solutions/day-13";
import Day14 from "../../Pages/solutions/day-14";
import Day15 from "../../Pages/solutions/day-15";
import Day16 from "../../Pages/solutions/day-16";
import Day17 from "../../Pages/solutions/day-17";

const DaySolution = () => {
    let solution,
        { number } = useParams();
    switch (number) {
        case "03":
            solution = <Day03 />;
            break;

        case "04":
            solution = <Day04 />;
            break;

        case "05":
            solution = <Day05 />;
            break;

        case "06":
            solution = <Day06 />;
            break;

        case "07":
            solution = <Day07 />;
            break;

        case "08":
            solution = <Day08 />;
            break;

        case "09":
            solution = <Day09 />;
            break;

        case "10":
            solution = <Day10 />;
            break;

        case "11":
            solution = <Day11 />;
            break;

        case "12":
            solution = <Day12 />;
            break;

        case "13":
            solution = <Day13 />;
            break;

        case "14":
            solution = <Day14 />;
            break;

        case "15":
            solution = <Day15 />;
            break;

        case "16":
            solution = <Day16 />;
            break;

        case "17":
            solution = <Day17 />;
            break;

        default:
            if (parseInt(number) >= 3 && parseInt(number) <= 30) {
                solution = <h1>Solution is not available for now!</h1>;
            } else {
                solution = <Navigate to="/" />;
            }
            break;
    }
    return solution;
};

export default DaySolution;
