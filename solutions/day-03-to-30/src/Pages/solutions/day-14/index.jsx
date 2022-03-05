import QuestionsAnswers from "../../../Components/QuestionsAnswers"

const Day14 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is component life cycles ?',
            'answer': 'Component lifecycle is composed of three main phases: mounting, updating and unmounting. This is just the lifecycle of any React component, similar to birth, adult, elderly and death for humans.',
        },
        {
            'question': 'What is the purpose of life cycles ?',
            'answer': 'They\'re useful for doing specific actions at specific moments, for example if we need to get some data from an API, we will get these in componentDidMount method, during the mounting phase.',
        },
        {
            'question': 'What are the three stages of a component life cycle ?',
            'answer': 'Mounting, Updating, Unmounting.',
        },
        {
            'question': 'What does mounting means ?',
            'answer': 'This is when the component is inserted into the DOM, starting by running constructor, then getDerivedStateFromProps, then render and finally componentDidMount method.',
        },
        {
            'question': 'What does updating means ?',
            'answer': 'This is when a state or props changed, the component is updated, which starting these methods, in that order: getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and finally componentDidUpdate.',
        },
        {
            'question': 'What does unmounting means ?',
            'answer': 'This is when the component is deleted from the DOM.',
        },
        {
            'question': 'What is the most common built-in mounting life cycle method ?',
            'answer': 'I think the most common one is componentDidMount().',
        },
        {
            'question': 'What are the mounting life cycle methods ?',
            'answer': 'As I\'ve said above: constructor, getDerivedStateFromProps, render and componentDidMount',
        },
        {
            'question': 'What are the updating life cycle methods ?',
            'answer': 'As I\ve said above: getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate.',
        },
        {
            'question': 'What is the unmounting life cycle method ?',
            'answer': 'The only one is : componentWillUnmount.',
        }
    ]

    return (
        <div>
            <QuestionsAnswers list={level1} />
        </div>
    )
}

export default Day14