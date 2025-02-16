import React from "react";
import SolutionsList from "../../Components/SolutionsList";

class App extends React.Component {
    render() {
        // JSX element, header
        const welcome = "Welcome to 30 Days Of React";
        const title = "Getting Started React";
        const subtitle = "JavaScript Library";
        const author = {
            firstName: "Asabeneh",
            lastName: "Yetayeh",
        };
        const date = "Oct 2, 2020";

        // JSX element, header
        const header = (
            <header>
                <div className="header-wrapper">
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        Instructor: {author.firstName} {author.lastName}
                    </p>
                    <small>Date: {date}</small>
                </div>
            </header>
        );

        const numOne = 3;
        const numTwo = 2;

        const result = (
            <p>
                {numOne} + {numTwo} = {numOne + numTwo}
            </p>
        );

        const yearBorn = 1820;
        const currentYear = new Date().getFullYear();
        const age = currentYear - yearBorn;
        const personAge = (
            <p>
                {" "}
                {author.firstName} {author.lastName} is {age} years old
            </p>
        );

        // JSX element, main
        const techs = ["HTML", "CSS", "JavaScript"];
        const techsFormatted = techs.map((tech, index) => <li key={index}>{tech}</li>);

        // JSX element, main
        const main = (
            <main>
                <div className="main-wrapper">
                    <p>
                        Prerequisite to get started{" "}
                        <strong>
                            <em>react.js</em>
                        </strong>
                        :
                    </p>
                    <ul>{techsFormatted}</ul>
                    {result}
                    {personAge}
                </div>
            </main>
        );

        const copyRight = "Copyright 2020";

        // JSX element, footer
        const footer = (
            <footer>
                <div className="footer-wrapper">
                    <p>{copyRight}</p>
                </div>
            </footer>
        );

        // JSX element, app
        return (
            <div className="app">
                {header}
                {main}
                <SolutionsList />
                {footer}
            </div>
        );
    }
}

export default App;