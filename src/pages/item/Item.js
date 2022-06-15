import { Button } from "flowbite-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Item = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-end">
        <Link to={'/item/new'}>
          <Button className="bg-red-400 hover:bg-red-500">+ Item</Button>
        </Link>
      </div>{" "}
    </>
  );
};
export default Item;
