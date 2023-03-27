import { useState, useEffect } from 'react'
import Left from './components/Left'
import Loader from './components/Loader'
import Right from './components/Right'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
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
