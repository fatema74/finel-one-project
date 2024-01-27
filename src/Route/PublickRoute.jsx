import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CardDitails from "../Pages/Card/CardDitails"
import PriveteRoute from "./PriveteRoute";


const PublickRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/wedding.json'),
      },
      {
        path: '/items/:id',
        element: (
          <PriveteRoute>
            <CardDitails></CardDitails>
          </PriveteRoute>
        ),
        loader: () => fetch('/wedding.json'),
      },
      {
        path: '/about',
        element: <About></About>,
        loader: ()=>fetch('/about.json')
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
        loader: () => fetch('/gallery.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default PublickRoute;