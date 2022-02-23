import HtmlLogo from "../../Assets/Images/html_logo.png"
import CssLogo from "../../Assets/Images/css_logo.png"
import ReactLogo from "../../Assets/Images/react_logo.png"
import './style.css'

const FrontEndTechs = () => {
    return (
        <section className="front-techs">
            <h2>Front End Technologies</h2>
            <div className="front-techs-images">
                <img src={HtmlLogo} alt="HTML logo" />
                <img src={CssLogo} alt="CSS logo" />
                <img src={ReactLogo} alt="React logo" />
            </div>
        </section>
        )
    }
    
export default FrontEndTechs