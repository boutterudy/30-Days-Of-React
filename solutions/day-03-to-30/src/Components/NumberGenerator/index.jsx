import './style.css'

const NumberGenerator = ({ number = 32 }) => {
    // Generate numbers
    let generatedNumbers = []
    for (let i = 0; i < number; i++) {
        generatedNumbers.push(i)
    }

    const isOdd = n => n % 2
    const isPrime = n => {
        for(let i = 2, s = Math.sqrt(n); i <= s; i++)
            if(n % i === 0) return false; 
        return n > 1;
    }

    return (
        <div className="generatedNumbers">
            <h2>30 Days Of React</h2>
            <p>Number Generator</p>
            <div className='numbersWrapper'>
                {generatedNumbers.map((number) => {
                    return <div key={number} className={"number " + (isPrime(number) ? "prime" : (isOdd(number) ? "odd" : "even"))}>
                        {number}
                    </div>
                })}
            </div>
        </div>
    )
}

export default NumberGenerator