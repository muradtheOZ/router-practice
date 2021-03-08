import React from 'react';
import { useEffect, useState } from "react";
import User from '../User/User';

const Home = () => {
    const[user,setUser] = useState([]);
    const url ='https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
       fetch(url)
      .then(res=> res.json())
      .then(data => setUser(data))
    },[]);
    return (
        <div>
        {
          user.map(user=> <User key={user.id} user ={user}></User>)
        }
      </div>
    );
};

export default Home;