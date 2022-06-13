import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({});
  console.log("login", login);

  const history = useNavigate();

  const handeLogin = () => {
    localStorage.setItem("name", login.username);
    localStorage.setItem("password", login.password);

    history.push("/dashboard")
  };

  // useEffect(() => {

  // }, []);
  return (
    <React.Fragment>
      <div className="w-6/12 m-auto flex justify-center items-center h-screen">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setLogin({ ...login, username: e.target.value })
                }
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handeLogin}
              >
                Log masuk
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
                href="#"
              >
                Lupa?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;&nbsp;Hantar 2022 by Ikram.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
