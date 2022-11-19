import React from "react";
import Nav from '../organisms/nav/nav'

export default function Login () {
    return (
        <div className={'gradient_background'}>
            <Nav />
        <form className={'loginForm'}>
            <h3>Login</h3>

            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button>Log In</button>
            <p>If you are not a member yet register now!</p>
            <a href="/register">Register here!</a>
        </form>
        </div>
    )
}