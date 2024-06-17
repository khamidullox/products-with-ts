import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home, { loader as HomeLoader } from "./components/Home";
import SinglePRoduct, {
  loader as SingleLoader,
} from "./components/SinglePRoduct";
import Cart from "./components/Cart";

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
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
