import React,{useState, useEffect} from "react";

import { BiLogInCircle } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import logo from '../../../media/img/logo.svg'


export default function Nav () {


    return (
        <>
            <nav className={'nav'}>
                <img src={logo} alt="logo" className={'nav__logo'} />
                <ul className={'nav__menu'}>
                    <a href="/home" className={'nav__menu__item'}>Home</a>
                    <a href={'/marketplace'} className={'nav__menu__item'}>Marketplace</a>
                    <a href={'/login'} className={'nav_menu__item nav__menu__icon'}><BiLogInCircle /></a>
                </ul>
            </nav>
        </>
    )
}