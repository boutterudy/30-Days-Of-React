import { useEffect, useState } from "react"

const LoadingSimulator = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoaded(true)
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            { loaded ? "Content loaded!" : "Loading..." }
        </div>
    )
}

export default LoadingSimulator