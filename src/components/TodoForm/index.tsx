import { FormEvent, useState } from 'react'
import { UseTodo } from '../../context/TodoContext'
import { Input } from '../ui/input'
export function TodoForm() {
  const [nameTodo, setNameTodo] = useState('')
  const { addTodo } = UseTodo()

  const handleSubmitaddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nameTodo) return

    addTodo({
      name: nameTodo,
    })

    setNameTodo('')
  }

  return (
    <form
      className="rounded-sm flex items-center gap-2 shadow-lg dark:bg-dark-800 bg-light-100 px-5 py-4"
      action=""
      onSubmit={(e) => handleSubmitaddTodo(e)}
    >
      <div className="h-5 w-5 rounded-full border border-light-300 dark:border-dark-700" />
      <Input
        type="text"
        name="todo"
        value={nameTodo}
        onChange={(e) => setNameTodo(e.target.value)}
        placeholder="Create a new todo..."
        className="dark:text-dark-300"
      />
    </form>
  )
}
