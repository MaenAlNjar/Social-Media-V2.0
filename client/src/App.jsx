import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Layout, AuthLayout } from "./routes/layouts/layout.jsx";

import HomePage from "./routes/HomePage/index.jsx";
import Login from "./routes/LoginPage/index.jsx";
import Register from "./routes/RegisterPage/index.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        { path: "/HomePage", element: <HomePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    // يمكنك إلغاء التعليق عن هذا القسم وإضافة AdminLayout عند الحاجة
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
