import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewItem = () => {
  const id = useParams();
  const getItem = () => {};
  
  useEffect(() => {
    getItem();
  }, []);

  return <></>;
};

export default ViewItem;
