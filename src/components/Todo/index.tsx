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
      className="flex items-center justify-between border-b-2 border-light-300 dark:border-dark-600 bg-light-100 dark:bg-dark-800 px-4 py-[18px] hover:cursor-pointer"
    >
      <form className="w-full ">
        <Label
          htmlFor={id}
          className="flex items-center w-full gap-2 hover:cursor-pointer"
        >
          <Checkbox
            id={id}
            checked={check}
            className="rounded-full data-[state=checked]:light-border-and-bg-gradient hover:light-border-gradient dark:data-[state=checked]:dark-border-and-bg-gradient dark:hover:dark-border-gradient"
            onClick={() => handleToggleTodo(id)}
          />
          <span className="text-light-900 dark:text-dark-300">{name}</span>
        </Label>
      </form>
      <Button
        variant={'ghost'}
        size={'icon'}
        className="text-light-900 hover:text-light-700 dark:text-dark-700 dark:hover:text-dark-500"
        onClick={() => handleRemoveTodo(id)}
      >
        <Cross />
      </Button>
    </div>
  )
}
