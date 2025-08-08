import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Layout, AuthLayout } from "./routes/layouts/layout.jsx";

import Dashboard from "./routes/HomePage/index.jsx";
import HomePage from './routes/Home/index.jsx';

import Login from "./routes/LoginPage/index.jsx";
import Register from "./routes/RegisterPage/index.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      element: <Layout />,
      children: [ { path: "/Dashboard", element: <Dashboard /> }],
    },
    // {
    //   path: "/admin",
    //   element: <AdminLayout />,
    //   children: [
    //   ],
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
