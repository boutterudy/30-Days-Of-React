import QuestionsAnswers from "../../../Components/QuestionsAnswers"

const Day13 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is a controlled input?',
            'answer': 'A controlled input is an input which value is defined as state variable and onChange called function is updating that state to the input value.',
        },
        {
            'question': 'What is an uncontrolled input?',
            'answer': 'An uncontrolled input is an input which has a ref property to allow us to get value of it from the DOM (traditional way to get HTML input value).',
        },
        {
            'question': 'How do you get a content of a certain HTML element in React ?',
            'answer': 'By accessing to current value of an input ref, like that example: myRef.current.value',
        },
        {
            'question': 'Why it is not a good idea to touch the DOM directly in React ?',
            'answer': 'Because React has it\'s own way of handling the DOM manipulation.',
        },
        {
            'question': 'What is most frequently used in React ? Controlled or Uncontrolled input.',
            'answer': 'In React, the most frequently (and recommended by official documentation) used is controlled input.',
        },
        {
            'question': 'What do you need to write uncontrolled input?',
            'answer': 'To have created a ref stored into a variable (example: myRef = React.createRef()) then you can create the uncontrolled input using that created ref as property (example: <input ref={myRef} />)',
        },
        {
            'question': 'Does state is required to write uncontrolled input?',
            'answer': 'Uncontrolled input doesn\'t require usage of state.',
        },
        {
            'question': 'When do you use uncontrolled input?',
            'answer': 'In case that we want to target some element on the DOM, which is allowed using ref property.',
        },
        {
            'question': 'When do you use controlled input?',
            'answer': 'In all other cases.',
        },
        {
            'question': 'Do you use a controlled or uncontrolled input to validate form input fields?',
            'answer': 'I think that\'s better to use controlled input in that case.',
        },
    ]

    return (
        <div>
            <QuestionsAnswers list={level1} />
        </div>
    )
}

export default Day13