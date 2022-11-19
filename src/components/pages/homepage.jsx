import React from "react";

import Nav from "../organisms/nav/nav";
import Background from "../atoms/background";


export const Homepage = () => {

    return(
        <div className={'homepage'}>
            <Background />
            <Nav />
            <div className={'homepage__center'}>
                <span>Accelerating sustainability</span>
                <span className={'homepage__center__description'}>Become part of the movement</span>
                <div className={'homepage__center__authBtn'}>
                <a href={'/auth'} id={'homepage__center__authBtn__register'}>Register</a>
                </div>
            </div>
        </div>
    );

}