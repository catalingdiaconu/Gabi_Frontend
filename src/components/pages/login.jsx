import React, {useState} from "react";
import Nav from '../organisms/nav/nav'

import axios from "axios";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        axios({
            method: 'post',
            data: {
                username: email,
                password: password,
            },
            withCredentials: true,
            url: 'http://localhost:3000/login'
        })
            .then((res) => {
                console.log(res)
                if(res.data === 'Successfully Authenticated') {
                    axios({
                        method: 'GET',
                        withCredentials: 'true',
                        url: 'http://localhost:3000/user'
                    }).then((res) => {
                        console.log(JSON.stringify(res.data))
                    })
                }
            })
    }


    return (
        <div className={'gradient_background'}>
            <Nav />
        <form className={'loginForm'}>
            <h3>Login</h3>

            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email" id="email" onChange={e => {setEmail(e.target.value)}} />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={e => {setPassword(e.target.value)}} />
            <button onClick={login}>Log In</button>
            <p>If you are not a member yet register now!</p>
            <a href="/register">Register here!</a>
        </form>
        </div>
    )
}