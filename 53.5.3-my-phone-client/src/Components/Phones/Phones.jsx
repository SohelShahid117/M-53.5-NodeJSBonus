import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h2>All Phones here:{phones.length}</h2>
      {phones.map((phn) => (
        <li key={phn.id}>
          <Link to={`/phones/${phn.id}`}>{phn.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
