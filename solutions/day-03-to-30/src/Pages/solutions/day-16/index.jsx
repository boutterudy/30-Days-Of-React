import Button from "../../../Components/Button"
import ButtonWithStyles from "../../../Components/ButtonWithStyles"
import QuestionsAnswers from "../../../Components/QuestionsAnswers"

const Day16 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is higher order function ?',
            'answer': 'An higher order function is a function which is returning another function.',
        },
        {
            'question': 'What is Higher Order Component',
            'answer': 'An higher order component is a component which is returning another component.',
        },
        {
            'question': 'What is the difference between higher order function and higher order component?',
            'answer': 'Instead of returning a function, higher order component is returning a component, where higher order function is returning a function.',
        },
        {
            'question': 'A higher order component can allow us to enhance a component. (T or F)',
            'answer': 'True!',
        }
    ]

    const StyledButton = ButtonWithStyles(Button, 'warning')

    return (
        <div>
            <QuestionsAnswers list={level1} />
            <div className="level2">
                <StyledButton>Button to test</StyledButton>
            </div>
        </div>
    )
}

export default Day16