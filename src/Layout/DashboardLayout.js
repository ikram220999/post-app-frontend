import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Content from "../components/Content";
import Main from "../components/Main";
import Wrapper from "./../components/Wrapper";
import Sidebar from "./../pages/sidebar/Sidebar";
import Header from "./../components/Header";
import Dashboard from "./../pages/dashboard/Dashboard";
import NotFound from "./../pages/errorpage/404NotFound";
import Staff from "./../staf/Staff";
import Stor from "./../stor/Stor";
import Item from "./../pages/item/Item";
import NewItem from "../pages/item/NewItem";
import ViewItem from "../pages/item/ViewItem";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="flex flex-row bg-gray-100 full p-0">
          {" "}
          <div className="w-1/5 mr-2">
            <Sidebar />{" "}
          </div>
          <div className="w-4/5 min-h-screen p-10">
            <Routes>
              <Route path="/" element={<Dashboard />} exact />

              <Route path="/staff" element={<Staff />} />

              <Route path="/stor" element={<Stor />} />

              <Route path="/item" element={ <Item />} />
              <Route path="/item/:id" element={ <ViewItem />} />
              <Route path="/item/new" element={<NewItem />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
