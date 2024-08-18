import { createBrowserRouter, Navigate } from 'react-router-dom';
import Animations from './pages/AnimationsPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <Navigate to="/" replace />,
        index: true,
      },
      {
        path: '01-rays',
        element: <Animations animation="01-rays" />,
      },
    ],
  },
]);

export default router;
