import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Picture } from '../../components/Picture'
import { TodoForm } from '../../components/TodoForm'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen w-screen max-w-full flex-col	items-center bg-gray-900">
      <Picture />
      <main className="relative z-10 mx-6 flex h-auto w-80 max-w-lg flex-col gap-10 pt-12">
        <Header />
        <div className="flex flex-col gap-4">
          <TodoForm />
          <Outlet />
        </div>
        <p className="text-center text-zinc-700">
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  )
}
