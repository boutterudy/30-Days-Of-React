import { Link } from "react-router-dom";

export default function SolutionsList() {
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
