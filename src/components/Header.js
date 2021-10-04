import React from 'react';

import Menu from './Menu';

import Logo from '../images/rick_and_morty_logo.png';
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <>
            <div className="task-list__header">
                <img src={Logo} alt="" />
            </div>
            <Menu />
        </>
    );
}

export default Header;