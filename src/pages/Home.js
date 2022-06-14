
import { Link } from "react-router-dom";
import homepic from "../images/3333449.jpg";

function Home() {
  return (
    <div className="App bg-gray-100 h-screen">
      <div className="container items-center bg-red-500 text-white rounded-xl py-4 px-6 m-auto mt-5 flex flex-row justify-between">
        {/* <div>
          <ul class="flex flex-row">
            <li className="bg-red-700 px-4 py-2 hover:">Stor</li>
            <li className=" px-4 py-2">Staff</li>
            <li className=" px-4 py-2">Barang</li>
          </ul>
        </div> */}

        <div>
          <b className="text-xl">Hantar App</b>
        </div>
        {/* <div>
          <input className="px-3 py-2 rounded-md text-black" placeholder="Tracking no" type="text"></input>
          <button className="btn px-4 py-2 bg-red-700 rounded-lg ml-2 hover:bg-red-800 "><b>Cari</b></button>
        </div> */}

        <div>
          <Link to={"/sign-in"}>
            <button className="rounded-lg bg-red-700 hover:bg-white hover:text-red-500 transition duration-200 ease px-4 py-2">
              <b>Log masuk</b>
            </button>
          </Link>
        </div>
      </div>

      {/* bawah navbar */}
      <div className="container flex flex-row justify-center m-auto mt-4 shadow-md rounded-lg bg-white">

        {/* left side */}
        <div className="w-7/12 px-10 py-10 ">


          <b className="text-3xl text-red-500">Hantar App</b>
          <p className="my-4">
            Mudahkan urusan pengeposan barang anda dengan kami
          </p>
          <div className="container flex flex-wrap">
            <img src={homepic} className="w-1/3"></img>
            <img src={homepic} className="w-1/3"></img>
            <img src={homepic} className="w-1/3"></img>
          </div>

        {/* form tracking */}
          <div className=" flex items-center mt-10 justify-center">
            <input
              placeholder="No tracking .."
              className=" w-9/12 outline outline-2 outline-gray-200 focus:outline-red-500 rounded-lg py-2 px-3 mr-3 outline-offset-2"
            ></input>
            <button className="rounded-lg bg-red-500 hover:bg-red-700 hover:text-red-500 transition duration-200 ease py-3  px-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* right side  */}
        <div className="w-5/12 flex flex-row justify-center items-center">
          <img src={homepic} className="h-80"></img>
        </div>
      </div>

      {/* second main section */}
      <div className="m-auto mt-4 bg-white rounded-lg h-80 container shadow-md flex ">
          <div className="w-7/12 h-80 flex justify-center items-center">
          <b className="text-xl text-red-500">To do later</b>
          </div>

          <div className="w-5/12 h-80 bg-red-500 rounded-xl flex justify-center items-center">
            <b className="text-xl text-white">To do later</b>
          </div>

      </div>
    </div>
  );
}

export default Home;
