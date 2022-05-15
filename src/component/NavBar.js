import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
           
             <ul className='navbar'>
           
          
                  <li><NavLink className="nav-ber-link" to="/">Home</NavLink></li>

                 <li><NavLink className="nav-ber-link" to="/about">About</NavLink></li>
             
                 <li><NavLink className="nav-ber-link" to="/contact">Contact</NavLink></li>
                 <li><NavLink className="nav-ber-link" to="/filter">Filter</NavLink></li>
                 {/* <li><NavLink className="nav-ber-link" to="/login">Login</NavLink></li> */}
{/* 
                 <li><a href="/home">Home</a></li>
                 <li><a href="/About">Aout</a></li> */}
             </ul>
        </div>
    );
};

export default NavBar;