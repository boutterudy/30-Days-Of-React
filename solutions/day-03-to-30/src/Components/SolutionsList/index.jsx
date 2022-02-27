import React from "react";
import { Link } from "react-router-dom";

class SolutionsList extends React.Component {
    render() {
        const solutions = [
            {
                day: 3,
                solution: "/solutions/day-03",
            },
            {
                day: 4,
                solution: "/solutions/day-04",
            },
            {
                day: 5,
                solution: "/solutions/day-05",
            },
            {
                day: 6,
                solution: "/solutions/day-06",
            },
            {
                day: 7,
                solution: "/solutions/day-07",
            },
        ];
    
        return (
            <ul>
                {solutions.map((solution, index) => (
                    <li key={index}>
                        <Link to={solution.solution}>
                            Day {solution.day}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default SolutionsList