import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Loging = () => {
    const login = ()=>{
        localStorage.setItem('loging',true);
        Navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
           Navigate('/')
        }
        },[])
    return (
        <div>
            <h1>Loging Page</h1>
            <input type="text" />
            <input type="text" />
            <button onClick={login}>Login</button>

        </div>
    );
};

export default Loging;