import { arrayMove } from '@dnd-kit/sortable'
import { createContext, useContext, useEffect, useState } from 'react'

interface Todo {
  id: string
  name: string
  isChecked: boolean
}

interface TodoFormData {
  name: string
}

interface TodoReOrderData {
  activeId: string
  overId: string
}

interface TodoContextType {
  todos: Todo[]
  addTodo: (data: TodoFormData) => void
  removeTodo: (id: string) => void
  removeAllTodosComplete: () => void
  toggleTodo: (id: string) => void
  reOrderTodoList: (data: TodoReOrderData) => void
}

export const TodoContext = createContext({} as TodoContextType)

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const data = localStorage.getItem('@todo:todos')

    if (data) {
      return JSON.parse(data)
    }

    return []
  })

  const addTodo = async ({ name }: TodoFormData) => {
    const todo = {
      id: crypto.randomUUID(),
      name,
      isChecked: false,
    }

    setTodos((state) => [...state, todo])
  }

  const removeTodo = async (id: string) => {
    setTodos((state) => {
      const isTodoExistState = state.findIndex((todo) => todo.id === id)
      if (isTodoExistState === -1) return state
      return state.filter((todo) => todo.id !== state[isTodoExistState].id)
    })
  }

  const removeAllTodosComplete = async () => {
    setTodos((state) => {
      return state.filter((todo) => todo.isChecked !== true)
    })
  }

  const toggleTodo = async (id: string) => {
    setTodos((state) => {
      const todo = state.findIndex((todo) => todo.id === id)

      if (todo === -1) return state

      state[todo].isChecked = !state[todo].isChecked

      return [...state]
    })
  }

  const reOrderTodoList = ({ activeId, overId }: TodoReOrderData) => {
    setTodos((todo) => {
      const oldIndex = todo.findIndex((todo) => todo.id === activeId)
      const newIndex = todo.findIndex((todo) => todo.id === overId)

      return arrayMove(todo, oldIndex, newIndex)
    })
  }

  useEffect(() => {
    localStorage.setItem('@todo:todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider
      value={{
        todos,
        reOrderTodoList,
        addTodo,
        removeTodo,
        removeAllTodosComplete,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const UseTodo = () => useContext(TodoContext)
