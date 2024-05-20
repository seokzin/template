'use client'

import { Button } from '@/components'
import { useCounter } from '@/hooks'
import { useGetTodoQuery } from '@/queries'
import { useFooStore } from '@/store'
import { add } from '@/utils'

const Home = () => {
  const { foo } = useFooStore()
  const { data, isLoading } = useGetTodoQuery()
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div>
      <h2>Util: {add(3, 4)}</h2>
      <h2>Zustand : {foo}</h2>
      <h2>Tanstack Query:</h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.slice(0, 10).map((todo: { id: string; title: string }) => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </>
      )}

      <h2>Custom hook Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <br />
      <br />

      <Button>Custom Button</Button>
    </div>
  )
}

export default Home
