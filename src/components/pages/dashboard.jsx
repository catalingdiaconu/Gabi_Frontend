import React,{useEffect} from "react";
import axios from "axios";

import Nav from '../organisms/nav/nav'

export default function Dashboard () {

    return (
        <div className={'gradient_background'}>
           <Nav />
            <h1>Dashboard</h1>
            <div className={'profileInfo'}>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" placeholder="Company Name" id="companyName" />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" />
                
            </div>
        </div>
    )
}
