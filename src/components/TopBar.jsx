import React from 'react';
import logo from '../assets/logo.png';

const TopBar = () => {

    return (
        <div className="shadow-sm bg-light mb-2">
            <nav className="navbar navbar-light container py-2 px-3 navbar-expand">
                <span className='d-flex align-items-center'>
                    <img src={logo} height='33' alt='logo' className='me-2' />
                    Topbar
                </span>
            </nav>
        </div>
    );
}

export default TopBar;
