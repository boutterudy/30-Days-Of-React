import QuestionsAnswers from "../../../Components/QuestionsAnswers";

const Day22 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            question: "What is the importance of form?",
            answer: "They're used to collect data from users.",
        },
        {
            question: "How many input types do you know?",
            answer: "I know almost 23 input types (text, number, range, email, password, tel, checkbox, radio, color, url, image, file, hidden, date, datetime-local, month, week, time, reset, search, submit and button).",
        },
        {
            question: "Mention at least four attributes of an input element",
            answer: "Four attributes of input element: type, value, onChange & onBlur",
        },
        {
            question: "What is the importance of htmlFor?",
            answer: "It's used to link a label to it's input: when clicking on that label we will focus the linked input.",
        },
        {
            question:
                "Write an input type which is not given in the example if there is?",
            answer: '<input type="range" />',
        },
        {
            question: "What is a controlled input?",
            answer: "A controlled input is an input which is using state to reflect it's value.",
        },
        {
            question: "What do you need to write a controlled input?",
            answer: "We need to create a state, pass it as value props of the input, and create a function to update the state based on the input changes, then pass that function as onChange props to the input.",
        },
        {
            question:
                "What event type do you use to listen changes on an input field?",
            answer: "To listen changes on an input field we're using onChange event type.",
        },
        {
            question: "What is the value of a checked checkbox?",
            answer: "A checked checkbox value is equal to the value props of the input, and by default is 'on'.",
        },
        {
            question: "When do you use onChange, onBlur, onSubmit?",
            answer: "onChange to do something at every change of the input, onBlur to do something everytime the user is unfocusing the input and onSubmit to do something when the user submit a form.",
        },
        {
            question:
                "What is the purpose of writing e.preventDefault() inside the submit handler method?",
            answer: "e.preventDefault() is canceling default actions.",
        },
        {
            question:
                "How do you bind data in React? The first input field example is data binding in React.",
            answer: "To bind data in React we're just creating a controlled input with a state, as described above.",
        },
        {
            question: "What is validation?",
            answer: "Validation is used to check that every input field is passing verified data.",
        },
        {
            question:
                "What is the event type you use to listen when an input changes?",
            answer: "To listen when an input changes we're using the onChange event type.",
        },
        {
            question: "What are event types do you use to validate an input?",
            answer: "In the example, we've used the onBlur event to check validity of an input, but we can also use onChange event.",
        },
    ];

    return (
        <div>
            <QuestionsAnswers list={level1} />
        </div>
    );
};

export default Day22;
