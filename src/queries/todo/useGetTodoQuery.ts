import { useQuery } from '@tanstack/react-query'

export const useGetTodoQuery = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: async () => (await fetch('https://jsonplaceholder.typicode.com/todos')).json(),
  })
