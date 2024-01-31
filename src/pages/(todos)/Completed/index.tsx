import { Button } from '@/components/ui/button'
import { Navigation } from '../../../components/Navigation'
import { Todo } from '../../../components/Todo'
import { UseTodo } from '../../../context/TodoContext'

export function TodosCompleted() {
  const { todos, removeAllTodosComplete } = UseTodo()

  const filteredTodosCompleted = todos.filter((todo) => todo.isChecked === true)

  return (
    <div>
      {filteredTodosCompleted.length > 0 &&
        filteredTodosCompleted.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              check={todo.isChecked}
              name={todo.name}
            />
          )
        })}
      <div className="flex w-full justify-between bg-gray-700 px-4 py-[18px] text-zinc-500">
        <p>{filteredTodosCompleted.length} Items left</p>
        <Button onClick={removeAllTodosComplete}>Clear Completed</Button>
      </div>
      <Navigation />
    </div>
  )
}
