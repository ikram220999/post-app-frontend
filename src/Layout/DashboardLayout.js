import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Content from "../components/Content";
import Main from "../components/Main";
import Wrapper from "./../components/Wrapper";
import Sidebar from "./../pages/sidebar/Sidebar";
import Header from "./../components/Header";
import Dashboard from "./../pages/dashboard/Dashboard";
import NotFound from './../pages/errorpage/404NotFound';

const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="flex flex-row bg-gray-100 full p-0">
          {" "}
          <Sidebar />{" "}
          <div className="w-full min-h-screen p-10">
            <Routes>
              <Route path="/" element={<Dashboard />} exact/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
