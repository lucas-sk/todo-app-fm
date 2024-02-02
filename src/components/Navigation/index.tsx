import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const { pathname } = useLocation()

  return (
    <div className="flex w-full justify-center shadow-lg gap-4 bg-light-100 dark:bg-dark-800 px-4 py-[18px] text-dark-500">
      <Link
        to="/"
        className={`hover:text-light-900 dark:hover:text-dark-100 dark:text-dark-500 ${
          pathname === '/' ? 'text-initial-500 dark:text-initial-500' : ''
        }`}
      >
        All
      </Link>
      <Link
        to="/active"
        className={`hover:text-light-900 dark:hover:text-dark-100 dark:text-dark-500 ${
          pathname === '/active' ? 'text-initial-500 dark:text-initial-500' : ''
        }`}
      >
        Active
      </Link>
      <Link
        to="/completed"
        className={`hover:text-light-900 dark:hover:text-dark-100 dark:text-dark-500 ${
          pathname === '/completed' ? 'text-initial-500 dark:text-initial-500' : ''
        }`}
      >
        Completed
      </Link>
    </div>
  )
}
