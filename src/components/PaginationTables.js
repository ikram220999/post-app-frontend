import { Badge, Pagination, Table } from "flowbite-react";
import React from "react";

const PaginationTable = ({ data = [] }) => {
  return (
    <div className="flex flex-col mb-4">
      <Table striped={true} className="rounded-md">
        <Table.Head>
          <Table.HeadCell className="bg-red-500 text-white text-left">id</Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Staff Name
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Staff No
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Phone No
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            Address
          </Table.HeadCell>
          <Table.HeadCell className="bg-red-500 text-white">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y ">
          {data.map((staff) => (
            <Table.Row className="bg-white ">
              <Table.Cell className="">{staff.id}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {staff.name}
              </Table.Cell>
              <Table.Cell><span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {staff.staff_no}
                </span></Table.Cell>
              <Table.Cell>{staff.phone_no}</Table.Cell>
              <Table.Cell>
                {" "}
                
                {staff.address}
              </Table.Cell>
              <Table.Cell>
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
