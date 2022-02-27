import React from "react";
import HexaColorsGenerator from "../../../Components/HexaColorsGenerator";
import NumberGenerator from "../../../Components/NumberGenerator";
import QuestionsAnswers from "../../../Components/QuestionsAnswers";
import WorldPopulationGraph from "../../../Components/WorldPopulationGraph";

class Day06 extends React.Component {
    render() {
        // Level 1 questions and answers
        const level1 = [
            {
                'question': 'Why you need to map an array ?',
                'answer': 'In React, we\'re mappping an array when we want to create a list of JSX element based on an array.',
            },
            {
                'question': 'Why we need keys during mapping an array ?',
                'answer': 'We need to use keys during mapping an array to helps React to identify which items of the array have been added, changed or removed.',
            },
            {
                'question': 'What is the importance of destructuring your code ?',
                'answer': 'Destructuring your code helps to keep it clean and readable, easier to understand and maintain and also allowing us to define default values.',
            },
            {
                'question': 'Does destructuring make your code clean and easy to read ?',
                'answer': 'For sure! This is improving our code quality and making it so easier to read and understand, but also avoiding us to create useless code (when we can use destructurating)!',
            }
        ]
        
        // Level 3 world population data
        const worldPopulation = [
            { country: 'World', population: 7693165599 },
            { country: 'China', population: 1377422166 },
            { country: 'India', population: 1295210000 },
            { country: 'USA', population: 323947000 },
            { country: 'Indonesia', population: 258705000 },
            { country: 'Brazil', population: 206135893 },
            { country: 'Pakistan', population: 194125062 },
            { country: 'Nigeria', population: 186988000 },
            { country: 'Bangladesh', population: 161006790 },
            { country: 'Russian Federation', population: 146599183 },
            { country: 'Japan', population: 126960000 },
        ]

        return (
            <div>
                <div className="level1">
                <QuestionsAnswers list={level1} />
                </div>            
                <div className="level2">
                    <NumberGenerator />
                    <HexaColorsGenerator number="32" version="2" />
                </div>
                <div className="level3">
                    <WorldPopulationGraph data={worldPopulation} />
                </div>
            </div>
        )
    }
}

export default Day06;