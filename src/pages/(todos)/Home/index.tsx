import { Footer } from '@/components/Footer'
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

export function Home() {
  const { todos, reOrderTodoList } = UseTodo()

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
      <Footer todosLength={todos.length} />
      <Navigation />
    </div>
  )
}
