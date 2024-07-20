import React from 'react';
import logo from '../assets/logo.png';
import CustomizedMenus from './StyleMenu';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'white' }} className="navbar navbar-expand-lg bg-body-white sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="111px" className="d-inline-block me-3" />
                </a>
                <CustomizedMenus />
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Refer & Earn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href='#'>
                                <Button sx={{ textTransform: 'none' }} variant="contained" color="grey">
                                    Login
                                </Button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#'>
                                <Button sx={{ textTransform: 'none' }} variant="contained" color="primary">
                                    Try for free
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
