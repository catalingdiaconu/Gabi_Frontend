import React from "react";

import background from "../../media/img/backgroundHome.png";

import Nav from '../organisms/nav/nav'
import LoginForm from  '../organisms/auth/loginForm'
import RegisterForm from  '../organisms/auth/registerForm'

export default function Auth () {

    return (
        <div className={'gradient_background'}>
            <Nav />
            <div>
                {/*<LoginForm />*/}
                <RegisterForm />
            </div>
        </div>
    )
}