import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, enim consequatur asperiores a ea nulla neque doloribus eaque dignissimos corporis perspiciatis voluptatum! Deserunt quasi autem repellat nulla optio nam ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae nam optio id facilis? Quis eligendi fugiat accusantium impedit! Molestiae veritatis corrupti aliquid repellat quae, dignissimos impedit adipisci consequuntur in.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa numquam quidem vero itaque. Doloribus minus hic illo necessitatibus officiis cum explicabo est, animi distinctio esse, similique voluptates deleniti temporibus?</p>
            <Link to="/">go to home page</Link>
            <li><Link to="/user/anil"  state={{name:'anil shidu',age:27}} >Anil</Link></li>
                <li><Link to="/user/pitar">Pitar</Link></li>
        </div>
    );
};

export default About;