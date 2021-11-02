import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>PETS STORE</h1>
            <section className="links">
               <a href="#">HOME</a>
               <a href="#">ABOUT</a>
            </section>
        </nav>
    );
};

export default Navbar;
