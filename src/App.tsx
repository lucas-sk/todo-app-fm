import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppTest } from './components/test'
import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'
import { DefaultLayout } from './layout/DefaultLayout'
import { TodosActive } from './pages/(todos)/Active'
import { TodosCompleted } from './pages/(todos)/Completed'
import { Home } from './pages/(todos)/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/active',
        element: <TodosActive />,
      },
      {
        path: '/completed',
        element: <TodosCompleted />,
      },
    ],
  },
  {
    path: '/test',
    element: <AppTest />,
  },
])

export function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  )
}
