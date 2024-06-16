import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home, { loader as HomeLoader } from "./components/Home";
import SinglePRoduct, {
  loader as SingleLoader,
} from "./components/SinglePRoduct";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home />, loader: HomeLoader },
        {
          path: "/singleProdcut/:id",
          element: <SinglePRoduct />,
          loader: SingleLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
