import React from 'react'
import './style.css'

class QuestionsAnswers extends React.Component {
    render() {
        return <ul className={this.props.className ? 'list ' + this.props.className : 'list'}>
                {this.props.list.map((question, index) => (
                    <li key={index}>
                        <h3 className="question">{question.question}</h3>
                        <p className="answer">{question.answer}</p>
                    </li>
                ))}
            </ul>
    }
}

export default QuestionsAnswers