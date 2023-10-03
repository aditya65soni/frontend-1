
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    let user = localStorage.getItem("user");
    // console.log();


    const navigate = useNavigate()



    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <>
            {!user ?
                (<ul className='bg-gray-700  p-7 '>
                    <li className='p-2 mx-2 text-white inline-block'><Link to="/login">login</Link></li>
                    <li className='p-2 mx-2 text-white inline-block'><Link to="/signup">signup</Link></li>
                </ul>)

                : (<ul className='bg-gray-700  p-7 '>
                    <li className='p-2  mx-2 text-white inline-block'><Link to="/">Product</Link></li>
                    <li className='p-2 mx-2 text-white inline-block'><Link to="/add">add product</Link></li>
                    {/* <li className='p-2 mx-2 text-white inline-block'><Link to="/update">update product</Link></li> */}
                    <li className='p-2 mx-2 text-white inline-block'><Link to="/profile">profile</Link></li>
                    <li className='p-2 mx-2 text-white inline-block'><Link onClick={logout} to="/signup">logout ({JSON.parse(user).name})</Link></li>

                </ul>)}

        </>
    )
}

export default NavBar