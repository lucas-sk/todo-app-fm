import { Button } from '@/components/ui/button'
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Navigation } from '../../../components/Navigation'
import { Todo } from '../../../components/Todo'
import { UseTodo } from '../../../context/TodoContext'

export function TodosActive() {
  const { todos, removeAllTodosComplete, reOrderTodoList } = UseTodo()

  const filteredActiveTodos = todos.filter((todo) => todo.isChecked === false)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        delay: 5000,
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 5000,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      reOrderTodoList(active.id, over.id)
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
          {filteredActiveTodos.map((todo) => (
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
        <p>{filteredActiveTodos.length} Items left</p>
        <Button onClick={removeAllTodosComplete}>Clear Completed</Button>
      </div>
      <Navigation />
    </div>
  )
}
