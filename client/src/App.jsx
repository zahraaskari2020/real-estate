import "./layout.scss";
import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />, 
    },
    {
      path: "/list",
      element: <ListPage />, 
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
