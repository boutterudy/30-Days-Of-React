import './style.css'

const Newsletter = () => {
    return (
        <section className="newsletter">
            <h2>Subscribe</h2>
            <p>
                Sign up with your email address to receive news and updates.
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
    
export default Newsletter