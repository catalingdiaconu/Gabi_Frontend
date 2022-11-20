import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Nav from '../organisms/nav/nav'

import axios from "axios";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigate();

    const login = () => {
        axios({
            method: 'post',
            data: {
                email: email,
                passwordHash: password,
            },
            withCredentials: true,
            url: 'http://localhost:3001/api/login'
        })
            .then((res) => {
                if(res.data.message === 'Success!') {
                    localStorage.setItem('token', res.data.token)
                    navigation('/dashboard')
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
            <button type={'button'} onClick={login}>Log In</button>
            <p>If you are not a member yet register now!</p>
            <a href="/register">Register here!</a>
        </form>
        </div>
    )
}