import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Label,
  Modal,
  Select,
  TextInput,
} from "flowbite-react";
import parcelImg from "../../images/parcel.jpg";
import personImg from "../../images/person.jpg";
import Spinner from "../../components/Spinner";

const ViewItem = () => {
  const { id } = useParams();

  const [item, setItem] = useState();
  const [staff, setStaff] = useState();
  const [receiver, setReceiver] = useState();
  const [status, setStatus] = useState([]);
  const [showModal, setShowModal] = useState(false);

  console.log("modal", showModal);

  const [formStatus, setFormStatus] = useState({
    id: id,
    title: "",
    description: "",
    status: "",
  });

  console.log("formStatus", formStatus);

  console.log("status", status);

  console.log(id);
  const getItem = () => {
    axios
      .get("http://localhost:8000/api/item/" + id)
      .then(function (response) {
        setItem(response.data.item);
        setStaff(response.data.staff);
        setReceiver(response.data.rcv);
        if (response.data.status.length > 0) {
          setStatus(response.data.status);
        }
        console.log("item by id", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmitStatus = () => {
    axios
      .post("http://localhost:8000/api/item_status/new", formStatus)
      .then(function (response) {
        console.log(response);
        alert("success");
        setShowModal(false);
        setFormStatus({
          id: id,
          description: "",
          status: "",
          title: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleForm = (e) => {
    setFormStatus({
      ...formStatus,
      [e.target.name]: e.target.value,
    });
  };

  const handleModal = () => {
    console.log("asdas");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>
          <div className="py-3 px-4">Update Status</div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block" htmlFor="password1">
                Title
              </Label>
              <TextInput
                name="title"
                type="text"
                placeholder=""
                required={true}
                onChange={handleForm}
                value={formStatus.title}
                className="py-2 px-4 outline-red-400"
              />
            </div>
            <div>
              <Label className="mb-2 block" htmlFor="password1">
                Status
              </Label>
              <Select
                name="status"
                className="py-2 px-4 outline-red-400"
                required={true}
                onChange={handleForm}
                value={formStatus.status}
              >
                <option value={""} disabled>
                  Select Status
                </option>
                <option value="PD">Driver Pickup</option>
                <option value="O">On the way</option>
                <option value="D">Delivered</option>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block" htmlFor="password1">
                Description
              </Label>
              <TextInput
                name="description"
                type="text"
                placeholder=""
                required={true}
                onChange={handleForm}
                value={formStatus.description}
                className="py-2 px-4 outline-red-400"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex flex-row justify-between w-full">
            <Button
              onClick={closeModal}
              className="bg-gray-200  hover:bg-gray-300"
              color="black"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitStatus}
              className="bg-red-400 text-white hover:bg-red-500"
              color="black"
            >
              Update
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <div className="m-3 mb-6 flex flex-row justify-between">
        <div>
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  View
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {id}
                </span>
              </div>
            </li>
          </ol>
        </div>
        <div>
          {" "}
          <Button
            onClick={handleModal}
            className="hover:bg-red-600 bg-red-500 text-white"
            color="failure"
          >
            Update Statusasd
          </Button>
        </div>
      </div>
      {item ? (
        <div className="grid gap-4 grid-cols-3 mb-4 items-start h-">
          <Card className="p-3 text-top">
            <h3 className="text-xl mb-5">Item Details</h3>

            <div className="gap-y-4 mb-1 border-2 rounded-md">
              <img src={parcelImg} />
            </div>

            <div className="gap-y-4 mb-1">
              <p className="text-md font-bold ">No tracking</p>
              <p className="text-lg w-fit bg-red-200 rounded-md px-4">
                {item.tracking_no}
              </p>
            </div>
            <div>
              <p className="text-md font-bold">Item name</p>
              <p className="text-lg ">{item.name}</p>
            </div>
            <div>
              <p className="text-md font-bold">Item Weight (kg)</p>
              <p className="text-lg ">{item.weight} kg</p>
            </div>
          </Card>
          <Card className="p-3">
            <h3 className="text-xl mb-5">Receiver Details</h3>
            <div className="mb-1">
              <p className="text-md font-bold">Receiver Name</p>
              <p className="text-lg ">{receiver.name}</p>
            </div>
            <div className="mb-1">
              <p className="text-md font-bold">Receiver Phone </p>
              <p className="text-lg ">{receiver.phone_no}</p>
            </div>
            <div className="mb-1">
              <p className="text-md font-bold">Receiver Address</p>
              <p className="text-lg ">
                {receiver.address}asdsdasd asdsdasd asdasdasds asas asdas dad
                asd asdad a a asd
              </p>
            </div>
          </Card>
          <Card className="p-3">
            <h3 className="text-xl mb-5">Delivery Details</h3>
            <div className="gap-y-4 mb-1 border-2 rounded-md w-fit">
              <img src={personImg} width="100" />
            </div>
            <div className="mb-1">
              <p className="text-md font-bold">Driver ID</p>
              <p className="text-lg">{staff.staff_no}</p>
            </div>
            <div className="mb-1">
              <p className="text-md font-bold">Driver Name</p>
              <p className="text-lg">{staff.name}</p>
            </div>
            <div>
              <p className="text-md font-bold">Driver Phone</p>
              <p className="text-lg ">{staff.phone_no}</p>
            </div>
          </Card>
        </div>
      ) : (
        <Spinner />
      )}

      <Card className="px-20 py-10">
     
        <Card>
          <ol class="relative  dark:border-gray-700">
            {status ? (
              <>
                {status.map((sta) => {
                  let date = new Date(sta.created_at);

                  const handleCodeStatus = () => {
                    switch (sta.code_status) {
                      case "PS":
                        return "Pickup ";
                        break;
                      case "PD":
                        return "Pickup ";
                        break;
                      case "O":
                        return "Delivery start ";
                        break;
                      case "D":
                        return "Delivered ";
                        break;
                      default:
                        break;
                    }
                  };

                  const handleCodeStatus2 = () => {
                    switch (sta.code_status) {
                      case "PS":
                        return (
                          <React.Fragment>
                            <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                              Store Pickup
                            </span>
                          </React.Fragment>
                        );
                        break;
                      case "PD":
                        return (
                          <React.Fragment>
                            <span class="bg-yellow-100 text-yellow-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                              Driver Pickup
                            </span>
                          </React.Fragment>
                        );
                        break;
                      case "O":
                        return (
                          <React.Fragment>
                            <span class="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                              On Delivery
                            </span>
                          </React.Fragment>
                        );
                        break;
                      case "D":
                        return (
                          <React.Fragment>
                            <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                              Delivered
                            </span>
                          </React.Fragment>
                        );
                        break;
                      default:
                        break;
                    }
                  };

                  return (
                    <li class="mb-10 ml-6">
                      <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                          class="w-3 h-3 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {sta.title} {handleCodeStatus2()}
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {handleCodeStatus()} on {date.toLocaleString()}
                      </time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        {sta.description}
                      </p>
                    </li>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </ol>
        </Card>
      </Card>
    </>
  );
};

export default ViewItem;
