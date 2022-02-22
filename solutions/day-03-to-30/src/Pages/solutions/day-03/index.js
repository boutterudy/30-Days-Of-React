import HtmlLogo from "../../../Assets/Images/html_logo.png";
import CssLogo from "../../../Assets/Images/css_logo.png";
import ReactLogo from "../../../Assets/Images/react_logo.png";
import style from "./style.css";
import UserCard from "../../../Components/UserCard";

export default function Day03() {
    const level1 = [
        {
            question: "What is a module?",
            answer: "Single or multiple functions that we can export and import to reuse them in our project.",
        },
        {
            question: "What is package?",
            answer: "A package is a module or collection of modules that we can install to our project.",
        },
        {
            question: "What is the difference between a module and a package?",
            answer: "A package is composed of module(s), where a module can be a part of a package or just an independant module that is in our project.",
        },
        {
            question: "What is NPM?",
            answer: "Node Package Manager is a package manager that allows us to install, update, create, distribute or delete Node packages.",
        },
        {
            question: "What is Webpack?",
            answer: "Webpack is a bundle module which mainly group our files into one file, optimizate our project and improve in general our web app performances.",
        },
        {
            question: "How do you create a new React project?",
            answer: "We can create a new React project by running that command : npx create-react-app name-of-project. We can also use create-react-app name-of-project if we've globally installed create-react-app package.",
        },
        {
            question:
                "What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore, node_modules and public)?",
            answer: "package.json contains the list of packages we've installed and which are required in our project for dev or production env. package-lock.json or yarn.lock contains list of packages versions currenlty used in the project, which can change at each npm install. .gitignore contains files and folders list that we want to exclude from our git project (never committed). node_modules is a folder that contains each node packages that we've installed in our project. public is a folder that contains our unique HTML file, robots.txt, favicon.ico, other images (open graph images) and manifest.json.",
        },
        {
            question:
                "What is your favorite code editor (I believe that it is Visual Studio Code)?",
            answer: "For sure, VSC is the best code editor ever!",
        },
        {
            question:
                "Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).    ",
            answer: "Done! I've added Prettier, ESLint and ES7 React/Redux/React-Native snippets.",
        },
        {
            question:
                "Try to make a different custom module in a different file and import it to index.js.",
            answer: "Done! I've created a simple SolutionsList module.",
        },
    ];

    const level2 = (
        <div className="level2">
            <section className="front-techs">
                <h2>Front End Technologies</h2>
                <div className="front-techs-images">
                    <img src={HtmlLogo} alt="HTML logo" />
                    <img src={CssLogo} alt="CSS logo" />
                    <img src={ReactLogo} alt="React logo" />
                </div>
            </section>
            <section className="newsletter">
                <h2>Subscribe</h2>
                <p>
                    Sign up with your email address to receive news and updates.
                </p>
                <div className="newsletter-inputs">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="email" placeholder="Email" />
                </div>
                <button type="button" className="large">
                    Subscribe
                </button>
            </section>
        </div>
    );

    return (
        <div>
            <ul className="level1">
                {level1.map((question, index) => (
                    <li key={index}>
                        <h3 className="question">{question.question}</h3>
                        <p className="answer">{question.answer}</p>
                    </li>
                ))}
            </ul>
            {level2}
            <UserCard />
        </div>
    );
}
