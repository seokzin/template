import { create } from 'zustand'

interface State {
  foo: string
}

interface Action {
  setFoo: (foo: string) => void
}

export const useFooStore = create<State & Action>((set) => ({
  foo: 'foo',
  setFoo: (foo) => set({ foo: foo }),
}))
