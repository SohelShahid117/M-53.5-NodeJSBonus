import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h2>Single phone page</h2>
      <h3>Phone Name : {phone.name}</h3>
      <h4>Price : {phone.price}</h4>
    </div>
  );
};

export default Phone;
