import React from 'react'
import './style.css'

class UserCard extends React.Component {
    render() {
        return (
            <section className='userCard'>
                <img src={this.props.image} alt={this.props.name} />
                <h1 className='userName'>{this.props.name} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg></h1>
                <p className='userDescription'>{this.props.description}</p>
                <section className='userSkills'>
                    <h1>Skills</h1>
                    <ul>
                        {
                            this.props.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))
                        }
                    </ul>
                </section>
                <p className='userJoinedOn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg> Joined on Feb 20, 2022</p>
            </section>
        )
    }
}

export default UserCard