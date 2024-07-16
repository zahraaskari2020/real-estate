import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import { RequireAuth, Layout } from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Login from "./routes/Login/Login";
import Register from "./routes/register/register";
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />, 
        },
        {
          path: "/list",
          element: <ListPage />, 
        },
        {
          path: "/:id",
          element: <SinglePage />, 
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }, {
      path: "/",
      element: <RequireAuth />,
      children:[
        {
          path: "/profile",
          element: <ProfilePage/>, 
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>, 
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
