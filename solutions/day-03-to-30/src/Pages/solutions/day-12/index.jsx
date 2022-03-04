import { useState } from "react"
import QuestionsAnswers from "../../../Components/QuestionsAnswers"
import './style.css'

const Day12 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is the importance of form?',
            'answer': 'Forms are very important because they\'re used to collect data from users, for example to login or logout, so we\'re using them very often!',
        },
        {
            'question': 'How many input types do you know?',
            'answer': 'Text, number, range, email, password, tel, checkbox, radio, color, url, image, file, hidden, date, datetime-local, month, week, time, reset, search, submit & button.',
        },
        {
            'question': 'Mention at least four attributes of an input element',
            'answer': 'Type, value, name and placeholder',
        },
        {
            'question': 'What is the importance of htmlFor?',
            'answer': 'htmlFor are very interesting because they allow us to kind of linking a label to an input based on the input id, which means that when we will click on the label, it will automatically allow us to type in the input.',
        },
        {
            'question': 'Write an input type which is not given in the example if there is?',
            'answer': '<input type="range">',
        },
        {
            'question': 'What is a controlled input?',
            'answer': 'This is an input which value is based on state and onChange function, which means that we will use a state value to get value of an input.',
        },
        {
            'question': 'What do you need to write a controlled input?',
            'answer': 'We need to define a state value for storing value of the input, and to declare a function which will be called on input onChange event, which will get the input value and set it to the state variable value.',
        },
        {
            'question': 'What event type do you use to listen changes on an input field?',
            'answer': 'We\'re listening onChange event on an input field.',
        },
        {
            'question': 'What is the value of a checked checkbox?',
            'answer': 'The default value of a checked checkbox is on.',
        },
        {
            'question': 'When do you use onChange, onBlur, onSubmit?',
            'answer': 'onChange is when we want to start a function at each change of an element value, onBlur is when we want to start a function each time an object loses focus and onSubmit when we want to start a function at each submit of a form.',
        },
        {
            'question': 'What is the purpose of writing e.preventDefault() inside the submit handler method?',
            'answer': 'This is removing all the default submit actions (for example refreshing the page).',
        },
        {
            'question': 'How do you bind data in React? The first input field example is data binding in React.',
            'answer': 'By using state value and for example at onChange event of an input updating the state value to fit with the input value.',
        },
        {
            'question': 'What is validation?',
            'answer': 'Validation is a process of checking that form inputs are fitting well with some rules.',
        },
        {
            'question': 'What is the event type you use to listen when an input changes?',
            'answer': 'We\'re using onChange event.',
        },
        {
            'question': 'What are event types do you use to validate an input?',
            'answer': 'We\'re using onChange event.',
        }
    ]

    const   [firstName, setFirstName] = useState(''),
            [lastName, setLastName] = useState(''),
            [email, setEmail] = useState(''),
            [errors, setErrors] = useState([])

    const validation = () => {
        const   firstNameValid = firstName.length > 1,
                lastNameValid = lastName.length > 1,
                emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
        let newErrors = []
        if(!firstNameValid) newErrors.push('Firstname is not valid!')
        if(!lastNameValid) newErrors.push('Lastname is not valid')
        if(!emailValid) newErrors.push('Email is not valid!')
        setErrors(newErrors)

        return (firstNameValid && lastNameValid && emailValid) ? true : false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validation()) {
            console.log("Form is valid !", firstName, lastName, email)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value)
                break;

            case 'lastName':
                setLastName(value)
                break;

            case 'email':
                setEmail(value)
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <QuestionsAnswers list={level1} />
            <form className="level2" onSubmit={handleSubmit} noValidate>
                {errors.map((error, index) => <p key={index} className="error">{error}</p>)}
                <input type='text' value={firstName} name="firstName" placeholder='Your first name' onChange={handleChange} />
                <input type='text' value={lastName} name="lastName" placeholder='Your last name' onChange={handleChange} />
                <input type='email' value={email} name="email" placeholder='Your email' onChange={handleChange} />
                <input type='submit' />
            </form>
        </div>
    )
    
}

export default Day12