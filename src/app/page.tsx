'use client'

import { Button, Text } from '@/components'
import { useCounter } from '@/hooks'
import { useGetTodoQuery } from '@/queries'
import { useDarkModeStore } from '@/store'
import { add } from '@/utils'

const Home = () => {
  const { data, isLoading } = useGetTodoQuery()
  const { count, increment, decrement, reset } = useCounter()
  const { toggleDarkMode } = useDarkModeStore()

  return (
    <div>
      <Text>Util: {add(3, 4)}</Text>
      <Text>Tanstack Query:</Text>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {data.slice(0, 10).map((todo: { id: string; title: string }) => (
            <Text key={todo.id}>{todo.title}</Text>
          ))}
        </>
      )}

      <Text>Custom hook Counter: {count}</Text>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>

      <br />
      <br />

      <Button onClick={toggleDarkMode}>DarkMode</Button>
    </div>
  )
}

export default Home
