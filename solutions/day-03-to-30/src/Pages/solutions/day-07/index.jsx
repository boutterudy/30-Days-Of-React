import HexaColorsGenerator from "../../../Components/HexaColorsGenerator";
import NumberGenerator from "../../../Components/NumberGenerator";
import QuestionsAnswers from "../../../Components/QuestionsAnswers";
import WorldPopulationGraph from "../../../Components/WorldPopulationGraph";

const Day07 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'How do you write a pure JavaScript function',
            'answer': 'Just like that: class Name { constructor(props) {} }',
        },
        {
            'question': 'What is inheritance and how do you make a child from a parent class?',
            'answer': 'Just a way to create a React Component properties by adding an extends React.Component after the class Name: class Name extends React.Component { ... }',
        },
        {
            'question': 'What is class based React component ?',
            'answer': 'A JavaScript class which inherits from React.Component.',
        },
        {
            'question': 'What is the difference between functional React component and class based React component ?',
            'answer': 'Before React 16.8.0 functional components wasn\'t able to use state and life cycle, but Class components was able. Now both can use states and life cycle, functional component by using React hooks.',
        },
        {
            'question': 'When do we need to use class based components instead of functional components',
            'answer': 'Most of the time, the container or parent component can be written as class component, and others as functional components, but after v16.8.0 of React, we can write every component as functional components.',
        },
        {
            'question': 'What is the use cases of class based component ?',
            'answer': 'As I\'ve said in the last answer, the containers or parent components are usually written using Class based components.',
        },
        {
            'question': 'Which type of component do use most frequently ? functional or class-based component',
            'answer': 'I think we should use functional components more frequently than class-based components.',
        },
        {
            'question': 'What is React life cycle ? (not covered yet) ?',
            'answer': 'Series of methods that are invoked in different stages of the component\'s experience.',
        },
        {
            'question': 'What is state in React ? (not covered yet)',
            'answer': 'React object used to contain data or informations about the component.',
        }
    ]

    return (
        <div>
            <div className="level1">
               <QuestionsAnswers list={level1} />
            </div>            
            <div className="level2">
            </div>
            <div className="level3">
            </div>
        </div>
    )
}

export default Day07;