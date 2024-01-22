import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CardDitails from "../Pages/Card/CardDitails"


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
        element: <CardDitails></CardDitails>,
        loader: ()=>fetch('/wedding.json')
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
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