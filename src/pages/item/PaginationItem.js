import { Badge, Pagination, Table } from "flowbite-react";
import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

const PaginationTable = ({ data = [], store = [] }) => {
  const getStatus = (cs) => {
    let i = "";

    switch (cs) {
      case "O":
        return (
          <span class="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            On Delivery
          </span>
        );
        break;
      case "D":
        return (
          <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            Delivered
          </span>
        );
        break;
      case "PS":
        return (
          <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            Store Pickup
          </span>
        );
        break;
      case "PD":
        return (
          <span class="bg-yellow-100 text-yellow-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            Driver Pickup
          </span>
        );
        break;
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <Table striped={true} className="rounded-md">
        <Table.Head>
          <Table.HeadCell className="bg-red-500 text-white text-left">
            id
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white text-left">
            Tracking
          </Table.HeadCell>

          <Table.HeadCell className="bg-red-500 text-white">
            Name
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Weight (kg)
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Status
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Store pickup
          </Table.HeadCell>

          <Table.HeadCell className="bg-red-500 text-white">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y ">
          {data.map((data) => (
            <Table.Row className="bg-white ">
              <Table.Cell className="">{data.id}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {data.tracking_no}
                </span>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {data.name}
              </Table.Cell>
              <Table.Cell>{data.weight}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {data.status ? <>{getStatus(data.status.code_status)}</> : ""}
              </Table.Cell>
              <Table.Cell>
                {" "}
                {store
                  .filter((s) => s.id == data.store_id)
                  .map((e) => {
                    return e.name;
                  })}
              </Table.Cell>
              <Table.Cell className="flex flex-row justify-between">
                <Link to={"/item/" + data.id}>
                  <a className="font-medium text-blue-600 hover:underline ">
                    View
                  </a>
                </Link>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline "
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex w-full mt-0.5">
        <Pagination
          className="w-full"
          currentPage={1}
          totalPages={100}
          onPageChange={""}
        />
      </div>
    </div>
  );
};

export default PaginationTable;
