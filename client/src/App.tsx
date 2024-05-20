import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Register";
import Login from './pages/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Home</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/single",
      element: <Single />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
 

  return (
    <>
      <div>
        <RouterProvider router={router} />       
      </div>
    </>
  )
}

export default App
