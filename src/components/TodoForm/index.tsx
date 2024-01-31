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
      className="flex items-center gap-2 bg-gray-700 px-4 py-[18px]"
      action=""
      onSubmit={(e) => handleSubmitaddTodo(e)}
    >
      <div className="h-5 w-5 rounded-full border border-zinc-900" />
      <Input
        type="text"
        name="todo"
        value={nameTodo}
        onChange={(e) => setNameTodo(e.target.value)}
        placeholder="Create a new todo..."
        className="text-white-500"
      />
    </form>
  )
}
