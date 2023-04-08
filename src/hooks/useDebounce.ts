import { useEffect, useState } from 'react'

/*
    Classical useDebounce custom hook. Makes delay before value assignment. It continues timeout cycle until
    there are no new actions on selected value
*/

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce
