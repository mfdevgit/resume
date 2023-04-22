import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Left from './modules/left/Left'
import Right from './modules/right/Right'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='app'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Left />
                    <Right />
                </>
            )}
        </div>
    )
}
