import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Picture } from '../../components/Picture'
import { TodoForm } from '../../components/TodoForm'

export function DefaultLayout() {
  return (
    <div className="font-sans antialiased min-h-screen text-light-900 dark:text-dark-100 bg-light-100 dark:bg-dark-900">
      <Picture />
      <main className="mx-auto my-0 relative z-10 flex h-auto w-80 max-w-2xl flex-col gap-10 pt-6">
        <Header />
        <div className="flex flex-col gap-4">
          <TodoForm />
          <Outlet />
        </div>
        <p className="text-center text-light-700 dark:text-dark-800">
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  )
}
