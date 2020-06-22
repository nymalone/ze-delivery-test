import React from 'react';

import "./styles.css";

import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <header>
            <img src={logo} alt="zé delivery logo" />
            <button>
                ENTRAR
            </button>
        </header>
    )
};

export default Header;