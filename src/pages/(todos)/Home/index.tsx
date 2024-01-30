import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Button } from '../../../components/Button'
import { Navigation } from '../../../components/Navigation'
import { Todo } from '../../../components/Todo'
import { UseTodo } from '../../../context/TodoContext'

export function Home() {
  const { todos, removeAllTodosComplete, reOrderTodoList } = UseTodo()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      reOrderTodoList({
        activeId: active.id,
        overId: over.id,
      })
    }
  }

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              check={todo.isChecked}
              name={todo.name}
            />
          ))}
        </SortableContext>
      </DndContext>
      <div className="flex w-full justify-between bg-gray-700 px-4 py-[18px] text-zinc-500">
        <p>{todos.length} Items left</p>
        <Button onClick={removeAllTodosComplete}>Clear Completed</Button>
      </div>
      <Navigation />
    </div>
  )
}
