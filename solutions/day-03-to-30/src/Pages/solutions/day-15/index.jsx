import QuestionsAnswers from "../../../Components/QuestionsAnswers"
import classNames from 'classnames'
import { useEffect, useState } from "react"
import './style.scss'

const Day15 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            'question': 'What is a package ?',
            'answer': 'A package is a set of code ready to use, that we can implement in our projects.',
        },
        {
            'question': 'What is a third party package ?',
            'answer': 'External packages, insalled for example using npm.',
        },
        {
            'question': 'Do you have to use third party packages ?',
            'answer': 'In general yes, but not forced to.',
        },
        {
            'question': 'How do you know the popularity and stability of a third party package ?',
            'answer': 'On npm website or package repository.',
        },
        {
            'question': 'How many JavaScript packages are there on the npm registry ?',
            'answer': 'In October 2020, there was 1 418 843 packages.',
        },
        {
            'question': 'How do you install a third party package ?',
            'answer': 'Using npm (npm install package-name or yarn add package-name).',
        },
        {
            'question': 'What packages do you use most frequently ?',
            'answer': 'We can frequently use: node-sass, moment, axios, react-icons, styled-components, reactstrap, lodash and uuid.',
        },
        {
            'question': 'What package do you use to fetch data ?',
            'answer': 'To fetch data we can use axios.',
        },
        {
            'question': 'What is the purpose of classnames package ?',
            'answer': 'Classnames package allow us to conditionally joining classNames together.',
        },
        {
            'question': 'What is the pupose validator package ?',
            'answer': 'To validate strings (example: check if a string is an email).',
        }
    ]

    const [time, setTime] = useState(new Date().getSeconds())
    const [isRed, setRed] = useState(!(time % 2))
    const [isBlue, setBlue] = useState(time% 2)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1)
            setBlue(isBlue => !isBlue)
            setRed(isRed => !isRed)
        }, 1000)
        return () => clearInterval(interval)
      }, [])
    
    return (
        <div>
            <QuestionsAnswers list={level1} />
            <div className={
                classNames({
                    level2: true,
                    blue: isBlue,
                    red: isRed
                })
            }>
                <p>Test {time}</p>
            </div>
        </div>
    )
}

export default Day15