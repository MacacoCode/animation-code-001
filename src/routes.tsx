import { createBrowserRouter, Navigate } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import Animations from "./pages/Animations";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
        path: '*',
        element: <Navigate to='/' replace />,
        index: true,
      }, {
        path: '01-rays',
        element: <Animations animation="rays"  />
      }
    ]
  },
])

export default router;