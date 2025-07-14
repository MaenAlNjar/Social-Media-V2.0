import React, { useEffect } from "react";
import Navbar from "../../Components/NavBar/index.jsx";
import "./index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// تأكد أنك تستخدم 'export const' هنا لكل مكون
export const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export const AuthLayout = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  const hideNavbar = location.pathname.startsWith("/auth/AdminPage");
  return (
    <div className="layout">
      {!hideNavbar && (
        <>
          <Navbar />
        </>
      )}
      <div className="content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};
