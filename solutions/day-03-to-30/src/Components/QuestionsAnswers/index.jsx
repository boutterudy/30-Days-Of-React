import './style.css'

const QuestionsAnswers = (props) => {
    return <ul className={props.className ? 'list ' + props.className : 'list'}>
                {props.list.map((question, index) => (
                    <li key={index}>
                        <h3 className="question">{question.question}</h3>
                        <p className="answer">{question.answer}</p>
                    </li>
                ))}
            </ul>
}

export default QuestionsAnswers