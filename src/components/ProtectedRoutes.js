import React from 'react'
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ({ children }) => {
    const user = localStorage.getItem("user");
    if (user) {
        return children
    } else {
        return <Navigate to='/signup'></Navigate>
    }
}

export default ProtectedRoutes