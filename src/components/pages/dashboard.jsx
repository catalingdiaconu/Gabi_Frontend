import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import Nav from '../organisms/nav/nav'

export default function Dashboard () {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('token', 'null')
        navigate('/');
    }

    return (
        <div className={'gradient_background'}>
           <Nav />
            <h1>Dashboard</h1>
            <div className={'profileInfo'}>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" placeholder="Company Name" id="companyName" />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" />
                <button type={"button"} onClick={logout}>Log out</button>
            </div>
        </div>
    )
}
