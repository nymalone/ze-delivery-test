import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <header>
            <Link to="/"> 
            <img src={logo} alt="zé delivery logo" />
            </Link>
            <button>
                ENTRAR
            </button>
        </header>
    )
};

export default Header;