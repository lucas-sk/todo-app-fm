import { Footer } from '@/components/Footer'
import {
  DndContext,
  DragEndEvent,
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
  const { todos, reOrderTodoList } = UseTodo()

  const filteredActiveTodos = todos.filter((todo) => todo.isChecked === false)

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

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
          <div className='first:rounded-t-sm'>
            {filteredActiveTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                check={todo.isChecked}
                name={todo.name}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <Footer todosLength={filteredActiveTodos.length}/>
      <Navigation />
    </div>
  )
}
