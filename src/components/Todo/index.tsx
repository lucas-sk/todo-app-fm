import { Button } from '@/components/ui/button'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { UseTodo } from '../../context/TodoContext'
import { Cross } from '../Cross'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

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
  function handleToggleTodo(id: string) {
    toggleTodo(id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between border-b-2 border-zinc-900 bg-gray-700 px-4 py-[18px] hover:cursor-pointer"
    >
      <form className="w-full ">
        <Label
          htmlFor="check"
          className="flex items-center w-full gap-2 hover:cursor-pointer"
        >
          <Checkbox
            id="check"
            checked={check}
            className="rounded-full hover:light-border-gradient dark:hover:dark-border-gradient"
            onClick={() => handleToggleTodo(id)}
          />
          <span className="text-white-500">{name}</span>
        </Label>
      </form>
      <Button
        variant={'ghost'}
        size={'icon'}
        className="hover:text-white-700"
        onClick={() => handleRemoveTodo(id)}
      >
        <Cross />
      </Button>
    </div>
  )
}
