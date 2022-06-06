import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Staff from "./staf/Staff";
import Stor from "./stor/Stor";
import Login from './login/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
    
          <Route path="/" element={<App />} />
          <Route path="staf" element={<Staff />} />
          <Route path="stor" element={<Stor />} />
          <Route path="login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
