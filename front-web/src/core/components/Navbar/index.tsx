import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from 'core/assets/images/logo.svg';
import './styles.scss';

const Navbar = () => (

    <nav className="row bg-primary main-nav">
        <div className="col-4">
            <Link to="/dashboard" >
                <Logo />
            </Link>
        </div>
        <div className="col-2 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/dashboard">
                        DASHBOARD
                    </NavLink>
                </li>
                <li>
                    <Link to="/admin/timesheet/create">
                        TIMESHEET
                    </Link>
                </li>
                <li>
                    <NavLink to="/admin">
                        ADMIN
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>    


);

export default Navbar;