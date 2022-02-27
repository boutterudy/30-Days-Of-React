import './style.css'
import React from 'react'

class AlertBox extends React.Component {
    closeAlert(e) {
        e.preventDefault()
        e.target.parentElement.remove()
    }

    render() {
        let content

        switch (this.props.type) {
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
            <div className={"alertBox " + (this.props.type || 'info')}>
                <p>{content}</p>
                <div className='close' onClick={this.closeAlert}>&times;</div>
            </div>
        )
    }
}
    
export default AlertBox;