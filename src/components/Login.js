import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])

    const submitHanlde = async () => {
        // console.log({ email, password });
        let result = await fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-type": "application/json"
            }
        })
        result = await result.json();
        console.log(result.user);
        if (result.token) {
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.token))
        }
        navigate("/")
    }

    return (
        <div className="flex items-center justify-center flex-col mt-7 p-4 bg-purple-300 shadow shadow-slate-500 w-[25%] mx-auto rounded-lg">
            <input className="w-[100%] block mt-2 rounded-lg  bg-purple-100 p-3" type="email" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
            <input className=" w-[100%] block mt-2 rounded-lg  bg-purple-100 p-3" type="email" placeholder='password' onChange={(e) => setpassword(e.target.value)} value={password} />

            <button className="p-2 text-white rounded-lg bg-purple-500 hover:bg-purple-700 mt-2 " onClick={submitHanlde}>login</button>
        </div>
    )
}

export default Login