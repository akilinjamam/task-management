import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div style={{ width: '100vw', height: '10vh' }}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/todo'>To-Do</Link></li>
                            <li><Link to='completed'>Completed Task</Link></li>
                            <li><Link to='calender'>Calender</Link></li>
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Task Manager</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/todo'>To-Do</Link></li> */}

                        <li><Link to='calender'>Calender</Link></li>
                        <li><Link to='testTool'>auto slider</Link></li>
                        {/* <li><Link to='testToolTwo'>auto carousal</Link></li> */}
                        <li><Link to='testToolTwoV2'>auto carousal</Link></li>
                        {/* <li><Link to='testToolThree'>pagination</Link></li> */}
                        <li><Link to='testToolThreeV2'>pagination</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Nav;