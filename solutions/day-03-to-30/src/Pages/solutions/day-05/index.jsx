import QuestionsAnswers from "../../../Components/QuestionsAnswers";
import HtmlLogo from "../../../Assets/Images/html_logo.png"
import CssLogo from "../../../Assets/Images/css_logo.png"
import ReactLogo from "../../../Assets/Images/react_logo.png"
import FrontEndTechs from "../../../Components/FrontEndTechs";
import Newsletter from "../../../Components/Newsletter";
import HexaColorsGenerator from "../../../Components/HexaColorsGenerator";
import UserCard from "../../../Components/UserCard";
import React from "react";

class Day05 extends React.Component {
    render() {
        // Level 1 questions and answers
        const level1 = [
            {
                'question': 'What is props in a React component ?',
                'answer': 'Props are properties that we can use to pass data from one component to another.',
            },
            {
                'question': 'How do you access props in a React component ?',
                'answer': 'To access props in a React component, we\'re defining a function paremeter which will be the props object, then we access to properties of props in the normal way in JS, for example props.myProperty. Props are passed in properties of a React component, so values of properties should be passed in properties to that component.',
            },
            {
                'question': 'What data types can we pass as props to components ?',
                'answer': 'We can pass String, Numbers, Booleans, Arrays, Objects and Functions as props to components.',
            },
            {
                'question': 'What is a propTypes?',
                'answer': 'propTypes is a package that is allowing us to define the data types that we passed to a component.',
            },
            {
                'question': 'What is a default propTypes?',
                'answer': 'Default propTypes are default prop types for a component defined by the defaultProps property.',
            }
        ]

        // Level 2
        // FrontEndTechs list
        const techs = [
            {
                'name': 'HTML',
                'logo': HtmlLogo,
            },
            {
                'name': 'CSS',
                'logo': CssLogo,
            },
            {
                'name': 'React',
                'logo': ReactLogo,
            }
        ]

        // Newsletter description
        const newsletterDescription = 'Sign up with your email address to receive news and updates.'

        // UserCard skills
        const skills = [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Markdown',
            'Java',
            'ReactJS',
            'Bootstrap',
            'jQuery',
            'Next.js',
            'NestJS',
            'Symfony 5',
            'Xamarin',
            'Ioninc',
            'TypeORM',
            'MySQL',
            'PL SQL',
            'Doctrine',
            'Oracle Database',
            'SQL Server',
            'Windows',
            'Linux',
            'Mac',
            'Merise',
            'UML',
            'Agile (SCRUM)',
            'Git',
            'Postman',
            'WAMP',
            'Android Studio',
            'Atom',
            'PHP Storm',
            'VS Code',
            'Eclipse'
        ]

        return (
            <div>
                <div className="level1">
                <QuestionsAnswers list={level1} />
                </div>            
                <div className="level2">
                    <FrontEndTechs list={techs} />
                    <Newsletter description={newsletterDescription} />
                </div>
                <div className="level3">
                    <HexaColorsGenerator number="6" />
                    <UserCard name="Rudy Boutte" description="Application Designer Developer, France" skills={skills} joinedOn="Feb 20, 2022" image="https://media-exp1.licdn.com/dms/image/C5603AQE0dlK4_TaarQ/profile-displayphoto-shrink_800_800/0/1645093529353?e=1651104000&v=beta&t=Xw7brFbPjTUQVy4__fYLPr4l1gp9TokX8iwNWiWDkJU" />
                </div>
            </div>
        )
    }
}

export default Day05;