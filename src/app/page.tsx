'use client'

import { Button, onPopup, Text } from '@/components'
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
      <Text name="h1">Util: {add(3, 4)}</Text>
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

      <br />
      <br />

      <Button
        onClick={() =>
          onPopup({
            title: '타이틀',
            description: '설명 (optional)',
            confirmText: '확인',
            onConfirm: () => {
              console.log('confirm')
            },
            cancelText: '취소',
            onCancel: () => {
              console.log('cancel')
            },
          })
        }
      >
        Popup
      </Button>
    </div>
  )
}

export default Home
