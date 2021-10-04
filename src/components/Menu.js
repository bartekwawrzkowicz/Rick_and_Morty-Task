import React from 'react';

import '../styles/components/Menu.scss';

const Menu = () => {
    return (
        <ul className="task-list__menu">
            <li>name</li>
            <li>status</li>
            <li>species</li>
            <li>type</li>
            <li>gender</li>
            <li>image</li>
            <li>created</li>
        </ul>
    );
}

export default Menu;