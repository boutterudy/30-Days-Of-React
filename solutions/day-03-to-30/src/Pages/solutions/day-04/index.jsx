import AlertBox from "../../../Components/AlertBox";
import Button from "../../../Components/Button"
import FrontEndTechs from "../../../Components/FrontEndTechs";
import HexaColorsGenerator from "../../../Components/HexaColorsGenerator";
import Input from "../../../Components/Input";
import Newsletter from "../../../Components/Newsletter";
import QuestionsAnswers from "../../../Components/QuestionsAnswers";
import UserCard from "../../../Components/UserCard";
import "./style.css"

const Day04 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is the difference between a regular function and an arrow function?',
            'answer': 'Arrow functions are using a more concise syntax than regular ones, they also don\'t have their own value of this and are onlmy callable, where regular functions are constructible and callable. Also, where in regular functions you can have duplicated named parameters, in arrow functions this is impossible to have duplicated named parameters.',
        },
        {
            'question': 'What is a React Component?',
            'answer': 'A React Component is a small reusable code. A React application is composed of multiple components, which are putted together to create the entire application. They can be functional components or class-based component.',
        },
        {
            'question': 'How do you make a React functional component?',
            'answer': 'To create a React functional comonent, we need to declare a JS function (named using CamelCase) that is returning one JSX component.',
        },
        {
            'question': 'What is the difference between a pure JavaScript function and a functional component?',
            'answer': 'I think the main difference between a pure JS function and a functional component is that a functional component always return one JSX component, where a JS function can (or not) return anything else.',
        },
        {
            'question': 'How small is a React component?',
            'answer': 'A React component can be composed of one simple line of code, for example just a simple <button>Button</button> returned by a function is a valid React component.',
        },
        {
            'question': 'Can we make a button or input field component?',
            'answer': 'For sure we can!',
        },
        {
            'question': 'Make a reusable Button component.',
            'answer': 'Done! This is clearly better like that.',
        },
        {
            'question': 'Make a reusable InputField component.',
            'answer': 'Boom! Done too!',
        },
        {
            'question': 'Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).',
            'answer': 'Again done!',
        }
    ]

    return (
        <div>
            <div className="level1">
                <QuestionsAnswers list={level1} />
                <div className="components">
                    <Button>Crazy button</Button>
                    <Input type="number" />
                </div>
                <AlertBox type="warning" />
            </div>
            <div className="level2">
                <FrontEndTechs />
                <Newsletter />
            </div>
            <div className="level3">
                <HexaColorsGenerator number="5" />
                <UserCard />
            </div>
        </div>
    )
}

export default Day04;