import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import React, { useState, useEffect } from "react";
import { FaWarehouse } from "react-icons/fa";
import  axios  from "axios";

const NewItem = () => {
  const [item, setItem] = useState({
    name: "",
    weight: 0,
    store: "",
    date: "",
    tracking: "",
  });
  const [store, setStore] = useState([]);

  let tracking = "";
  console.log(tracking);

  console.log("item", item);

  const trackingGen = () => {
    const alphanum = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let trackingg = "";
    for (let i = 0; i < 8; i++) {
      trackingg += alphanum[Math.floor(Math.random() * alphanum.length)];
    }

    console.log(trackingg);
    setItem({
      ...item,
      tracking: trackingg,
    });
  };

  const getAllStore = () => {
    axios
      .get("http://localhost:8000/api/store")
      .then(function (response) {
        console.log("all store", response);
        setStore(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();

    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getAllStore();
  }, []);

  return (
    <>
      <div className="mb-5">
        <h4 className="font-semibold text-2xl">New Item</h4>
      </div>
      <Card className="p-4">
        <form className="flex flex-col gap-2">
          <Button onClick={trackingGen} className="bg-red-500">
            Generate Tracking
          </Button>
          <p className="text-2xl font-semibold mb-10 rounded-md bg-red-100 px-4 py-2 w-fit w-40 h-12 text-center">
            {item.tracking}
          </p>
          <div>
            <Label className="mb-2 block" htmlFor="email1">
              Item Name
            </Label>
            <TextInput
              id="name"
              name="name"
              type="name"
              placeholder=""
              required={true}
              value={item.name}
              onChange={handleChange}
              className="py-2 px-4 outline-red-400"
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
              Weight
            </Label>
            <TextInput
              name="weight"
              type="number"
              placeholder="kg"
              required={true}
              onChange={handleChange}
              value={item.weight}
              className="py-2 px-4 outline-red-400"
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
              Warehouse
            </Label>
            <Select
              name="store"
              className="py-2 px-4 outline-red-400"
              required={true}
              onChange={handleChange}
              value={item.store}
            >
              <option value={""} disabled>
                Select Store
              </option>
              {store.map((stor) => {
                return(
                  <option value={stor.id}>{stor.name}</option>
                )
              })}
            </Select>
          </div>
          <div className="my-8 border-b-2 border-gray-200"></div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
              Receiver Name
            </Label>
            <TextInput
              name="rcv_name"
              type="text"
              placeholder=""
              required={true}
              onChange={""}
              // value={""}
              className="py-2 px-4 outline-red-400"
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
              Receiver Phone No
            </Label>
            <TextInput
              name="rcv_phone"
              type="text"
              placeholder=""
              required={true}
              onChange={""}
              // value={""}
              className="py-2 px-4 outline-red-400"
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
            Receiver Address
            </Label>
            <TextInput
              name="rcv_address"
              type="text"
              placeholder=""
              required={true}
              onChange={""}
              // value={""}
              className="py-2 px-4 outline-red-400"
            />
          </div>


          
          <div className="w-full mt-5 flex justify-end">
            <Button type="submit" className="bg-red-600 hover:bg-red-700 ">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewItem;
