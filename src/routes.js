import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./login/Login";
import DashboardLayout from "./Layout/DashboardLayout";
import Home from "./pages/Home";
import Staff from "./staf/Staff";
import Sidebar from "./pages/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";

export const routes = [
  {
    path: "dash",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "*",
        element: <Navigate to={"/dash/default"} />,
      },
      {
        path: "",
        element: <Navigate to={"/dash/default"} />,
      },
      {
        path: "default",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
];

export const authRoutes = [
  {
    path: "*",
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
];
