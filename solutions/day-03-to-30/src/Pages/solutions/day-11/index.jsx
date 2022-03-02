import { useState } from "react"
import QuestionsAnswers from "../../../Components/QuestionsAnswers"
import './style.css'

const Day11 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is an event?',
            'answer': 'An event is an action or occurrence recognized by a software, for example when we\'re clicking on a button.',
        },
        {
            'question': 'What is the different between an HTML element event and React event?',
            'answer': 'React events are named using camelCase, rather than lowercase and with JSX we pass a function as the event handler, rathen than a string.',
        },
        {
            'question': 'Write at least 4 keyboard events?',
            'answer': 'I think there is only 3 keyboard events: onKeyUp, onKeyDown & onKeyPress',
        },
        {
            'question': 'Write at least 8 mouse events?',
            'answer': 'Here are some mouse events: onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp & onClick.',
        },
        {
            'question': 'What are the most common mouse and keyboard events?',
            'answer': 'I think most common mouse and keyboard events are: onChange, onKeyUp, onKeyDown, onSubmit, onInput and onClick.',
        },
        {
            'question': 'Write an event specific to input element?',
            'answer': 'Here are some specific events to input element: onChange & onInput',
        },
        {
            'question': 'Write an event specific to form element?',
            'answer': 'Here are some specific events to form elment: onReset & onSubmit',
        },
        {
            'question': 'Display the coordinate of the view port when a mouse is moving on the body?',
            'answer': 'Just to display them in console, e variable is the event passed in paremeter: console.log(e.screenX, e.screenY)',
        },
        {
            'question': 'What is the difference between onInput, onChange and onBlur?',
            'answer': 'In React, onInput is when a user writes something in an <input> field, onChange is same than onInput event (in React only) and onBlur event occurs when an object loses focus (could be an <input> or anything else).',
        },
        {
            'question': 'Where do we put the onSubmit event ?',
            'answer': 'On a <form></form> element, like that: <form onSubmit={functionToCall}></form>',
        }
    ]

    const   [ x, setX ] = useState(),
            [ y, setY ] = useState()

    

    const moveToRandomPosition = (e) => {
        console.log("Move that element")
        let parent = e.target.parentElement,
            element = e.target

        setX(Math.random() * (parent.offsetWidth - element.offsetWidth))
        setY(Math.random() * (parent.offsetHeight - element.offsetHeight))
        console.log(x, y)
    }

    return (
        <div>
            <QuestionsAnswers list={level1} />
            <div className="level2">
                <p style={x && y ? { left: x, top: y} : {}} onMouseEnter={moveToRandomPosition}>30 Days of React</p>
            </div>
        </div>
    )
}

export default Day11