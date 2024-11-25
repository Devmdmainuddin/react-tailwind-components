import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
           <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/sevice'>sevice</Link></li>
            <li><Link to='/'>home</Link></li>
           </ul>
        </div>
    );
};

export default Navbar;