import React from 'react'
import './style.css'

class FrontEndTechs extends React.Component {
    render() {
        return (
            <section className="front-techs">
                <h2>Front End Technologies</h2>
                <div className="front-techs-images">
                    {this.props.list.map((tech, index) => <img src={tech.logo} alt={tech.name + " logo"} key={index} />)}
                </div>
            </section>
        )
    }
}

export default FrontEndTechs