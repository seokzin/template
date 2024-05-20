import { useState } from 'react'

const useCounter = (value = 0) => {
  const [count, setCount] = useState(value)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(value)

  return { count, increment, decrement, reset }
}

export default useCounter
