import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProducts = () => {
  const params = useParams();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    let data = await fetch(`http://localhost:8000/product/${params.id}`, {
      headers: {

        authoriation: JSON.parse(localStorage.getItem("token"))

      }
    });
    data = await data.json();

    setname(data.name);
    setprice(data.price);
    setcategory(data.category);
    setcompany(data.company);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateHandle = async () => {
    let data = await fetch(`http://localhost:8000/update/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-type": "application/json",
        authoriation: JSON.parse(localStorage.getItem("token"))
      },
    });
    data = await data.json();

    if (data) {
      navigate("/");
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
        <button
          onClick={updateHandle}
          className="bg-purple-400 hover:bg-purple-600 rounded-lg p-2 w-[60%]"
        >
          edit
        </button>
      </div>
    </>
  );
};

export default UpdateProducts;
