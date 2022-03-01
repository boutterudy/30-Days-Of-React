import LoadingSimulator from "../../../Components/LoadingSimulator"
import Newsletter from "../../../Components/Newsletter"
import NumberGenerator from "../../../Components/NumberGenerator"
import QuestionsAnswers from "../../../Components/QuestionsAnswers"
import RandomCountryGenerator from "../../../Components/RandomCountryGenerator"
import SeasonCard from "../../../Components/SeasonCard"
import TimeOfTheDayCard from "../../../Components/TimeOfTheDayCard"

const Day10 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is the importance of React Folder Structure and File Naming',
            'answer': 'React Folder Structure and File Naming are very important to develop a project with good practises. If at the starting of a project, you don\'t follow any rules, and other developers are starting to work on it with you, it will be a mess very fast, because no one will respect any folder structure, any file naming, and everything will have nonsense, it will be harder and harder to maintain the application.',
        },
        {
            'question': 'How do you export file',
            'answer': 'To export a file we can use named exports (e.g: export const App = () => <div></div>) and default exports (export default App)',
        },
        {
            'question': 'How do you import file',
            'answer': 'Just by using import, for example if we want to import React: import React from \'react\', then we can use React.',
        },
        {
            'question': 'Make a component of module and export it as named or default export',
            'answer': 'Already done!',
        },
        {
            'question': 'Make a component or module and import it',
            'answer': 'Same!',
        },
        {
            'question': 'Change all the components you have to different folder structure',
            'answer': 'My folder structure was already pretty nice, of course there is probably some things to add, but I think for our 30 Days Of React it will be fine.',
        },
    ]

    return (
        <div>
            <QuestionsAnswers list={level1} />
            <div className="portfolio level2">
                <LoadingSimulator />
                <Newsletter />
                <NumberGenerator number="64" />
                <RandomCountryGenerator />
                <TimeOfTheDayCard />
                <SeasonCard />
            </div>
        </div>
    )
}

export default Day10