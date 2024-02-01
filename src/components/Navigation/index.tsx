import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const { pathname } = useLocation()

  return (
    <div className="flex w-full justify-center gap-4 bg-gray-700 px-4 py-[18px] text-zinc-500">
      <Link
        to="/"
        className={`hover:text-white-700 ${
          pathname === '/' ? 'text-initial-500' : ''
        }`}
      >
        All
      </Link>
      <Link
        to="/active"
        className={`hover:text-white-700 ${
          pathname === '/active' ? 'text-initial-500' : ''
        }`}
      >
        Active
      </Link>
      <Link
        to="/completed"
        className={`hover:text-white-700 ${
          pathname === '/completed' ? 'text-initial-500' : ''
        }`}
      >
        Completed
      </Link>
    </div>
  )
}
