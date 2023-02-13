import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dash from '../components/Admin/Admin';

const Admn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("userdata"));
        console.warn(typeof (auth));
        if (auth === null || auth.designation != "Admin") {
            navigate("/");
        }
    }, [])
    return (
        <div>
            <Dash/>
        </div>
    )
}

export default Admn
