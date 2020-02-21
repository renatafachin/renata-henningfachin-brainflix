import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/Logo/Logo-brainflix.svg';
import search from '../assets/Icons/SVG/Icon-search.svg';
import upload from '../assets/Icons/SVG/Icon-upload.svg';
import userPicture from '../assets/Images/Mohan-muruge.jpg';

export default function Header() {
    return (
        <>
            <div className="header">
                <span className="header__box-logo"><Link to='/'><img className="header__logo" src={logo} alt="Brainflix" /></Link></span>
                <div className="header__search-box">
                    <button className="header__search-button"><img className="header__search-icon" src={search} alt="" /></button>
                    <input className="header__search-input" type="text" placeholder="Search"></input>
                </div>
                <div className="header__upload">
                    <Link to='/upload'><button className="header__upload-btn :hover" ><img src={upload} alt="" /> UPLOAD</button></Link>
                    <img className="header__user-picture" src={userPicture} alt="" />
                </div>
            </div>
        </>
    );
}
