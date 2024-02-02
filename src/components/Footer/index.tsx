import { UseTodo } from '@/context/TodoContext'
import { Button } from '../ui/button'

interface FooterProps {
  todosLength: number
}

export function Footer({ todosLength }: FooterProps) {
  const { removeAllTodosComplete } = UseTodo()

  return (
    <div className="flex w-full justify-between mb-4 bg-light-100 shadow-lg dark:bg-dark-800 px-4 py-[18px] text-dark-500">
      <p className='dark:text-dark-500'>{todosLength} Items left</p>
      <Button variant={'ghost'} onClick={removeAllTodosComplete}>
        Clear Completed
      </Button>
    </div>
  )
}
