import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Drift</li>
                </NavLink>

                <NavLink to="/wrc" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>WRC</li>
                </NavLink>

                <NavLink to="/freeroam" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Freeroam</li>
                </NavLink>
            </ul>
            <br></br>
        </div>
    );
};

export default Navbar;