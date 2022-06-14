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

const NewItem = () => {
  const [item, setItem] = useState({
    name: "",
    weight: 0,
    store: "",
    date: "",
  });

 let tracking = "";
 console.log(tracking)

  console.log("item", item);

  const trackingGen = () => {
    const alphanum = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let tracking = "";
    for (let i = 0; i < 8; i++) {
      tracking += alphanum[Math.floor(Math.random() * alphanum.length)];
    }

    console.log(tracking);
    return tracking;
  };

  const handleChange = (e) => {
    e.preventDefault();

    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const alphanum = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    // let trcking = "";
    for (let i = 0; i < 8; i++) {
      tracking += alphanum[Math.floor(Math.random() * alphanum.length)];
    };
  }, []);

  return (
    <>
      <div className="mb-5">
        <h4 className="font-semibold text-2xl">New Item</h4>
      </div>
      <Card className="p-4">
        <form className="flex flex-col gap-2">
          <p className="text-2xl font-semibold mb-10 rounded-md bg-red-100 px-4 py-2 w-fit">
            {tracking}
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
              <option value={"1"}>Penang</option>
              <option value={"2"}>Kedah</option>
              <option value={"3"}>Kuala Lumpur</option>
              <option value={"4"}>Pahang</option>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password1">
              Date
            </Label>
            <TextInput
              name="date"
              type="date"
              required={true}
              value={item.date}
              onChange={handleChange}
              className="py-2 px-4 outline-red-400 text-gray-500"
            />
          </div>
          <div className="w-full mt-5 flex justify-end">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 w-1/12"
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewItem;
