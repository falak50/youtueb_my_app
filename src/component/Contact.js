import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus deleniti necessitatibus velit eligendi, rem sequi ipsam et, fugiat, animi odio aut. Adipisci, ratione esse totam animi dolorum debitis dignissimos!</h3>
            <Link to="company">Conpany</Link>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;