import React from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const  navToPage =(url)=>{
    navigate(url)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur !</p>
            <Link to="/about">Go to About Page</Link>
            <br />
            <br />
            <button onClick={()=>navToPage('/about')}>Go to About Page</button>
            <br />
            <button onClick={()=>navToPage('/filter')}>Go to Filter Page</button>

        </div>
    );
};

export default Home;