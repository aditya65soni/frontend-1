import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [dataRes, setdataRes] = useState([]);


    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/products", {
            headers: {
                authoriation: JSON.parse(localStorage.getItem("token"))
            }
        });

        let data = await res.json();
        setdataRes(data)

    }

    useEffect(() => {
        fetchData();
    }, [])

    const serchHandle = async (e) => {
        if (e.target.value) {
            let result = await fetch(`http://localhost:8000/serch/${e.target.value}`, {
                headers: {
                    authoriation: JSON.parse(localStorage.getItem("token"))
                }
            })
            result = await result.json();
            setdataRes(result)
        } else {
            fetchData();
        }

    }


    const deleteHanlde = async (id) => {
        const data = await fetch(`http://localhost:8000/product/${id}`, {
            method: "DELETE",
            headers: {
                authoriation: JSON.parse(localStorage.getItem("token"))
            }
        })
        if (data) {
            alert("data deleted")
        } else {
            alert("data not available")
        }

        fetchData();
    }

    return (
        <div className='flex flex-col items-center mx-auto w-[80%]'>

            <h1 className='my-2 text-2xl'>products</h1>

            <input onChange={serchHandle} className='bg-purple-50 border-2 border-gray-400 p-2 my-3' type="text" placeholder='serch producs' />

            <ul className='flex items-center  justify-center w-[100%]'>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>s.no</li>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>name</li>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>price</li>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>company</li>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>category</li>
                <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>Controls</li>
            </ul>

            {
                dataRes.length > 0 ? dataRes.map((val, index) => (
                    <ul key={val._id} className='flex items-center  justify-center w-[100%]'>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>{index + 1}</li>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>{val.name}</li>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>{val.price}</li>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>{val.company}</li>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>{val.category}</li>
                        <li className='p-2 border-2 border-sky-500 border-solid w-[7rem]'>
                            <button className='bg-red-400 rounded-xl px-2' onClick={() => deleteHanlde(val._id)}>del</button>
                            <span><Link to={`/update/${val._id}`} className='bg-blue-400 rounded-xl px-2'>edit</Link></span>
                        </li>
                    </ul>
                )) : <h3 className='mt-5 text-2xl'>no match found</h3>
            }

        </div>
    )
}

export default ProductList