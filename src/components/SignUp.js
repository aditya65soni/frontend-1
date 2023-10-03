import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const user = localStorage.getItem("user");
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    })


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const submitHandle = async () => {
        // console.log(name, email, password);

        let result = await fetch("http://localhost:8000/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        // console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.token));
        navigate('/')
    }

    return (
        <div className="flex items-center justify-center flex-col mt-7 p-4 bg-purple-300 shadow shadow-slate-500 w-[25%] mx-auto rounded-lg">
            <input className="block mt-2 rounded-lg  w-[100%] bg-purple-100 p-3"
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e => { setname(e.target.value) })}
            />
            <input className="block mt-2 rounded-lg w-[100%] bg-purple-100 p-3"
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e => { setemail(e.target.value) })}
            />
            <input className="block mt-2 rounded-lg w-[100%] bg-purple-100 p-3"
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e => { setpassword(e.target.value) })}
            />

            <button className="p-2 text-white rounded-lg bg-purple-500 hover:bg-purple-700 mt-2" onClick={submitHandle}>submit</button>



        </div>

    );
};

export default SignUp;
