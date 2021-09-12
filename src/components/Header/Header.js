import React from 'react';
import myimage from './images/user.png';
import bell from './images/bell_icon.png';
import logo from './images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-lg-10 col-md-9 col-5">
                    <h1><img src={logo} alt=""/>X</h1>
                </div>
                <div className="col-lg-2 col-md-3 col-7">
                    <a href="#" id="bell_icon"><img src={bell} alt=""/></a>
                    <a href="#" id="user_profile"><img src={myimage} alt=""/><span id="down-arrow"><i className="fas fa-sort-down"></i></span></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
