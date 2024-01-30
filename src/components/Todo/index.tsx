import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { UseTodo } from '../../context/TodoContext'
import { Button } from '../Button'
import { Checkbox } from '../CheckBox'
import { Cross } from '../Cross'

interface todoProps {
  id: string
  name: string
  check: boolean
}

export const Todo = ({ id, check, name }: todoProps) => {
  const { removeTodo, toggleTodo } = UseTodo()

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  function handleRemoveTodo(id: string) {
    removeTodo(id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between border-b-2 border-zinc-900 bg-gray-700 px-4 py-[18px] hover:cursor-pointer"
    >
      <form>
        <label className="flex items-center  gap-2 hover:cursor-pointer">
          <Checkbox checked={check} onClick={() => toggleTodo(id)} />
          <span className="text-white-500">{name}</span>
        </label>
      </form>
      <Button onClick={() => handleRemoveTodo(id)}>
        <Cross />
      </Button>
    </div>
  )
}
