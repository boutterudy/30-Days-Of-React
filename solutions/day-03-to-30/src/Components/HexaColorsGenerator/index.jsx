import React from "react"
import "./style.css"

class HexaColorsGenerator extends React.Component {
    render() {
        let hexaColors = [],
            {number = 16, version} = this.props

        for (let i = 0; i < number; i++) {
            let str = '0123456789abcdef'
            let color = ''
            for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
                color += str[index]
            }
            hexaColors.push('#' + color)
        }
        
        return (
            <div className={"colors" + (version ? " v" + version : "")}>
                <h2>30 Days Of React</h2>
                <p>Hexadecimal Colors</p>
                <ul>
                    {hexaColors.map((color, index) => (
                        <li key={index} style={{backgroundColor: color}}>
                            {color}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HexaColorsGenerator