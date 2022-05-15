import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    console.warn(searchParams.get('age'));
    console.warn(searchParams.get('city'));
    const age = searchParams.get('age');
    const city = searchParams.get('city')
    return (
        <div>
              <h1>this is filter page</h1>
              <h2>Age : {age}</h2>
              <h2>city : {city}</h2>
              <input type="text"placeholder='set text inquery params' onChange={(e)=>setSearchParams({text:e.target.value})}/>
              <button onClick={()=>setSearchParams({age:40})}>Set  age in queery button</button>
        </div>
    )
    ;
};

export default Filter;  