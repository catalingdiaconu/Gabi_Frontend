import React from "react";

import Nav from "../../nav/nav";
import background from './media/backgroundHome.png'


export const Homepage = () => {

    return(
        <div className={'homepage'}>
            <img src={background} alt="logo" className={'homepage__background'} />
            <Nav />
            <div className={'homepage__center'}>
                <span>Accelerating sustainability</span>
                <span className={'homepage__center__description'}>Become part of the movement</span>
                <div className={'homepage__center__authBtn'}>
                <button id={'homepage__center__authBtn__register'}>Register</button>
                </div>
            </div>
        </div>
    );

}