import React from "react";
import { Link } from "react-router-dom";

class SolutionsList extends React.Component {
    render() {
        let solutions = [];
        for (let i = 3; i <= 30; i++) {
            if (i < 10) i = `0${i}`;
            solutions.push({
                day: i,
                solution: "/solutions/day-" + i,
            });
        }
        return (
            <ul>
                {solutions.map((solution, index) => (
                    <li key={index}>
                        <Link to={solution.solution}>Day {solution.day}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default SolutionsList;
