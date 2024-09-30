import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css'

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup-login", element: <Login /> },
      { path: "/mission", element: <h1>Mission Page</h1> },
      { path: "/contact", element: <h1>Contact Page</h1> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
