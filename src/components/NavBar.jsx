import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function NavBar() {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
    };
    
    return (
        <div id='navbar'>
            <nav>
                <h1 id="Navbar-title">Portfolio</h1>
                <ul className={menu ? 'show' : 'hide'}>
                    <li>
                        <NavLink to='/' onClick={closeMenu}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/student' onClick={closeMenu}>Create Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' onClick={closeMenu}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' onClick={closeMenu}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' onClick={() => {
                            sessionStorage.removeItem('loggedInUser')
                            navigate('/login');
                        }}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </NavLink>
                    </li>
                </ul>
                <div id='right'>
                    <input id="checkbox" type="checkbox" onChange={toggleMenu} checked={menu} />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;