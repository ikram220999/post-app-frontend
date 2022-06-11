import { Pagination, Table } from "flowbite-react";
import React from "react";

const PaginationTable = () => {
  return (
    <div className="flex flex-col mb-4">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell className="bg-red-500 text-white">
            Product name
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Color
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Category
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Price
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline "
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline "
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline "
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="flex-end w-full mt-0.5">
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
