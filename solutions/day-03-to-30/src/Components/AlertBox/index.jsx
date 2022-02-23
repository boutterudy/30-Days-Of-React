import './style.css'

const AlertBox = (props) => {
    let show = true

    function closeAlert(e) {
        e.preventDefault()
        e.target.parentElement.remove()
    }

    let content
    switch (props.type) {
        case 'warning':
            content = 'Warning!'
            break;
        
        case 'success':
            content = 'Success!'
            break;

        default:
            content = 'Neutral.'
            break;
    }
    
    return (
        <div className={"alertBox " + (props.type || 'info')}>
            <p>{content}</p>
            <div className='close' onClick={closeAlert}>&times;</div>
        </div>
    )
}
    
export default AlertBox;