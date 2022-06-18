import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const Item = () => {

  const getAllItem = () => {
    axios
      .get("http://localhost:8000:/api/item")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItem();
  }, []);

  
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-end">
        <Link to={"/item/new"}>
          <Button className="bg-red-400 hover:bg-red-500">+ Item</Button>
        </Link>
      </div>{" "}
    </>
  );
};
export default Item;
