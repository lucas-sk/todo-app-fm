import { UseTodo } from '@/context/TodoContext'
import { Button } from '../ui/button'

interface FooterProps {
  todosLength: number
}

export function Footer({ todosLength }: FooterProps) {
  const { removeAllTodosComplete } = UseTodo()

  return (
    <div className="flex w-full justify-between bg-gray-700 px-4 py-[18px] text-zinc-500">
      <p>{todosLength} Items left</p>
      <Button variant={'ghost'} onClick={removeAllTodosComplete}>
        Clear Completed
      </Button>
    </div>
  )
}
