import React from "react";

import { BiUserCircle } from 'react-icons/bi'
import logo from '../media/logo.svg'


export default function Nav () {
    return (
        <>
            <nav className={'nav'}>
                <img src={logo} alt="logo" className={'nav__logo'} />
                <ul className={'nav__menu'}>
                    <a href="" className={'nav__menu__item'}>Home</a>
                    <a href="" className={'nav__menu__item'}>About</a>
                    <button className={'nav_menu__item nav__menu__icon'}><BiUserCircle /></button>
                </ul>
            </nav>
        </>
    )
}