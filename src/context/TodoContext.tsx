import { arrayMove } from '@dnd-kit/sortable'
import { createContext, useContext, useEffect, useState } from 'react'
import { http } from '../lib/http'

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
    try {
      const { data } = await http.post<Todo>('/todo', {
        name,
        isChecked: false,
      })

      setTodos((state) => [
        ...state,
        {
          id: data.id,
          name: data.name,
          isChecked: data.isChecked,
        },
      ])
    } catch (e) {}
  }

  const removeTodo = async (id: string) => {
    try {
      await http.delete<Todo>(`/todo/${id}`)

      setTodos((state) => {
        const todo = state.findIndex((todo) => todo.id === id)

        if (todo < 0) return state

        return state.splice(todo, 1)
      })
    } catch (e) {}
  }

  const removeAllTodosComplete = async () => {
    try {
      todos.forEach(async (item) => {
        if (item.isChecked) {
          await http.delete(`/todo/${item.id}`)
        }
      })
      setTodos((state) => {
        return state.filter((todo) => todo.isChecked !== true)
      })
    } catch (e) {}
  }

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.findIndex((todo) => todo.id === id)

      if (todo < 0) return

      await http.patch<Todo>(`/todo/${id}`, {
        isChecked: !todos[todo].isChecked,
      })

      setTodos((state) => {
        const todo = state.findIndex((todo) => todo.id === id)

        state[todo].isChecked = !state[todo].isChecked

        return [...state]
      })
    } catch (e) {}
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
