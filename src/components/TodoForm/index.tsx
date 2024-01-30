import { FormEvent, useState } from 'react'
import { UseTodo } from '../../context/TodoContext'
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
      <div className="h-[18px] w-[18px] rounded-full border border-zinc-900" />
      <input
        type="text"
        name="todo"
        value={nameTodo}
        onChange={(e) => setNameTodo(e.target.value)}
        className="bg-transparent text-white-500 outline-none"
        placeholder="Create a new todo..."
      />
    </form>
  )
}
