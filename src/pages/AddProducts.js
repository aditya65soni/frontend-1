import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddProducts = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");

  const navigate = useNavigate();

  const submitHandle = async () => {

    const user = localStorage.getItem("user")
    const userId = JSON.parse(user)._id

    const data = await fetch("http://localhost:8000/addproduct", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
        authoriation: JSON.parse(localStorage.getItem("token"))
      },
    })
    if (data) {
      navigate('/')
    }


  };

  return (
    <>
      <div className="flex flex-col items-center  space-y-5 w-[30%] mx-auto mt-8">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="p-2 w-[60%] bg-purple-50 border-solid border-2 border-gray-400"
          type="text"
          placeholder="enter name"
        />
        <input
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="p-2 w-[60%] bg-purple-50 border-solid border-2 border-gray-400"
          type="number"
          placeholder="enter price"
        />
        <input
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="p-2 w-[60%] bg-purple-50 border-solid border-2 border-gray-400"
          type="text"
          placeholder="enter category"
        />
        <input
          value={company}
          onChange={(e) => setcompany(e.target.value)}
          className="p-2 w-[60%] bg-purple-50 border-solid border-2 border-gray-400"
          type="text"
          placeholder="enter company"
        />
        {name && company && category && price ? <button
          onClick={submitHandle}
          className="bg-purple-400 hover:bg-purple-600 rounded-lg p-2 w-[60%]  "
        >
          add
        </button> : <p className=" animate-bounce p-2 w-[40%] bg-orange-300 border-solid border-2 rounded-3xl border-gray-400">fill all the fields</p>}
      </div>
    </>
  );
};

export default AddProducts;


