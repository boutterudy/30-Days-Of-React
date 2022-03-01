import LoadingSimulator from "../../../Components/LoadingSimulator"
import QuestionsAnswers from "../../../Components/QuestionsAnswers"
import SeasonCard from "../../../Components/SeasonCard"
import TimeOfTheDayCard from "../../../Components/TimeOfTheDayCard"

const Day09 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is conditional rendering?',
            'answer': 'Conditional rendering is a way to render a React Component based on some conditions, like for example if the user is logged in, add logout button to the component, if not logged in show the login button. Just based on some conditions, the final rendered component will be different.',
        },
        {
            'question': 'How do you implement conditional rendering?',
            'answer': 'There is multiple ways to implement conditional rendering. First of all, a simple if/else can work. Secondly, working with ternary operator (condition ? (if true) : (if false)). And last way to do that is to use && operator (condition && (if true)).',
        },
        {
            'question': 'Which method of conditional rendering do you prefer to use?',
            'answer': 'I love using ternary, but I think I will also love to use && operator, that I\'ve just discovered in the 30 Days Of React challenge!',
        }
    ]
    
    return (
        <div>
            <QuestionsAnswers list={level1} />
            <div className="level2">
                <SeasonCard />
                <TimeOfTheDayCard />
            </div>
            <div className="level3">
                <LoadingSimulator />
            </div>
        </div>
    )
}

export default Day09