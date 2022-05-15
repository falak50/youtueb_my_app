import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    const {name}=params;
    
    const location = useLocation();
    console.log(location);
    
    console.log(name)
    return (
        <div>
            <h1>this is user name {name}</h1>
        </div>
    );
};

export default User;