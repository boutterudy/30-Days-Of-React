import React from 'react'
import './style.css'

class Newsletter extends React.Component {
    render() {
        return (
            <section className="newsletter">
                <h2>Subscribe</h2>
                <p>
                    {this.props.description}
                </p>
                <div className="newsletter-inputs">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="email" placeholder="Email" />
                </div>
                <button type="button" className="large">
                    Subscribe
                </button>
            </section>
        )
    }
}
export default Newsletter