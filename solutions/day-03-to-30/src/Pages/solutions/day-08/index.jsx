import React from "react";
import Button from "../../../Components/Button";
import QuestionsAnswers from "../../../Components/QuestionsAnswers";
import RandomCountryGenerator from "../../../Components/RandomCountryGenerator";

class Day08 extends React.Component {
    changeBackground() {
        let body = document.getElementById('root')
        body.style.backgroundColor = body.style.backgroundColor === 'rgb(15, 23, 42)' ? 'inherit' : 'rgb(15, 23, 42)'
        body.style.color = body.style.color === 'white' ? 'inherit' : 'white'
    }

    render() {
        // Level 1 questions and answers
        const level1 = [
            {
                'question': 'What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.',
                'answer': 'I was very happy and excited to learn more about React!',
            },
            {
                'question': 'What is state in React ?',
                'answer': 'React object used to contain data or informations about the component.',
            },
            {
                'question': 'What is the difference between props and state in React ?',
                'answer': 'Props are passed to React components and never changing in the component, where state are parts of React components which can change inside of it.',
            },
            {
                'question': 'How do you access state in a React component ?',
                'answer': 'In React class based components, by using this.state object, and in functional components calling the variable defined (example: const [count, setCount] = useState(0), we will use count variable).',
            },
            {
                'question': 'How do you set a state in a React component ?',
                'answer': 'In a class based components, by using the function this.setState({ stateVariable: newValue }), and in functional components using the declared function to define the new value (example : const [count, setCount] = useState(0), we will use setCount(newValue)).',
            }
        ]

        return (
            <div>
                <div className="level1">
                    <QuestionsAnswers list={level1} />
                </div>            
                <div className="level2">
                    <Button onClick={this.changeBackground}>Change parent background</Button>
                    <RandomCountryGenerator />
                </div>
                <div className="level3">
                </div>
            </div>
        )
    }
}

export default Day08;