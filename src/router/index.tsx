import Dashboard from '../components/dashboard'
import Login from '../components/user-actions/login'

const router = {
  dashboard: {
    path: '/',
    element: <Dashboard />,
  },
  login: {
    path: '/login',
    element: <Login />,
  },
}

export default router
