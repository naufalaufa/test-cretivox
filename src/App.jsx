import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeProduct from "./pages/HomeProduct";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";

import { loader as HomeProductLoader } from "./pages/HomeProduct";
import { loader as SinglePageLoader } from "./pages/SingleProduct";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeProduct />,
      errorElement: <Error />,
      loader: HomeProductLoader,
    },
    {
      path: "/singleProduct/:id",
      element: <SingleProduct />,
      errorElement: <Error />,
      loader: SinglePageLoader,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
