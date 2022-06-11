import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "flowbite-react";
import React from "react";
import PaginationTable from "./../../components/PaginationTables";
import { FaHeart, FaUser, FaWarehouse } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
const Dashboard = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-3 mb-4">
        <Card className="p-3 pl-4">
          <div className="flex flex-row justify-start items-center">
            <TbTruckDelivery className="text-5xl mr-3 " />
            <div className="text-4xl text-red-600  m-0 p-0 font-semibold">10</div>
          </div>
          <div className="text-lg text-gray-500">Completed Delivery</div>
        </Card>
        <Card className="p-3 pl-4">
          <div className="flex flex-row justify-start items-center">
            <FaUser className="text-3xl mr-3 " />
            <div className="text-4xl text-red-600  m-0 p-0 font-semibold">20</div>
          </div>
          <div className="text-lg text-gray-500">Total Delivery Partner</div>
        </Card>
        <Card className="p-3 pl-4">
          <div className="flex flex-row justify-start items-center">
            <FaWarehouse className="text-4xl mr-3 " />
            <div className="text-4xl text-red-600  m-0 p-0 font-semibold">8</div>
          </div>
          <div className="text-lg text-gray-500">Total Warehouse</div>
        </Card>
      </div>
      <PaginationTable />
      <div className="grid gap-4 grid-cols-2 mb-4">
        <PaginationTable />
        <PaginationTable />
      </div>
    </>
  );
};

export default Dashboard;
