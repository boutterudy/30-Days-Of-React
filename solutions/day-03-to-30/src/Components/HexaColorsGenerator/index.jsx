import "./style.css"

const HexaColorsGenerator = (props) => {
    let hexaColors = []
    for (let i = 0; i < props.number; i++) {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        hexaColors.push('#' + color)
    }
    
    return (
        <ul className="colors">
            {hexaColors.map((color, index) => (
                <li key={index} style={{backgroundColor: color}}>
                    {color}
                </li>
            ))}
        </ul>
    )
}

export default HexaColorsGenerator