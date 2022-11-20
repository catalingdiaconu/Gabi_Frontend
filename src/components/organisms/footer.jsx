import React, {useState} from "react";
import logo from '../../media/img/logoFooter.png'
export default function Footer () {
    return (
        <div className={"footer"}>
            <div className={'officeInfo'}>
                <span>Email: office@GABI.com</span>
                <span>Telephone: +40 733 123 456</span>
                <span>Address: Strada Aviatiei 10</span>
            </div>
            <div className={'linkFooter'}>
                <a href="/">Home</a>
                <a href="/marketplace">Marketplace</a>
            </div>
            <img src={logo} alt="logo" className={'footer__img'} />
        </div>
    )
}