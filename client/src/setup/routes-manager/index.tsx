import { createBrowserRouter } from 'react-router-dom'
import App from '~/App'
import Home from '~/pages/home';
import Welcome from '~/pages/welcome';
import Login from '~/pages/login';
import Register from '~/pages/register';
import Activate from '~/pages/activate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: '',
            element: <Welcome />,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
          {
            path: 'activate/:uid/:token',
            element: <Activate />,
          }
        ]
      },
    ]
  }
])

export default router;