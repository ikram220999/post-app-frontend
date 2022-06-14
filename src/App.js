import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import homepic from "./images/3333449.jpg";
import Home from "./pages/Home";
import { routes } from "./routes";
import SidebarMenu from "./pages/sidebar/Sidebar";
import Header from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";
import Login from "./login/Login";
import DashboardLayout from "./Layout/DashboardLayout";
import NotFound from './pages/errorpage/404NotFound';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setAuth(true);
    }
  }, []);
  return (
    <>
      {auth ? (
        <DashboardLayout />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<Login />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
