import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // Combine all navigation links for the mobile menu
    const allNavItems = (
        <>
            {/* Links A (originally on the left) */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/citizen-science">Citizen Science</Link></li>
            <li><Link to="/learning">Learning</Link></li>
            <li><Link to="/farming">Farming</Link></li>

            {/* Divider or separator for clarity in the mobile menu, if needed */}
            {/* <div className="divider my-0 h-1"></div> */}

            {/* Links B (originally on the right) */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
        </>
    );

    // Links for the left side on desktop
    const leftNavItems = (
        <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/citizen-science">Citizen Science</Link></li>
            <li><Link to="/learning">Learning</Link></li>
            <li><Link to="/farming">Farming</Link></li>
        </>
    );

    // Links for the right side on desktop
    const rightNavItems = (
        <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
        </>
    );


    return (
        <div className="navbar flex justify-between p-3 bg-base-200 shadow-md">
            {/* Start: Dropdown for Mobile / Links A for Desktop */}
            <div className="navbar-start">

                {/* 1. Mobile Dropdown Menu (only visible on small screens: <lg) */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {allNavItems}
                    </ul>
                </div>

                {/* 2. Desktop Links A (only visible on large screens: lg and up) */}
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {leftNavItems}
                </ul>
            </div>

            {/* Center: Brand Name */}
            <div className="navbar-center">
                <Link to="/" className="text-xl">🌱 PlantRadar</Link>
            </div>

            {/* End: Links B for Desktop (only visible on large screens: lg and up) */}

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {rightNavItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;