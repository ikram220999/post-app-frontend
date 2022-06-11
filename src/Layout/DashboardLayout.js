import React from "react";
import { Link, Outlet } from "react-router-dom";
import Content from "../components/Content";
import Main from "../components/Main";
import Wrapper from "./../components/Wrapper";

const DashboardLayout = () => {
  <>
 <div>
      <Outlet />
    </div>
  </>;
};

export default DashboardLayout;
